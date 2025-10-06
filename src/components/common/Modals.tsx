/**
 * Modal Components - Reusable modal dialogs
 * NASA Space Apps Challenge 2025
 */

import React, { useState, useEffect } from 'react';
import { X, Github, Linkedin, Share2, Copy, Check } from 'lucide-react';
import QRCode from 'qrcode';
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
                    {member.linkedin && (
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-xs text-blue-400 hover:text-blue-300 inline-flex items-center gap-1 mt-2"
                      >
                        <Linkedin className="w-3 h-3" />
                        LinkedIn Profile
                      </a>
                    )}
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
                      <div className="flex flex-col items-center gap-1 mt-1">
                        {member.github && (
                          <a 
                            href={`https://github.com/${member.github}`} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-xs text-blue-400 hover:text-blue-300 flex items-center justify-center gap-1"
                          >
                            <Github className="w-3 h-3" />
                            {member.github}
                          </a>
                        )}
                        {member.linkedin && (
                          <a 
                            href={member.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-xs text-blue-400 hover:text-blue-300 flex items-center justify-center gap-1"
                          >
                            <Linkedin className="w-3 h-3" />
                            LinkedIn
                          </a>
                        )}
                      </div>
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
                      <div className="flex flex-col items-center gap-1 mt-1">
                        {member.github && (
                          <a 
                            href={`https://github.com/${member.github}`} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-xs text-blue-400 hover:text-blue-300 flex items-center justify-center gap-1"
                          >
                            <Github className="w-3 h-3" />
                            {member.github}
                          </a>
                        )}
                        {member.linkedin && (
                          <a 
                            href={member.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-xs text-blue-400 hover:text-blue-300 flex items-center justify-center gap-1"
                          >
                            <Linkedin className="w-3 h-3" />
                            LinkedIn
                          </a>
                        )}
                      </div>
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
 * Share discovery modal with copy link functionality and QR code
 */
export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');
  
  // Generate unique URL for each user session
  const sessionId = useState(() => Math.random().toString(36).substring(2, 15))[0];
  const shareUrl = `${window.location.origin}${window.location.pathname}?session=${sessionId}`;

  useEffect(() => {
    if (isOpen) {
      // Generate QR code when modal opens
      QRCode.toDataURL(shareUrl, {
        width: 256,
        margin: 2,
        color: {
          dark: '#1e40af', // NASA blue
          light: '#ffffff'
        }
      })
        .then(url => setQrCodeUrl(url))
        .catch(err => console.error('Error generating QR code:', err));
    }
  }, [isOpen, shareUrl]);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadQR = () => {
    const link = document.createElement('a');
    link.download = 'exoplanet-discovery-qr.png';
    link.href = qrCodeUrl;
    link.click();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/70 backdrop-blur-sm">
      <div className="bg-slate-800/95 backdrop-blur-xl rounded-2xl p-8 border border-nasa-500/30 max-w-lg w-full">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Share2 className="w-6 h-6 text-nasa-400" />
            Share Discovery
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white" title="Close modal">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="space-y-6">
          <p className="text-gray-300 text-sm">
            Share this exoplanet discovery with others by copying the link or scanning the QR code:
          </p>
          
          {/* Copy Link Section */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-nasa-300">Copy Link</h3>
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
                  className="px-4 py-2 bg-nasa-600 hover:bg-nasa-700 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 whitespace-nowrap"
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
          </div>

          {/* QR Code Section */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-nasa-300">Scan QR Code</h3>
            <div className="bg-slate-700/50 border border-nasa-500/20 rounded-lg p-6">
              <div className="flex flex-col items-center gap-4">
                {qrCodeUrl ? (
                  <>
                    <div className="bg-white p-4 rounded-lg">
                      <img 
                        src={qrCodeUrl} 
                        alt="QR Code for sharing" 
                        className="w-48 h-48"
                      />
                    </div>
                    <button
                      onClick={handleDownloadQR}
                      className="px-4 py-2 bg-slate-600 hover:bg-slate-700 rounded-lg text-sm font-medium transition-all"
                    >
                      Download QR Code
                    </button>
                  </>
                ) : (
                  <div className="flex items-center justify-center w-48 h-48">
                    <div className="w-8 h-8 border-4 border-nasa-400 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="bg-nasa-900/30 border border-nasa-500/20 rounded-lg p-4">
            <p className="text-xs text-gray-400">
              <strong className="text-nasa-400">Note:</strong> This unique link and QR code will direct others to the Exoplanet Hunter AI application with your session data preserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
