'use client';

export default function TikTokRedirect() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-md bg-white rounded-xl shadow-xl p-8 border">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Want to find clean restrooms anywhere?
          </h1>
          
          <p className="text-gray-600 text-lg mb-6">
            Copy the link below and open it in your browser to download LavPass
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <p className="text-sm text-gray-600 mb-2">Copy this link:</p>
          <div className="bg-white p-4 rounded border-2 border-blue-200">
            <code className="text-blue-600 text-xl font-mono font-bold">LavPass.app</code>
          </div>
        </div>

        <button 
          onClick={() => {
            navigator.clipboard.writeText('LavPass.app');
            alert('Link copied! Now open your browser and paste it.');
          }}
          className="w-full bg-blue-500 text-white py-4 px-6 rounded-lg hover:bg-blue-600 transition-colors font-semibold text-lg shadow-lg"
        >
          Copy Link
        </button>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Then open Safari, Chrome, or your preferred browser and paste the link
          </p>
        </div>
      </div>
    </div>
  );
}
