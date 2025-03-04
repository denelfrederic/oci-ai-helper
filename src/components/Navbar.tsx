
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <Link 
          to="/" 
          className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
        >
          <img 
            src="/lovable-uploads/2fb6a251-e85e-46a0-8ab8-5436f1654580.png" 
            alt="OneClick Invest Logo" 
            className="h-10" 
          />
        </Link>
        
        <div className="flex items-center space-x-1 md:space-x-4">
          <Link 
            to="/" 
            className="px-3 py-2 text-sm font-medium text-[#0f172a]/80 hover:text-[#0f172a] transition-colors"
          >
            Accueil
          </Link>
          <Link 
            to="/chat" 
            className="px-3 py-2 text-sm font-medium text-[#0f172a]/80 hover:text-[#0f172a] transition-colors"
          >
            Chat
          </Link>
          <Link 
            to="/about" 
            className="px-3 py-2 text-sm font-medium text-[#0f172a]/80 hover:text-[#0f172a] transition-colors"
          >
            À propos
          </Link>
          <Link
            to="/chat"
            className="ml-2 px-4 py-2 text-sm font-medium bg-[#2563eb] text-white rounded-full hover:bg-[#2563eb]/90 transition-colors"
          >
            Commencer
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
