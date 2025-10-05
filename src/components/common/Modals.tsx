/**
 * Modal Components - Reusable modal dialogs
 * NASA Space Apps Challenge 2025
 */

import React, { useState } from 'react';
import { X, Github, Share2, Copy, Check } from 'lucide-react';
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
      <div className="bg-slate-800/95 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/30 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
        style={{ 
          backgroundImage: 'url(/space-image.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}>
        <div className="absolute inset-0 bg-slate-900/85 backdrop-blur-sm rounded-2xl"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">About ECI Centauri Team</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-white" title="Close modal">
              <X className="w-6 h-6" />
            </button>
          </div>
          
          {/* Pyramid Layout: Coach at top, then 3-3 team members */}
          <div className="space-y-6">
            {/* Coach - Top of pyramid */}
            {TEAM_MEMBERS.filter(member => member.role === 'Coach').map((member) => (
              <div key={member.name} className="bg-slate-700/50 rounded-xl p-4 border border-nasa-400/50 max-w-2xl mx-auto">
                <div className="flex items-center gap-4">
                  {member.photoUrl ? (
                    <img 
                      src={member.photoUrl} 
                      alt={`${member.name} profile`}
                      className="w-20 h-20 rounded-full object-cover border-2 border-nasa-400"
                    />
                  ) : (
                    <div className="w-20 h-20 bg-gradient-to-br from-nasa-600 to-nasa-400 rounded-full flex items-center justify-center text-lg font-bold">
                      {member.photo}
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="font-semibold text-white text-lg">{member.name}</div>
                    <div className="text-sm font-medium text-nasa-400 mb-1">
                      {member.role}
                    </div>
                    <div className="text-sm text-gray-400">
                      Team Mentor & Advisor
                    </div>
                    <div className="text-xs text-gray-300 mt-1">🇨🇴 Colombia</div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Team Members - First row of 3 */}
            <div className="grid grid-cols-3 gap-4">
              {TEAM_MEMBERS.filter(member => !member.role).slice(0, 3).map((member) => (
                <div key={member.name} className="bg-slate-700/50 rounded-xl p-4 border border-blue-500/30">
                  <div className="flex flex-col items-center text-center gap-3">
                    {member.photoUrl ? (
                      <img 
                        src={member.photoUrl} 
                        alt={`${member.name} profile`}
                        className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
                      />
                    ) : (
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full flex items-center justify-center text-lg font-bold">
                        {member.photo}
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="font-semibold text-white text-sm">{member.name}</div>
                      {member.github && (
                        <a 
                          href={`https://github.com/${member.github}`} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-xs text-blue-400 hover:text-blue-300 flex items-center justify-center gap-1 mt-1"
                        >
                          <Github className="w-3 h-3" />
                          {member.github}
                        </a>
                      )}
                      <div className="text-xs text-gray-300 mt-1">🇨🇴 Colombia</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Team Members - Second row of 3 */}
            <div className="grid grid-cols-3 gap-4">
              {TEAM_MEMBERS.filter(member => !member.role).slice(3, 6).map((member) => (
                <div key={member.name} className="bg-slate-700/50 rounded-xl p-4 border border-blue-500/30">
                  <div className="flex flex-col items-center text-center gap-3">
                    {member.photoUrl ? (
                      <img 
                        src={member.photoUrl} 
                        alt={`${member.name} profile`}
                        className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
                      />
                    ) : (
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full flex items-center justify-center text-lg font-bold">
                        {member.photo}
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="font-semibold text-white text-sm">{member.name}</div>
                      {member.github && (
                        <a 
                          href={`https://github.com/${member.github}`} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-xs text-blue-400 hover:text-blue-300 flex items-center justify-center gap-1 mt-1"
                        >
                          <Github className="w-3 h-3" />
                          {member.github}
                        </a>
                      )}
                      <div className="text-xs text-gray-300 mt-1">🇨🇴 Colombia</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Share discovery modal with copy link functionality
 */
export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const shareUrl = window.location.href;

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/70 backdrop-blur-sm">
      <div className="bg-slate-800/95 backdrop-blur-xl rounded-2xl p-8 border border-nasa-500/30 max-w-md w-full">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Share2 className="w-6 h-6 text-nasa-400" />
            Share Discovery
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white" title="Close modal">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="space-y-4">
          <p className="text-gray-300 text-sm">
            Share this exoplanet discovery with others by copying the link below:
          </p>
          
          <div className="bg-slate-700/50 border border-nasa-500/20 rounded-lg p-4">
            <div className="flex items-center gap-3">
              <input 
                type="text" 
                value={shareUrl} 
                readOnly 
                title="Share URL"
                className="flex-1 bg-transparent text-gray-300 text-sm outline-none"
              />
              <button 
                onClick={handleCopyLink}
                className="px-4 py-2 bg-nasa-600 hover:bg-nasa-700 rounded-lg text-sm font-semibold transition-all flex items-center gap-2"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="bg-nasa-900/30 border border-nasa-500/20 rounded-lg p-4">
            <p className="text-xs text-gray-400">
              <strong className="text-nasa-400">Note:</strong> This link will direct others to the Exoplanet Hunter AI application where they can explore and analyze transit data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
