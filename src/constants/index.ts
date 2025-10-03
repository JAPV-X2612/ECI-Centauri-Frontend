/**
 * Application constants and static data
 * NASA Space Apps Challenge 2025
 */

import { TeamMember, NewsItem, UserData, AnalysisHistoryItem, Achievement, ActivityItem } from '../types';

/**
 * Educational facts about exoplanets
 */
export const EXOPLANET_FACTS: string[] = [
  "The transit method detects exoplanets by measuring the slight dimming of a star's light when a planet passes in front of it. Even Earth would only block 0.008% of the Sun's light!",
  "The first exoplanet discovered around a sun-like star was 51 Pegasi b in 1995, which revolutionized our understanding of planetary systems.",
  "Hot Jupiters are gas giants that orbit very close to their stars, completing an orbit in just a few days compared to Jupiter's 12-year orbit.",
  "The Kepler Space Telescope discovered over 2,600 confirmed exoplanets during its mission from 2009 to 2018.",
  "Some exoplanets orbit two stars at once, called circumbinary planets - just like Tatooine in Star Wars!",
  "TESS (Transiting Exoplanet Survey Satellite) is scanning 200,000 of the brightest stars near Earth for transiting exoplanets."
];

/**
 * ECI Centauri team members information
 */
export const TEAM_MEMBERS: TeamMember[] = [
  { name: "Laura Sofia Zapata Sarmiento", github: "", photo: "LSZ" },
  { name: "Juan Esteban Bolivar Muñoz", github: "", photo: "JEB" },
  { name: "Camilo Andrés Maldonado López", github: "", photo: "CAM", photoUrl: "/camilo-profile-photo.jpg" },
  { name: "Daniel Felipe Martinez Hernandez", github: "Ch0comilo", photo: "DFM", photoUrl: "/daniel-profile-photo.png" },
  { name: "Jesús Alfonso Pinzón Vega", github: "JAPV-X2612", photo: "JAP", photoUrl: "/jesus-profile-photo.jpg" },
  { name: "Andersson David Sánchez Méndez", github: "AnderssonProgramming", photo: "ADS" }
];

/**
 * Latest community news about exoplanets
 */
export const COMMUNITY_NEWS: NewsItem[] = [
  { 
    title: "New Super-Earth Discovery", 
    author: "Dr. Emily Parker", 
    source: "Space.com", 
    url: "https://www.space.com", 
    time: "2 hours ago" 
  },
  { 
    title: "AI Breakthrough in Planet Detection", 
    author: "NASA JPL Team", 
    source: "NASA News", 
    url: "https://www.nasa.gov", 
    time: "5 hours ago" 
  },
  { 
    title: "Habitable Zone Planet Found", 
    author: "Prof. James Mitchell", 
    source: "Science Daily", 
    url: "https://www.sciencedaily.com", 
    time: "1 day ago" 
  }
];

/**
 * Mock user data for demonstration
 */
export const MOCK_USER_DATA: UserData = {
  name: "Dr. Sarah Chen",
  email: "sarah.chen@astronomy.edu",
  photo: "SC",
  joinDate: "January 2025",
  totalAnalyses: 342,
  confirmedPlanets: 28,
  candidatesFound: 15,
  rank: 23,
  accuracy: 91.5,
  streak: 12
};

/**
 * Sample analysis history data
 */
export const ANALYSIS_HISTORY: AnalysisHistoryItem[] = [
  { 
    id: "EXO-2025-0342", 
    date: "2025-09-28 14:23", 
    result: "Confirmed Exoplanet", 
    confidence: 94, 
    type: "Hot Jupiter", 
    starred: true 
  },
  { 
    id: "EXO-2025-0341", 
    date: "2025-09-28 13:45", 
    result: "False Positive", 
    confidence: 78, 
    type: "Binary Star System", 
    starred: false 
  },
  { 
    id: "EXO-2025-0340", 
    date: "2025-09-27 16:12", 
    result: "Candidate", 
    confidence: 85, 
    type: "Super Earth", 
    starred: true 
  },
  { 
    id: "EXO-2025-0339", 
    date: "2025-09-27 11:08", 
    result: "Confirmed Exoplanet", 
    confidence: 96, 
    type: "Neptune-like", 
    starred: false 
  },
  { 
    id: "EXO-2025-0338", 
    date: "2025-09-26 09:34", 
    result: "False Positive", 
    confidence: 82, 
    type: "Stellar Activity", 
    starred: false 
  }
];

/**
 * User achievements
 */
export const ACHIEVEMENTS: Achievement[] = [
  { 
    icon: "🎯", 
    name: "First Discovery", 
    description: "Made your first exoplanet detection", 
    unlocked: true 
  },
  { 
    icon: "🌟", 
    name: "10 Streak", 
    description: "10 days of consecutive analysis", 
    unlocked: true 
  },
  { 
    icon: "🚀", 
    name: "Century Club", 
    description: "100+ analyses completed", 
    unlocked: true 
  },
  { 
    icon: "💎", 
    name: "Precision Master", 
    description: "Maintain 90%+ accuracy", 
    unlocked: true 
  },
  { 
    icon: "👑", 
    name: "Top 50", 
    description: "Rank in top 50 globally", 
    unlocked: true 
  },
  { 
    icon: "🔬", 
    name: "Research Pioneer", 
    description: "50+ confirmed planets", 
    unlocked: false 
  },
  { 
    icon: "⚡", 
    name: "Speed Demon", 
    description: "100 analyses in 24 hours", 
    unlocked: false 
  },
  { 
    icon: "🌍", 
    name: "Earth Hunter", 
    description: "Find an Earth-like planet", 
    unlocked: false 
  }
];

/**
 * Recent user activity
 */
export const RECENT_ACTIVITY: ActivityItem[] = [
  { 
    action: "Confirmed exoplanet discovered", 
    id: "EXO-2025-0342", 
    time: "2 hours ago", 
    type: "success" 
  },
  { 
    action: "New candidate flagged", 
    id: "EXO-2025-0340", 
    time: "5 hours ago", 
    type: "warning" 
  },
  { 
    action: "False positive identified", 
    id: "EXO-2025-0341", 
    time: "1 day ago", 
    type: "info" 
  },
  { 
    action: "Data uploaded successfully", 
    id: "Dataset-K2-023", 
    time: "2 days ago", 
    type: "info" 
  }
];

/**
 * NASA Space Apps Challenge URL
 */
export const NASA_CHALLENGE_URL = "https://www.spaceappschallenge.org/2025/challenges/a-world-away-hunting-for-exoplanets-with-ai/?tab=details";

/**
 * ECI (Escuela Colombiana de Ingeniería) URLs
 */
export const ECI_URLS = {
  website: "https://www.escuelaing.edu.co/es",
  instagram: "https://www.instagram.com/escuelaing/",
  facebook: "https://www.facebook.com/EscuelaIng/",
  youtube: "http://www.youtube.com/@escuelacolingenieria"
};
