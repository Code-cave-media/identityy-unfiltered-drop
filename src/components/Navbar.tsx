
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
        isScrolled ? "bg-identityy-black py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-2xl md:text-3xl font-display text-white uppercase tracking-tighter">
            IDENTITYY
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {["about", "shop", "resell", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-white hover:text-identityy-offwhite uppercase text-sm font-bold tracking-widest link-underline"
            >
              {item}
            </a>
          ))}
          <Button className="bg-white hover:bg-identityy-offwhite text-identityy-black rounded-none font-bold">
            SHOP DROP 001
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <span className="text-2xl">✕</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-identityy-black">
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-6">
            {["about", "shop", "resell", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-white hover:text-identityy-offwhite uppercase text-lg font-bold tracking-widest"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button className="bg-white hover:bg-identityy-offwhite text-identityy-black rounded-none font-bold w-full mt-4">
              SHOP DROP 001
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
