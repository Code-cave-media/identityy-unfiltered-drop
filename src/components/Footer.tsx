
import React from "react";
import { Instagram, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-identityy-black text-white">
      <div className="section-container pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/20">
          <div>
            <h2 className="text-3xl font-display uppercase mb-6">IDENTITYY</h2>
            <p className="text-identityy-offwhite/80 mb-6">
              Curating rare thrift finds with a raw, unfiltered aesthetic. 
              One-of-one pieces that can't be replaced.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-identityy-red transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold uppercase mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["About Us", "Our Story", "Shop", "Drop 001", "Contact", "Reseller Program"].map(
                (item, index) => (
                  <li key={index}>
                    <a href="#" className="text-identityy-offwhite/80 hover:text-white transition-colors link-underline">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold uppercase mb-6">Get Early Access</h3>
            <p className="text-identityy-offwhite/80 mb-4">
              Subscribe to get notified about new drops before they sell out.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-transparent border-white/20 rounded-none focus:border-white"
              />
              <Button className="bg-white hover:bg-identityy-offwhite text-identityy-black rounded-none">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-identityy-offwhite/60 text-sm">
            © {new Date().getFullYear()} IDENTITYY. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-identityy-offwhite/60 text-sm hover:text-white">Privacy Policy</a>
            <a href="#" className="text-identityy-offwhite/60 text-sm hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
