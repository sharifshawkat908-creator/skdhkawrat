import { Button } from './Button';

export default function CTASection() {
  return (
    <section
      id="final-cta"
      className="section-padding bg-casino-neon/5 relative overflow-hidden"
      aria-labelledby="final-cta-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-casino-neon/10 to-casino-neonViolet/10 pointer-events-none"></div>
      <div className="relative z-10 section-container">
        <div className="glass-surface max-w-2xl mx-auto rounded-3xl p-8 sm:p-12 text-center border-casino-border/60 shadow-deep">
          <h2 id="final-cta-heading" className="display-lg mb-6 sm:mb-8 text-casino-ink">
            আপনার বোনাস দাবি করতে প্রস্তুত?
          </h2>
          <p className="text-slate-600 mb-10 sm:mb-12 leading-relaxed">
            আজই আপনার প্রমোশন শুরু করুন। যোগ্যতা এবং শর্তাবলী প্রযোজ্য।
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Button variant="primary" size="lg" external>
              এখন বোনাস দাবি করুন
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
