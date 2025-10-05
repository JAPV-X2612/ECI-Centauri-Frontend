/**
 * NASAImagery Component - Displays NASA WMTS Moon imagery collage
 * NASA Space Apps Challenge 2025
 */

import React from 'react';
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
  mosaicImage: string; // Local preview image from public/mosaics
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
    col: 0,
    mosaicImage: "/mosaics/Apollo15_MetricCam_ClrShade_Global_1024ppd-120.png"
  },
  {
    title: "Apollo 15 Pan Camera - 25N",
    endpoint: "Apollo15_PanCam_ClrShade_25N311E_5mp",
    mission: "Apollo 15",
    description: "High-resolution panoramic camera imagery at 25°N, 311°E",
    tileFormat: "png",
    zoom: 0,
    row: 0,
    col: 0,
    mosaicImage: "/mosaics/Apollo15_PanCam_ClrShade_25N311E_5mp-120.png"
  },
  {
    title: "Apollo 15 Pan Camera - 28N",
    endpoint: "Apollo15_PanCam_ClrShade_28N307E_3mp",
    mission: "Apollo 15",
    description: "High-resolution panoramic camera imagery at 28°N, 307°E",
    tileFormat: "png",
    zoom: 0,
    row: 0,
    col: 0,
    mosaicImage: "/mosaics/Apollo15_PanCam_ClrShade_28N307E_3mp-120.png"
  },
  {
    title: "Apollo 16 Metric Camera",
    endpoint: "Apollo16_MetricCam_ClrShade_Global_1024ppd",
    mission: "Apollo 16",
    description: "Global color shaded relief map from Apollo 16 Metric Camera",
    tileFormat: "png",
    zoom: 0,
    row: 0,
    col: 0,
    mosaicImage: "/mosaics/Apollo16_MetricCam_ClrShade_Global_1024ppd-120.png"
  }
];

/**
 * Displays a 2x2 collage of NASA Moon imagery from WMTS endpoints
 * Uses local mosaic images for better display quality
 */
export const NASAImagery: React.FC = () => {
  const baseUrl = process.env.REACT_APP_NASA_WMTS_BASE_URL || 'https://trek.nasa.gov/tiles/Moon/EQ';

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
              {/* Display local mosaic image instead of API tile */}
              <img
                src={imagery.mosaicImage}
                alt={imagery.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                <p className="text-xs font-semibold text-white mb-1">{imagery.title}</p>
                <p className="text-xs text-gray-300">{imagery.mission}</p>
              </div>
            </div>

            {/* Footer label */}
            <div className="p-2 bg-slate-900/50">
              <p className="text-xs text-gray-400 truncate">{imagery.description}</p>
              <p className="text-xs text-nasa-400 mt-1">🔗 Click to explore NASA API</p>
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
