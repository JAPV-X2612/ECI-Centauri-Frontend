/**
 * QuickActions Component - Quick action buttons for analysis and upload
 * NASA Space Apps Challenge 2025
 */

import React from 'react';
import { Play, Upload } from 'lucide-react';

interface QuickActionsProps {
  onAnalyzeDemo: () => void;
}

/**
 * Quick action panel with demo analysis and data upload buttons
 */
export const QuickActions: React.FC<QuickActionsProps> = ({ onAnalyzeDemo }) => (
  <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-4 border border-nasa-500/20">
    <h3 className="text-sm font-semibold mb-3 text-nasa-300">Quick Start</h3>
    <button 
      onClick={onAnalyzeDemo} 
      className="w-full bg-gradient-to-r from-nasa-600 to-blue-600 hover:from-nasa-700 hover:to-blue-700 rounded-lg py-3 px-4 flex items-center justify-center gap-2 transition-all mb-2"
    >
      <Play className="w-4 h-4" />
      Analyze Demo Planet
    </button>
    <button className="w-full bg-slate-700/50 hover:bg-slate-700 rounded-lg py-3 px-4 flex items-center justify-center gap-2 transition-all">
      <Upload className="w-4 h-4" />
      Upload Your Data
    </button>
    <p className="text-xs text-gray-400 mt-2 text-center">Supports: .csv, .fits</p>
  </div>
);
