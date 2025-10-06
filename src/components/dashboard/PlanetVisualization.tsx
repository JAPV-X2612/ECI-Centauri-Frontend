/**
 * PlanetVisualization Component - 3D exoplanet model viewer
 * NASA Space Apps Challenge 2025
 * Cycles through 5 different exoplanet models every 20 seconds
 */

import React, { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';

const EXOPLANET_MODELS = [
  { id: 1, name: 'Exoplanet Alpha', path: '/exoplanets/exoplanet_1/scene.gltf' },
  { id: 2, name: 'Exoplanet Beta', path: '/exoplanets/exoplanet_2/scene.gltf' },
  { id: 3, name: 'Exoplanet Gamma', path: '/exoplanets/exoplanet_3/scene.gltf' },
  { id: 4, name: 'Exoplanet Delta', path: '/exoplanets/exoplanet_4/scene.gltf' },
  { id: 5, name: 'Exoplanet Epsilon', path: '/exoplanets/exoplanet_5/scene.gltf' }
];

const MODEL_ROTATION_INTERVAL = 60000; // 60 seconds

/**
 * 3D exoplanet model viewer with automatic rotation
 */
export const PlanetVisualization: React.FC = () => {
  const [currentModelIndex, setCurrentModelIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Auto-rotate through models every 20 seconds
    const interval = setInterval(() => {
      setIsLoading(true);
      setCurrentModelIndex((prev) => (prev + 1) % EXOPLANET_MODELS.length);
    }, MODEL_ROTATION_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  const currentModel = EXOPLANET_MODELS[currentModelIndex];

  // Generate model viewer URL using Google's model-viewer or similar
  const getModelViewerHTML = () => {
    // Different camera distances for each model to adjust zoom
    const cameraDistances = [
      '105%',   // Model 1 - good size (keep as is)
      '250%',   // Model 2 - zoom out significantly
      '250%',   // Model 3 - zoom out significantly
      '250%',   // Model 4 - zoom out significantly
      '250%',   // Model 5 - zoom out significantly
    ];
    
    const cameraOrbit = `0deg 75deg ${cameraDistances[currentModelIndex]}`;
    
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <script type="module" src="https://unpkg.com/@google/model-viewer@3.3.0/dist/model-viewer.min.js"></script>
          <style>
            body {
              margin: 0;
              padding: 0;
              background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%);
              overflow: hidden;
              height: 100vh;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            model-viewer {
              width: 100%;
              height: 100%;
              --poster-color: transparent;
            }
          </style>
        </head>
        <body>
          <model-viewer
            src="${currentModel.path}"
            alt="${currentModel.name}"
            auto-rotate
            camera-controls
            touch-action="pan-y"
            disable-zoom
            shadow-intensity="1"
            exposure="1.2"
            camera-orbit="${cameraOrbit}"
            min-camera-orbit="auto auto auto"
            max-camera-orbit="auto auto auto"
            field-of-view="45deg"
            rotation-per-second="15deg"
            interaction-prompt="none"
            ar-status="not-presenting"
          ></model-viewer>
          <script>
            const modelViewer = document.querySelector('model-viewer');
            modelViewer.addEventListener('load', () => {
              console.log('Model loaded successfully');
            });
            modelViewer.addEventListener('error', (e)=> {
              console.error('Error loading model:', e);
            });
          </script>
        </body>
      </html>
    `;
  };

  return (
    <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-4 border border-nasa-500/20">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-nasa-300 flex items-center gap-2">
          <Globe className="w-4 h-4" />
          3D Exoplanet
        </h3>
        <div className="flex items-center gap-1">
          {EXOPLANET_MODELS.map((_, index) => (
            <div
              key={index}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                index === currentModelIndex
                  ? 'bg-nasa-400 w-4'
                  : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
      
      <div className="relative w-full h-80 bg-gradient-to-br from-slate-900 to-blue-900 rounded-lg overflow-hidden border border-nasa-500/10">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-900/80 z-10">
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 border-4 border-nasa-400 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-xs text-gray-300">Loading model...</p>
            </div>
          </div>
        )}
        
        <iframe
          key={currentModelIndex}
          srcDoc={getModelViewerHTML()}
          title={currentModel.name}
          className="w-full h-full border-0"
          onLoad={() => {
            setTimeout(() => setIsLoading(false), 500);
          }}
          sandbox="allow-scripts allow-same-origin"
          style={{ display: 'block' }}
        />
      </div>
      
      <div className="mt-3 text-center">
        <p className="text-xs font-medium text-white">{currentModel.name}</p>
        <p className="text-xs text-gray-500">
          Model {currentModelIndex + 1}/{EXOPLANET_MODELS.length} • Auto-rotates every 20s
        </p>
      </div>
      
      <div className="mt-2 flex justify-center gap-1.5">
        {EXOPLANET_MODELS.map((model, index) => (
          <button
            key={model.id}
            onClick={() => {
              setIsLoading(true);
              setCurrentModelIndex(index);
            }}
            className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
              index === currentModelIndex
                ? 'bg-gradient-to-br from-nasa-600 to-blue-600 text-white shadow-lg'
                : 'bg-slate-700/50 text-gray-400 hover:bg-slate-600'
            }`}
            title={`View ${model.name}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
