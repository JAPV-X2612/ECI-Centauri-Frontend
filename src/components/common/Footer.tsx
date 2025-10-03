/**
 * Footer Component - Application footer with team info
 * NASA Space Apps Challenge 2025
 */

import React from 'react';
import { Globe, Instagram, Facebook, Youtube } from 'lucide-react';
import { ECI_URLS } from '../../constants';

/**
 * Main application footer with ECI branding and social links
 */
export const Footer: React.FC = () => (
  <footer className="relative z-10 mt-12 border-t border-nasa-500/30 bg-slate-900/50 backdrop-blur-lg">
    <div className="max-w-7xl mx-auto px-6 py-6">
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-400">
          By <span className="text-nasa-400 font-semibold">ECI Centauri Team</span>
        </div>
        <div className="flex items-center gap-4">
          <a 
            href={ECI_URLS.website} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-nasa-400 transition-colors"
          >
            <Globe className="w-5 h-5" />
          </a>
          <a 
            href={ECI_URLS.instagram} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-nasa-400 transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a 
            href={ECI_URLS.facebook} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-nasa-400 transition-colors"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a 
            href={ECI_URLS.youtube} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-nasa-400 transition-colors"
          >
            <Youtube className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);
