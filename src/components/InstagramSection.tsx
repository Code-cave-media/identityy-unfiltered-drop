
import React from "react";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const InstagramSection: React.FC = () => {
  // Mock Instagram feed images
  const instagramPosts = [
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1527576539890-dfa815648363?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  ];

  return (
    <section className="bg-identityy-black text-white">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <h2 className="heading-md">FOLLOW OUR JOURNEY</h2>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mt-4 md:mt-0 link-underline"
          >
            <Instagram className="h-5 w-5 mr-2" />
            <span>@IDENTITYY.OFFICIAL</span>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {instagramPosts.map((post, index) => (
            <div key={index} className="aspect-square overflow-hidden">
              <img
                src={post}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 img-grayscale"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-identityy-black rounded-none text-lg font-bold"
          >
            VIEW INSTAGRAM
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
