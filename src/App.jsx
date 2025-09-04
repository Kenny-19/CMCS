import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

 

const NAV = [
  { key: "about", en: "About", fr: "À propos" },
  { key: "chairman", en: "Leadership", fr: "Leadership" },
  { key: "services", en: "Services", fr: "Services" },
  { key: "projects", en: "Projects", fr: "Projets" },
  { key: "contact", en: "Contact", fr: "Contact" },
];

const T = {
  heroTitle: { en: "Innovative Mining Solutions", fr: "Solutions minières innovantes" },
  heroSubtitle: {
    en: "Sustainable, efficient and safe operations.",
    fr: "Des opérations durables, efficaces et sûres.",
  },
  heroSlogans: {
    en: ["Innovation", "Safety", "Sustainability", "Operational Excellence"],
    fr: ["Innovation", "Sécurité", "Durabilité", "Excellence opérationnelle"],
  },
  aboutTitle: { en: "About Us", fr: "À propos" },
  aboutText: {
    en: "We help mining operators improve performance with data-driven engineering and responsible practices.",
    fr: "Nous aidons les opérateurs miniers à améliorer leurs performances grâce à l’ingénierie data‑driven et à des pratiques responsables.",
  },
  stats: {
    sites: { en: "Active Sites", fr: "Sites actifs" },
    costs: { en: "Cost Reduction", fr: "Coûts réduits" },
    sat: { en: "Satisfaction", fr: "Satisfaction" },
  },
  chairmanTitle: { en: "Our Chairman", fr: "Le Président de l'entreprise" },
  chairmanQuote: {
    en: "Performance, safety and respect for communities go hand in hand.",
    fr: "La performance, la sécurité et le respect des communautés vont de pair.",
  },
  chairmanValues: {
    en: [
      { title: "Safety First", desc: "Non‑negotiable EHS standards." },
      { title: "Operational Discipline", desc: "Planning, control, accountability." },
      { title: "Sustainability", desc: "Long‑term value creation for all." },
    ],
    fr: [
      { title: "Sécurité d'abord", desc: "Normes EHS non négociables." },
      { title: "Discipline opérationnelle", desc: "Planification, contrôle, responsabilité." },
      { title: "Durabilité", desc: "Création de valeur à long terme pour tous." },
    ],
  },
  chairmanResumeLabel: { en: "Executive Summary", fr: "Résumé exécutif" },
  chairmanReadMore: { en: "Read more", fr: "Lire plus" },
  chairmanReadLess: { en: "Show less", fr: "Réduire" },
  chairmanBio: {
    en:
      "Born on December 23, 1973, Paul Binyingela is a highly qualified Congolese mining engineer with over twenty years of experience in mining operations and project management. Graduated in 2002 with a Bachelor of Science in Mining Engineering from the University of Lubumbashi, he has built a remarkable career holding positions of responsibility in several major mining companies, both in the Democratic Republic of Congo and internationally. His professional career is marked by expertise in open-pit mines and the management of complex projects. He has worked as Mining Manager and Project Manager for renowned companies such as Anvil Mining, Ruashi Mining, Chemaf, Randgold Resources, MMG – Kinsevere, Kibali Mining Services (Bouygues Group), as well as with Metalkol – Eurasian Resources Group Africa and Glencore (KCC). These experiences have allowed him to work on various strategic minerals such as diamond, copper, cobalt, gold, and limestone, thus developing a global vision of mining and industrial issues. Throughout his career, Mr. Binyingela has acquired a solid reputation in operational management, strategic planning, and cost control. He has led multinational and multicultural teams, while ensuring strict compliance with safety, health, environment, and quality standards (QHSE). His responsibilities included supervising short, medium, and long-term planning, production monitoring, budgetary control, subcontractor management, and optimizing mining equipment fleets. Visionary and results-oriented, he has successfully turned around struggling mining projects, notably during the reopening of the Kapulo mine under the AMC – Trafigura company, where he ensured the resumption of operations after a two-year shutdown. His ability to implement effective operational strategies has earned him the trust of several major industrial partners. In addition to his practical experience, Paul Binyingela has completed several specialized training courses in key areas: workplace safety (INRS, Mali), drilling and blasting (Randgold DRC), international standards ISO 14001/26000 and OHSAS 18001 (Bureau Veritas), mining modeling software (Surpac – GEOVIA), as well as a recent project management certification (PMI, 2024). These qualifications further strengthen his technical and managerial skills. A polyglot, he is fluent in English, French, Swahili, and Lingala, which allows him to work effectively in international environments. His career illustrates a constant commitment to operational excellence and sustainable development of mining activities. Today, with his extensive experience and skills, Paul Binyingela positions himself as a strategic leader, capable of supporting any mining organization in achieving its production, profitability, and social responsibility goals.",
    fr:
      "Né le 23 décembre 1973, Paul Binyingela est un ingénieur des mines congolais hautement qualifié, cumulant plus de vingt années d’expérience dans l’exploitation et la gestion de projets miniers. Diplômé en 2002 d’un Bachelor of Science en Ingénierie minière de l’Université de Lubumbashi, il a bâti une carrière remarquable en occupant des postes de responsabilité dans plusieurs grandes entreprises minières, aussi bien en République Démocratique du Congo qu’à l’international. Son parcours professionnel est marqué par une expertise dans les mines à ciel ouvert et dans la gestion de projets complexes. Il a exercé comme Mining Manager et Project Manager auprès de sociétés de renom telles qu’Anvil Mining, Ruashi Mining, Chemaf, Randgold Resources, MMG – Kinsevere, Kibali Mining Services (Bouygues Group), ainsi qu’avec Metalkol – Eurasian Resources Group Africa et Glencore (KCC). Ces expériences lui ont permis d’intervenir sur divers minerais stratégiques tels que le diamant, le cuivre, le cobalt, l’or et le calcaire, développant ainsi une vision globale des enjeux miniers et industriels. Au fil de sa carrière, M. Binyingela a acquis une solide réputation dans la gestion opérationnelle, la planification stratégique et la maîtrise des coûts de production. Il a dirigé des équipes multinationales et multiculturelles, tout en veillant au respect strict des normes de sécurité, de santé, d’environnement et de qualité (QHSE). Ses responsabilités incluaient la supervision de la planification à court, moyen et long terme, le suivi de la production, le contrôle budgétaire, la gestion des sous-traitants et l’optimisation des flottes d’équipements miniers. Visionnaire et orienté résultats, il a su redresser des projets miniers en difficulté, notamment lors de la réouverture de la mine de Kapulo sous la société AMC – Trafigura, où il a assuré la relance des opérations après deux ans d’arrêt. Sa capacité à mettre en œuvre des stratégies opérationnelles efficaces lui a valu la confiance de plusieurs partenaires industriels majeurs. En complément de son expérience pratique, Paul Binyingela a suivi plusieurs formations spécialisées dans des domaines clés : sécurité au travail (INRS, Mali), forage et dynamitage (Randgold DRC), normes internationales ISO 14001/26000 et OHSAS 18001 (Bureau Veritas), logiciels de modélisation minière (Surpac – GEOVIA), ainsi qu’une certification récente en gestion de projet (PMI, 2024). Ces qualifications viennent renforcer ses compétences techniques et managériales. Polyglotte, il maîtrise l’anglais, le français, le swahili et le lingala, ce qui lui permet de travailler efficacement dans des environnements internationaux. Sa carrière illustre un engagement constant pour l’excellence opérationnelle et le développement durable des activités minières. Aujourd’hui, fort de son expérience et de ses compétences, Paul Binyingela se positionne comme un leader stratégique, capable d’accompagner toute organisation minière dans l’atteinte de ses objectifs de production, de rentabilité et de responsabilité sociale.",
  },
  servicesTitle: { en: "Our Services", fr: "Nos Services" },
  serviceItems: [
    {
      en: { title: "Exploration & Studies", desc: "Geological exploration and 3D modeling." },
      fr: { title: "Prospection & études", desc: "Exploration géologique et modélisation 3D." },
    },
    {
      en: { title: "Automation", desc: "Smart dispatching and telemetry." },
      fr: { title: "Automatisation", desc: "Dispatching intelligent et télémétrie." },
    },
    {
      en: { title: "Energy Optimization", desc: "Hybrid microgrids and fuel reduction." },
      fr: { title: "Optimisation énergétique", desc: "Micro-réseaux hybrides et réduction de carburant." },
    },
  ],
  projectsTitle: { en: "Projects", fr: "Projets" },
  projectsFilterAll: { en: "All", fr: "Tous" },
  contactTitle: { en: "Contact Us", fr: "Contactez‑nous" },
  name: { en: "Your name", fr: "Votre nom" },
  email: { en: "Email", fr: "Email" },
  message: { en: "Message", fr: "Message" },
  subject: { en: "Subject", fr: "Objet" },
  attachment: { en: "Attachment (optional)", fr: "Pièce jointe (optionnel)" },
  send: { en: "Send", fr: "Envoyer" },
  cta: { en: "Get a quote", fr: "Obtenir un devis" },
  rights: { en: "All rights reserved.", fr: "Tous droits réservés." },
};

const Badge = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-yellow-300/70 bg-yellow-50 px-3 py-1 text-xs font-medium text-yellow-800 shadow-sm">
    <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
    {children}
  </span>
);

const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl border border-neutral-200 bg-white p-6 shadow-soft ${className}`}>{children}</div>
);

const Kpi = ({ value, label }) => (
  <div className="text-center">
    <div className="text-3xl font-extrabold tracking-tight">{value}</div>
    <div className="mt-1 text-xs uppercase text-neutral-500 tracking-wider">{label}</div>
  </div>
);

function useRotator(items, ms = 2000) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((x) => (x + 1) % items.length), ms);
    return () => clearInterval(id);
  }, [items, ms]);
  return items[i];
}

const CountUp = ({ to = 100, duration = 1500, suffix = "" }) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const start = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration);
      setVal(Math.floor(p * to));
      if (p < 1) requestAnimationFrame(tick);
    };
    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, duration]);
  return (
    <span>
      {val}
      {suffix}
    </span>
  );
};

const HERO_IMAGES = [
  "/projects/image_1.jpg",
  "/projects/image_2.jpg",
  "/projects/image_2.jpg",
  "/projects/image_4.jpg",
  "/projects/image_5.jpg",
  "/projects/image_6.jpg",

];

function HeroCarousel() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % HERO_IMAGES.length), 4000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-neutral-200 shadow-soft">
      <AnimatePresence>
        <motion.img
          key={index}
          src={HERO_IMAGES[index]}
          alt="Hero slide"
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </AnimatePresence>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
    </div>
  );
}

const timelineData = {
  en: [
    { year: "2002", title: "BSc Mining Engineering", desc: "University of Lubumbashi." },
    { year: "2003–2012", title: "Manager / PM", desc: "Anvil Mining, Ruashi Mining, Chemaf, Randgold." },
    { year: "2013–2019", title: "Senior Roles", desc: "MMG Kinsevere, KMS (Bouygues)." },
    { year: "2020–2023", title: "Strategic Projects", desc: "ERG Africa (Metalkol), Glencore (KCC)." },
    { year: "2024", title: "PMI Certification", desc: "Project Management Professional." },
  ],
  fr: [
    { year: "2002", title: "BSc Ingénierie minière", desc: "Université de Lubumbashi." },
    { year: "2003–2012", title: "Manager / Chef de projet", desc: "Anvil Mining, Ruashi Mining, Chemaf, Randgold." },
    { year: "2013–2019", title: "Postes seniors", desc: "MMG Kinsevere, KMS (Bouygues)." },
    { year: "2020–2023", title: "Projets stratégiques", desc: "ERG Africa (Metalkol), Glencore (KCC)." },
    { year: "2024", title: "Certification PMI", desc: "Project Management Professional." },
  ],
};

const projectsSeed = [
  { id: 1, title: "Open‑pit optimization", region: "Central Africa", year: "2024–2025", cat: "copper", img: "/projects/image_1.jpg", impact: "-18% CO₂" },
  { id: 2, title: "Dispatch & telemetry", region: "Central Africa", year: "2024", cat: "gold", img: "/projects/image_2.jpg", impact: "-12% fuel" },
  { id: 3, title: "Hybrid microgrid", region: "Central Africa", year: "2025", cat: "cobalt", img: "/projects/image_3.jpg", impact: "-22% fuel" },
  { id: 4, title: "Haul road redesign", region: "SADC", year: "2024", cat: "infrastructure", img: "/projects/image_4.jpg", impact: "+9% throughput" },
  { id: 5, title: "Blasting optimization", region: "Central Africa", year: "2025", cat: "copper", img: "/projects/image_5.jpg", impact: "-15% unit cost" },
  { id: 6, title: "Maintenance predictive", region: "Central Africa", year: "2024", cat: "multi", img: "/projects/image_6.jpg", impact: "-17% downtime" },
];

export default function App() {
  const [lang, setLang] = useState("fr");
  const tr = (key) => T[key][lang];
  const slogans = T.heroSlogans[lang];
  const currentSlogan = useRotator(slogans, 2200);

  // projects filter
  const [cat, setCat] = useState("all");
  const cats = useMemo(() => [
    { key: "all", label: T.projectsFilterAll[lang] },
    { key: "copper", label: lang === "en" ? "Copper" : "Cuivre" },
    { key: "gold", label: lang === "en" ? "Gold" : "Or" },
    { key: "cobalt", label: lang === "en" ? "Cobalt" : "Cobalt" },
    { key: "infrastructure", label: lang === "en" ? "Infrastructure" : "Infrastructures" },
    { key: "multi", label: lang === "en" ? "Multi" : "Multi" },
  ], [lang]);
  const filteredProjects = projectsSeed.filter((p) => (cat === "all" ? true : p.cat === cat));

  // chairman read more
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-2 font-extrabold tracking-tight">
            <img src="/images/logo_tshimso.png" alt="CMCS Logo" className="h-6 w-6 object-cover" />
            <span className="text-xl">
              Congo Mining and <span className="text-yellow-500">Construction Services (Sarl)</span>
            </span>
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {NAV.map((n) => (
              <a key={n.key} href={`#${n.key}`} className="text-sm font-medium text-neutral-700 hover:text-black">
                {lang === "en" ? n.en : n.fr}
              </a>
            ))}
            <a href="#contact" className="rounded-xl bg-yellow-400 px-4 py-2 text-sm font-semibold text-black hover:bg-yellow-300">
              {tr("cta")}
            </a>
            <button
              onClick={() => setLang((l) => (l === "en" ? "fr" : "en"))}
              className="rounded-lg border border-neutral-300 px-3 py-1 text-xs font-semibold hover:bg-neutral-50"
              aria-label="Switch language"
            >
              {lang.toUpperCase()}
            </button>
          </nav>
          <button onClick={() => setLang((l) => (l === "en" ? "fr" : "en"))} className="rounded-lg border border-neutral-300 px-3 py-1 text-xs font-semibold md:hidden">
            {lang.toUpperCase()}
          </button>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden bg-gradient-to-b from-yellow-50 to-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex gap-2">
              <Badge>Mining</Badge>
              <Badge>Construction</Badge>
            </div>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">{tr("heroTitle")}</h1>
            <p className="mt-4 max-w-xl text-neutral-700">{tr("heroSubtitle")}</p>
            <div className="mt-3 text-sm text-neutral-600">
              <span className="rounded-full bg-yellow-100 px-2 py-1 font-semibold">{currentSlogan}</span>
            </div>
            <div className="mt-8 flex gap-3">
              <a href="#services" className="rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white hover:opacity-90">
                {lang === "en" ? "Services" : "Services"}
              </a>
              <a href="#about" className="rounded-xl border border-neutral-300 px-5 py-3 text-sm font-semibold hover:bg-neutral-50">
                {lang === "en" ? "Learn more" : "En savoir plus"}
              </a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-yellow-200/70 via-yellow-100 to-transparent blur-2xl" />
              <HeroCarousel />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="mb-10">
              <Badge>{lang === "en" ? "Who we are" : "Qui sommes‑nous ?"}</Badge>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{T.aboutTitle[lang]}</h2>
              <p className="mt-3 max-w-2xl text-neutral-700">{T.aboutText[lang]}</p>
            </div>
            <div className="grid gap-4">
              {[
                { en: ["Performance Audits", "Bottleneck mapping and 90-day roadmap."], fr: ["Audits de performance", "Cartographie des goulots et feuille de route 90j."] },
                { en: ["Predictive Maintenance", "IoT sensors and digital twins."], fr: ["Maintenance prédictive", "Capteurs IoT et jumeaux numériques."] },
                { en: ["Safety & Compliance", "EHS procedures and ESG reporting."], fr: ["Sécurité & conformité", "Procédures EHS et reporting ESG."] },
              ].map((f, i) => (
                <div key={i} className="flex gap-3">
                  <svg className="mt-1 h-5 w-5 flex-none" viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div>
                    <div className="font-semibold">{lang === "en" ? f.en[0] : f.fr[0]}</div>
                    <p className="text-sm text-neutral-700">{lang === "en" ? f.en[1] : f.fr[1]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-neutral-200 shadow-soft">
              <img src="/images/logo_tshimso.png" alt="Workers" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Chairman */}
      <section id="chairman" className="bg-neutral-50 py-16">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-neutral-200 shadow-soft">
              <img src="/images/image_1.jpg" alt="Paul Binyingela" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <Badge>{lang === "en" ? "Leadership" : "Leadership"}</Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{T.chairmanTitle[lang]}</h2>

            {/* Quote */}
            <Card className="mt-6 bg-yellow-50">
              <p className="text-sm italic text-yellow-900">“{T.chairmanQuote[lang]}”</p>
            </Card>

            {/* Resume + Read More */}
            <div className="mt-6 space-y-3 text-neutral-700">
              <div className="text-sm font-semibold uppercase tracking-wide text-neutral-500">{T.chairmanResumeLabel[lang]}</div>
              <p className="max-w-2xl leading-relaxed">
                {lang === "en"
                  ? "Mining engineer with 20+ years in open‑pit operations and complex project management across DRC and abroad. Led multicultural teams, turned around struggling sites (e.g., Kapulo restart), and strengthened QHSE culture. Fluent in EN/FR/SW/LN."
                  : "Ingénieur minier avec 20+ ans en exploitation à ciel ouvert et gestion de projets complexes en RDC et à l'international. Direction d'équipes multiculturelles, redressement de sites (ex. relance de Kapulo) et culture QHSE renforcée. Parle EN/FR/SW/LN."}
              </p>

              <AnimatePresence initial={false}>
                {expanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 max-w-2xl space-y-5 leading-relaxed">
                      {T.chairmanBio[lang]
                        .split(/\.\s+(?=[A-ZÀ-ÖØ-Ý])/g)
                        .map((s, i) => (
                          <p key={i} className="text-justify">
                            {s.trim()}.
                          </p>
                        ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                onClick={() => setExpanded((v) => !v)}
                className="mt-2 inline-flex items-center gap-2 rounded-xl border border-neutral-300 px-3 py-1.5 text-sm font-semibold hover:bg-neutral-50"
              >
                {expanded ? T.chairmanReadLess[lang] : T.chairmanReadMore[lang]}
              </button>
            </div>

            {/* Values */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {T.chairmanValues[lang].map((v, i) => (
                <Card key={i} className="py-5">
                  <div className="mb-1 text-sm font-semibold">{v.title}</div>
                  <div className="text-xs text-neutral-700">{v.desc}</div>
                </Card>
              ))}
            </div>

            {/* Timeline */}
            <div className="mt-10">
              <div className="text-sm font-semibold uppercase tracking-wide text-neutral-500">{lang === "en" ? "Career Timeline" : "Parcours"}</div>
              <div className="mt-4 space-y-4">
                {timelineData[lang].map((t) => (
                  <div key={t.year} className="grid grid-cols-[88px_1fr] items-start gap-4">
                    <div className="text-sm font-semibold text-yellow-700">{t.year}</div>
                    <div className="rounded-xl border border-neutral-200 p-4">
                      <div className="font-semibold">{t.title}</div>
                      <div className="text-sm text-neutral-700">{t.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <Badge>{lang === "en" ? "What we do" : "Ce que nous faisons"}</Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{T.servicesTitle[lang]}</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {T.serviceItems.map((s, i) => {
              const item = lang === "en" ? s.en : s.fr;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.05 }}>
                  <Card>
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-100 text-yellow-700">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor">
                        <path d="M12 2v20M2 12h20" />
                      </svg>
                    </div>
                    <div className="text-lg font-semibold">{item.title}</div>
                    <p className="mt-2 text-sm text-neutral-700">{item.desc}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 text-center">
            <Badge>2024–2025</Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{lang === "en" ? "Featured Projects" : "Projets marquants"}</h2>
            <p className="mx-auto mt-3 max-w-2xl text-neutral-700">{lang === "en" ? "A few recent engagements with measurable outcomes." : "Quelques réalisations récentes avec des résultats mesurables."}</p>
          </div>

          {/* Filters */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
            {cats.map((c) => (
              <button
                key={c.key}
                onClick={() => setCat(c.key)}
                className={`rounded-full border px-3 py-1 text-sm ${cat === c.key ? "border-yellow-400 bg-yellow-100" : "border-neutral-300 hover:bg-neutral-50"}`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((p) => (
              <Card key={p.id} className="overflow-hidden p-0">
                <div className="aspect-[4/3] w-full">
                  <img src={p.img} alt={p.title} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-lg font-semibold">{p.title}</div>
                      <div className="text-sm text-neutral-500">{p.region} • {p.year}</div>
                    </div>
                    <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">{p.impact}</span>
                  </div>
                  <p className="mt-2 text-sm text-neutral-700">{lang === "en" ? "Automation, energy optimization and downtime reduction." : "Automatisation, optimisation énergétique et réduction des arrêts."}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-neutral-50 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Card>
            <div className="mb-6">
              <Badge>{lang === "en" ? "Let’s talk" : "Discutons"}</Badge>
              <h3 className="mt-3 text-2xl font-bold">{T.contactTitle[lang]}</h3>
            </div>
            <form
              className="grid gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert(lang === "en" ? "Thanks! We will get back to you." : "Merci ! Nous revenons vers vous.");
              }}
            >
              <div className="grid gap-1">
                <label className="text-sm font-medium">{T.name[lang]}</label>
                <input className="rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-yellow-300" required />
              </div>
              <div className="grid gap-1">
                <label className="text-sm font-medium">{T.email[lang]}</label>
                <input type="email" className="rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-yellow-300" required />
              </div>
              <div className="grid gap-1">
                <label className="text-sm font-medium">{T.subject[lang]}</label>
                <input className="rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-yellow-300" />
              </div>
              <div className="grid gap-1">
                <label className="text-sm font-medium">{T.message[lang]}</label>
                <textarea rows={5} className="rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-yellow-300"></textarea>
              </div>
              <div className="grid gap-1">
                <label className="text-sm font-medium">{T.attachment[lang]}</label>
                <input type="file" className="rounded-xl border border-neutral-300 px-3 py-2 file:mr-4 file:rounded-md file:border-0 file:bg-yellow-100 file:px-3 file:py-1 file:font-semibold" />
              </div>
              <button className="rounded-xl bg-yellow-400 px-4 py-2 font-semibold text-black hover:bg-yellow-300">{T.send[lang]}</button>
            </form>
          </Card>

          <div className="grid gap-6">
            <Card>
              <div className="text-lg font-semibold">{lang === "en" ? "Contact Info" : "Coordonnées"}</div>
              <div className="mt-3 space-y-2 text-sm text-neutral-700">
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor">
                    <path d="M12 2C8 2 5 5 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-4-3-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                  Lubumbashi, DRC
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor">
                    <path d="M22 16.92V21a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.07 12.81 19.86 19.86 0 0 1 0 4.18 2 2 0 0 1 2 2h4.09a2 2 0 0 1 2 1.72c.12.9.3 1.77.54 2.61a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.58 6.58l1.27-1.27a2 2 0 0 1 2.11-.45c.84.24 1.71.42 2.61.54A2 2 0 0 1 22 16.92z" />
                  </svg>
                  +243 998 743 931
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor">
                    <path d="M4 4h16v16H4z" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                  binyingelapaul@gmail.com
                </div>
              </div>
            </Card>
            <div className="overflow-hidden rounded-2xl border border-neutral-200">
              {/* Replace with an <iframe> of Google Maps if you want */}
              <img src="/projects/imageTest.jpeg" alt="Workers" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-4 text-center sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 font-bold">
            <span className="text-yellow-500">CMCS</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-neutral-600">
            {NAV.map((n) => (
              <a key={n.key} href={`#${n.key}`} className="hover:text-black">
                {lang === "en" ? n.en : n.fr}
              </a>
            ))}
          </div>
          <div className="text-sm text-neutral-600">
            © {new Date().getFullYear()} {lang === "en" ? "CMCS" : "CMCS"} {T.rights[lang]}
          </div>
        </div>
      </footer>
    </div>
  );
}
