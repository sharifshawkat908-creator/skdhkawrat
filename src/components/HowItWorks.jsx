import { Icon } from './Icon';

const steps = [
  {
    number: '০১',
    title: 'ক্লেইম বোনাসে ক্লিক করুন',
    description: 'প্রমোশন পেজ খোলার জন্য ক্লেইম বোনাস বাটনে চাপ দিন।',
    icon: 'rocket',
  },
  {
    number: '০২',
    title: 'নিবন্ধন প্রক্রিয়াটি সম্পূর্ণ করুন',
    description: 'আপনার অ্যাকাউন্ট তৈরি করুন এবং শুরু করার জন্য আপনার বিবরণ যাচাই করুন।',
    icon: 'user',
  },
  {
    number: '০৩',
    title: 'আপনার যোগ্যতা যাচাই করুন এবং উপলব্ধ প্রমোশন পান',
    description: 'প্রমোশন শর্তাবলী এবং যোগ্যতা অনুযায়ী প্রদান করা হয়।',
    icon: 'chip',
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="section-padding bg-casino-deep"
      aria-labelledby="how-it-works-heading"
    >
      <div className="section-container">
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <h2 id="how-it-works-heading" className="display-md mb-4 sm:mb-6">
            এইভাবে কাজ করে
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            আপনার প্রমোশনাল বোনাস দাবি করার তিনটি সহজ ধাপ।
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="glass-surface p-6 sm:p-8 rounded-2xl relative overflow-hidden group hover:border-casino-borderHover transition-colors duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-casino-neon/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              <div className="relative z-10 flex flex-col items-center text-center space-y-4 sm:space-y-5">
                <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-2xl bg-casino-surface border border-casino-border/50 flex items-center justify-center text-casino-neon shadow-neon">
                  <Icon name={step.icon} size={30} />
                </div>
                <span className="text-casino-neon text-xs font-bold tracking-widest uppercase opacity-70">
                  {step.number}
                </span>
                <h3 className="text-lg sm:text-xl font-semibold text-casino-ink">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
