'use client';

import { useEffect } from 'react';

export default function TikTokRedirect() {
  useEffect(() => {
    // Force opening in native browser instead of TikTok's in-app browser
    const forceExternalBrowser = () => {
      // Method 1: Try to open in new window/tab
      const newWindow = window.open('https://apps.apple.com/app/id6744234737', '_blank');
      
      // Method 2: If new window is blocked, try to detect in-app browser and redirect
      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        // Check if we're in TikTok's in-app browser
        const isInAppBrowser = 
          navigator.userAgent.includes('TikTok') ||
          navigator.userAgent.includes('tiktok') ||
          document.referrer.includes('tiktok.com') ||
          window.location.href.includes('tiktok.com');
        
        if (isInAppBrowser) {
          // Try to force external browser by using a different approach
          window.location.href = 'https://apps.apple.com/app/id6744234737';
          
          // Fallback: Show instructions to user
          setTimeout(() => {
            alert('Please open this link in your browser by copying and pasting the URL: https://apps.apple.com/app/id6744234737');
          }, 2000);
        } else {
          // Not in TikTok browser, proceed normally
          window.location.href = 'https://apps.apple.com/app/id6744234737';
        }
      }
    };

    // Small delay to allow analytics to fire
    const timer = setTimeout(forceExternalBrowser, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Opening in your browser...</p>
    </div>
  );
}
