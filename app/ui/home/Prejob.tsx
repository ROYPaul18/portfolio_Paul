"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";

function Prejob() {
  const { t } = useTranslation("common", {
    useSuspense: false, // Prevent translation suspense during hydration
  });

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="text-blanc container max-w-none mt-12 relative w-full py-12 md:py-24"
    >
      <div className="flex flex-col md:flex-row gap-8">
        {/* Colonne pour le titre - pleine largeur sur mobile, moitié sur desktop */}
        <div className="w-full md:w-1/2">
          <motion.h2
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            whileInView={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl 2xl:text-6xl font-bold flex flex-col"
          >
            <span>{t("prejob.title.line1")}</span>
            <span>{t("prejob.title.line2")}</span>
            <span>{t("prejob.title.line3")}</span>
          </motion.h2>
        </div>

        {/* Colonne pour la description et les liens - pleine largeur sur mobile, moitié sur desktop */}
        <div className="w-full md:w-1/2 mt-8 md:mt-44">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xs md:text-base 2xl:text-2xl leading-relaxed md:leading-none font-light text-gris/60"
          >
            {t("prejob.description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 md:mt-16 flex flex-col md:flex-row gap-4 md:gap-8"
          >
            {/* Lien vers Services */}
            <div className="group relative ">
              <Link
                href="/services"
                className="relative text-sm md:text-base 2xl:text-2xl flex items-center transition-colors"
              >
                <span className="relative z-10 group-hover:text-black">
                  {t("prejob.links.services")}
                </span>
                <span className="absolute left-0 bottom-0 w-0 h-full bg-white transition-all duration-700 ease-in-out group-hover:w-full"></span>
              </Link>
            </div>

            {/* Lien vers Contact */}
            <div className="group relative">
              <Link
                href="/contact"
                className="relative text-sm md:text-base 2xl:text-2xl flex items-center transition-colors"
              >
                <span className="relative z-10 group-hover:text-black">
                  {t("prejob.links.contact")}
                </span>
                <span className="absolute left-0 bottom-0 w-0 h-full bg-white transition-all duration-700 ease-in-out group-hover:w-full"></span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Prejob;
