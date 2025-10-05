/**
 * DashboardContent Component - Dashboard wrapper with toast integration
 * NASA Space Apps Challenge 2025
 */

import React from 'react';
import { useToast } from './Toast';

interface DashboardContentWrapperProps {
  children: (analyzeDemo: () => void) => React.ReactNode;
}

export const DashboardContentWrapper: React.FC<DashboardContentWrapperProps> = ({ children }) => {
  const { showToast } = useToast();

  const analyzeDemo = () => {
    showToast('info', 'Analyzing demo dataset...', 2000);
    
    setTimeout(() => {
      // Simulation: 85% probability of finding a planet
      const planetsFound = Math.random() > 0.15;
      
      if (planetsFound) {
        const planetCount = Math.floor(Math.random() * 3) + 1; // 1-3 planets
        showToast(
          'success', 
          `${planetCount} exoplanet${planetCount > 1 ? 's' : ''} identified! Check the AI Prediction panel for details`, 
          4000
        );
      } else {
        showToast('info', 'No exoplanets identified in this dataset', 3500);
      }
    }, 2500);
  };

  return <>{children(analyzeDemo)}</>;
};
