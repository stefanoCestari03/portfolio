import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function StagePanel({ id, stageProgressRef, children, align = 'left' }) {
  const wrapperRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const panel = panelRef.current;
    if (!wrapper || !panel) return;

    gsap.set(panel, { opacity: 0, y: 40 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.6,
        onUpdate: (self) => {
          if (stageProgressRef.current) stageProgressRef.current[id] = self.progress;
        }
      }
    });

    tl.to(panel, { opacity: 1, y: 0, duration: 0.15, ease: 'power2.out' }, 0)
      .to(panel, { opacity: 1, y: 0, duration: 0.7 }, 0.15)
      .to(panel, { opacity: 0, y: -40, duration: 0.15, ease: 'power2.in' }, 0.85);

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [id, stageProgressRef]);

  return (
    <section id={id} ref={wrapperRef} className="relative h-[180vh]">
      <div
        className={`sticky top-0 h-[100svh] flex items-center px-6 md:px-16 ${
          align === 'right' ? 'justify-end text-right' : 'justify-start text-left'
        }`}
      >
        <div ref={panelRef} className="max-w-xl">
          {children}
        </div>
      </div>
    </section>
  );
}
