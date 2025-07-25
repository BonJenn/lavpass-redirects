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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-2">
      <div className="max-w-md w-full bg-white rounded-xl shadow-xl p-6 border flex flex-col items-center justify-center">
        {/* Emojis at the top */}
        <div className="flex justify-center text-4xl mb-2">
          <span className="mx-1">💩</span>
          <span className="mx-1">🚽</span>
          <span className="mx-1">🧻</span>
        </div>

        {/* Header */}
        <h1 className="text-xl font-bold text-gray-800 text-center mb-2">
          Find Clean Restrooms Near You!
        </h1>

        {/* 3-Step Process */}
        <ol className="w-full mb-4 mt-2 space-y-2">
          <li className="flex items-center space-x-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold text-lg">1</span>
            <span className="flex items-center text-gray-700 font-medium">
              <span className="text-2xl mr-2">🔗</span>
              Copy the link below
            </span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold text-lg">2</span>
            <span className="flex items-center text-gray-700 font-medium">
              <span className="text-2xl mr-2">🌐</span>
              Open Safari
            </span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold text-lg">3</span>
            <span className="flex items-center text-gray-700 font-medium">
              <span className="text-2xl mr-2">⬇️</span>
              Download LavPass &amp; find clean restrooms!
            </span>
          </li>
        </ol>

        {/* Link */}
        <div className="bg-gray-50 rounded-lg p-3 mb-3 w-full">
          <div className="bg-white p-3 rounded border-2 border-blue-200 text-center">
            <code className="text-blue-600 text-base font-mono font-bold">https://LavPass.app</code>
          </div>
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className={`w-full py-3 px-6 rounded-lg font-semibold text-base shadow-lg transition-all duration-200 transform
            ${isCopied
              ? 'bg-green-500 text-white scale-95 shadow-md'
              : 'bg-blue-500 text-white hover:bg-blue-600 hover:scale-105 active:scale-95 active:shadow-md'
            }`}
          style={{ minHeight: '48px' }}
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
