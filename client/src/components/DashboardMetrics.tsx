import React from 'react';
import { HolographicCard } from './HolographicCard';

interface Metric {
  label: string;
  value: string | number;
  unit?: string;
  trend?: 'up' | 'down' | 'stable';
  color?: string;
}

interface DashboardMetricsProps {
  title?: string;
  metrics?: Metric[];
}

/**
 * DashboardMetrics Component
 * 
 * Design Philosophy: Cyberpunk Command Center
 * - Real-time metrics display with neon styling
 * - Animated data updates with glow effects
 * - Color-coded indicators for different metric types
 */
export const DashboardMetrics: React.FC<DashboardMetricsProps> = ({
  title = 'System Metrics',
  metrics = [
    { label: 'System Status', value: '100%', color: '#00d9ff', trend: 'stable' },
    { label: 'Active Incidents', value: '12', color: '#ff006e', trend: 'up' },
    { label: 'Response Time', value: '2.3s', color: '#8b5cf6', trend: 'down' },
    { label: 'Coverage', value: '94.7%', color: '#06b6d4', trend: 'stable' },
  ],
}) => {
  const getTrendIcon = (trend?: string) => {
    switch (trend) {
      case 'up':
        return '↑';
      case 'down':
        return '↓';
      default:
        return '→';
    }
  };

  return (
    <HolographicCard className="w-full p-6">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-neon-cyan uppercase tracking-wider">
          {title}
        </h3>
        <div className="mt-2 h-px bg-gradient-to-r from-neon-cyan/50 to-transparent" />
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 gap-4">
        {metrics.map((metric, idx) => (
          <div
            key={idx}
            className="p-4 rounded border border-neon-cyan/20 bg-space-black/50 hover:bg-space-black/80 transition-colors duration-200"
            style={{
              borderLeftColor: metric.color || '#00d9ff',
              borderLeftWidth: '3px',
            }}
          >
            {/* Label */}
            <p className="text-xs text-slate-gray uppercase tracking-wider mb-2">
              {metric.label}
            </p>

            {/* Value */}
            <div className="flex items-baseline gap-2">
              <span
                className="text-2xl font-bold"
                style={{ color: metric.color || '#00d9ff' }}
              >
                {metric.value}
              </span>
              {metric.unit && (
                <span className="text-xs text-slate-gray">{metric.unit}</span>
              )}
            </div>

            {/* Trend */}
            {metric.trend && (
              <div className="mt-2 flex items-center gap-1">
                <span
                  className="text-xs font-bold"
                  style={{ color: metric.color || '#00d9ff' }}
                >
                  {getTrendIcon(metric.trend)}
                </span>
                <span className="text-xs text-slate-gray">
                  {metric.trend === 'up' && 'Increasing'}
                  {metric.trend === 'down' && 'Decreasing'}
                  {metric.trend === 'stable' && 'Stable'}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </HolographicCard>
  );
};

export default DashboardMetrics;
