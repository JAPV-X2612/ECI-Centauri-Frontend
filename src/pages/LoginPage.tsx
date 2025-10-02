/**
 * LoginPage Component - User authentication page
 * NASA Space Apps Challenge 2025
 */

import React, { useState } from 'react';
import { Database, Mail, Lock, Eye, EyeOff, Award, Star } from 'lucide-react';
import { StarsBg } from '../components/common';

interface LoginPageProps {
  onLogin: () => void;
  onNavigateToSignup: () => void;
  onNavigateToForgot: () => void;
  onContinueWithoutAccount: () => void;
}

/**
 * Login page with email/password authentication
 */
export const LoginPage: React.FC<LoginPageProps> = ({ 
  onLogin, 
  onNavigateToSignup, 
  onNavigateToForgot,
  onContinueWithoutAccount 
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-6">
      <StarsBg />
      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl">
            <Database className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
            Exoplanet Hunter AI
          </h1>
          <p className="text-gray-400 text-sm">Sign in to save your discoveries</p>
        </div>
        
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/20 shadow-2xl">
          <div className="space-y-5">
            <div>
              <label className="text-sm text-gray-300 mb-2 block">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  className="w-full bg-slate-700/50 border border-purple-500/20 rounded-lg pl-11 pr-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            
            <div>
              <label className="text-sm text-gray-300 mb-2 block">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full bg-slate-700/50 border border-purple-500/20 rounded-lg pl-11 pr-11 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="••••••••"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
                  type="button"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
            
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-300 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-600 bg-slate-700" />
                Remember me
              </label>
              <button onClick={onNavigateToForgot} className="text-purple-400 hover:text-purple-300">
                Forgot password?
              </button>
            </div>
            
            <button
              onClick={onLogin}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-lg py-3 font-semibold transition-all shadow-lg hover:shadow-purple-500/50"
            >
              Sign In
            </button>
            
            <button
              onClick={onContinueWithoutAccount}
              className="w-full bg-slate-700/50 hover:bg-slate-700 border border-purple-500/20 rounded-lg py-3 font-semibold transition-all"
            >
              Continue Without Account
            </button>
            
            <div className="text-center text-sm text-gray-400">
              Don't have an account?{' '}
              <button onClick={onNavigateToSignup} className="text-purple-400 hover:text-purple-300 font-semibold">
                Sign up
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-400">
          <p className="mb-2">With an account you can:</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <span className="flex items-center gap-1">
              <Database className="w-4 h-4" /> Save analyses
            </span>
            <span className="flex items-center gap-1">
              <Award className="w-4 h-4" /> Earn achievements
            </span>
            <span className="flex items-center gap-1">
              <Star className="w-4 h-4" /> Star favorites
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
