'use client';

import { useState } from 'react';

export default function TikTokRedirect() {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('https://LavPass.app');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-xl p-8 border">
        {/* Emojis at the top */}
        <div className="flex justify-center text-5xl mb-6">
          <span className="mx-2">💩</span>
          <span className="mx-2">🚽</span>
          <span className="mx-2">🧻</span>
        </div>

        {/* Header */}
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-3">
          Ready to find clean restrooms near you?
        </h1>

        {/* Subtext */}
        <p className="text-gray-600 text-center mb-6">
          Copy the link below and paste it in your browser to download LavPass on iPhone
        </p>

        {/* Link */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="bg-white p-4 rounded border-2 border-blue-200 text-center">
            <code className="text-blue-600 text-lg font-mono font-bold">https://LavPass.app</code>
          </div>
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className={`w-full py-4 px-6 rounded-lg font-semibold text-lg shadow-lg transition-all duration-200 transform
            ${isCopied
              ? 'bg-green-500 text-white scale-95 shadow-md'
              : 'bg-blue-500 text-white hover:bg-blue-600 hover:scale-105 active:scale-95 active:shadow-md'
            }`}
        >
          {isCopied ? (
            <div className="flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Link Copied!
            </div>
          ) : (
            'Copy Link'
          )}
        </button>
      </div>
    </div>
  );
}
