import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-identityy-background/90 backdrop-blur-sm py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-2xl md:text-3xl font-display text-identityy-text uppercase tracking-tighter">
            IDENTITYY
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {["about", "shop", "resell", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-identityy-text hover:text-identityy-silver uppercase text-sm font-bold tracking-widest link-underline"
            >
              {item}
            </a>
          ))}
          <Button className="bg-identityy-blue hover:bg-identityy-steel text-identityy-text rounded-none font-bold">
            SHOP DROP 001
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-identityy-text relative w-6 h-6"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <span className={`block w-6 h-0.5 bg-identityy-text transform transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
            }`} />
            <span className={`block w-6 h-0.5 bg-identityy-text transform transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`} />
            <span className={`block w-6 h-0.5 bg-identityy-text transform transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'
            }`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-identityy-background transform transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="container mx-auto px-4 py-6 flex flex-col space-y-6">
          {["about", "shop", "resell", "contact"].map((item, index) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-identityy-text hover:text-identityy-silver uppercase text-lg font-bold tracking-widest transform transition-all duration-300 hover:translate-x-2"
              style={{ 
                transitionDelay: `${index * 50}ms`,
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)'
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <Button 
            className="bg-identityy-blue hover:bg-identityy-steel text-identityy-text rounded-none font-bold w-full mt-4 transform transition-all duration-300 hover:scale-105"
            style={{ 
              transitionDelay: '200ms',
              opacity: isMobileMenuOpen ? 1 : 0,
              transform: isMobileMenuOpen ? 'scale(1)' : 'scale(0.95)'
            }}
          >
            SHOP DROP 001
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
