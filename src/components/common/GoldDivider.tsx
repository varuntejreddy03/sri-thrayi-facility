import React from 'react';

interface GoldDividerProps {
  className?: string;
  withDiamond?: boolean;
  centered?: boolean;
}

export const GoldDivider: React.FC<GoldDividerProps> = ({
  className = '',
  withDiamond = true,
  centered = false,
}) => {
  return (
    <div className={`flex items-center gap-3 ${centered ? 'justify-center' : ''} ${className}`}>
      <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-gold to-gold/80" />
      {withDiamond && (
        <div className="w-1.5 h-1.5 rotate-45 bg-gold/90 ring-2 ring-gold/20" />
      )}
      <div className="h-[1px] w-12 bg-gradient-to-l from-transparent via-gold to-gold/80" />
    </div>
  );
};
