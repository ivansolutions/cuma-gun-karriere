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

Die Schriften werden über `fetch` geladen und brauchen einen echten Server —
ein Doppelklick auf `index.html` (file://) zeigt Ersatzschriften.

## Datenschutz

* **Keine Cookies, kein localStorage, kein Tracking.** Es gibt keinen
  Cookie-Banner, weil nichts gespeichert wird.
* **Schriften werden selbst ausgeliefert** (`fonts/`). Es besteht keine
  Verbindung zu Google Fonts oder einem anderen CDN.
* **Karten laden erst nach ausdrücklicher Zustimmung.** Die beiden
  Standortkarten sind durch eine Platzhalterfläche mit der Schaltfläche
  „Interaktive Karte laden" ersetzt. Erst ein Klick setzt `src` auf die
  Karten-URL; vorher verlässt kein Request den Browser.
* Alle Personenfotos sind mit Einwilligung der abgebildeten Personen
  veröffentlicht. Scheidet eine Person aus dem Unternehmen aus, ist ihre
  Karte zu entfernen.

## Schriften

| Familie     | Lizenz                        | Lizenzdatei                |
|-------------|-------------------------------|----------------------------|
| Geist       | SIL OFL 1.1 (© Vercel)        | `fonts/OFL-Geist.txt`      |
| Geist Mono  | SIL OFL 1.1 (© Vercel)        | `fonts/OFL-Geist.txt`      |
| Inter Tight | SIL OFL 1.1 (© R. Andersson)  | `fonts/OFL-InterTight.txt` |

Variable Fonts, Gewichtsbereich 100–900, je eine Datei pro Schnitt.
Inter Tight ist auf Latin und Latin Extended reduziert.

## Vor dem Livegang zu erledigen

1. **TLS-Zertifikat.** Die Domain `guen-transporte.de` antwortet derzeit nur
   über HTTP; der Browser meldet „Nicht sicher". Die Datenschutzerklärung
   sagt dagegen zu, dass die Übertragung SSL/TLS-verschlüsselt erfolgt. Vor
   der Umstellung muss ein Zertifikat für `guen-transporte.de` **und**
   `www.guen-transporte.de` vorliegen und HTTPS erzwungen werden.
2. **Suchmaschinen.** Die Seiten sind für Suchmaschinen freigegeben
   (kein `noindex`). `robots.txt` und `sitemap.xml` verweisen auf
   `https://www.guen-transporte.de/`. Wird die Seite vorab unter einer
   anderen Adresse getestet, dort per Server-Header
   `X-Robots-Tag: noindex` sperren.
3. **Hauptadresse festlegen.** Im `<head>` beider Seiten stehen `og:url`,
   `canonical` und `og:image` auf `https://www.guen-transporte.de/`. Die
   Variante ohne `www` sollte per 301 dorthin weiterleiten. Bei einem
   Wechsel der Hauptadresse sind alle drei Angaben je Seite gemeinsam zu
   ändern.
4. **Bewerbungsformular einrichten.** `bewerbung-config.php` mit dem
   Postfach-Zugang anlegen (siehe unten) und eine Testbewerbung je Standort
   senden.

## Bewerbungsformular

Das Formular sendet an `bewerbung.php` im selben Ordner. Das Skript schickt
jede Bewerbung samt Anhängen (PDF, Word, Fotos JPG/PNG/HEIC, zusammen max.
10 MB) als E-Mail an das Postfach des gewählten Standorts:

| Standort   | Postfach                                  |
|------------|-------------------------------------------|
| Nürnberg   | `nuernberg-bewerbung@guen-transporte.de`  |
| Crailsheim | `crailsheim-bewerbung@guen-transporte.de` |

Keine Fremddienste, keine Bibliotheken, keine Datenbank; auf dem Server wird
nichts gespeichert. Antwort auf die E-Mail geht direkt an den Bewerber.

**Voraussetzungen auf dem Server**

* PHP ab 7.4 (getestet mit 8.3) mit `openssl`.
* Upload-Grenzen mindestens: `upload_max_filesize = 10M`,
  `post_max_size = 12M`, bei nginx zusätzlich `client_max_body_size 12m;`.

**Postfach-Zugang**

`bewerbung-config.beispiel.php` als `bewerbung-config.php` kopieren und
SMTP-Zugang eintragen. Empfohlen ist ein Postfach der eigenen Domain, z. B.
über Microsoft 365 (`smtp.office365.com`, Port 587, `tls`; SMTP AUTH muss für
das Postfach freigeschaltet sein). Ohne SMTP-Angaben versendet der Server über
`mail()`; da `guen-transporte.de` per SPF nur Microsoft 365 als Absender
zulässt, landen solche E-Mails aber wahrscheinlich im Spam.
`bewerbung-config.php` enthält ein Passwort: nicht ins Git, nicht weitergeben.

**Schutz**: unsichtbares Feld `_honey` gegen Bots; höchstens 5 Bewerbungen je
IP-Adresse in 10 Minuten; Dateityp und Gesamtgröße werden im Browser und im
Skript geprüft; Empfänger stehen nur im Skript, nicht im Browser.

**Fehlersuche**: Scheitert der Versand, bekommt der Bewerber einen Hinweis mit
der Bewerbungsadresse, und das Skript schreibt die Ursache ins PHP-Fehlerlog
(ohne Zugangsdaten).

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
Font License 1.1, siehe die Lizenzdateien in `fonts/`.
