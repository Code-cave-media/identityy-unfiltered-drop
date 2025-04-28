
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ShopSection from "../components/ShopSection";
import ResellerSection from "../components/ResellerSection";
import InstagramSection from "../components/InstagramSection";
import Footer from "../components/Footer";

const Index: React.FC = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ShopSection />
        <ResellerSection />
        <InstagramSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
