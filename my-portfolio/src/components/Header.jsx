import { ArrowUpRight } from 'lucide-react';

export default function Header({ onDownloadCV }) {
  return (
    <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-10 py-5">
      <div className="text-sm font-semibold tracking-[0.3em] text-white">SC</div>
      <button
        onClick={onDownloadCV}
        className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/80 hover:text-white transition-colors"
      >
        <ArrowUpRight size={14} />
        Download CV
      </button>
    </header>
  );
}
