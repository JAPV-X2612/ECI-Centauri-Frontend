/**
 * Main Exoplanet Hunter AI
 * NASA Space Apps Challenge 2025
 * 
 * This is the refactored main application component with clean architecture.
 * The original monolithic component has been split into:
 * - Pages: Main views (Login, Signup, Profile, Dashboard)
 * - Components: Reusable UI components
 * - Hooks: Custom React hooks
 * - Constants: Static data
 * - Types: TypeScript interfaces
 */

import React, { useState } from 'react';
import { StarsBg, Header, Footer, AboutUsModal, ShareModal, ReferencesModal, HelpModal, SpaceChatbot, DashboardContentWrapper } from './components/common';
import { ToastProvider } from './components/common/Toast';
import { 
  TransitLightCurve, 
  AIPrediction, 
  QuickActions, 
  ModelSettings, 
  TodayStats, 
  ModelPerformance, 
  NewsPanel, 
  FactsCarousel, 
  ActionButtons, 
  PlanetVisualization,
  NASAImagery,
  CarbonFootprint
} from './components/dashboard';
import { LoginPage, SignupPage, ForgotPasswordPage, ProfilePage } from './pages';
import { useCyclicIndex, useModal } from './hooks';
import { EXOPLANET_FACTS, MOCK_USER_DATA, ANALYSIS_HISTORY, ACHIEVEMENTS, RECENT_ACTIVITY } from './constants';
import type { ViewType } from './types';

const ExoplanetHunterApp: React.FC = () => {
  // View state management
  const [view, setView] = useState<ViewType>('main');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // Analysis state
  const [confidence] = useState(87);
  
  // Uploaded images state for Transit Light Curve
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  
  // Modal management
  const aboutModal = useModal();
  const helpModal = useModal();
  const referencesModal = useModal();
  const shareModal = useModal();
  
  // Facts carousel
  const factsCarousel = useCyclicIndex(EXOPLANET_FACTS);
  
  // User data
  const userData = MOCK_USER_DATA;

  /**
   * Handle successful upload - load test images
   */
  const handleUploadSuccess = () => {
    const testImages = [
      '/test-0.png',
      '/test-1.png',
      '/test-2.png'
    ];
    setUploadedImages(testImages);
  };

  /**
   * Handle share action
   */
  const handleShare = () => {
    shareModal.open();
  };

  /**
   * Handle login
   */
  const handleLogin = () => {
    setIsLoggedIn(true);
    setView('main');
  };

  /**
   * Handle signup
   */
  const handleSignup = () => {
    setIsLoggedIn(true);
    setView('main');
  };

  /**
   * Handle sign out
   */
  const handleSignOut = () => {
    setIsLoggedIn(false);
    setView('login');
  };

  /**
   * Continue without account
   */
  const handleContinueWithoutAccount = () => {
    setView('main');
  };

  // Render login page
  if (view === 'login') {
    return (
      <ToastProvider>
        <LoginPage
          onLogin={handleLogin}
          onNavigateToSignup={() => setView('signup')}
          onNavigateToForgot={() => setView('forgot')}
          onContinueWithoutAccount={handleContinueWithoutAccount}
        />
      </ToastProvider>
    );
  }

  // Render signup page
  if (view === 'signup') {
    return (
      <ToastProvider>
        <SignupPage
          onSignup={handleSignup}
          onSwitchToLogin={() => setView('login')}
        />
      </ToastProvider>
    );
  }

  // Render forgot password page
  if (view === 'forgot') {
    return (
      <ToastProvider>
        <ForgotPasswordPage
          onBackToLogin={() => setView('login')}
        />
      </ToastProvider>
    );
  }

  // Render profile page
  if (view === 'profile' && isLoggedIn) {
    return (
      <ToastProvider>
        <ProfilePage
          userData={userData}
          analysisHistory={ANALYSIS_HISTORY}
          achievements={ACHIEVEMENTS}
          recentActivity={RECENT_ACTIVITY}
          onBackToMain={() => setView('main')}
          onSignOut={handleSignOut}
        />
      </ToastProvider>
    );
  }

  // Main dashboard view
  return (
    <ToastProvider>
      <DashboardContentWrapper>
        {(analyzeDemoWithToast) => (
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
            <StarsBg />
          
            <Header
              isLoggedIn={isLoggedIn}
              userData={isLoggedIn ? userData : undefined}
              onHelpClick={helpModal.open}
              onReferencesClick={referencesModal.open}
              onAboutClick={aboutModal.open}
              onSignInClick={() => setView('login')}
              onProfileClick={() => setView('profile')}
            />
          
          <main className="relative z-10 max-w-7xl mx-auto px-6 py-8">
            <div className="grid grid-cols-12 gap-6">
              {/* Left Sidebar */}
              <div className="col-span-3 space-y-4">
                <QuickActions 
                  onAnalyzeDemo={analyzeDemoWithToast} 
                  onUploadSuccess={handleUploadSuccess}
                />
            <PlanetVisualization />
            <CarbonFootprint />
            <NASAImagery />
          </div>
          
          {/* Center Content */}
          <div className="col-span-6 space-y-4">
            <TransitLightCurve 
              isAnalyzing={false} 
              uploadedImages={uploadedImages.length > 0 ? uploadedImages : undefined}
            />
            <AIPrediction confidence={confidence} />
            
            {/* Transit Exoplanet Animation */}
            <div className="bg-gradient-to-br from-nasa-900/30 to-blue-900/30 backdrop-blur-lg rounded-xl p-6 border border-nasa-500/30">
              <h3 className="text-lg font-semibold mb-4 text-nasa-400">Transit Method Visualization</h3>
              <div className="flex justify-center">
                <a 
                  href="https://github.com/yuliang419/Astronet-Vetting" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block hover:opacity-80 transition-opacity cursor-pointer"
                  title="View source: Astronet-Vetting by yuliang419"
                >
                  <img 
                    src="/transit-exoplanet.gif" 
                    alt="Exoplanet Transit Animation" 
                    className="w-full h-auto rounded-lg"
                  />
                </a>
              </div>
              <p className="text-sm text-gray-400 mt-3 text-center">
                Watch how an exoplanet passing in front of its star causes a dip in brightness
                <br />
                <span className="text-xs text-gray-500">Credit: <a href="https://github.com/yuliang419/Astronet-Vetting" target="_blank" rel="noopener noreferrer" className="text-nasa-400 hover:text-nasa-300 underline">Astronet-Vetting by yuliang419</a></span>
              </p>
            </div>
          </div>
          
          {/* Right Sidebar */}
          <div className="col-span-3 space-y-4">
            <TodayStats />
            <ModelPerformance />
            <ModelSettings />
            <NewsPanel />
            <FactsCarousel
              currentIndex={factsCarousel.currentIndex}
              onPrevious={factsCarousel.previous}
              onNext={factsCarousel.next}
            />
            <ActionButtons onShare={handleShare} />
          </div>
        </div>
      </main>
      
      <Footer />
      
      {/* Modals */}
      <HelpModal isOpen={helpModal.isOpen} onClose={helpModal.close} />
      <ReferencesModal isOpen={referencesModal.isOpen} onClose={referencesModal.close} />
      <AboutUsModal isOpen={aboutModal.isOpen} onClose={aboutModal.close} />
      <ShareModal isOpen={shareModal.isOpen} onClose={shareModal.close} />
      
      {/* AI Chatbot */}
      <SpaceChatbot />
          </div>
        )}
      </DashboardContentWrapper>
    </ToastProvider>
  );
};

export default ExoplanetHunterApp;
