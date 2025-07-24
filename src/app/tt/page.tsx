'use client';

export default function TikTokRedirect() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="max-w-md bg-white rounded-lg shadow-lg p-6 border">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Open in Browser</h1>
          <p className="text-gray-600">TikTok is blocking the direct link. Please follow these steps:</p>
        </div>

        <div className="space-y-4 mb-6">
          <div className="flex items-start">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">1</div>
            <div>
              <p className="font-semibold text-gray-800">Tap the three dots (⋯)</p>
              <p className="text-sm text-gray-600">Look for the three dots in the top right corner of your screen</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">2</div>
            <div>
              <p className="font-semibold text-gray-800">Select &ldquo;Open in Browser&rdquo;</p>
              <p className="text-sm text-gray-600">This will open the link in your default browser</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">3</div>
            <div>
              <p className="font-semibold text-gray-800">Download the app</p>
              <p className="text-sm text-gray-600">The App Store will open automatically in your browser</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg p-4 mb-4">
          <p className="text-sm text-gray-700 mb-2">Or copy this link and paste it in your browser:</p>
          <div className="bg-white p-3 rounded border">
            <code className="text-blue-600 break-all text-sm">https://LavPass.app</code>
          </div>
        </div>

        <button 
          onClick={() => {
            navigator.clipboard.writeText('https://apps.apple.com/app/id6744234737');
            alert('Link copied to clipboard!');
          }}
          className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors font-medium"
        >
          Copy Link to Clipboard
        </button>
      </div>
    </div>
  );
}
