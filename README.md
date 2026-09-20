# Cuma Gün – Kuriertransporte e. K. — Karriere-Website

Statische Karriere- und Bewerbungsseite für Cuma Gün – Kuriertransporte e. K.
(Nürnberg und Crailsheim), Servicepartner von United Parcel Service seit
September 1995.

Sprache der Website: ausschließlich Deutsch.

## Aufbau

```
index.html        Startseite: Hero, Arbeitstag, Stellen, Team, FAQ,
                  Bewerbungsformular, Standorte, Rechtstexte (in Modalen)
ueber-uns.html    Zweite Seite: Unternehmensporträt
app.js            Texte, Team-Daten, Modale, Formularlogik, Karten-Consent
fonts/            selbstgehostete Schriften (Geist, Geist Mono, Inter Tight)
images/           Fotos der Standorte und des Arbeitsalltags
images/team/      Porträts und Gruppenaufnahmen
```

Kein Build-Schritt, kein Framework, keine Abhängigkeiten: reines
HTML / CSS / JavaScript. Die Seite läuft aus jedem Verzeichnis, das die
Dateien unverändert ausliefert.

Lokal ansehen:

```
python3 -m http.server 8000
```

## Datenschutz

* **Keine Cookies, kein localStorage, kein Tracking.** Es gibt keinen
  Cookie-Banner, weil nichts gespeichert wird.
* **Schriften werden selbst ausgeliefert** (`fonts/`). Es besteht keine
  Verbindung zu Google Fonts oder einem anderen CDN.
* **Karten laden erst nach ausdrücklicher Zustimmung.** Die beiden
  Standortkarten sind durch eine Platzhalterfläche mit der Schaltfläche
  „Interaktive Karte laden“ ersetzt. Erst ein Klick setzt `src` auf die
  Karten-URL; vorher verlässt kein Request den Browser.
* Alle Personenfotos sind mit Einwilligung der abgebildeten Personen
  veröffentlicht. Scheidet eine Person aus dem Unternehmen aus, ist ihre
  Karte zu entfernen.

## Schriften

| Familie     | Lizenz                        | Datei                                |
|-------------|-------------------------------|--------------------------------------|
| Geist       | SIL OFL 1.1 (© Vercel)        | `fonts/OFL-Geist.txt`                |
| Geist Mono  | SIL OFL 1.1 (© Vercel)        | `fonts/OFL-Geist.txt`                |
| Inter Tight | SIL OFL 1.1 (© R. Andersson)  | `fonts/OFL-InterTight.txt`           |

Variable Fonts, je eine Datei pro Schnitt, Gewichtsbereich 100–900.
Inter Tight ist auf Latin und Latin Extended reduziert.

## Vor dem Livegang zu erledigen

1. **`noindex` entfernen.** Beide Seiten tragen derzeit
   `<meta name="robots" content="noindex, nofollow">`. Das Tag darf erst am
   Tag der Domain-Umstellung entfernt werden — vorher würden Suchmaschinen
   die Vorschauadresse indexieren und es entstünden zwei Adressen mit
   demselben Inhalt.
2. **Domain-gebundene URLs prüfen.** Im `<head>` von `index.html` stehen vier
   Angaben mit fester Domain (`og:url`, `canonical`, `og:image` und die
   Bildmaße). Sie sind auf `https://guen-transporte.com/` gesetzt und müssen
   bei einem Domainwechsel gemeinsam geändert werden.
3. **Bewerbungsformular anbinden.** Das Formular führt derzeit keine
   Übertragung aus: nach dem Absenden erscheint nur ein Hinweis, die
   Unterlagen vorerst per E-Mail zu senden. Ein serverseitiger Empfang samt
   Dateiupload (`Lebenslauf`, `Zeugnisse`) steht noch aus; die
   Empfängerlogik nach Standort liegt in `app.js` (`resolveRecipients`).
   Sobald übertragen wird, ist die Datenschutzerklärung um die Beschreibung
   dieser Verarbeitung zu ergänzen.

## Rechtstexte

Impressum, Datenschutzerklärung, AGB und Barrierefreiheitserklärung liegen
als einzige Kopie in `index.html` (`#legal-imprint-body`,
`#legal-privacy-body`, `#legal-agb-body`, `#legal-a11y-body`) und werden in
einem Modal angezeigt. `ueber-uns.html` verlinkt auf `index.html#impressum`
usw.; `app.js` öffnet anhand des Hashes das passende Modal. Texte deshalb
nur an dieser einen Stelle ändern.

## Rechte

Gestaltung und Code: IVAN HQ. Inhalte, Fotos und Firmenangaben:
Cuma Gün – Kuriertransporte e. K. Die Schriften stehen unter der SIL Open
Font License 1.1, siehe die beiliegenden Lizenzdateien in `fonts/`.
