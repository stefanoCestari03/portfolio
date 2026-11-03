import { useEffect, useRef, useState, lazy, Suspense } from 'react';
import { Mail, Linkedin, Github, ArrowUpRight, ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import profileImg from '../assets/profile.jpg';
import { hero, navStages, stages, certifications, projects, contact } from '../data/stages';
import Header from './Header';
import SideNav from './SideNav';
import StagePanel from './StagePanel';
import ReducedMotionView from './ReducedMotionView';

const SignalJourneyScene = lazy(() => import('../three/SignalJourneyScene'));

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

export default function Portfolio() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [activeId, setActiveId] = useState('hero');
  const lenisRef = useRef(null);
  const stageProgressRef = useRef({});

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);

    const onMotionChange = (e) => setPrefersReducedMotion(e.matches);
    motionQuery.addEventListener('change', onMotionChange);
    return () => motionQuery.removeEventListener('change', onMotionChange);
  }, []);

  const handleDownloadCV = () => {
    const cvUrl = '/stefanocestaricv_2026_Autorizzazione.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'CV_Stefano_Cestari_2026.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    if (prefersReducedMotion) return;

    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    lenisRef.current = lenis;
    lenis.on('scroll', ScrollTrigger.update);

    const onTick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(onTick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const ids = navStages.map((s) => s.id);

    const handleScroll = () => {
      const current = ids.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
      });
      if (current) setActiveId(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prefersReducedMotion]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (lenisRef.current) {
      lenisRef.current.scrollTo(el, { duration: 1.2 });
    } else {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (prefersReducedMotion) {
    return <ReducedMotionView onDownloadCV={handleDownloadCV} />;
  }

  return (
    <div className="min-h-screen bg-[#05070a] text-white overflow-x-hidden">
      <Suspense fallback={null}>
        <SignalJourneyScene stageProgressRef={stageProgressRef} />
      </Suspense>

      <Header onDownloadCV={handleDownloadCV} />
      <SideNav stages={navStages} activeId={activeId} onNavigate={scrollToSection} />

      <div className="relative z-10">
        {/* Hero */}
        <section id="hero" className="relative h-[100svh] flex items-center px-6 md:px-16">
          <div className="max-w-2xl animate-fade-in">
            <div className="w-16 h-16 rounded-full overflow-hidden border border-white/25 mb-6">
              <img src={profileImg} alt={hero.name} className="w-full h-full object-cover" />
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold uppercase tracking-tight mb-4">{hero.name}</h1>
            <p className="text-sm md:text-base uppercase tracking-[0.25em]" style={{ color: hero.color }}>
              {hero.role}
            </p>
          </div>
          <button
            onClick={() => scrollToSection('training')}
            className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce"
            style={{ bottom: 'max(1.5rem, env(safe-area-inset-bottom, 1.5rem))' }}
            aria-label="Scorri"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">Scroll</span>
            <ChevronDown size={22} className="text-white/50" />
          </button>
        </section>

        {stages.map((stage) => (
          <StagePanel key={stage.id} id={stage.id} stageProgressRef={stageProgressRef}>
            <div className="text-[11px] uppercase tracking-[0.3em] text-white/40 mb-3">{stage.index}</div>
            <h2 className="text-2xl md:text-4xl font-semibold uppercase tracking-tight mb-2">{stage.role}</h2>
            <p className="text-sm uppercase tracking-wide mb-1" style={{ color: stage.color }}>
              {stage.company}
            </p>
            <p className="text-xs text-white/45 mb-6">
              {stage.period} — {stage.location}
            </p>
            <ul className="space-y-2">
              {stage.bullets.map((b, i) => (
                <li key={i} className="text-sm text-white/70 leading-relaxed border-l border-white/15 pl-3">
                  {b}
                </li>
              ))}
            </ul>
            {stage.note && (
              <p
                className="mt-6 text-sm text-white/85 border inline-block px-4 py-2"
                style={{ borderColor: `${stage.color}66` }}
              >
                {stage.note}
              </p>
            )}
          </StagePanel>
        ))}

        <StagePanel id="certifications" stageProgressRef={stageProgressRef} align="right">
          <div className="text-[11px] uppercase tracking-[0.3em] text-white/40 mb-3">{certifications.index}</div>
          <h2 className="text-2xl md:text-4xl font-semibold uppercase tracking-tight mb-6">{certifications.title}</h2>
          <div className="space-y-4">
            {certifications.certifications.map((c, i) => (
              <div key={i}>
                <div className="text-xs uppercase tracking-wide" style={{ color: certifications.color }}>
                  {c.year}
                </div>
                <div className="text-sm text-white/80">{c.title}</div>
                <div className="text-xs text-white/45">{c.institution}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-white/10 space-y-4">
            {certifications.education.map((e, i) => (
              <div key={i}>
                <div className="text-xs uppercase tracking-wide text-white/50">{e.year}</div>
                <div className="text-sm text-white/70">{e.title}</div>
                <div className="text-xs text-white/40">{e.institution}</div>
              </div>
            ))}
          </div>
        </StagePanel>

        <StagePanel id="projects" stageProgressRef={stageProgressRef}>
          <div className="text-[11px] uppercase tracking-[0.3em] text-white/40 mb-3">{projects.index}</div>
          <h2 className="text-2xl md:text-4xl font-semibold uppercase tracking-tight mb-6">Progetti</h2>
          <div className="space-y-5">
            {projects.items.map((p, i) => (
              <div key={i} className="border border-white/15 p-5">
                <span className="text-[11px] uppercase tracking-wide" style={{ color: projects.color }}>
                  {p.tag}
                </span>
                <h3 className="text-lg font-semibold uppercase tracking-tight my-2">{p.title}</h3>
                <p className="text-sm text-white/70">{p.desc}</p>
              </div>
            ))}
          </div>
        </StagePanel>

        {/* Contact — final resting state, not scrubbed */}
        <section id="contact" className="h-[100svh] flex flex-col items-center justify-center px-6 text-center">
          <div className="text-[11px] uppercase tracking-[0.3em] text-white/40 mb-6">{contact.index}</div>
          <h2 className="text-3xl md:text-5xl font-semibold uppercase tracking-tight mb-8">Contatti</h2>
          <div className="flex gap-8 mb-10">
            <a href={`mailto:${contact.email}`} className="text-white/70 hover:text-white transition-colors">
              <Mail size={26} />
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              <Linkedin size={26} />
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              <Github size={26} />
            </a>
          </div>
          <button
            onClick={handleDownloadCV}
            className="inline-flex items-center gap-3 px-7 py-3 border border-white/25 uppercase text-xs tracking-[0.2em] hover:bg-white hover:text-black transition-colors"
          >
            <ArrowUpRight size={16} />
            Download CV
          </button>
        </section>
      </div>
    </div>
  );
}
