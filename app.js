/* =========================================================
   Cuma Gün Karriere — interaction layer
   ========================================================= */

/* ---------- TRANSLATIONS ---------- */
const T = {
  de: {
    legal_lang_note: "Die Rechtstexte liegen in deutscher Sprache vor. Rechtlich verbindlich ist die deutsche Fassung.",
    map_load_btn: "Interaktive Karte laden", map_hint: "Beim Laden werden Daten an Google übertragen.",
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
    hero_h1: "Werden Sie Paketzusteller bei Cuma\u00A0Gün – Kuriertransporte\u00A0e.\u00A0K.",
    hero_ups: "Im Auftrag von UPS, dem weltgrößten Paketdienst",
    hero_sub: "Familienunternehmen, gegründet im September 1995.",
    hero_lede: "Über drei Jahrzehnte Branchenerfahrung mit Werten, die heute seltener werden: Handschlagqualität, absolute Krisensicherheit, Festanstellung zu fairen Bedingungen.",
    hero_caption: "Eigene Fahrzeuge · eigenes Personal",
    hero_founder_badge: "FOTO FOLGT",
    hero_founder_name: "Cuma Gün",
    hero_founder_role: "Geschäftsführer",
    stat1_unit: "Jahre", stat1_label: "Familienunternehmen, gegründet im September 1995",
    stat2_unit: "Standorte", stat2_label: "Nürnberg · Crailsheim",
    stat3_unit: "Sprachen", stat3_label: "Deutsch, Russisch, Rumänisch und Türkisch im Depot-Alltag",

    /* S1 */
    s1_kicker: "01 – Bewerbungsprozess",
    s1_h2_a: "In sechs Schritten zum ", s1_h2_b: "ersten Arbeitstag", s1_h2_c: ":",
    s1_lede: "Klare Wege, keine Überraschungen. Vom ersten Klick bis zur Probefahrt erklären wir Ihnen, was als Nächstes passiert.",
    s1_01_title: "Bewerbung senden", s1_01_desc: "Unterlagen über das Formular hochladen – oder direkt anrufen.",
    s1_02_title: "Bitte warten – wir melden uns", s1_02_desc: "Nach Prüfung Ihrer Bewerbung melden wir uns persönlich bei Ihnen, sobald wir eine konkrete Antwort haben.",
    s1_03_title: "Persönliches Gespräch & Schnuppertag", s1_03_desc: "Ist nicht nur möglich, sondern ausdrücklich gewünscht. Uns ist es wichtig, dass Sie vorab ein klares Bild von Ihren Aufgaben und unserem Team bekommen, bevor wir uns für eine gemeinsame Zusammenarbeit entscheiden.",
    s1_04_title: "Probefahrt möglich", s1_04_desc: "Wenn Sie möchten, fahren Sie einen Tag als Beifahrer mit, bevor Sie unterschreiben.",
    s1_05_title: "Arbeitsvertrag", s1_05_desc: "Festanstellung, deutscher Vertrag, transparente Konditionen – keine grauen Modelle.",
    s1_06_title: "Erster Tag", s1_06_desc: "Sie starten mit einem erfahrenen Kollegen an Ihrer Seite – niemand fährt allein los.",
    s1_close_strong: "Wir melden uns persönlich.", s1_close_rest: "Lieber direkt sprechen?",

    /* S2 */
    s2_kicker: "01 – Anforderungen",
    s2_h2_a: "Was Sie ", s2_h2_b: "mitbringen sollten", s2_h2_c: ":",
    s2_lede: "Wenige formale Voraussetzungen, aber klare Erwartungen an das, was im Alltag zählt. Berufserfahrung hilft, ist aber kein Muss. Wir arbeiten Sie ein.",
    s2_01_title: "Führerschein Klasse B", s2_01_desc: "Voraussetzung für unsere Touren. Klasse C1 oder C ist ein Plus, aber keine Bedingung.",
    s2_02_title: "Zuverlässigkeit", s2_02_desc: "Sie kommen, wenn Sie kommen sollen. Für uns zählt das mehr als Berufsjahre.",
    s2_03_title: "Verantwortung", s2_03_desc: "Sie sind das Gesicht unserer Firma auf der Straße. Fahrzeug und Fracht in sicheren Händen. Wir zählen auf Sie!",
    s2_04_title: "Sprachkenntnisse", s2_04_desc: "Grundkenntnisse Deutsch reichen für den Start. Im Depot sprechen wir DE, RU, RO, TR.",

    /* S3 */
    s3_kicker: "02 – Arbeitstag",
    s3_h2_a: "Wie ein ", s3_h2_b: "Arbeitstag", s3_h2_c: " aussieht:",
    s3_lede: "Ehrlich beschrieben – vom ersten Scan am Depot bis zum Feierabend. Wir nennen die Zeiten so, wie sie wirklich sind.",
    s3_t1_time: "07:00 Uhr", s3_t1_title: "Arbeitsbeginn",
    s3_t1_desc: "Der Arbeitstag beginnt um 07:00 Uhr am Fahrzeug. Etwas früher zu kommen ist eine persönliche Entscheidung – niemand setzt das voraus, niemand drängt.",
    s3_t2_time: "07:00–08:30 Uhr", s3_t2_title: "Vorbereitung & Abfahrt",
    s3_t2_desc: "Der Arbeitstag beginnt um 07:00 Uhr am Fahrzeug. Etwas früher zu kommen ist eine persönliche Entscheidung – niemand setzt das voraus, niemand drängt.<br><strong>Ladung richten:</strong> Sendungen scannen, nach Stopps schlichten, Express-Pakete prüfen.<br><strong>Abfahrt:</strong> Planmäßig zwischen 08:15 und 08:30 Uhr.<br>Kaffeezeit ist immer drin.",
    s3_t3_time: "08:30–13:00 Uhr", s3_t3_title: "Ihre Route, Ihr Rhythmus",
    s3_t3_desc: "Sie sind auf Ihrer vertrauten Route unterwegs. Express-Sendungen planen wir vorab gemeinsam mit der Disposition – die Kunden warten. Das gibt Ihnen maximale Planungssicherheit für den Tag – ohne Stress und Überraschungen zwischendurch.",
    s3_t4_time: "13:00–13:45 Uhr", s3_t4_title: "Pause (Mittag)",
    s3_t4_desc: "Sie ist ein Muss: Gesetzlich vorgeschrieben nach spätestens 4,5 Stunden Lenkzeit.<br><br>Flexibel unterwegs planbar (Richtwert: 13:00 bis 13:45 Uhr).",
    s3_t5_time: "13:45–16:00 Uhr", s3_t5_title: "Zweite Tageshälfte",
    s3_t5_desc: "Nach der Pause die verbleibenden Pakete ausliefern. Parallel feste Vertragskunden anfahren und spontane Tagesaufträge übernehmen. Zwischen 15:30 und 16:00 Uhr Rückkehr ins Center.",
    s3_t6_time: "", s3_t6_title: "Nach der Tour",
    s3_t6_desc: "Bei Bedarf das Fahrzeug waschen. Etwaige Vorkommnisse oder Probleme auf der Tour direkt mit der Disposition klären. Tour ordnungsgemäß im System abschließen. Feierabend.",
    s3_t7_time: "", s3_t7_title: "Erste Wochen",
    s3_t7_desc: "Aller Anfang ist schwer, deshalb lassen wir Sie nicht allein: In der ersten Woche sind Sie Beifahrer. Ein erfahrener Kollege zeigt Ihnen die Tour. Unser Job verlangt echtes Können und ist kein Beruf für jedermann – das wissen wir. Planen Sie in der ersten Zeit ruhig etwas mehr Spielraum ein. Bis Sie die Route perfekt kennen, kann es auch mal 16:00 oder 17:00 Uhr werden. Machen Sie sich keine Sorgen: Ihre Arbeitszeit wird natürlich komplett erfasst.",
    s3_close_strong: "Alle Details", s3_close_a: " – individuelle Konditionen, genaue Stunden, konkrete Aufgaben – ", s3_close_strong2: "besprechen wir im Vorstellungsgespräch.", s3_close_b: " Sie sollen wissen, worauf Sie sich einlassen, bevor Sie unterschreiben.",

    /* S4 */
    s4_kicker: "03 – Offene Stellen",
    s4_h2_a: "Aktuell ", s4_h2_b: "suchen wir", s4_h2_c: ":",
    s4_lede: "Drei offene Stellen an unseren Standorten. Ist nichts Passendes dabei, freuen wir uns über Ihre Initiativbewerbung.",
    tag_active: "Aktiv", tag_initiativ: "Initiativ", tag_full: "Vollzeit", tag_part: "Teilzeit", tag_mini: "Minijob", tag_fullpart: "Vollzeit · Teilzeit",
    loc_nbg: "Nürnberg", loc_crl: "Crailsheim", loc_both: "Nürnberg · Crailsheim",
    badge_total: "Jahre insgesamt",
    s4_j1_title: "Paketzusteller (m/w/d)", s4_j1_desc: "Tägliche Zustelltouren im Stadtgebiet Nürnberg und Umgebung. Festanstellung mit deutschem Arbeitsvertrag, Einarbeitung mit erfahrenem Kollegen.",
    s4_j2_title: "Paketzusteller (m/w/d)", s4_j2_desc: "Zustellung in und um Crailsheim. Feste Vollzeitstelle mit geregelten Touren. Klasse-B-Führerschein erforderlich.",
    s4_j3_title: "Be- und Entlader (m/w/d)", s4_j3_desc: "Verladearbeiten am Depot Nürnberg. Frühschicht, Beginn am frühen Morgen. Körperliche Belastbarkeit ist wichtig, ein Führerschein nicht nötig.",
    s4_j4_title: "Initiativbewerbung", s4_j4_desc: "Kein passender Job dabei? Schicken Sie uns trotzdem Ihre Unterlagen. Gute Leute finden bei uns immer einen Platz – auch außerhalb der aktuell ausgeschriebenen Stellen.",

    /* S5 */
    s5_kicker: "04 – Stimmen aus dem Team",
    s5_h2_a: "Echte Geschichten – ", s5_h2_b: "aus unserem Team", s5_h2_c: ":",
    s5_lede: "Kolleginnen und Kollegen aus Nürnberg und Crailsheim – mit Foto, Namen und eigenen Worten. Karte antippen für die ganze Geschichte.",
    voice_demo: "Demo · Foto folgt",
    voice_courier: "Kurierfahrer", voice_dispatch: "Disposition", voice_loader: "Be- und Entlader", voice_workshop: "Werkstatt",

    /* S6 */
    s6_kicker: "05 – Häufige Fragen",
    s6_h2_a: "Was Bewerber ", s6_h2_b: "oft fragen", s6_h2_c: ":",
    s6_lede: "Wenn Ihre Frage nicht dabei ist – schreiben Sie uns. Wir antworten persönlich.",
    s6_q1: "Welche Unterlagen brauche ich für die Bewerbung?",
    s6_a1: "Ein übersichtlicher Lebenslauf sowie <strong>aktuelles Foto</strong> reicht für den ersten Schritt. Ein klar strukturierter <strong>Lebenslauf</strong> ist für Sie von großem Vorteil.<br><br>Wir gehen davon aus, dass alle notwendigen Dokumente – wie <strong>Führerschein</strong> und <strong>Aufenthaltspapiere</strong> – gültig vorliegen und bereitgehalten werden.<br><br>Wir freuen uns auf Ihre Bewerbung!",
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
    s7_kicker: "06 – Standorte",
    s7_h2_a: "Zwei Standorte, ", s7_h2_b: "eine Disposition", s7_h2_c: ":",
    s7_lede: "Wir verfügen über zwei Niederlassungen in Nürnberg und Crailsheim. Ihr künftiger Arbeitsort sowie der Ort des Bewerbungsgesprächs richten sich nach dem Standort, für den Sie sich bewerben.",
    loc_hq: "Standort", loc_branch: "Standort",
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
    s8_kicker: "07 – Bewerbung",
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
    form_ok_text: "Vielen Dank für Ihr Interesse. Unser Online-Formular wird derzeit fertiggestellt. Bitte senden Sie Ihre Unterlagen vorerst per E-Mail an <a href='mailto:nuernberg-bewerbung@guen-transporte.de' style='color:var(--bronze);text-decoration:underline;'>nuernberg-bewerbung@guen-transporte.de</a>",

    /* Footer */
    footer_tagline: "seit September 1995",
    footer_menu: "Menü", footer_locations: "Standorte", footer_legal: "Rechtliches",
    footer_imprint: "Impressum", footer_privacy: "Datenschutzerklärung", footer_a11y: "Barrierefreiheit",
    footer_family: "Familienunternehmen · Nürnberg und Crailsheim",
    footer_translations: "Übersetzungen DE/RU/RO/TR – werden noch finalisiert",
    emp_kicker: "MITARBEITERGESCHICHTE",
    emp_back: "Zurück zur Übersicht",
    legal_kicker: "RECHTLICHES",
    legal_imprint_title: "Impressum",
    legal_privacy_title: "Datenschutzerklärung",
    legal_agb_title: "Allgemeine Geschäftsbedingungen",
    legal_a11y_title: "Barrierefreiheit",
  },

  ru: {
    legal_lang_note: "Юридические тексты представлены на немецком языке. Юридическую силу имеет немецкая редакция.",
    map_load_btn: "Загрузить интерактивную карту", map_hint: "При загрузке данные передаются в Google.",
    brand_sub: "С 1995 года",
    nav_prozess: "Процесс приёма", nav_arbeitstag: "Рабочий день", nav_ueber: "О нас", nav_stellen: "Вакансии",
    nav_standorte: "Локации", nav_faq: "Вопросы",
    cta_apply: "Подать заявку", cta_apply_now: "Подать заявку", cta_apply_arrow: "Подать заявку",
    cta_day: "Как проходит рабочий день",
    demo_photo: "Демо-фото · будет заменено реальным снимком",

    hero_eyebrow: "Открытые вакансии · Нюрнберг и Крайльсхайм",
    hero_h1: "Станьте доставщиком посылок в компании Cuma Gün – Kuriertransporte e. K.",
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
    tag_active: "Активна", tag_initiativ: "Инициативная", tag_full: "Полная занятость", tag_part: "Частичная", tag_mini: "Мини-работа", tag_fullpart: "Полная · Частичная",
    loc_nbg: "Нюрнберг", loc_crl: "Крайльсхайм", loc_both: "Нюрнберг · Крайльсхайм",
    badge_total: "года в сумме",
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
    ueber_body: "Совсем скоро здесь Вы узнаете больше о Cuma Gün – Kuriertransporte e. K. — о семье, стоящей за компанией, трёх десятилетиях отраслевого опыта, наших ценностях и нашем партнёрстве с United Parcel Service.",
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
    form_ok_text: "Спасибо за интерес. Онлайн-форма сейчас дорабатывается. Пожалуйста, отправьте документы пока по электронной почте на <a href='mailto:nuernberg-bewerbung@guen-transporte.de' style='color:var(--bronze);text-decoration:underline;'>nuernberg-bewerbung@guen-transporte.de</a>",

    footer_tagline: "Семейная курьерская служба с сентября 1995 года.",
    footer_menu: "Меню", footer_locations: "Локации", footer_legal: "Юридическая информация",
    footer_imprint: "Выходные данные", footer_privacy: "Политика конфиденциальности", footer_a11y: "Доступность",
    footer_family: "Семейное предприятие · Главный офис Нюрнберг",
    footer_translations: "Переводы DE/RU/RO/TR — ещё дорабатываются",
    emp_kicker: "ИСТОРИЯ СОТРУДНИКА",
    emp_back: "Назад к обзору",
    legal_kicker: "ЮРИДИЧЕСКАЯ ИНФОРМАЦИЯ",
    legal_imprint_title: "Выходные данные",
    legal_privacy_title: "Политика конфиденциальности",
    legal_agb_title: "Общие условия и положения",
    legal_a11y_title: "Доступность",
  },

  ro: {
    legal_lang_note: "Textele juridice sunt disponibile în limba germană. Versiunea germană este cea obligatorie din punct de vedere juridic.",
    map_load_btn: "Încarcă harta interactivă", map_hint: "La încărcare, datele sunt transmise către Google.",
    brand_sub: "Din 1995",
    nav_prozess: "Procesul de aplicare", nav_arbeitstag: "O zi de lucru", nav_ueber: "Despre noi", nav_stellen: "Posturi libere",
    nav_standorte: "Locații", nav_faq: "Întrebări",
    cta_apply: "Aplicați acum", cta_apply_now: "Aplicați acum", cta_apply_arrow: "Aplicați acum",
    cta_day: "Cum arată o zi de lucru",
    demo_photo: "Foto demo · va fi înlocuită cu o imagine reală",

    hero_eyebrow: "Posturi vacante acum · Nürnberg și Crailsheim",
    hero_h1: "Deveniți livrator de colete la Cuma Gün – Kuriertransporte e. K.",
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
    tag_active: "Activ", tag_initiativ: "Spontan", tag_full: "Normă întreagă", tag_part: "Jumătate de normă", tag_mini: "Minijob", tag_fullpart: "Normă întreagă · Jumătate",
    loc_nbg: "Nürnberg", loc_crl: "Crailsheim", loc_both: "Nürnberg · Crailsheim",
    badge_total: "ani în total",
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
    ueber_body: "În curând veți afla aici mai multe despre Cuma Gün – Kuriertransporte e. K. — familia din spatele companiei, trei decenii de experiență în domeniu, valorile noastre și parteneriatul nostru cu United Parcel Service.",
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
    form_ok_text: "Vă mulțumim pentru interes. Formularul online este în curs de finalizare. Vă rugăm să trimiteți documentele deocamdată prin e-mail la <a href='mailto:nuernberg-bewerbung@guen-transporte.de' style='color:var(--bronze);text-decoration:underline;'>nuernberg-bewerbung@guen-transporte.de</a>",

    footer_tagline: "Serviciu de curierat de familie din septembrie 1995.",
    footer_menu: "Meniu", footer_locations: "Locații", footer_legal: "Legal",
    footer_imprint: "Date despre firmă", footer_privacy: "Politica de confidențialitate", footer_a11y: "Accesibilitate",
    footer_family: "Afacere de familie · Sediu Nürnberg",
    footer_translations: "Traduceri DE/RU/RO/TR — încă în finalizare",
    emp_kicker: "POVESTEA UNUI ANGAJAT",
    emp_back: "Înapoi la prezentare",
    legal_kicker: "LEGAL",
    legal_imprint_title: "Date despre firmă",
    legal_privacy_title: "Politică de confidențialitate",
    legal_agb_title: "Termeni și condiții generale",
    legal_a11y_title: "Accesibilitate",
  },

  tr: {
    legal_lang_note: "Hukuki metinler Almanca olarak sunulmaktadır. Hukuken bağlayıcı olan Almanca metindir.",
    map_load_btn: "Etkileşimli haritayı yükle", map_hint: "Yükleme sırasında veriler Google'a aktarılır.",
    brand_sub: "1995'ten beri",
    nav_prozess: "Başvuru süreci", nav_arbeitstag: "Bir iş günü", nav_ueber: "Hakkımızda", nav_stellen: "Açık pozisyonlar",
    nav_standorte: "Konumlar", nav_faq: "Sorular",
    cta_apply: "Şimdi başvurun", cta_apply_now: "Şimdi başvurun", cta_apply_arrow: "Şimdi başvurun",
    cta_day: "Bir iş günü nasıl geçer",
    demo_photo: "Demo foto · gerçek fotoğrafla değiştirilecek",

    hero_eyebrow: "Şu anda açık pozisyonlar · Nürnberg ve Crailsheim",
    hero_h1: "Cuma Gün – Kuriertransporte e. K.'de paket dağıtıcısı olun.",
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
    tag_active: "Aktif", tag_initiativ: "Spontane", tag_full: "Tam zamanlı", tag_part: "Yarı zamanlı", tag_mini: "Minijob", tag_fullpart: "Tam · Yarı zamanlı",
    loc_nbg: "Nürnberg", loc_crl: "Crailsheim", loc_both: "Nürnberg · Crailsheim",
    badge_total: "yıl toplam",
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
    ueber_body: "Çok yakında burada Cuma Gün – Kuriertransporte e. K. hakkında daha fazlasını öğreneceksiniz — şirketin arkasındaki aile, otuz yıllık sektör deneyimi, değerlerimiz ve United Parcel Service ile ortaklığımız.",
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
    form_ok_text: "İlginiz için teşekkür ederiz. Online başvuru formumuz şu anda tamamlanıyor. Belgelerinizi şimdilik <a href='mailto:nuernberg-bewerbung@guen-transporte.de' style='color:var(--bronze);text-decoration:underline;'>nuernberg-bewerbung@guen-transporte.de</a> adresine e-posta ile gönderebilirsiniz.",

    footer_tagline: "Eylül 1995'ten beri aile yönetimindeki kurye hizmeti.",
    footer_menu: "Menü", footer_locations: "Konumlar", footer_legal: "Yasal",
    footer_imprint: "Künye", footer_privacy: "Gizlilik Politikası", footer_a11y: "Erişilebilirlik",
    footer_family: "Aile şirketi · Merkez Nürnberg",
    footer_translations: "DE/RU/RO/TR çevirileri — henüz tamamlanıyor",
    emp_kicker: "ÇALIŞAN HİKAYESİ",
    emp_back: "Genel bakışa dön",
    legal_kicker: "YASAL",
    legal_imprint_title: "Künye",
    legal_privacy_title: "Gizlilik Politikası",
    legal_agb_title: "Genel İşlem Koşulları",
    legal_a11y_title: "Erişilebilirlik",
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
      if (key === 'form_drop' || key === 'form_ok_text' || key === 'form_dsgvo' || key === 's6_a1' || /^s3_t\d_desc$/.test(key)) el.innerHTML = dict[key];
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
  document.querySelectorAll('#mnavLangs button').forEach(b => {
    b.setAttribute('aria-current', b.dataset.lang === lang ? 'true' : 'false');
  });
  // footer translation badge
  const badge = document.querySelector('.footer__lang');
  if (badge) badge.textContent = dict.footer_translations || badge.textContent;
  softenNbsp(true);
}

/* Non-breaking spaces keep "Cuma Gün – Kuriertransporte e. K." intact on desktop,
   but make the line unbreakable on narrow screens. Below 1150px they become
   ordinary spaces so the headline can wrap. */
const NBSP_SEL = '.hero h1, .hero__ups, .hero__lede, .ueber__body, .ueber__h1';
const nbspNarrow = window.matchMedia('(max-width: 1149.98px)');
function softenNbsp(refresh) {
  const narrow = nbspNarrow.matches;
  document.querySelectorAll(NBSP_SEL).forEach(el => {
    if (refresh) delete el.dataset.nbspSrc;
    if (el.dataset.nbspSrc == null) {
      if (el.textContent.indexOf('\u00A0') === -1) return;
      el.dataset.nbspSrc = el.textContent;
    }
    const src = el.dataset.nbspSrc;
    el.textContent = narrow ? src.replace(/\u00A0/g, ' ') : src;
  });
}
nbspNarrow.addEventListener
  ? nbspNarrow.addEventListener('change', softenNbsp)
  : nbspNarrow.addListener(softenNbsp);

const initLang = localStorage.getItem('cg_lang') || 'de';
document.addEventListener('DOMContentLoaded', () => {
  applyLang(initLang);
  softenNbsp();

  /* ---------- LANGUAGE DROPDOWN ---------- */
  const langMenu = document.getElementById('langMenu');
  const langToggle = document.getElementById('langToggle');
  if (langMenu) {
    const langWrap = document.getElementById('lang') || langMenu.parentElement;
    const setLangOpen = on => {
      langWrap.classList.toggle('lang--open', on);
      if (langToggle) langToggle.setAttribute('aria-expanded', on ? 'true' : 'false');
    };
    const langIsOpen = () => langWrap.classList.contains('lang--open');
    langMenu.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        localStorage.setItem('cg_lang', lang);
        applyLang(lang);
        renderMarquee(lang);
        setLangOpen(false);
        if (document.activeElement && document.activeElement.blur) document.activeElement.blur();
      });
    });
    if (langToggle) {
      langToggle.addEventListener('click', e => {
        e.preventDefault();
        setLangOpen(!langIsOpen());
      });
    }
    document.addEventListener('click', e => {
      if (langIsOpen() && !langWrap.contains(e.target)) setLangOpen(false);
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && langIsOpen()) {
        setLangOpen(false);
        if (langToggle) langToggle.focus();
      }
    });
  }

  /* ---------- HEADER scroll state ---------- */
  const header = document.getElementById('header');
  const setScrolled = () => header.classList.toggle('scrolled', window.scrollY > 12);
  setScrolled();
  window.addEventListener('scroll', setScrolled, { passive: true });

  /* ---------- BURGER / MOBILE NAV PANEL ---------- */
  const burger = document.getElementById('burger');
  const mobileNav = document.getElementById('mobileNav');
  const mnavClose = document.getElementById('mnavClose');
  const FOCUSABLE = 'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';
  let lastFocused = null;
  const navOpen = () => mobileNav.classList.contains('open');

  function openNav() {
    if (window.matchMedia('(min-width: 1150px)').matches) return;
    lastFocused = document.activeElement;
    mobileNav.classList.add('open');
    mobileNav.setAttribute('aria-hidden', 'false');
    burger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    (mnavClose || mobileNav.querySelector(FOCUSABLE)).focus();
  }
  function closeNav() {
    if (!navOpen()) return;
    mobileNav.classList.remove('open');
    mobileNav.setAttribute('aria-hidden', 'true');
    burger.setAttribute('aria-expanded', 'false');
    if (!document.querySelector('.empmodal.open, .legalmodal.open')) document.body.style.overflow = '';
    if (lastFocused && lastFocused.focus) lastFocused.focus();
  }

  burger.setAttribute('aria-expanded', 'false');
  burger.setAttribute('aria-controls', 'mobileNav');
  burger.addEventListener('click', () => navOpen() ? closeNav() : openNav());
  if (mnavClose) mnavClose.addEventListener('click', closeNav);
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));
  mobileNav.querySelectorAll('#mnavLangs button').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      localStorage.setItem('cg_lang', lang);
      applyLang(lang);
      renderMarquee(lang);
    });
  });

  document.addEventListener('keydown', e => {
    if (!navOpen()) return;
    if (e.key === 'Escape') { e.preventDefault(); closeNav(); return; }
    if (e.key !== 'Tab') return;
    const items = [...mobileNav.querySelectorAll(FOCUSABLE)].filter(el => el.offsetParent !== null);
    if (!items.length) return;
    const first = items[0], last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    else if (!mobileNav.contains(document.activeElement)) { e.preventDefault(); first.focus(); }
  });

  const wide = window.matchMedia('(min-width: 1150px)');
  const onWide = e => { if (e.matches) closeNav(); };
  wide.addEventListener ? wide.addEventListener('change', onWide) : wide.addListener(onWide);

  /* ---------- STICKY CTA / BOTTOM BAR: hide on scroll down, show on scroll up ---------- */
  const stickyEls = [document.getElementById('stickyApply'), document.getElementById('ctaBar')].filter(Boolean);
  if (stickyEls.length) {
    const THRESHOLD = 8;
    let lastY = window.pageYOffset, ticking = false;
    const setHidden = on => stickyEls.forEach(el => el.classList.toggle('is-hidden', on));

    function updateSticky() {
      ticking = false;
      const y = window.pageYOffset;
      const doc = document.documentElement;
      const atTop = y <= THRESHOLD;
      const atBottom = y + window.innerHeight >= doc.scrollHeight - 2;
      if (wide.matches || atTop || atBottom) { setHidden(false); lastY = y; return; }
      const delta = y - lastY;
      if (Math.abs(delta) < THRESHOLD) return;
      setHidden(delta > 0);
      lastY = y;
    }
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(updateSticky);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    wide.addEventListener ? wide.addEventListener('change', updateSticky) : wide.addListener(updateSticky);
    updateSticky();
  }

  /* ---------- OVERLAY STATE: one flag for every kind of modal/panel ---------- */
  const OVERLAY_SEL = '.empmodal.open, .legalmodal.open, .mobile-nav.open';
  const syncOverlay = () => document.body.classList.toggle('overlay-open', !!document.querySelector(OVERLAY_SEL));
  const overlayObserver = new MutationObserver(syncOverlay);
  document.querySelectorAll('.empmodal, .legalmodal, .mobile-nav').forEach(el => {
    overlayObserver.observe(el, { attributes: true, attributeFilter: ['class'] });
  });
  syncOverlay();

  /* ---------- REVEAL on scroll ---------- */
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add('in');
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0, rootMargin: '0px 0px 12% 0px' });
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
    }, { threshold: 0, rootMargin: '0px 0px 12% 0px' });
    stepsIO.observe(steps);
  }

  /* ---------- MAP CONSENT (no external request before click) ---------- */
  document.querySelectorAll('.map-consent').forEach(wrap => {
    const btn = wrap.querySelector('.map-consent__btn');
    const cover = wrap.querySelector('.map-consent__cover');
    const frame = wrap.querySelector('iframe');
    if (!btn || !cover || !frame) return;
    btn.addEventListener('click', () => {
      if (frame.dataset.src) { frame.src = frame.dataset.src; frame.removeAttribute('data-src'); }
      frame.setAttribute('tabindex', '0');
      cover.classList.add('is-hiding');
      setTimeout(() => { cover.remove(); frame.focus(); }, 200);
    });
  });

  /* ---------- STAT COUNT-UP (years since founding) ---------- */
  const statYears = document.getElementById('statYears');
  if (statYears) {
    const parts = String(statYears.dataset.since || '1995-09').split('-');
    const sinceYear = parseInt(parts[0], 10) || 1995;
    const sinceMonth = parseInt(parts[1], 10) || 9; // September
    const now = new Date();
    // Subtract a year until the founding month has been reached.
    let target = now.getFullYear() - sinceYear;
    if (now.getMonth() + 1 < sinceMonth) target -= 1;
    target = Math.max(0, target);
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    statYears.textContent = target;
    if (!reduce) {
      let raf = null;
      const animate = () => {
        if (raf) cancelAnimationFrame(raf);
        const dur = 1500;
        const start = performance.now();
        const tick = (t0) => {
          const t = Math.min(1, (t0 - start) / dur);
          const eased = 1 - Math.pow(1 - t, 3);
          statYears.textContent = Math.round(eased * target);
          if (t < 1) raf = requestAnimationFrame(tick);
          else { statYears.textContent = target; raf = null; }
        };
        statYears.textContent = 0;
        raf = requestAnimationFrame(tick);
      };
      if ('IntersectionObserver' in window) {
        new IntersectionObserver(entries => {
          entries.forEach(en => { if (en.isIntersecting) animate(); });
        }, { threshold: 0, rootMargin: '0px 0px -8% 0px' }).observe(statYears);
      }
    }
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
  const track = document.querySelector('#marquee .marquee__track');
  if (!track) return;
  const html = EMPLOYEES.map(e => `
    <div class="voice" data-emp="${e.id}" data-since="${e.since}">
      <span class="voice__badge">${tenureLabel(e.since, lang, e.periods)}</span>
      <img class="voice__photo" loading="lazy" width="800" height="800" src="${e.photo}" alt="${e.alt}" />
      <div class="voice__meta">
        <div class="voice__name">${e.name}</div>
        <div class="voice__role">${e.role} · ${dict[e.loc_key] || e.loc}</div>
      </div>
    </div>
  `).join('');
  track.innerHTML = html + html;
  track.querySelectorAll('.voice').forEach(v => {
    v.addEventListener('click', () => openEmployeeModal(v.dataset.emp));
  });
}

/* ---------- TENURE (computed, never hardcoded) ---------- */
function tenureYears(since) {
  const p = String(since || '').split('-');
  const y = parseInt(p[0], 10), m = parseInt(p[1], 10) || 1;
  if (!y) return 0;
  const now = new Date();
  let n = now.getFullYear() - y;
  if (now.getMonth() + 1 < m) n -= 1;
  return Math.max(0, n);
}
function monthsBetween(from, to) {
  const f = String(from || '').split('-'), t = String(to || '').split('-');
  const fy = parseInt(f[0], 10), fm = parseInt(f[1], 10) || 1;
  const ty = parseInt(t[0], 10), tm = parseInt(t[1], 10) || 1;
  if (!fy || !ty) return 0;
  return Math.max(0, (ty - fy) * 12 + (tm - fm));
}
/* Total tenure across breaks: past periods + current stretch, rounded to 0.5 y */
function tenureTotalYears(since, periods) {
  const now = new Date();
  const today = now.getFullYear() + '-' + (now.getMonth() + 1);
  let months = monthsBetween(since, today);
  (periods || []).forEach(p => { months += monthsBetween(p.from, p.to); });
  return Math.round((months / 12) * 2) / 2;
}
function tenureLabel(since, lang, periods) {
  if (periods && periods.length) {
    const dict = T[lang] || T.de;
    const total = tenureTotalYears(since, periods);
    const num = String(total).replace('.', ',');
    return num + ' ' + (dict.badge_total || T.de.badge_total);
  }
  const n = tenureYears(since);
  if (lang === 'ru') {
    const m100 = n % 100, m10 = n % 10;
    let word = 'лет';
    if (m100 < 11 || m100 > 14) {
      if (m10 === 1) word = 'год';
      else if (m10 >= 2 && m10 <= 4) word = 'года';
    }
    return n + ' ' + word + ' в команде';
  }
  if (lang === 'ro') {
    if (n === 1) return '1 an în echipă';
    if (n <= 19) return n + ' ani în echipă';
    return n + ' de ani în echipă';
  }
  if (lang === 'tr') return n + ' yıldır ekipte';
  return n === 1 ? '1 Jahr im Team' : n + ' Jahre im Team';
}

/* ---------- EMPLOYEE DATA (real team, Nürnberg) ---------- */
const EMPLOYEES = [
  {
    id: 'saman',
    photo: 'images/team/saman-a.jpg',
    initials: 'SA', name: 'Saman A.',
    role: 'Fahrer', loc: 'Nürnberg', loc_key: 'loc_nbg',
    since: '2006-07',
    alt: 'Saman A., Fahrer am Standort Nürnberg, vor seinem Zustellfahrzeug',
    langs: ['DE'],
    quote: { de: '„20 Jahre – das bedeutet lange Treue und viel Erfahrung.“' }
  },
  {
    id: 'osman',
    photo: 'images/team/osman-y.jpg',
    initials: 'OY', name: 'Osman Y.',
    role: 'Fahrer', loc: 'Nürnberg', loc_key: 'loc_nbg',
    since: '2002-10',
    alt: 'Osman Y., Fahrer am Standort Nürnberg, vor seinem Zustellfahrzeug',
    langs: ['DE'],
    quote: { de: '„Nach 23 Jahren im Job habe ich jetzt noch genau drei Jahre bis zur Rente. Die schaffe ich auch noch locker!“' }
  },
  {
    id: 'aytac',
    photo: 'images/team/aytac-y.jpg',
    initials: 'AY', name: 'Aytac Y.',
    role: 'Fahrer', loc: 'Nürnberg', loc_key: 'loc_nbg',
    since: '2008-01',
    alt: 'Aytac Y., Fahrer am Standort Nürnberg, vor seinem Zustellfahrzeug',
    langs: ['DE'],
    quote: { de: '„Nach 18 Jahren in diesem Job brauche ich gar nicht mehr nachzudenken – das ist mir absolut ins Blut übergegangen.“' }
  },
  {
    id: 'nicola',
    photo: 'images/team/nicola-c.jpg',
    initials: 'NC', name: 'Nicola C.',
    role: 'Fahrer 7,5 t', loc: 'Nürnberg', loc_key: 'loc_nbg',
    since: '2010-04',
    alt: 'Nicola C., Fahrer eines 7,5-Tonners am Standort Nürnberg',
    langs: ['DE'],
    quote: { de: '„Die Arbeit ist ein Teil von mir geworden. Deshalb frage ich mich manchmal, ob ich woanders überhaupt noch etwas finde, das so gut zu mir passt.“' }
  },
  {
    id: 'helmut',
    photo: 'images/team/helmut-h.jpg',
    initials: 'HH', name: 'Helmut H.',
    role: 'Fahrer', loc: 'Nürnberg', loc_key: 'loc_nbg',
    since: '2011-02',
    alt: 'Helmut H., Fahrer am Standort Nürnberg, vor seinem Zustellfahrzeug',
    langs: ['DE'],
    quote: { de: '„Mein Name ist Helmut H., ich bin 59 Jahre alt und verheiratet. Selbst nach 15 Jahren macht die Arbeit immer noch Spaß und Freude, und ich bin jeden Tag aufs Neue motiviert für meine Kunden!“' }
  },
  {
    id: 'santana',
    photo: 'images/team/santana-f.jpg',
    initials: 'SF', name: 'Santana F.',
    role: 'Fahrer', loc: 'Nürnberg', loc_key: 'loc_nbg',
    since: '2024-07',
    alt: 'Santana F., Fahrer am Standort Nürnberg, vor seinem Zustellfahrzeug',
    langs: ['DE'],
    quote: { de: '„Ich komme aus Kuba und bin echt froh und dankbar für diese tolle Chance hier.“' }
  },
  {
    id: 'yanes',
    photo: 'images/team/yanes-s.jpg',
    initials: 'YS', name: 'Yanes S.',
    role: 'Be- und Entlader', loc: 'Nürnberg', loc_key: 'loc_nbg',
    since: '2025-04',
    alt: 'Yanes S., Be- und Entlader am Standort Nürnberg im Depot',
    langs: ['DE'],
    quote: { de: '„Ich komme aus Spanien und bin echt froh über die Teilzeitstelle hier. Das hat mir nach dem Umzug super geholfen, im neuen Alltag anzukommen!“' }
  },
  {
    id: 'stanislav',
    photo: 'images/team/stanislav-d.jpg',
    initials: 'SD', name: 'Stanislav D.',
    role: 'Fahrer', loc: 'Nürnberg', loc_key: 'loc_nbg',
    since: '2010-10',
    alt: 'Stanislav D., Fahrer am Standort Nürnberg, am Steuer seines Zustellfahrzeugs',
    langs: ['DE'],
    quote: { de: '„Nach einem kurzen Ausflug in einen anderen Bereich habe ich festgestellt, dass mein Platz hier ist. Ich bin froh, wieder zurück zu sein, da ich mich in diesem Team und Umfeld einfach am wohlsten fühle.“' }
  },
  {
    id: 'ivan',
    photo: 'images/team/ivan-d.jpg',
    initials: 'ID', name: 'Ivan D.',
    role: 'Fahrer', loc: 'Nürnberg', loc_key: 'loc_nbg',
    since: '2025-02',
    periods: [ { from: '2017-07', to: '2019-07' } ],
    alt: 'Ivan D., Fahrer am Standort Nürnberg, vor seinem Zustellfahrzeug',
    langs: ['DE'],
    quote: { de: '„Es kam so, dass ich zurückkommen musste – und man hat mich ohne große Fragen wieder aufgenommen. So etwas bleibt hängen.“' }
  },
  {
    id: 'nadeem',
    photo: 'images/team/iqbal-n.jpg',
    initials: 'NI', name: 'Nadeem I.',
    role: 'Werkstatt', loc: 'Crailsheim', loc_key: 'loc_crl',
    since: '2021-05',
    alt: 'Nadeem I., Mitarbeiter in der Werkstatt am Standort Crailsheim',
    langs: ['DE'],
    quote: { de: '„Ich bin Nadeem ich bin seit fünf Jahren bei der Firma Gün tätig. Am Anfang war ich Zusteller. Jetzt bin ich in der Werkstatt tätig aber wenn ich ab und zu noch fahren muss, das macht mir großen Spaß.“' }
  },
  {
    id: 'razvan',
    photo: 'images/team/razvan-s.jpg',
    initials: 'RS', name: 'Razvan S.',
    role: 'Fahrer', loc: 'Crailsheim', loc_key: 'loc_crl',
    since: '2019-07',
    alt: 'Razvan S., Fahrer am Standort Crailsheim, im Laderaum seines Zustellfahrzeugs',
    langs: ['DE'],
    quote: { de: '„Ich bin Razvan. Bin seit ca. 7 Jahren Zusteller bei der Firma Cuma Gün in Crailsheim. Ich bin gerne Zusteller und bekomme sehr häufig positive Rückmeldungen von meinem Arbeitgeber, dass Ich meine Arbeit sehr gut erledige. Vor 2 Jahren betraute mich mein Arbeitgeber mit zusätzlichen Aufgaben, wo ich wieder etwas Neues lernen konnte und Ich auch mittlerweile mit Ausbildungsaufgaben für Kollegen betraut bin.“' }
  },
  {
    id: 'fanel',
    photo: 'images/team/fanel-v.jpg',
    initials: 'FV', name: 'Fanel V.',
    role: 'Fahrer', loc: 'Crailsheim', loc_key: 'loc_crl',
    since: '2024-07',
    alt: 'Fanel V., Fahrer am Standort Crailsheim, bei der Paketsortierung',
    langs: ['DE'],
    quote: { de: '„Hallo, ich heiße Fanel. Ich bin erst seit kurzem Teil der Firma Cuma Gün Crailsheim. Die ersten Wochen waren sehr anstrengend und fordernd für mich. Im Laufe der Zeit und mit der Entwicklung einer täglichen Routine machte mir aber die Zustellarbeit immer mehr Spaß. Jetzt freut es mich, dass ich Zusteller bei der Firma Gün bin und Ich mache meinen Job sehr gerne.“' }
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
  document.getElementById('empTenure').textContent = tenureLabel(emp.since, lang, emp.periods).toUpperCase();
  document.getElementById('empName').textContent = emp.name;
  document.getElementById('empRole').textContent = `${emp.role} · ${dict[emp.loc_key] || emp.loc}`;
  document.getElementById('empQuote').textContent = emp.quote[lang] || emp.quote.de;
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

/* ---------- LEGAL MODAL (Impressum / Datenschutz / AGB / Barrierefreiheit) ---------- */
const LEGAL_KEYS = {
  imprint: { titleKey: 'legal_imprint_title' },
  privacy: { titleKey: 'legal_privacy_title' },
  agb:     { titleKey: 'legal_agb_title' },
  a11y:    { titleKey: 'legal_a11y_title' },
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
  const block = document.getElementById('legal-' + kind + '-body');
  const note = dict.legal_lang_note ? '<p class="legalmodal__langnote">' + dict.legal_lang_note + '</p>' : '';
  const target = document.getElementById('legalText');
  if (block) {
    target.innerHTML = note + block.innerHTML;
    target.classList.add('is-longform');
  } else {
    target.innerHTML = '<p>' + (dict[cfg.textKey] || '') + '</p>';
    target.classList.remove('is-longform');
  }
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

/* The legal texts live only on the start page. Links from other pages arrive
   as index.html#impressum etc. and open the matching modal here. */
const LEGAL_HASHES = { '#impressum': 'imprint', '#datenschutz': 'privacy', '#agb': 'agb', '#barrierefreiheit': 'a11y' };
function openLegalFromHash() {
  const kind = LEGAL_HASHES[location.hash];
  if (kind && document.getElementById('legalModal')) openLegalModal(kind);
}
window.addEventListener('hashchange', openLegalFromHash);
document.addEventListener('DOMContentLoaded', openLegalFromHash);

/* ---------- FORM PRIVACY LINK (Fix 15) ----------
   The data-legal handler above already preventDefault+stopPropagation,
   so the bronze "Datenschutzerklärung" inside the checkbox label opens
   the modal instead of toggling the checkbox. */
