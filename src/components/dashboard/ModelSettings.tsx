/**
 * ModelSettings Component - AI model information panel
 * NASA Space Apps Challenge 2025
 */

import React from 'react';
import { Brain } from 'lucide-react';

/**
 * Panel displaying the AI model used for exoplanet detection
 */
export const ModelSettings: React.FC = () => (
  <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-4 border border-nasa-500/20">
    <h3 className="text-sm font-semibold mb-3 text-nasa-300 flex items-center gap-2">
      <Brain className="w-4 h-4" />
      AI Model
    </h3>
    <div className="space-y-3">
      <div className="bg-gradient-to-br from-nasa-900/50 to-blue-900/50 rounded-lg p-4 border border-nasa-500/30">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 bg-nasa-400 rounded-full animate-pulse"></div>
          <h4 className="text-sm font-bold text-nasa-400">CNN</h4>
        </div>
        <p className="text-xs text-white font-semibold mb-1">
          Convolutional Neural Network
        </p>
        <p className="text-xs text-gray-400 leading-relaxed">
          Deep learning architecture specialized in pattern recognition from light curve data. 
          Our CNN model analyzes transit signals to identify potential exoplanets with high accuracy.
        </p>
      </div>
      
      <div className="text-xs text-gray-500 text-center pt-2 border-t border-nasa-500/10">
        Trained on Kepler mission data
      </div>
    </div>
  </div>
);
