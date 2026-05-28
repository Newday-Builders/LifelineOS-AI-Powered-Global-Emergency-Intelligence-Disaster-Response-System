import React, { useState, useEffect } from 'react';
import { ParticleBackground } from '@/components/ParticleBackground';
import { HeroSection } from '@/components/HeroSection';
import { HolographicCard } from '@/components/HolographicCard';
import { AIAssistant } from '@/components/AIAssistant';
import { GlobeVisualization } from '@/components/GlobeVisualization';
import { DashboardMetrics } from '@/components/DashboardMetrics';

/**
 * Home Page - LifelineOS Command Center
 * 
 * Design Philosophy: Cyberpunk Command Center
 * - Multi-column asymmetric dashboard layout
 * - Floating 3D panels with holographic effects
 * - Real-time data visualization
 * - AI assistant integration
 * - Immersive cinematic experience
 */
export default function Home() {
  const [showAI, setShowAI] = useState(true);
  const [systemStatus, setSystemStatus] = useState('OPERATIONAL');

  useEffect(() => {
    // Simulate real-time status updates
    const interval = setInterval(() => {
      setSystemStatus(Math.random() > 0.1 ? 'OPERATIONAL' : 'ALERT');
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-space-black text-holographic-white overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Header Navigation */}
        <header className="border-b border-neon-cyan/20 bg-space-black/50 backdrop-blur-md sticky top-0 z-40">
          <div className="container py-4 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg border-2 border-neon-cyan flex items-center justify-center">
                <span className="text-lg font-bold text-neon-cyan">◆</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-neon-cyan uppercase tracking-wider">
                  LifelineOS
                </h1>
                <p className="text-xs text-slate-gray">v2.7.4 - Global Emergency Intelligence</p>
              </div>
            </div>

            {/* Status Indicator */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{
                    backgroundColor: systemStatus === 'OPERATIONAL' ? '#00d9ff' : '#ff006e',
                  }}
                />
                <span className="text-xs font-bold uppercase tracking-wider">
                  {systemStatus}
                </span>
              </div>
              <div className="text-xs text-slate-gray">
                {new Date().toLocaleTimeString()}
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <HeroSection />

        {/* Main Dashboard */}
        <main className="container py-8">
          {/* Globe Visualization */}
          <div className="mb-8">
            <GlobeVisualization />
          </div>

          {/* Metrics Section */}
          <div className="mb-8">
            <DashboardMetrics />
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Real-time Alerts */}
            <HolographicCard className="p-6 floating-panel" glowing>
              <h3 className="text-sm font-bold text-neon-cyan uppercase tracking-wider mb-4">
                Real-time Alerts
              </h3>
              <div className="space-y-3">
                {[
                  { type: 'critical', text: 'Earthquake detected - Magnitude 7.2' },
                  { type: 'high', text: 'Flood warning - 3 regions affected' },
                  { type: 'medium', text: 'Storm system approaching coast' },
                ].map((alert, idx) => (
                  <div
                    key={idx}
                    className="p-2 rounded border-l-2 bg-space-black/50"
                    style={{
                      borderLeftColor: alert.type === 'critical' ? '#ff006e' : alert.type === 'high' ? '#ff6b35' : '#ffa500',
                    }}
                  >
                    <p className="text-xs text-holographic-white">{alert.text}</p>
                  </div>
                ))}
              </div>
            </HolographicCard>

            {/* Response Teams */}
            <HolographicCard className="p-6 floating-panel" glowing>
              <h3 className="text-sm font-bold text-neon-cyan uppercase tracking-wider mb-4">
                Active Response Teams
              </h3>
              <div className="space-y-3">
                {[
                  { name: 'Alpha Team', status: 'Deployed', color: '#00d9ff' },
                  { name: 'Bravo Team', status: 'En Route', color: '#8b5cf6' },
                  { name: 'Charlie Team', status: 'Standby', color: '#06b6d4' },
                ].map((team, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2 rounded bg-space-black/50">
                    <span className="text-xs font-semibold text-holographic-white">{team.name}</span>
                    <span
                      className="text-xs font-bold uppercase px-2 py-1 rounded"
                      style={{
                        color: team.color,
                        backgroundColor: team.color + '20',
                      }}
                    >
                      {team.status}
                    </span>
                  </div>
                ))}
              </div>
            </HolographicCard>

            {/* System Performance */}
            <HolographicCard className="p-6 floating-panel" glowing>
              <h3 className="text-sm font-bold text-neon-cyan uppercase tracking-wider mb-4">
                System Performance
              </h3>
              <div className="space-y-3">
                {[
                  { label: 'CPU Usage', value: '73%', color: '#00d9ff' },
                  { label: 'Memory', value: '64.8%', color: '#8b5cf6' },
                  { label: 'Network', value: '89.4%', color: '#06b6d4' },
                ].map((perf, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-gray uppercase">{perf.label}</span>
                      <span className="text-xs font-bold" style={{ color: perf.color }}>
                        {perf.value}
                      </span>
                    </div>
                    <div className="w-full h-1 rounded-full bg-space-black/50 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-300"
                        style={{
                          width: perf.value,
                          backgroundColor: perf.color,
                          boxShadow: `0 0 10px ${perf.color}`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </HolographicCard>
          </div>

          {/* Data Streams Section */}
          <HolographicCard className="p-6 mb-8" animated>
            <h3 className="text-sm font-bold text-neon-cyan uppercase tracking-wider mb-4">
              Live Data Streams
            </h3>
            <div className="space-y-2 text-xs font-mono text-slate-gray">
              <div className="flex items-center gap-2">
                <span className="text-neon-cyan">→</span>
                <span>[2026-05-28T08:45:23Z] Satellite telemetry: 2,847 data points received</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-neon-purple">→</span>
                <span>[2026-05-28T08:45:22Z] AI prediction model: 94.7% confidence level</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-neon-cyan">→</span>
                <span>[2026-05-28T08:45:21Z] Emergency response: 1,847 units deployed</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-neon-magenta">→</span>
                <span>[2026-05-28T08:45:20Z] Threat analysis: 23 critical zones identified</span>
              </div>
            </div>
          </HolographicCard>
        </main>
      </div>

      {/* AI Assistant */}
      <AIAssistant
        isActive={showAI}
        message="System online and monitoring. 23 active threats detected. All response teams operational. Ready to assist."
        onClose={() => setShowAI(false)}
      />
    </div>
  );
}
