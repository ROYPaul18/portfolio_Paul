"use client";
import React from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const { t, i18n } = useTranslation("common");
  const pathname = usePathname();

  const toggleLanguage = (): void => {
    const newLanguage = i18n.language === "fr" ? "en" : "fr";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <nav className="fixed top-0 left-0 w-full px-6 py-4 backdrop-blur-lg text-gray-500 opacity-3 flex justify-between items-center z-50">
      {/* Left section - Navigation Links */}
      <ul className="flex gap-2 text-xs">
        <li>
          <Link
            href="/"
            className={`hover:text-gray-400 transition-colors ${pathname === "/projects" ? "text-white" : ""}`}
          >
            Home,
          </Link>
        </li>
        <li>
          <Link
            href="/services"
            className={`hover:text-gray-400 transition-colors ${pathname === "/services" ? "text-white" : ""}`}
          >
            Services,
          </Link>
        </li>
        <li>
          <Link 
            href="/about" 
            className={`hover:text-gray-400 transition-colors ${pathname === "/about" ? "text-white" : ""}`}
          >
            A propos
          </Link>
        </li>
      </ul>

      {/* Center section - Name */}
      <Link 
        href="/" 
        className={`transition-colors text-xs text-gray-500 ${pathname === "/" ? "text-white" : ""}`}
      >
        Bonjours, je m’appel <br className="" />  <span className="text-gray-500 hover:text-gray-400 text-center"> Paul ROY </span>
      </Link>

      {/* Right section - Language Toggle & Idea Link */}
      <div className="flex items-center gap-6">
        <button
          onClick={toggleLanguage}
          className="text-xs hover:text-gray-400 transition-colors"
        >
          {i18n.language.toUpperCase()}
        </button>
        <Link
          href="/idea"
          className={`hover:text-gray-400 transition-colors text-xs ${pathname === "/idea" ? "text-white" : ""}`}
        >
          Une idée ?
        </Link>
      </div>
    </nav>
  );
};

export default Header;
