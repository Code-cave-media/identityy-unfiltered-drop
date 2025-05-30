
import React from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

interface ProductProps {
  image: string;
  name: string;
  price: string;
  soldOut?: boolean;
}

const Product: React.FC<ProductProps> = ({ image, name, price, soldOut }) => {
  return (
    <div className="group relative">
      <div className="aspect-square overflow-hidden bg-identityy-black/5">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500 img-grayscale"
        />
        {soldOut && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <p className="bg-identityy-black text-white font-bold text-xl p-2 uppercase">Sold Out</p>
          </div>
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-bold uppercase">{name}</h3>
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
          <div>
            <p className="text-identityy-red font-bold mb-2">LATEST RELEASE</p>
            <h2 className="heading-lg text-identityy-black">DROP 001</h2>
          </div>
          <p className="max-w-md text-identityy-gray mt-4 md:mt-0">
            Our debut collection. Rare jeans, loose fits, clean aesthetics with natural wear. Every piece tells a story.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Product key={index} {...product} />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Button className="bg-identityy-black hover:bg-identityy-black/80 text-white rounded-none px-8 py-6 text-lg font-bold">
            <ShoppingBag className="mr-2 h-5 w-5" />
            SHOP ALL PIECES
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
