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
    // Absender der Benachrichtigung (Pflicht): existierende Adresse der eigenen Domain
    'absender' => 'bewerbung@guen-transporte.de',

    // Variante A (empfohlen): Microsoft 365 über Connector mit der IP-Adresse des Webservers,
    // ohne Anmeldung. Dieselben Werte gelten für Direct Send ohne Connector – das kann der
    // Tenant aber abschalten (RejectDirectSend), deshalb den Connector bevorzugen (README).
    'smtp' => [
        'host'       => 'guentransporte-de01b.mail.protection.outlook.com',
        'port'       => 25,
        'sicherheit' => 'tls',
        'benutzer'   => '',
        'passwort'   => '',
    ],

    // Variante B, nur übergangsweise: SMTP AUTH mit einem Postfach
    // (Microsoft schaltet die Passwort-Anmeldung ab Ende 2026 standardmäßig ab, siehe README)
    // 'smtp' => [
    //     'host'       => 'smtp.office365.com',
    //     'port'       => 587,
    //     'sicherheit' => 'tls',
    //     'benutzer'   => 'bewerbung@guen-transporte.de',
    //     'passwort'   => '',
    // ],

    // Empfänger und Telefon je Standort (Standard siehe bewerbung.php)
    // 'empfaenger' => [
    //     'Nürnberg'   => 'nuernberg-bewerbung@guen-transporte.de',
    //     'Crailsheim' => 'crailsheim-bewerbung@guen-transporte.de',
    // ],
    // 'telefon' => [
    //     'Nürnberg'   => '+49 911 6323697',
    //     'Crailsheim' => '+49 7951 468943',
    // ],

    // Kopie jeder Bewerbung an ein weiteres Postfach – bei Variante A nur ein internes Postfach
    // 'kopie' => '',

    // Ordner für die Sendebegrenzung (Standard: temporärer Ordner des Servers)
    // 'sperrordner' => '/pfad/ausserhalb/des/webroots',

    // Nur hinter eigenem Reverse-Proxy auf true setzen (README, „Hinter einem Reverse-Proxy“)
    // 'hinter_proxy' => false,
];
