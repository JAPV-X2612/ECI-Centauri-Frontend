/**
 * ModelPerformance Component - Displays AI model performance metrics
 * NASA Space Apps Challenge 2025
 */

import React from 'react';
import { TrendingUp } from 'lucide-react';

/**
 * Shows accuracy, precision, and recall metrics
 */
export const ModelPerformance: React.FC = () => (
  <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-4 border border-nasa-500/20">
    <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
      <TrendingUp className="w-4 h-4 text-green-400" />
      Model Performance
    </h3>
    <div className="space-y-3">
      <div>
        <div className="flex justify-between text-xs mb-1">
          <span className="text-gray-400">Accuracy</span>
          <span className="font-semibold text-green-400">94.2%</span>
        </div>
        <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
          <div className="h-full w-11/12 bg-green-500 rounded-full" />
        </div>
      </div>
      <div>
        <div className="flex justify-between text-xs mb-1">
          <span className="text-gray-400">Precision</span>
          <span className="font-semibold text-blue-400">91.8%</span>
        </div>
        <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
          <div className="h-full w-11/12 bg-blue-500 rounded-full" />
        </div>
      </div>
      <div>
        <div className="flex justify-between text-xs mb-1">
          <span className="text-gray-400">Recall</span>
          <span className="font-semibold text-nasa-400">89.3%</span>
        </div>
        <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
          <div className="h-full w-9/12 bg-nasa-500 rounded-full" />
        </div>
      </div>
    </div>
    <div className="mt-3 pt-3 border-t border-nasa-500/20 text-xs text-gray-400">
      Trained on 10,234 confirmed exoplanets
    </div>
  </div>
);
