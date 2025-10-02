/**
 * PlanetVisualization Component - 3D planet visualization
 * NASA Space Apps Challenge 2025
 */

import React from 'react';

/**
 * Animated planet visualization
 */
export const PlanetVisualization: React.FC = () => (
  <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20 flex items-center justify-center">
    <div className="relative w-32 h-32">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse opacity-50 blur-xl" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full shadow-2xl flex items-center justify-center">
        <div className="text-4xl">🪐</div>
      </div>
    </div>
  </div>
);
