/**
 * QuickActions Component - Quick action buttons for analysis and upload
 * NASA Space Apps Challenge 2025
 */

import React, { useState, useRef } from 'react';
import { Play, Upload, X, FileType } from 'lucide-react';
import { useToast } from '../common/Toast';

interface QuickActionsProps {
  onAnalyzeDemo: () => void;
}

type DataSource = 'TESS' | 'Kepler';

/**
 * Quick action panel with demo analysis and data upload buttons
 */
export const QuickActions: React.FC<QuickActionsProps> = ({ onAnalyzeDemo }) => {
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedSource, setSelectedSource] = useState<DataSource>('Kepler');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [exoplanetId, setExoplanetId] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { showToast } = useToast();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file?.name.toLowerCase().endsWith('.fits')) {
      setSelectedFile(file);
      showToast('info', `File "${file.name}" selected (${(file.size / 1024).toFixed(2)} KB)`, 3000);
    } else {
      showToast('error', 'Invalid file type. Please select a valid FITS file (.fits extension)', 4000);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleUpload = () => {
    if (selectedFile && exoplanetId.trim()) {
      // Show loading toast
      showToast('info', `Loading dataset "${selectedFile.name}"...`, 2000);
      
      // Simulate data upload and verification process
      setTimeout(() => {
        // Simulate success or failure
        const uploadSuccess = Math.random() > 0.1; // 90% success rate
        
        if (uploadSuccess) {
          showToast('success', `Dataset loaded successfully! Verifying ID: ${exoplanetId}...`, 3000);
          console.log('Uploading file:', selectedFile.name, 'Source:', selectedSource, 'ID:', exoplanetId);
          
          // Simulate verification
          setTimeout(() => {
            const isExoplanet = Math.random() > 0.3; // 70% chance of being exoplanet
            if (isExoplanet) {
              showToast('success', `✓ Confirmed: ID ${exoplanetId} is an exoplanet candidate!`, 4000);
            } else {
              showToast('warning', `ID ${exoplanetId} does not match exoplanet criteria`, 4000);
            }
          }, 3500);
        } else {
          showToast('error', `Failed to load dataset. Please check the file format and try again`, 4000);
        }
        
        setShowUploadModal(false);
        setSelectedFile(null);
        setExoplanetId('');
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      }, 1500);
    } else if (!selectedFile) {
      showToast('warning', 'Please select a FITS file first', 3000);
    } else if (!exoplanetId.trim()) {
      showToast('warning', 'Please enter an Exoplanet ID to verify', 3000);
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
                  setExoplanetId('');
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
                <div className="grid grid-cols-2 gap-2">
                  {(['TESS', 'Kepler'] as DataSource[]).map((source) => (
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

              {/* Exoplanet ID Input - Only show if file is selected */}
              {selectedFile && (
                <div>
                  <label className="text-sm text-gray-300 mb-2 block font-medium">
                    Exoplanet ID <span className="text-nasa-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={exoplanetId}
                    onChange={(e) => setExoplanetId(e.target.value)}
                    placeholder={`e.g., ${selectedSource === 'Kepler' ? 'K2-18 b' : 'TOI-700 d'}`}
                    className="w-full px-4 py-2 bg-slate-700/50 border border-nasa-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-nasa-500 focus:ring-1 focus:ring-nasa-500 transition-all"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Enter the {selectedSource} ID to verify if it's an exoplanet candidate
                  </p>
                </div>
              )}

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
                    setExoplanetId('');
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
                  disabled={!selectedFile || !exoplanetId.trim()}
                  className={`flex-1 rounded-lg py-2 px-4 text-sm font-medium transition-all ${
                    selectedFile && exoplanetId.trim()
                      ? 'bg-gradient-to-r from-nasa-600 to-blue-600 hover:from-nasa-700 hover:to-blue-700 text-white'
                      : 'bg-slate-700/30 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Upload & Verify
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
