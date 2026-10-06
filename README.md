# Cuma Gün – Kuriertransporte e. K. — Karriere-Website

Karriere- und Bewerbungsseite für Cuma Gün – Kuriertransporte e. K.
(Nürnberg und Crailsheim), Servicepartner von United Parcel Service seit
September 1995. Sprache der Website: ausschließlich Deutsch.

Zieladresse: `https://www.guen-transporte.de/`

## Installation – Checkliste

1. **Alte Website sichern, dann entfernen.** Zuerst das komplette
   DocumentRoot von `guen-transporte.de` als Archiv sichern (Rückweg, siehe
   „Aktualisierung und Rückweg“). Dann leeren. Wichtig: die alte Startseite
   liegt dort derzeit als `index.htm` und hätte sonst je nach
   `DirectoryIndex` Vorrang vor der neuen `index.html`. Alte Lesezeichen
   per 301 weiterleiten: `/index.htm` → `/`.
2. **Dateien hochladen.** Den **Inhalt** des Ordners `website/` ins
   DocumentRoot laden (nicht den Ordner selbst). Alle Pfade sind relativ;
   die Seite funktioniert auch in einem Unterordner oder auf einer Subdomain.
3. **HTTPS.** Zertifikat für `guen-transporte.de` **und**
   `www.guen-transporte.de`; Weiterleitung 301 von `http://` auf `https://`
   und von der Adresse ohne `www` auf `https://www.guen-transporte.de/`.
   Ohne HTTPS das Formular nicht freigeben: Die Datenschutzerklärung sagt
   eine verschlüsselte Übertragung zu. `bewerbung.php` nimmt deshalb
   Bewerbungen nur über HTTPS an (`nur_https`), die Seite sendet über
   `http://` gar nicht erst. Empfohlen, sobald HTTPS stabil läuft:
   `Strict-Transport-Security: max-age=31536000`.
4. **PHP für das Formular.** PHP ab 7.4 mit `openssl`. Grenzen mindestens:
   `upload_max_filesize = 10M`, `post_max_size = 12M`,
   `max_file_uploads = 20`, `memory_limit = 128M`; bei nginx zusätzlich
   `client_max_body_size 12m;`.
5. **Versand einrichten** (siehe „Bewerbungsformular“). Ohne
   `bewerbung-config.php` mit gültigem Absender versendet das Formular
   **nichts**: Der Bewerber sieht dann einen Hinweis mit E-Mail-Adresse und
   Telefonnummer des Standorts. `absender` muss eine **existierende**
   Adresse der Domain sein (Postfach, freigegebenes Postfach oder Alias),
   damit Rückläufer nicht verloren gehen.
6. **Testbewerbung je Standort** über die fertige Website (nicht nur per
   Testskript) mit einem Anhang von etwa 5 MB senden und prüfen:
   Posteingang, Junk-E-Mail, Quarantäne in Microsoft 365
   (security.microsoft.com), Nachrichtenablaufverfolgung im Exchange Admin
   Center, PHP-Fehlerlog (dort steht je Bewerbung eine Zeile „gesendet …“
   mit Message-ID). Erst danach die Seite freigeben.
7. **Zuständigkeit festhalten:** Wer bei ESB ist Ansprechpartner für das
   Formular, wer liest das PHP-Fehlerlog, und wer ändert den Versandweg,
   wenn Microsoft Einstellungen ändert (siehe unten)?
8. **Empfohlen:** `Cache-Control: no-cache` für `*.html`, damit Besucher
   nach Änderungen sofort die neue Fassung sehen. `app.js` und
   `fonts/fonts.css` werden mit `?v=Datum` eingebunden; nach einer Änderung
   dieser Dateien die Zahl in beiden HTML-Dateien erhöhen.

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

**Texte ändern:** Sichtbare Texte mit `data-i18n="…"` stehen zweimal – im
HTML und im Wörterbuch `T.de` in `app.js`, das beim Laden die HTML-Texte
überschreibt. Solche Texte immer an **beiden** Stellen ändern, sonst bleibt
im Browser die alte Fassung aus `app.js` stehen.

**Stelle hinzufügen oder entfernen** – alle Stellen gemeinsam:

1. Stellenkarte `<article class="job" data-position="…">` in `index.html`
   (Texte `s4_j…` auch in `app.js`, `T.de`);
2. Auswahl `<select id="position">` im Formular (`form_pos…` auch in
   `app.js`);
3. `$STELLEN` in `bewerbung.php` (Kürzel → Bezeichnung in der E-Mail;
   unbekannte Kürzel kommen als „unbekannt“ an und stehen im Fehlerlog);
4. `STELLE_ORT` in `app.js` (Stelle → vorgewählter Standort).

## Bewerbungsformular

Das Formular sendet an `bewerbung.php`. Das Skript schickt jede Bewerbung
samt Anhängen (PDF, Word, Fotos JPG/PNG/HEIC, zusammen max. 10 MB) als
E-Mail an das Postfach des gewählten Standorts:

| Standort   | Postfach                                  |
|------------|-------------------------------------------|
| Nürnberg   | `nuernberg-bewerbung@guen-transporte.de`  |
| Crailsheim | `crailsheim-bewerbung@guen-transporte.de` |

Der Browser bestimmt den Empfänger nicht; die Adressen stehen im Skript
bzw. in `bewerbung-config.php`. Ändern sich Postfächer oder Telefonnummern,
auch die auf der Seite angezeigten Angaben in `index.html`,
`ueber-uns.html` und `app.js` (`BEWERBUNG_MAIL`, `BEWERBUNG_TEL`)
anpassen. „Antworten“ in der E-Mail geht direkt an den Bewerber. Eine
Bestätigung an den Bewerber sendet das Formular bewusst nicht; er sieht
nach dem Senden „Vielen Dank“ auf der Seite.

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

# IIS (web.config)
<security><requestFiltering><hiddenSegments>
    <add segment="bewerbung-config.php" />
</hiddenSegments></requestFiltering></security>
```

Rechte der Datei: lesbar nur für den Webserver-Benutzer (640 oder 600).
Sie enthält Zugangsdaten: nicht ins Git, nicht weitergeben.

**Versandwege mit Microsoft 365** (Postfächer von `guen-transporte.de`
liegen bei Microsoft 365; SPF erlaubt nur `spf.protection.outlook.com`):

* **Empfohlen: SMTP-Relay über einen Connector.** Im Exchange Admin
  Center einen Connector anlegen – Von: „E-Mail-Server Ihrer
  Organisation“, An: „Office 365“ –, der sich an der festen IP-Adresse
  des Webservers erkennt. In `bewerbung-config.php`: `smtp.host` = MX der
  Domain (`guentransporte-de01b.mail.protection.outlook.com`), Port 25,
  `sicherheit` = `tls`, `benutzer` leer. Zusätzlich die IP-Adresse des
  Webservers in den SPF-Eintrag aufnehmen (`ip4:…` vor `include:`).
  Ausgehender Port 25 muss beim Hoster offen sein.
* **Direct Send** (gleiche Einstellungen, aber ohne Connector): funktioniert
  nur an Postfächer des eigenen Tenants – auch `kopie` muss dann ein
  internes Postfach sein. Microsoft erlaubt Tenants seit 2025, Direct Send
  abzuschalten (`Set-OrganizationConfig -RejectDirectSend $true`); ist das
  gesetzt oder wird es später gesetzt, kommen Bewerbungen nur noch über
  einen Connector an. Deshalb den Connector bevorzugen.
* **SMTP AUTH** (`smtp.office365.com`, Port 587, `tls`, Benutzer und
  Passwort eines lizenzierten Postfachs): **nur übergangsweise.** Möglich
  nur, wenn SMTP AUTH im Tenant und für das Postfach erlaubt ist (bei
  aktivierten Security Defaults ist es gesperrt). Weicht `absender` vom
  Benutzer ab, braucht das Postfach „Senden als“. Microsoft hat
  angekündigt, die Anmeldung per Passwort für SMTP AUTH ab Ende 2026
  standardmäßig abzuschalten (Message Center MC786329).
* **PHP `mail()`** (kein `smtp.host`): nur mit gesetztem `absender` und
  einem Mailserver, dessen Absender-IP im SPF steht; sonst landen E-Mails
  bei Microsoft 365 in Junk oder Quarantäne.

**Schutz.** Nur über HTTPS; nur Absendungen von der eigenen Website
(Prüfung des `Origin`-Headers); unsichtbares Feld `_honey` gegen Bots;
höchstens 5 Bewerbungen je IP-Adresse in 10 Minuten (dafür speichert das
Skript nur einen Hashwert der IP-Adresse mit Zeitpunkten, höchstens eine
Stunde lang; Ordner einstellbar über `sperrordner`; ein gescheiterter
Versand zählt nicht mit); Dateiendung, Dateianfang und Gesamtgröße werden
geprüft; Zeilenumbrüche in Feldern werden entfernt; Fehlerdetails gehen
nie an den Browser (`display_errors` aus), nur ins Fehlerlog. Die Anhänge
werden **nicht** auf Schadsoftware geprüft – das übernimmt der
Virenschutz von Microsoft 365 beim Empfang; die E-Mail weist darauf hin.

**Hinter einem Reverse-Proxy** (Load-Balancer, CDN, Container): Ohne
Anpassung sieht das Skript nur den Proxy – alle Bewerber teilen sich dann
eine Sendebegrenzung, HTTPS und `Origin` passen nicht. In diesem Fall
`'hinter_proxy' => true` setzen; dann gelten `X-Forwarded-Proto`,
`X-Forwarded-Host` und der letzte Eintrag von `X-Forwarded-For`. Nur
setzen, wenn der Proxy diese Header selbst schreibt und Anfragen nicht am
Proxy vorbei den Webserver erreichen.

**Fehlersuche.** Scheitert der Versand, bekommt der Bewerber einen Hinweis
mit Postfach und Telefonnummer seines Standorts, und das Skript schreibt
die Ursache ins PHP-Fehlerlog (ohne Zugangsdaten). Typische Einträge:

| Eintrag im Fehlerlog                          | Ursache / Abhilfe                                   |
|-----------------------------------------------|-----------------------------------------------------|
| `kein gültiger Absender eingestellt`          | `absender` in `bewerbung-config.php` setzen          |
| `Verbindung zu tcp://…:25 fehlgeschlagen`     | Port 25 ausgehend gesperrt (Hoster)                  |
| `RCPT TO … 550 5.7.…`                         | Connector/Direct Send nicht freigegeben, SPF prüfen  |
| `AUTH Passwort → 535`                         | SMTP AUTH gesperrt oder Passwort falsch              |
| `Anfrage ohne HTTPS abgelehnt`                | HTTPS fehlt oder Proxy (siehe oben)                  |
| `fremde Herkunft abgelehnt`                   | Seite unter anderer Adresse als das Skript geöffnet  |
| `Kopie nicht angenommen`                      | `kopie` ist kein internes Postfach; Bewerbung kam an |

Zu viele Testsendungen von einer IP-Adresse: Die Sendebegrenzung lässt sich
zurücksetzen, indem man die Dateien `bewerbung-*.txt` im `sperrordner`
(Standard: temporärer Ordner des Servers) löscht.

**Betrieb.** Je gesendeter Bewerbung schreibt das Skript eine Zeile ins
PHP-Fehlerlog: Standort, Versandweg, Message-ID, Zahl und Größe der
Anhänge – ohne Namen oder Kontaktdaten. Mit der Message-ID lässt sich eine
Bewerbung in der Nachrichtenablaufverfolgung von Microsoft 365 finden.
Empfehlung: einmal im Monat eine Testbewerbung senden, und das Fehlerlog
nach „Versand fehlgeschlagen“ durchsuchen.

## Aktualisierung und Rückweg

* **Neue Fassung einspielen:** alle Dateien aus `website/` überschreiben;
  `bewerbung-config.php` liegt außerhalb bzw. ist nicht Teil der
  Lieferung und bleibt erhalten. Gelöschte Dateien (z. B. alte Fotos)
  ebenfalls entfernen. Danach eine Testbewerbung je Standort.
* **Rückweg:** Vor jeder Änderung das DocumentRoot als Archiv sichern
  (`tar czf site-JJJJ-MM-TT.tgz -C /pfad/zum/docroot .`). Zurück auf die
  vorige Fassung = Archiv wieder auspacken. Die Erstsicherung der alten
  Website (Checkliste, Schritt 1) aufbewahren, bis die neue Seite mehrere
  Wochen ohne Probleme läuft.

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
