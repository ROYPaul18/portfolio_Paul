"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";

function Prejob() {
  const { t } = useTranslation("common");

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }} // ✅ Empêche la réanimation au retour
      className="text-blanc container px-4"
    >
      <div className="grid grid-cols-12 gap-8">
        {/* Colonne de gauche pour le titre */}
        <div className="col-span-12 md:col-span-5">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }} // ✅ Empêche la réanimation au retour
            className="text-4xl md:text-4xl font-bold leading-tight flex flex-col"
          >
            <span>{t("prejob.title.line1")}</span>
            <span>{t("prejob.title.line2")}</span>
            <span>{t("prejob.title.line3")}</span>
          </motion.h2>
        </div>

        {/* Colonne de droite pour la description et les liens */}
        <div className="col-span-12 md:col-span-7 md:mt-40">
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }} // ✅ Empêche la réanimation au retour
            className="text-sm md:text-lg leading-loose font-light text-gray-500"
          >
            {t("prejob.description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }} // ✅ Empêche la réanimation au retour
            className="mt-16 flex gap-8"
          >
            <Link
              href="/services"
              className="text-lg hover:opacity-70 transition-opacity"
            >
              -&gt; {t("prejob.links.services")}
            </Link>
            <Link
              href="/contact"
              className="text-lg hover:opacity-70 transition-opacity"
            >
              -&gt; {t("prejob.links.contact")}
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Prejob;
