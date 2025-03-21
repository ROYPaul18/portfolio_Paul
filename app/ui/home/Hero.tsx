"use client";

import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className = "" }) => {
  const { t, i18n } = useTranslation("common");
  
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (i18n.isInitialized) {
      setIsLoaded(true);
    }
  }, [i18n.isInitialized]);

  if (!isLoaded) return null; 

  return (
    <section className={`relative w-full h-screen flex flex-col items-center justify-center text-white text-center px-4 ${className}`}>
      {/* Grand titre */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl font-bold uppercase leading-tight">
        DEVELOPPEUR 
      </h1>
      <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl font-bold uppercase leading-tight">
        WEB 
      </h1>
      <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl font-bold uppercase leading-tight">
        FREELANCE 
      </h1>
      
      {/* Petit sous-texte */}
      <p className="mt-4 text-lg sm:text-xl md:text-xl 2xl:text-3xl max-w-2xl">
        Création de sites web performants, modernes et optimisés pour votre business.
      </p>
    </section>
  );
};

export default Hero;
