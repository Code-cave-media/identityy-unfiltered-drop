import React, { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Package, Users } from "lucide-react";

const ResellerSection: React.FC = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (imageRef.current) {
        const { clientX, clientY } = e;
        const { left, top, width, height } = imageRef.current.getBoundingClientRect();
        const x = (clientX - left) / width;
        const y = (clientY - top) / height;
        
        imageRef.current.style.transform = `scale(1.05) translate(${x * 20}px, ${y * 20}px)`;
      }
    };

    const handleMouseLeave = () => {
      if (imageRef.current) {
        imageRef.current.style.transform = 'scale(1) translate(0, 0)';
      }
    };

    if (imageRef.current) {
      imageRef.current.addEventListener('mousemove', handleMouseMove);
      imageRef.current.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (imageRef.current) {
        imageRef.current.removeEventListener('mousemove', handleMouseMove);
        imageRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <section id="resell" className="bg-identityy-red text-white">
      <div className="section-container">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/2 space-y-6 animate-slide-up">
            <h2 className="heading-lg text-white mb-6 hover:text-identityy-offwhite transition-colors duration-300">
              RESELL RARE. <br />JOIN THE CIRCLE.
            </h2>
            <p className="text-lg md:text-xl hover:translate-x-2 transition-transform duration-300">
              Are you a boutique, store owner, or independent reseller looking for unique pieces? Connect directly with our sourcing network.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start group">
                <Package className="h-8 w-8 mr-3 flex-shrink-0 transform group-hover:rotate-12 transition-transform duration-300" />
                <div>
                  <h3 className="font-bold text-lg group-hover:text-identityy-offwhite transition-colors duration-300">Wholesale Access</h3>
                  <p className="text-white/80 group-hover:translate-x-2 transition-transform duration-300">Direct access to our latest finds before they hit the shop</p>
                </div>
              </div>
              <div className="flex items-start group">
                <Users className="h-8 w-8 mr-3 flex-shrink-0 transform group-hover:rotate-12 transition-transform duration-300" />
                <div>
                  <h3 className="font-bold text-lg group-hover:text-identityy-offwhite transition-colors duration-300">Reseller Community</h3>
                  <p className="text-white/80 group-hover:translate-x-2 transition-transform duration-300">Connect with other independent vintage sellers</p>
                </div>
              </div>
            </div>

            <Button className="bg-white hover:bg-identityy-offwhite text-identityy-red rounded-none font-bold text-lg mt-8 px-8 py-6 group">
              <span className="transform group-hover:translate-x-1 transition-transform duration-300">JOIN WHATSAPP GROUP</span>
            </Button>
          </div>

          <div className="md:w-1/2 relative animate-slide-up delay-100">
            <div className="relative h-full">
              <img 
                ref={imageRef}
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Reseller collective" 
                className="w-full h-full object-cover transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-identityy-red/30 mix-blend-multiply"></div>
            </div>
            <div className="absolute bottom-[-20px] right-[-20px] bg-identityy-black p-6 font-handwritten text-xl max-w-[250px] transform rotate-[-2deg] hover:rotate-0 hover:scale-110 transition-all duration-500">
              Access to rare finds before anyone else
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResellerSection;
