<?php
/*
 * Vorlage für die Einstellungen des Bewerbungsformulars.
 * Kopieren als bewerbung-config.php – am besten eine Ebene ÜBER dem
 * Website-Ordner (dort ist sie aus dem Web nicht erreichbar), sonst neben
 * bewerbung.php mit gesperrtem Webzugriff (siehe README).
 * Nur Werte eintragen, die vom Standard in bewerbung.php abweichen.
 * Die Datei enthält ggf. Zugangsdaten: nicht weitergeben, nicht ins Git.
 */
return [
    // Absender der Benachrichtigung (Pflicht, Adresse der eigenen Domain)
    'absender' => 'bewerbung@guen-transporte.de',

    // Variante A (empfohlen): Microsoft 365 Direct Send / Relay-Connector, ohne Anmeldung.
    // IP-Adresse des Webservers in SPF bzw. Connector freigeben.
    'smtp' => [
        'host'       => 'guentransporte-de01b.mail.protection.outlook.com',
        'port'       => 25,
        'sicherheit' => 'tls',
        'benutzer'   => '',
        'passwort'   => '',
    ],

    // Variante B: SMTP AUTH mit einem Postfach (siehe README zu Einschränkungen)
    // 'smtp' => [
    //     'host'       => 'smtp.office365.com',
    //     'port'       => 587,
    //     'sicherheit' => 'tls',
    //     'benutzer'   => 'bewerbung@guen-transporte.de',
    //     'passwort'   => '',
    // ],

    // Empfänger je Standort (Standard siehe bewerbung.php)
    // 'empfaenger' => [
    //     'Nürnberg'   => 'nuernberg-bewerbung@guen-transporte.de',
    //     'Crailsheim' => 'crailsheim-bewerbung@guen-transporte.de',
    // ],

    // Ordner für die Sendebegrenzung (Standard: temporärer Ordner des Servers)
    // 'sperrordner' => '/pfad/ausserhalb/des/webroots',
];
