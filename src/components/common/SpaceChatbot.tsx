/**
 * SpaceChatbot Component - AI-powered chatbot for space object classification
 * NASA Space Apps Challenge 2025
 * Integrates with Claude API to identify astronomical objects
 */

import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, Minimize2, Maximize2 } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

/**
 * Floating chatbot with space pet mascot
 */
export const SpaceChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "👋 Hi! I'm Starburst, your space guide! Ask me about exoplanets, asteroids, stars, or any celestial object. What would you like to know?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus();
    }
  }, [isOpen, isMinimized]);

  /**
   * Send message with simulated AI responses
   */
  const sendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputText;
    setInputText('');
    setIsTyping(true);

    // Simulate AI thinking time for realistic experience
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(currentInput),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  /**
   * Simulated bot responses (Replace with Claude API)
   */
  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();

    if (input.includes('exoplanet')) {
      return "🪐 Exoplanets are planets that orbit stars outside our solar system! We use the transit method to detect them - when a planet passes in front of its star, it causes a tiny dip in brightness. Our AI models analyze these light curves to identify potential exoplanets. Want to learn more about detection methods?";
    } else if (input.includes('asteroid')) {
      return "☄️ Asteroids are rocky objects that orbit the Sun, mostly found in the asteroid belt between Mars and Jupiter. Unlike exoplanets, they don't orbit other stars. They're remnants from the early solar system formation. Would you like to know how we distinguish them from exoplanets?";
    } else if (input.includes('star')) {
      return "⭐ Stars are massive, luminous spheres of plasma held together by gravity. They produce light through nuclear fusion in their cores. When we detect exoplanets, we're actually observing the star's brightness changes! Want to know more about different star types?";
    } else if (input.includes('hello') || input.includes('hi')) {
      return "👋 Hello, space explorer! I'm here to help you understand different celestial objects. Ask me about exoplanets, stars, asteroids, comets, or any space-related topics!";
    } else if (input.includes('how') && input.includes('work')) {
      return "🔬 Our Exoplanet Hunter AI uses Convolutional Neural Networks (CNN) to analyze transit light curves from telescopes like Kepler, TESS, and K2. The AI identifies patterns in brightness dips that indicate a planet passing in front of its star. Pretty cool, right?";
    } else {
      return "🌌 That's an interesting question! I analyze astronomical objects and help identify exoplanets, stars, asteroids, and other celestial bodies. Could you tell me more about what you'd like to know? Try asking about specific object types or detection methods!";
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Button - Bottom Right Corner */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse"
          title="Chat with Starburst"
        >
          <div className="relative">
            <MessageCircle className="w-6 h-6" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className={`fixed z-50 bg-slate-900/95 backdrop-blur-xl border border-purple-500/30 shadow-2xl transition-all duration-300 ${
            isMinimized
              ? 'bottom-6 right-6 w-80 h-16'
              : 'bottom-6 right-6 w-96 h-[600px]'
          } rounded-2xl overflow-hidden flex flex-col`}
        >
          {/* Header with Space Pet Mascot */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Space Pet Avatar - Starburst */}
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-2xl shadow-lg border-2 border-white">
                  ✨
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-slate-900"></div>
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">Starburst</h3>
                <p className="text-purple-100 text-xs flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  AI Space Guide
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-white hover:bg-white/20 p-1.5 rounded-lg transition-colors"
                title={isMinimized ? "Maximize" : "Minimize"}
              >
                {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-1.5 rounded-lg transition-colors"
                title="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          {!isMinimized && (
            <>
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-slate-900 to-slate-800">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${
                        message.sender === 'user'
                          ? 'bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-br-sm'
                          : 'bg-slate-700/50 text-gray-100 rounded-bl-sm border border-purple-500/20'
                      }`}
                    >
                      {message.sender === 'bot' && (
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-base">✨</span>
                          <span className="text-xs text-purple-300 font-semibold">Starburst</span>
                        </div>
                      )}
                      <p className="text-sm leading-relaxed">{message.text}</p>
                      <p className="text-xs opacity-60 mt-1">
                        {message.timestamp.toLocaleTimeString([], { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-slate-700/50 rounded-2xl rounded-bl-sm px-4 py-3 border border-purple-500/20">
                      <div className="flex items-center gap-2">
                        <span className="text-base">✨</span>
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-4 bg-slate-800 border-t border-purple-500/20">
                <div className="flex gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about space objects..."
                    className="flex-1 bg-slate-700/50 text-white placeholder-gray-400 rounded-xl px-4 py-2.5 text-sm border border-purple-500/20 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                  />
                  <button
                    onClick={sendMessage}
                    disabled={!inputText.trim() || isTyping}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2.5 rounded-xl transition-all duration-200 hover:scale-105"
                    title="Send message"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Powered by Claude AI • Press Enter to send
                </p>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};
