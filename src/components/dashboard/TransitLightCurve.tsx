/**
 * TransitLightCurve Component - Displays exoplanet transit data visualization
 * NASA Space Apps Challenge 2025
 */

import React from 'react';

interface TransitLightCurveProps {
  isAnalyzing: boolean;
  uploadedImages?: string[]; // Array of image URLs to display
}

/**
 * SVG-based visualization of exoplanet transit light curve
 */
export const TransitLightCurve: React.FC<TransitLightCurveProps> = ({ isAnalyzing, uploadedImages }) => (
  <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-nasa-500/20">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-semibold">Transit Light Curve</h3>
      {uploadedImages && uploadedImages.length > 0 && (
        <span className="text-xs text-green-400 bg-green-500/10 px-2 py-1 rounded">
          {uploadedImages.length} Images Loaded
        </span>
      )}
    </div>
    
    {/* Display uploaded images if available */}
    {uploadedImages && uploadedImages.length > 0 ? (
      <div className="space-y-3">
        {uploadedImages.map((imagePath, index) => (
          <div key={index} className="relative bg-slate-900/50 rounded-lg border border-nasa-500/10 overflow-hidden">
            <img 
              src={imagePath} 
              alt={`Transit Light Curve ${index + 1}`}
              className="w-full h-auto"
              style={{ maxHeight: '250px', objectFit: 'contain' }}
            />
            <div className="absolute top-2 left-2 bg-slate-900/80 px-2 py-1 rounded text-xs text-nasa-300">
              View {index + 1}
            </div>
          </div>
        ))}
      </div>
    ) : (
      /* Default SVG visualization */
      <div className="relative h-64 bg-slate-900/50 rounded-lg border border-nasa-500/10 overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 800 250">
          <path 
            d="M 0 125 L 200 125 L 250 145 L 300 145 L 350 125 L 800 125" 
            stroke="#8b5cf6" 
            strokeWidth="2" 
            fill="none" 
            className="drop-shadow-lg" 
          />
          <path 
            d="M 0 125 L 800 125" 
            stroke="#475569" 
            strokeWidth="1" 
            strokeDasharray="5,5" 
            fill="none" 
          />
          <rect 
            x="240" 
            y="130" 
            width="70" 
            height="30" 
            fill="#8b5cf6" 
            opacity="0.2" 
            rx="4" 
          />
          <text 
            x="275" 
            y="170" 
            fontSize="10" 
            fill="#a78bfa" 
            textAnchor="middle"
          >
            Transit Event
          </text>
        </svg>
        {isAnalyzing && (
          <div className="absolute inset-0 bg-slate-900/80 flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-nasa-500 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
              <p className="text-sm text-nasa-300">Analyzing transit pattern...</p>
            </div>
          </div>
        )}
      </div>
    )}
    
    <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
      <span>Time (days)</span>
      <span>Normalized Flux</span>
    </div>
  </div>
);
