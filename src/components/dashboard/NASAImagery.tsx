/**
 * NASAImagery Component - Displays NASA WMTS Moon imagery collage
 * NASA Space Apps Challenge 2025
 */

import React, { useState } from 'react';
import { Satellite, ExternalLink } from 'lucide-react';

interface ImageryData {
  title: string;
  endpoint: string;
  mission: string;
  description: string;
  tileFormat: string; // 'png' or 'png'
  zoom: number; // Zoom level
  row: number; // Tile row
  col: number; // Tile col
}

const IMAGERY_DATA: ImageryData[] = [
  {
    title: "Apollo 15 Metric Camera",
    endpoint: "Apollo15_MetricCam_ClrShade_Global_1024ppd",
    mission: "Apollo 15",
    description: "Global color shaded relief map from Apollo 15 Metric Camera",
    tileFormat: "png",
    zoom: 0,
    row: 0,
    col: 0
  },
  {
    title: "Apollo 15 Pan Camera - 25N",
    endpoint: "Apollo15_PanCam_ClrShade_25N311E_5mp",
    mission: "Apollo 15",
    description: "High-resolution panoramic camera imagery at 25°N, 311°E",
    tileFormat: "png",
    zoom: 0,
    row: 0,
    col: 0
  },
  {
    title: "Apollo 15 Pan Camera - 28N",
    endpoint: "Apollo15_PanCam_ClrShade_28N307E_3mp",
    mission: "Apollo 15",
    description: "High-resolution panoramic camera imagery at 28°N, 307°E",
    tileFormat: "png",
    zoom: 0,
    row: 0,
    col: 0
  },
  {
    title: "Apollo 16 Metric Camera",
    endpoint: "Apollo16_MetricCam_ClrShade_Global_1024ppd",
    mission: "Apollo 16",
    description: "Global color shaded relief map from Apollo 16 Metric Camera",
    tileFormat: "png",
    zoom: 0,
    row: 0,
    col: 0
  }
];

/**
 * Displays a 2x2 collage of NASA Moon imagery from WMTS endpoints
 */
export const NASAImagery: React.FC = () => {
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    IMAGERY_DATA.forEach(img => initial[img.endpoint] = true);
    return initial;
  });
  const [errorStates, setErrorStates] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    IMAGERY_DATA.forEach(img => initial[img.endpoint] = false);
    return initial;
  });

  const baseUrl = process.env.REACT_APP_NASA_WMTS_BASE_URL || 'https://trek.nasa.gov/tiles/Moon/EQ';

  const handleImageLoad = (endpoint: string) => {
    setLoadingStates(prev => ({ ...prev, [endpoint]: false }));
  };

  const handleImageError = (endpoint: string) => {
    setErrorStates(prev => ({ ...prev, [endpoint]: true }));
    setLoadingStates(prev => ({ ...prev, [endpoint]: false }));
  };

  const getImageUrl = (endpoint: string, tileFormat: string, zoom: number, row: number, col: number) => {
    // NASA WMTS URL format: {baseUrl}/{endpoint}/1.0.0/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.{format}
    // Using specified zoom level and tile coordinates
    // Style: default, TileMatrixSet: default028mm
    return `${baseUrl}/${endpoint}/1.0.0/default/default028mm/${zoom}/${row}/${col}.${tileFormat}`;
  };

  const openWMTSService = (endpoint: string) => {
    // Open the NASA Trek HTML page for the service
    window.open(`${baseUrl}/${endpoint}.html`, '_blank');
  };

  return (
    <div className="bg-gradient-to-br from-nasa-900/30 to-blue-900/30 backdrop-blur-lg rounded-xl p-6 border border-nasa-500/30">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Satellite className="w-5 h-5 text-nasa-400" />
          NASA Moon Imagery
        </h3>
        <a
          href="https://trek.nasa.gov/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-nasa-400 hover:text-nasa-300 flex items-center gap-1"
        >
          NASA Trek
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {IMAGERY_DATA.map((imagery) => (
          <div
            key={imagery.endpoint}
            className="group relative bg-slate-800/50 rounded-lg overflow-hidden border border-nasa-500/20 hover:border-nasa-500/50 transition-all cursor-pointer"
            onClick={() => openWMTSService(imagery.endpoint)}
            title={`Click to view ${imagery.title} WMTS service`}
          >
            <div className="aspect-square relative">
              {loadingStates[imagery.endpoint] && !errorStates[imagery.endpoint] && (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-900/50">
                  <div className="w-8 h-8 border-4 border-nasa-400 border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              
              {errorStates[imagery.endpoint] ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/50 p-3">
                  <Satellite className="w-8 h-8 text-gray-500 mb-2" />
                  <p className="text-xs text-gray-400 text-center">Preview unavailable</p>
                  <p className="text-xs text-nasa-400 mt-1">Click to view WMTS</p>
                </div>
              ) : (
                <img
                  src={getImageUrl(imagery.endpoint, imagery.tileFormat, imagery.zoom, imagery.row, imagery.col)}
                  alt={imagery.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onLoad={() => handleImageLoad(imagery.endpoint)}
                  onError={() => handleImageError(imagery.endpoint)}
                />
              )}

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                <p className="text-xs font-semibold text-white mb-1">{imagery.title}</p>
                <p className="text-xs text-gray-300">{imagery.mission}</p>
              </div>
            </div>

            {/* Footer label */}
            <div className="p-2 bg-slate-900/50">
              <p className="text-xs text-gray-400 truncate">{imagery.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-xs text-gray-500 text-center">
        Apollo Mission Moon imagery from NASA WMTS services • Click images to explore
      </div>
    </div>
  );
};
