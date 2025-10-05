/**
 * ForgotPasswordPage Component - Password reset page
 * NASA Space Apps Challenge 2025
 */

import React, { useState } from 'react';
import { Mail, ArrowLeft } from 'lucide-react';
import { StarsBg } from '../components/common';
import { useToast } from '../components/common/Toast';

interface ForgotPasswordPageProps {
  onBackToLogin: () => void;
}

export const ForgotPasswordPage: React.FC<ForgotPasswordPageProps> = ({ onBackToLogin }) => {
  const [email, setEmail] = useState('');
  const { showToast } = useToast();

  const handleResetPassword = () => {
    if (!email) {
      showToast('warning', 'Please enter your email address', 3000);
      return;
    }

    // Validation: Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast('error', 'Please enter a valid email address', 3000);
      return;
    }

    showToast('success', 'Password reset link sent! Check your email', 4000);
    setTimeout(() => {
      onBackToLogin();
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-nasa-900 to-slate-900 flex items-center justify-center p-6">
      <StarsBg />
      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="mx-auto mb-6 flex justify-center">
            <img 
              src="/eci-centauri-logo-blue.png" 
              alt="ECI Centauri Logo" 
              className="h-24 w-auto"
            />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-nasa-400 to-blue-400 bg-clip-text text-transparent mb-2">
            Reset Password
          </h1>
          <p className="text-gray-400 text-sm">Enter your email to receive a reset link</p>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-nasa-500/20 shadow-2xl">
          <div className="space-y-5">
            <div>
              <label className="text-sm text-gray-300 mb-2 block">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-700/50 border border-nasa-500/20 rounded-lg pl-11 pr-4 py-3 text-white focus:outline-none focus:border-nasa-500"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <button 
              onClick={handleResetPassword}
              className="w-full bg-gradient-to-r from-nasa-600 to-blue-600 hover:from-nasa-700 hover:to-blue-700 rounded-lg py-3 font-semibold transition-all shadow-lg"
            >
              Send Reset Link
            </button>
            <button
              onClick={onBackToLogin}
              className="w-full flex items-center justify-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
