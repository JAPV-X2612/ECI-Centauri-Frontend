/**
 * TransitLightCurve Component - Displays exoplanet transit data visualization
 * NASA Space Apps Challenge 2025
 */

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TransitLightCurveProps {
  isAnalyzing: boolean;
  uploadedImages?: string[]; // Array of image URLs to display
}

/**
 * SVG-based visualization of exoplanet transit light curve
 */
export const TransitLightCurve: React.FC<TransitLightCurveProps> = ({ isAnalyzing, uploadedImages }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : (uploadedImages?.length || 1) - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev < (uploadedImages?.length || 1) - 1 ? prev + 1 : 0));
  };

  return (
    <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-nasa-500/20">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Transit Light Curve</h3>
        {uploadedImages && uploadedImages.length > 0 && (
          <span className="text-xs text-green-400 bg-green-500/10 px-2 py-1 rounded">
            {uploadedImages.length} Images Loaded
          </span>
        )}
      </div>
      
      {/* Image Carousel - Display uploaded images if available */}
      {uploadedImages && uploadedImages.length > 0 ? (
        <div className="relative">
          {/* Main Image Container */}
          <div className="relative bg-slate-900/50 rounded-lg border border-nasa-500/10 overflow-hidden h-80 flex items-center justify-center">
            <img 
              src={uploadedImages[currentImageIndex]} 
              alt={`Transit Light Curve ${currentImageIndex + 1}`}
              className="max-w-full max-h-full object-contain"
            />
            
            {/* Image Counter Badge */}
            <div className="absolute top-3 left-3 bg-slate-900/90 px-3 py-1.5 rounded-lg text-sm font-medium text-nasa-300 border border-nasa-500/20">
              {currentImageIndex + 1} / {uploadedImages.length}
            </div>

            {/* Navigation Arrows */}
            {uploadedImages.length > 1 && (
              <>
                {/* Previous Button */}
                <button
                  onClick={handlePrevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-slate-900/90 hover:bg-slate-800 border border-nasa-500/30 hover:border-nasa-500 rounded-full p-2 transition-all duration-200 group"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6 text-nasa-300 group-hover:text-nasa-400" />
                </button>

                {/* Next Button */}
                <button
                  onClick={handleNextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-slate-900/90 hover:bg-slate-800 border border-nasa-500/30 hover:border-nasa-500 rounded-full p-2 transition-all duration-200 group"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6 text-nasa-300 group-hover:text-nasa-400" />
                </button>
              </>
            )}
          </div>

          {/* Thumbnail Indicators */}
          {uploadedImages.length > 1 && (
            <div className="flex items-center justify-center gap-2 mt-4">
              {uploadedImages.map((_, index) => (
                <button
                  key={`indicator-${index}`}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`transition-all duration-200 rounded-full ${
                    index === currentImageIndex
                      ? 'w-8 h-2 bg-nasa-500'
                      : 'w-2 h-2 bg-slate-600 hover:bg-slate-500'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}
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
};
