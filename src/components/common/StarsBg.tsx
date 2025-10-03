/**
 * StarsBg Component - Animated starry background
 * NASA Space Apps Challenge 2025
 */

import React from 'react';

/**
 * Creates an animated starry background with randomly positioned stars
 */
export const StarsBg: React.FC = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none">
    {[...Array(50)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          opacity: Math.random() * 0.7 + 0.3
        }}
      />
    ))}
  </div>
);
