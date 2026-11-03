import { motion } from 'framer-motion';

export function GiftBox({ size = 80, className = '' }) {
  return (
    <motion.div
      className={`relative inline-block ${className}`}
      style={{ width: size, height: size }}
      animate={{ y: [0, -10, 0], scale: [1, 1.04, 1] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {/* Gift shadow */}
      <div
        className="absolute -bottom-4 left-1/4 right-1/4 h-1 bg-black/40 rounded-full blur-sm"
        style={{ opacity: 0.35 }}
        animate={{ scaleX: [1, 0.7, 1], opacity: [0.35, 0.15, 0.35] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Box body */}
      <div className="relative z-10 w-full h-full rounded-xl border-2 border-white/20 bg-gradient-to-b from-amber-300 via-amber-500 to-amber-700 shadow-[0_0_30px_rgba(212,175,55,0.55)]">
        <div className="absolute inset-0 rounded-xl border-t-2 border-white/40" />
        {/* Top rim highlight */}
        <div className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-r from-white/60 via-transparent to-white/60 rounded-t-xl" />
        {/* Lid line */}
        <div className="absolute top-1/3 left-0 right-0 h-1 bg-gradient-to-r from-amber-900 via-white/30 to-amber-900" />
        {/* Lid */}
        <div className="absolute -top-1 left-0 right-0 h-1/5 bg-gradient-to-b from-amber-400 to-amber-600 rounded-t-xl border-b border-amber-800/60" />
        {/* Center jewel */}
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)] ring-2 ring-amber-300" />
        {/* Ribbon vertical */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1/4 bg-gradient-to-b from-rose-700 to-rose-900" />
        {/* Ribbon horizontal */}
        <div className="absolute top-1/3 left-0 right-0 h-1/4 bg-gradient-to-r from-rose-700 to-rose-900" />
        {/* Bow knot */}
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-rose-600 rounded-full rotate-45 shadow-[0_0_10px_rgba(190,30,45,0.6)]" />
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-rose-600 rounded-full -rotate-45 shadow-[0_0_10px_rgba(190,30,45,0.6)]" />
        {/* Bow loops */}
        <div className="absolute left-1/2 top-1/5 -translate-x-1/2 w-4 h-4 bg-rose-700 rounded-full rotate-45 opacity-90" />
        <div className="absolute left-1/2 top-1/5 -translate-x-1/2 w-4 h-4 bg-rose-700 rounded-full -rotate-45 opacity-90" />
        <div className="absolute left-1/2 top-[calc(1/3+4px)] -translate-x-1/2 w-4 h-4 bg-rose-800 rounded-full" />
      </div>

      {/* Sparkles around gift */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_#fff]"
            style={{
              left: `${50 + 26 * Math.cos((i / 5) * Math.PI * 2)}%`,
              top: `${50 + 26 * Math.sin((i / 5) * Math.PI * 2)}%`,
              opacity: 0,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.4,
              ease: 'easeInOut',
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
