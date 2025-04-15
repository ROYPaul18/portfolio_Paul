"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import { gsap } from "gsap";

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className = "" }) => {
  const { t, i18n } = useTranslation("common");
  const [isLoaded, setIsLoaded] = useState(false);
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);

  useEffect(() => {
    if (i18n.isInitialized) {
      setIsLoaded(true);
    }
  }, [i18n.isInitialized]);

  useEffect(() => {
    if (isLoaded) {
      gsap.fromTo(
        titleRefs.current,
        { y: "-100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 1.5, stagger: 0.2, ease: "power3.out" }
      );
    }
  }, [isLoaded]);

  if (!isLoaded) return null;

  return (
    <section
      className={`relative w-full h-screen flex flex-col items-center justify-center text-white text-center px-4 ${className}`}
    >
      {/* Grand titre */}
      {["hero.job1", "hero.job2", "hero.job3"].map((key, index) => (
        <h1
          key={key}
          ref={(el) => {
            if (el) titleRefs.current[index] = el;
          }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl font-bold uppercase leading-tight overflow-hidden"
        >
          {t(key)}
        </h1>
      ))}

      {/* Petit sous-texte */}
      <p
        className="mt-4 text-lg sm:text-xl md:text-xl 2xl:text-3xl max-w-2xl"
        ref={(el) => {
          if (el) titleRefs.current[0] = el;
        }}
      >
        {t("hero.sub")}
      </p>
    </section>
  );
};

export default Hero;
