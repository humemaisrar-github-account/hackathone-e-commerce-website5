 
import React from 'react';

const Hero = () => {
  return (
    <div className="w-full">
      <div className="w-full h-auto">
        <img 
          src="/hero.png" 
          alt="hero image" 
          className="w-full h-auto object-cover" 
        />
      </div>
    </div>
  );
}

export default Hero;
