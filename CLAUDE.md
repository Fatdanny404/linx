# Linx Claude Code context

## Stack
- **Mobile**: Expo SDK 52, React Native, expo-router (file-based nav), TypeScript
- **API**: Node.js + Express, Anthropic SDK, Stripe
- **State**: Zustand + AsyncStorage

## Key files
- `mobile/app/` — screens (expo-router)
- `mobile/src/api/analyze.ts` — API client
- `mobile/src/components/` — shared components
- `mobile/src/store/history.ts` — scan history (Zustand)
- `mobile/src/constants/domains.ts` — domain list
- `api/src/index.js` — Express entry
- `api/src/routes/analyze.js` — Anthropic proxy
- `api/src/routes/stripe.js` — payments
- `api/src/prompts.js` — domain-expert system prompts

## Conventions
- All API calls go through `api/` — NEVER call Anthropic directly from mobile
- Images passed as base64 strings
- API always returns the JSON schema defined in prompts.js
- Keep prompts in `api/src/prompts.js` — one function `getSystemPrompt(domain)`
- Mobile screens in `mobile/app/` only; business logic in `mobile/src/`
