import { motion } from 'framer-motion';
import { profile } from '../data';

export default function ProfilePhoto() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      className="relative mx-auto flex w-full max-w-md items-center justify-center"
    >
      <div className="relative h-72 w-72 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
        {/* Outer ambient glow blur */}
        <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-indigo-500/30 via-violet-500/20 to-cyan-400/30 blur-3xl" />

        {/* Rotating gradient ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              'conic-gradient(from 0deg, #6366f1, #22d3ee, #a855f7, #6366f1)',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        />

        {/* Blinking pulse ring */}
        <motion.div
          className="absolute -inset-2 rounded-full border-2 border-cyan-300/70"
          animate={{ opacity: [0.25, 0.9, 0.25], scale: [1, 1.03, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Inner photo, inset slightly to reveal the rotating ring as a border */}
        <div className="glass absolute inset-[6px] overflow-hidden rounded-full border border-white/10">
          <img
            src={profile.photoUrl}
            alt={profile.name}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Status badge */}
        <motion.div
          className="glass absolute bottom-2 right-2 flex items-center gap-1.5 rounded-full px-3 py-1.5 shadow-glow-cyan"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <motion.span
            className="h-2 w-2 rounded-full bg-green-400"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <span className="font-mono text-[11px] text-ink-100">open_to_work</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
