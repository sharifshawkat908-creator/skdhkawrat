import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { claimRewardDemo, IS_DEMO } from '../../utils/rewardsApi';
import { Icon } from '../Icon';
import { Button } from '../Button';

const REWARD_DETAILS = {
  welcome: {
    title: 'Welcome Reward',
    icon: 'gift',
    value: '100 Bonus Credits',
    eligibility: [
      'New eligible member completing registration.',
      'Must be 18+ (or legal age in your jurisdiction).',
      'Account verification required before crediting.',
      'One claim per eligible member.',
    ],
    process: [
      'Verify your account and age eligibility.',
      'Confirm the reward selection.',
      'Server validates eligibility and prevents duplicate claims.',
      'Reward is credited upon successful validation.',
    ],
  },
  daily: {
    title: 'Daily Bonus',
    icon: 'clock',
    value: '25 Bonus Credits',
    eligibility: [
      'Registered and verified member.',
      'Log in once per calendar day.',
      'One claim per day per member.',
      'No minimum deposit required.',
    ],
    process: [
      'Confirm daily login eligibility.',
      'Server checks for existing today claim.',
      'Reward credited after eligibility validation.',
    ],
  },
  exclusive: {
    title: 'Exclusive Gift',
    icon: 'crown',
    value: '500 Bonus Credits',
    eligibility: [
      'VIP eligibility criteria must be met.',
      'Invite-only or qualification-based offer.',
      'Account in good standing.',
      'Geographic restrictions may apply.',
    ],
    process: [
      'Confirm VIP eligibility on the server.',
      'Review offer terms and expiration.',
      'Submit claim for server-side validation.',
      'Reward credited if eligible.',
    ],
  },
  vip: {
    title: 'VIP Reward',
    icon: 'chip',
    value: '1,000 Bonus Credits',
    eligibility: [
      'Qualifying long-term member status.',
      'Minimum activity threshold met.',
      'VIP tier enrollment required.',
      'Subject to VIP program terms.',
    ],
    process: [
      'Verify VIP tier enrollment.',
      'Validate activity threshold server-side.',
      'Review VIP reward terms.',
      'Claim processed upon confirmation.',
    ],
  },
  special: {
    title: 'Special Offers',
    icon: 'rocket',
    value: 'Deposit Match',
    eligibility: [
      'Eligible deposit required.',
      'Promo period must be active.',
      'Wagering requirements may apply.',
      'One claim per promotional period.',
    ],
    process: [
      'Make a qualifying deposit.',
      'Enter the offer code if required.',
      'Server validates deposit and offer.',
      'Match credited after validation.',
    ],
  },
  mystery: {
    title: 'Mystery Box',
    icon: 'dice',
    value: 'Surprise Reward',
    eligibility: [
      'Registered eligible member.',
      'Reward contents revealed after claim.',
      'One mystery box per member.',
      'Subject to availability.',
    ],
    process: [
      'Confirm eligibility for mystery box.',
      'Server assigns a random reward.',
      'Claim processed server-side.',
      'Reward revealed upon success.',
    ],
  },
};

const modalVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.25 },
  },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const contentVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 300, damping: 30 },
  },
  exit: { opacity: 0, y: 24, scale: 0.95, transition: { duration: 0.2 } },
};

const spinner = (
  <svg className="w-5 h-5 text-casino-gold animate-[spin:1s_linear_infinite]" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

export default function ClaimModal({ isOpen, rewardId, onClose }) {
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'failure'
  const [result, setResult] = useState(null);

  const detail = REWARD_DETAILS[rewardId];

  const handleClaim = useCallback(async () => {
    setStatus('loading');
    setResult(null);
    try {
      const response = await claimRewardDemo(rewardId);
      // Never show success unless the backend confirms it (response.ok === true).
      if (response.ok) {
        setStatus('success');
        setResult(response);
      } else {
        setStatus('failure');
        setResult(response);
      }
    } catch {
      setStatus('failure');
      setResult({ ok: false, reason: 'Unable to reach the rewards server. Please try again.' });
    }
  }, [rewardId]);

  if (!detail) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="hidden"
          animate={modalVariants.visible}
          exit={modalVariants.exit}
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Claim Reward"
        >
        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative w-full max-w-sm rounded-3xl border border-white/15 bg-white/8 p-6 sm:p-8 shadow-deep backdrop-blur-md text-center"
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 w-8 h-8 rounded-full bg-white/10 border border-white/20 text-slate-400 hover:text-white hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Close claim modal"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {IS_DEMO && (
            <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-bold tracking-wider uppercase mb-4">
              <span aria-hidden="true">⚠</span>
              Demo Mode
            </div>
          )}

          <div className="relative w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/14 bg-white/5 shadow-lg">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 to-transparent blur-md" />
            <div className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(176,42,142,0.5)]">
              <Icon name={detail.icon} size={18} color="#ffffff" />
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">{detail.title}</h2>
          <p className="text-sm text-slate-400 mb-6">{detail.value}</p>

          {status === null ? (
            <>
              <div className="mb-6">
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Eligibility Requirements</h3>
                <ul className="text-sm text-slate-300 leading-relaxed space-y-1.5 text-left">
                  {detail.eligibility.map((req, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-casino-gold mt-1 shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Claim Process</h3>
                <ol className="text-sm text-slate-300 leading-relaxed space-y-1.5 text-left">
                  {detail.process.map((step, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full text-xs font-bold shrink-0 flex items-center justify-center text-white bg-casino-neon ${i}`}>{i + 1}</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <Button
                variant="primary"
                size="lg"
                className="w-full text-white shadow-[0_0_20px_rgba(176,42,142,0.5)] hover:shadow-neon-lg"
                onClick={handleClaim}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? spinner : 'CLAIM REWARD'}
              </Button>

              <p className="mt-4 text-[11px] text-slate-500 leading-relaxed">
                Claims are validated server-side. Duplicate claims are prevented. This is a demo — no
                real reward is issued without a connected backend.
              </p>
            </>
          ) : null}

          {status === 'success' && (
            <>
              <div className="w-12 h-12 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(34,197,94,0.4)] animate-bounce-subtle">
                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-green-400 mb-2">Claim Successful</h3>
              <p className="text-sm text-slate-300 mb-6">{result.message}</p>
              <Button variant="outline" size="lg" className="w-full" onClick={onClose}>
                Close
              </Button>
            </>
          )}

          {status === 'failure' && (
            <>
              <div className="w-12 h-12 rounded-full bg-rose-500/20 border border-rose-500/40 flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(244,63,94,0.4)]">
                <svg className="w-6 h-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-rose-400 mb-2">Claim Not Eligible</h3>
              <p className="text-sm text-slate-300 mb-6">{result.reason}</p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button variant="outline" size="lg" className="flex-1" onClick={onClose}>
                  Close
                </Button>
                <Button variant="ghost" size="lg" className="flex-1 text-slate-400 hover:text-white" onClick={handleClaim}>
                  Try Again
                </Button>
              </div>
            </>
          )}
        </motion.div>
      </motion.div>
    )}
    </AnimatePresence>
  );
}
