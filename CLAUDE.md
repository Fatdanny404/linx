# CLAUDE.md — Linx Project
# This file is auto-loaded by Claude Code CLI at session start.
# Agents: read this completely before touching anything.

## RULES — Non-negotiable
1. Read this file completely before acting
2. State assumptions before writing code
3. Touch only what the mission requires — nothing else
4. If unclear → write question to `C:\mainroom\New.Brain\000 raw-dump\QUESTIONS.md` and stop
5. No features beyond what was asked
6. Every changed line must trace to the mission objective
7. PRs only — never push to main directly

## What Linx Is
AI-powered universal connector/fitting identifier.
Photo any connector → get ID, specs, safety alerts, compatibility, sourcing links.
16 domain buttons, expert system prompts per domain, single + compare mode.

## Current State
- v4 HTML app: `connector_selector_v4.html` (single file, vanilla JS)
- API: Anthropic Vision (claude-sonnet-4-20250514), called directly from browser
- **CRITICAL BLOCKER:** API key exposed in client-side code — do NOT make public yet
- No backend, no auth, no proxy

## Stack
- Frontend: vanilla HTML/CSS/JS (single file)
- Planned backend: proxy (n8n webhook OR Cloudflare Worker OR Node VPS)
- Planned hosting: GitHub Pages
- Existing infra: n8n @ 192.168.1.12:5678

## Priority Order
1. Build backend proxy (API key protection) — pick: n8n / Cloudflare Worker / Node
2. Update app to hit proxy instead of Anthropic directly
3. Free use counter (localStorage, 5 free → gate)
4. GitHub Pages deploy + PWA manifest
5. Stripe freemium gate ($5-10/mo)

## Active Mission
Check `.aiops/MISSION.md` if present — that is your specific task.
If no mission file: ask before proceeding.

## Key Paths (owner's machine)
- Vault: `C:\mainroom\New.Brain\`
- AIOPS context: `C:\mainroom\New.Brain\CONTEXT.md`
- Full protocol: `C:\mainroom\New.Brain\PROTOCOL.md`
- Dispatcher: `C:\mainroom\AI\agents\dispatcher\`

## Before Writing Any Code — Answer These
1. What am I about to do? (plain English)
2. What are my assumptions? (list them)
3. What is my success criteria? (Step → verify)
4. What will I NOT touch?

Cannot answer all 4? → QUESTIONS.md and stop.
