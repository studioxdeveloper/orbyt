# Orbyt

> Digital HUB for sosiale medier — publiseringsplattform for influencere og SMB-er.

**Amity Net** · App for Linda Simonsen

## Prosjektoversikt

Orbyt er en plattform som lar deg:

- ✅ Publisere innhold til flere sosiale medier fra ett sted (Instagram, Facebook, LinkedIn, YouTube, TikTok, X)
- ✅ Planlegge innlegg med publiseringskalender
- ✅ Administrere Link-in-Bio landing page
- ✅ Bruke AI-assistert tekstgenerering
- ✅ Se Orbit-visualisering av tilkoblede plattformer

## Innhold

| Mappe | Beskrivelse |
|-------|-------------|
| `prototype/` | Klikkbar HTML-prototype (app, dashboard, linkinbio) |
| `docs/` | Dokumentasjon, kravspesifikasjon, samarbeidsguide |
| `Avtale/` | Kontrakter og avtaler |
| `CONTEXT.md` | Prosjektkontekst og STUDIO X skills |

## Subdomener (Vercel)

Hver prototype har eget subdomene via `vercel.json`:

| Subdomene | Innhold |
|-----------|---------|
| `app.*` | Mobil app (`app.html`) |
| `dashboard.*` | Web dashboard (`dashboard.html`) |
| `linkinbio.*` | Link-in-Bio side (`linkinbio.html`) |

**Sett opp:** Legg til domenene i Vercel prosjektinnstillinger (f.eks. `app.orbyt.no`, `dashboard.orbyt.no`, `linkinbio.orbyt.no`).

## Prototype

Åpne prototypene i `prototype/`:

```bash
open prototype/app.html      # Mobil app
open prototype/dashboard.html # Web dashboard
open prototype/linkinbio.html # Link-in-Bio side
```

## Tech Stack (planlagt)

- **Frontend**: PWA med React, Vite, shadcn/ui, Tailwind
- **Backend**: Convex eller Supabase
- **Skills**: functional-spec, spec-agent, scaffold-pwa

---

*STUDIO X · 2026*
