import { FiAward } from 'react-icons/fi';
import { education } from '../data';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function Education() {
  return (
    <section id="education" className="relative px-6 py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="education.log" title="Academic background" />

        <div className="relative mt-16 pl-8 sm:pl-10">
          <div className="absolute left-[7px] top-0 h-full w-px bg-gradient-to-b from-violet-400/60 via-indigo-400/60 to-transparent sm:left-[11px]" />

          <div className="space-y-10">
            {education.map((ed, i) => (
              <Reveal key={ed.degree} delay={i * 0.1} className="relative">
                <span className="absolute -left-8 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-violet-400 to-indigo-400 shadow-glow-violet sm:-left-10 sm:h-5 sm:w-5">
                  <FiAward className="text-space-900" size={10} />
                </span>
                <div className="glass shadow-glass rounded-2xl p-6 transition-transform hover:-translate-y-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-base font-semibold text-ink-100">
                      {ed.degree}
                    </h3>
                    <span className="eyebrow text-xs">{ed.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-ink-300">{ed.school}</p>
                  <span className="mt-3 inline-block rounded-full bg-gradient-to-r from-violet-500/20 to-cyan-400/20 px-3 py-1 text-xs font-semibold text-cyan-300">
                    {ed.detail}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
