"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

function Prejob() {
  const { t } = useTranslation("common");

  return (
    <section className="container mx-auto py-12 md:py-52 dark:bg-gray-900 border-y-2 border-deepblue dark:border-primary-dark text-center">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Titre principal */}
        <h2 className="text-4xl md:text-6xl font-bold text-deepblue dark:text-primary-dark leading-tight">
          {t("prejob.title")}
          <span className="text-2xl align-top">(2)</span>
        </h2>

        {/* Paragraphe descriptif */}
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          {t("prejob.description")}
        </p>
      </div>

      {/* Lien */}
      <div className="pt-8">
        <Link
          href="/projects"
          className="inline-block px-6 py-3 text-lg font-medium text-primary bg-deepblue dark:bg-gray-700 rounded-md hover:bg-gray-800 transition-colors"
        >
          {t("prejob.buttonText")}
        </Link>
      </div>
    </section>
  );
}

export default Prejob;
