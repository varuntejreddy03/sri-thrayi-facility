import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { X, CheckCircle2, Loader2, ShieldCheck } from 'lucide-react';
import { COMPANY_CONFIG } from '../../data/config';
import { SERVICES_DATA } from '../../data/services';

interface SiteAssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormInputs {
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  propertyType: string;
  selectedServices: string[];
  cityRegion: string;
  location: string;
  message: string;
  consent: boolean;
  honeypot?: string;
}

export const SiteAssessmentModal: React.FC<SiteAssessmentModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>({
    defaultValues: {
      propertyType: 'Corporate Office',
      cityRegion: 'Hyderabad (Telangana)',
      selectedServices: ['Security Services'],
    },
  });


  // Lock body scroll and stop Lenis while modal is open
  useEffect(() => {
    if (!isOpen) return;

    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    const lenis = (window as any).__lenis;
    if (lenis && typeof lenis.stop === 'function') {
      lenis.stop();
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleResetAndClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.body.style.paddingRight = originalPaddingRight;
      if (lenis && typeof lenis.start === 'function') {
        lenis.start();
      }
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const onSubmit = async (data: FormInputs) => {
    if (data.honeypot) return;

    setIsSubmitting(true);
    await new Promise((res) => setTimeout(res, 850));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    reset();
    onClose();
  };

  return (
    <div
      data-lenis-prevent="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-obsidian-950/85 backdrop-blur-md overscroll-contain"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleResetAndClose();
        }
      }}
      onWheel={(e) => e.stopPropagation()}
    >
      {/* Modal Container: constrained to 92vh, flex flex-col so footer is ALWAYS visible */}
      <div
        data-lenis-prevent="true"
        className="relative w-full max-w-2xl max-h-[88vh] bg-charcoal-900 border border-gold/40 rounded-2xl shadow-elevated-dark flex flex-col text-ivory overflow-hidden overscroll-contain"
        onClick={(e) => e.stopPropagation()}
        onWheel={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="p-5 sm:p-6 border-b border-charcoal-700/80 flex items-center justify-between bg-charcoal-900 shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold" />
              <span className="text-[11px] font-semibold tracking-widest text-gold uppercase">
                Facility Operational Assessment
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-white mt-1 leading-tight">
              Request a Site Assessment
            </h2>
          </div>

          <button
            onClick={handleResetAndClose}
            aria-label="Close modal"
            className="w-9 h-9 rounded-full bg-charcoal-800 text-softgrey hover:text-white hover:bg-charcoal-700 flex items-center justify-center transition-colors border border-charcoal-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div
          data-lenis-prevent="true"
          className="p-5 sm:p-6 overflow-y-auto flex-1 min-h-0 space-y-5 custom-modal-scrollbar"
        >
          {isSuccess ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-white">
                Assessment Request Received
              </h3>
              <p className="text-softgrey max-w-md mx-auto text-sm leading-relaxed">
                Thank you for reaching out to Sri Thrayi Facility. Our operations supervisors will review your property setup and contact you within 24 business hours.
              </p>
              <div className="pt-4 flex flex-wrap justify-center gap-3">
                <button
                  onClick={handleResetAndClose}
                  className="px-6 py-2.5 bg-gold text-obsidian font-bold rounded-full text-xs uppercase tracking-wider hover:bg-gold-light transition-all shadow-gold-subtle"
                >
                  Close Window
                </button>
                <a
                  href={`https://wa.me/91${COMPANY_CONFIG.contact.whatsappRaw}?text=Hi%20Sri%20Thrayi%20Facility%2C%20I%20just%20submitted%20a%20site%20assessment%20request.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-charcoal-800 text-ivory border border-gold/40 font-medium rounded-full text-xs hover:border-gold transition-all"
                >
                  WhatsApp Follow-up
                </a>
              </div>
            </div>
          ) : (
            <form id="assessment-modal-form" onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-xs sm:text-sm">
              <input type="text" className="hidden" {...register('honeypot')} tabIndex={-1} autoComplete="off" />

              <p className="text-xs text-softgrey leading-relaxed">
                Provide details about your property in Hyderabad or Vijayawada. Our operations supervisors will organize an on-site walkthrough to structure an accurate operational scope.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-softgrey mb-1">Full Name *</label>
                  <input
                    type="text"
                    {...register('fullName', { required: 'Please enter your name' })}
                    placeholder="e.g. Rajesh Kumar"
                    className="w-full px-3.5 py-2.5 bg-charcoal-800 border border-charcoal-700 rounded-lg text-ivory placeholder-softgrey/40 focus:border-gold focus:outline-none transition-colors"
                  />
                  {errors.fullName && <p className="text-rose-400 text-xs mt-1">{errors.fullName.message}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-softgrey mb-1">Company / Property Name *</label>
                  <input
                    type="text"
                    {...register('companyName', { required: 'Please enter property name' })}
                    placeholder="e.g. Cyber Greens Tower"
                    className="w-full px-3.5 py-2.5 bg-charcoal-800 border border-charcoal-700 rounded-lg text-ivory placeholder-softgrey/40 focus:border-gold focus:outline-none transition-colors"
                  />
                  {errors.companyName && <p className="text-rose-400 text-xs mt-1">{errors.companyName.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-softgrey mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    {...register('phone', {
                      required: 'Phone number is required',
                      pattern: {
                        value: /^[0-9+\-\s]{10,15}$/,
                        message: 'Please enter a valid phone number',
                      },
                    })}
                    placeholder="e.g. 7995556988"
                    className="w-full px-3.5 py-2.5 bg-charcoal-800 border border-charcoal-700 rounded-lg text-ivory placeholder-softgrey/40 focus:border-gold focus:outline-none transition-colors"
                  />
                  {errors.phone && <p className="text-rose-400 text-xs mt-1">{errors.phone.message}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-softgrey mb-1">Email Address *</label>
                  <input
                    type="email"
                    {...register('email', {
                      required: 'Email address is required',
                      pattern: {
                        value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                        message: 'Please enter a valid email address',
                      },
                    })}
                    placeholder="e.g. contact@domain.com"
                    className="w-full px-3.5 py-2.5 bg-charcoal-800 border border-charcoal-700 rounded-lg text-ivory placeholder-softgrey/40 focus:border-gold focus:outline-none transition-colors"
                  />
                  {errors.email && <p className="text-rose-400 text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-softgrey mb-1">Region / City *</label>
                  <select
                    {...register('cityRegion', { required: 'Please select region' })}
                    className="w-full px-3.5 py-2.5 bg-charcoal-800 border border-charcoal-700 rounded-lg text-ivory focus:border-gold focus:outline-none transition-colors"
                  >
                    <option value="Hyderabad (Telangana)">Hyderabad (Telangana)</option>
                    <option value="Vijayawada (Andhra Pradesh)">Vijayawada (Andhra Pradesh)</option>
                    <option value="Other AP & Telangana Region">Other AP & Telangana Region</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-softgrey mb-1">Property Type *</label>
                  <select
                    {...register('propertyType', { required: 'Please select property type' })}
                    className="w-full px-3.5 py-2.5 bg-charcoal-800 border border-charcoal-700 rounded-lg text-ivory focus:border-gold focus:outline-none transition-colors"
                  >
                    <option value="Corporate Office">Corporate Office</option>
                    <option value="Residential Community">Residential Community</option>
                    <option value="Commercial Tower">Commercial Tower</option>
                    <option value="Retail Space / Mall">Retail Space / Mall</option>
                    <option value="Educational Institution">Educational Institution</option>
                    <option value="Healthcare Facility">Healthcare Facility</option>
                    <option value="Other Facility">Other Facility</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-softgrey mb-1">Area / Colony *</label>
                  <input
                    type="text"
                    {...register('location', { required: 'Please mention location area' })}
                    placeholder="e.g. JNTU, Madhapur, Gunadala"
                    className="w-full px-3.5 py-2.5 bg-charcoal-800 border border-charcoal-700 rounded-lg text-ivory placeholder-softgrey/40 focus:border-gold focus:outline-none transition-colors"
                  />
                  {errors.location && <p className="text-rose-400 text-xs mt-1">{errors.location.message}</p>}
                </div>
              </div>

              {/* Services Required Checkbox Grid */}
              <div>
                <label className="block text-xs font-medium text-softgrey mb-2">
                  Services Required (Select all that apply) *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-xs">
                  {SERVICES_DATA.map((srv) => (
                    <label
                      key={srv.id}
                      className="flex items-center gap-2 p-2.5 rounded-lg bg-charcoal-800 border border-charcoal-700 hover:border-gold/40 cursor-pointer transition-colors"
                    >
                      <input
                        type="checkbox"
                        value={srv.title}
                        {...register('selectedServices', { required: 'Select at least one service' })}
                        className="rounded border-charcoal-600 text-gold focus:ring-gold bg-charcoal-700"
                      />
                      <span className="font-medium text-ivory/90">{srv.title}</span>
                    </label>
                  ))}
                </div>
                {errors.selectedServices && <p className="text-rose-400 text-xs mt-1">{errors.selectedServices.message}</p>}
              </div>

              <div>
                <label className="block text-xs font-medium text-softgrey mb-1">Additional Operational Notes (Optional)</label>
                <textarea
                  rows={2}
                  {...register('message')}
                  placeholder="Premise square footage, shifts needed, key areas of concern..."
                  className="w-full px-3.5 py-2 bg-charcoal-800 border border-charcoal-700 rounded-lg text-ivory placeholder-softgrey/40 focus:border-gold focus:outline-none transition-colors resize-none"
                />
              </div>

              <div className="flex items-start gap-2 pt-1">
                <input
                  type="checkbox"
                  id="consent-check"
                  {...register('consent', { required: 'Please agree to proceed' })}
                  className="mt-0.5 rounded border-charcoal-600 text-gold focus:ring-gold bg-charcoal-700"
                />
                <label htmlFor="consent-check" className="text-xs text-softgrey leading-tight">
                  I consent to having Sri Thrayi Facility contact me regarding this facility management site assessment.
                </label>
              </div>
              {errors.consent && <p className="text-rose-400 text-xs">{errors.consent.message}</p>}
            </form>
          )}
        </div>

        {/* Pinned Sticky Footer: Cancel and Submit Buttons ALWAYS visible! */}
        {!isSuccess && (
          <div className="p-4 sm:p-5 border-t border-charcoal-700/90 bg-charcoal-900 shrink-0 flex items-center justify-between gap-3">
            <div className="hidden sm:flex items-center gap-2 text-xs text-softgrey">
              <ShieldCheck className="w-4 h-4 text-gold" />
              <span>Hyderabad & Vijayawada Operations</span>
            </div>

            <div className="flex items-center gap-3 ml-auto">
              <button
                type="button"
                onClick={handleResetAndClose}
                className="px-4 py-2.5 text-softgrey hover:text-white transition-colors text-xs font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                form="assessment-modal-form"
                disabled={isSubmitting}
                className="px-6 py-2.5 bg-gradient-to-r from-gold via-gold-light to-gold text-obsidian font-bold rounded-lg text-xs uppercase tracking-wider hover:brightness-105 disabled:opacity-50 transition-all flex items-center gap-2 shadow-gold-subtle"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <span>Submit Assessment Request</span>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
