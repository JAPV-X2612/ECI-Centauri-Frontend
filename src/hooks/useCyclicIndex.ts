/**
 * Custom React hook for cycling through facts
 * NASA Space Apps Challenge 2025
 */

import { useState, useEffect } from 'react';

/**
 * Hook to automatically cycle through an array of items
 * @param items - Array of items to cycle through
 * @param interval - Time in milliseconds between cycles (default: 7000ms)
 * @returns Current index and manual navigation functions
 */
export const useCyclicIndex = (items: any[], interval: number = 7000) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [items.length, interval]);

  /**
   * Navigate to next item
   */
  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  /**
   * Navigate to previous item
   */
  const previous = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  /**
   * Set specific index
   */
  const setIndex = (index: number) => {
    if (index >= 0 && index < items.length) {
      setCurrentIndex(index);
    }
  };

  return {
    currentIndex,
    next,
    previous,
    setIndex
  };
};
