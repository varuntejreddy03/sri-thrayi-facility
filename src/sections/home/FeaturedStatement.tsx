import React from 'react';

export const FeaturedStatement: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-36 bg-obsidian-950 text-white overflow-hidden">
      {/* Full-width Close-up Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/operations-close.jpg"
          alt="Clean facility operational interior"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/85 to-obsidian" />
        <div className="absolute inset-0 bg-grid-architectural opacity-25" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-12 h-[1px] bg-gold mx-auto mb-8" />

        <blockquote className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal leading-tight tracking-tight text-white mb-6">
          “Clean spaces. Safe environments.{' '}
          <span className="text-gold-gradient italic block sm:inline">
            Reliable operations.
          </span>”
        </blockquote>

        <p className="text-base sm:text-xl text-softgrey font-light max-w-2xl mx-auto leading-relaxed">
          Facility management should work quietly, consistently and professionally—every day.
        </p>

        <div className="w-12 h-[1px] bg-gold mx-auto mt-8" />
      </div>
    </section>
  );
};
