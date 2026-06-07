const router = require('express').Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Create a checkout session for credit packs
router.post('/checkout', async (req, res) => {
  const { pack } = req.body; // 'starter' | 'pro' | 'unlimited'

  const packs = {
    starter:   { name: '25 Scans',    amount: 499,  credits: 25  },
    pro:       { name: '100 Scans',   amount: 1499, credits: 100 },
    unlimited: { name: 'Unlimited',   amount: 2999, credits: 9999 },
  };

  const selected = packs[pack];
  if (!selected) return res.status(400).json({ error: 'Invalid pack' });

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: { name: `Linx — ${selected.name}` },
          unit_amount: selected.amount,
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: `${process.env.ALLOWED_ORIGINS.split(',')[0]}/success?credits=${selected.credits}`,
      cancel_url: `${process.env.ALLOWED_ORIGINS.split(',')[0]}/cancel`,
      metadata: { credits: selected.credits },
    });

    res.json({ url: session.url });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Stripe webhook — fulfillment
router.post('/webhook', (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const credits = session.metadata.credits;
    // TODO: store credits against user/device ID
    console.log(`Fulfilled ${credits} credits for session ${session.id}`);
  }

  res.json({ received: true });
});

module.exports = router;
