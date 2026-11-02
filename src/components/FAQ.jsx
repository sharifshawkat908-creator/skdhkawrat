import { useState } from 'react';

const faqs = [
  {
    question: 'প্রমোশনের জন্য কে যোগ্য?',
    answer:
      'যোগ্যতা আপনার অবস্থান, বয়স এবং প্রযোজ্য শর্তাবলীর ওপর নির্ভর করে। আপনার বয়স অন্তত ১৮ বছর (অথবা আপনার এলাকার আইনি বয়স) হতে হবে এবং যেকোনো ভূগোলিক সীমাবদ্ধতা মেনে চলতে হবে।',
  },
  {
    question: 'আমি কীভাবে বোনাস দাবি করব?',
    answer:
      'ক্লেইম বোনাস বাটনে ক্লিক করুন, নিবন্ধন প্রক্রিয়াটি সম্পূর্ণ করুন, এবং প্রদান করা ধাপগুলি অনুসরণ করুন। প্রমোশন যোগ্যতা এবং শর্তাবলী অনুযায়ী প্রদান করা হয়।',
  },
  {
    question: 'শর্ত ও শর্তাবলী প্রযোজ্য কি না?',
    answer:
      'হ্যাঁ। সমস্ত প্রমোশন শর্ত ও শর্তাবলীর অধীন, যার মধ্যে বেটিং রিকোয়ারমেন্টস, যোগ্যতা মানদণ্ড এবং ভূগোলিক সীমাবদ্ধতা অন্তর্ভুক্ত। গ্রহণ করার আগে পূর্ণ শর্তাবলী পর্যালোচনা করুন।',
  },
  {
    question: 'আমার এলাকায় প্রমোশন উপলব্ধ কি না?',
    answer:
      'উপলব্ধতা এলাকাভেদে ভিন্ন হতে পারে। কিছু অঞ্চল সীমাবদ্ধ থাকতে পারে। আপনার এলাকায় প্রমোশন উপলব্ধ কিনা নিশ্চিত করতে শর্ত ও শর্তাবলী পর্যালোচনা করুন।',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id="faq"
      className="section-padding bg-casino-dark"
      aria-labelledby="faq-heading"
    >
      <div className="section-container">
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <h2 id="faq-heading" className="display-md mb-4 sm:mb-6">
            সচরাচর জিজ্ঞাসিত প্রশ্ন
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            প্রমোশন সম্পর্কে আপনার জানার প্রয়োজনীয় সবকিছু।
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="glass-surface rounded-xl border border-casino-border/50 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between px-6 py-5 sm:px-6 sm:py-6 text-left focus:outline-none"
                >
                  <h3 className="text-base sm:text-lg font-semibold text-casino-ink leading-tight">
                    {faq.question}
                  </h3>
                  <span className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-slate-600"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 sm:px-6 sm:pb-6 text-left border-t border-casino-border/40">
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
