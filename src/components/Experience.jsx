import { FiBriefcase } from 'react-icons/fi';
import { experience } from '../data';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="career.log"
          title="Where I've worked"
          subtitle="Real internships, real codebases, real constraints."
        />

        <div className="relative mt-16 pl-8 sm:pl-10">
          <div className="absolute left-[7px] top-0 h-full w-px bg-gradient-to-b from-indigo-400/60 via-cyan-400/60 to-transparent sm:left-[11px]" />

          <div className="space-y-12">
            {experience.map((job, i) => (
              <Reveal key={job.role} delay={i * 0.1} className="relative">
                <span className="absolute -left-8 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-cyan-400 shadow-glow-cyan sm:-left-10 sm:h-5 sm:w-5">
                  <FiBriefcase className="text-space-900" size={10} />
                </span>

                <div className="glass shadow-glass rounded-2xl p-6 transition-transform hover:-translate-y-1 sm:p-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold text-ink-100">
                      {job.role}
                    </h3>
                    <span className="eyebrow text-xs">{job.period}</span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-cyan-300">{job.company}</p>
                  <ul className="mt-4 space-y-2">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-2.5 text-sm text-ink-300">
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-violet-400" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
