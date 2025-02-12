'use client';

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
    <section className={`w-full h-screen px-6 md:px-12 lg:px-24 text-blanc ${className}`}>
      <div className="w-full h-full flex flex-col justify-between py-52">
        {/* Top Content */}
        <div className="flex justify-between items-start w-full">
          {/* Left Side - Title */}
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-8xl lg:text-8xl font-medium text-blanc dark:text-primary-dark mb-4">
              {t("hero.job")}
              <span className="block text-base md:text-lg lg:text-xl mt-2 text-blanc dark:text-foreground-dark/60 font-normal">
                {t("hero.location")}
              </span>
            </h1>
          </div>

          {/* Right Side - Image */}
          <div className="hidden md:block">
            <div className="relative w-72 h-72 lg:w-96 lg:h-96  overflow-hidden">
              <Image
                src="/img/Paul.png"
                alt="Photo de Paul Roy"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Bottom Content */}
        <div className="flex justify-between items-end w-full">
          {/* Left Side - Contact */}
          <div className="space-y-2">
            <p className="text-lg md:text-xl text-blanc dark:text-foreground-dark">
              {t("hero.idea")}
            </p>
            <p className="text-base md:text-lg text-blanc dark:text-foreground-dark">
              {t("hero.email")}
            </p>
          </div>

          {/* Right Side - Discover Link */}
          <Link
            href="/about"
            className="text-lg md:text-xl text-blanc dark:text-primary-dark hover:underline"
          >
            {t("hero.discover")}
          </Link>
        </div>

        {/* Mobile Image - Only visible on mobile */}
        <div className="md:hidden fixed top-1/2 right-4 transform -translate-y-1/2">
          <div className="relative w-32 h-32 rounded-full overflow-hidden">
            <Image
              src="/img/Paul.png"
              alt="Photo de Paul Roy"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;