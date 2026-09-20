import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageSquare, ExternalLink, ShieldCheck, Building } from 'lucide-react';
import { COMPANY_CONFIG } from '../../data/config';
import { SERVICES_DATA } from '../../data/services';

interface FooterProps {
  onRequestAssessment: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onRequestAssessment }) => {
  const currentYear = new Date().getFullYear();

  const whatsappUrl = `https://wa.me/91${COMPANY_CONFIG.contact.whatsappRaw}?text=${encodeURIComponent(
    'Hello Sri Thrayi Facility, I would like to inquire about facility management services.'
  )}`;

  return (
    <footer className="bg-obsidian border-t border-charcoal-800 text-ivory relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Col 1: Brand & Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-block group focus:outline-none">
              <div className="relative overflow-hidden rounded py-1 px-1 transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(197,160,89,0.4)]">
                <img
                  src="/images/logo/logo-full.webp"
                  alt="Sri Thrayi Facility"
                  className="h-16 w-auto object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/logo/logo-full.png';
                  }}
                />
              </div>
            </Link>

            <p className="text-softgrey text-sm leading-relaxed max-w-sm">
              Sri Thrayi Facility provides dependable security, electrical, plumbing, landscaping and housekeeping support for professionally managed properties across Telangana and Andhra Pradesh.
            </p>

            <div className="pt-1 flex items-center gap-2 text-xs text-gold">
              <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
              <span>{COMPANY_CONFIG.tagline}</span>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={onRequestAssessment}
                className="px-4 py-2 bg-gradient-to-r from-gold via-gold-light to-gold text-obsidian text-xs font-bold rounded-lg shadow-gold-subtle hover:brightness-105 transition-all"
              >
                Request Site Assessment
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-charcoal-800 text-ivory text-xs border border-charcoal-700 hover:border-gold rounded-lg transition-all flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Col 2: Services (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-serif text-lg text-white tracking-wide">Our Services</h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <Link
                    to={`/services/${srv.slug}`}
                    className="text-softgrey hover:text-gold transition-colors block"
                  >
                    {srv.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="text-gold text-xs font-semibold hover:underline inline-flex items-center gap-1 pt-1"
                >
                  <span>All Services Overview</span>
                  <span>→</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-serif text-lg text-white tracking-wide">Company</h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-softgrey">
              <li>
                <Link to="/" className="hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold transition-colors">
                  About Our Organization
                </Link>
              </li>
              <li>
                <a href="/#why-us" className="hover:text-gold transition-colors">
                  Operating Principles
                </a>
              </li>
              <li>
                <a href="/#environments" className="hover:text-gold transition-colors">
                  Supported Environments
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold transition-colors">
                  Contact & Directions
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-gold transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-gold transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Both Registered & Regional Offices (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <h3 className="font-serif text-lg text-white tracking-wide">Offices</h3>
            
            {/* Hyderabad Corporate HQ */}
            <div className="flex items-start gap-2.5 text-xs text-softgrey leading-relaxed p-3 rounded-lg bg-charcoal-900 border border-charcoal-800">
              <Building className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Corporate Headquarters (Hyderabad)</p>
                <p>{COMPANY_CONFIG.address.line1},</p>
                <p>{COMPANY_CONFIG.address.line2},</p>
                <p>{COMPANY_CONFIG.address.city} – {COMPANY_CONFIG.address.postalCode}, {COMPANY_CONFIG.address.state}</p>
                <a
                  href={COMPANY_CONFIG.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-gold hover:underline mt-1 font-medium text-[11px]"
                >
                  <span>Google Maps Directions</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>

            {/* Vijayawada Regional Office - Strictly without Boys' Hostel Backside */}
            <div className="flex items-start gap-2.5 text-xs text-softgrey leading-relaxed p-3 rounded-lg bg-charcoal-900 border border-charcoal-800">
              <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Regional Office (Vijayawada)</p>
                <p>{COMPANY_CONFIG.regionalOffice.line1},</p>
                <p>{COMPANY_CONFIG.regionalOffice.line2},</p>
                <p>{COMPANY_CONFIG.regionalOffice.city} – {COMPANY_CONFIG.regionalOffice.postalCode}, {COMPANY_CONFIG.regionalOffice.state}</p>
                <a
                  href={COMPANY_CONFIG.regionalOffice.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-gold hover:underline mt-1 font-medium text-[11px]"
                >
                  <span>Google Maps Directions</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>

            {/* Direct Contact Phone & Email */}
            <div className="space-y-1.5 pt-1 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gold shrink-0" />
                <a href={`tel:${COMPANY_CONFIG.contact.phoneRaw}`} className="text-softgrey hover:text-white transition-colors">
                  {COMPANY_CONFIG.contact.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-gold shrink-0" />
                <a href={`mailto:${COMPANY_CONFIG.contact.email}`} className="text-softgrey hover:text-white transition-colors">
                  {COMPANY_CONFIG.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-charcoal-800/80 bg-obsidian-950 py-6 text-xs text-softgrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p>
            © {currentYear} Sri Thrayi Facility. All rights reserved. Registered in Hyderabad, Telangana with operations across Telangana & Andhra Pradesh.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <span className="text-charcoal-600">•</span>
            <Link to="/terms" className="hover:text-gold transition-colors">
              Terms of Engagement
            </Link>
            <span className="text-charcoal-600">•</span>
            <Link to="/contact" className="hover:text-gold transition-colors">
              Contact Offices
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
