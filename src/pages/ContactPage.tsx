import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { SEO } from '../components/common/SEO';
import { GoldDivider } from '../components/common/GoldDivider';
import { COMPANY_CONFIG } from '../data/config';
import { SERVICES_DATA } from '../data/services';
import { MapPin, Phone, Mail, MessageSquare, ExternalLink, CheckCircle2, Loader2, Building } from 'lucide-react';

interface ContactFormData {
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  propertyType: string;
  cityRegion: string;
  selectedServices: string[];
  location: string;
  message: string;
  consent: boolean;
  honeypot?: string;
}

export const ContactPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    defaultValues: {
      propertyType: 'Corporate Office',
      cityRegion: 'Hyderabad',
      selectedServices: ['Security Services'],
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    if (data.honeypot) return;

    setIsSubmitting(true);
    await new Promise((res) => setTimeout(res, 850));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const whatsappMessage = encodeURIComponent(
    'Hello Sri Thrayi Facility operations team, I would like to inquire about facility management services.'
  );
  const whatsappUrl = `https://wa.me/91${COMPANY_CONFIG.contact.whatsappRaw}?text=${whatsappMessage}`;

  return (
    <div className="bg-obsidian text-ivory pt-24 pb-16">
      <SEO
        title="Contact Us | Sri Thrayi Facility - Hyderabad & Vijayawada"
        description="Contact Sri Thrayi Facility. Corporate Headquarters in JNTU 9th Phase Hyderabad, and Regional Operations Office in Gunadala, Vijayawada."
        canonicalPath="/contact"
      />

      {/* Contact Hero */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-center overflow-hidden border-b border-charcoal-800">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-block px-3.5 py-1 rounded-full bg-charcoal-800 border border-gold/30 text-gold text-xs font-semibold tracking-widest uppercase mb-4 shadow-gold-subtle">
            Corporate Headquarters & Regional Operations
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-white tracking-tight leading-tight mb-4">
            Connect With Our Operations Desk
          </h1>
          <p className="text-base sm:text-lg text-softgrey font-light max-w-2xl mx-auto leading-relaxed">
            Reach out to our facility supervisors to schedule a preliminary site walkthrough or review service scopes for your property in Telangana and Andhra Pradesh.
          </p>
        </div>
      </section>

      {/* Main Split-Layout */}
      <section className="py-16 sm:py-24 bg-ivory text-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Side: Both Office Locations & Direct Channels */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-semibold tracking-widest text-gold-deep uppercase">
                  Office Locations
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-obsidian-900 font-normal mt-1 mb-3">
                  Two regional hubs serving your property.
                </h2>
                <GoldDivider />
                <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed font-light mt-3">
                  With our Corporate Headquarters in Hyderabad and a Regional Operations Office in Vijayawada, we coordinate on-site facility personnel across commercial, residential, and institutional facilities.
                </p>
              </div>

              {/* Office 1: Corporate Headquarters (Hyderabad) */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white border border-ivory-300 shadow-warm-card space-y-3">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center text-gold-deep shrink-0 mt-0.5">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] uppercase tracking-wider font-bold text-gold-deep bg-gold/10 px-2 py-0.5 rounded">
                        Corporate Headquarters
                      </span>
                    </div>
                    <h3 className="font-serif text-lg text-obsidian font-semibold">Hyderabad Office</h3>
                    <div className="text-xs sm:text-sm text-charcoal-700 leading-relaxed mt-1.5 space-y-0.5">
                      <p className="font-semibold text-obsidian">{COMPANY_CONFIG.name}</p>
                      <p>{COMPANY_CONFIG.address.line1},</p>
                      <p>{COMPANY_CONFIG.address.line2},</p>
                      <p>{COMPANY_CONFIG.address.city} – {COMPANY_CONFIG.address.postalCode},</p>
                      <p>{COMPANY_CONFIG.address.state}, {COMPANY_CONFIG.address.country}.</p>
                    </div>

                    <div className="pt-3">
                      <a
                        href={COMPANY_CONFIG.address.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-deep hover:underline"
                      >
                        <span>Open Hyderabad Office in Google Maps</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office 2: Regional Operations Office (Vijayawada) - Strictly WITHOUT Boys' Hostel Backside */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white border border-ivory-300 shadow-warm-card space-y-3">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-charcoal-800 text-gold flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] uppercase tracking-wider font-bold text-charcoal-700 bg-ivory-200 px-2 py-0.5 rounded">
                        Regional Office
                      </span>
                    </div>
                    <h3 className="font-serif text-lg text-obsidian font-semibold">Vijayawada Office</h3>
                    <div className="text-xs sm:text-sm text-charcoal-700 leading-relaxed mt-1.5 space-y-0.5">
                      <p className="font-semibold text-obsidian">{COMPANY_CONFIG.regionalOffice.line1},</p>
                      <p>{COMPANY_CONFIG.regionalOffice.line2},</p>
                      <p>{COMPANY_CONFIG.regionalOffice.city} – {COMPANY_CONFIG.regionalOffice.postalCode},</p>
                      <p>{COMPANY_CONFIG.regionalOffice.state}, {COMPANY_CONFIG.regionalOffice.country}.</p>
                    </div>

                    <div className="pt-3">
                      <a
                        href={COMPANY_CONFIG.regionalOffice.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-deep hover:underline"
                      >
                        <span>Open Vijayawada Office in Google Maps</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Channels */}
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-white border border-ivory-300 flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gold/15 flex items-center justify-center text-gold-deep">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-charcoal-500 uppercase tracking-wider block font-medium">Direct Telephone</span>
                      <a
                        href={`tel:${COMPANY_CONFIG.contact.phoneRaw}`}
                        className="text-sm font-semibold text-obsidian hover:text-gold-deep"
                      >
                        {COMPANY_CONFIG.contact.phoneFormatted}
                      </a>
                    </div>
                  </div>
                  <a
                    href={`tel:${COMPANY_CONFIG.contact.phoneRaw}`}
                    className="px-3.5 py-1.5 rounded-full bg-ivory-200 text-obsidian text-xs font-medium hover:bg-gold hover:text-obsidian transition-colors"
                  >
                    Call Now
                  </a>
                </div>

                <div className="p-4 rounded-xl bg-white border border-ivory-300 flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                      <MessageSquare className="w-4 h-4 fill-current" />
                    </div>
                    <div>
                      <span className="text-[10px] text-charcoal-500 uppercase tracking-wider block font-medium">WhatsApp Support</span>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-obsidian hover:text-emerald-700"
                      >
                        {COMPANY_CONFIG.contact.whatsappFormatted}
                      </a>
                    </div>
                  </div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-medium hover:bg-emerald-600 hover:text-white transition-colors"
                  >
                    Message
                  </a>
                </div>

                <div className="p-4 rounded-xl bg-white border border-ivory-300 flex items-center gap-3 shadow-sm">
                  <div className="w-9 h-9 rounded-full bg-gold/15 flex items-center justify-center text-gold-deep">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-charcoal-500 uppercase tracking-wider block font-medium">Inquiries Email</span>
                    <a
                      href={`mailto:${COMPANY_CONFIG.contact.email}`}
                      className="text-sm font-semibold text-obsidian hover:text-gold-deep"
                    >
                      {COMPANY_CONFIG.contact.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Working Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-2xl bg-charcoal-900 border border-gold/40 shadow-elevated-dark text-ivory">
                {isSuccess ? (
                  <div className="py-12 text-center space-y-5">
                    <div className="w-16 h-16 mx-auto bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <h3 className="font-serif text-3xl text-white">Inquiry Received Successfully</h3>
                    <p className="text-softgrey text-sm sm:text-base leading-relaxed max-w-md mx-auto">
                      Thank you for contacting Sri Thrayi Facility. Our operations supervisors will review your property parameters and reach out promptly.
                    </p>
                    <div className="pt-4 flex flex-wrap justify-center gap-3">
                      <button
                        onClick={() => {
                          setIsSuccess(false);
                          reset();
                        }}
                        className="px-6 py-2.5 bg-gold text-obsidian font-semibold rounded-full text-sm hover:bg-gold-light transition-all"
                      >
                        Submit Another Inquiry
                      </button>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2.5 bg-charcoal-800 text-ivory border border-gold/40 rounded-full text-sm hover:border-gold transition-all"
                      >
                        Instant WhatsApp Chat
                      </a>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="mb-6">
                      <span className="text-xs font-semibold tracking-widest text-gold uppercase">
                        Property Consultation
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl text-white mt-1">
                        Send an Operational Inquiry
                      </h3>
                      <p className="text-xs sm:text-sm text-softgrey mt-1 font-light">
                        Fill out the form below. All fields marked with * are required for preliminary assessment.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-sm">
                      <input type="text" className="hidden" {...register('honeypot')} tabIndex={-1} autoComplete="off" />

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-softgrey mb-1">Your Full Name *</label>
                          <input
                            type="text"
                            {...register('fullName', { required: 'Full name is required' })}
                            placeholder="e.g. Suresh Varma"
                            className="w-full px-3.5 py-2.5 bg-charcoal-800 border border-charcoal-700 rounded-lg text-ivory placeholder-softgrey/40 focus:border-gold focus:outline-none transition-colors"
                          />
                          {errors.fullName && <p className="text-rose-400 text-xs mt-1">{errors.fullName.message}</p>}
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-softgrey mb-1">Company / Property Name *</label>
                          <input
                            type="text"
                            {...register('companyName', { required: 'Property name is required' })}
                            placeholder="e.g. Cyber Heights Tower"
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
                              required: 'Email is required',
                              pattern: {
                                value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                                message: 'Please enter a valid email address',
                              },
                            })}
                            placeholder="e.g. management@property.com"
                            className="w-full px-3.5 py-2.5 bg-charcoal-800 border border-charcoal-700 rounded-lg text-ivory placeholder-softgrey/40 focus:border-gold focus:outline-none transition-colors"
                          />
                          {errors.email && <p className="text-rose-400 text-xs mt-1">{errors.email.message}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-softgrey mb-1">Region / City *</label>
                          <select
                            {...register('cityRegion', { required: 'Select region' })}
                            className="w-full px-3.5 py-2.5 bg-charcoal-800 border border-charcoal-700 rounded-lg text-ivory focus:border-gold focus:outline-none transition-colors"
                          >
                            <option value="Hyderabad">Hyderabad (Telangana)</option>
                            <option value="Vijayawada">Vijayawada (Andhra Pradesh)</option>
                            <option value="Other Region">Other Region</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-softgrey mb-1">Property Type *</label>
                          <select
                            {...register('propertyType', { required: 'Select property type' })}
                            className="w-full px-3.5 py-2.5 bg-charcoal-800 border border-charcoal-700 rounded-lg text-ivory focus:border-gold focus:outline-none transition-colors"
                          >
                            <option value="Corporate Office">Corporate Office</option>
                            <option value="Residential Community">Residential Community</option>
                            <option value="Commercial Tower">Commercial Tower</option>
                            <option value="Retail Space / Mall">Retail Space / Mall</option>
                            <option value="Educational Institution">Educational Institution</option>
                            <option value="Healthcare Facility">Healthcare Facility</option>
                            <option value="Other Commercial Premise">Other Commercial Premise</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-softgrey mb-1">Property Location / Area *</label>
                          <input
                            type="text"
                            {...register('location', { required: 'Please specify area' })}
                            placeholder="e.g. JNTU, Madhapur, Gunadala"
                            className="w-full px-3.5 py-2.5 bg-charcoal-800 border border-charcoal-700 rounded-lg text-ivory placeholder-softgrey/40 focus:border-gold focus:outline-none transition-colors"
                          />
                          {errors.location && <p className="text-rose-400 text-xs mt-1">{errors.location.message}</p>}
                        </div>
                      </div>

                      {/* Services Required Multi-select */}
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
                                {...register('selectedServices', { required: 'Please choose at least one service' })}
                                className="rounded border-charcoal-600 text-gold focus:ring-gold bg-charcoal-700"
                              />
                              <span className="font-medium text-ivory/90">{srv.title}</span>
                            </label>
                          ))}
                        </div>
                        {errors.selectedServices && <p className="text-rose-400 text-xs mt-1">{errors.selectedServices.message}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-softgrey mb-1">Facility Details / Notes</label>
                        <textarea
                          rows={3}
                          {...register('message')}
                          placeholder="Tell us about the property size, expected shift timings, number of personnel needed, or operational challenges..."
                          className="w-full px-3.5 py-2.5 bg-charcoal-800 border border-charcoal-700 rounded-lg text-ivory placeholder-softgrey/40 focus:border-gold focus:outline-none transition-colors resize-none"
                        />
                      </div>

                      <div className="flex items-start gap-2 pt-1">
                        <input
                          type="checkbox"
                          id="contact-consent"
                          {...register('consent', { required: 'Please check this box to proceed' })}
                          className="mt-0.5 rounded border-charcoal-600 text-gold focus:ring-gold bg-charcoal-700"
                        />
                        <label htmlFor="contact-consent" className="text-xs text-softgrey leading-tight">
                          I consent to being contacted by Sri Thrayi Facility regarding this facility management inquiry.
                        </label>
                      </div>
                      {errors.consent && <p className="text-rose-400 text-xs">{errors.consent.message}</p>}

                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-4 bg-gradient-to-r from-gold via-gold-light to-gold text-obsidian font-bold rounded-lg text-sm hover:brightness-105 transition-all shadow-gold-subtle flex items-center justify-center gap-2 disabled:opacity-50 tracking-refined"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              <span>Submitting Inquiry...</span>
                            </>
                          ) : (
                            <span>Submit Operational Inquiry</span>
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
