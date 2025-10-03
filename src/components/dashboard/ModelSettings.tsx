/**
 * ModelSettings Component - AI model configuration panel
 * NASA Space Apps Challenge 2025
 */

import React from 'react';

/**
 * Panel for adjusting AI model hyperparameters
 */
export const ModelSettings: React.FC = () => (
  <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-4 border border-nasa-500/20">
    <h3 className="text-sm font-semibold mb-3 text-nasa-300">AI Model</h3>
    <div className="space-y-3">
      <div>
        <label className="text-xs text-gray-400 mb-1 block">Model Type</label>
        <select className="w-full bg-slate-700/50 border border-nasa-500/20 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-nasa-500">
          <option>CNN (Convolutional Neural Network)</option>
          <option>SVM (Support Vector Machine)</option>
          <option>RL (Reinforcement Learning)</option>
          <option>RF (Random Forest)</option>
        </select>
      </div>
      <div>
        <label className="text-xs text-gray-400 mb-1 block">Learning Rate</label>
        <input 
          type="number" 
          step="0.001" 
          defaultValue="0.001" 
          className="w-full bg-slate-700/50 border border-nasa-500/20 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-nasa-500" 
        />
      </div>
      <div>
        <label className="text-xs text-gray-400 mb-1 block">Epochs</label>
        <input 
          type="number" 
          defaultValue="100" 
          className="w-full bg-slate-700/50 border border-nasa-500/20 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-nasa-500" 
        />
      </div>
    </div>
  </div>
);
