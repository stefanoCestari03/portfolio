// One distinct colour per career stage — not monochrome, no blue: each stage/node on the
// signal path is colour-coded so the journey stays legible as you scroll through it.
export const STAGE_COLORS = {
  hero: '#E2E8F0',
  training: '#34D399',
  sysadmin: '#F59E0B',
  soc: '#F43F5E',
  certifications: '#FBBF24',
  xenos: '#A78BFA',
  projects: '#F472B6',
  contact: '#E2E8F0'
};

export const hero = {
  name: 'Stefano Cestari',
  role: 'System & Networking Administrator',
  color: STAGE_COLORS.hero
};

export const navStages = [
  { id: 'hero', label: 'Home' },
  { id: 'training', label: 'Formazione' },
  { id: 'sysadmin', label: 'Sysadmin' },
  { id: 'soc', label: 'SOC' },
  { id: 'certifications', label: 'Certificazioni' },
  { id: 'xenos', label: 'Xenos' },
  { id: 'projects', label: 'Progetti' },
  { id: 'contact', label: 'Contatti' }
];

export const stages = [
  {
    id: 'training',
    index: '02',
    color: STAGE_COLORS.training,
    glyph: 'Wifi',
    company: 'Be-innova S.r.l.',
    role: 'Stage e formazione — Networking & Linux',
    period: 'Maggio 2023 — Dicembre 2023',
    location: 'Trento',
    bullets: [
      'Configurazione di reti e creazione schemi basati su infrastrutture esistenti',
      'Ricerca e implementazione in laboratorio di migliorie per i sistemi',
      'Gestione server Linux virtualizzati per servizi web (Proxmox, Docker)',
      "Formazione con affiancamento nell'amministrazione di server Linux",
      'Monitoraggio e manutenzione infrastrutture corporate'
    ]
  },
  {
    id: 'sysadmin',
    index: '03',
    color: STAGE_COLORS.sysadmin,
    glyph: 'Terminal',
    company: 'Be-innova S.r.l.',
    role: 'Sistemista Linux / Web Server Administrator',
    period: 'Giugno 2024 — Dicembre 2024',
    location: 'Trento',
    bullets: [
      'Autoformazione sulle best practice di configurazione Firewall Fortinet',
      'Progettazione rack di laboratorio con dispositivi Cisco e Fortinet',
      'Gestione aggiornamento server web Linux aziendale dopo vulnerabilità critica nel ticketing',
      'Analisi della falla, studio del PoC e metodologie di exploit; tesi di fine corso sulla CVE identificata',
      'Montaggio e cablaggio del rack di laboratorio'
    ]
  },
  {
    id: 'soc',
    index: '04',
    color: STAGE_COLORS.soc,
    glyph: 'ShieldAlert',
    company: 'Be-innova S.r.l.',
    role: 'SOC Analyst L1 / Network & Security System Engineer',
    period: 'Gennaio 2025 — Giugno 2025',
    location: 'Trento',
    bullets: [
      'Monitoraggio H24 su turni come SOC Analyst di primo livello (L1)',
      'Analisi e triage degli alert da sistemi SIEM (Elastic, SGBOX)',
      'Inserimento eccezioni a regole di sicurezza e rule tuning',
      'Analisi alert Bitdefender e Microsoft Defender',
      'Monitoraggio rete, apparati informatici e server clienti'
    ]
  },
  {
    id: 'xenos',
    index: '06',
    color: STAGE_COLORS.xenos,
    glyph: 'Network',
    company: 'Xenos S.r.l.',
    role: 'System Administrator & Network Engineer',
    period: 'Luglio 2025 — Presente',
    location: 'Gardolo (TN)',
    bullets: [
      'Gestione infrastruttura multi-cliente (MSP): reti, VLAN, multi-WAN e SD-WAN',
      'Configurazione e manutenzione Firewall WatchGuard (policy, VPN, traffic management)',
      'Amministrazione Windows Server con Active Directory, GPO e policy di sicurezza',
      'Gestione completa ambienti Microsoft 365 (Exchange, Teams, SharePoint)',
      'Centralino VoIP 3CX: configurazione e supporto',
      'Gestione Access Point Ubiquiti UniFi (deploy, SSID, VLAN, firmware)',
      'Backup cloud con NAKIVO e NAS Synology / Hetzner, verifica e procedure di restore',
      'Commissioning autonomo su nuovi clienti: setup completo infrastruttura IT'
    ],
    note: 'In arrivo: Cloud Engineer presso Dedagroup — deda.bit.'
  }
];

export const certifications = {
  id: 'certifications',
  index: '05',
  color: STAGE_COLORS.certifications,
  glyph: 'Award',
  title: 'Certificazioni e Formazione',
  certifications: [
    { year: '2023', title: 'CCNA — Cisco Certified Network Associate', institution: 'Cisco' },
    {
      year: '2026 — in corso',
      title: 'Network Security Essentials — Certificazione Avanzata',
      institution: 'WatchGuard Technologies'
    }
  ],
  education: [
    {
      year: '2022 — 2025',
      title: 'MAT — Tecnico Superiore Infrastrutture di Reti e Cloud Computing',
      institution: 'Marconi Altaformazione Tecnologica, Rovereto (TN)'
    },
    {
      year: '2017 — 2022',
      title: 'Perito Informatico',
      institution: 'Istituto Marie Curie, Pergine Valsugana (TN)'
    }
  ]
};

export const projects = {
  id: 'projects',
  index: '07',
  color: STAGE_COLORS.projects,
  glyph: 'FolderGit2',
  items: [
    { title: 'Backup Monitor', tag: 'Monitoraggio', desc: 'Monitoraggio dei backup tramite log.' },
    { title: 'Maintenance Log', tag: 'Manutenzione', desc: 'Gestione della manutenzione tramite log.' }
  ]
};

export const contact = {
  index: '08',
  id: 'contact',
  color: STAGE_COLORS.contact,
  glyph: 'Mail',
  email: 'stefano.cestari2203@gmail.com',
  linkedin: 'https://www.linkedin.com/in/stefano-cestari-a7a730264/',
  github: 'https://github.com/stefanoCestari03'
};
