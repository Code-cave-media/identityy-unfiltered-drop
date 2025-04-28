import React, { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

interface ProductProps {
  image: string;
  name: string;
  price: string;
  soldOut?: boolean;
}

const Product: React.FC<ProductProps> = ({ image, name, price, soldOut }) => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (imageRef.current) {
        const { clientX, clientY } = e;
        const { left, top, width, height } = imageRef.current.getBoundingClientRect();
        const x = (clientX - left) / width;
        const y = (clientY - top) / height;
        
        imageRef.current.style.transform = `scale(1.05) rotate(${x * 2}deg)`;
      }
    };

    const handleMouseLeave = () => {
      if (imageRef.current) {
        imageRef.current.style.transform = 'scale(1) rotate(0deg)';
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
    <div className="group relative animate-slide-up">
      <div className="aspect-square overflow-hidden bg-identityy-black/5">
        <img
          ref={imageRef}
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center transition-all duration-700 ease-out img-grayscale"
        />
        {soldOut && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center animate-fade-in">
            <p className="bg-identityy-black text-white font-bold text-xl p-2 uppercase transform hover:scale-110 transition-transform duration-300">Sold Out</p>
          </div>
        )}
      </div>
      <div className="mt-4 transform transition-all duration-300 group-hover:translate-x-2">
        <h3 className="text-lg font-bold uppercase hover:text-identityy-red transition-colors duration-300">{name}</h3>
        <p className="text-identityy-red font-medium">{price}</p>
      </div>
    </div>
  );
};

const ShopSection: React.FC = () => {
  const products = [
    {
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      name: "Vintage 90s Denim - Worn Blue",
      price: "₹4,800",
    },
    {
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      name: "Distressed Worker Jacket",
      price: "₹5,500",
      soldOut: true,
    },
    {
      image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      name: "Archive Workwear Pant",
      price: "₹3,900",
    },
  ];

  return (
    <section id="shop" className="bg-white">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="animate-slide-up">
            <p className="text-identityy-red font-bold mb-2 hover:scale-110 transition-transform duration-300 inline-block">LATEST RELEASE</p>
            <h2 className="heading-lg text-identityy-black hover:text-identityy-red transition-colors duration-300">DROP 001</h2>
          </div>
          <p className="max-w-md text-identityy-gray mt-4 md:mt-0 animate-slide-up delay-100 hover:translate-x-2 transition-transform duration-300">
            Our debut collection. Rare jeans, loose fits, clean aesthetics with natural wear. Every piece tells a story.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Product key={index} {...product} />
          ))}
        </div>

        <div className="mt-16 flex justify-center animate-slide-up delay-200">
          <Button className="bg-identityy-black hover:bg-identityy-black/80 text-white rounded-none px-8 py-6 text-lg font-bold group">
            <ShoppingBag className="mr-2 h-5 w-5 transform group-hover:rotate-12 transition-transform duration-300" />
            SHOP ALL PIECES
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
