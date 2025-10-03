/**
 * ActionButtons Component - Export and share buttons
 * NASA Space Apps Challenge 2025
 */

import React from 'react';
import { Download, Share2 } from 'lucide-react';

interface ActionButtonsProps {
  onShare: () => void;
}

/**
 * Buttons for exporting results and sharing discoveries
 */
export const ActionButtons: React.FC<ActionButtonsProps> = ({ onShare }) => (
  <div className="space-y-2">
    <button className="w-full bg-slate-700/50 hover:bg-slate-700 rounded-lg py-3 px-4 text-sm transition-all flex items-center justify-center gap-2">
      <Download className="w-4 h-4" />
      Export Results (.csv, .xlsx, .pdf)
    </button>
    <button 
      onClick={onShare} 
      className="w-full bg-slate-700/50 hover:bg-slate-700 rounded-lg py-3 px-4 text-sm transition-all flex items-center justify-center gap-2"
    >
      <Share2 className="w-4 h-4" />
      Share Discovery
    </button>
  </div>
);
