/**
 * SignupPage Component - User registration page
 * NASA Space Apps Challenge 2025
 */

import React, { useState } from 'react';
import { User, Mail, Lock, Upload } from 'lucide-react';
import { StarsBg } from '../components/common';
import { useToast } from '../components/common/Toast';

interface SignupPageProps {
  onSignup: () => void;
  onSwitchToLogin: () => void;
}

export const SignupPage: React.FC<SignupPageProps> = ({ onSignup, onSwitchToLogin }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const { showToast } = useToast();

  const handleSignup = () => {
    // Validate empty fields
    if (!fullName || !email || !password) {
      showToast('warning', 'Please fill in all required fields', 3000);
      return;
    }

    // Validate short password
    if (password.length < 8) {
      showToast('warning', 'Password must be at least 8 characters long', 3000);
      return;
    }

    // Validate terms and conditions
    if (!agreeTerms) {
      showToast('warning', 'Please agree to the Terms of Service and Privacy Policy', 3000);
      return;
    }

    showToast('success', 'Account created successfully! Welcome to Exoplanet Hunter AI', 4000);
    onSignup();
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
            Join the Hunt
          </h1>
          <p className="text-gray-400 text-sm">Create your account and start discovering</p>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-nasa-500/20 shadow-2xl max-h-[80vh] overflow-y-auto">
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-300 mb-2 block">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-slate-700/50 border border-nasa-500/20 rounded-lg pl-11 pr-4 py-3 text-white focus:outline-none focus:border-nasa-500"
                  placeholder="Dr. Jane Smith"
                />
              </div>
            </div>
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
            <div>
              <label className="text-sm text-gray-300 mb-2 block">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-700/50 border border-nasa-500/20 rounded-lg pl-11 pr-4 py-3 text-white focus:outline-none focus:border-nasa-500"
                  placeholder="••••••••"
                />
              </div>
              <p className="text-xs text-gray-400 mt-1">At least 8 characters with numbers and symbols</p>
            </div>
            <div>
              <label className="text-sm text-gray-300 mb-2 block">Profile Photo (Optional)</label>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-nasa-500 to-blue-500 rounded-full flex items-center justify-center text-2xl font-bold">
                  ?
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-700 border border-nasa-500/20 rounded-lg text-sm transition-colors text-white">
                  <Upload className="w-4 h-4 text-white" />
                  Upload Photo
                </button>
              </div>
            </div>
            <div>
              <label className="text-sm text-gray-300 mb-2 block">Role (Optional)</label>
              <select 
                className="w-full bg-slate-700/50 border border-nasa-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-nasa-500"
                aria-label="Select your role"
              >
                <option>Citizen Scientist</option>
                <option>Student</option>
                <option>Researcher</option>
                <option>Educator</option>
                <option>Professional Astronomer</option>
                <option>Just Curious</option>
              </select>
            </div>
            <label className="flex items-start gap-3 text-sm text-gray-300 cursor-pointer">
              <input 
                type="checkbox" 
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="w-4 h-4 rounded border-gray-600 bg-slate-700 mt-1" 
              />
              <span>I agree to the Terms of Service and Privacy Policy</span>
            </label>
            <button
              onClick={handleSignup}
              className="w-full bg-gradient-to-r from-nasa-600 to-blue-600 hover:from-nasa-700 hover:to-blue-700 rounded-lg py-3 font-semibold transition-all shadow-lg"
            >
              Create Account
            </button>
            <div className="text-center text-sm text-gray-400">
              Already have an account?{' '}
              <button onClick={onSwitchToLogin} className="text-nasa-400 hover:text-nasa-300 font-semibold">
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
