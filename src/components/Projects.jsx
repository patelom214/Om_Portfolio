import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects } from '../data';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const accentMap = {
  indigo: 'from-indigo-500/25 to-indigo-500/0 group-hover:shadow-glow-violet border-indigo-400/20',
  cyan: 'from-cyan-500/25 to-cyan-500/0 group-hover:shadow-glow-cyan border-cyan-400/20',
  violet: 'from-violet-500/25 to-violet-500/0 group-hover:shadow-glow-violet border-violet-400/20',
};

function allTechs() {
  const set = new Set();
  projects.forEach((p) => p.tech.forEach((t) => set.add(t)));
  return ['All', ...Array.from(set)];
}

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const filters = useMemo(() => allTechs(), []);

  const filtered =
    filter === 'All' ? projects : projects.filter((p) => p.tech.includes(filter));

  return (
    <section id="projects" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="projects/"
          title="Things I've built"
          subtitle="Each one started as a real problem, not a tutorial."
        />

        <Reveal delay={0.1} className="mt-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              data-cursor="hover"
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                filter === f
                  ? 'bg-gradient-to-r from-indigo-500 to-cyan-400 text-white shadow-glow-cyan'
                  : 'glass text-ink-300 hover:text-cyan-300'
              }`}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative"
              >
                <div
                  className={`glass shadow-glass relative h-full overflow-hidden rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1.5 ${
                    accentMap[project.accent]
                  }`}
                >
                  <div
                    className={`absolute inset-x-0 top-0 h-32 bg-gradient-to-b opacity-60 ${accentMap[project.accent]}`}
                  />

                  <div className="relative">
                    <div className="mb-4 flex h-28 items-center justify-center rounded-xl border border-white/10 bg-white/5 font-display text-xs text-ink-500">
                      <span className="eyebrow">/* project preview */</span>
                    </div>

                    <h3 className="font-display text-lg font-semibold text-ink-100">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-300">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md bg-white/5 px-2.5 py-1 font-mono text-[11px] text-cyan-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <ul className="mt-4 grid grid-cols-2 gap-1.5">
                      {project.features.slice(0, 6).map((f) => (
                        <li key={f} className="flex gap-1.5 text-xs text-ink-500">
                          <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-violet-400" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex gap-3">
                      <a
                        href={project.github}
                        data-cursor="hover"
                        className="glass flex flex-1 items-center justify-center gap-2 rounded-full py-2.5 text-xs font-semibold text-ink-100 transition-transform hover:scale-[1.03]"
                      >
                        <FiGithub size={14} /> Code
                      </a>
                      {/* <a
                        href={project.demo}
                        data-cursor="hover"
                        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 py-2.5 text-xs font-semibold text-white transition-transform hover:scale-[1.03]"
                      >
                        <FiExternalLink size={14} /> Live Demo
                      </a> */}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
