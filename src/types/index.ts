/**
 * Type definitions for Exoplanet Hunter AI Application
 * NASA Space Apps Challenge 2025
 */

/**
 * Application view states
 */
export type ViewType = 'main' | 'login' | 'signup' | 'forgot' | 'profile';

/**
 * Team member information
 */
export interface TeamMember {
  name: string;
  github?: string; // Optional: GitHub username
  role?: string; // Optional: Special role (e.g., "Coach")
  photo: string;
  photoUrl?: string; // Optional: URL to actual profile photo
}

/**
 * Community news item
 */
export interface NewsItem {
  title: string;
  author: string;
  source: string;
  url: string;
  time: string;
}

/**
 * User profile data
 */
export interface UserData {
  name: string;
  email: string;
  photo: string;
  joinDate: string;
  totalAnalyses: number;
  confirmedPlanets: number;
  candidatesFound: number;
  rank: number;
  accuracy: number;
  streak: number;
}

/**
 * Analysis history item
 */
export interface AnalysisHistoryItem {
  id: string;
  date: string;
  result: 'Confirmed Exoplanet' | 'Candidate' | 'False Positive';
  confidence: number;
  type: string;
  starred: boolean;
}

/**
 * Achievement item
 */
export interface Achievement {
  icon: string;
  name: string;
  description: string;
  unlocked: boolean;
}

/**
 * Recent activity item
 */
export interface ActivityItem {
  action: string;
  id: string;
  time: string;
  type: 'success' | 'warning' | 'info';
}

/**
 * Profile tab types
 */
export type ProfileTab = 'history' | 'starred';
