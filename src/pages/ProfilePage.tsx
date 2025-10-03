/**
 * ProfilePage Component - User profile with history, achievements, and activity
 * NASA Space Apps Challenge 2025
 */

import React, { useState } from 'react';
import {
  Database, Calendar, Award, Zap, Activity, Search, Filter, Download,
  Star, Trash2, Edit, X, Upload, Save
} from 'lucide-react';
import { StarsBg } from '../components/common';
import type { UserData, AnalysisHistoryItem, Achievement as AchievementType, ActivityItem, ProfileTab } from '../types';

interface ProfilePageProps {
  userData: UserData;
  analysisHistory: AnalysisHistoryItem[];
  achievements: AchievementType[];
  recentActivity: ActivityItem[];
  onBackToMain: () => void;
  onSignOut: () => void;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({
  userData,
  analysisHistory,
  achievements,
  recentActivity,
  onBackToMain,
  onSignOut
}) => {
  const [activeTab, setActiveTab] = useState<ProfileTab>('history');
  const [showEditProfile, setShowEditProfile] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-nasa-900 to-slate-900">
      <StarsBg />
      <header className="relative z-10 border-b border-nasa-500/30 bg-slate-900/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div onClick={onBackToMain} className="w-10 h-10 bg-gradient-to-br from-nasa-500 to-blue-500 rounded-lg flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
                <Database className="w-6 h-6" />
              </div>
              <h1 className="text-xl font-bold text-white">Exoplanet Hunter AI - My Profile</h1>
            </div>
            <div className="flex items-center gap-4">
              <button onClick={onBackToMain} className="px-4 py-2 bg-slate-700/50 hover:bg-slate-700 rounded-lg text-sm transition-colors text-white">Back to Main</button>
              <button onClick={onSignOut} className="px-4 py-2 bg-slate-700/50 hover:bg-slate-700 rounded-lg text-sm transition-colors text-white">Sign Out</button>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Profile Header Card */}
        <div className="bg-gradient-to-r from-nasa-900/40 to-blue-900/40 backdrop-blur-lg rounded-2xl p-8 border border-nasa-500/30 mb-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 bg-gradient-to-br from-nasa-500 to-blue-500 rounded-2xl flex items-center justify-center text-3xl font-bold shadow-xl">{userData.photo}</div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">{userData.name}</h2>
                <p className="text-gray-300 mb-3">{userData.email}</p>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />Joined {userData.joinDate}</span>
                  <span className="flex items-center gap-1"><Zap className="w-4 h-4 text-yellow-400" />{userData.streak} day streak</span>
                  <span className="flex items-center gap-1"><Award className="w-4 h-4 text-nasa-400" />Global Rank #{userData.rank}</span>
                </div>
              </div>
            </div>
            <button onClick={() => setShowEditProfile(true)} className="px-4 py-2 bg-slate-700/50 hover:bg-slate-700 rounded-lg text-sm transition-colors flex items-center gap-2 text-white">
              <Edit className="w-4 h-4 text-white" />
              Edit Profile
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-4 mt-8">
            <div className="bg-slate-800/50 rounded-xl p-4 border border-nasa-500/20">
              <div className="text-gray-400 text-sm mb-1">Total Analyses</div>
              <div className="text-3xl font-bold text-white">{userData.totalAnalyses}</div>
              <div className="text-green-400 text-xs mt-1">↑ 12 this week</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 border border-nasa-500/20">
              <div className="text-gray-400 text-sm mb-1">Confirmed Planets</div>
              <div className="text-3xl font-bold text-green-400">{userData.confirmedPlanets}</div>
              <div className="text-green-400 text-xs mt-1">↑ 3 this week</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 border border-nasa-500/20">
              <div className="text-gray-400 text-sm mb-1">Candidates Found</div>
              <div className="text-3xl font-bold text-yellow-400">{userData.candidatesFound}</div>
              <div className="text-yellow-400 text-xs mt-1">↑ 2 pending review</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 border border-nasa-500/20">
              <div className="text-gray-400 text-sm mb-1">Accuracy Rate</div>
              <div className="text-3xl font-bold text-nasa-400">{userData.accuracy}%</div>
              <div className="text-green-400 text-xs mt-1">↑ 2.3% improvement</div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Left Column - History and Starred */}
          <div className="col-span-8">
            <div className="flex gap-2 mb-4">
              {(['history', 'starred'] as ProfileTab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all capitalize ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-nasa-600 to-blue-600 text-white'
                      : 'bg-slate-800/50 text-gray-400 hover:bg-slate-700/50'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* History Tab */}
            {activeTab === 'history' && (
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl border border-nasa-500/20">
                <div className="p-4 border-b border-nasa-500/20">
                  <div className="flex gap-3">
                    <div className="flex-1 relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input type="text" className="w-full bg-slate-700/50 border border-nasa-500/20 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-nasa-500" placeholder="Search analyses..." />
                    </div>
                    <button className="px-4 py-2 bg-slate-700/50 hover:bg-slate-700 rounded-lg text-sm flex items-center gap-2 transition-colors text-white"><Filter className="w-4 h-4 text-white" />Filter</button>
                    <button className="px-4 py-2 bg-nasa-600 hover:bg-nasa-700 rounded-lg text-sm flex items-center gap-2 transition-colors text-white"><Download className="w-4 h-4 text-white" />Export</button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-slate-700/30">
                      <tr className="text-left text-xs text-gray-400">
                        <th className="p-3 font-semibold">ID</th>
                        <th className="p-3 font-semibold">Date</th>
                        <th className="p-3 font-semibold">Result</th>
                        <th className="p-3 font-semibold">Type</th>
                        <th className="p-3 font-semibold">Confidence</th>
                        <th className="p-3 font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      {analysisHistory.map((item, i) => (
                        <tr key={item.id} className="border-t border-nasa-500/10 hover:bg-slate-700/20 transition-colors">
                          <td className="p-3">
                            <div className="flex items-center gap-2">
                              {item.starred && <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />}
                              <span className="font-mono text-xs text-gray-300">{item.id}</span>
                            </div>
                          </td>
                          <td className="p-3 text-gray-400">{item.date}</td>
                          <td className="p-3">
                            <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                              item.result === 'Confirmed Exoplanet' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                              item.result === 'Candidate' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                              'bg-red-500/20 text-red-400 border border-red-500/30'
                            }`}>{item.result}</span>
                          </td>
                          <td className="p-3 text-gray-300">{item.type}</td>
                          <td className="p-3">
                            <div className="flex items-center gap-2">
                              <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden max-w-[60px]">
                                <div className={`h-full rounded-full ${item.confidence >= 90 ? 'bg-green-500' : item.confidence >= 80 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{ width: `${item.confidence}%` }}></div>
                              </div>
                              <span className="text-xs text-gray-400">{item.confidence}%</span>
                            </div>
                          </td>
                          <td className="p-3">
                            <div className="flex items-center gap-2">
                              <button className="p-1 hover:bg-yellow-500/20 rounded transition-colors" title="Star">
                                <Star className={`w-4 h-4 ${item.starred ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}`} />
                              </button>
                              <button className="p-1 hover:bg-slate-600 rounded transition-colors" title="Download"><Download className="w-4 h-4 text-gray-400" /></button>
                              <button className="p-1 hover:bg-red-500/20 rounded transition-colors" title="Delete"><Trash2 className="w-4 h-4 text-gray-400 hover:text-red-400" /></button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="p-4 border-t border-nasa-500/20 flex items-center justify-between text-sm">
                  <span className="text-gray-400">Showing 1-{analysisHistory.length} of {userData.totalAnalyses} analyses</span>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 bg-slate-700/50 hover:bg-slate-700 rounded transition-colors text-white">Previous</button>
                    <button className="px-3 py-1 bg-nasa-600 rounded text-white">1</button>
                    <button className="px-3 py-1 bg-slate-700/50 hover:bg-slate-700 rounded transition-colors text-white">2</button>
                    <button className="px-3 py-1 bg-slate-700/50 hover:bg-slate-700 rounded transition-colors text-white">3</button>
                    <button className="px-3 py-1 bg-slate-700/50 hover:bg-slate-700 rounded transition-colors text-white">Next</button>
                  </div>
                </div>
              </div>
            )}

            {/* Starred Tab */}
            {activeTab === 'starred' && (
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl border border-nasa-500/20">
                <div className="p-4 border-b border-nasa-500/20">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    Starred Discoveries
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-slate-700/30">
                      <tr className="text-left text-xs text-gray-400">
                        <th className="p-3 font-semibold">ID</th>
                        <th className="p-3 font-semibold">Date</th>
                        <th className="p-3 font-semibold">Result</th>
                        <th className="p-3 font-semibold">Type</th>
                        <th className="p-3 font-semibold">Confidence</th>
                        <th className="p-3 font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      {analysisHistory.filter(a => a.starred).map((item) => (
                        <tr key={item.id} className="border-t border-nasa-500/10 hover:bg-slate-700/20 transition-colors">
                          <td className="p-3">
                            <div className="flex items-center gap-2">
                              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                              <span className="font-mono text-xs text-gray-300">{item.id}</span>
                            </div>
                          </td>
                          <td className="p-3 text-gray-400">{item.date}</td>
                          <td className="p-3">
                            <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                              item.result === 'Confirmed Exoplanet' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                            }`}>{item.result}</span>
                          </td>
                          <td className="p-3 text-gray-300">{item.type}</td>
                          <td className="p-3">
                            <div className="flex items-center gap-2">
                              <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden max-w-[60px]">
                                <div className="h-full bg-green-500 rounded-full" style={{ width: `${item.confidence}%` }}></div>
                              </div>
                              <span className="text-xs text-gray-400">{item.confidence}%</span>
                            </div>
                          </td>
                          <td className="p-3">
                            <div className="flex items-center gap-2">
                              <button className="p-1 hover:bg-slate-600 rounded transition-colors" title="Download"><Download className="w-4 h-4 text-gray-400" /></button>
                              <button className="p-1 hover:bg-red-500/20 rounded transition-colors" title="Delete"><Trash2 className="w-4 h-4 text-gray-400 hover:text-red-400" /></button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Achievements and Activity */}
          <div className="col-span-4">
            {/* Achievements */}
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-nasa-500/20 mb-4">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-400" />
                Achievements
              </h3>
              <div className="space-y-3">
                {achievements.map((achievement, i) => (
                  <div key={i} className={`p-3 rounded-lg border transition-all ${achievement.unlocked ? 'bg-nasa-900/20 border-nasa-500/30 hover:bg-nasa-900/30' : 'bg-slate-700/20 border-slate-600/30 opacity-50'}`}>
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">{achievement.icon}</div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm text-white">{achievement.name}</div>
                        <div className="text-xs text-gray-400 mt-1">{achievement.description}</div>
                      </div>
                      {achievement.unlocked && <div className="text-green-400">✓</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-gradient-to-br from-nasa-900/30 to-blue-900/30 backdrop-blur-lg rounded-xl p-6 border border-nasa-500/30">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Activity className="w-5 h-5 text-green-400" />
                Recent Activity
              </h3>
              <div className="space-y-3 text-sm">
                {recentActivity.map((activity, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className={`w-2 h-2 rounded-full mt-2 ${activity.type === 'success' ? 'bg-green-400' : activity.type === 'warning' ? 'bg-yellow-400' : 'bg-blue-400'}`}></div>
                    <div className="flex-1">
                      <div className="text-gray-300">{activity.action}</div>
                      <div className="text-xs text-gray-500">{activity.id} • {activity.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Edit Profile Modal */}
      {showEditProfile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/70 backdrop-blur-sm">
          <div className="bg-slate-800/95 backdrop-blur-xl rounded-2xl p-8 border border-nasa-500/30 max-w-md w-full">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Edit Profile</h2>
              <button onClick={() => setShowEditProfile(false)} className="text-gray-400 hover:text-white"><X className="w-6 h-6" /></button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-300 mb-2 block">Profile Photo</label>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-nasa-500 to-blue-500 rounded-full flex items-center justify-center text-2xl font-bold">{userData.photo}</div>
                  <button className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-700 border border-nasa-500/20 rounded-lg text-sm transition-colors text-white">
                    <Upload className="w-4 h-4 text-white" />
                    Change Photo
                  </button>
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-300 mb-2 block">Full Name</label>
                <input type="text" defaultValue={userData.name} className="w-full bg-slate-700/50 border border-nasa-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-nasa-500" />
              </div>
              <div>
                <label className="text-sm text-gray-300 mb-2 block">Email Address</label>
                <input type="email" defaultValue={userData.email} disabled className="w-full bg-slate-700/30 border border-nasa-500/20 rounded-lg px-4 py-3 text-gray-400 cursor-not-allowed" />
                <p className="text-xs text-gray-500 mt-1">Email cannot be changed</p>
              </div>
              <div>
                <label className="text-sm text-gray-300 mb-2 block">New Password (Optional)</label>
                <input type="password" placeholder="Leave blank to keep current password" className="w-full bg-slate-700/50 border border-nasa-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-nasa-500" />
              </div>
              <div className="flex gap-3 pt-4">
                <button onClick={() => setShowEditProfile(false)} className="flex-1 bg-slate-700/50 hover:bg-slate-700 rounded-lg py-3 font-semibold transition-all">Cancel</button>
                <button onClick={() => setShowEditProfile(false)} className="flex-1 bg-gradient-to-r from-nasa-600 to-blue-600 hover:from-nasa-700 hover:to-blue-700 rounded-lg py-3 font-semibold transition-all flex items-center justify-center gap-2">
                  <Save className="w-4 h-4" />
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
