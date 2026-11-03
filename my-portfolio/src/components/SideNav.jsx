import { STAGE_COLORS } from '../data/stages';

export default function SideNav({ stages, activeId, onNavigate }) {
  return (
    <nav className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-4">
      {stages.map((s) => {
        const isActive = activeId === s.id;
        const color = STAGE_COLORS[s.id] || '#ffffff';
        return (
          <button
            key={s.id}
            onClick={() => onNavigate(s.id)}
            className="group flex items-center gap-3"
            aria-label={s.label}
            aria-current={isActive ? 'true' : undefined}
          >
            <span className="text-[10px] uppercase tracking-[0.15em] text-white/0 group-hover:text-white/70 transition-colors whitespace-nowrap">
              {s.label}
            </span>
            <span
              className="w-2 h-2 rounded-full border transition-colors"
              style={{
                backgroundColor: isActive ? color : 'transparent',
                borderColor: isActive ? color : 'rgba(255,255,255,0.35)'
              }}
            />
          </button>
        );
      })}
    </nav>
  );
}
