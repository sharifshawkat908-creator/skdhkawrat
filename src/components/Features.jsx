import { Icon } from './Icon';

const features = [
  {
    title: 'স্বাগতাম অফার',
    description: 'নতুন যোগ্য সদস্যদের জন্য বিশেষ সুযোগ।',
    icon: 'gift',
  },
  {
    title: 'সাপ্তাহিক প্রমোশন',
    description: 'সপ্তাহজুড়ে নিয়মিত আপডেট করা প্রমোশনাল অফার।',
    icon: 'clock',
  },
  {
    title: 'রিওয়ার্ডস প্রোগ্রাম',
    description: 'প্ল্যাটফর্মের যোগ্যতা এবং কার্যকারিতার ভিত্তিতে উপলব্ধ পুরস্কার।',
    icon: 'chip',
  },
  {
    title: 'ভিআইপি সুবিধা',
    description: 'যোগ্য সদস্যদের জন্য বিলাসিতা সুবিধা যারা প্রোগ্রামের মানদণ্ড পূরণ করে।',
    icon: 'crown',
  },
];

export default function Features() {
  return (
    <section
      id="promotion-highlights"
      className="section-padding bg-casino-dark"
      aria-labelledby="promotion-highlights-heading"
    >
      <div className="section-container">
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <h2 id="promotion-highlights-heading" className="display-md mb-4 sm:mb-6">
            প্রমোশনাল হাইলাইটস
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            যোগ্য সদস্যদের জন্য উপলব্ধ প্রমোশন অন্বেষণ করুন।
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-surface p-6 sm:p-8 rounded-2xl flex flex-col h-full animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-casino-surfaceHover border border-casino-border/50 flex items-center justify-center text-casino-neon mb-5 shrink-0">
                <Icon name={feature.icon} size={24} />
              </div>
              <h3 className="text-lg font-semibold text-casino-ink mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed flex-grow">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
