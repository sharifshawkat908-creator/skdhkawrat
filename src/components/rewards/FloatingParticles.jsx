import { motion, useReducedMotion } from 'framer-motion';

const COIN_COLORS = ['#fbbf24', '#f59e0b', '#d4af37', '#ffffff'];

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

const PARTICLES = [
  { kind: 'coin', x: 6, y: 20, delay: 0 },
  { kind: 'star', x: 92, y: 28, delay: 0.5 },
  { kind: 'coin', x: 14, y: 62, delay: 1 },
  { kind: 'star', x: 88, y: 56, delay: 1.5 },
  { kind: 'coin', x: 4, y: 84, delay: 2 },
  { kind: 'star', x: 94, y: 74, delay: 2.5 },
  { kind: 'coin', x: 22, y: 42, delay: 0.8 },
  { kind: 'star', x: 80, y: 18, delay: 1.2 },
  { kind: 'coin', x: 90, y: 40, delay: 0.3 },
  { kind: 'star', x: 12, y: 10, delay: 1.8 },
].map((p) => ({
  ...p,
  color: p.kind === 'coin' ? pick(COIN_COLORS) : '#ffffff',
  duration: 3 + Math.random() * 2,
}));

export function FloatingParticle({ kind, x, y, delay, color, duration }) {
  const prefersReduced = useReducedMotion();
  const size = kind === 'coin' ? 5 : 4;
  const distance = kind === 'coin' ? 14 : 10;

  const floatStyle = prefersReduced
    ? {}
    : {
        y: [0, -distance, 0],
        x: [0, Math.sin(delay) * 6, 0],
        opacity: [0.35, 1, 0.35],
        rotate: [0, 180, 360],
      };

  return (
    <motion.div
      className="pointer-events-none rounded-full shadow"
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        background: color,
        boxShadow: `0 0 10px ${color}`,
        opacity: prefersReduced ? 0.6 : 0,
      }}
      animate={floatStyle}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    />
  );
}

export function FloatingParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {PARTICLES.map((p, i) => (
        <FloatingParticle key={i} {...p} />
      ))}
    </div>
  );
}
