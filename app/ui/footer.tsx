"use client";

import React from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const { t } = useTranslation("common", { useSuspense: false });
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `relative py-1 transition-colors ${
      pathname === href ? "text-white" : "text-gris/60 hover:text-white"
    } 
    group`;

  return (
    <footer className="dark:bg-black text-gris/60 border-t border-gris/60 pt-4 mt-12 w-ful text-xs md:text-xs 2xl:text-2xl">
      <div className="mx-auto">
        <div className="gap-8 w-full flex justify-between py-2 2xl:py-16">
          {/* Liens principaux */}
          <div className="w-1/3 text-center">
            <h3 className="text-gris mb-4 text-sm 2xl:text-2xl">{t("footer.links")}</h3>
            <ul className="space-y-4 2xl:space-y-4">
              <li>
                <Link href="/" className={linkClass("/")}>
                  <span className="relative z-10 group-hover:text-deepblue">
                    {t("footer.home")}
                  </span>
                  <span className="absolute left-0 bottom-0 w-0 h-full bg-white transition-all duration-700 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/about" className={linkClass("/about")}>
                  <span className="relative z-10 group-hover:text-deepblue">
                    {t("footer.about")}
                  </span>
                  <span className="absolute left-0 bottom-0 w-0 h-full bg-white transition-all duration-700 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/idea" className={linkClass("/idea")}>
                  <span className="relative z-10 group-hover:text-deepblue">
                    {t("footer.idea")}
                  </span>
                  <span className="absolute left-0 bottom-0 w-0 h-full bg-white transition-all duration-700 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Mes services */}
          <div className="w-1/3 text-center">
            <h3 className="text-gris/60 mb-4 text-sm 2xl:text-2xl">{t("footer.services")}</h3>
            <ul className="space-y-4 2xl:space-y-4">
              <li>
                <Link
                  href="/service/site-vitrine"
                  className={linkClass("/service/site-vitrine")}
                >
                  <span className="relative z-10 group-hover:text-deepblue">
                    {t("footer.siteVitrine")}
                  </span>
                  <span className="absolute left-0 bottom-0 w-0 h-full bg-white transition-all duration-700 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/application" className={linkClass("/application")}>
                  <span className="relative z-10 group-hover:text-deepblue">
                    {t("footer.applicationWeb")}
                  </span>
                  <span className="absolute left-0 bottom-0 w-0 h-full bg-white transition-all duration-700 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Autres liens */}
          <div className="w-1/3 text-center">
            <h3 className="text-gris mb-4 text-sm 2xl:text-2xl">{t("footer.otherLinks")}</h3>
            <ul className="space-y-4 2xl:space-y-4">
              <li>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  className={linkClass("#")}
                >
                  <span className="relative z-10 group-hover:text-deepblue">
                    Instagram
                  </span>
                  <span className="absolute left-0 bottom-0 w-0 h-full bg-white transition-all duration-700 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  className={linkClass("#")}
                >
                  <span className="relative z-10 group-hover:text-deepblue">
                    LinkedIn
                  </span>
                  <span className="absolute left-0 bottom-0 w-0 h-full bg-white transition-all duration-700 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/ROYPaul18"
                  target="_blank"
                  className={linkClass("#")}
                >
                  <span className="relative z-10 group-hover:text-deepblue">
                    GitHub
                  </span>
                  <span className="absolute left-0 bottom-0 w-0 h-full bg-white transition-all duration-700 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bas de page */}
        <div className="mt-8 p-4 border-t border-gris/60 text-blanc w-full flex justify-between">
          <p>&copy; 2025 Paul ROY. {t("footer.allRightsReserved")}</p>
          <p className="space-x-4"> 
            <Link href="/legal" className={linkClass("/legal")}>
              <span className="relative z-10 group-hover:text-deepblue">
                {t("footer.legalMentions")}
              </span>
              <span className="absolute left-0 bottom-0 w-0 h-full bg-white transition-all duration-700 ease-in-out group-hover:w-full"></span>
            </Link>
            <Link href="/privacy" className={linkClass("/privacy")}>
              <span className="relative z-10 group-hover:text-deepblue">
                {t("footer.privacyPolicy")}
              </span>
              <span className="absolute left-0 bottom-0 w-0 h-full bg-white transition-all duration-700 ease-in-out group-hover:w-full"></span>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
