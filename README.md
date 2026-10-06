# Cuma Gün – Kuriertransporte e. K. — Karriere-Website

Karriere- und Bewerbungsseite für Cuma Gün – Kuriertransporte e. K.
(Nürnberg und Crailsheim), Servicepartner von United Parcel Service seit
September 1995. Sprache der Website: ausschließlich Deutsch.

Zieladresse: `https://www.guen-transporte.de/`

## Installation – Checkliste

1. **Alte Website entfernen.** Das DocumentRoot von `guen-transporte.de`
   leeren. Wichtig: die alte Startseite liegt dort derzeit als `index.htm`
   und hätte sonst je nach `DirectoryIndex` Vorrang vor der neuen
   `index.html`.
2. **Dateien hochladen.** Den **Inhalt** des Ordners `website/` ins
   DocumentRoot laden (nicht den Ordner selbst). Alle Pfade sind relativ;
   die Seite funktioniert auch in einem Unterordner oder auf einer Subdomain.
3. **HTTPS.** Zertifikat für `guen-transporte.de` **und**
   `www.guen-transporte.de`; Weiterleitung 301 von `http://` auf `https://`
   und von der Adresse ohne `www` auf `https://www.guen-transporte.de/`.
   Ohne HTTPS das Formular nicht freigeben: Die Datenschutzerklärung sagt
   eine verschlüsselte Übertragung zu.
4. **PHP für das Formular.** PHP ab 7.4 mit `openssl`. Grenzen mindestens:
   `upload_max_filesize = 10M`, `post_max_size = 12M`,
   `max_file_uploads = 20`, `memory_limit = 128M`; bei nginx zusätzlich
   `client_max_body_size 12m;`.
5. **Versand einrichten** (siehe „Bewerbungsformular“). Ohne
   `bewerbung-config.php` mit gültigem Absender versendet das Formular
   **nichts**: Der Bewerber sieht dann einen Hinweis mit der
   E-Mail-Adresse des Standorts.
6. **Testbewerbung je Standort** mit einem Anhang von etwa 5 MB senden und
   prüfen: Posteingang, Junk-E-Mail, Quarantäne in Microsoft 365
   (security.microsoft.com), PHP-Fehlerlog.
7. **Empfohlen:** `Cache-Control: no-cache` für `*.html`, damit Besucher
   nach Änderungen sofort die neue Fassung sehen.

## Aufbau

```
index.html                     Startseite: Arbeitstag, Stellen, Team, FAQ,
                               Bewerbungsformular, Standorte, Rechtstexte
ueber-uns.html                 Zweite Seite: Unternehmensporträt
app.js                         Texte, Team-Daten, Modale, Formularlogik, Karten
bewerbung.php                  Versand des Bewerbungsformulars per E-Mail
bewerbung-config.beispiel.php  Vorlage für die Versand-Einstellungen
robots.txt, sitemap.xml        Angaben für Suchmaschinen
fonts/                         selbst gehostete Schriften mit Lizenzdateien
images/, images/team/          Fotos der Standorte und des Teams
```

Kein Build-Schritt, kein Framework, keine Datenbank, keine Fremddienste.

## Bewerbungsformular

Das Formular sendet an `bewerbung.php`. Das Skript schickt jede Bewerbung
samt Anhängen (PDF, Word, Fotos JPG/PNG/HEIC, zusammen max. 10 MB) als
E-Mail an das Postfach des gewählten Standorts:

| Standort   | Postfach                                  |
|------------|-------------------------------------------|
| Nürnberg   | `nuernberg-bewerbung@guen-transporte.de`  |
| Crailsheim | `crailsheim-bewerbung@guen-transporte.de` |

Der Browser bestimmt den Empfänger nicht; die Adressen stehen im Skript
bzw. in `bewerbung-config.php`. Ändern sich die Postfächer, auch die auf der
Seite angezeigten Adressen in `index.html`, `ueber-uns.html` und `app.js`
anpassen. „Antworten“ in der E-Mail geht direkt an den Bewerber.

**Einstellungen.** `bewerbung-config.beispiel.php` als
`bewerbung-config.php` kopieren und ausfüllen. Das Skript sucht die Datei
zuerst **eine Ebene über dem DocumentRoot** (empfohlen, dann ist sie aus dem
Web nicht erreichbar) und danach im selben Ordner wie `bewerbung.php`.
Liegt sie im DocumentRoot, den Webzugriff sperren und keine
Sicherungskopien (`.bak`, `~`) dort ablegen:

```
# Apache
<Files "bewerbung-config*">
    Require all denied
</Files>

# nginx
location ~ /bewerbung-config { deny all; }
```

Rechte der Datei: lesbar nur für den Webserver-Benutzer (640 oder 600).
Sie enthält Zugangsdaten: nicht ins Git, nicht weitergeben.

**Versandwege mit Microsoft 365** (Postfächer von `guen-transporte.de`
liegen bei Microsoft 365; SPF erlaubt nur `spf.protection.outlook.com`):

* **Empfohlen: Direct Send oder SMTP-Relay-Connector.** `smtp.host` =
  MX der Domain (`guentransporte-de01b.mail.protection.outlook.com`),
  Port 25, `sicherheit` = `tls`, `benutzer` leer, `absender` z. B.
  `bewerbung@guen-transporte.de`. Die IP-Adresse des Webservers in den
  SPF-Eintrag aufnehmen bzw. im Connector freigeben; ausgehender Port 25
  muss beim Hoster offen sein.
* **SMTP AUTH** (`smtp.office365.com`, Port 587, `tls`, Benutzer und
  Passwort eines lizenzierten Postfachs): nur möglich, wenn SMTP AUTH im
  Tenant und für das Postfach erlaubt ist (bei aktivierten Security
  Defaults ist es gesperrt). Weicht `absender` vom Benutzer ab, braucht
  das Postfach „Senden als“. Microsoft hat angekündigt, die Anmeldung per
  Passwort für SMTP AUTH ab Ende 2026 standardmäßig abzuschalten
  (Message Center MC786329) – für den Dauerbetrieb daher Direct Send bzw.
  Connector wählen.
* **PHP `mail()`** (kein `smtp.host`): nur mit gesetztem `absender` und
  einem Mailserver, dessen Absender-IP im SPF steht; sonst landen E-Mails
  bei Microsoft 365 in Junk oder Quarantäne.

**Schutz.** Nur Absendungen von der eigenen Website (Prüfung des
`Origin`-Headers); unsichtbares Feld `_honey` gegen Bots; höchstens
5 Bewerbungen je IP-Adresse in 10 Minuten (dafür speichert das Skript nur
einen Hashwert der IP-Adresse mit Zeitpunkten, höchstens eine Stunde lang;
Ordner einstellbar über `sperrordner`); Dateiendung, Dateianfang und
Gesamtgröße werden geprüft; Zeilenumbrüche in Feldern werden entfernt.

**Fehlersuche.** Scheitert der Versand, bekommt der Bewerber einen Hinweis
mit der Bewerbungsadresse, und das Skript schreibt die Ursache ins
PHP-Fehlerlog (ohne Zugangsdaten).

## Suchmaschinen und Adressen

Die Seiten sind für Suchmaschinen freigegeben. `canonical`, `og:url` und
`og:image` beider Seiten sowie `robots.txt` und `sitemap.xml` verweisen auf
`https://www.guen-transporte.de/`. Bei einem Wechsel der Hauptadresse alle
diese Stellen gemeinsam ändern. Wird die Seite vorab unter einer anderen
Adresse getestet, dort per Server-Header `X-Robots-Tag: noindex` sperren.

## Datenschutz

* Keine Cookies, kein localStorage, kein Tracking, daher kein Cookie-Banner.
* Schriften werden selbst ausgeliefert (`fonts/`), keine Verbindung zu
  Google Fonts oder einem CDN.
* Die Standortkarten (Google Maps) laden erst nach Klick auf
  „Interaktive Karte laden“; vorher verlässt kein Request den Browser.
* Alle Personenfotos sind mit Einwilligung der abgebildeten Personen
  veröffentlicht. Scheidet eine Person aus dem Unternehmen aus, ist ihre
  Karte zu entfernen.

## Rechtstexte

Impressum, Datenschutzerklärung, AGB und Barrierefreiheitserklärung liegen
als einzige Kopie in `index.html` (`#legal-imprint-body`,
`#legal-privacy-body`, `#legal-agb-body`, `#legal-a11y-body`) und werden in
einem Fenster angezeigt. `ueber-uns.html` verlinkt auf
`index.html#impressum` usw.; `app.js` öffnet anhand der Adresse das passende
Fenster. Texte deshalb nur an dieser einen Stelle ändern.

## Schriften

| Familie     | Lizenz                        | Lizenzdatei                |
|-------------|-------------------------------|----------------------------|
| Geist       | SIL OFL 1.1 (© Vercel)        | `fonts/OFL-Geist.txt`      |
| Geist Mono  | SIL OFL 1.1 (© Vercel)        | `fonts/OFL-Geist.txt`      |
| Inter Tight | SIL OFL 1.1 (© R. Andersson)  | `fonts/OFL-InterTight.txt` |

## Rechte

Gestaltung und Code: IVAN HQ. Inhalte, Fotos und Firmenangaben:
Cuma Gün – Kuriertransporte e. K.
