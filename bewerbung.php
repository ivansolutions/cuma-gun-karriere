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
 * (Vorlage: bewerbung-config.beispiel.php). Ohne SMTP-Angaben wird über
 * die PHP-Funktion mail() des Servers versendet.
 */

date_default_timezone_set('Europe/Berlin'); // Eingangszeit in deutscher Zeit, unabhängig vom Server

$CONFIG = [
    // Bewerbungspostfach je Standort (Wert des Feldes „Bevorzugter Standort“)
    'empfaenger' => [
        'Nürnberg'   => 'nuernberg-bewerbung@guen-transporte.de',
        'Crailsheim' => 'crailsheim-bewerbung@guen-transporte.de',
    ],
    'kopie'         => '',      // optionale Kopie jeder Bewerbung (nur für Tests)
    'absender'      => '',      // Absenderadresse; leer = SMTP-Benutzer bzw. bewerbung@<Domain>
    'absender_name' => 'Website Cuma Gün – Bewerbung',
    'smtp' => [
        'host'       => '',     // leer = Versand über mail()
        'port'       => 587,
        'sicherheit' => 'tls',  // 'tls' (STARTTLS, Port 587) oder 'ssl' (Port 465)
        'benutzer'   => '',
        'passwort'   => '',
    ],
    'testordner'    => '',      // nur für Tests: E-Mail als .eml-Datei hier ablegen statt senden
    'max_bytes'     => 10 * 1024 * 1024, // alle Anhänge zusammen
    'danke_seite'   => 'index.html?bewerbung=gesendet#bewerbung',
];
if (is_file(__DIR__ . '/bewerbung-config.php')) {
    $CONFIG = array_replace_recursive($CONFIG, (array) require __DIR__ . '/bewerbung-config.php');
}

$ERLAUBT = [
    'pdf' => 'application/pdf',
    'doc' => 'application/msword',
    'docx' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'jpg' => 'image/jpeg', 'jpeg' => 'image/jpeg', 'png' => 'image/png',
    'heic' => 'image/heic', 'heif' => 'image/heif',
];

$willJson = isset($_SERVER['HTTP_ACCEPT']) && strpos($_SERVER['HTTP_ACCEPT'], 'application/json') !== false;

function antwort($ok, $text, $code = 200)
{
    global $willJson, $CONFIG;
    if (!$willJson && $ok) {
        header('Location: ' . $CONFIG['danke_seite'], true, 303);
        exit;
    }
    http_response_code($code);
    if ($willJson) {
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode(['ok' => $ok, 'text' => $text], JSON_UNESCAPED_UNICODE);
    } else {
        header('Content-Type: text/html; charset=utf-8');
        echo '<!doctype html><meta charset="utf-8"><title>Bewerbung</title><p style="font:16px sans-serif;max-width:40em;margin:3em auto">'
            . htmlspecialchars($text) . '</p><p style="font:16px sans-serif;max-width:40em;margin:1em auto"><a href="index.html#bewerbung">Zurück zum Formular</a></p>';
    }
    exit;
}

function feld($name, $max = 200)
{
    $v = isset($_POST[$name]) ? trim((string) $_POST[$name]) : '';
    $v = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $v);
    return function_exists('mb_substr') ? mb_substr($v, 0, $max) : substr($v, 0, $max);
}

function kopfzeile($text)
{
    // Kopfzeilen ohne Zeilenumbrüche, Nicht-ASCII nach RFC 2047
    $text = str_replace(["\r", "\n"], ' ', $text);
    return preg_match('/[^\x20-\x7E]/', $text) ? '=?UTF-8?B?' . base64_encode($text) . '?=' : $text;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    antwort(false, 'Bitte nutzen Sie das Bewerbungsformular auf der Website.', 405);
}

// Spamschutz 1: unsichtbares Feld muss leer sein – Bots bekommen „ok“, es wird nichts gesendet
if (feld('_honey') !== '') {
    antwort(true, 'ok');
}

// Spamschutz 2: höchstens 5 Bewerbungen je IP-Adresse in 10 Minuten
$ipDatei = sys_get_temp_dir() . '/bewerbung-' . md5($_SERVER['REMOTE_ADDR'] ?? '') . '.txt';
$jetzt = time();
$zeiten = array_filter(array_map('intval', is_file($ipDatei) ? explode(',', (string) file_get_contents($ipDatei)) : []), function ($t) use ($jetzt) { return $t > $jetzt - 600; });
if (count($zeiten) >= 5) {
    antwort(false, 'Zu viele Bewerbungen in kurzer Zeit. Bitte versuchen Sie es später erneut.', 429);
}

$vorname  = feld('vorname', 80);
$nachname = feld('nachname', 80);
$telefon  = feld('telefon', 60);
$email    = feld('email', 120);
$stelle   = feld('Stelle', 120);
$standort = feld('standort', 40);

if ($vorname === '' || $nachname === '' || $telefon === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    antwort(false, 'Bitte füllen Sie alle Pflichtfelder korrekt aus.', 422);
}
if (feld('Einwilligung') === '') {
    antwort(false, 'Bitte stimmen Sie der Datenschutzerklärung zu.', 422);
}
if (!isset($CONFIG['empfaenger'][$standort])) {
    $standort = array_keys($CONFIG['empfaenger'])[0];
}
$an = $CONFIG['empfaenger'][$standort];

// Anhänge
$anhaenge = [];
$summe = 0;
if (!empty($_FILES['attachment']) && is_array($_FILES['attachment']['name'])) {
    foreach ($_FILES['attachment']['name'] as $i => $name) {
        $fehler = $_FILES['attachment']['error'][$i];
        if ($fehler === UPLOAD_ERR_NO_FILE) {
            continue;
        }
        if ($fehler !== UPLOAD_ERR_OK) {
            antwort(false, 'Eine Datei konnte nicht hochgeladen werden (zu groß?). Erlaubt sind zusammen max. 10 MB.', 413);
        }
        $ext = strtolower(pathinfo($name, PATHINFO_EXTENSION));
        if (!isset($ERLAUBT[$ext])) {
            antwort(false, 'Erlaubt sind nur PDF, Word oder Fotos (JPG, PNG, HEIC).', 415);
        }
        $summe += (int) $_FILES['attachment']['size'][$i];
        if ($summe > $CONFIG['max_bytes']) {
            antwort(false, 'Die Unterlagen sind zusammen größer als 10 MB.', 413);
        }
        $sauber = preg_replace('/[^\w.\- ]+/u', '_', basename($name));
        $anhaenge[] = ['name' => $sauber, 'typ' => $ERLAUBT[$ext], 'inhalt' => file_get_contents($_FILES['attachment']['tmp_name'][$i])];
    }
}

// E-Mail zusammenbauen
$host = preg_replace('/^www\./', '', preg_replace('/:\d+$/', '', $_SERVER['HTTP_HOST'] ?? 'localhost'));
$absender = $CONFIG['absender'] !== '' ? $CONFIG['absender'] : ($CONFIG['smtp']['benutzer'] !== '' ? $CONFIG['smtp']['benutzer'] : 'bewerbung@' . $host);
$kopie = trim((string) $CONFIG['kopie']);
$name = $vorname . ' ' . $nachname;
$betreff = 'Bewerbung: ' . ($stelle !== '' ? $stelle : 'ohne Stellenangabe') . ' – ' . $name;

$zeilen = [
    'Neue Bewerbung über die Karriere-Website',
    '',
    'Stelle:       ' . $stelle,
    'Standort:     ' . $standort,
    '',
    'Vorname:      ' . $vorname,
    'Nachname:     ' . $nachname,
    'Telefon:      ' . $telefon,
    'E-Mail:       ' . $email,
    '',
    'Unterlagen:   ' . ($anhaenge ? implode(', ', array_column($anhaenge, 'name')) : 'keine'),
    'Datenschutz:  Einwilligung erteilt',
    'Eingang:      ' . date('d.m.Y H:i'),
    '',
    'Antworten Sie direkt auf diese E-Mail, um den Bewerber zu erreichen.',
];
$text = implode("\r\n", $zeilen);

$grenze = 'b_' . bin2hex(random_bytes(12));
$kopf = [
    'Date: ' . date('r'),
    'From: ' . kopfzeile($CONFIG['absender_name']) . ' <' . $absender . '>',
    'Reply-To: ' . kopfzeile($name) . ' <' . $email . '>',
    'To: <' . $an . '>',
];
if ($kopie !== '') {
    $kopf[] = 'Cc: <' . $kopie . '>';
}
$kopf[] = 'Subject: ' . kopfzeile($betreff);
$kopf[] = 'Message-ID: <' . bin2hex(random_bytes(10)) . '@' . $host . '>';
$kopf[] = 'MIME-Version: 1.0';
$kopf[] = 'Content-Type: multipart/mixed; boundary="' . $grenze . '"';

$rumpf = '--' . $grenze . "\r\n"
    . "Content-Type: text/plain; charset=UTF-8\r\nContent-Transfer-Encoding: base64\r\n\r\n"
    . chunk_split(base64_encode($text));
foreach ($anhaenge as $a) {
    $rumpf .= '--' . $grenze . "\r\n"
        . 'Content-Type: ' . $a['typ'] . '; name="' . kopfzeile($a['name']) . "\"\r\n"
        . "Content-Transfer-Encoding: base64\r\n"
        . 'Content-Disposition: attachment; filename="' . kopfzeile($a['name']) . "\"\r\n\r\n"
        . chunk_split(base64_encode($a['inhalt']));
}
$rumpf .= '--' . $grenze . "--\r\n";

function smtp_senden(array $s, $von, array $an, $nachricht)
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
            if (strlen($zeile) < 4 || $zeile[3] === ' ') {
                break;
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

$alleEmpfaenger = $kopie !== '' ? [$an, $kopie] : [$an];
$nachricht = implode("\r\n", $kopf) . "\r\n\r\n" . $rumpf;

if ($CONFIG['testordner'] !== '') {
    $ergebnis = @file_put_contents(rtrim($CONFIG['testordner'], '/') . '/' . date('Ymd-His') . '-' . bin2hex(random_bytes(3)) . '.eml', $nachricht) !== false
        ? true : 'Testordner nicht beschreibbar';
} elseif ($CONFIG['smtp']['host'] !== '') {
    $ergebnis = smtp_senden($CONFIG['smtp'], $absender, $alleEmpfaenger, $nachricht);
} else {
    $mailKopf = array_values(array_filter($kopf, function ($z) { return strpos($z, 'To: ') !== 0 && strpos($z, 'Subject: ') !== 0; }));
    $ergebnis = mail($an, kopfzeile($betreff), $rumpf, implode("\r\n", $mailKopf), '-f' . $absender) ? true : 'mail() fehlgeschlagen';
}

if ($ergebnis !== true) {
    error_log('Bewerbungsformular: Versand fehlgeschlagen: ' . $ergebnis);
    antwort(false, 'Ihre Bewerbung konnte gerade nicht gesendet werden. Bitte senden Sie Ihre Unterlagen per E-Mail an ' . $an . '.', 502);
}

$zeiten[] = $jetzt;
@file_put_contents($ipDatei, implode(',', $zeiten));
antwort(true, 'Vielen Dank! Ihre Bewerbung ist bei uns eingegangen.');
