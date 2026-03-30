# Linx — Project Context for Claude

## What this is
AI-powered universal connector and fitting identifier. Photo any connector or fitting — electrical or flow — get instant ID, specs, safety alerts, material compatibility, sourcing links.

## Repo
github.com/Fatdanny404/linx

## Current state (as of March 30, 2026)
- v4 HTML app is built and uploaded to the repo (`app/index.html`)
- README.md and CONCEPT.md are in the repo (prior art documentation, timestamped)
- App calls Anthropic Claude Vision API directly from the browser
- No backend, no auth, no API key protection — NOT safe to ship publicly yet

## What's working in v4
- 16 domain buttons (Electrical row: Any/AV/Mil-spec/Networking/Power/Automotive | Flow row: Plumbing/HVAC/Gas/Hydraulic/Pneumatic/Medical gas/Sanitary/Fire suppression/Fuel/Compressed gas)
- Each domain swaps a full expert-level system prompt before image analysis
- Single identify mode + side-by-side compare mode (dual image upload)
- Tiered safety alert system (Critical/Warning/Info) — always fires for dangerous domains
- Material compatibility table (flow domains)
- Flow path visualization
- Standards/compliance badges
- PDF export (jsPDF, client-side)
- Shareable links (URL hash encoded)
- Amazon product search chips

## The critical blocker before going public
API key is currently exposed in client-side code. Any user who views source can steal it and bill your account. Need a backend proxy before any public launch.

## Backend proxy plan (next session)
Architecture: Phone/browser → proxy server → Anthropic API (key lives server-side only)
Options:
1. n8n webhook on existing server (192.168.1.12:5678) — fastest, already running
2. Simple Node.js or Python script on a $5 VPS
3. Cloudflare Worker — free tier, no server needed

Proxy is ~20 lines of code. Once it exists, the rest of the monetization stack can be built on top of it.

## Monetization directions (priority order)
1. Freemium SaaS — 5 free IDs, then $5-10/mo via Stripe (requires proxy first)
2. White-label widget — sell to AV retailers, plumbing suppliers, hydraulic distributors ($200-500/mo per customer)
3. Amazon affiliate links — already in the app, just need Associates account and tagged URLs
4. Content funnel — Marcus Webb posts drive traffic to free tool, freemium gate converts

## PWA / mobile
- GitHub Pages would host it free (fatdanny404.github.io/linx)
- manifest.json + service worker = installable PWA, home screen icon, fullscreen
- DO NOT make public until proxy is live and API key is protected

## Next session goals
1. Build the backend proxy (pick one: n8n / VPS Node / Cloudflare Worker)
2. Update app to hit proxy instead of Anthropic directly
3. Add free use counter (localStorage, 5 free, then gate)
4. Set up GitHub Pages
5. Push manifest.json for PWA install

## Tech stack
- Frontend: vanilla HTML/CSS/JS, single file
- API: Anthropic claude-sonnet-4-20250514, Vision, max_tokens 2500
- PDF: jsPDF via CDN
- Current hosting: none (local only)
- Planned hosting: GitHub Pages (static) + VPS or Cloudflare for proxy
- Existing infrastructure: n8n at 192.168.1.12:5678, Raspberry Pi honeypot at 192.168.1.13
