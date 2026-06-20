import { motion } from 'framer-motion';
import { skills } from '../data';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="stack.json"
          title="Tools I reach for"
          subtitle="A working toolkit across frontend, backend, databases, and the languages underneath them."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, gi) => (
            <Reveal key={group.category} delay={gi * 0.08}>
              <div className="glass shadow-glass h-full rounded-2xl p-6">
                <h3 className="font-display text-base font-semibold text-ink-100">
                  {group.category}
                </h3>
                <div className="mt-5 space-y-4">
                  {group.items.map((item) => (
                    <div key={item.name}>
                      <div className="mb-1.5 flex items-center justify-between text-xs">
                        <span className="font-medium text-ink-200">{item.name}</span>
                        <span className="font-mono text-ink-500">{item.level}%</span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/8">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
