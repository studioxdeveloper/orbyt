# Orbyt / My Social Life — Prosjekttidslinje

**Prosjekt:** Digital HUB for sosiale medier (Amity Net / Linda Simonsen)  
**Oppdatert:** 9. februar 2026  
**Oppstart:** Midt desember 2025 (uke 1 = ca. 16. des 2025)  
**Forutsetning:** Integrasjoner mot sosiale medier håndteres av dedikert utviklerteam

> **Integrasjonsteam:** Oppstart forskjøvet til februar (ennå ikke startet). Avventer avklaringer — forventet i løpet av uken.
>
> **Fremdrift:** Mye er gjort i oppstartsfasen (klikkbar prototype, teknologundersøkelser, krav). Det synlige leveransen kommer nå fremover.

→ **[Visuell timeline](timeline-visual.html)** — åpnes i nettleser  
→ **[Onboarding-flyt](onboarding-flow.html)** — brukeropplevelse og tankegang

---

## Oversikt

| Fase | Tidsrom | Måned | Hovedfokus |
|------|---------|-------|------------|
| **Fase 0** | Uke 1–2 | Des ʼ25 | Oppstart, arkitektur, utviklingsmiljø |
| **Fase 1** | Uke 3–8 | Jan–Feb ʼ26 | Kjerneprodukt + start integrasjoner |
| **Fase 2** | Uke 9–14 | Feb–Mar ʼ26 | Integrasjoner (prioritet) + publiseringsmotor |
| **Fase 3** | Uke 15–19 | Mar–Apr ʼ26 | Link-in-Bio, AI, ferdigstilling |
| **Fase 4** | Uke 20–22 | Apr–Mai ʼ26 | Testing, godkjenninger, lansering |

**Totalt estimert:** 22 uker (~5,5 måneder)

---

## Detaljert tidslinje

### Fase 0: Oppstart (uke 51–52 ʼ25 / 16.–29. des)
**Varighet:** 2 uker · **Gjort**

| Uke | Aktivitet | Ansvar |
|-----|-----------|--------|
| 51–52 | Klikkbar prototype (app, dashboard, link-in-bio) | STUDIO X |
| 51–52 | Teknologundersøkelser, kravspesifikasjon | Hele teamet |
| 51–52 | Prosjektoppstart, kick-off, arkitektur | Hele teamet |
| 52 | Dokumentasjon, kontrakter, retningslinjer | PM |

**Milepæler:**
- [ ] Teknisk arkitektur godkjent
- [ ] Meta og Google-kontoer opprettet
- [ ] Lokalt utviklingsmiljø fungerer

---

### Fase 1: Kjerneprodukt + integrasjonsforberedelser (uke 3–8)
**Varighet:** 6 uker

#### Kjerneteam (uke 3–8)
| Uke | Aktivitet |
|-----|------------|
| 3–4 | Auth-flow (registrering, innlogging, OAuth-ramme) |
| 3–4 | Mux-integrasjon: videoopplasting, transkodering, webhooks |
| 4–5 | Post-modell, draft-lagring, media-håndtering |
| 5–6 | Publiseringskalender (UI + backend) |
| 6–7 | Dashboard-basis, brukergrensesnitt |
| 7–8 | API-struktur, sikkerhet, rate limiting |

#### Integrasjonsteam (oppstart uke 6–7 ʼ26 / feb)
| Uke | Aktivitet | Kommentar |
|-----|-----------|------------|
| 6–7 | Meta OAuth-oppsett, Facebook Login, scope-konfigurasjon | Krever godkjenning av redirect-URLs |
| 7–8 | Meta Graph API: forbindelse til Pages, lesing av kontoer | Test-modus først |
| 8–9 | Google OAuth, YouTube Data API v3-oppsett | Scope-konfigurasjon |
| 8–9 | YouTube-quota-søknad (økning fra 10 000 enheter/dag) | Søke tidlig |
| 9–10 | Meta App Review-forberedelse (dokumentasjon, demo) | 2–4 uker svar fra Meta |
| 10 | Google OAuth Consent Verification — innsending | 2–6 uker svar fra Google |

**Milepæler:**
- [ ] Brukere kan registrere og logge inn
- [ ] Videoopplasting via Mux fungerer
- [ ] Meta OAuth kobler til Facebook-konto (test-modus)
- [ ] Google OAuth kobler til YouTube-konto (test-modus)
- [ ] Meta App Review sendt inn
- [ ] Google OAuth Consent sendt inn

**Buffer:** Integrasjonsteam har 6 uker til initiale OAuth-flows og API-tilgang. App Review / Consent kan ta 2–6 uker — derfor startes disse tidlig.

---

### Fase 2: Integrasjoner + publiseringsmotor (uke 9–14)
**Varighet:** 6 uker

#### Integrasjonsteam (uke 9–14) — **hovedfokus**
| Uke | Aktivitet | Kommentar |
|-----|-----------|------------|
| 9–10 | Meta: publisering til Facebook Pages (bilde, tekst) | Avhenger av App Review |
| 9–10 | Meta: publisering til Instagram (feed, reels) | Krever Professional-konto |
| 10–11 | YouTube: videopublisering, metadata, thumbnails | Bruk Mux MP4-renditions |
| 11–12 | Platform-specifikke valideringer (format, størrelse, hashtags) | |
| 12–13 | Feilhåndtering, retry, webhooks for status | Robust publiseringspipeline |
| 13–14 | Rate limiting, token-refresh, token-lagring | Langsiktig stabilitet |

#### Kjerneteam (uke 9–14)
| Uke | Aktivitet |
|-----|------------|
| 9–10 | Scheduler-backend: cron-jobs, kø for planlagte poster |
| 10–11 | UI for valg av plattformer per post |
| 11–12 | Real-time status per plattform (pending/published/failed) |
| 12–13 | Grunnleggende analytics (henting av tall fra API-er) |
| 13–14 | Integrasjon med publiseringsmotor (API-kontrakter) |

**Milepæler:**
- [ ] Publisering til Facebook fungerer (produksjon)
- [ ] Publisering til Instagram fungerer (produksjon)
- [ ] Publisering til YouTube fungerer (produksjon)
- [ ] Planlagte poster kjøres automatisk
- [ ] Feilmeldinger vises brukeren

**Buffer:** 6 uker til integreringsteamet sikrer tid til:
- Endringer etter App Review / Consent
- Plattform-spesifikke edge cases
- Testing og feilsøking

---

### Fase 3: Link-in-Bio, AI og ferdigstilling (uke 15–19)
**Varighet:** 5 uker

| Uke | Aktivitet | Ansvar |
|-----|-----------|--------|
| 15 | Link-in-Bio: database, API, public slug | Kjerneteam |
| 15–16 | Link-in-Bio: redigerings-UI, temaer, lenker | Kjerneteam |
| 16 | AI-assistert tekstgenerering (OpenAI/Claude API) | Kjerneteam |
| 17 | Orbit-visualisering av tilkoblede plattformer | Kjerneteam |
| 17–18 | PWA-oppgradering, offline-støtte | Kjerneteam |
| 18–19 | Integrasjonsteam: finjustering, edge cases | Integrasjonsteam |
| 18–19 | Feilretting, ytelse, UX-polering | Hele teamet |

**Milepæler:**
- [ ] Link-in-Bio side live og redigerbar
- [ ] AI-tekstgenerering fungerer
- [ ] Orbit-visualisering viser tilkoblede kontoer
- [ ] PWA installeres på mobil

---

### Fase 4: Testing, godkjenninger og lansering (uke 20–22)
**Varighet:** 3 uker

| Uke | Aktivitet |
|-----|------------|
| 20 | Fullstendig end-to-end testing |
| 20 | Sikkerhetsgjennomgang, GDPR-sjekk |
| 21 | Betatesting med Linda Simonsen / Amity Net |
| 21 | Rettelser basert på feedback |
| 22 | Produksjonslansering, overvåking |

**Milepæler:**
- [ ] Alle kritiske bugs rettet
- [ ] Privacy Policy og Terms of Service publisert
- [ ] Lansering gjennomført

---

## Gantt-oversikt (forenklet)

```
Uke    1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22
       |--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|
Fase 0 ██
Fase 1     ████████████████████████████████████████████
Fase 2                                        ████████████████████████████████████████████
Fase 3                                                                    ████████████████████████████████████
Fase 4                                                                                        ████████████████

Integr.      ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
             └── OAuth/API ──┘└────────────────── Publisering Meta/YouTube ──────────────────┘└── Finjustering ──┘
```

██ = Kjerneteam  
░░ = Integrasjonsteam (overlappende)

---

## Plattform-godkjenninger (kritisk sti)

| Plattform | Prosess | Varighet | Når starte |
|-----------|---------|----------|------------|
| **Meta** | App Review | 2–4 uker | Uke 7–8 |
| **Meta** | Business Verification (ved behov) | 1–2 uker | Etter App Review |
| **Google** | OAuth Consent Verification | 2–6 uker | Uke 7–8 |
| **YouTube** | Quota Increase | 1–2 uker | Uke 6–7 |

**Anbefaling:** Start App Review og Consent Verification i fase 1, slik at godkjenninger er på plass før eller tidlig i fase 2.

---

## Avhengigheter og risikoer

| Avhengighet | Påvirkning |
|-------------|-------------|
| Meta App Review godkjent | Kan ikke publisere til Meta i produksjon før godkjenning |
| Google OAuth godkjent | Kan ikke publisere til YouTube i produksjon |
| Mux-integrasjon | Video-pipeline avhenger av Mux |
| Integrasjonsteam kapasitet | Buffer er lagt inn for å redusere flaskehals |

**Risiko:** Forsinkelse i App Review / Consent kan skyve fase 2 med 2–4 uker. Buffer i fase 2 hjelper, men ved lengre forsinkelser kan Link-in-Bio og AI tas parallelt for å holde momentum.

---

## Oppsummering

| Område | Uker | Kommentar |
|--------|------|-----------|
| Oppstart | 2 | Arkitektur, miljø, kontoer |
| Kjerneprodukt | 12 | Auth, Mux, poster, kalender, dashboard |
| **Integrasjoner** | **14** | **OAuth, API, publisering, feilhåndtering** |
| Link-in-Bio + AI | 5 | Parallelt med slutten av integrasjoner |
| Testing + lansering | 3 | End-to-end, beta, go-live |

**Integrasjonsteamet har ca. 14 uker med fokus på OAuth, API-integrasjon og publisering**, med buffer for godkjenninger og feilsøking. Kjerneteam og integrasjonsteam jobber parallelt fra uke 3, med tyngdepunkt på integrasjoner i uke 9–14.

---

*Dokument utarbeidet for Amity Net / My Social Life — STUDIO X · februar 2026*
