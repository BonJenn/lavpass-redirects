'use client';

import { useEffect, useState } from 'react';

export default function TikTokRedirect() {
  const [showInstructions, setShowInstructions] = useState(false);
  const [attemptCount, setAttemptCount] = useState(0);

  useEffect(() => {
    const handleTikTokRedirect = () => {
      // Check if we're in TikTok's in-app browser or safety page
      const isInTikTokEnvironment = 
        navigator.userAgent.includes('TikTok') ||
        navigator.userAgent.includes('tiktok') ||
        document.referrer.includes('tiktok.com') ||
        window.location.href.includes('tiktok.com') ||
        window.location.href.includes('TikTokLinkSafety.us') ||
        document.referrer.includes('TikTokLinkSafety.us');

      if (isInTikTokEnvironment) {
        const appStoreUrl = 'https://apps.apple.com/app/id6744234737';
        
        // Try different strategies with increasing delays
        const strategies = [
          // Strategy 1: Direct location change
          () => {
            try {
              window.location.href = appStoreUrl;
            } catch (e) {
              console.log('Direct redirect failed:', e);
            }
          },
          // Strategy 2: Create and click a link
          () => {
            try {
              const link = document.createElement('a');
              link.href = appStoreUrl;
              link.target = '_blank';
              link.rel = 'noopener noreferrer';
              link.style.display = 'none';
              document.body.appendChild(link);
              link.click();
              setTimeout(() => document.body.removeChild(link), 1000);
            } catch (e) {
              console.log('Link creation failed:', e);
            }
          },
          // Strategy 3: Use window.open
          () => {
            try {
              const newWindow = window.open(appStoreUrl, '_blank');
              if (newWindow) {
                newWindow.focus();
              }
            } catch (e) {
              console.log('Window open failed:', e);
            }
          },
          // Strategy 4: Use location.replace
          () => {
            try {
              window.location.replace(appStoreUrl);
            } catch (e) {
              console.log('Location replace failed:', e);
            }
          }
        ];

        // Execute strategies with delays
        strategies.forEach((strategy, index) => {
          setTimeout(() => {
            strategy();
            setAttemptCount(prev => prev + 1);
          }, index * 1000 + 500);
        });

        // Show instructions after all strategies have been tried
        setTimeout(() => {
          setShowInstructions(true);
        }, 5000);

      } else {
        // Not in TikTok environment, proceed normally
        window.location.href = 'https://apps.apple.com/app/id6744234737';
      }
    };

    const timer = setTimeout(handleTikTokRedirect, 100);
    return () => clearTimeout(timer);
  }, []);

  if (showInstructions) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center bg-gray-50">
        <div className="max-w-md bg-white rounded-lg shadow-lg p-6 border">
          <div className="mb-4">
            <svg className="w-12 h-12 text-orange-500 mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <h2 className="text-xl font-bold mb-2">TikTok Blocked the Link</h2>
            <p className="text-gray-600 text-sm">
              TikTok&apos;s security is preventing the automatic redirect.
            </p>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <h3 className="font-semibold text-blue-800 mb-2">How to Download:</h3>
            <ol className="text-left space-y-2 text-sm">
              <li className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5 flex-shrink-0">1</span>
                <span>Copy this link: <code className="bg-blue-100 px-1 rounded text-xs">https://apps.apple.com/app/id6744234737</code></span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5 flex-shrink-0">2</span>
                <span>Open your browser (Safari, Chrome, etc.)</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5 flex-shrink-0">3</span>
                <span>Paste the link and press Enter</span>
              </li>
            </ol>
          </div>

          <div className="bg-gray-100 p-3 rounded text-sm">
            <p className="font-semibold mb-1">Direct App Store Link:</p>
            <div className="bg-white p-2 rounded border">
              <code className="text-blue-600 break-all text-xs">https://apps.apple.com/app/id6744234737</code>
            </div>
          </div>

          <button 
            onClick={() => {
              navigator.clipboard.writeText('https://apps.apple.com/app/id6744234737');
              alert('Link copied to clipboard!');
            }}
            className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
          >
            Copy Link
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <p className="text-lg font-medium mb-2">Opening App Store...</p>
        <p className="text-sm text-gray-500">Attempt {attemptCount + 1} of 4</p>
        {attemptCount > 0 && (
          <p className="text-xs text-orange-600 mt-2">
            If this doesn&apos;t work, we&apos;ll show you manual instructions
          </p>
        )}
      </div>
    </div>
  );
}
