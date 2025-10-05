/**
 * QuickActions Component - Quick action buttons for analysis and upload
 * NASA Space Apps Challenge 2025
 */

import React, { useState, useRef } from 'react';
import { Play, Upload, X, FileType } from 'lucide-react';

interface QuickActionsProps {
  onAnalyzeDemo: () => void;
}

type DataSource = 'TESS' | 'Kepler' | 'K2';

/**
 * Quick action panel with demo analysis and data upload buttons
 */
export const QuickActions: React.FC<QuickActionsProps> = ({ onAnalyzeDemo }) => {
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedSource, setSelectedSource] = useState<DataSource>('Kepler');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file?.name.toLowerCase().endsWith('.fits')) {
      setSelectedFile(file);
    } else {
      alert('Please select a valid FITS file (.fits extension)');
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Here you would handle the actual upload logic
      console.log('Uploading file:', selectedFile.name, 'Source:', selectedSource);
      alert(`File "${selectedFile.name}" ready to upload as ${selectedSource} data!`);
      setShowUploadModal(false);
      setSelectedFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  return (
    <>
      <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-4 border border-nasa-500/20">
        <h3 className="text-sm font-semibold mb-3 text-nasa-300">Quick Start</h3>
        <button 
          onClick={onAnalyzeDemo} 
          className="w-full bg-gradient-to-r from-nasa-600 to-blue-600 hover:from-nasa-700 hover:to-blue-700 rounded-lg py-3 px-4 flex items-center justify-center gap-2 transition-all mb-2"
        >
          <Play className="w-4 h-4" />
          Analyze Demo Planet
        </button>
        <button 
          onClick={() => setShowUploadModal(true)}
          className="w-full bg-slate-700/50 hover:bg-slate-700 rounded-lg py-3 px-4 flex items-center justify-center gap-2 transition-all"
        >
          <Upload className="w-4 h-4" />
          Upload Your Data
        </button>
        <p className="text-xs text-gray-400 mt-2 text-center">Supports: .fits only</p>
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 border border-nasa-500/30 max-w-md w-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <FileType className="w-5 h-5 text-nasa-400" />
                Upload FITS File
              </h3>
              <button
                onClick={() => {
                  setShowUploadModal(false);
                  setSelectedFile(null);
                  if (fileInputRef.current) {
                    fileInputRef.current.value = '';
                  }
                }}
                className="text-gray-400 hover:text-white transition-colors"
                title="Close upload modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              {/* Data Source Selection */}
              <div>
                <label className="text-sm text-gray-300 mb-2 block font-medium">
                  Data Source
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['TESS', 'Kepler', 'K2'] as DataSource[]).map((source) => (
                    <button
                      key={source}
                      onClick={() => setSelectedSource(source)}
                      className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                        selectedSource === source
                          ? 'bg-gradient-to-r from-nasa-600 to-blue-600 text-white'
                          : 'bg-slate-700/50 text-gray-300 hover:bg-slate-700'
                      }`}
                    >
                      {source}
                    </button>
                  ))}
                </div>
              </div>

              {/* File Input */}
              <div>
                <label className="text-sm text-gray-300 mb-2 block font-medium">
                  Select FITS File
                </label>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".fits,.fit"
                  onChange={handleFileSelect}
                  title="Select FITS file"
                  className="w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-nasa-600 file:text-white hover:file:bg-nasa-700 file:cursor-pointer cursor-pointer bg-slate-700/50 rounded-lg border border-nasa-500/20"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Flexible Image Transport System format only
                </p>
              </div>

              {/* Selected File Info */}
              {selectedFile && (
                <div className="bg-slate-700/50 rounded-lg p-3 border border-nasa-500/20">
                  <p className="text-xs text-gray-400 mb-1">Selected File:</p>
                  <p className="text-sm text-white font-medium">{selectedFile.name}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    Size: {(selectedFile.size / 1024).toFixed(2)} KB
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => {
                    setShowUploadModal(false);
                    setSelectedFile(null);
                    if (fileInputRef.current) {
                      fileInputRef.current.value = '';
                    }
                  }}
                  className="flex-1 bg-slate-700/50 hover:bg-slate-700 rounded-lg py-2 px-4 text-sm transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpload}
                  disabled={!selectedFile}
                  className={`flex-1 rounded-lg py-2 px-4 text-sm font-medium transition-all ${
                    selectedFile
                      ? 'bg-gradient-to-r from-nasa-600 to-blue-600 hover:from-nasa-700 hover:to-blue-700 text-white'
                      : 'bg-slate-700/30 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
