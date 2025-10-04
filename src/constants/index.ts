/**
 * Application constants and static data
 * NASA Space Apps Challenge 2025
 */

import { TeamMember, NewsItem, UserData, AnalysisHistoryItem, Achievement, ActivityItem } from '../types';

/**
 * Educational facts about exoplanets
 */
export const EXOPLANET_FACTS: string[] = [
  "In case you didn't know, an exoplanet is a celestial body outside our solar system (hence the name exoplanet) that has been discovered through analysis and data collection using telescopes, probes, and satellites that humanity has sent out over time.",
  "The first confirmed discovery of an exoplanet was in 1992 around the pulsar PSR B1257+12 using the pulse timing variation method.",
  "The transit or light detection method works by detecting the drop in brightness of the star when the planet passes directly in front of it. This method is very well known and is traditionally used by space telescopes such as Kepler and TESS.",
  "The radial velocity method is a method of detecting exoplanets that works by measuring changes in the light of the star caused by the gravitational pull of the planet. This is a significant method that helped identify 51 Pegasi b.",
  "Did you know that 51 Pegasi b was the first exoplanet confirmed in 1995 using the radial velocity method, and its discovery was more important than just being the first, as it was also the first to be discovered in a system with a star similar to our sun?",
  "One of the most talked-about exoplanets is Proxima Centauri b, due to its high similarity to our planet, as it shares characteristics such as both belonging to the habitable zone of their system, as well as being the closest to us at a distance of approximately 4.24 light-years.",
  "Did you know that the smallest confirmed exoplanet is Kepler-37 b, with a radial size similar to that of our moon?",
  "Did you know that the largest exoplanet ever recorded is HD 100536 b, which is larger than Jupiter, approximately 8 times larger.",
  "An exoplanet similar to Earth in terms of location is Kepler-186f, which, like us, is located within the habitable zone of its solar system.",
  "Did you know that Kepler-16b has two suns, around which it orbits, much like the planet Tatooine in Star Wars?",
  "Did you know that the exoplanet WASP-12b is considered one of the most exotic exoplanets ever recorded? This is because this exoplanet absorbs large amounts of light, making it very difficult to track, so much so that it has earned the nickname 'black planet.'"
];

/**
 * ECI Centauri team members information
 */
export const TEAM_MEMBERS: TeamMember[] = [
  { name: "Laura Sofia Zapata Sarmiento", github: "minisoffia", photo: "LS", photoUrl: "/sofia-profile-photo.jpg" },
  { name: "Juan Esteban Bolivar Muñoz", github: "jdev2443-cmd", photo: "JE", photoUrl: "/juan-profile-photo.jpg" },
  { name: "Camilo Andrés Maldonado López", github: "", photo: "CA", photoUrl: "/camilo-profile-photo.jpg" },
  { name: "Daniel Felipe Martinez Hernandez", github: "Ch0comilo", photo: "DF", photoUrl: "/daniel-profile-photo.png" },
  { name: "Jesús Alfonso Pinzón Vega", github: "JAPV-X2612", photo: "JA", photoUrl: "/jesus-profile-photo.jpg" },
  { name: "Andersson David Sánchez Méndez", github: "AnderssonProgramming", photo: "AD", photoUrl: "/andersson-profile-photo.jpeg" }
];

/**
 * Latest community news about exoplanets
 */
export const COMMUNITY_NEWS: NewsItem[] = [
  { 
    title: "NASA Confirms 6,000th Exoplanet Discovery Milestone", 
    author: "Shawn Domagal-Goldman", 
    source: "Science Daily", 
    url: "https://www.sciencedaily.com/releases/2025/09/250920214427.htm", 
    time: "2 weeks ago" 
  },
  { 
    title: "AI Predicts Exoplanets Using Transformer Architecture", 
    author: "Prof. Yann Alibert", 
    source: "Phys.org", 
    url: "https://phys.org/news/2025-09-ai-discovery-exoplanets-distant.html", 
    time: "3 weeks ago" 
  },
  { 
    title: "JWST Narrows Atmosphere Possibilities for TRAPPIST-1e", 
    author: "Dr. Néstor Espinoza", 
    source: "Phys.org", 
    url: "https://phys.org/news/2025-09-trappist-1e-narrow-possibilities-atmosphere.html", 
    time: "1 month ago" 
  },
  { 
    title: "Two Earth-Sized Rocky Exoplanets Found Around TOI-2322", 
    author: "ESPRESSO Team", 
    source: "Phys.org", 
    url: "https://phys.org/news/2025-09-tess-reveals-rocky-earth-sized.html", 
    time: "1 month ago" 
  },
  { 
    title: "New Gas Giant TOI-4465b Confirmed with Citizen Scientists", 
    author: "Dr. Zahra Essack", 
    source: "Phys.org", 
    url: "https://phys.org/news/2025-06-astronomers-gas-giant-exoplanet-citizen.html", 
    time: "4 months ago" 
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
