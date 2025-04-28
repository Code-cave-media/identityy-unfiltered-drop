import React, { useEffect, useState } from 'react';

const LoadingScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      // Wait for the exit animation to complete before removing from DOM
      setTimeout(() => {
        setIsVisible(false);
      }, 500); // Match this with the animation duration
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 bg-identityy-background z-50 flex items-center justify-center transition-all duration-500 ${
      isExiting ? 'opacity-0 translate-y-[-100%]' : 'opacity-100 translate-y-0'
    }`}>
      <div className="relative w-32 h-32 animate-ease-in flex flex-col items-center">
        {/* Hanger Animation */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-identityy-text rounded-full animate-spin-slow"></div>
        </div>
        
        {/* Clothing Item Animation */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-32 bg-identityy-text/10 rounded-lg transform animate-pulse-slow">
            <div className="w-full h-8 bg-identityy-text/20 rounded-t-lg"></div>
            <div className="w-16 h-16 bg-identityy-text/20 rounded-full mx-auto mt-4"></div>
          </div>
        </div>

        {/* Brand Text */}
        <div className="absolute bottom-[-40px] w-full text-center">
          <span className="text-identityy-text/80 font-sans text-2xl font-light tracking-wider animate-ease-in-delay inline-block">
            IDENTITYY
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen; 