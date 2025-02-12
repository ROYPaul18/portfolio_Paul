"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

function PreService() {
  const { t } = useTranslation("common");

  return (
    <section className="mx-auto px-52 py-12 md:py-32 dark:bg-gray-900 border-y border-deepblue flex flex-col items-center">
      <div className=" w-full space-y-6 text-left">
        {/* Titre en petit texte aligné à gauche */}
        <h2 className="text-sm uppercase font-bold text-gray-600 dark:text-gray-400">
          {t("preservice.info")}
        </h2>

        {/* Texte principal plus grand */}
        <p className="text-3xl md:text-4xl font-light text-gray-900 dark:text-gray-100 leading-relaxed">
          {t("preservice.description")}
        </p>

        {/* Lien en bas aligné à gauche */}
        <Link
          href="/projects"
          className="inline-block text-sm font-semibold text-deepblue dark:text-gray-100"
        >
          {t("preservice.buttonText")}
        </Link>
      </div>
    </section>
  );
}

export default PreService;
