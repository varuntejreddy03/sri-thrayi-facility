import React, { useState, useEffect } from 'react';
import { MessageSquare, ArrowUp } from 'lucide-react';
import { COMPANY_CONFIG } from '../../data/config';

export const FloatingActions: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const whatsappMessage = encodeURIComponent(
    'Hello Sri Thrayi Facility team, I would like to inquire about facility management services for my property in Hyderabad.'
  );
  const whatsappUrl = `https://wa.me/91${COMPANY_CONFIG.contact.whatsappRaw}?text=${whatsappMessage}`;

  return (
    <aside aria-label="Quick Communication Actions" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top of page"
          className="w-10 h-10 rounded-full bg-charcoal-900/95 text-gold border border-gold/40 hover:border-gold hover:bg-charcoal-800 shadow-elevated-dark flex items-center justify-center transition-all duration-300 hover:scale-105 backdrop-blur-md"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Refined Corporate WhatsApp Action Pill */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp message to Sri Thrayi Facility Operations"
        className="group flex items-center gap-2.5 pl-3.5 pr-4 py-2.5 rounded-full bg-gradient-to-r from-charcoal-900 to-obsidian border border-emerald-500/40 hover:border-emerald-400 shadow-elevated-dark transition-all duration-300 hover:scale-[1.03] backdrop-blur-md"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
        </span>
        <div className="flex flex-col text-left">
          <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-semibold leading-none">
            Hyderabad Desk
          </span>
          <span className="text-xs text-ivory font-medium mt-0.5 group-hover:text-emerald-300 transition-colors">
            WhatsApp Inquiry
          </span>
        </div>
        <div className="w-7 h-7 rounded-full bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 ml-1 group-hover:bg-emerald-900/90 transition-colors">
          <MessageSquare className="w-3.5 h-3.5 fill-current" />
        </div>
      </a>
    </aside>
  );
};
