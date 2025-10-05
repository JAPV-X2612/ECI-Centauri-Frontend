/**
 * Claude AI API Integration
 * NASA Space Apps Challenge 2025
 * 
 * This service handles communication with Claude API for space object classification
 */

// Environment variable for Claude API key
const CLAUDE_API_KEY = process.env.REACT_APP_CLAUDE_API_KEY || '';
const CLAUDE_API_URL = 'https://api.anthropic.com/v1/messages';

interface ClaudeMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface ClaudeResponse {
  id: string;
  type: string;
  role: string;
  content: Array<{
    type: string;
    text: string;
  }>;
  model: string;
  stop_reason: string;
}

/**
 * Send message to Claude AI
 */
export async function sendToClaudeAPI(
  userMessage: string,
  conversationHistory: ClaudeMessage[] = []
): Promise<string> {
  try {
    if (!CLAUDE_API_KEY) {
      console.warn('Claude API key not configured');
      return 'API key not configured. Please add REACT_APP_CLAUDE_API_KEY to your .env file.';
    }

    const messages: ClaudeMessage[] = [
      ...conversationHistory,
      {
        role: 'user',
        content: userMessage
      }
    ];

    const response = await fetch(CLAUDE_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': CLAUDE_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-sonnet-20240229',
        max_tokens: 1024,
        system: `You are Starburst, a friendly AI space guide for the Exoplanet Hunter AI application. 
Your role is to help users understand different celestial objects and exoplanet detection.

Key topics you should help with:
- Exoplanets: Planets orbiting stars outside our solar system
- Transit method: Detection technique using brightness dips
- Asteroids: Rocky objects in our solar system
- Stars: Luminous plasma spheres producing light
- Comets: Icy bodies with distinctive tails
- NASA missions: Kepler, TESS, K2, JWST
- Machine Learning: How AI detects exoplanets using CNN models

When a user describes an observation or light curve pattern, help them identify what type of celestial object it might be:
- If it's NOT an exoplanet, clearly state what it could be (asteroid, star, comet, etc.)
- Explain the key differences in detection patterns
- Be encouraging and educational
- Use emojis occasionally to make responses friendly

Keep responses concise (2-3 sentences) but informative.`,
        messages: messages
      })
    });

    if (!response.ok) {
      throw new Error(`Claude API error: ${response.statusText}`);
    }

    const data: ClaudeResponse = await response.json();
    return data.content[0]?.text || 'Sorry, I could not process that request.';

  } catch (error) {
    console.error('Error calling Claude API:', error);
    return 'Sorry, I encountered an error. Please try again later.';
  }
}

/**
 * Classify space object using Claude AI
 */
export async function classifySpaceObject(
  description: string,
  lightCurveData?: number[]
): Promise<{
  objectType: string;
  confidence: string;
  explanation: string;
}> {
  const prompt = lightCurveData
    ? `Based on this light curve data pattern: ${lightCurveData.slice(0, 10).join(', ')}... and description: "${description}", what type of celestial object is this? Is it an exoplanet, asteroid, star, or something else?`
    : `Based on this description: "${description}", what type of celestial object is this?`;

  const response = await sendToClaudeAPI(prompt);

  // Parse Claude's response (simplified)
  return {
    objectType: 'Exoplanet', // Parse from response
    confidence: 'High', // Parse from response
    explanation: response
  };
}
