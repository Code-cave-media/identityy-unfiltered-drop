
import React from "react";
import { Button } from "@/components/ui/button";
import { Package, Users } from "lucide-react";

const ResellerSection: React.FC = () => {
  return (
    <section id="resell" className="bg-identityy-red text-white">
      <div className="section-container">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/2 space-y-6">
            <h2 className="heading-lg text-white mb-6">
              RESELL RARE. <br />JOIN THE CIRCLE.
            </h2>
            <p className="text-lg md:text-xl">
              Are you a boutique, store owner, or independent reseller looking for unique pieces? Connect directly with our sourcing network.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start">
                <Package className="h-8 w-8 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg">Wholesale Access</h3>
                  <p className="text-white/80">Direct access to our latest finds before they hit the shop</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="h-8 w-8 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg">Reseller Community</h3>
                  <p className="text-white/80">Connect with other independent vintage sellers</p>
                </div>
              </div>
            </div>

            <Button className="bg-white hover:bg-identityy-offwhite text-identityy-red rounded-none font-bold text-lg mt-8 px-8 py-6">
              JOIN WHATSAPP GROUP
            </Button>
          </div>

          <div className="md:w-1/2 relative">
            <div className="relative h-full">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Reseller collective" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-identityy-red/30 mix-blend-multiply"></div>
            </div>
            <div className="absolute bottom-[-20px] right-[-20px] bg-identityy-black p-6 font-handwritten text-xl max-w-[250px] transform rotate-[-2deg]">
              Access to rare finds before anyone else
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResellerSection;
