require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const analyzeRouter = require('./routes/analyze');
const stripeRouter = require('./routes/stripe');

const app = express();
const PORT = process.env.PORT || 3001;

// Security
app.use(helmet());
app.use(cors({
  origin: (process.env.ALLOWED_ORIGINS || '').split(','),
  credentials: true,
}));

// Stripe webhook needs raw body — mount before json parser
app.use('/api/stripe/webhook', express.raw({ type: 'application/json' }));
app.use(express.json({ limit: '10mb' })); // base64 images are large

// Rate limiting
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 20, // 20 req/min per IP
  message: { error: 'Too many requests' },
});
app.use('/api/', limiter);

// Routes
app.use('/api/analyze', analyzeRouter);
app.use('/api/stripe', stripeRouter);

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => console.log(`Linx API running on :${PORT}`));
