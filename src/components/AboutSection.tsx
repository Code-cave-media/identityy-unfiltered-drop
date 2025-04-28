
import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-identityy-offwhite">
      <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        <div className="relative group">
          <img
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Raw architectural style"
            className="w-full h-full object-cover img-glitch transition-all duration-500 group-hover:scale-105"
          />
          <div className="absolute top-[-20px] left-[-20px] bg-identityy-black text-white p-4 font-handwritten text-xl transform transition-transform duration-300 group-hover:rotate-[-5deg] group-hover:scale-110">
            Raw. Real. Rare.
          </div>
        </div>
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="heading-lg text-identityy-black hover:text-identityy-red transition-colors duration-300 cursor-default">
            AUTHENTICITY <br />
            IS <span className="text-identityy-red hover:text-identityy-black transition-colors duration-300">NOT</span> <br />
            NEGOTIABLE
          </h2>
          <p className="text-lg md:text-xl font-medium transform hover:translate-x-2 transition-transform duration-300">
            IDENTITYY was born from the streets of Delhi, hunting for those pieces that tell a story. We curate rare thrift finds you won't see anywhere else.
          </p>
          <p className="text-lg md:text-xl transform hover:translate-x-2 transition-transform duration-300">
            This isn't fast fashion. This isn't mass-produced. Each piece is hand-selected for its uniqueness, quality, and character. The kind of pieces that become part of your identity.
          </p>
          <p className="font-handwritten text-2xl text-identityy-red hover:scale-110 hover:-rotate-2 transition-all duration-300 cursor-default">
            One-of-one. Always.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
