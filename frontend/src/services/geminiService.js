// src/services/geminiService.js

const API_URL = 'https://api.gemini.example.com/v1/chat'; // replace with actual Gemini API endpoint

export async function sendChatMessage(message) {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error('Gemini API key not found');
  }

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      prompt: message,
      // add other Gemini API parameters if needed
    })
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to call Gemini API');
  }

  const data = await response.json();
  return data; // adapt according to Gemini API response structure
}
