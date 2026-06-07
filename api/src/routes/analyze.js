const router = require('express').Router();
const Anthropic = require('@anthropic-ai/sdk');
const { getSystemPrompt } = require('../prompts');

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

router.post('/', async (req, res) => {
  const { image, domain = 'auto' } = req.body;

  if (!image) {
    return res.status(400).json({ error: 'image is required' });
  }

  const systemPrompt = getSystemPrompt(domain);

  try {
    const response = await client.messages.create({
      model: 'claude-opus-4-5-20251101',
      max_tokens: 1024,
      system: systemPrompt,
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'image',
              source: { type: 'base64', media_type: 'image/jpeg', data: image },
            },
            {
              type: 'text',
              text: 'Identify this connector or fitting. Respond ONLY with valid JSON matching the schema in your system prompt.',
            },
          ],
        },
      ],
    });

    const raw = response.content[0].text;
    const clean = raw.replace(/```json|```/g, '').trim();
    const parsed = JSON.parse(clean);

    return res.json(parsed);
  } catch (err) {
    console.error('Analyze error:', err);
    return res.status(500).json({ error: 'Analysis failed', detail: err.message });
  }
});

module.exports = router;
