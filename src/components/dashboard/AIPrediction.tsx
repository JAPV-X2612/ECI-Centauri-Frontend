/**
 * AIPrediction Component - Displays AI model predictions for exoplanet detection
 * NASA Space Apps Challenge 2025
 */

import React from 'react';
import { Brain } from 'lucide-react';

interface AIPredictionProps {
  confidence: number;
}

/**
 * Displays AI confidence level and key metrics
 */
export const AIPrediction: React.FC<AIPredictionProps> = ({ confidence }) => (
  <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-lg rounded-xl p-6 border border-purple-500/30">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-semibold flex items-center gap-2">
        <Brain className="w-5 h-5 text-purple-400" />
        AI Prediction
      </h3>
      <div className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-xs text-green-400 font-semibold">
        CONFIRMED EXOPLANET
      </div>
    </div>
    
    <div className="mb-4">
      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-400">Confidence Level</span>
        <span className="font-bold text-green-400">{confidence}%</span>
      </div>
      <div className="h-3 bg-slate-700/50 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full transition-all duration-500" 
          style={{ width: `${confidence}%` }}
        />
      </div>
    </div>
    
    <div className="grid grid-cols-3 gap-3">
      <div className="bg-slate-800/50 rounded-lg p-3 border border-purple-500/20">
        <div className="text-xs text-gray-400 mb-1">Transit Depth</div>
        <div className="text-lg font-bold text-purple-400">0.8%</div>
        <div className="text-xs text-green-400">✓ Typical</div>
      </div>
      <div className="bg-slate-800/50 rounded-lg p-3 border border-purple-500/20">
        <div className="text-xs text-gray-400 mb-1">Orbital Period</div>
        <div className="text-lg font-bold text-blue-400">12.3d</div>
        <div className="text-xs text-green-400">✓ Stable</div>
      </div>
      <div className="bg-slate-800/50 rounded-lg p-3 border border-purple-500/20">
        <div className="text-xs text-gray-400 mb-1">Signal/Noise</div>
        <div className="text-lg font-bold text-purple-400">15.2</div>
        <div className="text-xs text-green-400">✓ Strong</div>
      </div>
    </div>
  </div>
);
