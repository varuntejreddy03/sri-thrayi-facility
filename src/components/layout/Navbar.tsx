import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, MessageSquare, Shield, Zap, Flame, Droplets, Filter, Sparkles, Trees, Bug, Building, MapPin } from 'lucide-react';
import { COMPANY_CONFIG } from '../../data/config';
import { SERVICES_DATA } from '../../data/services';

interface NavbarProps {
  onRequestAssessment: () => void;
}

const serviceIcons: Record<string, React.ReactNode> = {
  security: <Shield className="w-4 h-4 text-gold" />,
  electrical: <Zap className="w-4 h-4 text-gold" />,
  fire: <Flame className="w-4 h-4 text-gold" />,
  plumbing: <Droplets className="w-4 h-4 text-gold" />,
  'wtp-stp': <Filter className="w-4 h-4 text-gold" />,
  housekeeping: <Sparkles className="w-4 h-4 text-gold" />,
  landscaping: <Trees className="w-4 h-4 text-gold" />,
  pesticide: <Bug className="w-4 h-4 text-gold" />,
  clubhouse: <Building className="w-4 h-4 text-gold" />,
};

export const Navbar: React.FC<NavbarProps> = ({ onRequestAssessment }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Top view (Hero top): always visible
          if (currentScrollY <= 40) {
            setNavVisible(true);
            setIsScrolled(false);
          } else {
            setIsScrolled(true);

            // Scroll down towards footer: hide navbar
            if (currentScrollY > lastScrollY.current) {
              setNavVisible(false);
              setServicesDropdownOpen(false);
            } 
            // Scroll up towards hero: show navbar
            else if (currentScrollY < lastScrollY.current) {
              setNavVisible(true);
            }
          }

          lastScrollY.current = Math.max(0, currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

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
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
          navVisible
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0 pointer-events-none'
        } ${
          isScrolled
            ? 'top-0 bg-obsidian/95 backdrop-blur-md border-b border-gold/25 py-1.5 shadow-elevated-dark'
            : 'top-0 lg:top-[29px] bg-gradient-to-b from-obsidian/95 via-obsidian/70 to-transparent py-2'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo: Official 3D Metallic STF & Sri Thrayi Facility Logo (Horizontal Navbar Lockup) */}
          <Link
            to="/"
            className="group flex items-center focus:outline-none py-0.5"
            aria-label="Sri Thrayi Facility - Home"
          >
            <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <img
                src="/images/logo/logo-navbar-horizontal.png"
                alt="Sri Thrayi Facility"
                className="h-9 sm:h-10 lg:h-11 max-w-[220px] sm:max-w-[260px] lg:max-w-[300px] w-auto object-contain transition-all duration-300 drop-shadow-[0_2px_12px_rgba(201,164,92,0.35)] group-hover:drop-shadow-[0_0_18px_rgba(201,164,92,0.65)]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/logo/logo-brand.png';
                }}
              />
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
                <div className="absolute top-full -left-20 w-[580px] pt-3 transition-all duration-200">
                  <div className="bg-charcoal-900 border border-gold/30 rounded-xl shadow-elevated-dark p-3 text-xs">
                    <Link
                      to="/services"
                      onClick={() => setServicesDropdownOpen(false)}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-charcoal-800/90 text-gold font-semibold border border-charcoal-700 mb-2 hover:bg-charcoal-700 hover:border-gold/40 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                        <span>Overview of All {SERVICES_DATA.length} Services</span>
                      </div>
                      <span className="text-[10px] uppercase tracking-wider text-white bg-gold/20 px-2 py-0.5 rounded border border-gold/30">View All →</span>
                    </Link>

                    <div className="grid grid-cols-2 gap-1.5">
                      {SERVICES_DATA.map((service) => (
                        <Link
                          key={service.id}
                          to={`/services/${service.slug}`}
                          onClick={() => setServicesDropdownOpen(false)}
                          className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-charcoal-800 text-ivory/90 hover:text-gold transition-colors border border-transparent hover:border-charcoal-700/60"
                        >
                          <div className="mt-0.5 p-1.5 rounded bg-charcoal-800 border border-charcoal-700 text-gold shrink-0">
                            {serviceIcons[service.id]}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="font-semibold text-white truncate text-[12px]">{service.title}</div>
                            <div className="text-[10px] text-softgrey line-clamp-1">{service.shortDesc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
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

          {/* Mobile Actions: Clean & Uncrowded */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onRequestAssessment}
              className="hidden sm:inline-flex px-3 py-1.5 bg-gold text-obsidian font-bold text-xs rounded hover:bg-gold-light transition-all"
            >
              Assessment
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 text-ivory hover:text-gold rounded-lg border border-charcoal-700 bg-charcoal-900/80 hover:border-gold/40 transition-colors focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-gold" /> : <Menu className="w-5 h-5 text-gold" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Slide-in Drawer (Outside header to avoid CSS transform clipping) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[56px] sm:top-[64px] z-50 bg-obsidian-950/98 backdrop-blur-2xl border-t border-charcoal-800 lg:hidden overflow-y-auto px-6 py-8 flex flex-col justify-between">
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
    </>
  );
};
