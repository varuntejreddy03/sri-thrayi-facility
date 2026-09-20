import React from 'react';
import { GoldDivider } from './GoldDivider';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  theme?: 'dark' | 'light';
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  description,
  theme = 'dark',
  align = 'left',
  className = '',
}) => {
  const isCenter = align === 'center';
  const isDark = theme === 'dark';

  return (
    <div className={`max-w-3xl ${isCenter ? 'mx-auto text-center' : ''} ${className}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-3 ${isDark ? 'text-gold' : 'text-gold-deep'}`}>
          <span>{eyebrow}</span>
        </div>
      )}
      
      <h2 className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.18] tracking-tight ${isDark ? 'text-white' : 'text-obsidian-900'}`}>
        {title}
      </h2>

      <div className="my-4">
        <GoldDivider centered={isCenter} />
      </div>

      {description && (
        <p className={`text-base sm:text-lg leading-relaxed font-light ${isDark ? 'text-softgrey' : 'text-charcoal-600'}`}>
          {description}
        </p>
      )}
    </div>
  );
};
