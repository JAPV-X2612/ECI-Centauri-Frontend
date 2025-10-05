/**
 * ReferencesModal Component - Displays project references
 * NASA Space Apps Challenge 2025
 * Citations in APA 7th Edition format
 */

import React from 'react';
import { X, BookOpen, Bot } from 'lucide-react';

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
    title: "NASA Exoplanet Archive",
    url: "https://exoplanetarchive.ipac.caltech.edu",
    description: "Online astronomical exoplanet catalog and data service"
  },
  {
    title: "Google Earth - Geographic Visualization",
    url: "https://earth.google.com/web/@0.55994624,-72.49802295,693.66421094a,2050355.21500736d,35y,357.23312833h,0t,0r/data=CgRCAggBOgMKATBCAggASg0I____________ARAA",
    description: "Geographic context and visualization"
  },
  {
    title: "NASA Eyes on Exoplanets",
    url: "https://eyes.nasa.gov/apps/exo/#",
    description: "Interactive 3D visualization of exoplanets"
  },
  {
    title: "Zenodo - Research Data Repository",
    url: "https://zenodo.org/records/7411579",
    description: "Dataset and research materials"
  },
  {
    title: "Railway - Deployment Platform",
    url: "https://railway.com",
    description: "Cloud deployment infrastructure"
  },
  {
    title: "Astronet-Vetting - Transit Detection",
    url: "https://github.com/yuliang419/Astronet-Vetting",
    description: "Neural network for classifying planet candidates"
  },
  {
    title: "Machine Learning for Exoplanet Detection",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9132280/?utm_source=chatgpt.com#abstract1",
    description: "Research paper on ML approaches"
  },
  {
    title: "MAST - Mikulski Archive for Space Telescopes",
    url: "https://mast.stsci.edu/portal/Mashup/Clients/Mast/Portal.html",
    description: "Space telescope data archive"
  },
  {
    title: "Gaia Archive",
    url: "https://gea.esac.esa.int/archive/",
    description: "ESA Gaia mission data"
  },
  {
    title: "EXOTIC - Exoplanet Transit Interpretation Code",
    url: "https://github.com/rzellem/EXOTIC",
    description: "Data reduction package for transiting exoplanets"
  },
  {
    title: "LIBSVM - Support Vector Machine Library",
    url: "https://github.com/cjlin1/libsvm",
    description: "Machine learning classification library"
  },
  {
    title: "MLflow",
    url: "https://github.com/mlflow/mlflow",
    description: "ML lifecycle management platform"
  },
  {
    title: "BentoML",
    url: "https://github.com/bentoml/BentoML",
    description: "ML model serving framework"
  },
  {
    title: "TimeGAN - Time-series Generative Adversarial Networks",
    url: "https://github.com/jsyoon0823/TimeGAN",
    description: "Synthetic time-series data generation"
  },
  {
    title: "Webb's Impact on Exoplanet Research",
    url: "https://science.nasa.gov/mission/webb/science-overview/science-explainers/webbs-impact-on-exoplanet-research",
    description: "James Webb Space Telescope contributions"
  },
  {
    title: "Exoplanet Deep Learning",
    url: "https://github.com/gabrielgarza/exoplanet-deep-learning?tab=readme-ov-file",
    description: "Deep learning models for exoplanet detection"
  },
  {
    title: "Kepler Mission Overview",
    url: "https://youtu.be/J2yD9JrqllA",
    description: "Educational video about Kepler mission"
  },
  {
    title: "Astronet-Triage",
    url: "https://github.com/yuliang419/Astronet-Triage",
    description: "Automated triage system for planet candidates"
  },
  {
    title: "NASA TREK",
    url: "https://trek.nasa.gov/#",
    description: "NASA's visualization and analysis portal"
  },
  {
    title: "NASA TREK API Documentation",
    url: "https://trek.nasa.gov/tiles/apidoc/trekAPI.html?body=moon",
    description: "WMTS and imagery API reference"
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
 */
export const ReferencesModal: React.FC<ReferencesModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl max-h-[85vh] bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-nasa-500/30 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-gradient-to-r from-nasa-900/95 to-blue-900/95 backdrop-blur-lg border-b border-nasa-500/30 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-nasa-400" />
              <h2 className="text-2xl font-bold bg-gradient-to-r from-nasa-400 to-blue-400 bg-clip-text text-transparent">
                Project References
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-nasa-500/20 rounded-lg transition-colors"
              aria-label="Close references"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="mt-2 text-sm text-gray-400">
            Citations in APA 7th Edition format
          </p>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(85vh-120px)] px-6 py-6 space-y-8">
          {/* Bibliographic References Section */}
          <section>
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-nasa-500/20">
              <BookOpen className="w-5 h-5 text-nasa-400" />
              <h3 className="text-xl font-semibold text-white">Bibliographic References</h3>
            </div>
            <div className="space-y-3">
              {BIBLIOGRAPHIC_REFERENCES.map((ref, index) => (
                <div
                  key={ref.url}
                  className="group bg-slate-800/50 rounded-lg p-4 border border-nasa-500/10 hover:border-nasa-500/30 transition-all"
                >
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3"
                  >
                    <span className="text-nasa-400 font-mono text-sm mt-0.5 shrink-0">
                      [{index + 1}]
                    </span>
                    <div className="flex-1">
                      <h4 className="text-white font-medium group-hover:text-nasa-400 transition-colors mb-1">
                        {ref.title}
                      </h4>
                      {ref.description && (
                        <p className="text-gray-400 text-sm mb-2">{ref.description}</p>
                      )}
                      <p className="text-nasa-500 text-xs font-mono break-all group-hover:text-nasa-400 transition-colors">
                        {ref.url}
                      </p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* AI References Section */}
          <section>
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-blue-500/20">
              <Bot className="w-5 h-5 text-blue-400" />
              <h3 className="text-xl font-semibold text-white">AI Tools & References</h3>
            </div>
            <div className="space-y-3">
              {AI_REFERENCES.map((ref, index) => (
                <div
                  key={ref.url}
                  className="group bg-slate-800/50 rounded-lg p-4 border border-blue-500/10 hover:border-blue-500/30 transition-all"
                >
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3"
                  >
                    <span className="text-blue-400 font-mono text-sm mt-0.5 shrink-0">
                      [AI-{index + 1}]
                    </span>
                    <div className="flex-1">
                      <h4 className="text-white font-medium group-hover:text-blue-400 transition-colors mb-1">
                        {ref.title}
                      </h4>
                      {ref.description && (
                        <p className="text-gray-400 text-sm mb-2">{ref.description}</p>
                      )}
                      <p className="text-blue-500 text-xs font-mono break-all group-hover:text-blue-400 transition-colors">
                        {ref.url}
                      </p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Footer Note */}
          <div className="text-center text-sm text-gray-500 pt-4 border-t border-nasa-500/10">
            <p>All references accessed October 2025</p>
            <p className="mt-1">NASA Space Apps Challenge 2025 - ECI Centauri Team</p>
          </div>
        </div>
      </div>
    </div>
  );
};
