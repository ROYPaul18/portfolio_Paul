"use client";

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const { t, i18n } = useTranslation("common", { useSuspense: false });
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState(i18n.language || "fr");

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const toggleLanguage = () => {
    const newLang = lang === "fr" ? "en" : "fr";
    i18n.changeLanguage(newLang);
    setLang(newLang);
  };

  const navigation = [
    { href: "/", label: t("header.home") },
    { href: "/services", label: t("header.services") },
    { href: "/about", label: t("header.about") },
    { href: "/projects", label: t("header.projects") },
  ];

  const socialLinks = [
    { href: "/", label: "LinkedIn" },
    { href: "/", label: "Twitter / X" },
    { href: "/", label: "Instagram" },
    { href: "/", label: "Facebook" },
  ];

  return (
    <>
      {/* Navbar Desktop & Mobile */}
      <nav className="fixed top-0 left-0 w-full px-4 sm:px-6 py-4 backdrop-blur-lg text-gray-300 flex justify-between items-center z-50 text-sm md:text-base">
        {/* Navigation Desktop */}
        <div className="hidden sm:flex flex-col">
          <p className="mb-2">{t("header.quickLink")}</p>
          <ul className="flex">
            {navigation.map(({ href, label }) => (
              <li key={href} className="group relative mr-3">
                <Link
                  href={href}
                  className={`relative py-1 transition-colors ${
                    pathname === href ? "text-white font-bold" : "text-gray-400"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Branding */}
        <div className="flex flex-col sm:items-center items-start leading-tight">
          <Link href="/" className="transition-colors mb-1">
            {t("header.greeting")}
          </Link>
          <Link
            href="/"
            className={`transition-colors mb-1 ${
              pathname === "/" ? "text-white font-bold" : "text-gray-400"
            }`}
          >
            Paul Roy
          </Link>
        </div>

        {/* Right Side */}
        <div className="hidden sm:flex flex-col items-end">
          <div className="flex items-center">
            <span className="size-2 bg-green-500 mr-2 rounded-full"></span>
            <p>{t("header.dispo")}</p>
          </div>

          <div className="flex items-center gap-4">
            {/* Button Lang Switch */}
            <button
              onClick={toggleLanguage}
              className="hover:text-gray-400 transition-colors"
            >
              {lang.toUpperCase()}
            </button>

            {/* Idea Link */}
            <Link
              href="/idea"
              className={`relative py-1 transition-colors ${
                pathname === "/idea" ? "text-white font-bold" : "text-gray-400"
              }`}
            >
              {t("header.idea")}
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden ml-auto">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-0 bg-gray-900 bg-opacity-90 z-40 flex flex-col p-4 sm:hidden">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex flex-col">
              <span className="text-gray-400">{t("header.greeting")}</span>
              <span className="text-white">Paul Roy</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-gray-400 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6">
            {navigation.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-lg transition-colors ${
                  pathname === href ? "text-white font-bold" : "text-gray-400"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="mt-auto mb-4 flex flex-wrap gap-x-4 gap-y-2 text-xs">
            {socialLinks.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
