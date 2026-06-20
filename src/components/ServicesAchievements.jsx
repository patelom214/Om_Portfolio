import { FiCheckCircle } from 'react-icons/fi';
import { services, achievements } from '../data';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function ServicesAchievements() {
  return (
    <section id="services" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="services/" title="What I can help you build" />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="glass shadow-glass h-full rounded-2xl p-6 transition-transform hover:-translate-y-1.5">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 font-display text-sm font-bold text-white">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-display text-base font-semibold text-ink-100">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">{s.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20">
          <SectionHeading eyebrow="achievements/" title="Highlights so far" />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((a, i) => (
              <Reveal key={a} delay={i * 0.06}>
                <div className="glass flex items-start gap-3 rounded-xl p-4 transition-transform hover:-translate-y-1">
                  <FiCheckCircle className="mt-0.5 flex-shrink-0 text-cyan-300" size={18} />
                  <span className="text-sm text-ink-200">{a}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
