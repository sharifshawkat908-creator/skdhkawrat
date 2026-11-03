import { motion } from 'framer-motion';
import { Icon } from '../Icon';
import { Button } from '../Button';

const ICON_COLORS = {
  welcome: '#b02a8e',
  daily: '#2563eb',
  exclusive: '#6d28d9',
  vip: '#d4af37',
  special: '#b02a8e',
  mystery: '#6d28d9',
};

const STATUS_CONFIG = {
  available: { label: 'Available', dot: 'bg-green-400', ring: 'text-green-400', border: 'border-green-500/30' },
  locked: { label: 'Locked', dot: 'bg-slate-500', ring: 'text-slate-500', border: 'border-slate-500/30' },
  claimed: { label: 'Claimed', dot: 'bg-amber-400', ring: 'text-amber-400', border: 'border-amber-500/30' },
};

export default function RewardCard({ reward, onClaim }) {
  const status = STATUS_CONFIG[reward.status];
  const isAvailable = reward.status === 'available';
  const isClaimed = reward.status === 'claimed';
  const glow = ICON_COLORS[reward.idKey] || '#b02a8e';

  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: `0 0 40px rgba(212,175,55,0.45)` }}
      whileTap={{ scale: 0.97 }}
      className="group relative flex flex-col h-full rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-sm transition-colors duration-300 hover:border-white/25"
    >
      <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center space-y-4">
        <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 border border-white/14 shadow-lg">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/20 to-transparent blur-md" />
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-[0_0_20px_${glow}44]`}>
            <Icon name={reward.icon} size={22} color="#ffffff" />
          </div>
        </div>

        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border ${status.border}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
          {status.label}
        </span>

        <h3 className="text-lg font-semibold text-white tracking-tight">{reward.title}</h3>
        <p className="text-sm text-slate-400 leading-relaxed max-w-xs">{reward.description}</p>
        <p className="text-xs font-mono text-slate-500 mb-2">{reward.value}</p>

        {isAvailable && (
          <Button
            variant="ghost"
            size="md"
            className="w-full text-casino-gold font-bold hover:bg-white/10 hover:text-white border-white/20"
            onClick={() => onClaim(reward.id)}
          >
            Claim Reward
          </Button>
        )}
        {!isAvailable && !isClaimed && (
          <button
            disabled
            className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-500 text-sm font-semibold cursor-not-allowed disabled:opacity-60"
          >
            Locked
          </button>
        )}
        {isClaimed && (
          <button
            disabled
            className="w-full px-4 py-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-semibold"
          >
            Already Claimed
          </button>
        )}
      </div>
    </motion.div>
  );
}
