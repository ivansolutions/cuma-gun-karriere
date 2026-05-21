# Cuma Gün Kuriertransporte e.K. — Karriere-Landingpage

Demo-Version v0.4 für die Cuma Gün Karriere-Seite.

## Live-Demo

→ **https://USERNAME.github.io/cuma-gun-karriere/**

(Link wird nach Aktivierung von GitHub Pages aktiv — siehe unten)

## Status

- **Stand:** Demo-Version zur Abstimmung mit dem Geschäftsführer
- **Inhalte:** Mitarbeitergeschichten, juristische Texte, Sozial-Links — alles Platzhalter
- **Nächste Schritte:** Feedback einsammeln, dann Inhalte und Mobile-Polish finalisieren

## Technisch

- Reine HTML + CSS + JavaScript (vanilla, keine Frameworks)
- Zwei Dateien: `index.html` + `app.js`
- 4 Sprachen: DE / RU / RO / TR (Übersetzungen sind AI-generiert, müssen von Muttersprachler:innen geprüft werden)
- DSGVO-Cookie-Banner mit Kategorie-Toggles
- Eingebettete Google Maps für beide Standorte
- Modal-Dialoge für Mitarbeitergeschichten und Rechtliches
- Mobile responsive (Polish steht noch aus)

## Lokales Testen

```bash
# Python 3
python3 -m http.server 8000

# oder Node.js
npx serve .

# dann öffnen: http://localhost:8000
```

Direkt-Öffnen der `index.html` per Doppelklick funktioniert NICHT zuverlässig
(file://-Protokoll blockiert manche Browser-APIs).
