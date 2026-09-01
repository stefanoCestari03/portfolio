import React, { useState, useEffect } from 'react';
import { Code, Brain, Award, Briefcase, Mail, Linkedin, Github, ChevronDown, Sparkles, Zap, Shield, Server, Network, Database, Eye, AlertTriangle, Activity, ArrowUpRight } from 'lucide-react';
import profileImg from "../assets/profile.jpg";

function SectionHeading({ index, title }) {
  return (
    <div className="mb-14 text-center">
      <div className="text-[11px] uppercase tracking-[0.3em] text-white/40 mb-4">{index}</div>
      <h2 className="text-3xl md:text-5xl font-semibold uppercase tracking-tight">{title}</h2>
    </div>
  );
}

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const sections = ['home', 'about', 'experience', 'skills', 'qualifications'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    const cvUrl = '/stefanocestaricv_2026_Autorizzazione.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'CV_Stefano_Cestari_2026.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const hardSkills = [
    { name: 'Windows Server & Endpoint', level: 90, icon: <Server />, category: 'System Admin' },
    { name: 'Linux Administration', level: 85, icon: <Server />, category: 'System Admin' },
    { name: 'VMware & Nakivo', level: 85, icon: <Database />, category: 'Virtualization' },
    { name: 'WatchGuard Firewall', level: 80, icon: <Shield />, category: 'Security' },
    { name: 'WithSecure EDR', level: 85, icon: <Eye />, category: 'Security' },
    { name: 'SOC Analysis & SIEM', level: 90, icon: <Activity />, category: 'Cybersecurity' },
    { name: 'Incident Response', level: 85, icon: <AlertTriangle />, category: 'Cybersecurity' },
    { name: 'Cisco Networking', level: 80, icon: <Network />, category: 'Networking' },
    { name: 'Python Scripting', level: 75, icon: <Code />, category: 'Development' },
    { name: 'SQL & MySQL', level: 82, icon: <Database />, category: 'Database' },
    { name: 'Database Design & Administration', level: 78, icon: <Database />, category: 'Database' },
    { name: 'Angular & React', level: 75, icon: <Code />, category: 'Frontend' },
    { name: 'Java & Spring Boot', level: 70, icon: <Code />, category: 'Backend' }
  ];

  const softSkills = [
    { name: 'Problem Solving', icon: <Brain />, color: 'from-purple-500 to-pink-500' },
    { name: 'Team Collaboration', icon: <Briefcase />, color: 'from-blue-500 to-cyan-500' },
    { name: 'Critical Thinking', icon: <Sparkles />, color: 'from-orange-500 to-red-500' },
    { name: 'Communication', icon: <Award />, color: 'from-green-500 to-emerald-500' }
  ];

  const qualifications = [
    {
      year: '2022 - 2025',
      title: 'MAT – Tecnico Superiore delle Infrastrutture di Reti e Cloud Computing',
      institution: 'Marconi Altaformazione Tecnologica, Rovereto (TN)',
      desc: 'Corso post-diploma biennale intensivo con professori universitari ed esperti del settore. Competenze acquisite: protocolli di rete, Java, MySQL (progettazione avanzata DB), HTML/CSS/JavaScript, Angular, React, Spring Boot, Python (crittografia), cloud computing AWS, virtualizzazione VMware. Progetti reali con FBK (Spring Boot) e GPI (Angular). Corsi di sicurezza informatica (Cyber Kill Chain) con Dedagroup e Trentino Digitale.'
    },
    {
      year: '2017 - 2022',
      title: 'Perito Informatico',
      institution: 'Istituto Marie Curie, Pergine Valsugana (TN)',
      desc: 'Specializzazione informatica con studio di protocolli di rete e configurazioni Cisco, programmazione Java e C, sviluppo web (PHP, JS, CSS, HTML), gestione database SQL, robotica e project management. Progetto pratico: scheda Arduino per domotica con interfaccia web.'
    }
  ];

  const experiences = [
    {
      company: 'Xenos S.r.l.',
      location: 'Via Laurence Feininger 32, Gardolo (TN)',
      role: 'System Administrator & Network Engineer',
      period: 'Luglio 2025 - Presente',
      type: 'Esperienza lavorativa',
      responsibilities: [
        'Gestione completa ambienti Microsoft 365 (Exchange, Teams, SharePoint)',
        'Configurazione e supporto caselle PEC ed email personalizzate clienti',
        'Amministrazione Windows Server con Active Directory, GPO e policy di sicurezza',
        'Configurazione e monitoraggio backup cloud con NAKIVO e NAS Synology / Hetzner',
        'Verifica periodica backup e gestione procedure di restore',
        'Preparazione, configurazione e assistenza diretta su endpoint Windows',
        'Supporto remoto TeamViewer, aggiornamenti sicurezza e patching dispositivi',
        'Configurazione e manutenzione Firewall WatchGuard (policy, VPN, traffic management)',
        'Gestione Access Point Ubiquiti UniFi (deploy, SSID, VLAN, firmware)',
        'Commissioning autonomo su nuovi clienti: setup completo infrastruttura IT',
        'Manutenzione programmata e straordinaria con monitoraggio proattivo'
      ],
      icon: <Server />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      company: 'Be-innova S.r.l.',
      location: 'Via dei Solteri 74, Trento',
      role: 'SOC Analyst L1 / Network & Security System Engineer',
      period: 'Gennaio 2025 - Giugno 2025',
      type: 'Esperienza lavorativa',
      responsibilities: [
        'Monitoraggio H24 su turni come SOC Analyst di primo livello (L1)',
        'Analisi e triage degli alert da sistemi SIEM (Elastic, SGBOX)',
        'Inserimento eccezioni a regole di sicurezza e rule tuning',
        'Analisi alert Bitdefender e Microsoft Defender',
        'Monitoraggio rete, apparati informatici e server clienti'
      ],
      icon: <Shield />,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      company: 'Be-innova S.r.l.',
      location: 'Via dei Solteri 74, Trento',
      role: 'Sistemista Linux / Web Server Administrator',
      period: 'Ottobre 2024 - Dicembre 2024',
      type: 'Esperienza lavorativa',
      responsibilities: [
        'Gestione aggiornamento server web Linux aziendale dopo vulnerabilità critica nel ticketing',
        'Analisi della falla e studio del Proof of Concept (POC) e metodologie di exploit',
        'Tesi di fine corso sulla vulnerabilità CVE identificata e relativo patching',
        'Montaggio e cablaggio del rack di laboratorio'
      ],
      icon: <Server />,
      color: 'from-blue-500 to-purple-500'
    },
    {
      company: 'Be-innova S.r.l.',
      location: 'Via dei Solteri 74, Trento',
      role: 'Tirocinante – Firewall & Network Design',
      period: 'Giugno 2024 - Luglio 2024',
      type: 'Stage',
      responsibilities: [
        'Autoformazione sulle best practice di configurazione Firewall Fortinet',
        'Creazione schemi di rete dettagliati per uso interno e consegna clienti',
        'Reverse engineering infrastrutture di rete clienti per analisi di sicurezza',
        'Progettazione rack di laboratorio con dispositivi Cisco e Fortinet'
      ],
      icon: <Network />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      company: 'Be-innova S.r.l.',
      location: 'Via Ezio Maccani 195, Trento',
      role: 'Tirocinante Sistemistico – Linux OS',
      period: 'Ottobre 2023 - Dicembre 2023',
      type: 'Stage',
      responsibilities: [
        'Gestione server Linux virtualizzati per servizi web (Proxmox, Docker)',
        'Progetto di aggiornamento sistema operativo e software applicativi',
        'Formazione con affiancamento nell\'amministrazione di server Linux',
        'Monitoraggio e manutenzione infrastrutture corporate'
      ],
      icon: <Activity />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      company: 'Be-innova S.r.l.',
      location: 'Via Ezio Maccani 195, Trento',
      role: 'Tirocinante – Networking',
      period: 'Maggio 2023',
      type: 'Stage',
      responsibilities: [
        'Configurazione di reti e creazione schemi basati su infrastrutture esistenti',
        'Ricerca e implementazione in laboratorio di migliorie per i sistemi'
      ],
      icon: <Network />,
      color: 'from-pink-500 to-red-500'
    },
    {
      company: 'Progetto Personale',
      location: 'Remote',
      role: 'Vibe Coding & Full-Stack Web App Development',
      period: '2024 - Presente',
      type: 'Progetto Personale',
      responsibilities: [
        'AI-assisted vibe coding: rapid prototyping di web app con strumenti LLM',
        'Sviluppo full-stack con React e framework JavaScript moderni',
        'Registrazione domini, configurazione DNS e gestione hosting (shared, VPS, cloud)',
        'Deployment pipeline: build, test e release per ambienti di produzione',
        'Progettazione e gestione database MySQL e PostgreSQL di medie dimensioni',
        'Database administration: user management, backup, migrazioni schema',
        'Progettazione REST API e integrazione tra frontend e backend',
        'Gestione certificati SSL/TLS e configurazione web server (Apache, Nginx)',
        'Monitoraggio performance e uptime per applicazioni web in produzione'
      ],
      icon: <Code />,
      color: 'from-emerald-500 to-cyan-500'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation Bar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-black border-b border-white/15' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-lg font-semibold tracking-[0.3em]">
            SC
          </div>
          <div className="hidden md:flex gap-10">
            {['home', 'about', 'experience', 'skills', 'qualifications'].map(section => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`uppercase text-xs tracking-[0.18em] transition-colors duration-200 hover:text-white ${activeSection === section ? 'text-white' : 'text-white/45'}`}
              >
                {section}
              </button>
            ))}
          </div>
          <button
            onClick={handleDownloadCV}
            className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/70 hover:text-white transition-colors"
          >
            <ArrowUpRight size={14} />
            <span className="hidden md:inline">Download CV</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="relative z-10 text-center px-6 my-20">
          <div className="mb-8 inline-block">
            {/* Profile photo — kept as-is */}
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-5xl font-bold">
               <img
                  src={profileImg}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-8xl font-semibold uppercase tracking-tight mb-6 animate-fade-in">
            Stefano Cestari
          </h1>
          <p className="text-sm md:text-lg uppercase tracking-[0.2em] text-white/55 mb-3 animate-fade-in-delay">
            Network &amp; Security System Engineer
          </p>
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-white/35 mb-10 animate-fade-in-delay">
            ICT Specialist | SOC Analyst | System Administrator
          </p>
          <div className="flex gap-6 justify-center mb-10 animate-fade-in-delay-2">
            <a href="https://www.linkedin.com/in/stefano-cestari-a7a730264/" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-60 transition-opacity">
              <Linkedin size={22} />
            </a>
            <a href="mailto:stefano.cestari2203@gmail.com" className="text-white hover:opacity-60 transition-opacity">
              <Mail size={22} />
            </a>
            <a href="https://github.com/stefanoCestari03" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-60 transition-opacity">
              <Github size={22} />
            </a>
          </div>
          <button
            onClick={handleDownloadCV}
            className="inline-flex items-center gap-3 px-7 py-3 border border-white/25 uppercase text-xs tracking-[0.2em] hover:bg-white hover:text-black transition-colors mb-16 animate-fade-in-delay-2"
          >
            <ArrowUpRight size={16} />
            Download Full CV
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="block mx-auto"
          >
            <ChevronDown size={28} className="text-white/40" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center py-24 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto w-full">
          <SectionHeading index="01" title="About Me" />
          <div className="border border-white/15 p-8 md:p-12 hover:border-white/40 transition-colors duration-300">
            <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-6">
              I'm a Technical IT Specialist with a strong passion for ICT and a solid background in cybersecurity operations.
              My expertise includes SOC L1 analysis, incident triage, and SIEM rule management, ensuring resilient and secure infrastructures.
            </p>

            <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-6">
              During my experience at <span className="text-white font-semibold">Be-innova S.r.l.</span> (January – June 2025),
              I worked as SOC Analyst L1 across multiple domains including Network and Security System Engineering, Linux system administration,
              and advanced security monitoring with SIEM systems (Elastic, SGBOX), Bitdefender and Microsoft Defender.
            </p>

            <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-6">
              Since <span className="text-white font-semibold">July 2025</span>, I have been working at
              <span className="text-white font-semibold"> Xenos S.r.l.</span> as a System Administrator and Network Engineer.
              My responsibilities include managing Microsoft 365 environments, Windows Server with Active Directory,
              WatchGuard firewalls, Ubiquiti UniFi access points, NAKIVO backup with NAS Synology, and full IT commissioning for business clients.
            </p>

            <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-6">
              My technical skill set spans Check Point and SecGX firewall administration, IPS/IDS operations with Trellix and Cisco,
              vulnerability management with Qualys and Nessus, and extensive network monitoring using Netscout and Paessler solutions.
            </p>

            <p className="text-lg md:text-xl text-white/70 leading-relaxed">
              Outside of work, I enjoy playing guitar and singing, sports like volleyball and gym training, mountain excursions, and travel.
              I strongly believe that continuous learning is essential for staying ahead in the fast-evolving IT industry.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
              <div className="text-center p-6 border border-white/15">
                <Shield size={28} className="mx-auto mb-3 text-white" />
                <div className="text-lg font-semibold uppercase tracking-wide mb-1">Security</div>
                <div className="text-white/50 text-sm uppercase tracking-wide">SOC & Firewall</div>
              </div>
              <div className="text-center p-6 border border-white/15">
                <Server size={28} className="mx-auto mb-3 text-white" />
                <div className="text-lg font-semibold uppercase tracking-wide mb-1">SysAdmin</div>
                <div className="text-white/50 text-sm uppercase tracking-wide">Linux & Windows</div>
              </div>
              <div className="text-center p-6 border border-white/15">
                <Network size={28} className="mx-auto mb-3 text-white" />
                <div className="text-lg font-semibold uppercase tracking-wide mb-1">Network</div>
                <div className="text-white/50 text-sm uppercase tracking-wide">Analysis & Configuring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen py-24 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <SectionHeading index="02" title="Work Experience" />
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <div key={i} className="border border-white/15 p-8 hover:border-white/40 transition-colors duration-300">
                <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
                  <div className="p-4 border border-white/20 flex-shrink-0 text-white">
                    {exp.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold uppercase tracking-tight mb-2">{exp.role}</h3>
                    <p className="text-base uppercase tracking-[0.15em] text-white/70 mb-1">{exp.company}</p>
                    <p className="text-white/45 text-sm mb-3">{exp.location}</p>
                    <div className="flex flex-wrap gap-2 items-center">
                      <span className="px-3 py-1 border border-white/20 text-[11px] uppercase tracking-wide text-white/70">{exp.period}</span>
                      <span className="px-3 py-1 border border-white/20 text-[11px] uppercase tracking-wide text-white/70">{exp.type}</span>
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                  {exp.responsibilities.map((resp, j) => (
                    <div key={j} className="flex items-start gap-3 border-l border-white/15 pl-4 py-1">
                      <div className="text-white/40 mt-1 flex-shrink-0">
                        <Zap size={14} />
                      </div>
                      <p className="text-sm text-white/70">{resp}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>

          <div className="mb-20">
            <h3 className="text-3xl font-bold mb-8 text-cyan-400">Technical Skills</h3>
            <div className="grid gap-6">
              {hardSkills.map((skill, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-cyan-400">{skill.icon}</div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xl font-semibold">{skill.name}</span>
                        <span className="text-cyan-400 text-sm">{skill.level}%</span>
                      </div>
                      <span className="text-sm text-white/60">{skill.category}</span>
                    </div>
                  </div>
                  <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-8 text-purple-400">Soft Skills</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {softSkills.map((skill, i) => (
                <div
                  key={i}
                  className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className="relative z-10">
                    <div className={`text-4xl mb-4 bg-gradient-to-br ${skill.color} bg-clip-text text-transparent`}>
                      {skill.icon}
                    </div>
                    <h4 className="text-2xl font-bold">{skill.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section id="qualifications" className="min-h-screen py-24 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <SectionHeading index="03" title="Education & Qualifications" />
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-white/20"></div>
            {qualifications.map((qual, i) => (
              <div key={i} className="relative pl-20 pb-12 group">
                <div className="absolute left-[26px] top-1.5 w-3 h-3 bg-white rounded-full border-4 border-black"></div>
                <div className="border border-white/15 p-6 hover:border-white/40 transition-colors duration-300">
                  <div className="text-white font-semibold uppercase tracking-[0.15em] text-sm mb-2">{qual.year}</div>
                  <h3 className="text-lg md:text-xl font-semibold uppercase tracking-tight mb-2">{qual.title}</h3>
                  <p className="text-white/55 mb-3 text-sm uppercase tracking-wide">{qual.institution}</p>
                  <p className="text-white/65 text-sm leading-relaxed">{qual.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-14 px-6 border-t border-white/15">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-8 mb-6">
            <a href="https://www.linkedin.com/in/stefano-cestari-a7a730264/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:stefano.cestari2203@gmail.com" className="text-white/60 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
            <a href="https://github.com/stefanoCestari03" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
              <Github size={20} />
            </a>
          </div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-4">© Copyright Stefano Cestari — All Rights Reserved</p>
          <button
            onClick={handleDownloadCV}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors"
          >
            <ArrowUpRight size={14} />
            Download CV
          </button>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s backwards;
        }
        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.6s backwards;
        }
      `}</style>
    </div>
  );
}
