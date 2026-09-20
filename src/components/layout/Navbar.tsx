import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, MessageSquare, Shield, Zap, Droplets, Trees, Sparkles, MapPin } from 'lucide-react';
import { COMPANY_CONFIG } from '../../data/config';
import { SERVICES_DATA } from '../../data/services';

interface NavbarProps {
  onRequestAssessment: () => void;
}

const serviceIcons: Record<string, React.ReactNode> = {
  security: <Shield className="w-4 h-4 text-gold" />,
  electrical: <Zap className="w-4 h-4 text-gold" />,
  plumbing: <Droplets className="w-4 h-4 text-gold" />,
  landscaping: <Trees className="w-4 h-4 text-gold" />,
  housekeeping: <Sparkles className="w-4 h-4 text-gold" />,
};

export const Navbar: React.FC<NavbarProps> = ({ onRequestAssessment }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  const whatsappUrl = `https://wa.me/91${COMPANY_CONFIG.contact.whatsappRaw}?text=${encodeURIComponent(
    'Hello Sri Thrayi Facility, I would like to inquire about your facility management services.'
  )}`;

  return (
    <>
      {/* Top Architectural Notice Bar */}
      <div className="hidden lg:block bg-obsidian-950 border-b border-charcoal-800/80 text-[11px] text-softgrey py-1.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-gold font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Hyderabad Facility Operations</span>
            </span>
            <span className="text-charcoal-600">•</span>
            <span className="text-ivory/70">JNTU 9th Phase, Salivahana Colony</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-ivory/70">“{COMPANY_CONFIG.tagline}”</span>
            <span className="text-charcoal-600">•</span>
            <a
              href={`tel:${COMPANY_CONFIG.contact.phoneRaw}`}
              className="text-gold hover:text-gold-light transition-colors font-medium flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              <span>{COMPANY_CONFIG.contact.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`fixed top-0 lg:top-[29px] left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-obsidian/95 backdrop-blur-md border-b border-gold/25 py-3 shadow-elevated-dark'
            : 'bg-gradient-to-b from-obsidian/95 via-obsidian/70 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo Lockup: Seamless Transparent Monogram + Typography */}
          <Link
            to="/"
            className="group flex items-center gap-3.5 focus:outline-none"
            aria-label="Sri Thrayi Facility - Home"
          >
            {/* STF Golden 3D Metallic Monogram (Transparent Alpha, no dark box border) */}
            <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <img
                src="/images/logo/emblem-transparent.png"
                alt="Sri Thrayi Facility STF Monogram"
                className="h-10 sm:h-12 w-auto object-contain transition-all duration-300 drop-shadow-[0_2px_8px_rgba(201,164,92,0.25)] group-hover:drop-shadow-[0_0_14px_rgba(201,164,92,0.5)]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/logo/logo-brand.png';
                }}
              />
            </div>

            {/* Typography Wordmark */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-lg sm:text-xl tracking-wider text-white font-normal leading-none group-hover:text-gold transition-colors">
                  SRI THRAYI
                </span>
              </div>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="h-[1px] w-3 bg-gold/60" />
                <span className="text-[10px] sm:text-[11px] tracking-widest text-gold font-semibold uppercase leading-none">
                  FACILITY
                </span>
                <span className="h-[1px] w-3 bg-gold/60" />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-ivory/90">
            <Link
              to="/"
              className={`relative py-1 transition-colors hover:text-gold ${
                location.pathname === '/' ? 'text-gold font-semibold' : ''
              }`}
            >
              <span>Home</span>
              {location.pathname === '/' && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold rounded-full" />
              )}
            </Link>

            <Link
              to="/about"
              className={`relative py-1 transition-colors hover:text-gold ${
                location.pathname === '/about' ? 'text-gold font-semibold' : ''
              }`}
            >
              <span>About Us</span>
              {location.pathname === '/about' && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold rounded-full" />
              )}
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className={`flex items-center gap-1.5 py-1 transition-colors hover:text-gold ${
                  location.pathname.startsWith('/services') ? 'text-gold font-semibold' : ''
                }`}
                aria-expanded={servicesDropdownOpen}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesDropdownOpen ? 'rotate-180 text-gold' : ''
                  }`}
                />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 pt-3 transition-all duration-200">
                  <div className="bg-charcoal-900 border border-gold/30 rounded-lg shadow-elevated-dark p-2 text-xs space-y-1">
                    <Link
                      to="/services"
                      className="flex items-center justify-between p-2.5 rounded bg-charcoal-800/80 text-gold font-semibold border-b border-charcoal-700 pb-2 mb-1 hover:bg-charcoal-700"
                    >
                      <span>Overview of All 5 Services</span>
                      <span className="text-[10px] uppercase tracking-wider text-white">View All →</span>
                    </Link>

                    {SERVICES_DATA.map((service) => (
                      <Link
                        key={service.id}
                        to={`/services/${service.slug}`}
                        className="flex items-start gap-3 p-2.5 rounded hover:bg-charcoal-800 text-ivory/90 hover:text-gold transition-colors"
                      >
                        <div className="mt-0.5 p-1 rounded bg-charcoal-800 border border-charcoal-700 text-gold">
                          {serviceIcons[service.id]}
                        </div>
                        <div>
                          <div className="font-semibold text-white">{service.title}</div>
                          <div className="text-[11px] text-softgrey line-clamp-1">{service.shortDesc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a
              href="/#why-us"
              className="py-1 transition-colors hover:text-gold"
            >
              Why Us
            </a>

            <a
              href="/#environments"
              className="py-1 transition-colors hover:text-gold"
            >
              Environments
            </a>

            <Link
              to="/contact"
              className={`relative py-1 transition-colors hover:text-gold ${
                location.pathname === '/contact' ? 'text-gold font-semibold' : ''
              }`}
            >
              <span>Contact</span>
              {location.pathname === '/contact' && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold rounded-full" />
              )}
            </Link>
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={onRequestAssessment}
              className="px-5 py-2.5 bg-gradient-to-r from-gold via-gold-light to-gold text-obsidian font-bold text-xs rounded hover:shadow-gold-hover hover:brightness-105 active:scale-98 transition-all duration-300 tracking-refined flex items-center gap-2 border border-gold/40 shadow-gold-subtle"
            >
              <span>Request a Site Assessment</span>
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onRequestAssessment}
              className="px-3 py-1.5 bg-gold text-obsidian font-bold text-xs rounded hover:bg-gold-light transition-all"
            >
              Assessment
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 text-ivory hover:text-gold rounded border border-charcoal-700 hover:border-gold/40 transition-colors focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Full-Screen / Slide-in Drawer */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 top-[68px] z-30 bg-obsidian-950/98 backdrop-blur-2xl border-t border-charcoal-800 lg:hidden overflow-y-auto px-6 py-8 flex flex-col justify-between">
            <div className="space-y-6">
              <nav className="flex flex-col space-y-4 text-base font-medium">
                <Link
                  to="/"
                  className="py-1 text-ivory hover:text-gold border-b border-charcoal-800"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="py-1 text-ivory hover:text-gold border-b border-charcoal-800"
                >
                  About Us
                </Link>

                <div className="border-b border-charcoal-800 pb-2">
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between py-1 text-ivory hover:text-gold"
                  >
                    <span>Services</span>
                    <ChevronDown
                      className={`w-4 h-4 text-gold transition-transform duration-200 ${
                        mobileServicesOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {mobileServicesOpen && (
                    <div className="pl-4 pt-3 space-y-3 text-sm">
                      <Link
                        to="/services"
                        className="block text-gold font-medium hover:underline"
                      >
                        • Services Overview
                      </Link>
                      {SERVICES_DATA.map((service) => (
                        <Link
                          key={service.id}
                          to={`/services/${service.slug}`}
                          className="block text-softgrey hover:text-white"
                        >
                          • {service.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <a
                  href="/#why-us"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 text-ivory hover:text-gold border-b border-charcoal-800"
                >
                  Why Choose Us
                </a>
                <a
                  href="/#environments"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 text-ivory hover:text-gold border-b border-charcoal-800"
                >
                  Environments We Support
                </a>
                <Link
                  to="/contact"
                  className="py-1 text-ivory hover:text-gold border-b border-charcoal-800"
                >
                  Contact Us
                </Link>
              </nav>

              <div className="pt-2 space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onRequestAssessment();
                  }}
                  className="w-full py-3.5 bg-gradient-to-r from-gold to-gold-light text-obsidian font-bold rounded text-sm text-center shadow-gold-subtle"
                >
                  Request a Site Assessment
                </button>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a
                    href={`tel:${COMPANY_CONFIG.contact.phoneRaw}`}
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded bg-charcoal-800 border border-charcoal-600 text-xs text-ivory hover:border-gold font-medium"
                  >
                    <Phone className="w-3.5 h-3.5 text-gold" />
                    <span>Call Desk</span>
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded bg-[#25D366]/20 border border-[#25D366]/40 text-xs text-emerald-300 hover:border-[#25D366] font-medium"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-charcoal-800 text-xs text-softgrey space-y-1">
              <p className="text-white font-medium flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-gold" />
                <span>Sri Thrayi Facility • Hyderabad, Telangana</span>
              </p>
              <p className="text-[11px] leading-relaxed text-softgrey/80">
                Plot No. 22/A, 5th Floor, Sri Venkateswara Nilayam, Salivahana Colony, JNTU 9th Phase, Hyderabad – 500085
              </p>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
