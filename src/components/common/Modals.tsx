/**
 * Modal Components - Reusable modal dialogs
 * NASA Space Apps Challenge 2025
 */

import React from 'react';
import { X, Github, Share2 } from 'lucide-react';
import { TEAM_MEMBERS } from '../../constants';

interface AboutUsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * About Us modal displaying team information
 */
export const AboutUsModal: React.FC<AboutUsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/70 backdrop-blur-sm">
      <div className="bg-slate-800/95 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/30 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">About ECI Centauri Team</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {TEAM_MEMBERS.map((member, i) => (
            <div key={i} className="bg-slate-700/30 rounded-xl p-4 border border-purple-500/20">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-lg font-bold">
                  {member.photo}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-white">{member.name}</div>
                  <a 
                    href={`https://github.com/${member.github}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm text-purple-400 hover:text-purple-300 flex items-center gap-1"
                  >
                    <Github className="w-3 h-3" />
                    {member.github}
                  </a>
                  <div className="text-xs text-gray-400 mt-1">🇨🇴 Colombia</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface ShareModalProps {
  isOpen: boolean;
}

/**
 * Share success notification modal
 */
export const ShareModal: React.FC<ShareModalProps> = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-4 right-4 z-50 bg-green-500/90 backdrop-blur-xl rounded-lg p-4 border border-green-400/30 shadow-xl animate-pulse">
      <div className="flex items-center gap-2 text-white">
        <Share2 className="w-5 h-5" />
        <span className="font-semibold">Link copied to clipboard!</span>
      </div>
    </div>
  );
};
