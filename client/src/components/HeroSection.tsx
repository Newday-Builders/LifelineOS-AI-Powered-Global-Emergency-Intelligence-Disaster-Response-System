import React from 'react';

/**
 * HeroSection Component
 * 
 * Design Philosophy: Cyberpunk Command Center
 * - Full-width hero banner with command center aesthetic
 * - Animated gradient overlay with neon accents
 * - Cinematic lighting and depth effects
 */
export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-96 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663670467001/HXmdzbNvjLKHoC5KRyKtLr/hero-command-center-fSLrQCpoTYEeF8jAuRQ56e.webp)',
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-space-black/40 via-space-black/60 to-space-black/80" />

      {/* Neon Accent Lines */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-50" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-50" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-neon-cyan uppercase tracking-wider mb-4 drop-shadow-lg">
          Emergency Intelligence
        </h2>
        <p className="text-lg md:text-xl text-holographic-white/80 uppercase tracking-widest drop-shadow-md">
          Real-Time Global Disaster Response System
        </p>
        <div className="mt-8 flex gap-4">
          <button className="px-8 py-3 rounded border-2 border-neon-cyan text-neon-cyan font-bold uppercase tracking-wider hover:bg-neon-cyan/10 transition-colors duration-300">
            Launch Dashboard
          </button>
          <button className="px-8 py-3 rounded bg-neon-cyan text-space-black font-bold uppercase tracking-wider hover:bg-neon-cyan/80 transition-colors duration-300">
            View Threats
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
