import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-space-900"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className="flex flex-col items-center gap-4">
            <motion.div
              className="font-display text-3xl font-semibold text-gradient"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Om Patel
            </motion.div>
            <div className="h-[3px] w-40 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full w-full bg-gradient-to-r from-indigo-400 via-cyan-400 to-violet-400"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
            <p className="eyebrow text-xs text-ink-500">// compiling portfolio</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
