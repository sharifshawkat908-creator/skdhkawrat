import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../Button';

const steps = [
  {
    number: '1',
    title: 'Browse Rewards',
    description: 'Explore the rewards showcase and check each reward’s eligibility status.',
  },
  {
    number: '2',
    title: 'Confirm Eligibility',
    description: 'Review the eligibility requirements shown on the claim modal before claiming.',
  },
  {
    number: '3',
    title: 'Server Validation',
    description: 'Your claim is validated on the server, which enforces eligibility and prevents duplicates.',
  },
  {
    number: '4',
    title: 'Receive Reward',
    description: 'If the server confirms your eligibility, the reward is credited to your account.',
  },
];

const eligibility = [
  'You must be at least 18 years old (or the legal age in your jurisdiction).',
  'A registered and verified account is required to claim rewards.',
  'Each reward may have its own eligibility criteria, expiration date, and restrictions.',
  'Rewards are limited to one claim per eligible member unless stated otherwise.',
  'Geographic restrictions may apply; some regions are excluded.',
];

const terms = [
  'All rewards are subject to the full Terms & Conditions and applicable restrictions.',
  'Rewards may expire; claim them before the stated expiration date.',
  'Wagering or play-through requirements may apply to certain bonus rewards.',
  'The operator may modify, suspend, or cancel rewards at any time per the terms.',
  'Duplicate or fraudulent claims will be rejected and may result in account action.',
];

export default function TrustSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="trust-information" className="section-padding" aria-labelledby="trust-heading">
      <div className="section-container">
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <h2 id="trust-heading" className="display-md mb-4 sm:mb-6 text-white font-display font-bold tracking-tight">
            Trust &amp; Information
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about how rewards work, who is eligible, and the terms that apply.
          </p>
        </div>

        {/* How Rewards Work */}
        <div className="mb-16 sm:mb-20">
          <div className="flex items-center justify-between sm:justify-start mb-8 sm:mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-white">How Rewards Work</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="flex flex-col items-center text-center space-y-3"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-casino-neon to-casino-neonViolet flex items-center justify-center text-white font-bold shadow-neon">
                  {step.number}
                </div>
                <h4 className="text-base font-semibold text-white">{step.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
          {/* Eligibility */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Eligibility Information</h3>
            <ul className="space-y-3 text-sm text-slate-300 leading-relaxed">
              {eligibility.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-casino-gold shrink-0">
                    <span aria-hidden="true">✓</span>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Terms accordion */}
          <div className="space-y-3">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Terms &amp; Conditions</h3>
            {terms.map((term, i) => (
              <motion.div
                key={i}
                initial={{ height: 0, opacity: 0 }}
                animate={openIndex === i ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                  className="flex w-full items-center justify-between text-sm font-semibold text-white hover:text-casino-gold transition-colors focus:outline-none"
                >
                  <span>Term {i + 1}</span>
                  <svg className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === i && (
                  <p className="mt-3 text-sm text-slate-400 leading-relaxed">{term}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Customer Support */}
        <div className="mt-16 sm:mt-20 lg:mt-24 rounded-2xl border border-white/15 bg-white/5 p-8 sm:p-12 backdrop-blur-sm text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Customer Support</h3>
          <p className="text-sm text-slate-400 mb-6 max-w-md mx-auto leading-relaxed">
            Need help with your reward claim or eligibility? Contact our support team and we’ll be happy to assist.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
            <Button variant="outline" size="lg" className="text-white hover:text-casino-gold border-white/30 hover:border-white/50">
              support@example.com
            </Button>
            <Button variant="ghost" size="lg" className="text-slate-400 hover:text-white">
              Help Center
            </Button>
          </div>
          <p className="mt-6 sm:mt-8 text-[11px] text-slate-500 leading-relaxed max-w-xl mx-auto">
            Gaming involves risk and is intended only for eligible adults 18+. Rewards are subject to eligibility,
            expiration dates, and applicable restrictions. This page is a clearly labeled demo — no real rewards are
            issued without a connected backend.
          </p>
        </div>
      </div>
    </section>
  );
}
