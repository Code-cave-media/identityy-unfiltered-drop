
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-identityy-black flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80"
          alt="Fashion model in vintage clothing"
          className="w-full h-full object-cover opacity-40 img-grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-identityy-black/50 to-identityy-black"></div>
      </div>

      <div className="section-container relative z-10 flex flex-col justify-center">
        <div className="max-w-4xl animate-fade-in">
          <h1 className="heading-xl text-white mb-2">
            FIND WHAT <span className="text-identityy-red">CAN'T</span> BE REPLACED
          </h1>
          <p className="text-identityy-offwhite text-xl md:text-2xl mb-8 max-w-2xl">
            Rare thrift pieces curated from Delhi and beyond. One-of-one. Always.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-white hover:bg-identityy-offwhite text-identityy-black rounded-none text-lg px-8 py-6 font-bold">
              SHOP DROP 001
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 rounded-none text-lg px-8 py-6 font-bold">
              JOIN THE CIRCLE
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-4 md:left-8 font-handwritten text-white text-xl rotate-[-5deg]">
        Est. 2023
      </div>
      <div className="absolute bottom-8 right-4 md:right-8 text-identityy-offwhite flex items-center">
        <span className="mr-2">Scroll</span>
        <div className="w-6 h-10 border border-identityy-offwhite rounded-full flex items-center justify-center">
          <div className="w-1 h-1 bg-identityy-offwhite rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
