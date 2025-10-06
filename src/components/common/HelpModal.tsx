/**
 * HelpModal Component - Interactive user guide and help documentation
 * NASA Space Apps Challenge 2025
 */

import React, { useState } from 'react';
import { X, HelpCircle, Upload, Download, Maximize2, Satellite, Sparkles, 
  Rocket, Database, BarChart3, Globe, Zap, BookOpen, Play, Leaf } from 'lucide-react';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface HelpSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
  tips?: string[];
}

const HELP_SECTIONS: HelpSection[] = [
  {
    id: "overview",
    title: "🌟 Welcome to Exoplanet Hunter AI",
    icon: <Rocket className="w-6 h-6" />,
    description: "NASA Space Apps Challenge 2025 project for discovering exoplanets using AI. Continue without account to start exploring!",
    features: [
      "🔬 View pre-analyzed transit light curves from real telescope data",
      "🤖 CNN-based AI predictions with confidence scores",
      "🌍 Interactive 3D exoplanet models (5 types with auto-rotation)",
      "🛰️ Apollo 15 & 16 mission Moon imagery from NASA WMTS",
      "📰 Latest exoplanet news and educational facts carousel",
      "💾 Optional: Sign in only to save your profile and analysis history"
    ],
    tips: [
      "Click 'Continue without account' to use the dashboard immediately",
      "Sign in is optional - only needed for saving history and achievements"
    ]
  },
  {
    id: "upload",
    title: "📤 Upload FITS Files",
    icon: <Upload className="w-6 h-6" />,
    description: "Upload FITS files from space telescopes to see them visualized in the light curve panel.",
    features: [
      "📁 Supported format: .fits files only (Flexible Image Transport System)",
      "🔭 Select data source: TESS, Kepler, or K2 missions",
      "� Upload button in Quick Actions panel (left sidebar)",
      "✅ Automatic file validation (.fits extension required)",
      "🎯 Files are prepared for future AI classification"
    ],
    tips: [
      "Only FITS format is accepted - no CSV or other formats",
      "Choose the correct telescope mission for your data",
      "Find the Upload button in the Quick Actions card"
    ]
  },
  {
    id: "visualization",
    title: "🌐 3D Exoplanet Models",
    icon: <Maximize2 className="w-6 h-6" />,
    description: "Explore 5 scientifically accurate 3D GLTF models with automatic rotation every 20 seconds.",
    features: [
      "🔥 Model 1: Hot Jupiter - Close-orbiting gas giant",
      "🌎 Model 2: Super-Earth - Large rocky planet",
      "💨 Model 3: Gas Giant - Jupiter-like planet",
      "❄️ Model 4: Ice Giant - Uranus/Neptune type",
      "🪨 Model 5: Rocky Planet - Earth-like world"
    ],
    tips: [
      "Models auto-rotate every 20 seconds",
      "Use navigation arrows to switch models manually",
      "Drag to rotate, scroll to zoom each model"
    ]
  },
  {
    id: "lightcurve",
    title: "📊 Transit Light Curve Panel",
    icon: <BarChart3 className="w-6 h-6" />,
    description: "Central visualization showing star brightness over time - the key to exoplanet detection.",
    features: [
      "📉 X-axis: Time in days since observation start",
      "📏 Y-axis: Normalized flux (star brightness)",
      "🌗 Dips in curve = planet transiting (blocking starlight)",
      "🎬 Below: Transit animation GIF showing the method",
      "� Real data from TESS, Kepler, or K2 telescopes"
    ],
    tips: [
      "V-shaped dips indicate potential exoplanets",
      "Regular repeating dips = orbiting planet",
      "Click the GIF to view attribution on GitHub"
    ]
  },
  {
    id: "nasa",
    title: "🛰️ NASA Moon Imagery",
    icon: <Satellite className="w-6 h-6" />,
    description: "Four high-resolution mosaics from Apollo 15 and Apollo 16 lunar missions.",
    features: [
      "🖼️ Apollo 15 Metric Camera - Global Moon map",
      "📍 Apollo 15 Pan Camera 25°N - Regional view",
      "📍 Apollo 15 Pan Camera 28°N - Regional view",
      "🖼️ Apollo 16 Metric Camera - Global Moon map",
      "🔗 Click any mosaic to open NASA WMTS interactive service"
    ],
    tips: [
      "Mosaics stored locally for instant loading",
      "Click images to access full NASA tile services",
      "Located in the left sidebar below Quick Actions"
    ]
  },
  {
    id: "dashboard",
    title: "📊 Dashboard Statistics",
    icon: <Database className="w-6 h-6" />,
    description: "Real-time stats and AI model performance metrics displayed across the interface.",
    features: [
      "📈 Today's Stats: Analyses run, candidates found, negative results",
      "🤖 AI Model Performance: Accuracy, Precision, Recall, F1-Score",
      "🎯 AI Prediction: Classification result with confidence percentage",
      "� News Panel: Latest exoplanet discoveries",
      "🔢 Model Settings: Threshold, batch size, epochs configuration"
    ],
    tips: [
      "Stats update with each analysis run",
      "Model metrics show CNN performance quality",
      "Higher confidence = more reliable prediction"
    ]
  },
  {
    id: "export",
    title: "💾 Export & Share",
    icon: <Download className="w-6 h-6" />,
    description: "Export analysis results and share discoveries with QR codes.",
    features: [
      "� Export formats: CSV and XLSX (Excel) spreadsheets",
      "� Export modal with format selection and preview",
      "📱 Share button generates unique QR code per session",
      "🔗 Copy shareable link to clipboard instantly",
      "💾 Download QR code as PNG image"
    ],
    tips: [
      "CSV format for data analysis tools",
      "XLSX format opens directly in Excel",
      "Each user session gets a unique QR code"
    ]
  },
  {
    id: "chatbot",
    title: "✨ Starburst AI Assistant",
    icon: <Sparkles className="w-6 h-6" />,
    description: "AI chatbot in the lower-right corner ready to answer your space questions.",
    features: [
      "💬 Ask about exoplanets, asteroids, and stars",
      "📚 Learn how the application works",
      "🔍 Get help understanding features",
      "🤖 Simulated intelligent responses (no API required)",
      "⚡ Instant replies with space-themed personality"
    ],
    tips: [
      "Look for the pulsing button in lower-right corner",
      "Click to expand the chat window",
      "Try asking: 'What is an exoplanet?' or 'How does this work?'"
    ]
  },
  {
    id: "carbon",
    title: "🌱 Carbon Footprint",
    icon: <Leaf className="w-6 h-6" />,
    description: "Our commitment to sustainable computing - tracking environmental impact of AI and cloud infrastructure.",
    features: [
      "♻️ 847kg CO₂ Saved: Compared to traditional on-premise servers running 24/7",
      "⚡ 73% Energy Cut: Serverless architecture only uses resources when needed",
      "💧 2,340L Water Saved: Data centers require massive cooling - we minimize this",
      "🌿 85% More Sustainable: Overall reduction vs traditional hosting",
      "📊 Expand panel to see detailed green commitments"
    ],
    tips: [
      "Located below 3D Planet Visualization in left sidebar",
      "Click chevron to expand and see our 4 green initiatives",
      "Serverless Auth: No idle servers wasting energy",
      "Optimized AI: 65% less energy with efficient CNN model",
      "Green Hosting: Renewable energy-powered cloud infrastructure",
      "Edge Computing: Reduces data transfer and bandwidth usage",
      "Metrics based on AWS Carbon Footprint Tool & Green Software Foundation"
    ]
  },
  {
    id: "signin",
    title: "🔐 Optional Sign In",
    icon: <BookOpen className="w-6 h-6" />,
    description: "Account creation is completely optional - use 'Continue without account' to explore freely.",
    features: [
      "✅ ALL features work without signing in",
      "� Sign in only to save: Profile, analysis history, achievements",
      "🏆 Track your discoveries and global leaderboard rank",
      "� Access past queries and results",
      "🚀 'Continue without account' button on login page"
    ],
    tips: [
      "You don't need an account to use the dashboard",
      "Sign in only if you want to save your work",
      "Guest mode gives full access to all features"
    ]
  }
];

/**
 * Modal displaying comprehensive interactive help guide
 */
export const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose }) => {
  const [selectedSection, setSelectedSection] = useState<string>("overview");

  if (!isOpen) return null;

  const currentSection = HELP_SECTIONS.find(s => s.id === selectedSection) || HELP_SECTIONS[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-6xl max-h-[90vh] bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl shadow-2xl border border-nasa-500/30 overflow-hidden flex">
        
        {/* Sidebar Navigation */}
        <div className="w-64 border-r border-nasa-500/30 bg-slate-900/95 overflow-y-auto">
          <div className="p-4 border-b border-nasa-500/30">
            <div className="flex items-center gap-2 mb-2">
              <HelpCircle className="w-5 h-5 text-nasa-400" />
              <h3 className="font-semibold text-white">Help Topics</h3>
            </div>
            <p className="text-xs text-gray-400">Choose a topic to learn more</p>
          </div>
          
          <nav className="p-2">
            {HELP_SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => setSelectedSection(section.id)}
                className={`w-full text-left px-3 py-2.5 rounded-lg mb-1 transition-all ${
                  selectedSection === section.id
                    ? 'bg-gradient-to-r from-nasa-600 to-blue-600 text-white shadow-lg'
                    : 'text-gray-300 hover:bg-nasa-500/20 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className={selectedSection === section.id ? 'text-white' : 'text-nasa-400'}>
                    {section.icon}
                  </div>
                  <span className="text-sm font-medium">{section.title.replace(/^[🌟📤🌐📊🛰️📊💾✨🔐]\s*/, '')}</span>
                </div>
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-nasa-500/30 bg-slate-900/95 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-nasa-600 to-blue-600 rounded-lg">
                {currentSection.icon}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">{currentSection.title}</h2>
                <p className="text-sm text-gray-400">{currentSection.description}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-nasa-500/20 rounded-lg transition-colors"
              aria-label="Close help"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="space-y-6">
              {/* Features Section */}
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/50 border border-nasa-500/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-nasa-400" />
                  Key Features
                </h3>
                <div className="space-y-3">
                  {currentSection.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-slate-900/50 p-3 rounded-lg hover:bg-slate-900/70 transition-colors"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-nasa-400 mt-2 flex-shrink-0" />
                      <p className="text-sm text-gray-300">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tips Section */}
              {currentSection.tips && currentSection.tips.length > 0 && (
                <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-purple-400" />
                    Pro Tips
                  </h3>
                  <div className="space-y-2">
                    {currentSection.tips.map((tip, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-purple-400 text-lg">💡</span>
                        <p className="text-sm text-gray-300">{tip}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Quick Start Guide - Only on Overview */}
              {selectedSection === "overview" && (
                <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-500/30 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Play className="w-5 h-5 text-green-400" />
                    Quick Start Guide
                  </h3>
                  <ol className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-xs font-bold">1</span>
                      <div>
                        <p className="text-sm font-semibold text-white">Start Without Account</p>
                        <p className="text-xs text-gray-400">No signup needed - dive right in!</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-xs font-bold">2</span>
                      <div>
                        <p className="text-sm font-semibold text-white">Upload Your Data</p>
                        <p className="text-xs text-gray-400">Drag & drop FITS or CSV files</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-xs font-bold">3</span>
                      <div>
                        <p className="text-sm font-semibold text-white">Get AI Analysis</p>
                        <p className="text-xs text-gray-400">Instant classification and results</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-xs font-bold">4</span>
                      <div>
                        <p className="text-sm font-semibold text-white">Explore & Export</p>
                        <p className="text-xs text-gray-400">View results, export data, share findings</p>
                      </div>
                    </li>
                  </ol>
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-nasa-500/30 bg-slate-900/95 p-4">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-4 text-gray-400">
                <a 
                  href="https://github.com/JAPV-X2612/ECI-Centauri-Frontend" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-nasa-400 transition-colors flex items-center gap-1"
                >
                  <Globe className="w-3 h-3" />
                  GitHub Repository
                </a>
                <span>•</span>
                <span>NASA Space Apps Challenge 2025</span>
              </div>
              <button
                onClick={() => setSelectedSection("overview")}
                className="text-nasa-400 hover:text-nasa-300 transition-colors"
              >
                ← Back to Overview
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
