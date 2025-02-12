"use client";
import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Services = () => {
  const { t } = useTranslation("common");
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section className="relative w-full py-24">
      {/* Premier Service */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }} // ✅ L'animation se rejoue à chaque retour
        className={`relative py-12 border-b border-[#1a1a1a] transition-opacity duration-300 ${
          hoveredService === 2 ? "opacity-30" : "opacity-100"
        }`}
        onMouseEnter={() => setHoveredService(1)}
        onMouseLeave={() => setHoveredService(null)}
      >
        <div className="absolute left-8 top-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: false }} // ✅
            className="text-sm text-gray-500"
          >
            [{t("site_vitrine.number")}]
          </motion.span>
        </div>

        <div className="max-w-[1680px] mx-auto pl-32">
          <div className="grid grid-cols-12">
            <div className="col-span-1" />
            <div className="col-span-5 flex flex-col gap-12 px-4">
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: false }} // ✅
                className="text-3xl md:text-4xl font-medium text-white leading-tight"
              >
                {t("site_vitrine.type")}
              </motion.h2>

              <div className="flex flex-col gap-20">
                <p className="text-sm text-gray-500 leading-relaxed max-w-xl">
                  {t("site_vitrine.subtitle")}
                </p>
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
                  <Link
                    href="/services/site-vitrine"
                    className="text-lg text-white hover:opacity-70 transition-opacity flex items-center gap-2 group"
                  >
                    <span className="transform -translate-y-[2px] group-hover:translate-x-2 transition-transform">
                      →
                    </span>
                    {t("site_vitrine.type")}
                  </Link>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: false }} // ✅
              className="col-span-6 col-start-7"
            >
              <div className="aspect-[4/3] w-3/4 ml-auto">
                <Image
                  src="/img/paul.png"
                  alt={t("site_vitrine.type")}
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Deuxième Service */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }} // ✅
        className={`relative py-12 transition-opacity duration-300 border-[#1a1a1a] border-b ${
          hoveredService === 1 ? "opacity-30" : "opacity-100"
        }`}
        onMouseEnter={() => setHoveredService(2)}
        onMouseLeave={() => setHoveredService(null)}
      >
        <div className="absolute left-8 top-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: false }} // ✅
            className="text-sm text-gray-500"
          >
            [{t("application_web.number")}]
          </motion.span>
        </div>

        <div className="max-w-[1680px] mx-auto pl-32">
          <div className="grid grid-cols-12">
            <div className="col-span-1" />
            <div className="col-span-5 flex flex-col gap-12 px-4">
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: false }} // ✅
                className="text-3xl md:text-4xl font-medium text-white leading-tight"
              >
                {t("application_web.type")}
              </motion.h2>

              <div className="flex flex-col gap-20">
                <p className="text-lg text-gray-500 leading-relaxed max-w-xl">
                  {t("application_web.subtitle")}
                </p>
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
                  <Link
                    href="/services/application-web"
                    className="text-lg text-white hover:opacity-70 transition-opacity flex items-center gap-2 group"
                  >
                    <span className="transform -translate-y-[2px] group-hover:translate-x-2 transition-transform">
                      →
                    </span>
                    {t("application_web.type")}
                  </Link>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: false }} // ✅
              className="col-span-6 col-start-7"
            >
              <div className="aspect-[4/3] w-3/4 ml-auto">
                <Image
                  src="/img/paul.png"
                  alt={t("application_web.type")}
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
