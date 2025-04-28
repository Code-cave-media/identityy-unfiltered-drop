import React, { useRef, useEffect } from "react";
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

  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent, index: number) => {
      const image = imageRefs.current[index];
      if (image) {
        const { clientX, clientY } = e;
        const { left, top, width, height } = image.getBoundingClientRect();
        const x = (clientX - left) / width;
        const y = (clientY - top) / height;
        
        image.style.transform = `scale(1.1) rotate(${x * 2}deg)`;
      }
    };

    const handleMouseLeave = (index: number) => {
      const image = imageRefs.current[index];
      if (image) {
        image.style.transform = 'scale(1) rotate(0deg)';
      }
    };

    imageRefs.current.forEach((image, index) => {
      if (image) {
        image.addEventListener('mousemove', (e) => handleMouseMove(e, index));
        image.addEventListener('mouseleave', () => handleMouseLeave(index));
      }
    });

    return () => {
      imageRefs.current.forEach((image, index) => {
        if (image) {
          image.removeEventListener('mousemove', (e) => handleMouseMove(e, index));
          image.removeEventListener('mouseleave', () => handleMouseLeave(index));
        }
      });
    };
  }, []);

  return (
    <section className="bg-identityy-black text-white">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 animate-slide-up">
          <h2 className="heading-md hover:text-identityy-red transition-colors duration-300">FOLLOW OUR JOURNEY</h2>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mt-4 md:mt-0 link-underline group"
          >
            <Instagram className="h-5 w-5 mr-2 transform group-hover:rotate-12 transition-transform duration-300" />
            <span className="group-hover:translate-x-1 transition-transform duration-300">@IDENTITYY.OFFICIAL</span>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {instagramPosts.map((post, index) => (
            <div key={index} className="aspect-square overflow-hidden animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <img
                ref={(el) => (imageRefs.current[index] = el)}
                src={post}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover transition-all duration-700 ease-out img-grayscale"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center animate-slide-up delay-300">
          <Button 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-identityy-black rounded-none text-lg font-bold group"
          >
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">VIEW INSTAGRAM</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
