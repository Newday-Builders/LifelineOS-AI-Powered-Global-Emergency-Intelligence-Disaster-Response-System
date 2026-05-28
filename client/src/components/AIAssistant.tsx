import React, { useState, useEffect } from 'react';
import { HolographicCard } from './HolographicCard';

interface AIAssistantProps {
  isActive?: boolean;
  message?: string;
  onClose?: () => void;
}

/**
 * AIAssistant Component
 * 
 * Design Philosophy: Cyberpunk Command Center
 * - Holographic AI character avatar with neon cyan glow
 * - Floating animation with pulsing effects
 * - Displays AI messages and recommendations
 * - Integrated into the command center interface
 */
export const AIAssistant: React.FC<AIAssistantProps> = ({
  isActive = false,
  message = "System online. Ready for emergency response.",
  onClose,
}) => {
  const [isVisible, setIsVisible] = useState(isActive);

  useEffect(() => {
    setIsVisible(isActive);
  }, [isActive]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <HolographicCard
        glowing
        floating
        className="w-80 p-6"
      >
        {/* AI Avatar Container */}
        <div className="flex flex-col items-center gap-4">
          {/* Avatar Circle */}
          <div className="relative w-24 h-24 flex items-center justify-center">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full border-2 border-neon-cyan/50 animate-pulse" />
            <div className="absolute inset-2 rounded-full border border-neon-cyan/30" />
            
            {/* Avatar image placeholder with glow */}
            <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-neon-cyan/30 to-neon-purple/30 flex items-center justify-center overflow-hidden">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent animate-pulse" />
              
              {/* AI Symbol */}
              <div className="relative z-10 text-2xl font-bold text-neon-cyan">
                ◆
              </div>
            </div>
          </div>

          {/* AI Status */}
          <div className="text-center">
            <h3 className="text-sm font-bold text-neon-cyan uppercase tracking-wider">
              LifelineOS AI
            </h3>
            <p className="text-xs text-slate-gray mt-1">v2.7.4</p>
          </div>

          {/* Message Display */}
          <div className="w-full p-3 rounded border border-neon-cyan/30 bg-space-black/50 backdrop-blur">
            <p className="text-xs text-holographic-white leading-relaxed">
              {message}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="w-full flex gap-2">
            <button
              className="flex-1 px-3 py-2 rounded text-xs font-semibold text-space-black bg-neon-cyan hover:bg-neon-cyan/80 transition-colors duration-200"
              onClick={() => setIsVisible(false)}
            >
              Acknowledge
            </button>
            {onClose && (
              <button
                className="flex-1 px-3 py-2 rounded text-xs font-semibold text-neon-cyan border border-neon-cyan/50 hover:bg-neon-cyan/10 transition-colors duration-200"
                onClick={onClose}
              >
                Dismiss
              </button>
            )}
          </div>
        </div>
      </HolographicCard>
    </div>
  );
};

export default AIAssistant;
