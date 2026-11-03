import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';
import { hero, stages, certifications, projects, contact } from '../data/stages';

export default function ReducedMotionView({ onDownloadCV }) {
  return (
    <div className="min-h-screen bg-[#05070a] text-white">
      <header className="flex justify-between items-center px-6 md:px-10 py-6 border-b border-white/10">
        <div className="text-sm font-semibold tracking-[0.3em]">SC</div>
        <button
          onClick={onDownloadCV}
          className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/80"
        >
          <ArrowUpRight size={14} />
          Download CV
        </button>
      </header>

      <section className="px-6 md:px-16 py-20 border-b border-white/10">
        <h1 className="text-4xl md:text-6xl font-semibold uppercase tracking-tight mb-3">{hero.name}</h1>
        <p className="text-sm md:text-base uppercase tracking-[0.2em]" style={{ color: hero.color }}>
          {hero.role}
        </p>
      </section>

      {stages.map((stage) => (
        <section key={stage.id} className="px-6 md:px-16 py-16 border-b border-white/10">
          <div className="text-[11px] uppercase tracking-[0.3em] text-white/40 mb-3">{stage.index}</div>
          <h2 className="text-2xl md:text-3xl font-semibold uppercase tracking-tight mb-1">{stage.role}</h2>
          <p className="text-sm uppercase tracking-wide mb-1" style={{ color: stage.color }}>
            {stage.company}
          </p>
          <p className="text-xs text-white/45 mb-6">
            {stage.period} — {stage.location}
          </p>
          <ul className="space-y-2">
            {stage.bullets.map((b, i) => (
              <li key={i} className="text-sm text-white/70 leading-relaxed">
                {b}
              </li>
            ))}
          </ul>
          {stage.note && <p className="mt-6 text-sm text-white/80 border border-white/20 inline-block px-4 py-2">{stage.note}</p>}
        </section>
      ))}

      <section className="px-6 md:px-16 py-16 border-b border-white/10">
        <div className="text-[11px] uppercase tracking-[0.3em] text-white/40 mb-3">{certifications.index}</div>
        <h2 className="text-2xl md:text-3xl font-semibold uppercase tracking-tight mb-6">{certifications.title}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-white/40 mb-3">Certificazioni</h3>
            <ul className="space-y-3">
              {certifications.certifications.map((c, i) => (
                <li key={i} className="text-sm text-white/75">
                  <span style={{ color: certifications.color }}>{c.year}</span> — {c.title} ({c.institution})
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-white/40 mb-3">Formazione</h3>
            <ul className="space-y-3">
              {certifications.education.map((e, i) => (
                <li key={i} className="text-sm text-white/75">
                  <span style={{ color: certifications.color }}>{e.year}</span> — {e.title} ({e.institution})
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-16 py-16 border-b border-white/10">
        <div className="text-[11px] uppercase tracking-[0.3em] text-white/40 mb-3">{projects.index}</div>
        <h2 className="text-2xl md:text-3xl font-semibold uppercase tracking-tight mb-6">Progetti</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {projects.items.map((p, i) => (
            <div key={i} className="border border-white/15 p-6">
              <span className="text-[11px] uppercase tracking-wide" style={{ color: projects.color }}>
                {p.tag}
              </span>
              <h3 className="text-lg font-semibold uppercase tracking-tight my-2">{p.title}</h3>
              <p className="text-sm text-white/70">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-16 py-20 text-center">
        <div className="text-[11px] uppercase tracking-[0.3em] text-white/40 mb-6">{contact.index}</div>
        <h2 className="text-2xl md:text-3xl font-semibold uppercase tracking-tight mb-8">Contatti</h2>
        <div className="flex justify-center gap-8">
          <a href={`mailto:${contact.email}`} className="text-white/70 hover:text-white">
            <Mail size={22} />
          </a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">
            <Linkedin size={22} />
          </a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">
            <Github size={22} />
          </a>
        </div>
      </section>
    </div>
  );
}
