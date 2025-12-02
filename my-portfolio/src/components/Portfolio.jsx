import React, { useState, useEffect } from 'react';
import { Code, Brain, Award, Briefcase, Mail, Linkedin, Github, ChevronDown, Sparkles, Zap, Target, Shield, Server, Network, Database, Eye, AlertTriangle, Activity, Download, FileText } from 'lucide-react';
import profileImg from "../assets/profile.jpg";

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
    const cvUrl = '/cv_stefano_cestari.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'CV_Stefano_Cestari.pdf';
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
    { name: 'SQL & MySQL', level: 80, icon: <Database />, category: 'Database' },
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
      year: '2023-2025', 
      title: 'MAT - Marconi Altaformazione Tecnologica', 
      institution: 'Rovereto (TN)',
      desc: 'Two-year intensive course as ICT Higher Technician. Specialized in software development, networking, cybersecurity. Projects with FBK and GPI. Skills: Java, Python, HTML, CSS, JavaScript, Angular, React, MySQL, AWS, VMware, Spring Boot. Level 2 CompTIA A+ and CompTIA Security+ certifications.'
    },
    { 
      year: '2017-2022', 
      title: 'Istituto Marie Curie, Pergine Valsugana', 
      institution: 'High School Diploma - Computer Science Expert',
      desc: 'Three-year specialization in Computer Science: network protocols and Cisco configurations, programming (Java, C), web development (PHP, JavaScript, HTML, CSS), SQL databases, robot design, robotics laboratories, project management with Arduino projects.'
    }
  ];

  const experiences = [
    {
      company: 'Xenos S.r.l.',
      location: 'Via L. Feininger 32 ',
      role: 'System Administrator and Networking Operator',
      period: 'September 2025 - Present',
      type: 'Esperienza lavorativa',
      responsibilities: [
        'Operation on Checkpoint Firewalls',
        'WatchGuard Firewalls management and configuration',
        'NAS Synology management and configuration',
        'Backup monitoring with PRTG and Nakivo',
        'Direct client-side system support and management',
        'Security patch inventorying and vulnerability management',
        'Network security analysis and remote support',
        'Windows endpoint and server management',
        'Troubleshooting and support for network issues, switches, routers, firewalls, access points(unifi), devices, networks',
        'Linux VM infrastructure management and configuration',
        'VMware vSphere environment management and troubleshooting',
        'Ilo management for Dell servers',
        'Idrc management for HPE servers',
        'Call center support and ticketing system management',
        'outdoor technical support and on-site interventions for clients needs',
        'Network activity monitoring using Netscout and Paessler tools',
        'Customer management and ticketing system (ClickUp)',
        'Daily monitoring and activity reporting'
      ],
      icon: <Server />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      company: 'Bs Innova S.r.l.',
      location: 'Via dei solteri 74',
      role: 'Junior Network and Security System Engineer',
      period: 'Gennaio 2024 - Marzo 2025',
      type: 'Esperienza lavorativa',
      responsibilities: [
        'Level 1 monitoring and event analysis (L1)',
        'Operation on Checkpoint Firewalls (Gaia OS)',
        'Alert triage and incident management',
        'Security patch inventorying and vulnerability management',
        'Bitdefender EDR management and alert analysis',
        'Analysis of corporate SIEM alerts',
        'Qualys and Nessus vulnerability system analysis',
        'Elastic siem management and rule tuning',
        'SG-BOX siem management and rule tuning',
        'Data network monitoring, application and LAN/WAN status analysis',
        'Network activity monitoring using Netscout and Paessler tools',
        'Customer management and ticketing system (ClickUp)',
        'Daily monitoring and activity reporting'
      ],
      icon: <Shield />,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      company: 'Bs Innova S.r.l.',
      location: 'Via Ezio Maccani 135 (TN)',
      role: 'Stage - Sistemista Linux',
      period: 'Ottobre 2023 - Dicembre 2023',
      type: 'Stage',
      responsibilities: [
        'Professional experience in systematic Linux environment (debian based distros,web servers,containers)',
        'cve vulnerability management and patching in specific GLPI (CVE-2022-35914) mitigation and remediation',
        'Linux infrastructure management and configuration',
        'Monitoring, support and minor maintenance of corporate infrastructures',
        'Server virtualization management proxmox environment',
      ],
      icon: <Server />,
      color: 'from-blue-500 to-purple-500'
    },
    {
      company: 'Bs Innova S.r.l.',
      location: 'Via dei Solteri 74',
      role: 'Stage - Network operations and Security Systems',
      period: 'Giugno 2024 - Luglio 2024',
      type: 'Stage',
      responsibilities: [
        'Fortinet firewall best practices for IPS and IDS systems application control study and management',
        'Creating network schemas and diagrams for internal use and customer delivery',
        'reverse engineering of clients network infrastructures for security analysis and monitoring',
        'Creation of network diagrams using microsoft visio',
        'Dedicated lab environment development and testing creatinga lab rack with cisco, fortinet firewalls, routers and switches for network simulation',
      ],
      icon: <Network />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      company: 'Bs Innova S.r.l.',
      location: 'Via dei Solteri 74',
      role: 'Stage - Gestione Server Linux',
      period: 'Ottobre 2023 - Dicembre 2023',
      type: 'Stage',
      responsibilities: [
        'Essential Linux server management',
        'Proxmox local resources management',
        'Storage system management including backup of essential data',
        'Creation of Docker containers for various activities',
        'Advanced endpoint and server monitoring with CheckMK, Zabbix, Grafana',
        'Data exploration using Elasticsearch to identify potential system vulnerabilities',
        'Vulnerability assessment with ELK system',
        'Monitoring and reporting of customer data and activity management'
      ],
      icon: <Activity />,
      color: 'from-pink-500 to-red-500'
    },
    {
      company: 'Bs Innova S.r.l.',
      location: 'Via dei Solteri 74',
      role: 'Stage - Network and Security System Engineer',
      period: 'Gennaio 2024 - Marzo 2024',
      type: 'Stage',
      responsibilities: [
        'Level 1 monitoring project management',
        'H24 monitoring management and operations',
        'Checkpoint firewall fundamental operations',
        'SecGX firewall inventorying and security analysis',
        'Trellix IPS/IDS and Cisco inventorying',
        'Advanced security patch inventorying',
        'Vulnerability management with Qualys and Nessus',
        'Direct ticketing with customer contacts',
        'Parallel activity as consultant and support for activity montage'
      ],
      icon: <Shield />,
      color: 'from-red-500 to-orange-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Navigation Bar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-black/30 backdrop-blur-lg border-b border-white/10' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            SC
          </div>
          <div className="hidden md:flex gap-8">
            {['home', 'about', 'experience', 'skills', 'qualifications'].map(section => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-all duration-300 hover:text-cyan-400 ${activeSection === section ? 'text-cyan-400 font-semibold' : 'text-white/70'}`}
              >
                {section}
              </button>
            ))}
          </div>
          <button
            onClick={handleDownloadCV}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105"
          >
            <Download size={18} />
            <span className="hidden md:inline">Download CV</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full animate-pulse"
              style={{
                width: Math.random() * 4 + 1 + 'px',
                height: Math.random() * 4 + 1 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animationDelay: Math.random() * 3 + 's',
                animationDuration: Math.random() * 3 + 2 + 's'
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 text-center px-6 my-20" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
          <div className="mb-6 inline-block">
            {/* <div className="w-32 h-32 rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 p-1 animate-spin-slow"> */}
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
          <h1 className="text-5xl md:text-8xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Stefano Cestari
            </span>
          </h1>
          <p className="text-xl md:text-3xl text-white/80 mb-4 animate-fade-in-delay">
            Network & Security System Engineer
          </p>
          <p className="text-lg md:text-xl text-cyan-400 mb-8 animate-fade-in-delay">
            ICT Specialist | SOC Analyst | System Administrator
          </p>
          <div className="flex gap-4 justify-center mb-8 animate-fade-in-delay-2">
            <a href="https://www.linkedin.com/in/stefano-cestari-a7a730264/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 backdrop-blur-lg rounded-full hover:bg-white/20 transition-all hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="mailto:stefano@example.com" className="p-3 bg-white/10 backdrop-blur-lg rounded-full hover:bg-white/20 transition-all hover:scale-110">
              <Mail size={24} />
            </a>
            <a href="#" className="p-3 bg-white/10 backdrop-blur-lg rounded-full hover:bg-white/20 transition-all hover:scale-110">
              <Github size={24} />
            </a>
          </div>
          <button
            onClick={handleDownloadCV}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all hover:scale-105 mb-12 animate-fade-in-delay-2"
          >
            <FileText size={24} />
            Download Full CV
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce block mx-auto"
          >
            <ChevronDown size={40} className="text-cyan-400" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 hover:border-purple-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
            <p className="text-xl text-white/80 leading-relaxed mb-6">
              I'm a Technical IT Specialist with a strong passion for ICT and a solid background in cybersecurity operations. 
              My expertise includes SOC L1 analysis, incident triage, and SIEM rule management, ensuring resilient and secure infrastructures.
            </p>

            <p className="text-xl text-white/80 leading-relaxed mb-6">
              During my experience at <span className="text-cyan-400 font-semibold">Bs Innova S.r.l.</span> (January – June 2025), 
              I worked across multiple domains including Network and Security System Engineering, Linux system administration, 
              software development, and advanced security monitoring.
            </p>

            <p className="text-xl text-white/80 leading-relaxed mb-6">
              Since <span className="text-cyan-400 font-semibold">September 1st, 2025</span>, I have been working at 
              <span className="text-cyan-400 font-semibold"> Xenos S.r.l.</span> under a one–year contract as a System Administrator and Networking Operator.
              My responsibilities involve managing Windows Server endpoints, Linux VM infrastructures, VMware environments, Synology NAS systems, 
              Nakivo backup solutions, and various on-demand client-side systems, providing flexible and reliable technical support.
            </p>

            <p className="text-xl text-white/80 leading-relaxed mb-6">
              My technical skill set spans Check Point and SecGX firewall administration, IPS/IDS operations with Trellix and Cisco, 
              vulnerability management with Qualys and Nessus, and extensive network monitoring using Netscout and Paessler solutions.
            </p>

            <p className="text-xl text-white/80 leading-relaxed">
              Outside of work, I enjoy playing guitar and singing, sports like volleyball and gym training, mountain excursions, and travel. 
              I strongly believe that continuous learning is essential for staying ahead in the fast-evolving IT industry.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="text-center p-6 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm min-h-[180px] flex flex-col items-center justify-center">
                <Shield size={40} className="mx-auto mb-3 text-cyan-400" />
                <div className="text-2xl font-bold text-cyan-400 mb-2 whitespace-nowrap">Security</div>
                <div className="text-white/60 text-sm">SOC & Firewall</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl backdrop-blur-sm min-h-[180px] flex flex-col items-center justify-center">
                <Server size={40} className="mx-auto mb-3 text-purple-400" />
                <div className="text-2xl font-bold text-purple-400 mb-2 whitespace-nowrap">SysAdmin</div>
                <div className="text-white/60 text-sm">Linux & Windows</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-2xl backdrop-blur-sm min-h-[180px] flex flex-col items-center justify-center">
                <Network size={40} className="mx-auto mb-3 text-pink-400" />
                <div className="text-2xl font-bold text-pink-400 mb-2 whitespace-nowrap">Network</div>
                <div className="text-white/60 text-sm">Analysis & Configuring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20">
                <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
                  <div className={`p-4 bg-gradient-to-br ${exp.color} rounded-2xl flex-shrink-0`}>
                    {exp.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{exp.role}</h3>
                    <p className="text-xl text-cyan-400 mb-1">{exp.company}</p>
                    <p className="text-white/60 mb-2">{exp.location}</p>
                    <div className="flex flex-wrap gap-2 items-center">
                      <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">{exp.period}</span>
                      <span className="px-3 py-1 bg-cyan-500/20 rounded-full text-sm">{exp.type}</span>
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  {exp.responsibilities.map((resp, j) => (
                    <div key={j} className="flex items-start gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all">
                      <div className="text-cyan-400 mt-1 flex-shrink-0">
                        <Zap size={16} />
                      </div>
                      <p className="text-sm text-white/80">{resp}</p>
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
      <section id="qualifications" className="min-h-screen py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Education & Qualifications
          </h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-400 to-pink-400"></div>
            {qualifications.map((qual, i) => (
              <div key={i} className="relative pl-20 pb-12 group">
                <div className="absolute left-6 w-5 h-5 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full border-4 border-slate-900 group-hover:scale-150 transition-transform duration-300"></div>
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
                  <div className="text-cyan-400 font-bold mb-2">{qual.year}</div>
                  <h3 className="text-2xl font-bold mb-2">{qual.title}</h3>
                  <p className="text-purple-400 mb-3">{qual.institution}</p>
                  <p className="text-white/70">{qual.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-6 mb-6">
            <a href="https://www.linkedin.com/in/stefano-cestari-a7a730264/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-cyan-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:stefano@example.com" className="text-white/70 hover:text-cyan-400 transition-colors">
              <Mail size={24} />
            </a>
            <a href="#" className="text-white/70 hover:text-cyan-400 transition-colors">
              <Github size={24} />
            </a>
          </div>
          <p className="text-white/50 mb-4">© 2025 Cestari Stefano - Network & Security System Engineer</p>
          <button
            onClick={handleDownloadCV}
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <Download size={18} />
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
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}