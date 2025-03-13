"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className = "" }) => {
  const { t, i18n } = useTranslation("common");

  // Ensure translations are loaded before rendering
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (i18n.isInitialized) {
      setIsLoaded(true);
    }
  }, [i18n.isInitialized]);

  if (!isLoaded) return null; // Avoid rendering mismatched content

  return (
    <section className={`relative w-full h-screen overflow-hidden bg-black ${className}`}>
      {/* Image plein écran */}
      <Image
        src="/img/paul.png"
        fill
        alt="Photo de Paul Roy"
        className="object-cover w-full h-full opacity-90"
      />

      {/* Filtre vert vintage */}
      <div className="absolute bottom-5 left-5 text-blanc text-7xl 2xl:text-9xl font-bold leading-tight z-0">
        {t("hero.job")}
      </div>
      <div className="absolute inset-0 bg-[#223322] mix-blend-overlay opacity-40"></div>

      {/* Scanlines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1)1px,rgba(0,0,0,0)2px)] bg-[length:100%_4px] opacity-30 pointer-events-none"></div>

      {/* Animation glitch subtile */}
      <div className="absolute inset-0 mix-blend-overlay opacity-20 animate-glitch"></div>
    </section>
  );
};

export default Hero;
