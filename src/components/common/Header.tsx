/**
 * Header Component - Application navigation header
 * NASA Space Apps Challenge 2025
 */

import React from 'react';
import { Brain, Database } from 'lucide-react';
import { NASA_CHALLENGE_URL } from '../../constants';
import { UserData } from '../../types';

interface HeaderProps {
  isLoggedIn: boolean;
  userData?: UserData;
  onAboutClick: () => void;
  onSignInClick: () => void;
  onProfileClick: () => void;
}

/**
 * Main application header with branding and navigation
 */
export const Header: React.FC<HeaderProps> = ({ 
  isLoggedIn, 
  userData, 
  onAboutClick, 
  onSignInClick,
  onProfileClick 
}) => (
  <header className="relative z-10 border-b border-nasa-500/30 bg-slate-900/50 backdrop-blur-lg">
    <div className="max-w-7xl mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-nasa-500 to-blue-500 rounded-lg flex items-center justify-center">
            <Brain className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-nasa-400 to-blue-400 bg-clip-text text-transparent">
              Exoplanet Hunter AI
            </h1>
            <a 
              href={NASA_CHALLENGE_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs text-gray-400 hover:text-nasa-400 transition-colors"
            >
              A World Away: Hunting for Exoplanets with AI →
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={onAboutClick} 
            className="px-4 py-2 hover:bg-nasa-500/20 rounded-lg transition-colors"
          >
            About Us
          </button>
          {isLoggedIn && userData ? (
            <div 
              onClick={onProfileClick} 
              className="w-10 h-10 bg-gradient-to-br from-nasa-500 to-blue-500 rounded-full flex items-center justify-center text-sm font-bold cursor-pointer hover:opacity-80 transition-opacity"
            >
              {userData.photo}
            </div>
          ) : (
            <button 
              onClick={onSignInClick} 
              className="px-4 py-2 bg-gradient-to-r from-nasa-600 to-blue-600 rounded-lg hover:from-nasa-700 hover:to-blue-700 transition-all"
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </div>
  </header>
);

interface ProfileHeaderProps {
  onBackClick: () => void;
  onSignOut: () => void;
}

/**
 * Profile page header
 */
export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ onBackClick, onSignOut }) => (
  <header className="relative z-10 border-b border-nasa-500/30 bg-slate-900/50 backdrop-blur-lg">
    <div className="max-w-7xl mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div 
            onClick={onBackClick} 
            className="w-10 h-10 bg-gradient-to-br from-nasa-500 to-blue-500 rounded-lg flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
          >
            <Database className="w-6 h-6" />
          </div>
          <h1 className="text-xl font-bold text-white">Exoplanet Hunter AI - My Profile</h1>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={onBackClick} 
            className="px-4 py-2 bg-slate-700/50 hover:bg-slate-700 rounded-lg text-sm transition-colors"
          >
            Back to Main
          </button>
          <button 
            onClick={onSignOut} 
            className="px-4 py-2 bg-slate-700/50 hover:bg-slate-700 rounded-lg text-sm transition-colors"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  </header>
);
