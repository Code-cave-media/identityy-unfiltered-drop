import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ShopSection from "../components/ShopSection";
import ResellerSection from "../components/ResellerSection";
import InstagramSection from "../components/InstagramSection";
import Footer from "../components/Footer";
import LoadingScreen from "../components/LoadingScreen";
import WhatsAppButton from "../components/WhatsAppButton";

const Index: React.FC = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in', 'opacity-100');
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    // Observe all sections and elements with animation classes
    document.querySelectorAll('section, .animate-on-scroll').forEach((element) => {
      element.classList.add('opacity-0', 'translate-y-8');
      observer.observe(element);
    });

    // Add hover animations to interactive elements
    document.querySelectorAll('a, button').forEach((element) => {
      element.classList.add('transition-all', 'duration-300', 'hover:scale-105');
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <LoadingScreen />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ShopSection />
        <ResellerSection />
        <InstagramSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
