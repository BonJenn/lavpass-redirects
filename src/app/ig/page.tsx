// src/app/instagram/page.tsx
'use client';

import { useEffect } from 'react';

export default function InstagramRedirect() {
  useEffect(() => {
    // Small delay to allow GA to fire
    const timer = setTimeout(() => {
      window.location.href = 'https://apps.apple.com/app/id6744234737';
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Redirecting to App Store...</p>
    </div>
  );
}