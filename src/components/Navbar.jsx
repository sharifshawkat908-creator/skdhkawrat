import { useState } from 'react';
import { Button } from './Button';
import { config } from '../config';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-casino-border/40 bg-casino-dark/90 backdrop-blur-md"
      aria-label="মুुख্য নেভিগেশন"
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-xl sm:text-2xl text-casino-ink tracking-tight">
              নভা প্লে
            </span>
            <span className="text-xs text-casino-neon font-bold tracking-wider uppercase opacity-70">
              ১৮+
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-6 sm:gap-8 text-sm sm:text-base">
            <div className="flex items-center gap-4">
              <Button
                variant="primary"
                size="md"
                href={config.AUTH_LINKS[0].href}
                external
                className="text-white"
              >
                এখন জয়েন করুন
              </Button>
            </div>
          </div>

          <button
            className="sm:hidden p-2 text-casino-neon hover:text-casino-neon/90 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="নেভিগেশন মেনু টগল করুন"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              {isOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className="sm:hidden absolute top-full left-0 right-0 bg-casino-dark border-t border-casino-border/40 backdrop-blur-md p-6"
          role="menu"
        >
          <div className="flex flex-col gap-4">
            <div className="mt-6 flex flex-col gap-3">
              <Button
                variant="primary"
                href={config.AUTH_LINKS[0].href}
                external
                className="w-full text-white"
              >
                এখন জয়েন করুন
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
