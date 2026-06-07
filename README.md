# Linx

**AI-powered universal connector and fitting identifier.**
Photo any connector — electrical or flow — and get instant identification, specs, safety alerts, and sourcing.

---

## Monorepo structure

```
linx/
├── mobile/          # Expo (React Native) — iOS + Android
├── api/             # Express API server — Anthropic proxy + Stripe
└── legacy/          # Original HTML prototype (connector_selector_v4.html)
```

---

## Quick start

### API server

```bash
cd api
cp .env.example .env       # fill in ANTHROPIC_API_KEY and STRIPE keys
npm install
npm run dev                # runs on :3001
```

### Mobile app

```bash
cd mobile
cp .env.example .env.local  # set EXPO_PUBLIC_API_URL
npm install
npx expo start
```

Scan the QR code in the Expo Go app on your phone.

---

## Architecture

```
Expo app (mobile)
    ↓ POST /api/analyze { image: base64, domain: string }
Express API (api/)
    ↓ Anthropic Claude Vision API  (key server-side only)
    ↓ Returns structured JSON result
```

Payments: Stripe credit packs. Users buy scan credits; each `/api/analyze` call costs 1 credit.

---

## Domains supported

**Electrical:** AV/Broadcast, Mil-spec, Networking, Power, Automotive  
**Flow:** Plumbing, HVAC, Gas line, Hydraulic, Pneumatic, Medical gas, Sanitary, Fire suppression, Fuel, Compressed gas

---

## Status

Active development. v4 HTML prototype in `legacy/`.

*Concept originated: March 2026*
