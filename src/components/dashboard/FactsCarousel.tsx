/**
 * FactsCarousel Component - Educational facts about exoplanets
 * NASA Space Apps Challenge 2025
 */

import React from 'react';
import { EXOPLANET_FACTS } from '../../constants';

interface FactsCarouselProps {
  currentIndex: number;
  onPrevious: () => void;
  onNext: () => void;
}

/**
 * Carousel displaying educational facts about exoplanets
 */
export const FactsCarousel: React.FC<FactsCarouselProps> = ({ 
  currentIndex, 
  onPrevious, 
  onNext 
}) => (
  <div className="bg-gradient-to-br from-blue-900/30 to-nasa-900/30 backdrop-blur-lg rounded-xl p-4 border border-blue-500/30">
    <h3 className="text-sm font-semibold mb-2">💡 Did You Know?</h3>
    <p className="text-xs text-gray-300 leading-relaxed mb-3">
      {EXOPLANET_FACTS[currentIndex]}
    </p>
    <div className="flex justify-between items-center">
      <button 
        onClick={onPrevious} 
        className="text-xs text-nasa-400 hover:text-nasa-300"
      >
        ← Previous
      </button>
      <div className="flex gap-1">
        {EXOPLANET_FACTS.map((_, i) => (
          <div 
            key={i} 
            className={`w-1.5 h-1.5 rounded-full ${i === currentIndex ? 'bg-nasa-400' : 'bg-gray-600'}`} 
          />
        ))}
      </div>
      <button 
        onClick={onNext} 
        className="text-xs text-nasa-400 hover:text-nasa-300"
      >
        Next →
      </button>
    </div>
  </div>
);
