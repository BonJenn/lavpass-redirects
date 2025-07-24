'use client';

import { useEffect, useState } from 'react';

export default function TikTokRedirect() {
  const [showInstructions, setShowInstructions] = useState(false);

  useEffect(() => {
    const handleTikTokRedirect = () => {
      // Check if we're in TikTok's in-app browser
      const isInAppBrowser = 
        navigator.userAgent.includes('TikTok') ||
        navigator.userAgent.includes('tiktok') ||
        document.referrer.includes('tiktok.com') ||
        window.location.href.includes('tiktok.com') ||
        window.navigator.standalone === true;

      if (isInAppBrowser) {
        // Strategy 1: Try to open in new window with different approaches
        const appStoreUrl = 'https://apps.apple.com/app/id6744234737';
        
        // Try multiple opening strategies
        const strategies = [
          () => window.open(appStoreUrl, '_blank', 'noopener,noreferrer'),
          () => window.open(appStoreUrl, '_system'),
          () => window.open(appStoreUrl, '_top'),
          () => {
            const link = document.createElement('a');
            link.href = appStoreUrl;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          },
          () => {
            // Try using location.assign
            window.location.assign(appStoreUrl);
          }
        ];

        // Execute strategies with delays
        strategies.forEach((strategy, index) => {
          setTimeout(() => {
            try {
              strategy();
            } catch (e) {
              console.log(`Strategy ${index + 1} failed:`, e);
            }
          }, index * 500);
        });

        // Show instructions after a delay
        setTimeout(() => {
          setShowInstructions(true);
        }, 3000);

      } else {
        // Not in TikTok browser, proceed normally
        window.location.href = 'https://apps.apple.com/app/id6744234737';
      }
    };

    const timer = setTimeout(handleTikTokRedirect, 100);
    return () => clearTimeout(timer);
  }, []);

  if (showInstructions) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
        <div className="max-w-md bg-white rounded-lg shadow-lg p-6 border">
          <h2 className="text-xl font-bold mb-4">Open in Browser</h2>
          <p className="mb-4 text-gray-600">
            TikTok is blocking the direct link. Please follow these steps:
          </p>
          <ol className="text-left mb-4 space-y-2">
            <li className="flex items-start">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2 mt-0.5">1</span>
              <span>Tap the three dots (⋯) in the top right corner</span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2 mt-0.5">2</span>
              <span>Select &ldquo;Open in Browser&rdquo;</span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2 mt-0.5">3</span>
              <span>The App Store will open automatically</span>
            </li>
          </ol>
          <div className="bg-gray-100 p-3 rounded text-sm">
            <p className="font-semibold mb-1">Or copy this link:</p>
            <code className="text-blue-600 break-all">https://apps.apple.com/app/id6744234737</code>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <p className="mb-2">Opening App Store...</p>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
      </div>
    </div>
  );
}
