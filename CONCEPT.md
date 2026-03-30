# Linx — Concept & Prior Art Documentation

**Created:** March 30, 2026  
**Author:** Fatdanny404

---

## Core concept

A universal AI-powered identification tool for any connector, fitting, or coupling where two things need to join and picking the wrong one has consequences — ranging from signal loss to structural failure to explosion.

The insight: existing connector identifier tools are either narrowly scoped (networking only, electrical only) or too generic to be useful. Nobody has built a single tool that covers the full breadth of connectors a field technician, integrator, plumber, or engineer actually encounters — and nobody has combined that with domain-aware safety intelligence.

## The expansion insight

The product began as an electrical connector identifier (AV/broadcast, mil-spec, networking, power, automotive). The expansion insight was:

> "Anything that flows down a pipe or line that has a need for connecting" follows the same user problem as electrical connectors — you have an unknown fitting in your hand, you need to know what it is, whether it mates with what you have, and whether there are any safety implications.

This expanded the scope to all flow infrastructure: plumbing, HVAC/refrigerant, gas lines, hydraulics, pneumatics, medical gas, sanitary/food-grade, fire suppression, fuel systems, and compressed gas cylinders.

## Why this is different

### Domain-expert AI prompting
Rather than one generic prompt, each domain has a fully written expert-level system prompt that encodes deep domain knowledge before the AI sees any image. The hydraulic prompt knows JIC vs. ORFS vs. BSPP vs. SAE ORB and why confusing them at 3000 PSI is catastrophic. The compressed gas prompt has every CGA fitting number, which gases use left-hand threads and why, and the color coding standard. The medical gas prompt knows DISS port assignments for every gas type and NFPA 99 compliance requirements.

### Safety-first architecture
The system is designed around a tiered safety alert system that surfaces before specs:
- **Critical** — potentially fatal if ignored (wrong CGA fitting on O2/combustible gas, NPT/BSPT confusion on gas line, O2 line contamination with hydrocarbons)
- **Warning** — likely failure if ignored (galvanic corrosion between copper and galvanized, SAE flare vs JIC flare mix-up at pressure, CSST bonding requirements)
- **Info** — procedural notes (Teflon tape vs. pipe dope, torque specs, required adapter types)

### Material compatibility as a first-class output
For flow domains, material compatibility is a structured table output — not buried in text. Copper/galvanized, PEX-A vs PEX-B fitting systems, EPDM vs. silicone gaskets for CIP, food-grade vs. non-food-grade elastomers.

### Coverage of genuinely underserved niches
- **AV/broadcast connectors** — LEMO, Fischer, Hirose HR10, SMPTE 304M fiber — no good tools exist
- **Mil-spec circular connectors** — MIL-DTL-38999 Series I–IV, Amphenol, Deutsch, Souriau — no consumer tools exist  
- **Hydraulic thread standards** — JIC/ORFS/BSPP/SAE-ORB confusion is a known expensive field problem, no tools exist
- **Medical gas DISS fittings** — intentionally non-interchangeable, cross-connection is fatal, no public tools exist
- **CGA cylinder fittings** — full number reference with left-hand thread logic, no tools exist
- **Sanitary tri-clamp and DIN 11851** — food/pharma industry, no consumer tools exist

## Domains covered

### Electrical / Signal
- AV/Broadcast — XLR variants, SDI, HDMI, LEMO, Fischer, Hirose, SMPTE fiber, Powercon, Socapex
- Mil-spec — MIL-DTL-38999, MIL-DTL-5015, Amphenol, Deutsch, TE, Souriau, LEMO push-pull
- Networking — RJ45, SFP/QSFP, LC/SC/MPO fiber, M12, USB, Thunderbolt
- Power — IEC, NEMA, EV charging, solar, JST/Molex
- Automotive — OBD-II, Deutsch, FAKRA, CAN bus, trailer, HV battery

### Flow / Pipe
- Plumbing — NPT, BSPP, BSPT, compression, push-to-connect, sweat, press-fit, PEX, flare, dielectric unions
- HVAC/Refrigerant — SAE 45° flare, Schrader access ports, line sets, quick-connects
- Gas line — black iron NPT, CSST, brass gas, flexible appliance connectors, regulators
- Hydraulic — JIC 37°, ORFS, BSPP, SAE ORB, NPTF, metric DIN 3852, hose fittings
- Pneumatic — push-to-connect, NPT/BSPP, quick disconnects, FRL ports
- Medical gas — DISS (all types), Puritan Bennett/Chemetron/Ohmeda quick-connects, NFPA 99
- Sanitary/Food-grade — Tri-clamp, DIN 11851, SMS, IDF/ISO, RJT, 316L SS, 3-A certified
- Fire suppression — Victaulic groove couplings, sprinkler heads, NST/Storz, FDC
- Fuel — SAE J2044 quick-connect, AN/JIC dash fittings, banjo bolts, marine ABYC H-24
- Compressed gas — Full CGA fitting reference (CGA-540/510/580/320/300/695/660 etc.)

## Features

- Domain-expert AI prompts — swaps full expert context per domain before image analysis
- Tiered safety alert system — Critical/Warning/Info banners, always surfaces for dangerous domains
- Material compatibility table — structured yes/no/conditional output with notes
- Flow path visualization
- Standards/compliance badges
- Side-by-side comparison mode — dual image upload, simultaneous analysis
- PDF export — full spec sheet with safety alerts and sourcing
- Shareable links — URL hash encoded, no server required
- Product search links — click-through to Amazon with exact terms

## Technical architecture

- Single-file HTML/JS, no build step, no backend
- Anthropic Claude Vision API, base64 image encoding
- Domain-expert system prompts embedded client-side
- JSON schema enforced via prompt engineering
- jsPDF for client-side PDF generation
- URL hash encoding for shareable results
- Drag-and-drop + file input upload
- Side-by-side dual-image comparison

## Planned features (roadmap)

- Cable/adapter compatibility checker — text-based
- Wiring/pinout diagram generator — SVG output
- Build list mode — multi-connector project shopping list
- Browser extension — right-click any connector image on the web
- White-label embeddable widget for retailers and distributors
- PoE budget calculator
- Pressure drop calculator
- Pipe sizing calculator
- Mobile-native app with camera integration

---

*This document serves as prior art and concept documentation for the Linx project.*  
*Originated: March 2026*
