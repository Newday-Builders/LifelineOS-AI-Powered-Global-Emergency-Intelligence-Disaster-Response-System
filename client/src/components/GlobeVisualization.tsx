import React, { useState } from 'react';
import { HolographicCard } from './HolographicCard';

interface ThreatIndicator {
  id: string;
  lat: number;
  lng: number;
  type: 'critical' | 'high' | 'medium' | 'low';
  label: string;
}

interface GlobeVisualizationProps {
  threats?: ThreatIndicator[];
}

/**
 * GlobeVisualization Component
 * 
 * Design Philosophy: Cyberpunk Command Center
 * - 3D holographic Earth visualization
 * - Real-time threat indicators with pulsing animations
 * - Neon cyan and magenta glow effects
 * - Interactive emergency response data
 */
export const GlobeVisualization: React.FC<GlobeVisualizationProps> = ({
  threats = [
    { id: '1', lat: 35.6762, lng: 139.6503, type: 'critical', label: 'Tokyo' },
    { id: '2', lat: 40.7128, lng: -74.0060, type: 'high', label: 'New York' },
    { id: '3', lat: 51.5074, lng: -0.1278, type: 'medium', label: 'London' },
    { id: '4', lat: -33.8688, lng: 151.2093, type: 'low', label: 'Sydney' },
  ],
}) => {
  const [selectedThreat, setSelectedThreat] = useState<ThreatIndicator | null>(null);

  const getThreatColor = (type: string) => {
    switch (type) {
      case 'critical':
        return '#ff006e';
      case 'high':
        return '#ff6b35';
      case 'medium':
        return '#ffa500';
      case 'low':
        return '#00d9ff';
      default:
        return '#00d9ff';
    }
  };

  const getThreatLabel = (type: string) => {
    return type.toUpperCase();
  };

  return (
    <HolographicCard className="w-full h-96 p-6 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold text-neon-cyan uppercase tracking-wider">
            Global Threat Monitor
          </h3>
          <p className="text-xs text-slate-gray mt-1">Real-time Emergency Response</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-neon-cyan">{threats.length}</p>
          <p className="text-xs text-slate-gray">Active Threats</p>
        </div>
      </div>

      {/* Globe Placeholder with Threat Visualization */}
      <div className="flex-1 relative rounded border border-neon-cyan/20 bg-gradient-to-br from-space-black to-space-black/50 overflow-hidden flex items-center justify-center">
        {/* Background grid */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 400 300">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00d9ff" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="400" height="300" fill="url(#grid)" />
          </svg>
        </div>

        {/* Threat Indicators */}
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Globe representation */}
          <div className="relative w-48 h-48 rounded-full border border-neon-cyan/30 flex items-center justify-center">
            {/* Inner glow */}
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10" />
            
            {/* Threat points */}
            {threats.map((threat) => {
              const angle = (threat.lng + 180) / 360 * Math.PI * 2;
              const radius = 90;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius * 0.5;
              const color = getThreatColor(threat.type);

              return (
                <div
                  key={threat.id}
                  className="absolute w-3 h-3 rounded-full cursor-pointer transform -translate-x-1/2 -translate-y-1/2 hover:scale-150 transition-transform duration-200"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    backgroundColor: color,
                    boxShadow: `0 0 10px ${color}, 0 0 20px ${color}80`,
                  }}
                  onClick={() => setSelectedThreat(threat)}
                  title={threat.label}
                />
              );
            })}

            {/* Center indicator */}
            <div className="absolute w-2 h-2 rounded-full bg-neon-cyan" />
          </div>
        </div>
      </div>

      {/* Threat List */}
      <div className="mt-4 space-y-2 max-h-24 overflow-y-auto">
        {threats.map((threat) => (
          <div
            key={threat.id}
            className="flex items-center justify-between p-2 rounded border border-neon-cyan/20 bg-space-black/50 hover:bg-space-black/80 cursor-pointer transition-colors duration-200"
            onClick={() => setSelectedThreat(threat)}
            style={{
              borderLeftColor: getThreatColor(threat.type),
              borderLeftWidth: '3px',
            }}
          >
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: getThreatColor(threat.type) }}
              />
              <span className="text-xs font-semibold text-holographic-white">
                {threat.label}
              </span>
            </div>
            <span
              className="text-xs font-bold uppercase tracking-wider px-2 py-1 rounded"
              style={{
                color: getThreatColor(threat.type),
                backgroundColor: getThreatColor(threat.type) + '20',
              }}
            >
              {getThreatLabel(threat.type)}
            </span>
          </div>
        ))}
      </div>

      {/* Selected Threat Detail */}
      {selectedThreat && (
        <div className="mt-4 p-3 rounded border border-neon-cyan/30 bg-space-black/70 text-xs">
          <p className="text-neon-cyan font-bold mb-1">{selectedThreat.label}</p>
          <p className="text-slate-gray">
            Coordinates: {selectedThreat.lat.toFixed(2)}°, {selectedThreat.lng.toFixed(2)}°
          </p>
        </div>
      )}
    </HolographicCard>
  );
};

export default GlobeVisualization;
