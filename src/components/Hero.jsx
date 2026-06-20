import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight } from 'react-icons/fi';
import { profile } from '../data';
import ProfilePhoto from './ProfilePhoto';

function useTypewriter(words, speed = 65, pause = 1400) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), speed);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 1.6);
    } else if (deleting && text.length === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setWordIndex((i) => i + 1);
      }, speed);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-28 pb-16"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left: intro */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="eyebrow inline-block rounded-full border border-cyan-400/30 bg-cyan-400/5 px-3 py-1 text-xs">
            // available for full-time roles
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
            Hi, I'm{' '}
            <span className="text-gradient block sm:inline">{profile.name}</span>
          </h1>

          <div className="mt-4 h-8 font-mono text-lg text-cyan-300 sm:text-xl">
            <span>{typed}</span>
            <span className="ml-0.5 inline-block w-[2px] animate-pulse-slow bg-cyan-300 align-middle h-6" />
          </div>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-300">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <a
              href={profile.resumeUrl}
              data-cursor="hover"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-glow-violet transition-transform hover:scale-[1.03]"
            >
              <FiDownload size={15} /> Download Resume
            </a>
            <a
              href="#projects"
              data-cursor="hover"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-ink-100 transition-transform hover:scale-[1.03]"
            >
              View Projects <FiArrowRight size={15} />
            </a>
            <a
              href="#contact"
              data-cursor="hover"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-ink-300 underline-offset-4 hover:text-cyan-300 hover:underline"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-9 flex items-center gap-4">
            {[
              { icon: FiGithub, href: profile.github, label: 'GitHub' },
              { icon: FiLinkedin, href: profile.linkedin, label: 'LinkedIn' },
              { icon: FiMail, href: `mailto:${profile.email}`, label: 'Email' },
            ].map(({ icon: Icon, href, label }) => {
              const isEmailLink = label === 'Email';

              return (
                <a
                  key={label}
                  href={href}
                  target={isEmailLink ? undefined : '_blank'}
                  rel={isEmailLink ? undefined : 'noreferrer'}
                  aria-label={label}
                  data-cursor="hover"
                  className="glass flex h-11 w-11 items-center justify-center rounded-full text-ink-200 transition-all hover:-translate-y-1 hover:text-cyan-300 hover:shadow-glow-cyan animate-float"
                  style={{ animationDelay: `${label.length * 0.15}s` }}
                >
                  <Icon size={17} />
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* Right: profile photo */}
        <ProfilePhoto />
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-500"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Scroll down"
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border-2 border-ink-500/50 p-1">
          <div className="h-1.5 w-1 rounded-full bg-cyan-300" />
        </div>
      </motion.a>
    </section>
  );
}
