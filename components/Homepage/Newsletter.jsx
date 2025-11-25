'use client'

import { useState } from 'react';

export default function NewsletterComponent() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    if (!email) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }, 1000);
  };

  return (
    <div className="w-[90%] max-w-[1100px] mx-auto px-3 py-8 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16" 
           style={{ backgroundColor: '#eb7c1f' }}>
        
        {!isSubmitted ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
                Subscribe to our Newsletter
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
                Subscribe to our newsletter and be the first one get insights, updates on new books, packages and sales.
              </p>
            </div>

            {/* Right Form */}
            <div className="space-y-3 sm:space-y-4">
              
              <div className="flex flex-col xs:flex-row gap-2 sm:gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                  placeholder="Enter your email"
                  className="flex-1 px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-700 bg-white/90 backdrop-blur-sm rounded-full focus:outline-none focus:ring-2 focus:ring-white/50 placeholder:text-gray-500 min-w-0"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)' }}
                />
                <button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="px-6 bg-black cursor-pointer sm:px-8 py-3 sm:py-4 text-sm sm:text-base text-white font-semibold rounded-full transition-all duration-300 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap shadow-lg hover:shadow-xl"
                  style={{ 
                    transform: isLoading ? 'scale(0.98)' : 'scale(1)'
                  }}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span className="hidden xs:inline">Subscribing...</span>
                    </span>
                  ) : (
                    'Subscribe'
                  )}
                </button>
              </div>
              
              <p className="text-xs sm:text-sm text-white/80">
                By subscribing you agree to our{' '}
                <a href="#" className="underline hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        ) : (
          <div className="text-center py-8 sm:py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-6 rounded-full bg-white/20 backdrop-blur-sm">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">
              Successfully Subscribed!
            </h3>
            <p className="text-sm sm:text-base text-white/90">
              Thank you for subscribing to our newsletter. Check your inbox for updates!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}