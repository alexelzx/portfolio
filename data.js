/* ==========================================================
   EDIT ONLY THIS FILE to change the content of your site.
   Sources: LinkedIn, CV, GitHub (alexelzx), efprp.org.
   Items marked TODO need your check or more info.
   ========================================================== */
const DATA = {
  name: "Alexios Elizalde Xirokosta",
  role: "Founder & CEO of EFPRP",
  location: "Toulouse, France",
  email: "alexios.elizalde-xirokosta@etu.iut-tlse3.fr",
  cv: "",                               // TODO: add a public CV path when a privacy-safe version is ready
                                        // (your current CV shows home address, phone and birth date: make a version without them)

  // Hero sentence. <em> = italic serif.
  intro: "I lead a European non-profit for fire prevention and rural preservation, and I <em>build the software</em> behind it.",

  // Big statement in the yellow block. <em> = italic serif.
  statement: "Software that warns people <em>before the fire arrives.</em>",

  social: {
    linkedin: "https://www.linkedin.com/in/elizaldealexios/",
    github: "https://github.com/alexelzx",
    x: "https://twitter.com/alexelzx",
    instagram: "https://www.instagram.com/alexelzx/",
    efprp: "https://www.efprp.org",
    bookings: "https://bookings.cloud.microsoft/bookwithme/user/9b55f862b14a4f06865ecf0831780ac3%40etu.iut-tlse3.fr?anonymous&ismsaljsauthenabled=true"
  },

  podcast: "https://open.spotify.com/show/5cxZTeaYgrUZ2TJtnzr0j2?si=eff7a1ee88264914",

  media: {
    audio: [
      { title: "Day Ends — alexelzx", file: "assets/dayends.mp3", description: "An instrumental beat production. Lyric-based tracks are available on request." },
      { title: "Landing — alexelzx", file: "assets/landing.mp3", description: "An original instrumental beat production." }
    ],
    adWork: [
      { title: "Arizona Drink Ad Example", file: "assets/arizona-item.png", description: "Product photography and an advertising treatment created from a photo I took." },
      { title: "Arizona Model Ad Example", file: "assets/arizona-subject.png", description: "Subject photography and an advertising treatment created from a photo I took." },
      { title: "Statue of Marianne in the center of the IUT", file: "assets/marianne-iut.png", description: "Taken in native black and white." }
    ],
    photos: [
      { title: "Isari, Arkadia, Greece", file: "assets/img1.JPG" },
      { title: "Isari, Arkadia, Greece, Summer 2023", file: "assets/img2.JPG", description: "Someday rainy." },
      { title: "Isari, Arkadia, Greece, Summer 2023", file: "assets/img3.JPG", description: "Sunset with clouds." }
    ],
    equipment: [
      ["Camera", "Canon EOS 2000D"],
      ["Microphone", "DJI Mic Mini 2"]
    ]
  },

  about: [
    "I'm the founder and CEO of the European Fire Prevention & Rural Preservation Organization (EFPRP), a European non-profit committed to public safety through fire prevention and the protection of rural areas. I manage its departments and set its direction.",
    "I also write the code. With a colleague, I built EFRAS, the EFPRP's wildfire alert system, and I built its Integrity Reporting Portal. For my cohort at the IUT, I built MCalC+ and the SmartST debate suite.",
    "I'm studying Information & Communication in Toulouse, after a first year in Electrical Engineering and Industrial Computing. I grew up between Mexico City, Athens and Toulouse, and work in four languages."
  ],

  facts: [
    ["Based in", "Toulouse, France"],
    ["Leading", "EFPRP, since October 2024"],
    ["Studying", "BUT Information & Communication (INFOCOM), 2025 – 2028"],
    ["Focus", "Alerting software, digital marketing, cybersecurity"]
  ],

  experience: [
    { role: "Student Representative", org: "IUT · Université de Toulouse", period: "Jan 2026 – Present", place: "Toulouse (hybrid)",
      points: ["Represents students on the IUT Council (2026 – 2028) and the Student Council of the Université de Toulouse.",
               "Brings student priorities into discussions about teaching, campus life and the direction of the IUT."] },
    { role: "Founder & Chief Executive Officer", org: "European Fire Prevention & Rural Preservation Organization (EFPRP)", period: "Oct 2024 – Present", place: "Toulouse",
      points: ["Leads the organization and manages its departments.",
               "Co-developed EFRAS, the wildfire SMS alert system, and developed the Integrity Reporting Portal.",
               "Led the registration of EFPRP in the EU Transparency Register."] },
    { role: "Google Product Expert", org: "Google Account & Google Play", period: "Previous experience", place: "Online",
      points: ["Supported users with Google Account and Google Play questions, reaching Diamond level in the program."] },
    { role: "Online Security Education Club Founder", org: "High-school community", period: "High school", place: "Toulouse",
      points: ["Created a club focused on online security education and practical best practices.",
               "Organized a conference on online security and best practices attended by more than 150 people."] },
    { role: "Customer-facing assistant", org: "Estanco / Tobacco Shop", period: "2025", place: "Spain",
      points: ["Built face-to-face experience by assisting customers, handling requests and working in a busy retail environment.", "Developed practical awareness of identity, compliance and customer-service needs."] },
    { role: "Market Intelligence Assistant (internship)", org: "BASF Mexicana", period: "Jul 2025", place: "Mexico City",
      points: ["Ran market research to monitor BASF's competitors.",
               "Set up automated intelligence systems and a competitor database using Power BI and Copilot Agent."] }
  ],

  education: [
    { role: "BUT Information & Communication (INFOCOM)", org: "IUT · Université de Toulouse", period: "2025 – 2028", place: "Track: Digital Information in Organizations" },
    { role: "BUT Electrical Engineering & Industrial Computing (GEII)", org: "IUT Paul Sabatier III", period: "2024 – 2025", place: "" },
    { role: "Baccalauréat Général", org: "Lycée Franco-Hellénique Eugène Delacroix, Athens", period: "2021 – 2022", place: "" },
    { role: "Brevet and Baccalauréat Général", org: "Lycée Franco-Mexicain, Mexico City", period: "Up to 2024", place: "14+ years" }
  ],

  languages: ["Spanish — C2, native", "Greek — C2, native", "English — C1+", "French — C1+"],
  // TODO: check these, I inferred them from your profile
  interests: [
    ["Music", "Listening, producing beats and exploring new sounds."],
    ["Podcasts", "Hosting and learning through long-form conversations."],
    ["Teaching", "Sharing what I know and helping ideas become practical."],
    ["Research", "Investigating subjects and causes that matter to me."],
    ["Travel & people", "Driving, travelling and meeting people from different backgrounds."],
    ["Photography", "Observing places, people and details through a camera."],
    ["Environment", "Fire prevention and rural preservation across Europe."],
    ["Cybersecurity", "Studied and written about, including a book."]
  ],

  workload: [
    ["1,500+ hrs", "EFPRP in 2026", "Around 60 hours per week across code, design, legal work, GDPR, HR, recruitment and partnerships."],
    ["4,500+ hrs", "2025 – 2026 combined", "Technical and field work across EFPRP, BASF and related projects, including code, systems, research and on-the-ground work."]
  ],

  /* Work workspace. group = sidebar heading. notes = sticky notes (max 4). */
  projects: [
    { group: "Software", title: "EFRAS", status: "Live", year: "2026",
      desc: "The European Fire & Risk Alert System: SMS alerts tied to exact GPS coordinates, so people and rural communities hear about a wildfire near their land wherever they are. Co-developed with a colleague at the EFPRP; it runs on the EFPRP Vanguard Message Grid.",
      notes: [
        "Live in 10 countries, from France and Germany to Greece and Sweden. Spain is next.",
        "A warning goes out when a verified wildfire comes within 5 km of your coordinates.",
        "Every alert is cross-checked with Copernicus satellite imagery and EFFIS first.",
        "Encrypted and GDPR-aligned. Data is purged 30 days after a membership ends."
      ],
      stack: ["SMS alerting", "Geospatial", "Privacy by design"],
      links: [["Read the announcement", "https://www.efprp.org/blog/efprp-1/official-deployment-of-the-european-fire-risk-alert-system-efras-22"]] },

    { group: "Software", title: "Integrity Reporting Portal", status: "Internal", year: "",
      desc: "A secure portal I coded for the EFPRP, where concerns about compliance and procedural integrity can be reported.",   /* TODO: check this description and add 2–3 notes (features, users, stack) */
      notes: [],
      stack: [],
      links: [] },

    { group: "Software", title: "MCalC+", status: "Public beta", year: "2026",
      desc: "A student operating system for the BUT Information-Communication at IUT Toulouse. It began as a grade simulator and grew into a live calendar, absence tracker and homework planner, installable as a web app. Unofficial and student-led.",
      notes: [
        "Grade simulator for BUT 1 to 3, with a radar chart and PDF report export.",
        "Live calendar with Semaine A and B logic. Admin changes reach everyone instantly.",
        "Serverless: Firebase Firestore for data, Cloudflare Pages at the edge.",
        "Over 200 commits since the January 2026 launch."
      ],
      stack: ["JavaScript", "Firebase", "Chart.js", "PWA"],
      links: [["Open the app", "https://alexelzx.github.io/MCalC-/index.html"], ["Code", "https://github.com/alexelzx/MCalC-"]] },

    { group: "Software", title: "SmartST Debate Management Suite", status: "Live", year: "2026",
      desc: "A debate management suite for any size of debate. It removes the admin friction of structured argumentation by keeping speaking clocks in sync across every device through the cloud.",
      notes: [
        "Six modules, from a host command center to a participant workspace.",
        "Three access levels: participants, PIN-protected moderators and registered hosts.",
        "A projector view shows the active speaker, master clock and queue in the room.",
        "Real-time sync on Firebase Firestore, with Firebase Auth for hosts."
      ],
      stack: ["JavaScript", "Firebase", "CSS"],
      links: [["Open the app", "https://alexelzx.github.io/SmartST-Debate-Management-Suite-DMS-/main.html"], ["Code", "https://github.com/alexelzx/SmartST-Debate-Management-Suite-DMS-"]] },

    { group: "Organization", title: "EFPRP", status: "Founder & CEO", year: "2024 – now",
      desc: "Founded in October 2024 by Alexios Elizalde Xirokosta and Rémi Baysang, the European Fire Prevention and Rural Preservation Organization is a Toulouse-based non-profit creating a safer and more sustainable future for Europe. Its work combines fire prevention, rapid response, independent environmental analysis, environmental preservation, professional certifications and rural development. The organization supports education and public awareness, early detection, resilient communities, habitat restoration and the preservation of rural cultural and architectural heritage. Its WP-LSC certification is grounded in EU-level research and regulation, including Land-based Wildfire Prevention (Publication 4e6cc1f1) from the European Commission (2021).",
      notes: [],
      stack: ["Fire prevention", "Environmental analysis", "Rural development", "WP-LSC certification"],
      links: [["Website", "https://www.efprp.org"]] },

    { group: "Organization", title: "EFPRP Integrity Reporting Portal", status: "Internal", year: "2026",
      desc: "An anonymous reporting portal for EFPRP volunteers and partner beneficiary organizations, created for the Internal Support & Internal Affairs department. It provides a secure channel for whistleblowers and supports full compliance through confidential integrity reporting.",
      notes: [],
      stack: ["Whistleblowing", "Compliance", "Secure reporting"],
      links: [["Reporting portal", "https://report.isia.efprp.org"]] },

    { group: "Organization", title: "EANENP Network", status: "Ongoing", year: "2025 – now",
      desc: "The European Alliance for Nature and Environmental Protection is a unified force for nature that empowers local communities and organizations to protect and restore Europe's natural environment. The network focuses on ecosystem restoration, biodiversity conservation, habitat restoration, rewilding and sustainable practices. It brings environmental non-profits, researchers and policymakers together for knowledge exchange and joint conservation projects, while advocating for stronger European environmental protection policies.",
      notes: ["Supports habitat restoration, rewilding and biodiversity conservation across Europe.", "Connects non-profits, researchers and policymakers through shared projects and knowledge.", "Advocates for stronger legal frameworks for nature conservation and ecosystem protection."],
      stack: ["Ecosystem restoration", "Biodiversity", "Advocacy", "Knowledge sharing"],
      links: [["Website", "https://www.eanenp.org"], ["Network page", "https://www.efprp.org/european-alliance-network-for-ecosystem-nature-protection-eanenp"]] },

    { group: "Organization", title: "BASF competitor intelligence", status: "Completed", year: "2025",
      desc: "Market monitoring built during my internship in Mexico City: an automated intelligence system and a competitor database, using Power BI and Copilot Agent.",
      notes: [],
      stack: ["Power BI", "Copilot Agent", "Market research"],
      links: [] },

    { group: "Writing", title: "Ciberseguridad: Teoría y Práctica del Siglo XXI", status: "Published", year: "2024",
      desc: "Ciberseguridad: Theory and Practice of the 21st Century Vol. 1 provides a detailed introduction to ethical hacking and cybersecurity. It explains why cybersecurity matters in a technology-dependent world, where vulnerabilities to cyberattacks can lead to data loss, intellectual-property theft, identity theft, blackmail and other serious consequences for individuals and companies.",
      notes: [], stack: ["Cybersecurity", "Ethical hacking", "Kindle Direct Publishing"], links: [["Buy the book", "https://www.amazon.fr/Ciberseguridad-Teor%C3%ADa-Pr%C3%A1ctica-siglo-Vol/dp/B0DZHL9L2L/ref=sr_1_1?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3LNP2AXZ1T3GP&dib=eyJ2IjoiMSJ9.Lu67ErMT9mFVEnou6u2XUqoYWO2yJSdx1X-5BTskBNQ.2rVYFtfmNpUvH7o96kErnuW7wdU2im8c8bCKYuF2OlQ&dib_tag=se&keywords=alexios+elizalde+xirokosta&qid=1790691736&sprefix=alexios+elizalde+xirokosta%2Caps%2C147&sr=8-1"]] },

    { group: "Writing", title: "Cigarettes, Airplanes and Strangers", status: "Published", year: "2025",
      desc: "Notes on the Biological Soul is a descriptive study of the modern airport terminal as The Machine: an oppressive, interconnected system of industrial transit designed for human processing that demands absolute passivity and strips individuals of their identity. It follows an unnamed Subject, an anxious executive struggling against antiseptic architecture, the digital tyranny of the schedule and the forced proximity of the herd, while an internal voice, The Critic, polices his thoughts. An anomalous encounter with a young woman, revealed as his professional adversary, reframes his anxiety as a shared human condition and a resistance to The Machine's isolation. The final bleak analysis turns inward: the Subject himself is The Machine, trapped by his relentless need to classify and analyze his existence.",
      notes: [], stack: ["Essay", "Existential analysis", "Kindle Direct Publishing"], links: [["Buy the book", "https://www.amazon.fr/Cigarettes-Airplanes-Strangers-Notes-Biological/dp/B0G1MF31SH/ref=sr_1_2?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3LNP2AXZ1T3GP&dib=eyJ2IjoiMSJ9.Lu67ErMT9mFVEnou6u2XUqoYWO2yJSdx1X-5BTskBNQ.2rVYFtfmNpUvH7o96kErnuW7wdU2im8c8bCKYuF2OlQ&dib_tag=se&keywords=alexios+elizalde+xirokosta&qid=1790691736&sprefix=alexios+elizalde+xirokosta%2Caps%2C147&sr=8-2"]] }
  ],

  // slug = icon name on simpleicons.org. No logo = letter tile. Local logos live in assets/.
  // mono: true for black logos (they flip to white in dark mode).
  skills: {
    "Web & cloud": [
      { name: "HTML5", slug: "html5" }, { name: "CSS3", slug: "css3", logo: "assets/css3.png" },
      { name: "JavaScript", slug: "javascript" }, { name: "Firebase", slug: "firebase" },
      { name: "Cloudflare", slug: "cloudflare", logo: "assets/cloudflare.png" }, { name: "Chart.js", slug: "chartdotjs" },
      { name: "GitHub", slug: "github", mono: true }
    ],
    "Productivity & data": [
      { name: "Google Workspace", slug: "google", logo: "assets/google.png" }, { name: "Google Admin", slug: "google", logo: "assets/admin.png" },
      { name: "Zoho People", slug: "zoho" }, { name: "Microsoft 365", slug: "microsoft365", logo: "assets/microsoft.png" },
      { name: "Microsoft Copilot", slug: "microsoftcopilot", logo: "assets/copilot-color.png" }, { name: "NotebookLM", logo: "assets/notebooklm.png" },
      { name: "Google AI Studio", slug: "google", logo: "assets/google-ai-studio.png" }, { name: "Google Gemini", slug: "googlegemini", logo: "assets/gemini-color.png" },
      { name: "Looker Studio", slug: "looker" }, { name: "Power BI", slug: "powerbi", logo: "assets/powerbi.png" }
    ],
    "Marketing & operations": [
      { name: "Squarespace Domains", slug: "squarespace" }, { name: "DNS configuration", logo: "assets/dns-zone.png" },
      { name: "Cloudflare", slug: "cloudflare", logo: "assets/cloudflare.png" }, { name: "Google Ads", slug: "googleads" },
      { name: "Campaign Manager 360", logo: "assets/googlecampaignmanager360.png" }, { name: "Buffer", slug: "buffer" },
      { name: "Meta Business Suite", slug: "meta" }, { name: "Monday.com", slug: "mondaydotcom", logo: "assets/monday.svg" },
      { name: "Jira", slug: "jira" }, { name: "Confluence", slug: "confluence" }, { name: "Loom", slug: "loom" }
    ],
    "Design & compliance": [
      { name: "Auth0 SSO", slug: "auth0" }, { name: "Didit KYC / KYB", slug: "didit", logo: "assets/didit.png" },
      { name: "Canva Pro", slug: "canva", logo: "assets/canva.webp" }, { name: "Adobe Acrobat", slug: "adobeacrobatreader", logo: "assets/adobe-acrobat.png" },
      { name: "Adobe Illustrator", slug: "adobeillustrator", logo: "assets/illustrator.png" }, { name: "Adobe Photoshop", slug: "adobephotoshop", logo: "assets/adobe-photoshop.png" },
      { name: "DaVinci Resolve", slug: "davinciresolve" }
    ]
  },

  // Selected certifications with supplied images and dates.
  // TODO: add dates, links (url) and images (image) as you have them.
  certificates: [
    { title: "Google Ads Search Certification (2026)", issuer: "Google Digital Academy (Skillshop)", category: "Marketing", date: "2026-08", id: "192778480", url: "", image: "assets/ads-search-cert.png" },
    { title: "Google UX Design", issuer: "Coursera", category: "Design", date: "2025-10", id: "IQJY890TZ3L1", url: "", image: "assets/ux.png" },
    { title: "IBM IT Support Certificate", issuer: "Coursera · IBM", category: "IT support", date: "2023-07", id: "", url: "", image: "assets/it.jpg" },
    { title: "Google Cybersecurity Certification", issuer: "Coursera · Google", category: "Cybersecurity", date: "", id: "", url: "", image: "assets/google-cybersecurity.jpg" },
    { title: "Google Project Management", issuer: "Coursera · Google", category: "Management", date: "", id: "", url: "", image: "assets/pmanagement.jpg" },
    { title: "Certification PIX", issuer: "French Ministry of National Education", category: "Digital skills", date: "", id: "", url: "", image: "assets/pix.jpg" },
    { title: "HubSpot Digital Marketing Certificate", issuer: "HubSpot Academy", category: "Marketing", date: "2025-12-14", validUntil: "2026-01-13", id: "", url: "", image: "assets/hubmark.jpg" },
    { title: "Google Ads Creative Certification", issuer: "Google Digital Academy (Skillshop)", category: "Marketing", date: "2024-02-07", validUntil: "2025-02-07", id: "", url: "", image: "assets/ads-creative.png" }
  ],
  moreCerts: { count: 15, url: "https://www.linkedin.com/in/elizaldealexios/details/certifications/" }
};
