import React from 'react';

const IPALogo = ({ className = "h-9 md:h-12 w-24 md:w-32" }) => {
  return (
    <div 
      className={`relative flex items-center justify-center bg-[#E52521] text-white rounded-[10px] md:rounded-[15px] select-none font-serif tracking-tighter shadow-lg transition-transform duration-300 ${className}`}
      style={{ boxShadow: '0 4px 14px rgba(229, 37, 33, 0.35)' }}
    >
      {/* High-fidelity IPA serif letters styled precisely to match the logo */}
      <span 
        className="text-[1.8rem] md:text-[2.5rem] font-bold leading-none tracking-tight"
        style={{ 
          fontFamily: 'serif', 
          fontWeight: 900,
          letterSpacing: '-0.04em',
          textShadow: '0px 1px 2px rgba(0,0,0,0.1)'
        }}
      >
        IPA
      </span>
      {/* Registered sign ® */}
      <span 
        className="absolute top-[6px] md:top-[8px] right-[8px] md:right-[10px] text-[0.45rem] md:text-[0.6rem] font-sans font-black leading-none"
        style={{ letterSpacing: 'normal' }}
      >
        ®
      </span>
    </div>
  );
};

export default IPALogo;
