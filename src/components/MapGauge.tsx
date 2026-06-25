'use client';

import React from 'react';

type MapStatus = 'criticalLow' | 'borderline' | 'normal' | 'elevated' | 'high';

interface MapGaugeProps {
  value: number;
  status: MapStatus;
}

const statusColors: Record<MapStatus, string> = {
  criticalLow: '#ef4444', // red-500
  borderline: '#f97316', // orange-500
  normal: '#22c55e',      // green-500
  elevated: '#f59e0b',    // amber-500
  high: '#e11d48',       // rose-600
};

export default function MapGauge({ value, status }: MapGaugeProps) {
  // Map value to percentage (range 40 to 140 for the gauge)
  const min = 40;
  const max = 140;
  const clampedValue = Math.min(Math.max(value, min), max);
  const percentage = ((clampedValue - min) / (max - min)) * 100;
  
  // SVG Arc calculations
  const radius = 80;
  const circumference = Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex flex-col items-center">
      <svg className="h-32 w-64" viewBox="0 0 200 120">
        {/* Background Track */}
        <path
          d="M20,100 A80,80 0 0,1 180,100"
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="12"
          strokeLinecap="round"
        />
        {/* Color Zones */}
        {/* Critical Low: 40-60 (0% - 20%) */}
        <path
          d="M20,100 A80,80 0 0,1 52,43"
          fill="none"
          stroke={statusColors.criticalLow}
          strokeWidth="12"
          opacity="0.3"
        />
        {/* Normal: 65-100 (25% - 60%) */}
        <path
          d="M60,35 A80,80 0 0,1 140,35"
          fill="none"
          stroke={statusColors.normal}
          strokeWidth="12"
          opacity="0.3"
        />
        {/* High: 110-140 (70% - 100%) */}
        <path
          d="M148,43 A80,80 0 0,1 180,100"
          fill="none"
          stroke={statusColors.high}
          strokeWidth="12"
          opacity="0.3"
        />
        
        {/* Active Indicator */}
        <path
          d="M20,100 A80,80 0 0,1 180,100"
          fill="none"
          stroke={statusColors[status]}
          strokeWidth="12"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
        
        {/* Needle */}
        <g transform={`rotate(${(percentage * 1.8) - 180}, 100, 100)`} className="transition-transform duration-1000 ease-out">
          <line x1="100" y1="100" x2="30" y2="100" stroke="#1f2937" strokeWidth="2" />
          <circle cx="100" cy="100" r="4" fill="#1f2937" />
        </g>
      </svg>
      
      <div className="absolute bottom-2 flex flex-col items-center">
        <span className="text-3xl font-bold text-gray-900">{value}</span>
        <span className="text-xs font-semibold uppercase text-gray-500">mmHg</span>
      </div>
    </div>
  );
}
