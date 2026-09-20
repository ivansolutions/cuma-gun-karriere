/* =========================================================
   Cuma Gün Karriere — interaction layer
   ========================================================= */

/* ---------- TRANSLATIONS ---------- */
const T = {
  de: {
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

    /* HERO */
    hero_eyebrow: "Aktuell offene Stellen · Nürnberg & Crailsheim",
    hero_h1: "Werden Sie Paketzusteller bei Cuma\u00A0Gün – Kuriertransporte\u00A0e.\u00A0K.",
    hero_ups: "Exklusiver Servicepartner <span class=\"hero__ups-osp\">(Outside Service Provider)</span> von\u00A0UPS, dem\u00A0weltgrößten Zustelldienst",
    hero_sub: "Familienunternehmen, gegründet im September 1995.",
    hero_lede: "Über drei Jahrzehnte Branchenerfahrung mit Werten, die heute seltener werden: Handschlagqualität, absolute Krisensicherheit, Festanstellung zu fairen Bedingungen.",
    hero_caption: "Eigene Fahrzeuge · eigenes Personal",
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
    emp_kicker: "MITARBEITERGESCHICHTE",
    emp_back: "Zurück zur Übersicht",
    legal_kicker: "RECHTLICHES",
    legal_imprint_title: "Impressum",
    legal_privacy_title: "Datenschutzerklärung",
    legal_agb_title: "Allgemeine Geschäftsbedingungen",
    legal_a11y_title: "Barrierefreiheit",
  },

};

/* ---------- TEXT FROM DICTIONARY (German only) ---------- */
function applyTexts() {
  const dict = T.de;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] == null) return;
    if (key === 'form_drop' || key === 'form_ok_text' || key === 'form_dsgvo' || key === 's6_a1' || key === 'hero_ups' || /^s3_t\d_desc$/.test(key)) el.innerHTML = dict[key];
    else el.textContent = dict[key];
  });
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
    if (el.textContent.indexOf('\u00A0') === -1 && !el.dataset.nbspInit) return;
    /* Walk text nodes so inline markup inside the element survives. */
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (refresh || node.__nbspSrc == null) node.__nbspSrc = node.nodeValue;
      const src = node.__nbspSrc;
      const next = narrow ? src.replace(/\u00A0/g, ' ') : src;
      if (node.nodeValue !== next) node.nodeValue = next;
    }
    el.dataset.nbspInit = '1';
  });
}
nbspNarrow.addEventListener
  ? nbspNarrow.addEventListener('change', softenNbsp)
  : nbspNarrow.addListener(softenNbsp);

document.addEventListener('DOMContentLoaded', () => {
  applyTexts();
  softenNbsp();

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
  renderMarquee();
});

/* ---------- MARQUEE data + render ---------- */
function renderMarquee() {
  const dict = T.de;
  const track = document.querySelector('#marquee .marquee__track');
  if (!track) return;
  const html = EMPLOYEES.map(e => `
    <div class="voice" data-emp="${e.id}" data-since="${e.since}">
      <span class="voice__badge">${tenureLabel(e.since, e.periods)}</span>
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
function tenureLabel(since, periods) {
  if (periods && periods.length) {
    return String(tenureTotalYears(since, periods)).replace('.', ',') + ' ' + T.de.badge_total;
  }
  const n = tenureYears(since);
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
    quote: { de: '„20 Jahre – das bedeutet lange Treue und viel Erfahrung.“' }
  },
  {
    id: 'osman',
    photo: 'images/team/osman-y.jpg',
    initials: 'OY', name: 'Osman Y.',
    role: 'Fahrer', loc: 'Nürnberg', loc_key: 'loc_nbg',
    since: '2002-10',
    alt: 'Osman Y., Fahrer am Standort Nürnberg, vor seinem Zustellfahrzeug',
    quote: { de: '„Nach 23 Jahren im Job habe ich jetzt noch genau drei Jahre bis zur Rente. Die schaffe ich auch noch locker!“' }
  },
  {
    id: 'aytac',
    photo: 'images/team/aytac-y.jpg',
    initials: 'AY', name: 'Aytac Y.',
    role: 'Fahrer', loc: 'Nürnberg', loc_key: 'loc_nbg',
    since: '2008-01',
    alt: 'Aytac Y., Fahrer am Standort Nürnberg, vor seinem Zustellfahrzeug',
    quote: { de: '„Nach 18 Jahren in diesem Job brauche ich gar nicht mehr nachzudenken – das ist mir absolut ins Blut übergegangen.“' }
  },
  {
    id: 'nicola',
    photo: 'images/team/nicola-c.jpg',
    initials: 'NC', name: 'Nicola C.',
    role: 'Fahrer 7,5 t', loc: 'Nürnberg', loc_key: 'loc_nbg',
    since: '2010-04',
    alt: 'Nicola C., Fahrer eines 7,5-Tonners am Standort Nürnberg',
    quote: { de: '„Die Arbeit ist ein Teil von mir geworden. Deshalb frage ich mich manchmal, ob ich woanders überhaupt noch etwas finde, das so gut zu mir passt.“' }
  },
  {
    id: 'helmut',
    photo: 'images/team/helmut-h.jpg',
    initials: 'HH', name: 'Helmut H.',
    role: 'Fahrer', loc: 'Nürnberg', loc_key: 'loc_nbg',
    since: '2011-02',
    alt: 'Helmut H., Fahrer am Standort Nürnberg, vor seinem Zustellfahrzeug',
    quote: { de: '„Mein Name ist Helmut H., ich bin 59 Jahre alt und verheiratet. Selbst nach 15 Jahren macht die Arbeit immer noch Spaß und Freude, und ich bin jeden Tag aufs Neue motiviert für meine Kunden!“' }
  },
  {
    id: 'santana',
    photo: 'images/team/santana-f.jpg',
    initials: 'SF', name: 'Santana F.',
    role: 'Fahrer', loc: 'Nürnberg', loc_key: 'loc_nbg',
    since: '2024-07',
    alt: 'Santana F., Fahrer am Standort Nürnberg, vor seinem Zustellfahrzeug',
    quote: { de: '„Ich komme aus Kuba und bin echt froh und dankbar für diese tolle Chance hier.“' }
  },
  {
    id: 'yanes',
    photo: 'images/team/yanes-s.jpg',
    initials: 'YS', name: 'Yanes S.',
    role: 'Be- und Entlader', loc: 'Nürnberg', loc_key: 'loc_nbg',
    since: '2025-04',
    alt: 'Yanes S., Be- und Entlader am Standort Nürnberg im Depot',
    quote: { de: '„Ich komme aus Spanien und bin echt froh über die Teilzeitstelle hier. Das hat mir nach dem Umzug super geholfen, im neuen Alltag anzukommen!“' }
  },
  {
    id: 'stanislav',
    photo: 'images/team/stanislav-d.jpg',
    initials: 'SD', name: 'Stanislav D.',
    role: 'Fahrer', loc: 'Nürnberg', loc_key: 'loc_nbg',
    since: '2010-10',
    alt: 'Stanislav D., Fahrer am Standort Nürnberg, am Steuer seines Zustellfahrzeugs',
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
    quote: { de: '„Es kam so, dass ich zurückkommen musste – und man hat mich ohne große Fragen wieder aufgenommen. So etwas bleibt hängen.“' }
  },
  {
    id: 'nadeem',
    photo: 'images/team/iqbal-n.jpg',
    initials: 'NI', name: 'Nadeem I.',
    role: 'Werkstatt', loc: 'Crailsheim', loc_key: 'loc_crl',
    since: '2021-05',
    alt: 'Nadeem I., Mitarbeiter in der Werkstatt am Standort Crailsheim',
    quote: { de: '„Ich bin Nadeem ich bin seit fünf Jahren bei der Firma Gün tätig. Am Anfang war ich Zusteller. Jetzt bin ich in der Werkstatt tätig aber wenn ich ab und zu noch fahren muss, das macht mir großen Spaß.“' }
  },
  {
    id: 'razvan',
    photo: 'images/team/razvan-s.jpg',
    initials: 'RS', name: 'Razvan S.',
    role: 'Fahrer', loc: 'Crailsheim', loc_key: 'loc_crl',
    since: '2019-07',
    alt: 'Razvan S., Fahrer am Standort Crailsheim, im Laderaum seines Zustellfahrzeugs',
    quote: { de: '„Ich bin Razvan. Bin seit ca. 7 Jahren Zusteller bei der Firma Cuma Gün in Crailsheim. Ich bin gerne Zusteller und bekomme sehr häufig positive Rückmeldungen von meinem Arbeitgeber, dass Ich meine Arbeit sehr gut erledige. Vor 2 Jahren betraute mich mein Arbeitgeber mit zusätzlichen Aufgaben, wo ich wieder etwas Neues lernen konnte und Ich auch mittlerweile mit Ausbildungsaufgaben für Kollegen betraut bin.“' }
  },
  {
    id: 'fanel',
    photo: 'images/team/fanel-v.jpg',
    initials: 'FV', name: 'Fanel V.',
    role: 'Fahrer', loc: 'Crailsheim', loc_key: 'loc_crl',
    since: '2024-07',
    alt: 'Fanel V., Fahrer am Standort Crailsheim, bei der Paketsortierung',
    quote: { de: '„Hallo, ich heiße Fanel. Ich bin erst seit kurzem Teil der Firma Cuma Gün Crailsheim. Die ersten Wochen waren sehr anstrengend und fordernd für mich. Im Laufe der Zeit und mit der Entwicklung einer täglichen Routine machte mir aber die Zustellarbeit immer mehr Spaß. Jetzt freut es mich, dass ich Zusteller bei der Firma Gün bin und Ich mache meinen Job sehr gerne.“' }
  }
];

/* ---------- EMPLOYEE MODAL ---------- */
function openEmployeeModal(id) {
  const emp = EMPLOYEES.find(e => e.id === id);
  if (!emp) return;
  const dict = T.de;
  const modal = document.getElementById('empModal');
  document.getElementById('empPortrait').src = emp.photo;
  document.getElementById('empPortrait').alt = emp.name;
  document.getElementById('empTenure').textContent = tenureLabel(emp.since, emp.periods).toUpperCase();
  document.getElementById('empName').textContent = emp.name;
  document.getElementById('empRole').textContent = `${emp.role} · ${dict[emp.loc_key] || emp.loc}`;
  document.getElementById('empQuote').textContent = emp.quote.de;
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
  const dict = T.de;
  const modal = document.getElementById('legalModal');
  if (!modal) return;
  document.getElementById('legalKicker').textContent = dict.legal_kicker || 'RECHTLICHES';
  document.getElementById('legalTitle').textContent = dict[cfg.titleKey] || '';
  const block = document.getElementById('legal-' + kind + '-body');
  const target = document.getElementById('legalText');
  if (block) {
    target.innerHTML = block.innerHTML;
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
