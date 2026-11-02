import { Button } from './Button';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden section-padding"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 z-0 bg-casino-dark">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-casino-neon/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-casino-neonViolet/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-[20%] left-[50%] w-[40%] h-[40%] border border-casino-border/20 rounded-full rotate-[45deg] animate-[float_10s_ease-in-out_infinite] pointer-events-none"></div>
      </div>

      <div className="relative z-10 section-container text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-casino-surface border border-casino-border/50 text-casino-neon text-xs font-semibold tracking-wider uppercase mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <span aria-hidden="true">✨</span>
          খেলুন। অন্বেষণ করুন। উত্তেজনাটি অনুভব করুন।
        </div>

        <h1
          id="hero-heading"
          className="display-xl mb-6 sm:mb-8 lg:mb-10 animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          SKBET999 স্বাগতম
        </h1>

        <p className="text-lg sm:text-xl text-slate-600 max-w-xl mx-auto mb-10 lg:mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          অনলাইন গেমিং, বিনোদন এবং বিশেষ প্রমোশনের রোমাঞ্চকর বিশ্বের আবিষ্কার করুন।
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button variant="primary" size="lg" external>
            এখন অন্বেষণ করুন
          </Button>
          <Button variant="outline" size="lg" href="#promotion-highlights">
            প্রমোশন দেখুন
          </Button>
        </div>

        <p className="mt-6 sm:mt-8 text-xs text-slate-500 leading-relaxed max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}
>
          প্রমোশন যোগ্যতা এবং প্রযোজ্য শর্তাবলীর অধীন। শুধুমাত্র ১৮+।
        </p>
      </div>
    </section>
  );
}
