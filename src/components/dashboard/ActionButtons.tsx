/**
 * ActionButtons Component - Export and share buttons
 * NASA Space Apps Challenge 2025
 */

import React, { useState } from 'react';
import { Download, Share2, X, FileSpreadsheet, FileText } from 'lucide-react';

interface ActionButtonsProps {
  onShare: () => void;
}

type ExportFormat = 'csv' | 'xlsx';

/**
 * Buttons for exporting results and sharing discoveries
 */
export const ActionButtons: React.FC<ActionButtonsProps> = ({ onShare }) => {
  const [showExportModal, setShowExportModal] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState<ExportFormat>('csv');

  const handleExport = () => {
    // Here you would handle the actual export logic
    console.log('Exporting as:', selectedFormat);
    const fileExtension = selectedFormat.toUpperCase();
    alert(`Preparing to export results as ${fileExtension} file...`);
    setShowExportModal(false);
  };

  return (
    <>
      <div className="space-y-2">
        <button 
          onClick={() => setShowExportModal(true)}
          className="w-full bg-slate-700/50 hover:bg-slate-700 rounded-lg py-3 px-4 text-sm transition-all flex items-center justify-center gap-2"
        >
          <Download className="w-4 h-4" />
          Export Results
        </button>
        <button 
          onClick={onShare} 
          className="w-full bg-slate-700/50 hover:bg-slate-700 rounded-lg py-3 px-4 text-sm transition-all flex items-center justify-center gap-2"
        >
          <Share2 className="w-4 h-4" />
          Share Discovery
        </button>
      </div>

      {/* Export Format Modal */}
      {showExportModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 border border-nasa-500/30 max-w-md w-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Download className="w-5 h-5 text-nasa-400" />
                Export Results
              </h3>
              <button
                onClick={() => setShowExportModal(false)}
                className="text-gray-400 hover:text-white transition-colors"
                title="Close export modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-gray-400">
                Choose your preferred export format for the analysis results:
              </p>

              {/* Format Selection */}
              <div className="space-y-3">
                {/* CSV Option */}
                <button
                  onClick={() => setSelectedFormat('csv')}
                  className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                    selectedFormat === 'csv'
                      ? 'border-nasa-500 bg-nasa-900/30'
                      : 'border-slate-700 bg-slate-700/30 hover:border-slate-600'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      selectedFormat === 'csv' ? 'bg-nasa-600' : 'bg-slate-600'
                    }`}>
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-0.5">CSV Format</h4>
                      <p className="text-xs text-gray-400">
                        Comma-separated values, compatible with Excel and data analysis tools
                      </p>
                    </div>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedFormat === 'csv' 
                        ? 'border-nasa-500 bg-nasa-500' 
                        : 'border-gray-500'
                    }`}>
                      {selectedFormat === 'csv' && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                  </div>
                </button>

                {/* XLSX Option */}
                <button
                  onClick={() => setSelectedFormat('xlsx')}
                  className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                    selectedFormat === 'xlsx'
                      ? 'border-nasa-500 bg-nasa-900/30'
                      : 'border-slate-700 bg-slate-700/30 hover:border-slate-600'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      selectedFormat === 'xlsx' ? 'bg-green-600' : 'bg-slate-600'
                    }`}>
                      <FileSpreadsheet className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-0.5">XLSX Format</h4>
                      <p className="text-xs text-gray-400">
                        Excel spreadsheet format with formatting and multiple sheets support
                      </p>
                    </div>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedFormat === 'xlsx' 
                        ? 'border-nasa-500 bg-nasa-500' 
                        : 'border-gray-500'
                    }`}>
                      {selectedFormat === 'xlsx' && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                  </div>
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => setShowExportModal(false)}
                  className="flex-1 bg-slate-700/50 hover:bg-slate-700 rounded-lg py-2 px-4 text-sm transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={handleExport}
                  className="flex-1 bg-gradient-to-r from-nasa-600 to-blue-600 hover:from-nasa-700 hover:to-blue-700 text-white rounded-lg py-2 px-4 text-sm font-medium transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Export as {selectedFormat.toUpperCase()}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
