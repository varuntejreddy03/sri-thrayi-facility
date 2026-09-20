import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { Home, Layers } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-obsidian text-ivory flex items-center justify-center px-4 py-24 relative overflow-hidden">
      <SEO
        title="Page Not Found | Sri Thrayi Facility"
        description="The requested page could not be found. Return to Sri Thrayi Facility home."
      />

      <div className="absolute inset-0 bg-grid-architectural opacity-25 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-lg mx-auto text-center">
        <span className="font-serif text-8xl font-normal text-gold block mb-2">404</span>
        <h1 className="font-serif text-3xl sm:text-4xl text-white mb-3">Page Not Found</h1>
        <p className="text-softgrey text-sm sm:text-base font-light mb-8 leading-relaxed">
          The property resource or page you are attempting to view is unavailable or has been relocated.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-3 bg-gold text-obsidian font-bold text-xs uppercase tracking-widest rounded shadow-gold-hover hover:bg-gold-light transition-all inline-flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>

          <Link
            to="/services"
            className="px-6 py-3 bg-charcoal-800 text-ivory border border-charcoal-600 hover:border-gold text-xs uppercase tracking-widest rounded transition-all inline-flex items-center gap-2"
          >
            <Layers className="w-4 h-4" />
            <span>View Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
