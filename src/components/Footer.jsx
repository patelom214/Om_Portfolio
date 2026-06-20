import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { profile } from '../data';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-display text-lg font-semibold text-gradient">Om Patel</p>
          <p className="mt-1 text-xs text-ink-500">
            Full Stack Developer · Built with React, Tailwind & Framer Motion
          </p>
        </div>

        <div className="flex items-center gap-3">
          {[
            { icon: FiGithub, href: profile.github },
            { icon: FiLinkedin, href: profile.linkedin },
            { icon: FiMail, href: `mailto:${profile.email}` },
          ].map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noreferrer"
              data-cursor="hover"
              className="glass flex h-9 w-9 items-center justify-center rounded-full text-ink-300 transition-colors hover:text-cyan-300"
            >
              <Icon size={14} />
            </a>
          ))}
        </div>
      </div>
      <p className="mt-6 flex items-center justify-center gap-1 text-center text-xs text-ink-500">
        © {new Date().getFullYear()} Om Patel. Made with <FiHeart className="text-rose-400" size={12} /> and a lot of coffee.
      </p>
    </footer>
  );
}
