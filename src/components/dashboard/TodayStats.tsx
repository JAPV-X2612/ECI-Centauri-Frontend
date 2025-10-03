/**
 * TodayStats Component - Daily statistics panel
 * NASA Space Apps Challenge 2025
 */

import React from 'react';

/**
 * Displays today's analysis statistics
 */
export const TodayStats: React.FC = () => (
  <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-4 border border-nasa-500/20">
    <h3 className="text-sm font-semibold mb-3 text-nasa-300">Today's Stats</h3>
    <div className="space-y-2 text-sm">
      <div className="flex justify-between">
        <span className="text-gray-400">Analyses Run</span>
        <span className="font-semibold text-blue-400">1,247</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-400">Candidates Found</span>
        <span className="font-semibold text-nasa-400">23</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-400">No Exoplanets</span>
        <span className="font-semibold text-red-400">892</span>
      </div>
    </div>
  </div>
);
