export default function VersionToggle({ version, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="fixed bottom-5 left-5 z-[100] flex items-center gap-2 px-4 py-2 bg-black/70 backdrop-blur border border-white/20 text-[11px] uppercase tracking-[0.15em] text-white/80 hover:text-white hover:border-white/50 transition-colors rounded-full"
    >
      {version === 'immersive' ? 'Versione classica' : 'Versione immersiva'}
    </button>
  );
}
