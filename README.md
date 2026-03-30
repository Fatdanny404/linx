# Linx

**AI-powered universal connector and fitting identifier.**

Photo any connector, fitting, or coupling — electrical or flow — and get instant identification, specs, safety alerts, material compatibility, and sourcing links.

## What it identifies

### Electrical / Signal
- **AV / Broadcast** — XLR (Neutrik NC3/5/7, etherCON), SDI BNC (3G/12G), HDMI, DisplayPort, LEMO B/2B/3B, Fischer, Hirose HR10, SMPTE 304M fiber, Powercon, Socapex
- **Mil-spec / Industrial** — MIL-DTL-38999 (Series I–IV), MIL-DTL-5015, Amphenol MS/PT/AT, Deutsch DT/DTM/HD30, TE Superseal/Ampseal, Souriau 8STA, LEMO push-pull
- **Networking** — RJ45 (Cat5e–Cat8), SFP/SFP+/QSFP28, LC/SC/ST/MPO fiber, M12 A/B/D/X, USB-A/B/C, Thunderbolt 1–4
- **Power** — IEC C1–C23, NEMA twist-lock, Neutrik powerCON, EV (SAE J1772/CCS/CHAdeMO/NACS), solar MC4/Anderson, JST/Molex
- **Automotive** — OBD-II, Deutsch DT/DTM, FAKRA HSD, CAN bus, trailer 7-way, HV battery

### Flow / Pipe
- **Plumbing** — NPT, BSPP, BSPT, NPTF, compression, push-to-connect (SharkBite), sweat, press-fit (ProPress), PEX crimp/expansion, flare, dielectric unions
- **HVAC / Refrigerant** — SAE 45° flare, Schrader access ports, line sets, quick-connects
- **Gas line** — Black iron NPT, CSST (TracPipe/OmegaFlex), brass gas fittings, flexible appliance connectors, regulators
- **Hydraulic** — JIC 37° flare, ORFS, BSPP, SAE O-Ring Boss, NPTF, metric DIN 3852, high-pressure hose fittings
- **Pneumatic** — Push-to-connect (Festo/SMC/Parker), NPT/BSPP, quick disconnects, FRL ports
- **Medical gas** — DISS (O2/N2O/medical air/CO2/vacuum/AGSS), Puritan Bennett/Chemetron/Ohmeda quick-connects, NFPA 99
- **Sanitary / Food-grade** — Tri-clamp (1.5"–4"), DIN 11851, SMS, IDF/ISO, RJT, 304/316L SS, 3-A certified
- **Fire suppression** — Victaulic groove couplings (rigid/flexible), sprinkler heads (all ratings), NST/Storz, FDC
- **Fuel** — SAE J2044 quick-connect, AN/JIC dash fittings, banjo bolts, EFI fuel rail, marine ABYC H-24
- **Compressed gas cylinders** — Full CGA reference (CGA-540/510/580/320/300/695/660 etc.), left-hand thread rules, color coding

## Features

- **Domain-expert AI prompts** — selecting a domain gives Claude a fully written expert-level system prompt for that category before analyzing the image
- **Tiered safety alert system** — Critical, Warning, Info banners surface automatically; always triggered for gas, hydraulic, medical gas, compressed gas, and fire suppression
- **Material compatibility table** — structured yes/no/conditional output with notes per material
- **Flow path visualization** — upstream → fitting → downstream
- **Standards compliance badges** — ASME, NFPA, SAE, MIL-STD, etc.
- **Side-by-side comparison mode** — upload two images, analyze simultaneously with a compatibility verdict
- **PDF export** — full spec sheet with safety alerts, material compat, compliance, and sourcing terms
- **Shareable links** — result encoded in URL hash, no server required
- **Product search links** — click-through to Amazon with exact search terms

## How it works

Single-file HTML app. No backend, no database, no server. Calls the Anthropic Claude Vision API directly from the browser. Domain-expert system prompts are embedded client-side.

## Safety disclaimer

For gas, hydraulic, medical gas, fire suppression, and compressed gas applications — always verify identification with a licensed professional and manufacturer datasheets before making connections.

## Status

Active development. Current version: v4.

---

*Concept originated: March 2026*
