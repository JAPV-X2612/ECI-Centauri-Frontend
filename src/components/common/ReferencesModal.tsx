/**
 * ReferencesModal Component - Displays project references
 * NASA Space Apps Challenge 2025
 * Citations in APA 7th Edition format
 */

import React, { useState } from 'react';
import { X, BookOpen, Bot, Box, Microscope, Rocket, Database, ChevronDown } from 'lucide-react';

interface ReferencesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Reference {
  title: string;
  url: string;
  description?: string;
}

const BIBLIOGRAPHIC_REFERENCES: Reference[] = [
  {
    title: "NASA Space Apps Challenge 2025 - Exoplanet Challenge",
    url: "https://www.spaceappschallenge.org/2025/challenges/a-world-away-hunting-for-exoplanets-with-ai/?tab=details",
    description: "Challenge details and guidelines"
  },
  {
    title: "Google Earth - Geographic Visualization",
    url: "https://earth.google.com/web/@0.55994624,-72.49802295,693.66421094a,2050355.21500736d,35y,357.23312833h,0t,0r/data=CgRCAggBOgMKATBCAggASg0I____________ARAA",
    description: "Geographic context and visualization"
  },
  {
    title: "Railway - Deployment Platform",
    url: "https://railway.com",
    description: "Cloud deployment infrastructure"
  }
];

// Machine Learning & CNN Models
const ML_REFERENCES: Reference[] = [
  {
    title: "AstroNet: A Deep Learning Method for Detecting Transiting Exoplanets (MAIN CNN ARTICLE)",
    url: "https://iopscience.iop.org/article/10.3847/1538-3881/aa9e09/pdf",
    description: "🌟 Main article for CNN model implementation - Shallue & Vanderburg (2018)"
  },
  {
    title: "How to Train an Ensemble of Convolutional Neural Networks for Image Classification",
    url: "https://medium.com/@alexppppp/how-to-train-an-ensemble-of-convolutional-neural-networks-for-image-classification-8fc69b087d3",
    description: "Ensemble CNN training techniques and best practices"
  },
  {
    title: "Identifying Exoplanets with Deep Learning IV: Removing Stellar Activity Signals",
    url: "https://arxiv.org/pdf/1904.08933",
    description: "Advanced deep learning techniques for signal processing"
  },
  {
    title: "ExoMiner: A Highly Accurate and Explainable Deep Learning Classifier",
    url: "https://academic.oup.com/mnras/article/513/4/5505/6472249",
    description: "Explainable AI for exoplanet classification"
  },
  {
    title: "Deep Learning for Exoplanet Detection in High Contrast Imaging",
    url: "https://www.mdpi.com/2079-9292/13/19/3950",
    description: "CNN applications in high-contrast imaging analysis"
  },
  {
    title: "Machine Learning for Exoplanet Detection",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9132280/?utm_source=chatgpt.com#abstract1",
    description: "Comprehensive review of ML approaches in exoplanet discovery"
  },
  {
    title: "Detecting Exoplanets Using Machine Learning Techniques",
    url: "https://link.springer.com/article/10.1007/s12145-021-00579-5",
    description: "Survey of ML techniques for transit detection"
  },
  {
    title: "Astronet-Vetting - Transit Detection Neural Network",
    url: "https://github.com/yuliang419/Astronet-Vetting",
    description: "Neural network for classifying planet candidates"
  },
  {
    title: "Astronet-Triage - Automated Candidate Triage",
    url: "https://github.com/yuliang419/Astronet-Triage",
    description: "Automated triage system for planet candidates"
  },
  {
    title: "Exoplanet Deep Learning - GitHub Repository",
    url: "https://github.com/gabrielgarza/exoplanet-deep-learning?tab=readme-ov-file",
    description: "Deep learning models and implementations"
  }
];

// Data Sources & Archives
const DATA_REFERENCES: Reference[] = [
  {
    title: "NASA Exoplanet Archive",
    url: "https://exoplanetarchive.ipac.caltech.edu",
    description: "Primary astronomical exoplanet catalog and data service"
  },
  {
    title: "MAST - Mikulski Archive for Space Telescopes",
    url: "https://mast.stsci.edu/portal/Mashup/Clients/Mast/Portal.html",
    description: "Space telescope data archive (Kepler, TESS, Hubble, Webb)"
  },
  {
    title: "Gaia Archive",
    url: "https://gea.esac.esa.int/archive/",
    description: "ESA Gaia mission stellar data"
  },
  {
    title: "Zenodo - Research Data Repository",
    url: "https://zenodo.org/records/7411579",
    description: "Open-access research datasets and materials"
  },
  {
    title: "Canadian Space Agency - Open Data Portal",
    url: "https://donnees-data.asc-csa.gc.ca/en/dataset/9ae3e718-8b6d-40b7-8aa4-858f00e84b30",
    description: "Canadian Space Agency datasets and resources"
  }
];

// Space Missions & Observatories
const SPACE_MISSIONS: Reference[] = [
  {
    title: "NASA Eyes on Exoplanets",
    url: "https://eyes.nasa.gov/apps/exo/#",
    description: "Interactive 3D visualization of discovered exoplanets"
  },
  {
    title: "James Webb Space Telescope - Impact on Exoplanet Research",
    url: "https://science.nasa.gov/mission/webb/science-overview/science-explainers/webbs-impact-on-exoplanet-research",
    description: "JWST contributions to exoplanet characterization"
  },
  {
    title: "James Webb Space Telescope - Canadian Space Agency",
    url: "https://www.asc-csa.gc.ca/eng/satellites/jwst/about.asp",
    description: "Canada's involvement in JWST mission"
  },
  {
    title: "NEOSSat - Near-Earth Object Surveillance Satellite",
    url: "https://www.asc-csa.gc.ca/eng/satellites/neossat/",
    description: "Canadian microsatellite for asteroid tracking"
  },
  {
    title: "Kepler Mission Overview",
    url: "https://youtu.be/J2yD9JrqllA",
    description: "Educational video about NASA's Kepler mission"
  },
  {
    title: "NASA TREK - Visualization Portal",
    url: "https://trek.nasa.gov/#",
    description: "NASA's planetary visualization and analysis platform"
  },
  {
    title: "NASA TREK API Documentation",
    url: "https://trek.nasa.gov/tiles/apidoc/trekAPI.html?body=moon",
    description: "WMTS and imagery API reference"
  }
];

// 3D Models & Visualizations
const MODELS_3D: Reference[] = [
  {
    title: "Exoplanet SG10446623 - 3D Model",
    url: "https://sketchfab.com/3d-models/exoplanet-sg10446623-128ba361498049e9b12baede75bf7b5a",
    description: "High-quality 3D model of exoplanet"
  },
  {
    title: "Pixel Planet Kepler-186f - 3D Model",
    url: "https://sketchfab.com/3d-models/pixel-planet-kepler-186-f-81a4b533cb2e426d85a17a3793a9420e",
    description: "Artistic pixel-style representation of Kepler-186f"
  },
  {
    title: "Kepler-186f - Realistic 3D Model",
    url: "https://sketchfab.com/3d-models/kepler-186f-c484b8b4aa9248b6998b6222d62f5a77",
    description: "Scientifically-inspired 3D model of Kepler-186f"
  },
  {
    title: "Kepler-22b - 3D Model",
    url: "https://sketchfab.com/3d-models/kepler-22b-3589154676b7465c815a4aa1d8c4354a",
    description: "3D visualization of super-Earth Kepler-22b"
  },
  {
    title: "Realistic Jupiter - 3D Model",
    url: "https://sketchfab.com/3d-models/realistic-jupiter-993ba62a539e4c308e9e3137df454ed6",
    description: "High-resolution 3D model of Jupiter"
  }
];

// Development Tools & Libraries
const DEV_TOOLS: Reference[] = [
  {
    title: "EXOTIC - Exoplanet Transit Interpretation Code",
    url: "https://github.com/rzellem/EXOTIC",
    description: "Python package for analyzing transiting exoplanet light curves"
  },
  {
    title: "LIBSVM - Support Vector Machine Library",
    url: "https://github.com/cjlin1/libsvm",
    description: "Machine learning classification library"
  },
  {
    title: "MLflow - ML Lifecycle Platform",
    url: "https://github.com/mlflow/mlflow",
    description: "End-to-end machine learning lifecycle management"
  },
  {
    title: "BentoML - Model Serving Framework",
    url: "https://github.com/bentoml/BentoML",
    description: "Unified framework for ML model serving"
  },
  {
    title: "TimeGAN - Time-series GAN",
    url: "https://github.com/jsyoon0823/TimeGAN",
    description: "Generative Adversarial Networks for synthetic time-series data"
  }
];

const AI_REFERENCES: Reference[] = [
  {
    title: "GitHub Copilot Documentation",
    url: "https://docs.github.com/en/copilot",
    description: "AI-powered code completion and assistance"
  },
  {
    title: "Claude AI Documentation",
    url: "https://docs.claude.com/en/home",
    description: "Anthropic's AI assistant documentation"
  },
  {
    title: "OpenAI Platform Documentation",
    url: "https://platform.openai.com/docs/overview",
    description: "OpenAI API and model documentation"
  }
];

/**
 * Modal displaying project references in APA 7th Edition format
 * Organized by category with collapsible sections
 */
export const ReferencesModal: React.FC<ReferencesModalProps> = ({ isOpen, onClose }) => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['ml', 'data', 'space', '3d', 'tools', 'ai', 'general']));

  if (!isOpen) return null;

  const toggleSection = (section: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(section)) {
        newSet.delete(section);
      } else {
        newSet.add(section);
      }
      return newSet;
    });
  };

  const getColorClasses = (color: string) => {
    const colors: Record<string, {
      border: string;
      borderHover: string;
      text: string;
      textHover: string;
      bg: string;
    }> = {
      purple: {
        border: 'border-purple-500/10',
        borderHover: 'hover:border-purple-500/30',
        text: 'text-purple-400',
        textHover: 'group-hover:text-purple-400',
        bg: 'bg-purple-500/20'
      },
      blue: {
        border: 'border-blue-500/10',
        borderHover: 'hover:border-blue-500/30',
        text: 'text-blue-400',
        textHover: 'group-hover:text-blue-400',
        bg: 'bg-blue-500/20'
      },
      cyan: {
        border: 'border-cyan-500/10',
        borderHover: 'hover:border-cyan-500/30',
        text: 'text-cyan-400',
        textHover: 'group-hover:text-cyan-400',
        bg: 'bg-cyan-500/20'
      },
      pink: {
        border: 'border-pink-500/10',
        borderHover: 'hover:border-pink-500/30',
        text: 'text-pink-400',
        textHover: 'group-hover:text-pink-400',
        bg: 'bg-pink-500/20'
      },
      green: {
        border: 'border-green-500/10',
        borderHover: 'hover:border-green-500/30',
        text: 'text-green-400',
        textHover: 'group-hover:text-green-400',
        bg: 'bg-green-500/20'
      },
      orange: {
        border: 'border-orange-500/10',
        borderHover: 'hover:border-orange-500/30',
        text: 'text-orange-400',
        textHover: 'group-hover:text-orange-400',
        bg: 'bg-orange-500/20'
      },
      nasa: {
        border: 'border-nasa-500/10',
        borderHover: 'hover:border-nasa-500/30',
        text: 'text-nasa-400',
        textHover: 'group-hover:text-nasa-400',
        bg: 'bg-nasa-500/20'
      }
    };
    return colors[color] || colors.nasa;
  };

  const renderReferenceCard = (ref: Reference, index: number, prefix: string = '', color: string = 'nasa') => {
    const colors = getColorClasses(color);
    
    return (
      <div
        key={ref.url}
        className={`group bg-slate-800/50 rounded-lg p-4 border ${colors.border} ${colors.borderHover} transition-all`}
      >
        <a
          href={ref.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-3"
        >
          <span className={`${colors.text} font-mono text-sm mt-0.5 shrink-0`}>
            [{prefix}{index + 1}]
          </span>
          <div className="flex-1">
            <h4 className={`text-white font-medium ${colors.textHover} transition-colors mb-1`}>
              {ref.title}
            </h4>
            {ref.description && (
              <p className="text-gray-400 text-sm mb-2">{ref.description}</p>
            )}
            <p className={`${colors.text} text-xs font-mono break-all ${colors.textHover} transition-colors`}>
              {ref.url}
            </p>
          </div>
        </a>
      </div>
    );
  };

  const renderSection = (
    id: string,
    title: string,
    icon: React.ReactNode,
    references: Reference[],
    prefix: string = '',
    color: string = 'nasa',
    description?: string
  ) => {
    const isExpanded = expandedSections.has(id);
    const colors = getColorClasses(color);
    
    return (
      <section className="mb-6">
        <button
          onClick={() => toggleSection(id)}
          className={`w-full flex items-center justify-between gap-3 mb-4 pb-3 border-b ${colors.border} hover:border-opacity-40 transition-colors group`}
        >
          <div className="flex items-center gap-3">
            <span className={colors.text}>{icon}</span>
            <div className="text-left">
              <h3 className={`text-xl font-semibold text-white ${colors.textHover} transition-colors`}>
                {title}
              </h3>
              {description && (
                <p className="text-sm text-gray-400 mt-1">{description}</p>
              )}
            </div>
            <span className={`px-2 py-1 rounded-full ${colors.bg} ${colors.text} text-xs font-semibold`}>
              {references.length}
            </span>
          </div>
          <span className={`${colors.text} transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
            <ChevronDown className="w-5 h-5" />
          </span>
        </button>
        
        {isExpanded && (
          <div className="space-y-3 animate-fadeIn">
            {references.map((ref, index) => renderReferenceCard(ref, index, prefix, color))}
          </div>
        )}
      </section>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-5xl max-h-[90vh] bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-nasa-500/30 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-gradient-to-r from-nasa-900/95 to-blue-900/95 backdrop-blur-lg border-b border-nasa-500/30 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-nasa-400" />
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-nasa-400 to-blue-400 bg-clip-text text-transparent">
                  Project References
                </h2>
                <p className="text-sm text-gray-400 mt-1">
                  Organized by category • Click to expand/collapse sections
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-nasa-500/20 rounded-lg transition-colors"
              aria-label="Close references"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-140px)] px-6 py-6">
          {/* Machine Learning & CNN Section */}
          {renderSection(
            'ml',
            'Machine Learning & CNN Models',
            <Microscope className="w-5 h-5" />,
            ML_REFERENCES,
            'ML-',
            'purple',
            'Neural networks, deep learning, and AI models for exoplanet detection'
          )}

          {/* Data Sources & Archives Section */}
          {renderSection(
            'data',
            'Data Sources & Archives',
            <Database className="w-5 h-5" />,
            DATA_REFERENCES,
            'DATA-',
            'blue',
            'Public datasets, astronomical catalogs, and data repositories'
          )}

          {/* Space Missions Section */}
          {renderSection(
            'space',
            'Space Missions & Observatories',
            <Rocket className="w-5 h-5" />,
            SPACE_MISSIONS,
            'SPACE-',
            'cyan',
            'Telescopes, satellites, and space exploration missions'
          )}

          {/* 3D Models Section */}
          {renderSection(
            '3d',
            '3D Models & Visualizations',
            <Box className="w-5 h-5" />,
            MODELS_3D,
            '3D-',
            'pink',
            'Interactive 3D models and visual representations of exoplanets'
          )}

          {/* Development Tools Section */}
          {renderSection(
            'tools',
            'Development Tools & Libraries',
            <BookOpen className="w-5 h-5" />,
            DEV_TOOLS,
            'TOOL-',
            'green',
            'Software libraries, frameworks, and development resources'
          )}

          {/* AI Tools Section */}
          {renderSection(
            'ai',
            'AI Tools & Assistants',
            <Bot className="w-5 h-5" />,
            AI_REFERENCES,
            'AI-',
            'orange',
            'AI-powered development and assistance tools used in this project'
          )}

          {/* General References Section */}
          {renderSection(
            'general',
            'General References',
            <BookOpen className="w-5 h-5" />,
            BIBLIOGRAPHIC_REFERENCES,
            'REF-',
            'nasa',
            'Challenge information and general resources'
          )}

          {/* Footer Note */}
          <div className="text-center text-sm text-gray-500 pt-6 mt-6 border-t border-nasa-500/10">
            <p className="font-semibold text-gray-400">All references accessed October 2025</p>
            <p className="mt-2">NASA Space Apps Challenge 2025 - ECI Centauri Team</p>
            <p className="mt-1 text-xs">
              Citations formatted according to APA 7th Edition style
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
