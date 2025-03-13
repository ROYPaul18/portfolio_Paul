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
        <div className="w-full md:w-1/2 mt-8 md:mt-56">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xs md:text-base 2xl:text-3xl leading-relaxed md:leading-none font-light text-gris/60"
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
                className="relative text-sm md:text-base 2xl:text-3xl flex items-center transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-6 mr-2 transition-colors group-hover:text-deepblue relative z-10"
                  viewBox="0 0 13 12"
                  aria-hidden="true"
                  role="img"
                >
                  <path
                    d="M9.95614 9.02338H8.33283C8.08933 9.02338 7.927 9.18571 7.927 9.42921V10.6467C7.927 10.8902 7.76467 11.0525 7.52117 11.0525H5.89785C5.65435 11.0525 5.49202 10.8902 5.49202 10.6467V9.42921C5.49202 9.18571 5.65435 9.02338 5.89785 9.02338H6.99359C7.50088 9.02338 7.927 8.63784 7.927 8.11027V7.40007C7.927 7.15657 8.08933 6.99424 8.33283 6.99424H9.95614C10.4431 6.99424 10.5649 6.38549 10.5649 5.99996C10.5649 5.61442 10.4431 5.00568 9.95614 5.00568H8.33283C8.08933 5.00568 7.927 4.84334 7.927 4.59985V3.88965C7.927 3.36207 7.50088 2.97653 6.99359 2.97653H5.89785C5.65435 2.97653 5.49202 2.8142 5.49202 2.5707V1.35322C5.49202 1.10972 5.65435 0.947388 5.89785 0.947388H7.52117C7.76467 0.947388 7.927 1.10972 7.927 1.35322V2.5707C7.927 2.8142 8.08933 2.97653 8.33283 2.97653H9.95614C10.1996 2.97653 10.362 3.13886 10.362 3.38236V4.07227C10.362 4.57956 10.7881 4.98538 11.2954 4.98538H12.594C12.8375 4.98538 12.9999 5.14772 12.9999 5.39121V6.6087C12.9999 6.8522 12.8375 7.01453 12.594 7.01453H11.2954C10.7881 7.01453 10.362 7.42036 10.362 7.92764V8.61755C10.362 8.86105 10.1996 9.02338 9.95614 9.02338Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M0.5 5.2563H8.04289C8.2871 5.2563 8.4499 5.37938 8.4499 5.564V6.4717C8.4499 6.65632 8.2871 6.7794 8.04289 6.7794H0.5C0.255789 6.7794 0.0929826 6.65632 0.0929826 6.4717V5.564C0.0929826 5.37938 0.255789 5.2563 0.5 5.2563Z"
                    fill="currentColor"
                  ></path>
                </svg>
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
                className="relative text-sm md:text-base 2xl:text-3xl flex items-center transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-6 mr-2 transition-colors group-hover:text-deepblue relative z-10"
                  viewBox="0 0 13 12"
                  aria-hidden="true"
                  role="img"
                >
                  <path
                    d="M9.95614 9.02338H8.33283C8.08933 9.02338 7.927 9.18571 7.927 9.42921V10.6467C7.927 10.8902 7.76467 11.0525 7.52117 11.0525H5.89785C5.65435 11.0525 5.49202 10.8902 5.49202 10.6467V9.42921C5.49202 9.18571 5.65435 9.02338 5.89785 9.02338H6.99359C7.50088 9.02338 7.927 8.63784 7.927 8.11027V7.40007C7.927 7.15657 8.08933 6.99424 8.33283 6.99424H9.95614C10.4431 6.99424 10.5649 6.38549 10.5649 5.99996C10.5649 5.61442 10.4431 5.00568 9.95614 5.00568H8.33283C8.08933 5.00568 7.927 4.84334 7.927 4.59985V3.88965C7.927 3.36207 7.50088 2.97653 6.99359 2.97653H5.89785C5.65435 2.97653 5.49202 2.8142 5.49202 2.5707V1.35322C5.49202 1.10972 5.65435 0.947388 5.89785 0.947388H7.52117C7.76467 0.947388 7.927 1.10972 7.927 1.35322V2.5707C7.927 2.8142 8.08933 2.97653 8.33283 2.97653H9.95614C10.1996 2.97653 10.362 3.13886 10.362 3.38236V4.07227C10.362 4.57956 10.7881 4.98538 11.2954 4.98538H12.594C12.8375 4.98538 12.9999 5.14772 12.9999 5.39121V6.6087C12.9999 6.8522 12.8375 7.01453 12.594 7.01453H11.2954C10.7881 7.01453 10.362 7.42036 10.362 7.92764V8.61755C10.362 8.86105 10.1996 9.02338 9.95614 9.02338Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M0.5 5.2563H8.04289C8.2871 5.2563 8.4499 5.37938 8.4499 5.564V6.4717C8.4499 6.65632 8.2871 6.7794 8.04289 6.7794H0.5C0.255789 6.7794 0.0929826 6.65632 0.0929826 6.4717V5.564C0.0929826 5.37938 0.255789 5.2563 0.5 5.2563Z"
                    fill="currentColor"
                  ></path>
                </svg>
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
