"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className = "" }) => {
  const { t } = useTranslation("common");

  return (
    <section
      className={`container mx-auto py-12 md:py-40 bg-background dark:bg-background-dark ${className}`}
    >
      <div className="flex flex-col items-center gap-8 max-w-6xl mx-auto">
        {/* Image pour Mobile - Affichée en premier */}
        <div className="w-full max-w-[280px] md:hidden">
          <div className="relative aspect-square rounded-full overflow-hidden ring-4 ring-primary/10 dark:ring-primary-dark/10">
            <Image
              src="/img/Paul.png"
              alt="Photo de Paul Roy"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-32">
          {/* Contenu textuel */}
          <div className="flex-1 min-h-[400px] flex flex-col justify-center space-y-6 text-center md:text-left">
            <div>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-primary dark:text-primary-dark leading-tight">
              {t("hero.job")}
            </h1>
            <p className="text-lg md:text-xl text-foreground/60 dark:text-foreground-dark/60">
              {t("hero.location")}
            </p>
            </div>
            <div className="space-y-2">
              <p className="text-lg md:text-xl text-foreground dark:text-foreground-dark">
                {t("hero.idea")}
              </p>
              <p className="text-base md:text-lg font-medium text-foreground dark:text-foreground-dark">
                {t("hero.email")}
              </p>
            </div>
            {/* Bouton Discover pour Mobile */}
            <div className="md:hidden pt-4">
              <Link
                href="/about"
                className="inline-block px-6 py-3 text-primary dark:text-primary-dark text-lg border-2 border-primary dark:border-primary-dark rounded-md hover:bg-primary dark:hover:bg-primary-dark hover:text-background dark:hover:text-background-dark transition-all duration-300"              >
                {t("hero.discover")}
              </Link>
            </div>
          </div>

          {/* Image et Bouton pour Desktop */}
          <div className="flex-1 flex flex-col items-center gap-6 min-h-[400px] justify-center">
            <div className="relative w-[300px] h-[300px] aspect-square rounded-full overflow-hidden ring-4 ring-primary/10 dark:ring-primary-dark/10">
              <Image
                src="/img/Paul.png"
                alt="Photo de Paul Roy"
                fill
                className="object-cover"
                priority
              />
            </div>
            <Link
              href="/about"
              className="px-8 py-4 text-primary dark:text-primary-dark text-xl"
            >
              {t("hero.discover")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
