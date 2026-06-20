import { FiMessageSquare } from 'react-icons/fi';
import { testimonials } from '../data';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="feedback/" title="What people say" />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div className="glass shadow-glass flex h-full flex-col rounded-2xl p-6 transition-transform hover:-translate-y-1.5">
                <FiMessageSquare className="mb-3 text-violet-400" size={22} />
                <p className="flex-1 text-sm leading-relaxed text-ink-300">"{t.quote}"</p>
                <div className="mt-5 border-t border-white/10 pt-4">
                  <p className="text-sm font-semibold text-ink-100">{t.name}</p>
                  <p className="text-xs text-ink-500">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
