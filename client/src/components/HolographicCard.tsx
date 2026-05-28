import React from 'react';

interface HolographicCardProps {
  children: React.ReactNode;
  className?: string;
  glowing?: boolean;
  floating?: boolean;
  animated?: boolean;
  onClick?: () => void;
}

/**
 * HolographicCard Component
 * 
 * Design Philosophy: Cyberpunk Command Center
 * - Neon cyan borders with inner glow effects
 * - Transparent holographic glass effect
 * - Optional floating animation and pulsing glow
 * - Backdrop blur for depth layering
 */
export const HolographicCard: React.FC<HolographicCardProps> = ({
  children,
  className = '',
  glowing = true,
  floating = false,
  animated = false,
  onClick,
}) => {
  const baseClasses = 'holographic-card relative rounded-lg overflow-hidden';
  const glowClasses = glowing ? 'pulse-glow' : '';
  const floatClasses = floating ? 'floating-panel' : '';
  const animatedClasses = animated ? 'transition-all duration-300' : '';
  const interactiveClasses = onClick ? 'cursor-pointer hover:shadow-[0_0_30px_rgba(0,217,255,0.4)]' : '';

  return (
    <div
      className={`${baseClasses} ${glowClasses} ${floatClasses} ${animatedClasses} ${interactiveClasses} ${className}`}
      onClick={onClick}
    >
      {/* Holographic gradient overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />
      
      {/* Scan line effect */}
      {animated && <div className="scan-line" />}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default HolographicCard;
