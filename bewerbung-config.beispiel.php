<?php
/*
 * Vorlage für die Einstellungen des Bewerbungsformulars.
 * Kopieren als bewerbung-config.php (im selben Ordner wie bewerbung.php)
 * und nur die Werte eintragen, die vom Standard abweichen.
 * bewerbung-config.php enthält Zugangsdaten: nicht weitergeben, nicht ins Git.
 */
return [
    // Versand über ein Postfach (empfohlen, z. B. Microsoft 365: smtp.office365.com, Port 587, tls).
    // Ohne diese Angaben versendet der Server über die PHP-Funktion mail().
    'smtp' => [
        'host'       => 'smtp.office365.com',
        'port'       => 587,
        'sicherheit' => 'tls',
        'benutzer'   => 'bewerbung@guen-transporte.de',
        'passwort'   => '',
    ],

    // Absender der Benachrichtigung; leer = SMTP-Benutzer
    // 'absender' => 'bewerbung@guen-transporte.de',

    // Empfänger je Standort (Standard siehe bewerbung.php)
    // 'empfaenger' => [
    //     'Nürnberg'   => 'nuernberg-bewerbung@guen-transporte.de',
    //     'Crailsheim' => 'crailsheim-bewerbung@guen-transporte.de',
    // ],

    // Nur für Tests: Kopie jeder Bewerbung an diese Adresse
    // 'kopie' => '',
];
