// ============================================================
//  MANTTEX SVETAINĖS TURINYS
//  Čia redaguokite visą tekstą – kodas ir dizainas nesikeičia.
//  Laikykitės kabučių " " ir kablelių , struktūros.
// ============================================================

var TURINYS = {

  // ── KONTAKTAI ──────────────────────────────────────────────
  telefonas:   "+370 64255550",
  el_pastas:   "info@manttex.lt",
  adresas:     "Kaunas ir apylinkės",
  darbo_laikas: "I–V: 8:00 – 18:00",

  // ── VIRŠUTINĖ JUOSTA ───────────────────────────────────────
  darbo_valandos_tekstas: "Dirbame I–V nuo 8:00 iki 18:00",

  // ── NAVIGACIJA ─────────────────────────────────────────────
  nav_cta: "Siųsti užklausą",

  // ── HERO SEKCIJA ───────────────────────────────────────────
  hero: {
    badge:     "Nemokamas išmatavimas",
    antraste:  "Roletai ir žaliuzės\nvisų tipų langams",
    aprasymas: "Pasirūpiname nuo audinių išrinkimo iki gaminių sumontavimo.\nGamyba pagal individualius išmatavimus.",
    mygtukas1: "Siųsti užklausą",
    mygtukas2: "Peržiūrėti produktus",
  },

  // ── PRODUKTŲ KORTELĖS (viršuje) ────────────────────────────
  // Spalvos: blue | purple | green | red | amber | cyan
  produktai: [
    {
      id:          "klasikiniai",
      pavadinimas: "Klasikiniai roletai",
      aprasymas:   "Universalūs, funkcionalūs ir stilingi roletai namams bei biurams. Platus audinių ir spalvų pasirinkimas.",
      spalva:      "blue",
    },
    {
      id:          "diena-naktis",
      pavadinimas: "Diena / Naktis roletai",
      aprasymas:   "Dvigubas audinys leidžia reguliuoti šviesos kiekį – nuo visiško privatumo iki malonios dienos šviesos.",
      spalva:      "purple",
    },
    {
      id:          "zaliuzes",
      pavadinimas: "Žaliuzės",
      aprasymas:   "Aliumininės arba medinės žaliuzės – klasikinis elegantiškas sprendimas bet kuriam interjerui.",
      spalva:      "green",
    },
    {
      id:          "romanetes",
      pavadinimas: "Romanetės",
      aprasymas:   "Elegantiškos sulankstomosios romanetės – puikiai tinka svetainėms ir miegamiesiems.",
      spalva:      "red",
    },
    {
      id:          "tinkleliai",
      pavadinimas: "Tinkleliai / Ekranai",
      aprasymas:   "Apsaugo nuo tiesioginės saulės šviesos išlaikant matomumą į lauką. Idealūs biurams.",
      spalva:      "amber",
    },
    {
      id:          "lauko",
      pavadinimas: "Lauko roletai",
      aprasymas:   "Apsaugo patalpas nuo karščio ir saulės dar prieš jam patenkant į vidų. Idealūs terasoms.",
      spalva:      "cyan",
    },
  ],

  // ── PRODUKTŲ DETALĖS (kiekvieno skyriaus aprašymas) ────────
  // "etikete" – mažas žodis virš pavadinimo
  // "privalumai" – sąrašo punktai su varnele
  produktu_detales: [
    {
      id:          "klasikiniai",
      etikete:     "Populiariausia",
      pavadinimas: "Klasikiniai roletai",
      aprasymas:   "Klasikiniai roletai – paprasčiausias ir funkcionalus langų uždengimo sprendimas. Tinka bet kuriai patalpai: namams, biurams, vaikų kambariams.",
      privalumai: [
        "Lengvai valdo šviesos kiekį",
        "Platus audinių pasirinkimas (skaidrus, pusiau skaidrus, nepraleidžiantis šviesos)",
        "Paprasta valdyti grandine arba motorėliu",
        "Gamyba pagal individualius išmatavimus",
      ],
      spalva: "blue",
    },
    {
      id:          "diena-naktis",
      etikete:     "Bestseller",
      pavadinimas: "Diena / Naktis roletai",
      aprasymas:   "Dvigubi audiniai leidžia keisti privatumo lygį be atsikėlimo nuo sofos – dieną praleiskite šviesą, naktį – mėgaukitės visiška tamsa.",
      privalumai: [
        "Dvigubas audinio sluoksnis",
        "Tikslus šviesos reguliavimas",
        "Elegantiškas modernus dizainas",
        "Galimybė valdyti motorėliu",
      ],
      spalva: "purple",
    },
    {
      id:          "zaliuzes",
      etikete:     "Klasika",
      pavadinimas: "Žaliuzės",
      aprasymas:   "Aliumininės arba medinės žaliuzės – universalus ir elegantiškas pasirinkimas. Tinka biurams, virtuvėms ir svetainėms.",
      privalumai: [
        "Aliumininės ir medinės versijos",
        "Tikslus šviesos kampas",
        "Lengva valyti ir prižiūrėti",
        "Platus spalvų pasirinkimas",
      ],
      spalva: "green",
    },
    {
      id:          "romanetes",
      etikete:     "Elegancija",
      pavadinimas: "Romanetės",
      aprasymas:   "Sulankstomosios romanetės suteikia patalpai šilumos ir stiliaus. Idealiai tinka svetainėms, miegamiesiems ir kabineto langams.",
      privalumai: [
        "Platus audinių ir tekstūrų pasirinkimas",
        "Galima kombinuoti su juodinimo audinio pamušalu",
        "Individualus siuvimas pagal išmatavimus",
        "Įvairios valdymo sistemos",
      ],
      spalva: "red",
    },
    {
      id:          "tinkleliai",
      etikete:     "Saulės apsauga",
      pavadinimas: "Tinkleliai / Ekranai",
      aprasymas:   "Saulės ekranai apsaugo nuo tiesioginės šviesos ir karščio, išlaikant matomumą į lauką. Puikus sprendimas biurams ir moderniai gyvenamojoje erdvei.",
      privalumai: [
        "Filtruoja UV spindulius",
        "Mažina patalpos šilumą",
        "Išlaiko matomumą iš vidaus",
        "Tinka dideliems langams ir vitrinoms",
      ],
      spalva: "amber",
    },
    {
      id:          "lauko",
      etikete:     "Lauke",
      pavadinimas: "Lauko roletai",
      aprasymas:   "Lauko roletai – efektyviausias būdas apsaugoti patalpą nuo karščio. Sumontuojami ant fasado ar terasos stogo.",
      privalumai: [
        "Sumažina patalpos temperatūrą iki 7°C",
        "Atspari oro sąlygoms medžiaga",
        "Tinka terasoms, balkonams ir fasadams",
        "Galimas elektros variklio valdymas",
      ],
      spalva: "cyan",
    },
  ],

  // ── PRIVALUMŲ SEKCIJA ──────────────────────────────────────
  privalumai: {
    antraste:  "Kodėl ManttеX?",
    aprasymas: "Mes rūpinamės visu procesu – nuo pirmojo skambučio iki montavimo",
    sarasas: [
      {
        ikona:     "<svg class='benefit-svg' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'><rect x='2' y='8.5' width='20' height='7' rx='1.5'/><path stroke-linecap='round' d='M6 8.5v3.5M10 8.5v2.5M14 8.5v3.5M18 8.5v2.5'/></svg>",
        pavadinimas: "Nemokamas išmatavimas",
        aprasymas:   "Atvykstame pas jus ir tiksliai išmatuojame langus – be jokių papildomų mokesčių.",
      },
      {
        ikona:     "<svg class='benefit-svg' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' d='M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z'/><path stroke-linecap='round' stroke-linejoin='round' d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'/></svg>",
        pavadinimas: "Individuali gamyba",
        aprasymas:   "Gaminame pagal kiekvieno kliento išmatavimus – tobulas tinkamumas garantuotas.",
      },
      {
        ikona:     "<svg class='benefit-svg' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' d='M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.198 1.82Z'/></svg>",
        pavadinimas: "Profesionalus montavimas",
        aprasymas:   "Mūsų komanda sumontuos greitai ir tvarkingai – jūs tik džiaugiatės rezultatu.",
      },
      {
        ikona:     "<svg class='benefit-svg' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' d='M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z'/></svg>",
        pavadinimas: "Platus pasirinkimas",
        aprasymas:   "Šimtai audinių ir spalvų – surasime tai, kas tinka jūsų interjerui.",
      },
    ],
  },

  // ── UŽKLAUSOS FORMA ────────────────────────────────────────
  forma: {
    antraste:      "Siųsti užklausą",
    aprasymas:     "Užpildykite formą – susisieksime greitai ir pateiksime geriausią pasiūlymą.",
    laukai: {
      vardas:      "Vardas",
      el_pastas:   "El. paštas",
      telefonas:   "Telefonas",
      produktas:   "Domina produktas",
      zinute:      "Žinutė",
    },
    produktu_sarašas: [
      "Klasikiniai roletai",
      "Diena/Naktis roletai",
      "Žaliuzės",
      "Romanetės",
      "Tinkleliai / Ekranai",
      "Lauko roletai",
      "Kita",
    ],
    mygtukas:      "Siųsti užklausą",
    sekme:         "✓ Ačiū! Susisieksime su jumis artimiausiu metu.",
  },

  // ── KONTAKTŲ SEKCIJA ───────────────────────────────────────
  kontaktai: {
    antraste: "Kontaktai",
  },

  // ── PORAŠTĖ ────────────────────────────────────────────────
  porastė: {
    tekstas: "© 2025 ManttеX. Visos teisės saugomos.",
  },

};
