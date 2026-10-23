// All facts below come from industries.sikkim.gov.in (home, Invest in Sikkim,
// Schemes, DIC, PSU and Awards pages) as published in October 2026.

export const LIVE = "https://industries.sikkim.gov.in";

export const glance = [
  { value: "97%", label: "literacy rate" },
  { value: "8,000 MW", label: "hydropower potential" },
  { value: "100%", label: "organic state, India's first" },
  { value: "6", label: "District Industries Centres" },
];

export const doors = [
  {
    href: "#invest",
    title: "Invest in Sikkim",
    text: "Policy, incentives, land leasing and the 16 thrust sectors.",
  },
  {
    href: "#schemes",
    title: "Start or grow a business",
    text: "Central and State schemes, the industrial licence, and help from your District Industries Centre.",
  },
  {
    href: "#notices",
    title: "Bid for a tender",
    text: "Tenders, RFPs, corrigenda, reports and circulars, straight to the PDF.",
  },
  {
    href: "#contact",
    title: "Raise a grievance or RTI",
    text: "Write to the department, or find the RTI officers.",
  },
];

export const advantages = [
  "Climate from tropical valleys to alpine highlands",
  "Literacy of 97%, above the national average",
  "The lowest crime rate in the country",
  "World's first certified organic farming state",
  "Skilled, educated workforce",
  "Political stability and a peaceful environment",
  "Growing infrastructure",
  "A gateway to ASEAN markets",
];

export const connectivity = [
  { mode: "Air", detail: "Pakyong Airport, 30 km, with flights to Delhi, Kolkata and Guwahati. Bagdogra Airport, 88 km, with 40+ daily flights." },
  { mode: "Rail", detail: "New Jalpaiguri (NJP), 80 km, connects to major cities. The Sevoke–Rangpo line is under construction." },
  { mode: "Road", detail: "NH10 links to West Bengal; NH310, NH310A and NH717B serve the borders." },
  { mode: "Within the state", detail: "The highest road density in Northeast India: 394.3 km per 1,000 km²." },
];

export const sectors = [
  "Green Tourism",
  "Pharmaceuticals & Biotechnology",
  "Clean and Green Energy",
  "Traditional Medicine Systems",
  "AVGC-XR",
  "Organic Farming and Processing",
  "IT & ITeS",
  "Climate Change Mitigation & Studies",
  "Green Hydrogen",
  "Trade Routes and Pilgrimage",
  "Education",
  "Sports, Music and Leisure",
  "Films and Media",
  "Textiles and Fashion Design",
  "Health and Wellness",
  "Smart Cities and Real Estate",
];

export const incentives = [
  {
    name: "SGST reimbursement",
    headline: "75% for 10 years",
    rows: [
      ["Micro enterprises", "up to 250% of fixed capital investment"],
      ["Small enterprises", "up to 200% of FCI"],
      ["Medium and large", "up to 150% of FCI"],
    ],
    note: "On finished products, from the start of production. Units must keep at least 75% average production for 5 years after the benefit period.",
  },
  {
    name: "Stamp duty waiver",
    headline: "Up to 100%",
    rows: [
      ["Micro and small", "100% waiver"],
      ["Medium", "75% waiver"],
      ["Large", "50%, capped at ₹25 lakh"],
      ["Women-led units", "100%, up to ₹50 lakh"],
    ],
    note: "Only on land used exclusively for the industrial unit.",
  },
  {
    name: "Patent registration",
    headline: "Up to ₹10 lakh",
    rows: [
      ["Domestic patents", "up to ₹2 lakh reimbursed"],
      ["International patents", "up to ₹10 lakh reimbursed"],
      ["Payment", "75% on filing, 25% on grant"],
    ],
    note: "Covers filing, attorney, search and maintenance fees. Up to 5 claims per company, in addition to Government of India schemes.",
  },
  {
    name: "UNNATI 2024",
    headline: "Up to 50% capital subsidy",
    rows: [
      ["Zone A", "30% subsidy (capital up to ₹5 Cr), 3% interest subvention, 75% net GST reimbursement"],
      ["Zone B", "50% subsidy (capital up to ₹7.5 Cr), 5% interest subvention, 100% net GST reimbursement"],
    ],
    note: "Central scheme for industrial development in the North East, run in Sikkim by the department.",
  },
  {
    name: "Land leasing",
    headline: "33-year leases",
    rows: [
      ["Land banks", "held by the department for industrial use"],
      ["Private land", "leased up to 33 years, renewable"],
      ["Above ₹50 Cr", "may qualify for a second renewal"],
    ],
    note: "Industrial growth without diluting Sikkim's protected land laws.",
  },
];

export const steps = [
  {
    title: "Talk to us",
    text: "Tell the investment team or your District Industries Centre what you plan to build. We help you match it to a sector, a site and the right incentives.",
  },
  {
    title: "Apply through the single window",
    text: "File approvals on the National Single Window System, so one application reaches every department involved.",
    link: { href: "https://www.nsws.gov.in/", label: "Open NSWS" },
  },
  {
    title: "Get your industrial licence",
    text: "Apply for or renew your industrial licence with the department.",
    link: { href: `${LIVE}/visitors/schemes?17`, label: "Licence guidelines" },
  },
  {
    title: "Claim incentives, get aftercare",
    text: "Once production starts, claim SGST, stamp duty and scheme benefits. A dedicated facilitation team stays with existing investors.",
  },
];

type Notice = { title: string; href: string; date: string };

export const notices: Record<"tenders" | "reports" | "circulars", Notice[]> = {
  tenders: [
    { title: "Notice Inviting Tender: agency for comprehensive branding and promotion", href: `${LIVE}/tenderdoc/tenderdoc-mv348ZCa2f71kcEiEzcmBQDJ7gpYyJDxnhpsAYUQ.pdf`, date: "2026-10-18" },
    { title: "RFP: agency for comprehensive branding and promotion", href: `${LIVE}/tenderdoc/tenderdoc-DrgxyCqA8CuFJWk1jePM6gL3flmW1m6hn8ylSznw.pdf`, date: "2026-10-18" },
    { title: "RFP: supply and installation of machinery for GFPF", href: `${LIVE}/tenderdoc/tenderdoc-7hSzjGbGmXAie2TEDeflWafVvLXvXppkXpvDj89y.pdf`, date: "2026-07-20" },
    { title: "Tender notice: RFP for GFPF", href: `${LIVE}/tenderdoc/tenderdoc-DICyZdev68GrOVhlc1N9QZ7y7sKtg3vaOXjeouws.pdf`, date: "2026-07-20" },
    { title: "Tender notice: enlisting agencies to supply stationery for RAMP", href: `${LIVE}/tenderdoc/tenderdoc-5L2svdWk5FvQW1aIgYYatffWhQXbPNotVoPnNwrn.pdf`, date: "2025-03-11" },
  ],
  reports: [
    { title: "Sikkim partners with National Institute of Design to boost the creative economy", href: `${LIVE}/notificationdoc/notificationdoc-7kJMjNyuiuppejWk8fLQaTJpIU3eWik3aiWHRr9m.pdf`, date: "2024-09-11" },
    { title: "Report: 15-day training on decorative candle making", href: `${LIVE}/notificationdoc/notificationdoc-o32jZB7lQNMxixNSDw1VdPuyOmg6VTZOvH4WrRk6.pdf`, date: "2024-07-02" },
    { title: "Report: Vendor Development Programme (VDP)", href: `${LIVE}/notificationdoc/notificationdoc-sfVkLdRgg3yjbCmRqOau4MjB5lDiZoKWuVpzHLKd.pdf`, date: "2024-07-02" },
    { title: "Report: Intellectual Property Rights (IPR)", href: `${LIVE}/notificationdoc/notificationdoc-cCDK6iE19lYWdbhhaJJOGOKPbHVSEyQetZuiXGCY.pdf`, date: "2024-07-02" },
    { title: "Corrigendum: extended date for RFP submission", href: `${LIVE}/notificationdoc/notificationdoc-8al2pDG1zxPJsfxFPVEwfiDhJGGv5uric60KdOKd.pdf`, date: "2024-07-02" },
  ],
  circulars: [
    { title: "Corrigendum: RFP under GFPF, Singtam", href: `${LIVE}/circulardoc/circulardoc-7yYjhFiPhy2Q5JbPgb5fIHR7c8BLunrfiDw9vdyJ.pdf`, date: "2026-08-07" },
    { title: "List of testing facilities for MSMEs", href: `${LIVE}/circulardoc/circulardoc-6tEJJw19ynpFgQnSaCw6ygSB0eiC9rw0HJ265jnx.pdf`, date: "2026-08-05" },
    { title: "Expression of Interest for eligible MSMEs", href: `${LIVE}/circulardoc/circulardoc-Z1Z3LG9B3fFyZSzjj7sxfxI6Ha4Pi3o1Xkws0XZ1.pdf`, date: "2026-07-10" },
    { title: "SOP for onboarding MSMEs", href: `${LIVE}/circulardoc/circulardoc-wNEHX0sEvPSh8Q1kD8f6JwZVmPa3uNsIoBV30k1k.pdf`, date: "2026-07-10" },
    { title: "Notification: Sexual Harassment of Women at Workplace", href: `${LIVE}/circulardoc/circulardoc-7JY3M46UrK60dp5BlnGoql9RwXScbcMYUSvYAejm.pdf`, date: "2026-06-19" },
  ],
};

export const noticeArchive = {
  tenders: `${LIVE}/visitors/tender`,
  reports: `${LIVE}/visitors/notification`,
  circulars: `${LIVE}/visitors/circular`,
};

export const schemes = [
  { name: "UNNATI 2024", for: "New and expanding units in the North East" },
  { name: "PMEGP", for: "Micro enterprises, rural and urban" },
  { name: "PMFME", for: "Micro food processing units" },
  { name: "SFURTI", for: "Traditional industry clusters" },
  { name: "MSE-CDP", for: "Cluster development for small enterprises" },
  { name: "SC-ST Hub", for: "Entrepreneurs from SC and ST communities" },
  { name: "PM Vishwakarma", for: "Artisans and craftspeople" },
  { name: "RAMP", for: "Raising MSME performance" },
  { name: "NEIDS", for: "North East industrial development" },
  { name: "Sikkim Start-up Policy 2025", for: "Founders building in Sikkim" },
  { name: "ODOP", for: "One District One Product sellers" },
  { name: "Industrial licence", for: "Apply for or renew a licence" },
];

export const milestones = [
  {
    title: "Silver at the National ODOP Awards 2025",
    text: "Sikkim placed second among Category B States and UTs for One District One Product.",
    img: "/img/odop-silver-2025.webp",
    w: 800,
    h: 400,
    alt: "Sikkim's delegation receiving the Silver award on stage, with 'States/UTs: Category B' on the screen behind",
  },
  {
    title: "Sikkim Design Week 2025",
    text: "Part of the State's creative-economy push, alongside its MoU with the National Institute of Design, Ahmedabad.",
    img: "/img/design-week-runway.webp",
    w: 1200,
    h: 900,
    alt: "Models in traditional dress walk a red runway at Sikkim Design Week as an audience watches",
  },
  {
    title: "Building the startup ecosystem",
    text: "Workshops on building the innovation and startup ecosystem. Sikkim founders took part in Startup Mahakumbh 2025, New Delhi.",
    img: "/img/startup-workshop.webp",
    w: 900,
    h: 600,
    alt: "Panel of speakers seated in front of a 'Building Innovation and Ecosystem Start-up' banner",
  },
  {
    title: "RAMP and MSME Division opened",
    text: "A dedicated division to raise MSME performance across the state.",
    img: "/img/ramp-msme-inauguration.webp",
    w: 810,
    h: 706,
    alt: "Officials cut a ribbon to open the RAMP and MSME Division office",
  },
  {
    title: "Thangka and handicraft training",
    text: "The Directorate of Handloom & Handicrafts trains artisans in thangka painting and traditional crafts.",
    img: "/img/thangka-painting.webp",
    w: 430,
    h: 276,
    alt: "A young artist paints a detailed thangka at a wooden table",
  },
];

export const leaders = [
  { name: "Shri Om Prakash Mathur", role: "Hon'ble Governor", img: "/img/governor.webp" },
  { name: "Shri Prem Singh Tamang", role: "Hon'ble Chief Minister", img: "/img/chief-minister.webp" },
  { name: "Shri Tshering Thendup Bhutia", role: "Hon'ble Minister, Commerce & Industries", img: "/img/minister.webp" },
];

export const dics = ["Gangtok", "Pakyong", "Namchi", "Jorethang", "Soreng", "Gyalshing"];

export const psus = [
  "State Trading Corporation of Sikkim (STCS)",
  "Directorate of Handloom & Handicrafts",
  "Sikkim Khadi & Village Development Board",
  "Government Fruit Preservation Factory (GFPF)",
  "Sikkim Industrial Development & Investment Corporation (SIDICO)",
  "Sikkim Precision Industries Ltd. (SPIL)",
];

export const partnerLogos = [
  { src: "/img/logo-sikkgov.webp", alt: "Government of Sikkim", w: 398 },
  { src: "/img/logo-pmfme.webp", alt: "PM Formalisation of Micro Food Processing Enterprises (PMFME)", w: 148 },
  { src: "/img/logo-unnati.webp", alt: "UNNATI scheme", w: 220 },
  { src: "/img/logo-msme.webp", alt: "Ministry of MSME, Government of India", w: 218 },
  { src: "/img/logo-nssh.webp", alt: "National SC-ST Hub", w: 128 },
  { src: "/img/logo-sfurti.webp", alt: "SFURTI scheme", w: 288 },
  { src: "/img/logo-pmegp.webp", alt: "PMEGP", w: 228 },
  { src: "/img/logo-inspires.webp", alt: "Sikkim Inspires", w: 118 },
];

export const contact = {
  address: "Udyog Bhawan, below Sikkim Press, Upper Tadong, Gangtok, Sikkim 737102",
  phone: "+91 3592 202746",
  phoneHref: "tel:+913592202746",
  email: "sikkimindustries@gmail.com",
  maps: "https://www.google.com/maps/search/?api=1&query=Udyog+Bhawan+Upper+Tadong+Gangtok",
};
