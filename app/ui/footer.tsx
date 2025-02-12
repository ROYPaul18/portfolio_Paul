"use client";

import React from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const Footer = () => {
  const { t } = useTranslation("common");

  return (
    <footer className="dark:bg-black text-gray-400 text-sm border-t border-gray-700 py-8 mt-12 w-full">
      <div className=" mx-auto px-4">
        <div className="gap-8 w-full flex justify-between">
          {/* Liens principaux */}
          <div className="w-1/3 text-center">
            <h3 className="text-gray-500 mb-2">Liens</h3>
            <ul className="space-y-1">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">A propos</Link></li>
              {/* <li><Link href="/projects">Projets</Link></li> */}
              <li><Link href="/idea">Une idée ?</Link></li>
            </ul>
          </div>
          
          {/* Mes services */}
          <div className="w-1/3 text-center">
            <h3 className="text-gray-500 mb-2">Mes services</h3>
            <ul className="space-y-1">
              <li><Link href="/service/site-vitrine">Site vitrine</Link></li>
              <li><Link href="/application">Application web</Link></li>
            </ul>
          </div>
          
          {/* Autres liens */}
          <div className="w-1/3 text-center">
            <h3 className="text-gray-500 mb-2">Autres liens</h3>
            <ul className="space-y-1">
              <li><Link href="https://instagram.com" target="_blank">Instagram</Link></li>
              <li><Link href="https://linkedin.com" target="_blank">LinkedIn</Link></li>
              <li><Link href="https://github.com/ROYPaul18" target="_blank">GitHub</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Bas de page */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 w-full flex justify-between">
          <p>&copy; 2025 Paul ROY. All rights reserved</p>
          <p>
            <Link href="/legal">Mentions légales</Link> | 
            <Link href="/privacy"> Politiques de confidentialité</Link>
          </p>
          {/* Bouton vers la page suivante */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
