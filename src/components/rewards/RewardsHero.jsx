import { motion, AnimatePresence } from 'framer-motion';
import { GiftBox } from './GiftBox';
import { FloatingParticles } from './FloatingParticles';
import { Button } from '../Button';

const HEADLINE = 'UNLOCK YOUR EXCLUSIVE REWARDS';
const SUBTITLE =
  'Discover exciting rewards and explore exclusive offers. Premium bonuses for eligible members.';

const wordVariants = {
  hidden: { opacity: 0, y: 20, rotateX: 18 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, ease: 'backOut' },
  },
};

export default function RewardsHero({ onClaim }) {
  const words = HEADLINE.split(' ');

  return (
    <section id="hero" className="relative overflow-hidden section-padding" aria-labelledby="hero-heading">
      {/* Animated background gradients */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute top-[-12%] left-[-8%] w-[55%] h-[55%] bg-casino-neon/12 rounded-full blur-[128px]"
          style={{ animation: 'float 8s ease-in-out infinite' }}
        />
        <div
          className="absolute bottom-[-12%] right-[-8%] w-[50%] h-[50%] bg-casino-blue/14 rounded-full blur-[128px]"
          style={{ animation: 'float 10s ease-in-out infinite', animationDelay: '2s' }}
        />
        <div
          className="absolute top-[25%] left-[45%] w-[40%] h-[40%] bg-casino-gold/10 rounded-full blur-[112px]"
          style={{ animation: 'float 7s ease-in-out infinite', animationDelay: '4s' }}
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-casino-panel via-casino-panel/80 to-casino-neon/5 pointer-events-none" />
      </div>

      <FloatingParticles />

      <AnimatePresence mode="wait">
        <motion.div
          className="relative z-10 section-container text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -24 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-10 sm:mb-12 lg:mb-16">
            <GiftBox size={110} className="mx-auto" />
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/14 text-casino-gold text-xs font-bold tracking-wider uppercase mb-8 backdrop-blur-sm">
            <span aria-hidden="true">✨</span>
            Demo Experience
          </div>

          <h1 id="hero-heading" className="display-xl mb-6 sm:mb-8 lg:mb-10 text-white font-display font-bold tracking-tighter">
            {words.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block"
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: i * 0.08 }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 max-w-xl mx-auto mb-12 lg:mb-16 leading-relaxed">
            {SUBTITLE}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5">
            <Button
              variant="primary"
              size="lg"
              className="text-white shadow-[0_0_24px_rgba(176,42,142,0.55)] hover:shadow-neon-lg"
              onClick={() => onClaim && onClaim('welcome')}
            >
              CLAIM YOUR REWARD
            </Button>
          </div>

          <p className="mt-6 sm:mt-8 text-xs text-slate-500 leading-relaxed max-w-xl mx-auto">
            This is a clearly labeled demo. No real rewards are issued without a connected backend.
          </p>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
