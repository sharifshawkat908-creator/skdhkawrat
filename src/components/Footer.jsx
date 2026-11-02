import { config } from '../config';

const footerLinks = [
  { label: 'শর্ত ও শর্তাবলী', href: config.RESPONSIBLE_GAMING.termsLink },
  { label: 'গোপনীয়তা নীতি', href: config.RESPONSIBLE_GAMING.privacyLink },
  { label: 'দায়িত্বশীল গেমিং', href: config.RESPONSIBLE_GAMING.responsibleGamingLink },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t border-casino-border/40 bg-casino-dark/80 backdrop-blur-xs"
      aria-label="ফুটার"
    >
      <div className="section-container py-8 sm:py-12 lg:py-16">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-2 text-slate-600 text-sm">
            <span className="font-medium text-casino-ink">নভা প্লে</span>
            <span>·</span>
            <span>{config.RESPONSIBLE_GAMING.ageNotice}</span>
          </div>

          <nav className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-4 text-sm">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-600 hover:text-casino-neon transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <p className="text-xs text-slate-500">
            © {currentYear} নভা প্লে। সর্বস্বত্ব সংরক্ষিত।
          </p>
        </div>

        <div className="mt-8 sm:mt-10 border-t border-casino-border/30 pt-6 text-center sm:text-left">
          <p className="text-xs text-slate-500 max-w-md mx-auto sm:mx-0 leading-relaxed">
            গেমিং ঝুঁকি জড়িত। দয়া করে দায়িত্বের সাথে খেলুন। এই প্রমোশন শুধুমাত্র যোগ্য প্রাপ্তবয়স্কদের জন্য ১৮+। উপলব্ধতা যোগ্যতা এবং প্রযোজ্য শর্তাবলীর অধীনে। গেমিং-বিষয়ক বিজ্ঞাপন শুধুমাত্র সেই জায়গাগুলোতে অনুমোদিত যেখানে আইন অনুমতি দেয় এবং বিজ্ঞাপন প্ল্যাটফর্ম দ্বারা অনুমোদিত।
          </p>
        </div>
      </div>
    </footer>
  );
}
