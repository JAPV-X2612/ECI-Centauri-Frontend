/**
 * NewsPanel Component - Latest exoplanet news
 * NASA Space Apps Challenge 2025
 */

import React from 'react';
import { Users, ExternalLink } from 'lucide-react';
import { COMMUNITY_NEWS } from '../../constants';

/**
 * Displays latest news about exoplanet discoveries
 */
export const NewsPanel: React.FC = () => (
  <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-4 border border-nasa-500/20">
    <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
      <Users className="w-4 h-4 text-nasa-400" />
      Latest Exoplanet News
    </h3>
    <div className="space-y-3">
      {COMMUNITY_NEWS.map((item, i) => (
        <a 
          key={i} 
          href={item.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-start gap-3 p-2 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors cursor-pointer group"
        >
          <div className="flex-1 min-w-0">
            <div className="text-xs font-medium truncate text-white group-hover:text-nasa-400 transition-colors flex items-center gap-1">
              {item.title}
              <ExternalLink className="w-3 h-3" />
            </div>
            <div className="text-xs text-gray-400 truncate">{item.author}</div>
            <div className="text-xs text-gray-500">{item.source} • {item.time}</div>
          </div>
        </a>
      ))}
    </div>
  </div>
);
