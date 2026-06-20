import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { profile, stats } from '../data';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

function Counter({ value, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const startTime = performance.now();

    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
      else setCount(value);
    }
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-3xl font-bold text-gradient sm:text-4xl">
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="whoami"
          title="A developer who finishes what the spec started."
        />

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-ink-300">{profile.about}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Problem solver', 'API-minded', 'Detail-oriented', 'Fast learner'].map((tag) => (
                <span
                  key={tag}
                  className="glass rounded-full px-4 py-1.5 text-xs font-medium text-ink-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="glass shadow-glass rounded-2xl p-6 text-center transition-transform hover:-translate-y-1"
                >
                  <Counter value={s.value} suffix={s.suffix} />
                  <p className="mt-2 text-xs font-medium text-ink-500">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
