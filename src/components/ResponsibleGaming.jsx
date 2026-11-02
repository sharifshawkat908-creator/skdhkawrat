export default function ResponsibleGaming() {
  return (
    <section
      id="responsible-gaming"
      className="section-padding bg-casino-deep border-y border-casino-border/40"
      aria-labelledby="responsible-gaming-heading"
    >
      <div className="section-container">
        <div className="glass-surface max-w-2xl mx-auto rounded-3xl p-8 sm:p-12 text-center border-casino-neon/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-casino-neon/10 to-transparent opacity-50 pointer-events-none"></div>
          <h2 id="responsible-gaming-heading" className="text-xl sm:text-2xl font-semibold text-casino-ink mb-4 sm:mb-6 relative z-10">
            দয়া করে দায়িত্বের সাথে খেলুন।
          </h2>
          <p className="text-slate-600 mb-8 sm:mb-10 relative z-10 leading-relaxed">
            গেমিং ঝুঁকি জড়িত এবং শুধুমাত্র যোগ্য প্রাপ্তবয়স্কদের জন্য উদ্দেশ্যপূর্ণ।
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-casino-surface border border-casino-neon/50 text-casino-neon text-sm font-bold tracking-wider uppercase relative z-10 shadow-neon">
            <span aria-hidden="true">🔞</span>
            শুধুমাত্র ১৮+
          </div>
        </div>
      </div>
    </section>
  );
}
