<?php
/*
 * Bewerbungsformular – Versand per E-Mail
 * Cuma Gün – Kuriertransporte e. K.
 *
 * Nimmt das Formular aus index.html entgegen und sendet die Bewerbung samt
 * Anhängen an das Postfach des gewählten Standorts. Keine Fremddienste,
 * keine Bibliotheken: läuft ab PHP 7.4 auf jedem Webhosting.
 *
 * Einstellungen NICHT hier ändern, sondern in bewerbung-config.php
 * (Vorlage: bewerbung-config.beispiel.php). Gesucht wird zuerst eine Ebene
 * ÜBER dem Website-Ordner (empfohlen, nicht aus dem Web abrufbar), dann im
 * Website-Ordner selbst.
 */

date_default_timezone_set('Europe/Berlin'); // Eingangszeit in deutscher Zeit, unabhängig vom Server
ini_set('display_errors', '0'); // Fehlerdetails nie an Besucher, nur ins Fehlerprotokoll des Servers
ini_set('log_errors', '1');

$CONFIG = [
    // Bewerbungspostfach je Standort (Wert des Feldes „Bevorzugter Standort“)
    'empfaenger' => [
        'Nürnberg'   => 'nuernberg-bewerbung@guen-transporte.de',
        'Crailsheim' => 'crailsheim-bewerbung@guen-transporte.de',
    ],
    // Telefon je Standort: wird bei einem Fehler zusammen mit dem Postfach genannt
    'telefon' => [
        'Nürnberg'   => '+49 911 6323697',
        'Crailsheim' => '+49 7951 468943',
    ],
    'kopie'         => '',      // optionale Kopie jeder Bewerbung (nur ein internes Postfach)
    'absender'      => '',      // Absenderadresse; leer = SMTP-Benutzer. Für mail() Pflicht.
    'absender_name' => 'Website Cuma Gün – Bewerbung',
    'smtp' => [
        'host'       => '',     // leer = Versand über mail()
        'port'       => 587,
        'sicherheit' => 'tls',  // 'tls' (STARTTLS), 'ssl' (Port 465) oder 'keine' (nur ohne Anmeldung, z. B. internes Relay)
        'benutzer'   => '',     // leer = ohne Anmeldung (z. B. Relay oder Microsoft 365 Direct Send)
        'passwort'   => '',
    ],
    'sperrordner'   => '',      // Ordner für die Sendebegrenzung; leer = temporärer Ordner des Servers
    'testordner'    => '',      // nur für Tests: E-Mail als .eml-Datei hier ablegen statt senden
    'max_bytes'     => 10 * 1024 * 1024, // alle Anhänge zusammen
    'danke_seite'   => 'index.html?bewerbung=gesendet#bewerbung',
    'nur_https'     => true,    // Formular nur über HTTPS annehmen (Ausnahme: Aufruf vom Server selbst)
    'hinter_proxy'  => false,   // true nur hinter eigenem Reverse-Proxy: dann zählen X-Forwarded-Proto/-Host/-For
];
foreach ([dirname(__DIR__) . '/bewerbung-config.php', __DIR__ . '/bewerbung-config.php'] as $datei) {
    if (@is_file($datei)) { // @: open_basedir kann den Ordner über der Website sperren
        $CONFIG = array_replace_recursive($CONFIG, (array) require $datei);
        break;
    }
}

// Erlaubte Anhänge: Endung → MIME-Typ und Dateianfang (Signatur)
$ERLAUBT = [
    'pdf'  => ['application/pdf', ["%PDF"]],
    'doc'  => ['application/msword', ["\xD0\xCF\x11\xE0"]],
    'docx' => ['application/vnd.openxmlformats-officedocument.wordprocessingml.document', ["PK\x03\x04"]],
    'jpg'  => ['image/jpeg', ["\xFF\xD8\xFF"]],
    'jpeg' => ['image/jpeg', ["\xFF\xD8\xFF"]],
    'png'  => ['image/png', ["\x89PNG"]],
    'heic' => ['image/heic', ['ftyp']],
    'heif' => ['image/heif', ['ftyp']],
];

// Stellen: Wert im Formular → Bezeichnung in der E-Mail (gilt auch ohne JavaScript)
$STELLEN = [
    'zusteller-nbg' => 'Paketzusteller Nürnberg (Vollzeit)',
    'zusteller-crl' => 'Paketzusteller Crailsheim (Vollzeit)',
    'lader-nbg'     => 'Be- und Entlader Nürnberg (Minijob)',
    'initiativ'     => 'Initiativbewerbung',
];

$willJson = isset($_SERVER['HTTP_ACCEPT']) && strpos($_SERVER['HTTP_ACCEPT'], 'application/json') !== false;

// Bei jedem Fehler erfährt der Bewerber, wohin er die Unterlagen stattdessen senden
// oder wen er anrufen kann. Nach der Standortwahl nur noch dieser Standort.
$HINWEIS_MAIL = array_values($CONFIG['empfaenger']);
$HINWEIS_TEL = array_values((array) $CONFIG['telefon']);

function antwort($ok, $text, $code = 200, $feld = null)
{
    global $willJson, $CONFIG, $HINWEIS_MAIL, $HINWEIS_TEL;
    if (!$willJson && $ok) {
        header('Location: ' . $CONFIG['danke_seite'], true, 303);
        exit;
    }
    http_response_code($code);
    if ($willJson) {
        $daten = ['ok' => $ok, 'text' => $text];
        if (!$ok) {
            $daten['mail'] = $HINWEIS_MAIL;
            $daten['tel'] = $HINWEIS_TEL;
            if ($feld !== null) {
                $daten['feld'] = $feld;
            }
        }
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode($daten, JSON_UNESCAPED_UNICODE);
        exit;
    }
    $p = '<p style="font:16px sans-serif;max-width:40em;margin:1em auto">';
    $links = function (array $liste, $schema) {
        return implode(' oder ', array_map(function ($w) use ($schema) {
            $ziel = $schema === 'tel:' ? preg_replace('/[^\d+]/', '', $w) : $w;
            return '<a href="' . $schema . htmlspecialchars($ziel) . '">' . htmlspecialchars($w) . '</a>';
        }, $liste));
    };
    header('Content-Type: text/html; charset=utf-8');
    echo '<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Bewerbung</title>'
        . '<div style="margin-top:2em">' . $p . htmlspecialchars($text) . '</p>';
    if (!$ok && $HINWEIS_MAIL) {
        echo $p . 'Sie können Ihre Unterlagen auch per E-Mail an ' . $links($HINWEIS_MAIL, 'mailto:') . ' senden'
            . ($HINWEIS_TEL ? ' oder uns anrufen: ' . $links($HINWEIS_TEL, 'tel:') : '') . '.</p>';
    }
    echo $p . '<a href="index.html#bewerbung">Zurück zum Formular</a></p></div>';
    exit;
}

// Protokollzeile ohne Steuerzeichen (Werte aus der Anfrage sind fremd)
function protokoll($text)
{
    error_log('Bewerbungsformular: ' . substr(preg_replace('/[\x00-\x1F\x7F]+/', ' ', $text), 0, 500));
}

// Einzeiliges Formularfeld: nur Text, ohne Steuerzeichen und Zeilenumbrüche, auf $max Zeichen gekürzt
function feld($name, $max = 200)
{
    if (!isset($_POST[$name]) || !is_string($_POST[$name])) {
        return '';
    }
    $v = preg_replace('/[\x00-\x1F\x7F]+/u', ' ', $_POST[$name]);
    if ($v === null) {
        return ''; // kein gültiges UTF-8
    }
    $v = trim(preg_replace('/ {2,}/', ' ', $v));
    return preg_match('/^.{0,' . (int) $max . '}/us', $v, $m) ? $m[0] : '';
}

// Kopfzeilen-Text nach RFC 2047, in Stücke gefaltet (keine Zeile über 998 Zeichen)
function kopfzeile($text)
{
    $text = str_replace(["\r", "\n"], ' ', $text);
    if (!preg_match('/[^\x20-\x7E]/', $text) && strlen($text) < 900) {
        return $text;
    }
    $woerter = [];
    $stueck = '';
    foreach (preg_split('//u', $text, -1, PREG_SPLIT_NO_EMPTY) as $zeichen) {
        if (strlen($stueck . $zeichen) > 45) {
            $woerter[] = '=?UTF-8?B?' . base64_encode($stueck) . '?=';
            $stueck = '';
        }
        $stueck .= $zeichen;
    }
    if ($stueck !== '') {
        $woerter[] = '=?UTF-8?B?' . base64_encode($stueck) . '?=';
    }
    return implode("\r\n ", $woerter);
}

// Anzeigename immer kodiert: Komma, Doppelpunkt oder Anführungszeichen im Namen stören so nicht
function anzeigename($name)
{
    return '=?UTF-8?B?' . base64_encode(str_replace(["\r", "\n"], ' ', $name)) . '?=';
}

function gueltige_adresse($a)
{
    return is_string($a) && filter_var($a, FILTER_VALIDATE_EMAIL) && strpbrk($a, "\"<>,;:()\\ ") === false
        && preg_match('/@[^@]+\.[^@.]{2,}$/', $a); // Domain mit Punkt, wie die Prüfung im Browser
}

// Einstellungen prüfen: ungültige Adressen fallen heraus und landen im Fehlerprotokoll
foreach ($CONFIG['empfaenger'] as $ort => $adresse) {
    if (!gueltige_adresse($adresse)) {
        protokoll('ungültige Empfängeradresse für ' . $ort . ' in bewerbung-config.php');
        unset($CONFIG['empfaenger'][$ort]);
    }
}
$kopie = trim((string) $CONFIG['kopie']);
if ($kopie !== '' && !gueltige_adresse($kopie)) {
    protokoll('ungültige Kopie-Adresse in bewerbung-config.php, Kopie wird nicht gesendet');
    $kopie = '';
}
$HINWEIS_MAIL = array_values($CONFIG['empfaenger']);
if (!$CONFIG['empfaenger']) {
    protokoll('kein gültiges Empfängerpostfach eingestellt (empfaenger in bewerbung-config.php)');
    antwort(false, 'Das Bewerbungsformular ist gerade nicht erreichbar. Bitte rufen Sie uns an.', 503);
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    antwort(false, 'Bitte nutzen Sie das Bewerbungsformular auf der Website.', 405);
}

$proxy = !empty($CONFIG['hinter_proxy']);

// Bewerbungsunterlagen nur verschlüsselt annehmen
$https = (!empty($_SERVER['HTTPS']) && strtolower((string) $_SERVER['HTTPS']) !== 'off')
    || ($proxy && strtolower(trim(explode(',', (string) ($_SERVER['HTTP_X_FORWARDED_PROTO'] ?? ''))[0])) === 'https');
$vomServer = in_array($_SERVER['REMOTE_ADDR'] ?? '', ['127.0.0.1', '::1'], true) && !$proxy;
if (!empty($CONFIG['nur_https']) && !$https && !$vomServer) {
    protokoll('Anfrage ohne HTTPS abgelehnt (HTTPS einrichten oder hinter_proxy prüfen)');
    antwort(false, 'Bitte öffnen Sie die Website über https:// und senden Sie das Formular erneut.', 403);
}

// Nur Absendungen von dieser Website (Browser senden „Origin“ mit)
if (!empty($_SERVER['HTTP_ORIGIN'])) {
    $herkunft = strtolower((string) parse_url($_SERVER['HTTP_ORIGIN'], PHP_URL_HOST));
    $hostKopf = $proxy && !empty($_SERVER['HTTP_X_FORWARDED_HOST'])
        ? trim(explode(',', (string) $_SERVER['HTTP_X_FORWARDED_HOST'])[0])
        : (string) ($_SERVER['HTTP_HOST'] ?? '');
    $eigener = strtolower(preg_replace('/:\d+$/', '', $hostKopf));
    if ($herkunft === '' || $herkunft !== $eigener) {
        protokoll('fremde Herkunft abgelehnt: Origin ' . $_SERVER['HTTP_ORIGIN'] . ', Host ' . $hostKopf);
        antwort(false, 'Bitte laden Sie die Seite neu und senden Sie das Formular erneut.', 403);
    }
}

// Anfrage größer als post_max_size: PHP liefert dann leere Felder
if (empty($_POST) && empty($_FILES) && (int) ($_SERVER['CONTENT_LENGTH'] ?? 0) > 0) {
    antwort(false, 'Die Unterlagen sind zu groß. Erlaubt sind zusammen max. 10 MB.', 413);
}

// Spamschutz 1: unsichtbares Feld muss leer sein – Bots bekommen „ok“, es wird nichts gesendet
if (feld('_honey') !== '') {
    antwort(true, 'ok');
}

// Spamschutz 2: höchstens 5 Bewerbungen je IP-Adresse in 10 Minuten (mit Dateisperre)
// Gespeichert wird nur ein Hashwert der IP-Adresse mit Zeitpunkten; Dateien älter als 1 Stunde werden gelöscht.
$ordner = rtrim($CONFIG['sperrordner'] !== '' ? $CONFIG['sperrordner'] : sys_get_temp_dir(), '/\\');
$jetzt = time();
foreach ((array) glob($ordner . '/bewerbung-*.txt') as $alt) {
    if (is_file($alt) && filemtime($alt) < $jetzt - 3600) {
        @unlink($alt);
    }
}
$ip = (string) ($_SERVER['REMOTE_ADDR'] ?? '');
if ($proxy && !empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
    $kette = explode(',', (string) $_SERVER['HTTP_X_FORWARDED_FOR']);
    $ip = trim(end($kette)); // der letzte Eintrag stammt vom eigenen Proxy
}
$schluessel = hash_hmac('sha256', $ip, __FILE__ . (string) @filemtime(__FILE__));
$sperrDatei = $ordner . '/bewerbung-' . substr($schluessel, 0, 32) . '.txt';
$sperre = @fopen($sperrDatei, 'c+');
if ($sperre) {
    flock($sperre, LOCK_EX);
    $zeiten = array_filter(array_map('intval', explode(',', (string) stream_get_contents($sperre))), function ($t) use ($jetzt) { return $t > $jetzt - 600; });
    if (count($zeiten) >= 5) {
        flock($sperre, LOCK_UN);
        antwort(false, 'Zu viele Bewerbungen in kurzer Zeit. Bitte versuchen Sie es später erneut.', 429);
    }
} else {
    protokoll('Sendebegrenzung inaktiv, Ordner nicht beschreibbar: ' . $ordner);
}

$vorname  = feld('vorname', 80);
$nachname = feld('nachname', 80);
$telefon  = feld('telefon', 60);
$email    = feld('email', 120);
$position = feld('position', 40);
if ($position === '') {
    $stelle = '';
} elseif (isset($STELLEN[$position])) {
    $stelle = $STELLEN[$position];
} else {
    // Stelle nur aus der eigenen Liste: unbekannter Wert (z. B. alte Seite im Cache) wird nicht übernommen
    protokoll('unbekannte Stelle im Formular: ' . $position . ' (Liste $STELLEN in bewerbung.php prüfen)');
    $stelle = 'unbekannt – bitte beim Bewerber nachfragen';
}
$standort = feld('standort', 40);

// Standort zuerst bestimmen: Fehlermeldungen nennen dann Postfach und Telefon dieses Standorts
if (isset($CONFIG['empfaenger'][$standort])) {
    $HINWEIS_MAIL = [$CONFIG['empfaenger'][$standort]];
    $HINWEIS_TEL = isset($CONFIG['telefon'][$standort]) ? [$CONFIG['telefon'][$standort]] : $HINWEIS_TEL;
} else {
    $standort = array_keys($CONFIG['empfaenger'])[0];
}
$an = $CONFIG['empfaenger'][$standort];

foreach (['vorname' => $vorname, 'nachname' => $nachname, 'telefon' => $telefon] as $f => $wert) {
    if ($wert === '') {
        antwort(false, 'Bitte füllen Sie alle Pflichtfelder aus.', 422, $f);
    }
}
if (!gueltige_adresse($email)) {
    antwort(false, 'Bitte prüfen Sie Ihre E-Mail-Adresse.', 422, 'email');
}
if (feld('Einwilligung') === '') {
    antwort(false, 'Bitte bestätigen Sie den Hinweis zum Datenschutz.', 422, 'dsgvo');
}

// Anhänge: Endung, Dateianfang und Gesamtgröße prüfen
$anhaenge = [];
$summe = 0;
if (!empty($_FILES['attachment']) && is_array($_FILES['attachment']['name'])) {
    foreach ($_FILES['attachment']['name'] as $i => $name) {
        $fehler = $_FILES['attachment']['error'][$i];
        if ($fehler === UPLOAD_ERR_NO_FILE) {
            continue;
        }
        if ($fehler === UPLOAD_ERR_INI_SIZE || $fehler === UPLOAD_ERR_FORM_SIZE) {
            antwort(false, 'Eine Datei ist zu groß. Erlaubt sind zusammen max. 10 MB.', 413);
        }
        if ($fehler !== UPLOAD_ERR_OK) {
            error_log('Bewerbungsformular: Upload-Fehler ' . $fehler);
            antwort(false, 'Eine Datei konnte nicht hochgeladen werden. Bitte versuchen Sie es erneut.', 400);
        }
        $ext = strtolower(pathinfo((string) $name, PATHINFO_EXTENSION));
        if (!isset($ERLAUBT[$ext])) {
            antwort(false, 'Erlaubt sind nur PDF, Word oder Fotos (JPG, PNG, HEIC).', 415);
        }
        $groesse = (int) $_FILES['attachment']['size'][$i];
        if ($groesse === 0) {
            antwort(false, 'Eine Datei ist leer. Bitte wählen Sie sie erneut aus.', 415);
        }
        $summe += $groesse;
        if ($summe > $CONFIG['max_bytes']) {
            antwort(false, 'Die Unterlagen sind zusammen größer als 10 MB.', 413);
        }
        $inhalt = (string) file_get_contents($_FILES['attachment']['tmp_name'][$i]);
        $passt = false;
        foreach ($ERLAUBT[$ext][1] as $signatur) {
            $stelleSig = $signatur === 'ftyp' ? 4 : 0;
            if (substr($inhalt, $stelleSig, strlen($signatur)) === $signatur) {
                $passt = true;
            }
        }
        if (!$passt) {
            antwort(false, 'Eine Datei passt nicht zu ihrer Endung. Erlaubt sind echte PDF-, Word- oder Fotodateien.', 415);
        }
        $sauber = preg_replace('/[^\w.\- ]+/u', '_', basename(str_replace('\\', '/', (string) $name)));
        $anhaenge[] = ['name' => $sauber, 'typ' => $ERLAUBT[$ext][0], 'inhalt' => $inhalt];
    }
}

// Absender: aus den Einstellungen, nie aus der Anfrage
$absender = $CONFIG['absender'] !== '' ? $CONFIG['absender'] : $CONFIG['smtp']['benutzer'];
if (!gueltige_adresse($absender)) {
    protokoll('kein gültiger Absender eingestellt (absender bzw. smtp.benutzer in bewerbung-config.php)');
    antwort(false, 'Ihre Bewerbung konnte gerade nicht gesendet werden.', 502);
}
// Verschlüsselung: nur bekannte Werte; Anmeldedaten nie unverschlüsselt
$smtp = $CONFIG['smtp'];
$smtp['sicherheit'] = strtolower(trim((string) $smtp['sicherheit']));
if ($smtp['host'] !== '') {
    if (!in_array($smtp['sicherheit'], ['tls', 'ssl', 'keine'], true)) {
        protokoll("smtp.sicherheit muss 'tls', 'ssl' oder 'keine' sein (bewerbung-config.php)");
        antwort(false, 'Ihre Bewerbung konnte gerade nicht gesendet werden.', 502);
    }
    if ($smtp['sicherheit'] === 'keine' && (string) $smtp['benutzer'] !== '') {
        protokoll("smtp.sicherheit 'keine' mit Anmeldung ist nicht erlaubt (Passwort ginge unverschlüsselt über das Netz)");
        antwort(false, 'Ihre Bewerbung konnte gerade nicht gesendet werden.', 502);
    }
}
$name = $vorname . ' ' . $nachname;
$betreff = 'Bewerbung: ' . ($stelle !== '' ? $stelle : 'ohne Stellenangabe') . ' – ' . $name;

$zeilen = [
    'Neue Bewerbung über das Formular der Karriere-Website',
    '',
    'Stelle:       ' . ($stelle !== '' ? $stelle : 'keine Angabe'),
    'Standort:     ' . $standort,
    '',
    'Vorname:      ' . $vorname,
    'Nachname:     ' . $nachname,
    'Telefon:      ' . $telefon,
    'E-Mail:       ' . $email,
    '',
    'Unterlagen:   ' . ($anhaenge ? implode(', ', array_column($anhaenge, 'name')) : 'keine'),
    'Datenschutz:  Hinweis zur Kenntnis genommen',
    'Eingang:      ' . date('d.m.Y H:i'),
    '',
    'Antworten Sie direkt auf diese E-Mail, um den Bewerber zu erreichen.',
    'Hinweis: Die Anhänge stammen vom Bewerber und wurden nicht auf Schadsoftware geprüft.',
];
$text = implode("\r\n", $zeilen);

$domain = substr(strrchr($absender, '@'), 1);
$grenze = 'b_' . bin2hex(random_bytes(12));
$kopf = [
    'Date: ' . date('r'),
    'From: ' . anzeigename($CONFIG['absender_name']) . ' <' . $absender . '>',
    'Reply-To: ' . anzeigename($name) . ' <' . $email . '>',
    'To: <' . $an . '>',
];
if ($kopie !== '') {
    $kopf[] = 'Cc: <' . $kopie . '>';
}
$kopf[] = 'Subject: ' . kopfzeile($betreff);
$messageId = '<' . bin2hex(random_bytes(10)) . '@' . $domain . '>';
$kopf[] = 'Message-ID: ' . $messageId;
$kopf[] = 'MIME-Version: 1.0';
$kopf[] = 'Content-Type: multipart/mixed; boundary="' . $grenze . '"';

$rumpf = '--' . $grenze . "\r\n"
    . "Content-Type: text/plain; charset=UTF-8\r\nContent-Transfer-Encoding: base64\r\n\r\n"
    . chunk_split(base64_encode($text));
foreach ($anhaenge as $a) {
    $ascii = preg_replace('/[^\x20-\x7E]/', '_', $a['name']);
    $rumpf .= '--' . $grenze . "\r\n"
        . 'Content-Type: ' . $a['typ'] . '; name="' . $ascii . "\"\r\n"
        . "Content-Transfer-Encoding: base64\r\n"
        . 'Content-Disposition: attachment; filename="' . $ascii . "\";\r\n filename*=UTF-8''" . rawurlencode($a['name']) . "\r\n\r\n"
        . chunk_split(base64_encode($a['inhalt']));
}
$rumpf .= '--' . $grenze . "--\r\n";

// $an muss angenommen werden; $optional (die Kopie) darf scheitern, ohne die Bewerbung zu verlieren
function smtp_senden(array $s, $von, array $an, array $optional, $nachricht)
{
    $ziel = ($s['sicherheit'] === 'ssl' ? 'ssl://' : 'tcp://') . $s['host'] . ':' . (int) $s['port'];
    $verb = @stream_socket_client($ziel, $nr, $fehler, 20);
    if (!$verb) {
        return 'Verbindung zu ' . $ziel . ' fehlgeschlagen: ' . $fehler;
    }
    stream_set_timeout($verb, 30);
    $lesen = function () use ($verb) {
        $antwort = '';
        while (($zeile = fgets($verb, 1024)) !== false) {
            $antwort .= $zeile;
            if (!isset($zeile[3]) || $zeile[3] !== '-') {
                break; // letzte Zeile einer (mehrzeiligen) Antwort
            }
        }
        return $antwort;
    };
    $befehl = function ($cmd, $erwartet, $zeigen = null) use ($verb, $lesen) {
        if ($cmd !== null) {
            fwrite($verb, $cmd . "\r\n");
        }
        $a = $lesen();
        if ((int) substr($a, 0, 3) !== $erwartet) {
            // Zugangsdaten nie ins Fehlerprotokoll: für AUTH und DATA nur eine Bezeichnung
            throw new RuntimeException(($zeigen !== null ? $zeigen : (string) $cmd) . ' → ' . trim($a));
        }
        return $a;
    };
    try {
        $befehl(null, 220);
        $ich = gethostname() ?: 'localhost';
        $befehl('EHLO ' . $ich, 250);
        if ($s['sicherheit'] === 'tls') {
            $befehl('STARTTLS', 220);
            if (!stream_socket_enable_crypto($verb, true, STREAM_CRYPTO_METHOD_TLSv1_2_CLIENT | (defined('STREAM_CRYPTO_METHOD_TLSv1_3_CLIENT') ? STREAM_CRYPTO_METHOD_TLSv1_3_CLIENT : 0))) {
                throw new RuntimeException('TLS konnte nicht aufgebaut werden');
            }
            $befehl('EHLO ' . $ich, 250);
        }
        if ($s['benutzer'] !== '') {
            $befehl('AUTH LOGIN', 334);
            $befehl(base64_encode($s['benutzer']), 334, 'AUTH Benutzer');
            $befehl(base64_encode($s['passwort']), 235, 'AUTH Passwort');
        }
        $befehl('MAIL FROM:<' . $von . '>', 250);
        foreach ($an as $adresse) {
            $befehl('RCPT TO:<' . $adresse . '>', 250);
        }
        foreach ($optional as $adresse) {
            try {
                $befehl('RCPT TO:<' . $adresse . '>', 250);
            } catch (RuntimeException $e) {
                protokoll('Kopie nicht angenommen, Bewerbung geht trotzdem raus: ' . $e->getMessage());
            }
        }
        $befehl('DATA', 354);
        $nachricht = preg_replace('/^\./m', '..', $nachricht);
        $befehl($nachricht . "\r\n.", 250, 'DATA-Ende');
        fwrite($verb, "QUIT\r\n");
        fclose($verb);
        return true;
    } catch (RuntimeException $e) {
        fclose($verb);
        return $e->getMessage();
    }
}

// Sendebegrenzung vor dem Versand eintragen, damit gleichzeitige Anfragen mitzählen
if ($sperre) {
    $zeiten[] = $jetzt;
    ftruncate($sperre, 0);
    rewind($sperre);
    fwrite($sperre, implode(',', $zeiten));
    fflush($sperre);
    flock($sperre, LOCK_UN);
    fclose($sperre);
}

$nachricht = implode("\r\n", $kopf) . "\r\n\r\n" . $rumpf;

if ($CONFIG['testordner'] !== '') {
    $weg = 'Testordner';
    $ergebnis = @file_put_contents(rtrim($CONFIG['testordner'], '/') . '/' . date('Ymd-His') . '-' . bin2hex(random_bytes(3)) . '.eml', $nachricht) !== false
        ? true : 'Testordner nicht beschreibbar';
} elseif ($smtp['host'] !== '') {
    $weg = 'SMTP ' . $smtp['host'] . ':' . (int) $smtp['port'] . ($smtp['benutzer'] !== '' ? ' mit Anmeldung' : ' ohne Anmeldung');
    $ergebnis = smtp_senden($smtp, $absender, [$an], $kopie !== '' ? [$kopie] : [], $nachricht);
} else {
    $weg = 'mail()';
    $mailKopf = array_values(array_filter($kopf, function ($z) { return strpos($z, 'To: ') !== 0 && strpos($z, 'Subject: ') !== 0; }));
    $ergebnis = mail($an, kopfzeile($betreff), $rumpf, implode("\r\n", $mailKopf), '-f' . escapeshellarg($absender)) ? true : 'mail() fehlgeschlagen';
}

if ($ergebnis !== true) {
    protokoll('Versand fehlgeschlagen über ' . $weg . ': ' . $ergebnis);
    // Fehlversuch zählt nicht gegen die Sendebegrenzung: Eintrag dieser Anfrage wieder entfernen
    if ($sperre && ($f = @fopen($sperrDatei, 'c+'))) {
        flock($f, LOCK_EX);
        $liste = array_filter(explode(',', (string) stream_get_contents($f)), 'strlen');
        $treffer = array_search((string) $jetzt, $liste, true);
        if ($treffer !== false) {
            unset($liste[$treffer]);
        }
        ftruncate($f, 0);
        rewind($f);
        fwrite($f, implode(',', $liste));
        fflush($f);
        flock($f, LOCK_UN);
        fclose($f);
    }
    antwort(false, 'Ihre Bewerbung konnte gerade nicht gesendet werden.', 502);
}

// Eine Zeile je gesendeter Bewerbung, ohne Personendaten: so lässt sich ein Eingang im Postfach nachverfolgen
protokoll(sprintf('gesendet an Standort %s über %s, Message-ID %s, %d Anhänge, %d KB',
    $standort, $weg, $messageId, count($anhaenge), (int) ceil(strlen($nachricht) / 1024)));

antwort(true, 'Vielen Dank! Ihre Bewerbung ist bei uns eingegangen.');
