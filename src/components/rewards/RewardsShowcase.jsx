import { motion } from 'framer-motion';
import RewardCard from './RewardCard';

const rewards = [
  {
    id: 'welcome',
    title: 'Welcome Reward',
    description: 'A special bonus for newly eligible members on their first visit.',
    icon: 'gift',
    idKey: 'welcome',
    status: 'available',
    value: '100 Bonus Credits',
  },
  {
    id: 'daily',
    title: 'Daily Bonus',
    description: 'Return daily to collect your recurring eligibility-based bonus.',
    icon: 'clock',
    idKey: 'daily',
    status: 'available',
    value: '25 Bonus Credits',
  },
  {
    id: 'exclusive',
    title: 'Exclusive Gift',
    description: 'Limited-time gift for members meeting VIP eligibility criteria.',
    icon: 'crown',
    idKey: 'exclusive',
    status: 'locked',
    value: '500 Bonus Credits',
  },
  {
    id: 'vip',
    title: 'VIP Reward',
    description: 'Premium tier reward for qualifying long-term members.',
    icon: 'chip',
    idKey: 'vip',
    status: 'locked',
    value: '1,000 Bonus Credits',
  },
  {
    id: 'special',
    title: 'Special Offers',
    description: 'Rotating promotional offers available to eligible members only.',
    icon: 'rocket',
    idKey: 'special',
    status: 'available',
    value: 'Deposit Match',
  },
  {
    id: 'mystery',
    title: 'Mystery Box',
    description: 'A surprise reward revealed upon successful claim.',
    icon: 'dice',
    idKey: 'mystery',
    status: 'available',
    value: 'Surprise Reward',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 260, damping: 20 },
  },
};

export default function RewardsShowcase({ onClaim }) {
  return (
    <section id="rewards-showcase" className="section-padding" aria-labelledby="rewards-heading">
      <div className="section-container">
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <h2 id="rewards-heading" className="display-md mb-4 sm:mb-6 text-white font-display font-bold tracking-tight">
            Rewards Showcase
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Explore exclusive rewards available to eligible members. Status reflects your current
            eligibility; locked rewards become available once requirements are met.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {rewards.map((reward, index) => (
            <motion.div
              key={reward.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.12 }}
            >
              <RewardCard reward={reward} onClaim={onClaim} />
            </motion.div>
          ))}
        </div>

        <p className="mt-10 sm:mt-12 text-xs text-slate-500 text-center max-w-xl mx-auto leading-relaxed">
          Rewards are subject to eligibility requirements, expiration dates, and applicable
          restrictions. Full terms are available in the Trust &amp; Information section below.
        </p>
      </div>
    </section>
  );
}
