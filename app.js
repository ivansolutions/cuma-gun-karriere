/* =========================================================
   Cuma Gün Karriere — interaction layer
   ========================================================= */

/* ---------- TRANSLATIONS ---------- */
const T = {
  de: {
    brand_sub: "Seit 1995",
    nav_prozess: "Bewerbungsprozess",
    nav_arbeitstag: "Arbeitstag",
    nav_ueber: "Über uns",
    nav_stellen: "Offene Stellen",
    nav_standorte: "Standorte",
    nav_faq: "FAQ",
    cta_apply: "Jetzt bewerben",
    cta_apply_now: "Jetzt bewerben",
    cta_apply_arrow: "Jetzt bewerben",
    cta_day: "Wie ein Arbeitstag aussieht",
    demo_photo: "Demo-Foto · wird durch echte Aufnahme ersetzt",

    /* HERO */
    hero_eyebrow: "Aktuell offene Stellen · Nürnberg & Crailsheim",
    hero_h1: "Werden Sie Paketzusteller bei Cuma\u00A0Gün Kuriertransporte\u00A0e.K.",
    hero_ups: "Im Auftrag von UPS, dem weltgrößten Paketdienst",
    hero_sub: "Familienunternehmen, gegründet im September 1995.",
    hero_lede: "Über drei Jahrzehnte Branchenerfahrung mit Werten, die heute seltener werden: Handschlagqualität, absolute Krisensicherheit, Festanstellung zu fairen Bedingungen.",
    hero_caption: "Eigene Fahrzeuge · eigenes Personal",
    hero_founder_badge: "FOTO FOLGT",
    hero_founder_name: "Cuma Gün",
    hero_founder_role: "Geschäftsinhaber",
    stat1_unit: "Jahre", stat1_label: "Familienunternehmen, gegründet im September 1995",
    stat2_unit: "Standorte", stat2_label: "Nürnberg · Crailsheim",
    stat3_unit: "Sprachen", stat3_label: "Deutsch, Russisch, Rumänisch und Türkisch im Depot-Alltag",

    /* S1 */
    s1_kicker: "01 — Bewerbungsprozess",
    s1_h2_a: "In sechs Schritten zum ", s1_h2_b: "ersten Arbeitstag", s1_h2_c: ":",
    s1_lede: "Klare Wege, keine Überraschungen. Vom ersten Klick bis zur Probefahrt erklären wir Ihnen, was als Nächstes passiert.",
    s1_01_title: "Bewerbung senden", s1_01_desc: "Unterlagen über das Formular hochladen — oder direkt anrufen.",
    s1_02_title: "Bitte warten — wir melden uns", s1_02_desc: "Nach Prüfung Ihrer Bewerbung melden wir uns persönlich bei Ihnen, sobald wir eine konkrete Antwort haben.",
    s1_03_title: "Persönliches Gespräch & Schnuppertag", s1_03_desc: "Ist nicht nur möglich, sondern ausdrücklich gewünscht. Uns ist es wichtig, dass Sie vorab ein klares Bild von Ihren Aufgaben und unserem Team bekommen, bevor wir uns für eine gemeinsame Zusammenarbeit entscheiden.",
    s1_04_title: "Probefahrt möglich", s1_04_desc: "Wenn Sie möchten, fahren Sie einen Tag als Beifahrer mit, bevor Sie unterschreiben.",
    s1_05_title: "Arbeitsvertrag", s1_05_desc: "Festanstellung, deutscher Vertrag, transparente Konditionen — keine grauen Modelle.",
    s1_06_title: "Erster Tag", s1_06_desc: "Sie starten mit einem erfahrenen Kollegen an Ihrer Seite — niemand fährt allein los.",
    s1_close_strong: "Wir melden uns persönlich.", s1_close_rest: "Lieber direkt sprechen?",

    /* S2 */
    s2_kicker: "01 — Anforderungen",
    s2_h2_a: "Was Sie ", s2_h2_b: "mitbringen sollten", s2_h2_c: ":",
    s2_lede: "Wenige formale Voraussetzungen, aber klare Erwartungen an das, was im Alltag zählt. Berufserfahrung hilft, ist aber kein Muss. Wir arbeiten Sie ein.",
    s2_01_title: "Führerschein Klasse B", s2_01_desc: "Voraussetzung für unsere Touren. Klasse C1 oder C ist ein Plus, aber keine Bedingung.",
    s2_02_title: "Zuverlässigkeit", s2_02_desc: "Sie kommen, wenn Sie kommen sollen. Für uns zählt das mehr als Berufsjahre.",
    s2_03_title: "Verantwortung", s2_03_desc: "Sie sind das Gesicht unserer Firma auf der Straße. Fahrzeug und Fracht in sicheren Händen. Wir zählen auf Sie!",
    s2_04_title: "Sprachkenntnisse", s2_04_desc: "Grundkenntnisse Deutsch reichen für den Start. Im Depot sprechen wir DE, RU, RO, TR.",

    /* S3 */
    s3_kicker: "02 — Arbeitstag",
    s3_h2_a: "Wie ein ", s3_h2_b: "Arbeitstag", s3_h2_c: " aussieht:",
    s3_lede: "Ehrlich beschrieben — vom ersten Scan am Depot bis zum Feierabend. Wir nennen die Zeiten so, wie sie wirklich sind.",
    s3_t1_time: "07:00 Uhr", s3_t1_title: "Arbeitsbeginn",
    s3_t1_desc: "Der Arbeitstag beginnt um 07:00 Uhr am Fahrzeug. Etwas früher zu kommen ist eine persönliche Entscheidung — niemand setzt das voraus, niemand drängt.",
    s3_t2_time: "07:00 – 08:30 Uhr", s3_t2_title: "Vorbereitung & Abfahrt",
    s3_t2_desc: "Der Arbeitstag beginnt um 07:00 Uhr am Fahrzeug. Etwas früher zu kommen ist eine persönliche Entscheidung — niemand setzt das voraus, niemand drängt.<br><strong>Ladung richten:</strong> Sendungen scannen, nach Stopps schlichten, Express-Pakete prüfen.<br><strong>Abfahrt:</strong> Planmäßig zwischen 08:15 und 08:30 Uhr.<br>Kaffeezeit ist immer drin.",
    s3_t3_time: "08:30 – 13:00 Uhr", s3_t3_title: "Ihre Route, Ihr Rhythmus",
    s3_t3_desc: "Sie sind auf Ihrer vertrauten Route unterwegs. Express-Sendungen planen wir vorab gemeinsam mit der Disposition - die Kunden warten. Das gibt Ihnen maximale Planungssicherheit für den Tag – ohne Stress und Überraschungen zwischendurch.",
    s3_t4_time: "13:00 – 13:45 Uhr", s3_t4_title: "Pause (Mittag)",
    s3_t4_desc: "Sie ist ein Muss: Gesetzlich vorgeschrieben nach spätestens 4,5 Stunden Lenkzeit.<br><br>Flexibel unterwegs planbar (Richtwert: 13:00 bis 13:45 Uhr).",
    s3_t5_time: "13:45 – 16:00 Uhr", s3_t5_title: "Zweite Tageshälfte",
    s3_t5_desc: "Nach der Pause die verbleibenden Pakete ausliefern. Parallel feste Vertragskunden anfahren und spontane Tagesaufträge übernehmen. Zwischen 15:30 und 16:00 Uhr Rückkehr ins Center.",
    s3_t6_time: "", s3_t6_title: "Nach der Tour",
    s3_t6_desc: "Bei Bedarf das Fahrzeug waschen. Etwaige Vorkommnisse oder Probleme auf der Tour direkt mit der Disposition klären. Tour ordnungsgemäß im System abschließen. Feierabend.",
    s3_t7_time: "", s3_t7_title: "Erste Wochen",
    s3_t7_desc: "Aller Anfang ist schwer, deshalb lassen wir Sie nicht allein: In der ersten Woche sind Sie Beifahrer. Ein erfahrener Kollege zeigt Ihnen die Tour. Unser Job verlangt echtes Können und ist kein Beruf für jedermann — das wissen wir. Planen Sie in der ersten Zeit ruhig etwas mehr Spielraum ein. Bis Sie die Route perfekt kennen, kann es auch mal 16:00 oder 17:00 Uhr werden. Machen Sie sich keine Sorgen: Ihre Arbeitszeit wird natürlich komplett erfasst.",
    s3_close_strong: "Alle Details", s3_close_a: " — individuelle Konditionen, genaue Stunden, konkrete Aufgaben — ", s3_close_strong2: "besprechen wir im Vorstellungsgespräch.", s3_close_b: " Sie sollen wissen, worauf Sie sich einlassen, bevor Sie unterschreiben.",

    /* S4 */
    s4_kicker: "03 — Offene Stellen",
    s4_h2_a: "Aktuell ", s4_h2_b: "suchen wir", s4_h2_c: ":",
    s4_lede: "Drei offene Stellen an unseren Standorten. Ist nichts Passendes dabei, freuen wir uns über Ihre Initiativbewerbung.",
    tag_active: "Aktiv", tag_initiativ: "Initiativ", tag_full: "Vollzeit", tag_part: "Teilzeit", tag_mini: "Minijob", tag_fullpart: "Vollzeit · Teilzeit",
    loc_nbg: "Nürnberg", loc_crl: "Crailsheim", loc_both: "Nürnberg · Crailsheim",
    s4_j1_title: "Paketzusteller (m/w/d)", s4_j1_desc: "Tägliche Zustelltouren im Stadtgebiet Nürnberg und Umgebung. Festanstellung mit deutschem Arbeitsvertrag, Einarbeitung mit erfahrenem Kollegen.",
    s4_j2_title: "Paketzusteller (m/w/d)", s4_j2_desc: "Zustellung in und um Crailsheim. Feste Vollzeitstelle mit geregelten Touren. Klasse-B-Führerschein erforderlich.",
    s4_j3_title: "Be- und Entlader (m/w/d)", s4_j3_desc: "Verladearbeiten am Depot Nürnberg. Frühschicht, Beginn am frühen Morgen. Körperliche Belastbarkeit ist wichtig, ein Führerschein nicht nötig.",
    s4_j4_title: "Initiativbewerbung", s4_j4_desc: "Kein passender Job dabei? Schicken Sie uns trotzdem Ihre Unterlagen. Gute Leute finden bei uns immer einen Platz — auch außerhalb der aktuell ausgeschriebenen Stellen.",

    /* S5 */
    s5_kicker: "04 — Stimmen aus dem Team",
    s5_h2_a: "Echte Geschichten — ", s5_h2_b: "in Kürze hier", s5_h2_c: ":",
    s5_lede: "Wir sammeln gerade Geschichten unserer Fahrer — mit Foto und Namen, sofern sie einverstanden sind. Die ersten folgen in den nächsten Wochen.",
    voice_demo: "Demo · Foto folgt",
    voice_courier: "Kurierfahrer", voice_dispatch: "Disposition", voice_loader: "Be- und Entlader", voice_workshop: "Werkstatt",

    /* S6 */
    s6_kicker: "05 — Häufige Fragen",
    s6_h2_a: "Was Bewerber ", s6_h2_b: "oft fragen", s6_h2_c: ":",
    s6_lede: "Wenn Ihre Frage nicht dabei ist — schreiben Sie uns. Wir antworten persönlich.",
    s6_q1: "Welche Unterlagen brauche ich für die Bewerbung?",
    s6_a1: "Ein übersichtlicher Lebenslauf sowie <strong>aktuelles Foto</strong> reicht für den ersten Schritt. Ein klar strukturierter <strong>Lebenslauf</strong> ist für Sie von großem Vorteil.<br><br>Wir gehen davon aus, dass alle notwendigen Dokumente — wie <strong>Führerschein</strong> und <strong>Aufenthaltspapiere</strong> — gültig vorliegen und bereitgehalten werden.<br><br>Wir freuen uns auf Ihre Bewerbung!",
    s6_q2: "Was, wenn mein Deutsch nicht perfekt ist?",
    s6_a2: "Hauptsache, wir verstehen uns: Für den Start reicht verständliches Deutsch völlig aus. Niemand wird abgewiesen, weil mal ein Wort fehlt.",
    s6_q3: "Was verdiene ich?",
    s6_a3: "Sie erhalten eine Festanstellung mit einem festen, sicheren Monatsgehalt auf Basis einer 40-Stunden-Woche, zuzüglich Spesen. Die Details besprechen wir transparent im persönlichen Gespräch.",
    s6_q4: "Ist das eine Festanstellung?",
    s6_a4: "Ja. Festanstellung mit deutschem Arbeitsvertrag, allen Sozialleistungen und regulärer Lohnabrechnung. Keine Scheinselbstständigkeit, keine grauen Modelle.",
    s6_q5: "Wie sieht der erste Arbeitstag aus?",
    s6_a5: "Sie kommen morgens ins Depot, lernen die Kollegen kennen und fahren die erste Woche als Beifahrer mit. Erst wenn Sie sich sicher fühlen, übernehmen Sie eine eigene Tour. Niemand wird ins kalte Wasser geworfen.",
    s6_q6: "Wie lange dauert die Einarbeitung?",
    s6_a6: "In der ersten Woche fahren Sie bei einem Kollegen mit. Danach werden Sie beim selbstständigen Fahren weiterhin tatkräftig unterstützt. So stellen wir sicher, dass unsere Kunden wie gewohnt bestens betreut werden und Sie in Ruhe eingearbeitet werden.",
    s6_q7: "Wo wird gefahren?",
    s6_a7: "Der Schwerpunkt liegt aktuell auf Nürnberg und Umgebung. Crailsheim ist der zweite Standort. Weitere Einsatzorte sind nach Absprache möglich.",
    s6_q8: "Wie schnell bekomme ich eine Antwort?",
    s6_a8: "Wir prüfen jede Bewerbung sorgfältig und melden uns persönlich, sobald wir eine konkrete Antwort haben.",

    /* S7 */
    s7_kicker: "06 — Standorte",
    s7_h2_a: "Zwei Standorte", s7_h2_b: "eine Disposition", s7_h2_c: ":",
    s7_lede: "Wir verfügen über zwei Niederlassungen in Nürnberg und Crailsheim. Ihr künftiger Arbeitsort sowie der Ort des Bewerbungsgesprächs richten sich nach dem Standort, für den Sie sich bewerben.",
    loc_hq: "Hauptsitz", loc_branch: "Niederlassung",
    loc_addr: "Adresse", loc_tel: "Telefon", loc_mail: "E-Mail",
    loc_hours: "Öffnungszeiten", loc_hours_val: "Mo–Fr 07:00–18:00 · Sa 07:00–12:00",
    loc_hours_nbg: "Mo–Fr 07:00–18:00 · Sa 07:00–12:00",
    loc_hours_crl: "Mo–Fr 07:00–17:00 · Sa 07:00–12:00",
    loc_tel_crl: "+49 7951 468943",
    loc_more: "Mehr zum Standort", loc_route: "Route planen",
    bew_steps_label: "In sechs Schritten zum ersten Arbeitstag",
    bew_contact_label: "Direkter Kontakt zur Bewerbung",
    ueber_h1: "Über uns",
    ueber_lede: "Diese Seite wird derzeit vorbereitet.",
    ueber_body: "Wir blicken auf eine über 30-jährige, erfolgreiche Partnerschaft mit United Parcel Service zurück. Neben unserer fundierten Branchenerfahrung zeichnet uns vor allem die enorme Loyalität unseres Teams aus: Zahlreiche Kolleginnen und Kollegen sind seit 10, 15, 20 oder sogar über 25 Jahren fest bei uns an Bord. Viele andere haben uns bis zu ihrer Vollzeitrente begleitet und wurden von uns dankend verabschiedet.",
    ueber_home: "Zurück zur Startseite",

    /* S8 */
    s8_kicker: "07 — Bewerbung",
    s8_h2_a: "Ein kurzes Formular. ", s8_h2_b: "Eine ehrliche Antwort", s8_h2_c: ":",
    s8_lede: "Schreiben Sie uns. Wenn Sie zu uns passen, melden wir uns persönlich bei Ihnen, sobald wir Ihre Unterlagen geprüft haben.",
    s8_b1: "Sorgfältige Prüfung jeder Bewerbung",
    s8_b2: "Erstgespräch persönlich oder telefonisch",
    s8_b3: "Probefahrt vor Vertragsunterschrift möglich",
    s8_b4: "Datenverarbeitung gemäß DSGVO",
    s8_call: "Lieber direkt anrufen?",
    form_kicker: "Bewerbung senden",
    form_title: "Ihre Bewerbung",
    form_sub: "Felder mit * sind Pflicht. Unterlagen können Sie direkt unten anhängen.",
    form_vorname: "Vorname *", form_nachname: "Nachname *", form_telefon: "Telefon *", form_email: "E-Mail *",
    form_position: "Position", form_standort: "Bevorzugter Standort", form_around: "Umgebung Nürnberg", form_no_pref: "egal / keine Präferenz",
    form_sprache: "Sprache für Rückruf",
    form_pos1: "Paketzusteller Nürnberg (Vollzeit)", form_pos2: "Paketzusteller Crailsheim (Vollzeit)",
    form_pos3: "Be- und Entlader Nürnberg (Minijob)", form_pos4: "Initiativbewerbung",
    form_files: "Unterlagen (PDF/DOC/DOCX, max. 10 MB)",
    form_drop: "Hierher ziehen oder <u>klicken zum Auswählen</u>",
    form_drop_hint: "PDF · DOC · DOCX · max. 10 MB",
    form_dsgvo: "Ich willige in die Verarbeitung meiner Daten gemäß <a href=\"#datenschutz\" data-legal=\"privacy\" style=\"color:var(--bronze);text-decoration:underline;\">Datenschutzerklärung</a> ein. *",
    form_submit: "Bewerbung senden",
    form_ok_title: "Vielen Dank!",
    form_ok_text: "Wir haben Ihre Bewerbung erhalten. Nach Prüfung Ihrer Unterlagen melden wir uns persönlich bei Ihnen.",

    /* Footer */
    footer_tagline: "seit September 1995",
    footer_menu: "Menü", footer_locations: "Standorte", footer_legal: "Rechtliches",
    footer_imprint: "Impressum", footer_privacy: "Datenschutzerklärung", footer_a11y: "Barrierefreiheitserklärung",
    footer_family: "Familienunternehmen · Sitz Nürnberg",
    footer_translations: "Übersetzungen DE/RU/RO/TR — werden noch finalisiert",
    emp_kicker: "MITARBEITERGESCHICHTE",
    emp_back: "Zurück zur Übersicht",
    footer_cookies: "Cookie-Einstellungen",
    legal_kicker: "RECHTLICHES",
    legal_placeholder: "Platzhalter · wird vor Veröffentlichung finalisiert",
    legal_imprint_title: "Impressum",
    legal_imprint_text: "Hier folgt der vollständige Impressum-Text mit allen gesetzlich erforderlichen Angaben gemäß § 5 TMG. Wird vor Veröffentlichung finalisiert.",
    legal_privacy_title: "Datenschutzerklärung",
    legal_privacy_text: "Hier folgt die vollständige Datenschutzerklärung gemäß DSGVO Art. 13/14 — welche Daten wir wann zu welchem Zweck verarbeiten, Speicherdauer, Ihre Rechte als betroffene Person, Kontakt zum Datenschutzbeauftragten. Wird vor Veröffentlichung finalisiert.",
    legal_agb_title: "Allgemeine Geschäftsbedingungen",
    legal_agb_text: "Hier folgen die allgemeinen Geschäftsbedingungen. Wird vor Veröffentlichung finalisiert.",
    legal_a11y_title: "Barrierefreiheitserklärung",
    legal_a11y_text: "Hier folgt die Barrierefreiheitserklärung gemäß BFSG. Wird vor Veröffentlichung finalisiert.",
    ck_title: "Wir verwenden Cookies",
    ck_body: "Diese Website verwendet Cookies, um Ihr Erlebnis zu verbessern. Notwendige Cookies sind für den Betrieb erforderlich. Statistik- und Marketing-Cookies helfen uns, die Webseite zu verbessern — Sie entscheiden selbst, ob Sie zustimmen.",
    ck_body_short: "Diese Website verwendet Cookies, um Ihr Erlebnis zu verbessern.",
    ck_settings: "Einstellungen",
    ck_cat1: "Notwendig", ck_cat1_hint: "Für den Betrieb der Seite erforderlich",
    ck_cat2: "Statistik", ck_cat2_hint: "Anonyme Nutzungsanalyse",
    ck_cat3: "Marketing", ck_cat3_hint: "Personalisierte Inhalte",
    ck_accept_all: "Alle akzeptieren", ck_confirm: "Auswahl bestätigen", ck_essential: "Nur notwendige", ck_privacy: "Datenschutzerklärung",
  },

  ru: {
    brand_sub: "С 1995 года",
    nav_prozess: "Процесс приёма", nav_arbeitstag: "Рабочий день", nav_ueber: "О нас", nav_stellen: "Вакансии",
    nav_standorte: "Локации", nav_faq: "Вопросы",
    cta_apply: "Подать заявку", cta_apply_now: "Подать заявку", cta_apply_arrow: "Подать заявку",
    cta_day: "Как проходит рабочий день",
    demo_photo: "Демо-фото · будет заменено реальным снимком",

    hero_eyebrow: "Открытые вакансии · Нюрнберг и Крайльсхайм",
    hero_h1: "Станьте доставщиком посылок в компании Cuma\u00A0Gün Kuriertransporte\u00A0e.K.",
    hero_ups: "По поручению UPS — крупнейшей в мире службы доставки посылок",
    hero_sub: "Семейное предприятие, основано в сентябре 1995 года.",
    hero_lede: "Уже более трёх десятилетий предприятие находится в руках семьи. У нас слово остаётся словом, и Вы получаете постоянную работу с немецким трудовым договором на честных условиях.",
    hero_caption: "Свой автопарк · свой персонал",
    hero_founder_badge: "ФОТО СКОРО",
    hero_founder_name: "Cuma Gün",
    hero_founder_role: "Владелец компании",
    stat1_unit: "лет", stat1_label: "Семейное предприятие, основано в сентябре 1995 года",
    stat2_unit: "локации", stat2_label: "Nürnberg · Crailsheim",
    stat3_unit: "языка", stat3_label: "Немецкий, русский, румынский и турецкий — повседневно в депо",

    s1_kicker: "01 — Процесс приёма",
    s1_h2_a: "Шесть шагов до ", s1_h2_b: "первого рабочего дня", s1_h2_c: ":",
    s1_lede: "Прозрачный путь, без сюрпризов. От первого клика до пробной поездки — мы объясняем, что будет дальше.",
    s1_01_title: "Отправить заявку", s1_01_desc: "Загрузите документы через форму — или просто позвоните.",
    s1_02_title: "Подождите — мы свяжемся", s1_02_desc: "После рассмотрения вашей заявки мы свяжемся с Вами лично, как только сможем дать конкретный ответ.",
    s1_03_title: "Личная встреча", s1_03_desc: "Вы приезжаете в депо — обсуждаем маршрут, локацию, условия.",
    s1_04_title: "Возможна пробная поездка", s1_04_desc: "При желании — один день рядом с водителем, прежде чем подписать договор.",
    s1_05_title: "Трудовой договор", s1_05_desc: "Постоянное трудоустройство, немецкий договор, прозрачные условия — никаких серых схем.",
    s1_06_title: "Первый день", s1_06_desc: "Вы начинаете рядом с опытным коллегой — никто не выезжает один.",
    s1_close_strong: "Мы свяжемся лично.", s1_close_rest: "Хотите поговорить напрямую?",

    s2_kicker: "01 — Требования",
    s2_h2_a: "Что Вы должны ", s2_h2_b: "принести с собой", s2_h2_c: ":",
    s2_lede: "Мало формальных требований, но чёткие ожидания к тому, что действительно важно в работе. Опыт помогает, но не обязателен — мы Вас всему обучим.",
    s2_01_title: "Права категории B", s2_01_desc: "Обязательное условие для наших маршрутов. C1 или C — плюс, но не требование.",
    s2_02_title: "Надёжность", s2_02_desc: "Вы приходите, когда нужно прийти. Для нас это важнее, чем годы стажа.",
    s2_03_title: "Ответственность", s2_03_desc: "На дороге вы — лицо нашей компании. Автомобиль и груз в надёжных руках. Мы на вас рассчитываем!",
    s2_04_title: "Знание языка", s2_04_desc: "Базового немецкого достаточно для старта. В депо мы говорим на DE, RU, RO, TR.",

    s3_kicker: "02 — Рабочий день",
    s3_h2_a: "Как выглядит ", s3_h2_b: "рабочий день", s3_h2_c: ":",
    s3_lede: "Честно описано — от первого скана в депо до конца смены. Мы называем часы такими, какие они есть.",
    s3_t1_time: "06:45 – 07:00", s3_t1_title: "Подход к машине",
    s3_t1_desc: "Рабочий день начинается в 07:00 у машины. Прийти чуть раньше — это личный выбор; никто этого не требует и не подгоняет.",
    s3_t2_time: "07:00 – 08:30", s3_t2_title: "Сканирование, сортировка, проверка",
    s3_t2_desc: "Рабочий день начинается в 07:00 у машины. Прийти чуть раньше — это личный выбор; никто этого не требует и не подгоняет.<br><br>Вы сканируете отправления, сортируете их по порядку остановок и проверяете экспресс. Когда всё готово, выезжаете — обычно в первой половине восьмого часа.",
    s3_t3_time: "08:30 – после полудня", s3_t3_title: "Ваш маршрут, Ваш ритм",
    s3_t3_desc: "Вы едете по своему постоянному маршруту. Экспресс-доставки согласовываются заранее с диспетчером — никаких сюрпризов в середине дня.",
    s3_t4_time: "13:00 – 13:45", s3_t4_title: "Обязательный по закону перерыв",
    s3_t4_desc: "Перерыв после 4,5 часов вождения обязателен по закону. Точное время Вы выбираете сами по маршруту — обычно между 13:00 и 13:45.",
    s3_t5_time: "13:45 – 15:30", s3_t5_title: "Вторая половина дня",
    s3_t5_desc: "После перерыва Вы доставляете оставшиеся посылки. Параллельно идут заборы — как спонтанные в течение дня, так и регулярные у договорных клиентов. К 15:00 / 15:30 Вы возвращаетесь в депо.",
    s3_t6_time: "", s3_t6_title: "Завершение в депо",
    s3_t6_desc: "При необходимости — помыть машину. Если по маршруту есть что обсудить, делаете это напрямую с диспетчером. Затем — домой.",
    s3_t7_time: "", s3_t7_title: "Время обучения — это рабочее время",
    s3_t7_desc: "В первый-второй месяц закладывайте больше времени — до 16:00 или 17:00 это нормально, пока Вы учите маршрут. Опытный коллега всё это время рядом с Вами.",
    s3_close_strong: "Все детали", s3_close_a: " — индивидуальные условия, точные часы, конкретные задачи — ", s3_close_strong2: "мы обсуждаем на собеседовании.", s3_close_b: " Вы должны понимать, на что соглашаетесь, ещё до подписания.",

    s4_kicker: "03 — Открытые вакансии",
    s4_h2_a: "Сейчас ", s4_h2_b: "мы ищем", s4_h2_c: ":",
    s4_lede: "Три открытые вакансии на наших локациях. Если подходящего нет, будем рады Вашей инициативной заявке.",
    tag_active: "Активна", tag_initiativ: "Инициативная", tag_full: "Полная занятость", tag_part: "Частичная", tag_fullpart: "Полная · Частичная",
    loc_nbg: "Нюрнберг", loc_crl: "Крайльсхайм", loc_both: "Нюрнберг · Крайльсхайм",
    s4_j1_title: "Курьер-доставщик (м/ж/д)", s4_j1_desc: "Ежедневные маршруты по Нюрнбергу и окрестностям. Постоянное трудоустройство, немецкий договор, ввод в работу с опытным коллегой.",
    s4_j2_title: "Курьер-доставщик (м/ж/д)", s4_j2_desc: "Доставка в Крайльсхайме и окрестностях. Постоянная работа на полную занятость с регулярными маршрутами. Права категории B обязательны.",
    s4_j3_title: "Грузчик / разгрузчик (м/ж/д)", s4_j3_desc: "Погрузочные работы в депо Крайльсхайма. Ранняя смена, начало ранним утром. Важна физическая выносливость, права не требуются.",
    s4_j4_title: "Инициативная заявка", s4_j4_desc: "Нет подходящей вакансии? Всё равно пришлите документы. Для хороших людей у нас всегда найдётся место — даже вне открытых позиций.",

    s5_kicker: "04 — Голоса команды",
    s5_h2_a: "Реальные истории — ", s5_h2_b: "скоро здесь", s5_h2_c: ":",
    s5_lede: "Мы собираем истории наших водителей — с фото и именем, если они на это согласны. Первые появятся в ближайшие недели.",
    voice_demo: "Демо · фото будет позже",
    voice_courier: "Курьер", voice_dispatch: "Диспетчер", voice_loader: "Грузчик", voice_workshop: "Мастерская",

    s6_kicker: "05 — Частые вопросы",
    s6_h2_a: "Что чаще всего ", s6_h2_b: "спрашивают кандидаты", s6_h2_c: ":",
    s6_lede: "Если Вашего вопроса нет — напишите нам. Мы отвечаем лично.",
    s6_q1: "Какие документы нужны для подачи заявки?",
    s6_a1: "На первом этапе достаточно короткого резюме. Права, документы о пребывании (если требуется) и справку о несудимости обсудим на личной встрече. Если чего-то не хватает — скажем прямо; Вам не нужно решать всё заранее.",
    s6_q2: "Что, если мой немецкий неидеален?",
    s6_a2: "За три десятилетия у нас работали коллеги более чем из двадцати стран. Понятного немецкого достаточно для старта. В работе мы говорим также на русском, румынском и турецком — никого не отвергают из-за слова.",
    s6_q3: "Как обсуждается оплата?",
    s6_a3: "Лично на собеседовании. На сайте мы не указываем приманочные цифры, потому что оплата зависит от локации, маршрута и опыта. На встрече называем конкретную сумму — и она действует.",
    s6_q4: "Это постоянное трудоустройство?",
    s6_a4: "Да. Постоянное трудоустройство с немецким договором, всеми социальными взносами и регулярной заработной платой. Никаких псевдо-самозанятых и серых схем.",
    s6_q5: "Как проходит первый рабочий день?",
    s6_a5: "Утром Вы приезжаете в депо, знакомитесь с коллегами и первую неделю едете рядом с водителем. Только когда Вы чувствуете себя уверенно, берёте свой маршрут. Никого не бросают в воду.",
    s6_q6: "Сколько длится адаптация?",
    s6_a6: "Как правило, одна-две недели, при необходимости дольше. Нет жёсткого секундомера — Вы берёте маршрут, когда Вы и наставник согласны, что готовы.",
    s6_q7: "Где осуществляются поездки?",
    s6_a7: "Основной упор — Нюрнберг и окрестности. Крайльсхайм — вторая локация. Другие места работы — по договорённости.",
    s6_q8: "Как быстро я получу ответ?",
    s6_a8: "Мы внимательно изучаем каждую заявку и свяжемся лично, как только сможем дать конкретный ответ.",

    s7_kicker: "06 — Локации",
    s7_h2_a: "Две локации, ", s7_h2_b: "одна диспетчерская", s7_h2_c: ":",
    s7_lede: "Нюрнберг — главный офис, Крайльсхайм — филиал. Оба депо Вы можете посетить в любое время по договорённости.",
    loc_hq: "Главный офис", loc_branch: "Филиал",
    loc_addr: "Адрес", loc_tel: "Телефон", loc_mail: "E-Mail",
    loc_hours: "Часы работы", loc_hours_val: "Пн–Пт 07:00–18:00 · Сб 07:00–12:00",
    loc_hours_nbg: "Пн–Пт 07:00–18:00 · Сб 07:00–12:00",
    loc_hours_crl: "Пн–Пт 07:00–17:00 · Сб 07:00–12:00",
    loc_tel_crl: "+49 — будет подтверждён управляющим",
    loc_more: "Подробнее о локации", loc_route: "Построить маршрут",
    bew_steps_label: "Шесть шагов до первого рабочего дня",
    bew_contact_label: "Прямой контакт для заявки",
    ueber_h1: "О нас",
    ueber_lede: "Эта страница сейчас готовится.",
    ueber_body: "Совсем скоро здесь Вы узнаете больше о Cuma Gün Kuriertransporte e.K. — о семье, стоящей за компанией, трёх десятилетиях отраслевого опыта, наших ценностях и нашем партнёрстве с United Parcel Service.",
    ueber_home: "Вернуться на главную",

    s8_kicker: "07 — Заявка",
    s8_h2_a: "Короткая форма. ", s8_h2_b: "Честный ответ", s8_h2_c: ":",
    s8_lede: "Напишите нам. Если Вы нам подходите, мы свяжемся с Вами лично, как только рассмотрим Ваши документы.",
    s8_b1: "Тщательное рассмотрение каждой заявки",
    s8_b2: "Первая беседа лично или по телефону",
    s8_b3: "Возможна пробная поездка до подписания договора",
    s8_b4: "Обработка данных согласно GDPR",
    s8_call: "Хотите позвонить?",
    form_kicker: "Отправить заявку",
    form_title: "Ваша заявка",
    form_sub: "Поля со * обязательны. Документы можно прикрепить ниже.",
    form_vorname: "Имя *", form_nachname: "Фамилия *", form_telefon: "Телефон *", form_email: "E-Mail *",
    form_position: "Позиция", form_standort: "Предпочтительная локация", form_around: "Окрестности Нюрнберга", form_no_pref: "не важно / без предпочтений",
    form_sprache: "Язык для обратной связи",
    form_pos1: "Курьер Нюрнберг (Полная)", form_pos2: "Курьер Крайльсхайм (Полная)",
    form_pos3: "Грузчик Крайльсхайм (Частичная)", form_pos4: "Инициативная заявка",
    form_files: "Документы (PDF/DOC/DOCX, до 10 МБ)",
    form_drop: "Перетащите сюда или <u>нажмите для выбора</u>",
    form_drop_hint: "PDF · DOC · DOCX · до 10 МБ",
    form_dsgvo: "Я согласен на обработку моих данных согласно <a href=\"#datenschutz\" data-legal=\"privacy\" style=\"color:var(--bronze);text-decoration:underline;\">политике конфиденциальности</a>. *",
    form_submit: "Отправить заявку",
    form_ok_title: "Спасибо!",
    form_ok_text: "Мы получили Вашу заявку. После рассмотрения Ваших документов мы свяжемся с Вами лично.",

    footer_tagline: "Семейная курьерская служба с сентября 1995 года.",
    footer_menu: "Меню", footer_locations: "Локации", footer_legal: "Юридическая информация",
    footer_imprint: "Выходные данные", footer_privacy: "Политика конфиденциальности", footer_a11y: "Декларация о доступности",
    footer_family: "Семейное предприятие · Главный офис Нюрнберг",
    footer_translations: "Переводы DE/RU/RO/TR — ещё дорабатываются",
    emp_kicker: "ИСТОРИЯ СОТРУДНИКА",
    emp_back: "Назад к обзору",
    footer_cookies: "Настройки cookie",
    legal_kicker: "ЮРИДИЧЕСКАЯ ИНФОРМАЦИЯ",
    legal_placeholder: "Заполнитель · будет финализирован перед публикацией",
    legal_imprint_title: "Выходные данные",
    legal_imprint_text: "Здесь будет полный текст выходных данных со всеми сведениями, требуемыми законом согласно § 5 TMG. Будет финализировано перед публикацией.",
    legal_privacy_title: "Политика конфиденциальности",
    legal_privacy_text: "Здесь будет полная политика конфиденциальности согласно ст. 13/14 GDPR — какие данные мы обрабатываем, когда, для какой цели, сроки хранения, ваши права как субъекта, контакт с уполномоченным по защите данных. Будет финализировано перед публикацией.",
    legal_agb_title: "Общие условия и положения",
    legal_agb_text: "Здесь будут общие условия и положения. Будет финализировано перед публикацией.",
    legal_a11y_title: "Декларация о доступности",
    legal_a11y_text: "Здесь будет декларация о доступности согласно BFSG. Будет финализировано перед публикацией.",
    ck_title: "Мы используем cookie",
    ck_body: "Этот сайт использует cookie, чтобы улучшить ваш опыт. Необходимые cookie требуются для работы. Статистические и маркетинговые cookie помогают улучшить сайт — вы решаете сами, соглашаться ли.",
    ck_body_short: "Этот сайт использует cookie, чтобы улучшить ваш опыт.",
    ck_settings: "Настройки",
    ck_cat1: "Необходимые", ck_cat1_hint: "Требуются для работы сайта",
    ck_cat2: "Статистика", ck_cat2_hint: "Анонимный анализ использования",
    ck_cat3: "Маркетинг", ck_cat3_hint: "Персонализированный контент",
    ck_accept_all: "Принять все", ck_confirm: "Подтвердить выбор", ck_essential: "Только необходимые", ck_privacy: "Политика конфиденциальности",
  },

  ro: {
    brand_sub: "Din 1995",
    nav_prozess: "Procesul de aplicare", nav_arbeitstag: "Ziua de lucru", nav_ueber: "Despre noi", nav_stellen: "Posturi vacante",
    nav_standorte: "Locații", nav_faq: "Întrebări",
    cta_apply: "Aplicați acum", cta_apply_now: "Aplicați acum", cta_apply_arrow: "Aplicați acum",
    cta_day: "Cum arată o zi de lucru",
    demo_photo: "Foto demo · va fi înlocuită cu o imagine reală",

    hero_eyebrow: "Posturi vacante acum · Nürnberg și Crailsheim",
    hero_h1: "Deveniți livrator de colete la Cuma\u00A0Gün Kuriertransporte\u00A0e.K.",
    hero_ups: "În numele UPS, cel mai mare serviciu de colete din lume",
    hero_sub: "Afacere de familie, fondată în septembrie 1995.",
    hero_lede: "De peste trei decenii, firma este condusă de familie. La noi, cuvântul dat se ține, iar dumneavoastră primiți un loc de muncă stabil, cu contract german, în condiții corecte.",
    hero_caption: "Vehicule proprii · personal propriu",
    hero_founder_badge: "FOTO URMEAZĂ",
    hero_founder_name: "Cuma Gün",
    hero_founder_role: "Proprietarul firmei",
    stat1_unit: "ani", stat1_label: "Afacere de familie, fondată în septembrie 1995",
    stat2_unit: "locații", stat2_label: "Nürnberg · Crailsheim",
    stat3_unit: "limbi", stat3_label: "Germană, rusă, română și turcă în depozit",

    s1_kicker: "01 — Procesul de aplicare",
    s1_h2_a: "Șase pași până la ", s1_h2_b: "prima zi de lucru", s1_h2_c: ":",
    s1_lede: "Pași clari, fără surprize. De la primul clic până la cursa de probă — vă explicăm ce urmează.",
    s1_01_title: "Trimiteți aplicația", s1_01_desc: "Încărcați documentele prin formular — sau sunați direct.",
    s1_02_title: "Așteptați — vă contactăm", s1_02_desc: "După examinarea cererii dvs., vă contactăm personal de îndată ce avem un răspuns concret.",
    s1_03_title: "Discuție personală", s1_03_desc: "Veniți la depozit — discutăm traseul, locația și condițiile.",
    s1_04_title: "Cursă de probă posibilă", s1_04_desc: "Dacă doriți, mergeți o zi ca pasager înainte de a semna.",
    s1_05_title: "Contract de muncă", s1_05_desc: "Angajare permanentă, contract german, condiții transparente — fără modele gri.",
    s1_06_title: "Prima zi", s1_06_desc: "Începeți alături de un coleg cu experiență — nimeni nu pleacă singur pe traseu.",
    s1_close_strong: "Vă răspundem personal.", s1_close_rest: "Preferați să vorbiți direct?",

    s2_kicker: "01 — Cerințe",
    s2_h2_a: "Ce ar trebui ", s2_h2_b: "să aduceți", s2_h2_c: ":",
    s2_lede: "Puține cerințe formale, dar așteptări clare la ceea ce contează zilnic. Experiența ajută, dar nu este obligatorie. Vă instruim noi.",
    s2_01_title: "Permis categoria B", s2_01_desc: "Necesar pentru traseele noastre. Categoria C1 sau C este un plus, dar nu o condiție.",
    s2_02_title: "Seriozitate", s2_02_desc: "Veniți când trebuie să veniți. Pentru noi contează mai mult decât anii de experiență.",
    s2_03_title: "Responsabilitate", s2_03_desc: "Pe drum, dumneavoastră sunteți chipul firmei noastre. Vehiculul și marfa sunt pe mâini sigure. Contăm pe dumneavoastră!",
    s2_04_title: "Cunoștințe de limbă", s2_04_desc: "Germana de bază este suficientă pentru început. În depozit vorbim DE, RU, RO, TR.",

    s3_kicker: "02 — Ziua de lucru",
    s3_h2_a: "Cum arată o ", s3_h2_b: "zi de lucru", s3_h2_c: ":",
    s3_lede: "Descrisă cinstit — de la primul scan la depozit până la sfârșitul programului. Spunem orele așa cum sunt.",
    s3_t1_time: "06:45 – 07:00", s3_t1_title: "Ajungere la vehicul",
    s3_t1_desc: "Ziua începe la 07:00 la vehicul. A veni puțin mai devreme este o decizie personală — nimeni nu o impune, nimeni nu vă grăbește.",
    s3_t2_time: "07:00 – 08:30", s3_t2_title: "Scanare, sortare, verificare",
    s3_t2_desc: "Ziua începe la 07:00 la vehicul. A veni puțin mai devreme este o decizie personală — nimeni nu o impune, nimeni nu vă grăbește.<br><br>Scanați coletele, le sortați după ordinea opririlor și verificați expresurile. Când totul este gata, plecați — de obicei în prima jumătate a celei de-a opta ore.",
    s3_t3_time: "08:30 – după-amiază", s3_t3_title: "Traseul Dvs., ritmul Dvs.",
    s3_t3_desc: "Conduceți traseul Dvs. fix. Expresurile sunt stabilite anterior cu dispeceratul — aveți claritate asupra termenelor zilei, fără surprize la mijloc.",
    s3_t4_time: "13:00 – 13:45", s3_t4_title: "Pauză obligatorie prin lege",
    s3_t4_desc: "Pauza după 4,5 ore de condus este obligatorie prin lege. Momentul exact îl alegeți Dvs. pe traseu — de obicei între 13:00 și 13:45.",
    s3_t5_time: "13:45 – 15:30", s3_t5_title: "A doua jumătate a zilei",
    s3_t5_desc: "După pauză livrați coletele rămase. În paralel sunt ridicările — atât cele spontane apărute peste zi, cât și cele regulate la clienții cu contract. Până la 15:00 / 15:30 sunteți înapoi la depozit.",
    s3_t6_time: "", s3_t6_title: "Încheierea la depozit",
    s3_t6_desc: "La nevoie spălați vehiculul. Dacă a fost ceva de discutat pe traseu, o clarificați direct cu dispeceratul. Apoi sfârșitul programului.",
    s3_t7_time: "", s3_t7_title: "Timpul de învățare este timp de lucru",
    s3_t7_desc: "În prima-două luni planificați ceva mai mult timp — până la 16:00 sau 17:00 este normal cât timp învățați traseul. Un coleg cu experiență este lângă Dvs. tot timpul.",
    s3_close_strong: "Toate detaliile", s3_close_a: " — condiții individuale, ore exacte, sarcini concrete — ", s3_close_strong2: "le discutăm la interviu.", s3_close_b: " Vrem să știți la ce vă angajați, înainte de a semna.",

    s4_kicker: "03 — Posturi vacante",
    s4_h2_a: "În prezent ", s4_h2_b: "căutăm", s4_h2_c: ":",
    s4_lede: "Trei posturi deschise la locațiile noastre. Dacă nu se potrivește nimic, ne bucurăm să primim o candidatură spontană.",
    tag_active: "Activ", tag_initiativ: "Spontan", tag_full: "Normă întreagă", tag_part: "Jumătate de normă", tag_fullpart: "Normă întreagă · Jumătate",
    loc_nbg: "Nürnberg", loc_crl: "Crailsheim", loc_both: "Nürnberg · Crailsheim",
    s4_j1_title: "Curier de colete (m/f/d)", s4_j1_desc: "Trasee zilnice de livrare în orașul Nürnberg și împrejurimi. Angajare permanentă cu contract german, instruire cu coleg experimentat.",
    s4_j2_title: "Curier de colete (m/f/d)", s4_j2_desc: "Livrare în și în jurul Crailsheim. Post fix cu normă întreagă și trasee regulate. Permis categoria B necesar.",
    s4_j3_title: "Încărcător / descărcător (m/f/d)", s4_j3_desc: "Lucrări de încărcare la depozitul Crailsheim. Tură de dimineață, început în zori. Contează rezistența fizică, permisul nu este necesar.",
    s4_j4_title: "Aplicație spontană", s4_j4_desc: "Niciun post potrivit? Trimiteți totuși documentele. Pentru oameni buni găsim mereu un loc — chiar și în afara posturilor publicate.",

    s5_kicker: "04 — Voci din echipă",
    s5_h2_a: "Povești reale — ", s5_h2_b: "în curând aici", s5_h2_c: ":",
    s5_lede: "Adunăm acum povești de la șoferii noștri — cu fotografie și nume, dacă sunt de acord. Primele vor urma în săptămânile următoare.",
    voice_demo: "Demo · foto va urma",
    voice_courier: "Curier", voice_dispatch: "Dispecerat", voice_loader: "Încărcător", voice_workshop: "Atelier",

    s6_kicker: "05 — Întrebări frecvente",
    s6_h2_a: "Ce întreabă ", s6_h2_b: "adesea candidații", s6_h2_c: ":",
    s6_lede: "Dacă întrebarea Dvs. nu este aici — scrieți-ne. Răspundem personal.",
    s6_q1: "Ce documente îmi trebuie pentru aplicație?",
    s6_a1: "Un CV scurt este suficient pentru primul pas. Permisul, actele de ședere (dacă e cazul) și cazierul le discutăm la interviu. Dacă lipsește ceva, vă spunem direct — nu trebuie să clarificați totul în avans.",
    s6_q2: "Și dacă germana mea nu e perfectă?",
    s6_a2: "În ultimele trei decenii am avut colegi din peste douăzeci de țări. Germana inteligibilă este suficientă pentru început. În activitatea zilnică vorbim și rusă, română și turcă — nimeni nu este respins pentru un cuvânt lipsă.",
    s6_q3: "Cum se discută salariul?",
    s6_a3: "Personal la interviu. Nu punem cifre-momeală pe site, pentru că salariul depinde de locație, traseu și experiență. La discuție vă spunem o cifră concretă — și aceea este valabilă.",
    s6_q4: "Este angajare permanentă?",
    s6_a4: "Da. Angajare permanentă cu contract german, toate contribuțiile sociale și salariu regulat. Fără pseudo-PFA, fără modele gri.",
    s6_q5: "Cum arată prima zi de lucru?",
    s6_a5: "Veniți dimineața la depozit, vă cunoașteți colegii și mergeți prima săptămână ca pasager. Doar când vă simțiți pregătit preluați un traseu propriu. Nimeni nu e aruncat în apă rece.",
    s6_q6: "Cât durează instruirea?",
    s6_a6: "De obicei una-două săptămâni, la nevoie mai mult. Nu există cronometre fixe — preluați un traseu când Dvs. și mentorul sunteți de acord că e momentul.",
    s6_q7: "Unde se conduce?",
    s6_a7: "Accentul este pe Nürnberg și împrejurimi. Crailsheim este a doua locație. Alte locuri de muncă sunt posibile prin acord.",
    s6_q8: "Cât de repede primesc răspuns?",
    s6_a8: "Examinăm fiecare cerere cu atenție și vă contactăm personal de îndată ce avem un răspuns concret.",

    s7_kicker: "06 — Locații",
    s7_h2_a: "Două locații, ", s7_h2_b: "un dispecerat", s7_h2_c: ":",
    s7_lede: "Nürnberg este sediul, Crailsheim este filiala. Ambele depozite pot fi vizitate oricând, în baza unei programări.",
    loc_hq: "Sediu", loc_branch: "Filială",
    loc_addr: "Adresă", loc_tel: "Telefon", loc_mail: "E-Mail",
    loc_hours: "Program", loc_hours_val: "L–V 07:00–18:00 · S 07:00–12:00",
    loc_hours_nbg: "L–V 07:00–18:00 · S 07:00–12:00",
    loc_hours_crl: "L–V 07:00–17:00 · S 07:00–12:00",
    loc_tel_crl: "+49 — va fi confirmat de administrator",
    loc_more: "Mai multe despre locație", loc_route: "Planifică ruta",
    bew_steps_label: "Șase pași până la prima zi de lucru",
    bew_contact_label: "Contact direct pentru aplicație",
    ueber_h1: "Despre noi",
    ueber_lede: "Această pagină este în pregătire.",
    ueber_body: "În curând veți afla aici mai multe despre Cuma Gün Kuriertransporte e.K. — familia din spatele companiei, trei decenii de experiență în domeniu, valorile noastre și parteneriatul nostru cu United Parcel Service.",
    ueber_home: "Înapoi la pagina principală",

    s8_kicker: "07 — Aplicație",
    s8_h2_a: "Un formular scurt. ", s8_h2_b: "Un răspuns onest", s8_h2_c: ":",
    s8_lede: "Scrieți-ne. Dacă vă potriviți, vă contactăm personal de îndată ce am examinat documentele dvs.",
    s8_b1: "Examinarea atentă a fiecărei cereri",
    s8_b2: "Prima discuție personal sau telefonic",
    s8_b3: "Cursă de probă posibilă înainte de semnare",
    s8_b4: "Prelucrarea datelor conform GDPR",
    s8_call: "Preferați să sunați?",
    form_kicker: "Trimiteți aplicația",
    form_title: "Aplicația Dvs.",
    form_sub: "Câmpurile cu * sunt obligatorii. Documentele pot fi atașate mai jos.",
    form_vorname: "Prenume *", form_nachname: "Nume *", form_telefon: "Telefon *", form_email: "E-Mail *",
    form_position: "Poziție", form_standort: "Locație preferată", form_around: "Împrejurimile Nürnberg", form_no_pref: "indiferent / fără preferință",
    form_sprache: "Limbă pentru apel",
    form_pos1: "Curier Nürnberg (Normă întreagă)", form_pos2: "Curier Crailsheim (Normă întreagă)",
    form_pos3: "Încărcător Crailsheim (Jumătate)", form_pos4: "Aplicație spontană",
    form_files: "Documente (PDF/DOC/DOCX, max. 10 MB)",
    form_drop: "Trageți aici sau <u>faceți clic pentru a selecta</u>",
    form_drop_hint: "PDF · DOC · DOCX · max. 10 MB",
    form_dsgvo: "Sunt de acord cu prelucrarea datelor mele conform <a href=\"#datenschutz\" data-legal=\"privacy\" style=\"color:var(--bronze);text-decoration:underline;\">politicii de confidențialitate</a>. *",
    form_submit: "Trimiteți aplicația",
    form_ok_title: "Mulțumim!",
    form_ok_text: "Am primit cererea dvs. După examinarea documentelor, vă vom contacta personal.",

    footer_tagline: "Serviciu de curierat de familie din septembrie 1995.",
    footer_menu: "Meniu", footer_locations: "Locații", footer_legal: "Legal",
    footer_imprint: "Date despre firmă", footer_privacy: "Politica de confidențialitate", footer_a11y: "Declarație de accesibilitate",
    footer_family: "Afacere de familie · Sediu Nürnberg",
    footer_translations: "Traduceri DE/RU/RO/TR — încă în finalizare",
    emp_kicker: "POVESTEA UNUI ANGAJAT",
    emp_back: "Înapoi la prezentare",
    footer_cookies: "Setări cookie",
    legal_kicker: "LEGAL",
    legal_placeholder: "Substituent · va fi finalizat înainte de publicare",
    legal_imprint_title: "Date despre firmă",
    legal_imprint_text: "Aici va urma textul complet al datelor despre firmă cu toate informațiile cerute legal conform § 5 TMG. Va fi finalizat înainte de publicare.",
    legal_privacy_title: "Politică de confidențialitate",
    legal_privacy_text: "Aici va urma politica completă de confidențialitate conform GDPR Art. 13/14 — ce date prelucrăm, când și în ce scop, durata stocării, drepturile dvs. ca persoană vizată, contactul cu responsabilul cu protecția datelor. Va fi finalizat înainte de publicare.",
    legal_agb_title: "Termeni și condiții generale",
    legal_agb_text: "Aici vor urma termenii și condițiile generale. Va fi finalizat înainte de publicare.",
    legal_a11y_title: "Declarație de accesibilitate",
    legal_a11y_text: "Aici va urma declarația de accesibilitate conform BFSG. Va fi finalizat înainte de publicare.",
    ck_title: "Folosim cookie-uri",
    ck_body: "Acest site folosește cookie-uri pentru a vă îmbunătăți experiența. Cookie-urile necesare sunt esențiale pentru funcționare. Cookie-urile de statistică și marketing ne ajută să îmbunătățim site-ul — dvs. decideți dacă sunteți de acord.",
    ck_body_short: "Acest site folosește cookie-uri pentru a vă îmbunătăți experiența.",
    ck_settings: "Setări",
    ck_cat1: "Necesare", ck_cat1_hint: "Esențiale pentru funcționarea site-ului",
    ck_cat2: "Statistică", ck_cat2_hint: "Analiză anonimă a utilizării",
    ck_cat3: "Marketing", ck_cat3_hint: "Conținut personalizat",
    ck_accept_all: "Acceptă toate", ck_confirm: "Confirmă selecția", ck_essential: "Doar necesare", ck_privacy: "Politică de confidențialitate",
  },

  tr: {
    brand_sub: "1995'ten beri",
    nav_prozess: "Başvuru süreci", nav_arbeitstag: "İş günü", nav_ueber: "Hakkımızda", nav_stellen: "Açık pozisyonlar",
    nav_standorte: "Konumlar", nav_faq: "SSS",
    cta_apply: "Şimdi başvurun", cta_apply_now: "Şimdi başvurun", cta_apply_arrow: "Şimdi başvurun",
    cta_day: "Bir iş günü nasıl geçer",
    demo_photo: "Demo foto · gerçek fotoğrafla değiştirilecek",

    hero_eyebrow: "Şu anda açık pozisyonlar · Nürnberg ve Crailsheim",
    hero_h1: "Cuma\u00A0Gün Kuriertransporte\u00A0e.K.'de paket dağıtıcısı olun.",
    hero_ups: "Dünyanın en büyük paket servisi UPS adına",
    hero_sub: "Aile şirketi, Eylül 1995'te kuruldu.",
    hero_lede: "Otuz yılı aşkın süredir işletme aile elinde. Bizde verilen söz tutulur ve size adil koşullarda, Alman iş sözleşmeli sürekli bir istihdam sunuyoruz.",
    hero_caption: "Kendi araçlarımız · kendi personelimiz",
    hero_founder_badge: "FOTOĞRAF YAKINDA",
    hero_founder_name: "Cuma Gün",
    hero_founder_role: "Şirket sahibi",
    stat1_unit: "yıl", stat1_label: "Aile şirketi, Eylül 1995'te kuruldu",
    stat2_unit: "konum", stat2_label: "Nürnberg · Crailsheim",
    stat3_unit: "dil", stat3_label: "Almanca, Rusça, Romence ve Türkçe — depo gündeminde",

    s1_kicker: "01 — Başvuru süreci",
    s1_h2_a: "Altı adımda ", s1_h2_b: "ilk iş gününüze", s1_h2_c: ":",
    s1_lede: "Net yol, sürpriz yok. İlk tıklamadan deneme sürüşüne kadar size bir sonraki adımı anlatıyoruz.",
    s1_01_title: "Başvuru gönderin", s1_01_desc: "Belgeleri formdan yükleyin — ya da doğrudan arayın.",
    s1_02_title: "Lütfen bekleyin — biz arıyoruz", s1_02_desc: "Başvurunuzu inceledikten sonra, somut bir yanıtımız olur olmaz size şahsen geri dönüş yaparız.",
    s1_03_title: "Şahsi görüşme", s1_03_desc: "Depoya gelirsiniz — turu, konumu ve koşulları konuşuruz.",
    s1_04_title: "Deneme sürüşü mümkün", s1_04_desc: "İsterseniz imzalamadan önce bir gün yan koltukta gelirsiniz.",
    s1_05_title: "İş sözleşmesi", s1_05_desc: "Sürekli istihdam, Alman sözleşmesi, şeffaf koşullar — gri modeller yok.",
    s1_06_title: "İlk gün", s1_06_desc: "Yanınızda deneyimli bir meslektaşla başlarsınız — kimse yalnız yola çıkmaz.",
    s1_close_strong: "Şahsen geri döneriz.", s1_close_rest: "Doğrudan konuşmayı mı tercih edersiniz?",

    s2_kicker: "01 — Gereksinimler",
    s2_h2_a: "Yanınızda ", s2_h2_b: "getirmeniz gerekenler", s2_h2_c: ":",
    s2_lede: "Az resmi şart, ama günlük işte önemli olan konularda net beklentiler. Tecrübe yardımcı olur ama şart değil. Sizi biz yetiştiririz.",
    s2_01_title: "B sınıfı ehliyet", s2_01_desc: "Turlarımız için şart. C1 veya C artıdır, ama koşul değildir.",
    s2_02_title: "Güvenilirlik", s2_02_desc: "Gelmeniz gereken zamanda gelirsiniz. Bizim için bu, yıllarca tecrübeden daha önemli.",
    s2_03_title: "Sorumluluk", s2_03_desc: "Yolda firmamızın yüzü sizsiniz. Araç ve yük güvenli ellerde. Size güveniyoruz!",
    s2_04_title: "Dil bilgisi", s2_04_desc: "Başlangıç için temel Almanca yeterli. Depoda DE, RU, RO, TR konuşuruz.",

    s3_kicker: "02 — İş günü",
    s3_h2_a: "Bir ", s3_h2_b: "iş günü", s3_h2_c: " nasıl görünür:",
    s3_lede: "Dürüst anlatıldı — depodaki ilk taramadan paydosa kadar. Saatleri olduğu gibi söylüyoruz.",
    s3_t1_time: "06:45 – 07:00", s3_t1_title: "Araç başında olmak",
    s3_t1_desc: "İş günü saat 07:00'de araç başında başlar. Biraz erken gelmek kişisel bir karardır — kimse şart koşmaz, kimse zorlamaz.",
    s3_t2_time: "07:00 – 08:30", s3_t2_title: "Paketleri tarayın, sıralayın, kontrol edin",
    s3_t2_desc: "İş günü saat 07:00'de araç başında başlar. Biraz erken gelmek kişisel bir karardır — kimse şart koşmaz, kimse zorlamaz.<br><br>Gönderilerinizi tararsınız, durak sırasına göre sıralarsınız ve ekspresleri kontrol edersiniz. Hepsi hazır olduğunda yola çıkarsınız — genellikle sekizinci saatin ilk yarısında.",
    s3_t3_time: "08:30 – öğleden sonra", s3_t3_title: "Sizin rotanız, sizin ritminiz",
    s3_t3_desc: "Sabit rotanızı sürersiniz. Ekspres gönderiler sevkiyatla önceden kararlaştırılır — günün randevuları konusunda netliğiniz vardır, ortada sürpriz olmaz.",
    s3_t4_time: "13:00 – 13:45", s3_t4_title: "Yasal zorunlu mola",
    s3_t4_desc: "Mola 4,5 saatlik sürüşten sonra yasal olarak zorunludur. Tam zamanı rota üzerinde kendiniz seçersiniz — genellikle 13:00 ile 13:45 arasında.",
    s3_t5_time: "13:45 – 15:30", s3_t5_title: "Günün ikinci yarısı",
    s3_t5_desc: "Moladan sonra kalan paketleri teslim edersiniz. Paralel olarak alımlar — hem gün içinde gelen spontane olanlar, hem de sözleşmeli müşterilerdeki düzenli alımlar. 15:00 / 15:30'a kadar depoya dönmüş olursunuz.",
    s3_t6_time: "", s3_t6_title: "Depoda bitiriş",
    s3_t6_desc: "Gerekirse aracı yıkarsınız. Turda konuşulacak bir şey varsa, doğrudan sevkiyatla halledersiniz. Sonra paydos.",
    s3_t7_time: "", s3_t7_title: "Öğrenme zamanı çalışma zamanıdır",
    s3_t7_desc: "İlk bir-iki ay biraz fazla zaman ayırın — rotayı öğrenirken 16:00 veya 17:00'ye kadar normaldir. Deneyimli bir meslektaş tüm bu süre boyunca yanınızdadır.",
    s3_close_strong: "Tüm detayları", s3_close_a: " — bireysel koşullar, kesin saatler, somut görevler — ", s3_close_strong2: "iş görüşmesinde konuşuruz.", s3_close_b: " İmzalamadan önce neye girdiğinizi bilmenizi isteriz.",

    s4_kicker: "03 — Açık pozisyonlar",
    s4_h2_a: "Şu anda ", s4_h2_b: "aradığımız", s4_h2_c: ":",
    s4_lede: "Konumlarımızda üç açık pozisyon. Uygun bir şey yoksa, spontane başvurunuzu memnuniyetle bekleriz.",
    tag_active: "Aktif", tag_initiativ: "Spontane", tag_full: "Tam zamanlı", tag_part: "Yarı zamanlı", tag_fullpart: "Tam · Yarı zamanlı",
    loc_nbg: "Nürnberg", loc_crl: "Crailsheim", loc_both: "Nürnberg · Crailsheim",
    s4_j1_title: "Paket kuryesi (e/k/d)", s4_j1_desc: "Nürnberg şehri ve civarında günlük teslimat turları. Alman iş sözleşmesiyle sürekli istihdam, deneyimli meslektaşla eğitim.",
    s4_j2_title: "Paket kuryesi (e/k/d)", s4_j2_desc: "Crailsheim ve çevresinde teslimat. Düzenli turlarla sabit tam zamanlı pozisyon. B sınıfı ehliyet gereklidir.",
    s4_j3_title: "Yükleme / boşaltma elemanı (e/k/d)", s4_j3_desc: "Crailsheim deposunda yükleme işleri. Sabah vardiyası, erken saatlerde başlar. Fiziksel dayanıklılık önemlidir, ehliyet gerekmez.",
    s4_j4_title: "Spontane başvuru", s4_j4_desc: "Size uygun iş yok mu? Belgelerinizi yine de gönderin. İyi insanlara her zaman yer buluruz — açık pozisyonların dışında bile.",

    s5_kicker: "04 — Ekipten sesler",
    s5_h2_a: "Gerçek hikayeler — ", s5_h2_b: "yakında burada", s5_h2_c: ":",
    s5_lede: "Şu anda sürücülerimizden hikayeler topluyoruz — onların onayıyla, fotoğraf ve isimle. İlki önümüzdeki haftalarda gelecek.",
    voice_demo: "Demo · foto yakında",
    voice_courier: "Kurye sürücüsü", voice_dispatch: "Sevkiyat", voice_loader: "Yükleyici", voice_workshop: "Atölye",

    s6_kicker: "05 — Sık sorulanlar",
    s6_h2_a: "Adayların ", s6_h2_b: "sık sorduğu şeyler", s6_h2_c: ":",
    s6_lede: "Sorunuz burada yoksa — bize yazın. Şahsen yanıt veriyoruz.",
    s6_q1: "Başvuru için hangi belgelere ihtiyacım var?",
    s6_a1: "İlk adım için kısa bir özgeçmiş yeterlidir. Ehliyet, ikamet belgesi (gerekirse) ve sabıka kaydını şahsi görüşmede ele alırız. Eksik bir şey varsa direkt söyleriz — her şeyi önceden çözmek zorunda değilsiniz.",
    s6_q2: "Almancam mükemmel değilse?",
    s6_a2: "Son otuz yılda yirmiden fazla ülkeden meslektaşlarımız oldu. Anlaşılır bir Almanca başlangıç için yeterlidir. Günlük işte Rusça, Romence ve Türkçe de konuşuruz — kimse bir kelime için reddedilmez.",
    s6_q3: "Ücret nasıl konuşulur?",
    s6_a3: "Şahsen iş görüşmesinde. Web sitesinde yem rakamlar koymuyoruz, çünkü ücret konum, tur ve deneyime göre değişir. Görüşmede size somut bir rakam söyleriz — ve o geçerlidir.",
    s6_q4: "Bu sürekli istihdam mı?",
    s6_a4: "Evet. Alman iş sözleşmesiyle sürekli istihdam, tüm sosyal hakları ve düzenli maaş bordrosu. Sahte serbest meslek yok, gri modeller yok.",
    s6_q5: "İlk iş günü nasıl geçer?",
    s6_a5: "Sabah depoya gelirsiniz, meslektaşlarınızı tanırsınız ve ilk hafta yan koltukta gidersiniz. Ancak kendinizi emin hissettiğinizde kendi turunuzu alırsınız. Kimse soğuk suya atılmaz.",
    s6_q6: "Eğitim ne kadar sürer?",
    s6_a6: "Genellikle bir-iki hafta, gerekirse daha uzun. Sabit kronometre yok — siz ve mentorunuz hazır olduğunuza karar verdiğinizde turu üstlenirsiniz.",
    s6_q7: "Nerelerde sürülür?",
    s6_a7: "Ağırlık şu anda Nürnberg ve çevresinde. Crailsheim ikinci konumdur. Diğer çalışma yerleri anlaşma ile mümkündür.",
    s6_q8: "Ne kadar hızlı yanıt alırım?",
    s6_a8: "Her başvuruyu dikkatle inceler ve somut bir yanıtımız olur olmaz size şahsen geri döneriz.",

    s7_kicker: "06 — Konumlar",
    s7_h2_a: "İki konum, ", s7_h2_b: "tek sevkiyat", s7_h2_c: ":",
    s7_lede: "Nürnberg genel merkez, Crailsheim şubedir. Her iki depo da doğrudan ulaşılabilir — randevuyla her an ziyaret mümkündür.",
    loc_hq: "Genel merkez", loc_branch: "Şube",
    loc_addr: "Adres", loc_tel: "Telefon", loc_mail: "E-posta",
    loc_hours: "Çalışma saatleri", loc_hours_val: "Pzt–Cum 07:00–18:00 · Cmt 07:00–12:00",
    loc_hours_nbg: "Pzt–Cum 07:00–18:00 · Cmt 07:00–12:00",
    loc_hours_crl: "Pzt–Cum 07:00–17:00 · Cmt 07:00–12:00",
    loc_tel_crl: "+49 — genel müdür tarafından onaylanacak",
    loc_more: "Konum hakkında daha fazlası", loc_route: "Rota planla",
    bew_steps_label: "Altı adımda ilk iş gününe",
    bew_contact_label: "Başvuru için doğrudan iletişim",
    ueber_h1: "Hakkımızda",
    ueber_lede: "Bu sayfa şu anda hazırlanıyor.",
    ueber_body: "Çok yakında burada Cuma Gün Kuriertransporte e.K. hakkında daha fazlasını öğreneceksiniz — şirketin arkasındaki aile, otuz yıllık sektör deneyimi, değerlerimiz ve United Parcel Service ile ortaklığımız.",
    ueber_home: "Ana sayfaya dön",

    s8_kicker: "07 — Başvuru",
    s8_h2_a: "Kısa bir form. ", s8_h2_b: "Dürüst bir yanıt", s8_h2_c: ":",
    s8_lede: "Bize yazın. Bize uyuyorsanız, belgelerinizi inceledikten sonra size şahsen geri dönüş yaparız.",
    s8_b1: "Her başvurunun titiz incelenmesi",
    s8_b2: "İlk görüşme şahsen veya telefonla",
    s8_b3: "Sözleşmeden önce deneme sürüşü mümkün",
    s8_b4: "GDPR uyarınca veri işleme",
    s8_call: "Doğrudan aramayı mı tercih edersiniz?",
    form_kicker: "Başvuruyu gönderin",
    form_title: "Başvurunuz",
    form_sub: "* işaretli alanlar zorunludur. Belgeleri aşağıda ekleyebilirsiniz.",
    form_vorname: "Ad *", form_nachname: "Soyad *", form_telefon: "Telefon *", form_email: "E-posta *",
    form_position: "Pozisyon", form_standort: "Tercih edilen konum", form_around: "Nürnberg çevresi", form_no_pref: "fark etmez / tercihim yok",
    form_sprache: "Geri arama dili",
    form_pos1: "Kurye Nürnberg (Tam zamanlı)", form_pos2: "Kurye Crailsheim (Tam zamanlı)",
    form_pos3: "Yükleyici Crailsheim (Yarı zamanlı)", form_pos4: "Spontane başvuru",
    form_files: "Belgeler (PDF/DOC/DOCX, en fazla 10 MB)",
    form_drop: "Buraya sürükleyin veya <u>seçmek için tıklayın</u>",
    form_drop_hint: "PDF · DOC · DOCX · max. 10 MB",
    form_dsgvo: "Verilerimin <a href=\"#datenschutz\" data-legal=\"privacy\" style=\"color:var(--bronze);text-decoration:underline;\">gizlilik politikası</a> doğrultusunda işlenmesini kabul ediyorum. *",
    form_submit: "Başvuruyu gönderin",
    form_ok_title: "Teşekkür ederiz!",
    form_ok_text: "Başvurunuzu aldık. Belgelerinizi inceledikten sonra size şahsen geri dönüş yapacağız.",

    footer_tagline: "Eylül 1995'ten beri aile yönetimindeki kurye hizmeti.",
    footer_menu: "Menü", footer_locations: "Konumlar", footer_legal: "Yasal",
    footer_imprint: "Künye", footer_privacy: "Gizlilik Politikası", footer_a11y: "Erişilebilirlik Beyanı",
    footer_family: "Aile şirketi · Merkez Nürnberg",
    footer_translations: "DE/RU/RO/TR çevirileri — henüz tamamlanıyor",
    emp_kicker: "ÇALIŞAN HİKAYESİ",
    emp_back: "Genel bakışa dön",
    footer_cookies: "Çerez ayarları",
    legal_kicker: "YASAL",
    legal_placeholder: "Yer tutucu · yayından önce tamamlanacak",
    legal_imprint_title: "Künye",
    legal_imprint_text: "Burada § 5 TMG uyarınca yasal olarak gerekli tüm bilgilerle birlikte tam künye metni yer alacaktır. Yayından önce tamamlanacaktır.",
    legal_privacy_title: "Gizlilik Politikası",
    legal_privacy_text: "Burada GDPR Mad. 13/14 uyarınca tam gizlilik politikası yer alacaktır — hangi verileri ne zaman ve hangi amaçla işlediğimiz, saklama süresi, ilgili kişi olarak haklarınız, veri koruma görevlisi ile iletişim. Yayından önce tamamlanacaktır.",
    legal_agb_title: "Genel İşlem Koşulları",
    legal_agb_text: "Burada genel işlem koşulları yer alacaktır. Yayından önce tamamlanacaktır.",
    legal_a11y_title: "Erişilebilirlik Beyanı",
    legal_a11y_text: "Burada BFSG uyarınca erişilebilirlik beyanı yer alacaktır. Yayından önce tamamlanacaktır.",
    ck_title: "Çerez kullanıyoruz",
    ck_body: "Bu web sitesi deneyiminizi iyileştirmek için çerez kullanır. Gerekli çerezler işletim için zorunludur. İstatistik ve pazarlama çerezleri siteyi geliştirmemize yardımcı olur — kabul edip etmeyeceğinize siz karar verirsiniz.",
    ck_body_short: "Bu web sitesi deneyiminizi iyileştirmek için çerez kullanır.",
    ck_settings: "Ayarlar",
    ck_cat1: "Gerekli", ck_cat1_hint: "Sitenin işletimi için zorunlu",
    ck_cat2: "İstatistik", ck_cat2_hint: "Anonim kullanım analizi",
    ck_cat3: "Pazarlama", ck_cat3_hint: "Kişiselleştirilmiş içerik",
    ck_accept_all: "Tümünü kabul et", ck_confirm: "Seçimi onayla", ck_essential: "Yalnızca gerekli", ck_privacy: "Gizlilik Politikası",
  }
};

/* ---------- LANGUAGE SWITCHER ---------- */
function applyLang(lang) {
  const dict = T[lang] || T.de;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] != null) {
      // allow HTML in a few entries
      if (key === 'form_drop' || key === 'form_dsgvo' || key === 's6_a1' || /^s3_t\d_desc$/.test(key)) el.innerHTML = dict[key];
      else el.textContent = dict[key];
    }
  });
  // lang button current label
  const cur = document.getElementById('langCurrent');
  if (cur) cur.textContent = lang.toUpperCase();
  // active state in menu
  document.querySelectorAll('#langMenu button').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  // footer translation badge
  const badge = document.querySelector('.footer__lang');
  if (badge) badge.textContent = dict.footer_translations || badge.textContent;
}

const initLang = localStorage.getItem('cg_lang') || 'de';
document.addEventListener('DOMContentLoaded', () => {
  applyLang(initLang);

  /* ---------- LANGUAGE DROPDOWN ---------- */
  const langMenu = document.getElementById('langMenu');
  const langToggle = document.getElementById('langToggle');
  if (langMenu) {
    langMenu.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        localStorage.setItem('cg_lang', lang);
        applyLang(lang);
        renderMarquee(lang);
        // blur to dismiss :focus-within
        if (document.activeElement && document.activeElement.blur) document.activeElement.blur();
      });
    });
    // toggle on click for touch / keyboard
    if (langToggle) {
      langToggle.addEventListener('click', e => {
        e.preventDefault();
        // toggling focus state via blur/focus
        if (document.activeElement === langToggle) langToggle.blur();
        else langToggle.focus();
      });
    }
  }

  /* ---------- HEADER scroll state ---------- */
  const header = document.getElementById('header');
  const setScrolled = () => header.classList.toggle('scrolled', window.scrollY > 12);
  setScrolled();
  window.addEventListener('scroll', setScrolled, { passive: true });

  /* ---------- BURGER ---------- */
  const burger = document.getElementById('burger');
  const mobileNav = document.getElementById('mobileNav');
  burger.addEventListener('click', () => mobileNav.classList.toggle('open'));
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileNav.classList.remove('open')));

  /* ---------- REVEAL on scroll ---------- */
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add('in');
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  /* ---------- STEPS stagger reveal ---------- */
  const steps = document.getElementById('steps');
  if (steps) {
    const stepsIO = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          steps.classList.add('in');
          stepsIO.unobserve(steps);
        }
      });
    }, { threshold: 0.3 });
    stepsIO.observe(steps);
  }

  /* ---------- STAT COUNT-UP ---------- */
  const heroStats = document.getElementById('heroStats');
  if (heroStats) {
    const statsIO = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          heroStats.querySelectorAll('[data-count]').forEach(el => {
            const target = parseInt(el.dataset.count, 10);
            const dur = 1500;
            const start = performance.now();
            const tick = (now) => {
              const t = Math.min(1, (now - start) / dur);
              const eased = 1 - Math.pow(1 - t, 3);
              el.textContent = Math.round(eased * target);
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          });
          statsIO.unobserve(heroStats);
        }
      });
    }, { threshold: 0.4 });
    statsIO.observe(heroStats);
  }

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll('.faq__item').forEach(item => {
    item.querySelector('.faq__q').addEventListener('click', () => {
      // close others
      document.querySelectorAll('.faq__item').forEach(i => { if (i !== item) i.classList.remove('open'); });
      item.classList.toggle('open');
    });
  });

  /* ---------- JOB CARDS → form prefill ---------- */
  document.querySelectorAll('.job').forEach(job => {
    const apply = () => {
      const pos = job.dataset.position;
      const loc = job.dataset.location;
      const posSel = document.getElementById('position');
      const locSel = document.getElementById('standort');
      if (pos && posSel) posSel.value = pos;
      if (loc && locSel) {
        const opt = [...locSel.options].find(o => o.value === loc);
        if (opt) locSel.value = loc;
      }
      document.getElementById('bewerbung').scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => document.getElementById('vorname')?.focus(), 700);
    };
    job.querySelector('.job__apply').addEventListener('click', apply);
    job.addEventListener('click', e => {
      if (e.target.closest('.job__apply')) apply();
    });

    /* 3D tilt */
    let raf = null;
    job.addEventListener('mousemove', e => {
      const r = job.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        job.style.transform = `perspective(900px) rotateX(${(-y * 4).toFixed(2)}deg) rotateY(${(x * 4).toFixed(2)}deg) translateY(-2px)`;
      });
    });
    job.addEventListener('mouseleave', () => { job.style.transform = ''; });
  });

  /* ---------- FILE UPLOAD (drag & drop) ---------- */
  const drop = document.getElementById('drop');
  const fileInput = document.getElementById('files');
  const fileList = document.getElementById('filelist');
  const filesState = [];
  if (drop && fileInput && fileList) {
    const renderFiles = () => {
      fileList.innerHTML = '';
      filesState.forEach((f, i) => {
        const it = document.createElement('div');
        it.className = 'filelist__item';
        it.innerHTML = `<span>${f.name} · ${(f.size/1024/1024).toFixed(2)} MB</span><button type="button" aria-label="Entfernen">×</button>`;
        it.querySelector('button').addEventListener('click', () => { filesState.splice(i,1); renderFiles(); });
        fileList.appendChild(it);
      });
    };
    fileInput.addEventListener('change', e => {
      [...e.target.files].forEach(f => { if (f.size <= 10*1024*1024) filesState.push(f); });
      renderFiles();
    });
    ['dragenter','dragover'].forEach(ev => drop.addEventListener(ev, e => { e.preventDefault(); drop.classList.add('dragover'); }));
    ['dragleave','drop'].forEach(ev => drop.addEventListener(ev, e => { e.preventDefault(); drop.classList.remove('dragover'); }));
    drop.addEventListener('drop', e => {
      [...e.dataTransfer.files].forEach(f => {
        if (/\.(pdf|docx?|DOCX?|PDF)$/i.test(f.name) && f.size <= 10*1024*1024) filesState.push(f);
      });
      renderFiles();
    });
  }

  /* ---------- FORM submit + routing ---------- */
  // Application emails route by selected "Bevorzugter Standort".
  // NOTE: actual delivery needs a backend later — this only resolves recipients.
  const BEWERBUNG_MAIL = {
    nbg: 'nuernberg-bewerbung@guen-transporte.de',
    crl: 'crailsheim-bewerbung@guen-transporte.de',
  };
  function resolveRecipients(standort) {
    switch (standort) {
      case 'Nürnberg':  return [BEWERBUNG_MAIL.nbg];
      case 'Crailsheim': return [BEWERBUNG_MAIL.crl];
      case 'Umgebung':   return [BEWERBUNG_MAIL.nbg]; // Umgebung Nürnberg → Nürnberg
      case 'egal':       return [BEWERBUNG_MAIL.nbg, BEWERBUNG_MAIL.crl]; // keine Präferenz → beide (CC)
      default:           return [BEWERBUNG_MAIL.nbg];
    }
  }
  const form = document.getElementById('applyForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      // simple validation
      const required = ['vorname','nachname','telefon','email'];
      let ok = true;
      required.forEach(id => {
        const el = document.getElementById(id);
        if (!el.value.trim()) { el.style.borderBottomColor = '#c44'; ok = false; }
        else el.style.borderBottomColor = '';
      });
      if (!document.getElementById('dsgvo').checked) ok = false;
      if (!ok) return;

      // Resolve routing (no backend yet — TODO: POST to server / mail API)
      const standort = document.getElementById('standort') ? document.getElementById('standort').value : 'Nürnberg';
      const recipients = resolveRecipients(standort);
      // TODO(v0.6+): send the application + uploaded files (filesState) to these recipients.
      // For "egal" both addresses receive it (second as CC).
      console.info('[Bewerbung] Standort:', standort, '→ Empfänger:', recipients.join(', '));

      document.getElementById('formSuccess').classList.add('show');
    });
  }

  /* ---------- MARQUEE render ---------- */
  renderMarquee(initLang);
});

/* ---------- MARQUEE data + render ---------- */
function renderMarquee(lang) {
  const dict = T[lang] || T.de;
  const cards = EMPLOYEES.map(e => ({
    photo: e.photo,
    role: dict[e.roleKey] || e.role,
    loc: e.loc,
    id: e.id,
  }));
  const track = document.querySelector('#marquee .marquee__track');
  if (!track) return;
  const html = cards.map(c => `
    <div class="voice" data-emp="${c.id}">
      <span class="voice__badge">${dict.voice_demo}</span>
      <img class="voice__photo" loading="lazy" src="${c.photo}" alt="" />
      <div class="voice__meta">
        <div class="voice__role">${c.role}</div>
        <div class="voice__loc">${c.loc}</div>
      </div>
    </div>
  `).join('');
  track.innerHTML = html + html;
  // bind clicks
  track.querySelectorAll('.voice').forEach(v => {
    v.addEventListener('click', () => openEmployeeModal(v.dataset.emp));
  });
}

/* ---------- EMPLOYEE DATA (demo bios, replaced with real later) ---------- */
const EMPLOYEES = [
  {
    id: 'ismail',
    photo: (window.__resources&&window.__resources.emp1) || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    initials: 'İK', name: 'İsmail K.',
    roleKey: 'voice_courier', role: 'Kurierfahrer', loc: 'Nürnberg', loc_key: 'loc_nbg',
    tenure: { de: '14 Jahre im Team', ru: '14 лет в команде', ro: '14 ani în echipă', tr: '14 yıldır ekipte' },
    langs: ['DE', 'TR'],
    quote: {
      de: '„Ich kenne meine Tour wie meinen Heimweg. Das gibt Ruhe — auch an stressigen Tagen."',
      ru: '«Я знаю свой маршрут как дорогу домой. Это даёт спокойствие — даже в напряжённые дни.»',
      ro: '„Îmi cunosc traseul ca drumul spre casă. Asta îmi dă liniște — chiar și în zilele aglomerate."',
      tr: '"Rotamı eve giden yol gibi biliyorum. Bu, yoğun günlerde bile huzur veriyor."'
    },
    story: {
      de: '<p>Ich bin 2012 zu Cuma Gün gekommen — ursprünglich nur als Aushilfe. Vierzehn Jahre später fahre ich immer noch dieselbe Tour, kenne fast jeden Stammkunden mit Namen.</p><p>Was mich hier gehalten hat: die direkte Kommunikation. Wenn etwas ist, klärt man es kurz mit der Disposition — kein Ticketsystem, keine Anonymität.</p>',
      ru: '<p>Я пришёл в Cuma Gün в 2012 году — изначально только как подработка. Спустя четырнадцать лет я по-прежнему еду по тому же маршруту, знаю почти каждого постоянного клиента по имени.</p><p>Что меня здесь удержало: прямая коммуникация. Если что-то происходит, кратко обсуждаешь с диспетчером — без тикетов, без анонимности.</p>',
      ro: '<p>Am venit la Cuma Gün în 2012 — inițial doar ca ajutor. Paisprezece ani mai târziu, conduc același traseu și cunosc aproape fiecare client fidel pe nume.</p><p>Ce m-a ținut aici: comunicarea directă. Dacă apare ceva, discuți pe scurt cu dispeceratul — fără sistem de tichete, fără anonimat.</p>',
      tr: '<p>2012\'de Cuma Gün\'e geldim — başlangıçta sadece yardımcı olarak. On dört yıl sonra hâlâ aynı rotayı sürüyorum, neredeyse her sabit müşteriyi adıyla tanıyorum.</p><p>Beni burada tutan şey: doğrudan iletişim. Bir şey olduğunda sevkiyatla kısaca konuşursun — bilet sistemi yok, anonimlik yok.</p>'
    }
  },
  {
    id: 'andrei',
    photo: (window.__resources&&window.__resources.emp2) || 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    initials: 'AP', name: 'Andrei P.',
    roleKey: 'voice_dispatch', role: 'Disposition', loc: 'Nürnberg', loc_key: 'loc_nbg',
    tenure: { de: '9 Jahre im Team', ru: '9 лет в команде', ro: '9 ani în echipă', tr: '9 yıldır ekipte' },
    langs: ['DE', 'RO', 'RU'],
    quote: {
      de: '„Wir disponieren von Hand, mit dem Telefon am Ohr. So weiß ich, wer wo ist — und was er braucht."',
      ru: '«Мы распределяем вручную, с телефоном у уха. Так я знаю, кто где находится — и что ему нужно.»',
      ro: '„Dispecerăm manual, cu telefonul la ureche. Așa știu cine unde este — și de ce are nevoie."',
      tr: '"Sevkiyatı elle yapıyoruz, telefon kulağımızda. Böylece kimin nerede olduğunu — ve neye ihtiyacı olduğunu biliyorum."'
    },
    story: {
      de: '<p>Ich bin 2017 als Beifahrer eingestiegen, ein Jahr später ans Telefon gewechselt. Disposition heißt bei uns nicht „Daten in ein System eintippen" — es heißt zuhören.</p><p>Wenn ein Fahrer im Stau steht, weiß ich, wer in der Nähe ist und mitnehmen kann. Solche Entscheidungen trifft kein Algorithmus für uns.</p>',
      ru: '<p>Я пришёл в 2017 году как помощник водителя, через год перешёл на телефон. Диспетчерская у нас — это не «вводить данные в систему», это слушать.</p><p>Когда водитель стоит в пробке, я знаю, кто рядом и может подхватить. Такие решения за нас алгоритм не принимает.</p>',
      ro: '<p>Am început în 2017 ca pasager, un an mai târziu am trecut la telefon. Dispeceratul la noi nu înseamnă „introdu date într-un sistem" — înseamnă să asculți.</p><p>Când un șofer e blocat în trafic, știu cine e prin apropiere și poate prelua. Astfel de decizii nu le ia un algoritm pentru noi.</p>',
      tr: '<p>2017\'de yardımcı sürücü olarak başladım, bir yıl sonra telefona geçtim. Bizde sevkiyat "veriyi sisteme girmek" demek değil — dinlemek demek.</p><p>Bir sürücü trafikte sıkıştığında, kimin yakında olduğunu ve devralabileceğini biliyorum. Bu kararları bizim için bir algoritma vermiyor.</p>'
    }
  },
  {
    id: 'marina',
    photo: (window.__resources&&window.__resources.emp3) || 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    initials: 'MS', name: 'Marina S.',
    roleKey: 'voice_courier', role: 'Kurierfahrerin', loc: 'Crailsheim', loc_key: 'loc_crl',
    tenure: { de: '6 Jahre im Team', ru: '6 лет в команде', ro: '6 ani în echipă', tr: '6 yıldır ekipte' },
    langs: ['DE', 'RU'],
    quote: {
      de: '„Halbtags zu fahren war für mich der Punkt. Vormittags Tour, nachmittags Familie — das passt."',
      ru: '«Полдня за рулём — это было для меня решающим. Утром маршрут, после обеда семья — так подходит.»',
      ro: '„Jumătate de zi a fost decisiv pentru mine. Dimineața traseu, după-amiaza familia — așa se potrivește."',
      tr: '"Yarım gün sürmek benim için belirleyiciydi. Sabahları tur, öğleden sonra aile — bu uyuyor."'
    },
    story: {
      de: '<p>Nach der Elternzeit suchte ich einen Job, der morgens funktioniert und nachmittags Platz für Kinder lässt. Cuma Gün hat das nicht nur erlaubt — sie haben das Modell mit mir gemeinsam aufgesetzt.</p><p>Sechs Jahre später bin ich immer noch da. Die Disposition weiß, dass ich um 13:30 zurück sein muss — und plant entsprechend.</p>',
      ru: '<p>После декрета я искала работу, которая работает утром и оставляет место для детей во второй половине дня. Cuma Gün не просто разрешили это — мы вместе разработали такую модель.</p><p>Шесть лет спустя я всё ещё здесь. Диспетчер знает, что я должна вернуться к 13:30 — и планирует соответственно.</p>',
      ro: '<p>După concediul de creștere am căutat un job care funcționează dimineața și lasă loc pentru copii după-amiaza. La Cuma Gün nu doar mi-au permis asta — am pus la cale modelul împreună.</p><p>Șase ani mai târziu sunt încă aici. Dispeceratul știe că trebuie să fiu înapoi la 13:30 — și planifică în consecință.</p>',
      tr: '<p>Doğum izninden sonra sabahları çalışan ve öğleden sonra çocuklara yer bırakan bir iş arıyordum. Cuma Gün sadece izin vermekle kalmadı — modeli birlikte kurduk.</p><p>Altı yıl sonra hâlâ buradayım. Sevkiyat 13:30\'da geri dönmem gerektiğini biliyor — ve buna göre planlıyor.</p>'
    }
  },
  {
    id: 'stefan',
    photo: (window.__resources&&window.__resources.emp4) || 'https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&w=600&q=80',
    initials: 'SH', name: 'Stefan H.',
    roleKey: 'voice_courier', role: 'Kurierfahrer', loc: 'Crailsheim', loc_key: 'loc_crl',
    tenure: { de: '22 Jahre im Team', ru: '22 года в команде', ro: '22 ani în echipă', tr: '22 yıldır ekipte' },
    langs: ['DE'],
    quote: {
      de: '„Ich war einer der ersten in Crailsheim. Habe mit zwei Kollegen das Depot mit aufgebaut."',
      ru: '«Я был одним из первых в Крайльсхайме. Вместе с двумя коллегами помогал создать депо.»',
      ro: '„Am fost printre primii în Crailsheim. Cu doi colegi am ajutat la construirea depozitului."',
      tr: '"Crailsheim\'da ilkler arasındaydım. İki meslektaşımla depoyu birlikte kurduk."'
    },
    story: {
      de: '<p>Ich bin 2004 dazugekommen, als Crailsheim aus einer kleinen Niederlassung gewachsen ist. Die ersten Jahre waren wir zu dritt — heute ist es ein vollwertiges Depot.</p><p>Was sich nicht geändert hat: der Ton untereinander. Wir reden direkt, helfen uns aus, lassen niemanden hängen. Genau dafür bin ich geblieben.</p>',
      ru: '<p>Я пришёл в 2004 году, когда Крайльсхайм вырос из небольшого филиала. Первые годы нас было трое — сегодня это полноценное депо.</p><p>Что не изменилось: тон между нами. Мы говорим прямо, помогаем друг другу, никого не оставляем. Именно ради этого я остался.</p>',
      ro: '<p>Am venit în 2004, când Crailsheim a crescut dintr-o filială mică. Primii ani eram trei — astăzi e un depozit complet.</p><p>Ce nu s-a schimbat: tonul dintre noi. Vorbim direct, ne ajutăm, nu lăsăm pe nimeni baltă. Exact pentru asta am rămas.</p>',
      tr: '<p>2004\'te Crailsheim küçük bir şubeden büyüdüğünde katıldım. İlk yıllar üç kişiydik — bugün tam donanımlı bir depo.</p><p>Değişmeyen şey: aramızdaki ton. Doğrudan konuşuyoruz, birbirimize yardım ediyoruz, kimseyi yarı yolda bırakmıyoruz. Tam da bunun için kaldım.</p>'
    }
  },
  {
    id: 'elena',
    photo: (window.__resources&&window.__resources.emp5) || 'https://images.unsplash.com/photo-1542596594-649edbc13630?auto=format&fit=crop&w=600&q=80',
    initials: 'EV', name: 'Elena V.',
    roleKey: 'voice_loader', role: 'Be- und Entladerin', loc: 'Crailsheim', loc_key: 'loc_crl',
    tenure: { de: '4 Jahre im Team', ru: '4 года в команде', ro: '4 ani în echipă', tr: '4 yıldır ekipte' },
    langs: ['DE', 'RO'],
    quote: {
      de: '„Frühschicht heißt: um sechs ist hier was los, um halb neun ist Ruhe. Mir taugt der Rhythmus."',
      ru: '«Утренняя смена — это: в шесть здесь движение, в полдевятого тишина. Мне подходит такой ритм.»',
      ro: '„Tura de dimineață înseamnă: la șase e mișcare aici, la opt și jumătate e liniște. Mi se potrivește ritmul."',
      tr: '"Sabah vardiyası demek: altıda burada hareket var, sekiz buçukta sessizlik. Bu ritim bana uyuyor."'
    },
    story: {
      de: '<p>Be- und Entladen klingt nach Stupiditätsarbeit. Ist es nicht. Wir sind drei in der Frühschicht, jeder weiß, was wohin gehört, und die Fahrer warten nicht auf uns.</p><p>Ich komme aus Rumänien, mein Deutsch ist ok für die Arbeit. Im Depot wechseln wir oft die Sprache mitten im Satz — niemand stört sich daran.</p>',
      ru: '<p>Погрузка-разгрузка звучит как тупая работа. Это не так. Нас трое в утреннюю смену, каждый знает, что куда, и водители нас не ждут.</p><p>Я из Румынии, моего немецкого хватает для работы. В депо мы часто переключаем язык посреди фразы — никому это не мешает.</p>',
      ro: '<p>Încărcat-descărcat sună a muncă tâmpă. Nu este. Suntem trei în tura de dimineață, fiecare știe ce unde merge, iar șoferii nu ne așteaptă.</p><p>Sunt din România, germana mea e suficientă pentru muncă. În depozit schimbăm des limba la mijlocul frazei — nu deranjează pe nimeni.</p>',
      tr: '<p>Yükleme-boşaltma aptalca bir iş gibi geliyor. Değil. Sabah vardiyasında üç kişiyiz, herkes neyin nereye gideceğini biliyor ve sürücüler bizi beklemiyor.</p><p>Ben Romanya\'danım, Almancam iş için yeterli. Depoda cümlenin ortasında sık sık dil değiştiriyoruz — kimseyi rahatsız etmiyor.</p>'
    }
  },
  {
    id: 'halil',
    photo: (window.__resources&&window.__resources.emp6) || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
    initials: 'HY', name: 'Halil Y.',
    roleKey: 'voice_workshop', role: 'Werkstatt', loc: 'Nürnberg', loc_key: 'loc_nbg',
    tenure: { de: '11 Jahre im Team', ru: '11 лет в команде', ro: '11 ani în echipă', tr: '11 yıldır ekipte' },
    langs: ['DE', 'TR'],
    quote: {
      de: '„Eigene Werkstatt heißt: fällt ein Bus aus, ist er am nächsten Morgen wieder auf der Straße."',
      ru: '«Своя мастерская — это: если фургон сломался, утром он снова на дороге.»',
      ro: '„Atelier propriu înseamnă: dacă o dubă cade, dimineața următoare e din nou pe drum."',
      tr: '"Kendi atölyemiz demek: bir kamyonet bozulursa ertesi sabah yine yolda olur."'
    },
    story: {
      de: '<p>Ich kümmere mich seit 2015 um die Flotte. Kleine Reparaturen, TÜV-Vorbereitung, Räderwechsel — alles im Haus, niemand wartet zwei Wochen auf eine Werkstatt.</p><p>Das spart Geld, aber wichtiger: es spart Nerven für die Fahrer. Kaputtes Auto morgens am Depot ist hier kein Drama, sondern eine halbe Stunde Verspätung.</p>',
      ru: '<p>Я занимаюсь автопарком с 2015 года. Мелкий ремонт, подготовка к ТО, смена колёс — всё в доме, никто не ждёт две недели мастерскую.</p><p>Это экономит деньги, но важнее — нервы водителей. Сломанная машина утром в депо у нас не драма, а полчаса опоздания.</p>',
      ro: '<p>Mă ocup de flotă din 2015. Reparații mici, pregătirea pentru ITP, schimbat roți — totul în casă, nimeni nu așteaptă două săptămâni un atelier.</p><p>Economisește bani, dar mai important — nervii șoferilor. O mașină stricată dimineața la depozit nu e o dramă aici, ci o jumătate de oră întârziere.</p>',
      tr: '<p>2015\'ten beri filoyla ilgileniyorum. Küçük tamirat, muayene hazırlığı, lastik değişimi — her şey içeride, kimse iki hafta atölye beklemiyor.</p><p>Bu para tasarrufu sağlıyor ama daha önemlisi: sürücülerin sinirini koruyor. Sabahleyin depoda bozuk bir araç burada dram değil, yarım saatlik gecikme.</p>'
    }
  },
  {
    id: 'murat',
    photo: (window.__resources&&window.__resources.emp7) || 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=600&q=80',
    initials: 'MD', name: 'Murat D.',
    roleKey: 'voice_courier', role: 'Kurierfahrer', loc: 'Nürnberg', loc_key: 'loc_nbg',
    tenure: { de: '7 Jahre im Team', ru: '7 лет в команде', ro: '7 ani în echipă', tr: '7 yıldır ekipte' },
    langs: ['DE', 'TR'],
    quote: {
      de: '„Mein erster Chef hat gesagt: Fahr, als wäre jedes Paket für deine Mutter. Das mache ich bis heute."',
      ru: '«Мой первый начальник сказал: вози так, будто каждая посылка для твоей мамы. Так и делаю до сих пор.»',
      ro: '„Primul meu șef a spus: condu ca și cum fiecare colet ar fi pentru mama ta. Așa fac până azi."',
      tr: '"İlk patronum dedi ki: her paket annen içinmiş gibi sür. Bugüne kadar öyle yapıyorum."'
    },
    story: {
      de: '<p>Ich bin 2019 angefangen, gleich nach dem Führerschein. Anfangs war ich Beifahrer bei einem älteren Kollegen — heute habe ich meine eigene feste Tour im Nürnberger Norden.</p><p>Was ich schätze: Man sieht jeden Tag dieselben Gesichter. Die Leute kennen mich, ich kenne sie. Das ist mehr Nachbarschaft als Logistik.</p>',
      ru: '<p>Я начал в 2019 году, сразу после получения прав. Сначала был помощником у старшего коллеги — сегодня у меня свой постоянный маршрут на севере Нюрнберга.</p><p>Что я ценю: каждый день видишь одни и те же лица. Люди знают меня, я знаю их. Это больше похоже на соседство, чем на логистику.</p>',
      ro: '<p>Am început în 2019, imediat după permis. La început eram pasager la un coleg mai în vârstă — astăzi am propriul traseu fix în nordul orașului Nürnberg.</p><p>Ce apreciez: vezi aceleași fețe în fiecare zi. Oamenii mă cunosc, eu îi cunosc. E mai degrabă vecinătate decât logistică.</p>',
      tr: '<p>2019\'da, ehliyeti alır almaz başladım. Başta yaşlı bir meslektaşın yanında yardımcıydım — bugün Nürnberg\'in kuzeyinde kendi sabit turum var.</p><p>Değer verdiğim şey: her gün aynı yüzleri görüyorsun. İnsanlar beni tanıyor, ben onları. Bu lojistikten çok komşuluk.</p>'
    }
  },
  {
    id: 'olesya',
    photo: (window.__resources&&window.__resources.emp8) || 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=80',
    initials: 'OK', name: 'Olesya K.',
    roleKey: 'voice_dispatch', role: 'Disposition', loc: 'Crailsheim', loc_key: 'loc_crl',
    tenure: { de: '5 Jahre im Team', ru: '5 лет в команде', ro: '5 ani în echipă', tr: '5 yıldır ekipte' },
    langs: ['DE', 'RU'],
    quote: {
      de: '„Eine gute Tour plant man nicht am Bildschirm. Man plant sie mit dem, was die Fahrer dir morgens erzählen."',
      ru: '«Хороший маршрут не планируют у экрана. Его планируют по тому, что водители рассказывают тебе утром.»',
      ro: '„Un traseu bun nu se planifică pe ecran. Se planifică cu ce îți spun șoferii dimineața."',
      tr: '"İyi bir tur ekranda planlanmaz. Sürücülerin sana sabah anlattıklarıyla planlanır."'
    },
    story: {
      de: '<p>Ich habe in Crailsheim als Quereinsteigerin angefangen — vorher Büro, gar nichts mit Logistik. Die ersten Wochen habe ich nur zugehört, wie die erfahrenen Kollegen disponieren.</p><p>Heute halte ich morgens die Fäden zusammen: wer fährt was, wer springt ein, wo klemmt es. Es ist ein bisschen wie ein Orchester — laut, aber im Takt.</p>',
      ru: '<p>Я пришла в Крайльсхайм со стороны — раньше офис, ничего общего с логистикой. Первые недели я просто слушала, как опытные коллеги распределяют работу.</p><p>Сегодня по утрам я держу всё в руках: кто что везёт, кто подменяет, где затык. Это немного как оркестр — громко, но в такт.</p>',
      ro: '<p>Am început la Crailsheim ca om venit din alt domeniu — înainte birou, nimic legat de logistică. Primele săptămâni doar am ascultat cum dispecerează colegii experimentați.</p><p>Astăzi dimineața țin firele împreună: cine conduce ce, cine intervine, unde se blochează. E un pic ca o orchestră — zgomotoasă, dar în ritm.</p>',
      tr: '<p>Crailsheim\'a farklı bir alandan geldim — önceden ofis, lojistikle alakası yok. İlk haftalar sadece deneyimli meslektaşların nasıl sevkiyat yaptığını dinledim.</p><p>Bugün sabahları her şeyi bir arada tutuyorum: kim neyi sürüyor, kim devreye giriyor, nerede tıkanıyor. Biraz orkestra gibi — gürültülü ama tempoda.</p>'
    }
  },
  {
    id: 'dragos',
    photo: (window.__resources&&window.__resources.emp9) || 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=600&q=80',
    initials: 'DM', name: 'Dragoș M.',
    roleKey: 'voice_loader', role: 'Be- und Entlader', loc: 'Crailsheim', loc_key: 'loc_crl',
    tenure: { de: '3 Jahre im Team', ru: '3 года в команде', ro: '3 ani în echipă', tr: '3 yıldır ekipte' },
    langs: ['DE', 'RO'],
    quote: {
      de: '„Wenn ich sauber lade, kommt der Fahrer schneller los. Das ist mein Beitrag — und der zählt."',
      ru: '«Если я грузлю аккуратно, водитель быстрее выезжает. Это мой вклад — и он важен.»',
      ro: '„Dacă încarc ordonat, șoferul pleacă mai repede. Asta e contribuția mea — și contează."',
      tr: '"Düzgün yüklersem, sürücü daha hızlı çıkar. Bu benim katkım — ve önemli."'
    },
    story: {
      de: '<p>Ich bin vor drei Jahren aus Rumänien gekommen, mit wenig Deutsch und viel Bereitschaft. Im Depot wurde mir alles gezeigt — ohne große Worte, einfach durch Mitmachen.</p><p>Beladen ist Kopfarbeit: Was zuerst raus muss, kommt zuletzt rein. Wer das kann, spart dem ganzen Team Zeit. Darauf bin ich stolz.</p>',
      ru: '<p>Я приехал из Румынии три года назад, с небольшим немецким и большой готовностью. В депо мне всё показали — без лишних слов, просто на деле.</p><p>Погрузка — это работа головой: то, что выгружать первым, грузишь последним. Кто это умеет, экономит время всей команде. Этим я горжусь.</p>',
      ro: '<p>Am venit din România acum trei ani, cu puțină germană și multă disponibilitate. În depozit mi s-a arătat totul — fără vorbe multe, pur și simplu prin a face.</p><p>Încărcatul e muncă de gândire: ce trebuie scos primul intră ultimul. Cine știe asta economisește timp pentru toată echipa. De asta sunt mândru.</p>',
      tr: '<p>Üç yıl önce Romanya\'dan geldim, az Almanca ve çok istekle. Depoda bana her şey gösterildi — büyük laflar olmadan, sadece yaparak.</p><p>Yükleme kafa işi: ilk çıkacak olan en son girer. Bunu bilen tüm ekibe zaman kazandırır. Bununla gurur duyuyorum.</p>'
    }
  },
  {
    id: 'katja',
    photo: (window.__resources&&window.__resources.emp10) || 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    initials: 'KR', name: 'Katja R.',
    roleKey: 'voice_courier', role: 'Kurierfahrerin', loc: 'Nürnberg', loc_key: 'loc_nbg',
    tenure: { de: '8 Jahre im Team', ru: '8 лет в команде', ro: '8 ani în echipă', tr: '8 yıldır ekipte' },
    langs: ['DE', 'RU'],
    quote: {
      de: '„Viele denken, das sei ein Männerjob. Ich fahre seit acht Jahren — und keiner fragt mehr."',
      ru: '«Многие думают, что это мужская работа. Я за рулём восемь лет — и больше никто не спрашивает.»',
      ro: '„Mulți cred că e o muncă de bărbați. Conduc de opt ani — și nimeni nu mai întreabă."',
      tr: '"Çoğu bunun erkek işi olduğunu düşünür. Sekiz yıldır sürüyorum — ve artık kimse sormuyor."'
    },
    story: {
      de: '<p>Ich bin 2018 eingestiegen, eher zufällig — eine Bekannte hat mich mitgenommen. Geblieben bin ich, weil man hier nach Leistung gemessen wird, nicht nach Vorurteil.</p><p>Meine Tour ist anspruchsvoll: Innenstadt, enge Höfe, viel Fußweg. Ich mag genau das. Am Ende des Tages weiß ich, was ich geschafft habe.</p>',
      ru: '<p>Я пришла в 2018 году, скорее случайно — знакомая позвала с собой. Осталась потому, что здесь ценят по результату, а не по предубеждению.</p><p>Мой маршрут непростой: центр города, тесные дворы, много пешком. Именно это мне и нравится. В конце дня я знаю, что сделала.</p>',
      ro: '<p>Am intrat în 2018, cam din întâmplare — o cunoștință m-a luat cu ea. Am rămas pentru că aici ești măsurat după performanță, nu după prejudecăți.</p><p>Traseul meu e solicitant: centrul orașului, curți înguste, mult mers pe jos. Exact asta îmi place. La sfârșitul zilei știu ce am realizat.</p>',
      tr: '<p>2018\'de, biraz tesadüfen başladım — bir tanıdığım beni yanında götürdü. Kaldım çünkü burada önyargıya göre değil, performansa göre ölçülüyorsun.</p><p>Turum zorlu: şehir merkezi, dar avlular, çok yürüyüş. Tam da bunu seviyorum. Günün sonunda ne başardığımı biliyorum.</p>'
    }
  },
  {
    id: 'thomas',
    photo: (window.__resources&&window.__resources.emp11) || 'https://images.unsplash.com/photo-1545167622-3a6ac756afa4?auto=format&fit=crop&w=600&q=80',
    initials: 'TB', name: 'Thomas B.',
    roleKey: 'voice_workshop', role: 'Werkstatt', loc: 'Crailsheim', loc_key: 'loc_crl',
    tenure: { de: '17 Jahre im Team', ru: '17 лет в команде', ro: '17 ani în echipă', tr: '17 yıldır ekipte' },
    langs: ['DE'],
    quote: {
      de: '„Ich höre einem Motor an, was ihm fehlt — oft bevor die Warnleuchte angeht."',
      ru: '«Я слышу по мотору, чего ему не хватает — часто ещё до того, как загорится индикатор.»',
      ro: '„Aud la un motor ce îi lipsește — adesea înainte să se aprindă becul de avertizare."',
      tr: '"Bir motorun neyi eksik olduğunu sesinden anlarım — çoğu zaman uyarı ışığı yanmadan önce."'
    },
    story: {
      de: '<p>Ich schraube seit 2009 an unseren Fahrzeugen. Angefangen habe ich in einer freien Werkstatt, dann hat mich Cuma Gün geholt, um die eigene Flotte aufzubauen.</p><p>Heute kenne ich jeden Transporter persönlich — welcher zickt im Winter, welcher braucht früher neue Bremsen. Dieses Wissen kauft man nicht, das wächst.</p>',
      ru: '<p>Я ремонтирую наши машины с 2009 года. Начинал в независимой мастерской, потом Cuma Gün позвали меня, чтобы создать собственный автопарк.</p><p>Сегодня я знаю каждый фургон лично — какой капризничает зимой, какому раньше нужны тормоза. Такие знания не купишь, они нарастают.</p>',
      ro: '<p>Repar vehiculele noastre din 2009. Am început într-un atelier independent, apoi m-a chemat Cuma Gün să construiesc flota proprie.</p><p>Astăzi cunosc fiecare furgonetă personal — care face nazuri iarna, care are nevoie mai devreme de frâne. Cunoștințele astea nu se cumpără, cresc.</p>',
      tr: '<p>2009\'dan beri araçlarımızı tamir ediyorum. Bağımsız bir atölyede başladım, sonra Cuma Gün kendi filosunu kurmam için beni aldı.</p><p>Bugün her kamyoneti şahsen tanıyorum — hangisi kışın huysuzlanır, hangisinin erken frene ihtiyacı var. Bu bilgi satın alınmaz, büyür.</p>'
    }
  },
  {
    id: 'larisa',
    photo: (window.__resources&&window.__resources.emp12) || 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=600&q=80',
    initials: 'LN', name: 'Larisa N.',
    roleKey: 'voice_loader', role: 'Be- und Entladerin', loc: 'Nürnberg', loc_key: 'loc_nbg',
    tenure: { de: '4 Jahre im Team', ru: '4 года в команде', ro: '4 ani în echipă', tr: '4 yıldır ekipte' },
    langs: ['DE', 'RU', 'RO'],
    quote: {
      de: '„Im Depot zählt nicht, woher du kommst. Es zählt, ob man sich auf dich verlassen kann."',
      ru: '«В депо неважно, откуда ты. Важно, можно ли на тебя положиться.»',
      ro: '„În depozit nu contează de unde vii. Contează dacă se poate baza cineva pe tine."',
      tr: '"Depoda nereden geldiğin önemli değil. Sana güvenilip güvenilemeyeceği önemli."'
    },
    story: {
      de: '<p>Ich arbeite in der Frühschicht am Nürnberger Depot. Wir sortieren, scannen, beladen — bevor die Stadt überhaupt wach ist, sind die ersten Touren schon unterwegs.</p><p>Ich spreche drei Sprachen, und das hilft jeden Tag. Wenn ein neuer Kollege noch kein Deutsch kann, übersetze ich kurz — und schon läuft es.</p>',
      ru: '<p>Я работаю в утреннюю смену в нюрнбергском депо. Мы сортируем, сканируем, грузим — ещё до того, как город проснётся, первые маршруты уже в пути.</p><p>Я говорю на трёх языках, и это помогает каждый день. Если новый коллега ещё не знает немецкого, я коротко перевожу — и дело идёт.</p>',
      ro: '<p>Lucrez în tura de dimineață la depozitul din Nürnberg. Sortăm, scanăm, încărcăm — înainte ca orașul să se trezească, primele trasee sunt deja pe drum.</p><p>Vorbesc trei limbi și asta ajută în fiecare zi. Dacă un coleg nou nu știe încă germană, traduc pe scurt — și totul merge.</p>',
      tr: '<p>Nürnberg deposunda sabah vardiyasında çalışıyorum. Ayırıyor, tarıyor, yüklüyoruz — şehir uyanmadan önce ilk turlar çoktan yolda.</p><p>Üç dil konuşuyorum ve bu her gün işe yarıyor. Yeni bir meslektaş henüz Almanca bilmiyorsa kısaca çeviriyorum — ve iş yürüyor.</p>'
    }
  }
];

/* ---------- EMPLOYEE MODAL ---------- */
function openEmployeeModal(id) {
  const emp = EMPLOYEES.find(e => e.id === id);
  if (!emp) return;
  const lang = localStorage.getItem('cg_lang') || 'de';
  const dict = T[lang] || T.de;
  const modal = document.getElementById('empModal');
  document.getElementById('empPortrait').src = emp.photo;
  document.getElementById('empPortrait').alt = emp.name;
  document.getElementById('empTenure').textContent = (emp.tenure[lang] || emp.tenure.de).toUpperCase();
  document.getElementById('empName').textContent = emp.name;
  document.getElementById('empRole').textContent = `${dict[emp.roleKey] || emp.role} · ${dict[emp.loc_key] || emp.loc}`;
  document.getElementById('empQuote').textContent = emp.quote[lang] || emp.quote.de;
  document.getElementById('empStory').innerHTML = emp.story[lang] || emp.story.de;
  const langs = document.getElementById('empLangs');
  langs.innerHTML = emp.langs.map(l => `<span>${l}</span>`).join('');
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function closeEmployeeModal() {
  const modal = document.getElementById('empModal');
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
document.addEventListener('click', e => {
  if (e.target.closest('[data-close]')) closeEmployeeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeEmployeeModal();
});

/* ---------- LEGAL MODAL (Impressum / Datenschutz / AGB / BFSG) ---------- */
const LEGAL_KEYS = {
  imprint: { titleKey: 'legal_imprint_title', textKey: 'legal_imprint_text' },
  privacy: { titleKey: 'legal_privacy_title', textKey: 'legal_privacy_text' },
  agb:     { titleKey: 'legal_agb_title',     textKey: 'legal_agb_text' },
  a11y:    { titleKey: 'legal_a11y_title',    textKey: 'legal_a11y_text' },
};
function openLegalModal(kind) {
  const cfg = LEGAL_KEYS[kind];
  if (!cfg) return;
  const lang = localStorage.getItem('cg_lang') || 'de';
  const dict = T[lang] || T.de;
  const modal = document.getElementById('legalModal');
  if (!modal) return;
  document.getElementById('legalKicker').textContent = dict.legal_kicker || 'RECHTLICHES';
  document.getElementById('legalTitle').textContent = dict[cfg.titleKey] || '';
  document.getElementById('legalText').innerHTML = `<p>${dict[cfg.textKey] || ''}</p>`;
  document.getElementById('legalPlaceholderNote').textContent = dict.legal_placeholder || '';
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function closeLegalModal() {
  const modal = document.getElementById('legalModal');
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  // only release scroll if no other modal open
  if (!document.querySelector('.empmodal.open')) document.body.style.overflow = '';
}
// Delegated click — any [data-legal] anywhere
document.addEventListener('click', e => {
  const trig = e.target.closest('[data-legal]');
  if (trig) {
    e.preventDefault();
    e.stopPropagation();
    openLegalModal(trig.getAttribute('data-legal'));
    return;
  }
  if (e.target.closest('[data-legal-close]')) closeLegalModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLegalModal();
});

/* ---------- COOKIE CONSENT BANNER ---------- */
function openCookies() {
  const c = document.getElementById('cookies');
  if (!c) return;
  c.classList.remove('closing');
  c.classList.add('open');
  c.setAttribute('aria-hidden', 'false');
}
function closeCookies() {
  const c = document.getElementById('cookies');
  if (!c) return;
  c.classList.add('closing');
  setTimeout(() => {
    c.classList.remove('open', 'closing');
    c.setAttribute('aria-hidden', 'true');
  }, 280);
}
function initCookies() {
  const c = document.getElementById('cookies');
  if (!c) return;

  // Show on first visit (also reset old v0.3 key so the new compact banner shows once)
  if (!localStorage.getItem('cg_cookie_consent') && !localStorage.getItem('gun_cookie_consent')) {
    setTimeout(openCookies, 800);
  }

  // Toggle switches
  c.querySelectorAll('.toggle[data-toggle]').forEach(tg => {
    tg.addEventListener('click', e => {
      e.preventDefault();
      const id = tg.getAttribute('data-toggle');
      const input = document.getElementById(id);
      if (!input) return;
      input.checked = !input.checked;
      tg.classList.toggle('toggle--on', input.checked);
    });
  });

  // Expand/collapse settings
  const settingsBtn = document.getElementById('ckSettingsBtn');
  if (settingsBtn) {
    settingsBtn.addEventListener('click', e => {
      e.preventDefault();
      const expanded = c.classList.toggle('expanded');
      settingsBtn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
      const cats = document.getElementById('ckCats');
      if (cats) cats.setAttribute('aria-hidden', expanded ? 'false' : 'true');
    });
  }

  // Action buttons
  c.querySelectorAll('[data-ck]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const mode = btn.getAttribute('data-ck');
      let val;
      if (mode === 'all') val = { necessary: true, stats: true, marketing: true };
      else if (mode === 'essential') val = { necessary: true, stats: false, marketing: false };
      else val = {
        necessary: true,
        stats: document.getElementById('ckStats').checked,
        marketing: document.getElementById('ckMarketing').checked
      };
      localStorage.setItem('cg_cookie_consent', JSON.stringify({ ...val, ts: Date.now() }));
      closeCookies();
    });
  });

  // Reopen via footer link
  document.querySelectorAll('[data-cookies-reopen]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      // reset to collapsed when reopened
      c.classList.remove('expanded');
      const sb = document.getElementById('ckSettingsBtn');
      if (sb) sb.setAttribute('aria-expanded', 'false');
      openCookies();
    });
  });
}
document.addEventListener('DOMContentLoaded', initCookies);

/* ---------- FORM PRIVACY LINK (Fix 15) ----------
   The data-legal handler above already preventDefault+stopPropagation,
   so the bronze "Datenschutzerklärung" inside the checkbox label opens
   the modal instead of toggling the checkbox. */
