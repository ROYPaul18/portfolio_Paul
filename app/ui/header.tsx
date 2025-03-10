"use client";
import React, { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const { t, i18n } = useTranslation("common", {
    useSuspense: false
  });

  const [selectedButton, setSelectedButton] = useState<string | null>(null);
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const toggleLanguage = (): void => {
    const newLanguage = i18n.language === "fr" ? "en" : "fr";
    i18n.changeLanguage(newLanguage);
  };

  const handleButtonClick = (button: string) => {
    setSelectedButton(button);
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
    { href: "/", label: "Facebook"},
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full px-4 sm:px-6 py-4 2xl:py-8 backdrop-blur-lg text-gris/60 opacity-3 flex justify-between items-center z-[100] text-xs md:text-xs 2xl:text-xl">
    
        <div className="hidden sm:flex flex-col">
          <p className="mb-2">Quick Link</p>
          <ul className="flex">
            {navigation.map(({ href, label }) => (
              <li key={href} className="group relative mr-3">
                <Link
                  href={href}
                  className={`relative py-1 transition-colors ${
                    pathname === href ? "text-white" : ""
                  }`}
                >
                  <span className="relative z-10 group-hover:text-deepblue">{label}</span>
                  <span className="absolute left-0 bottom-0 w-0 h-full bg-white transition-all duration-700 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

      
        <div className="flex flex-col sm:items-center items-start leading-tight">
          <Link
            href="/"
            className="transition-colors mb-1"
          >
            {t("header.greeting")}
          </Link>
          <Link 
            href="/"     
            className={`transition-colors mb-1 ${
              pathname === "/" ? "text-white" : ""
            }`}
          >
            Paul Roy
          </Link>
        </div>

        
        <div className="hidden sm:flex flex-col items-end">
          <div className="flex justify-center text-center">
            <span className="w-1 h-1 bg-green-500 mr-2 mt-1"></span>
            <p className="mb-2">Dispo pour un nouveau projet</p>
          </div>

          <div className="flex items-center gap-2">
            {["fr", "en"].map((lang) => (
              <button
                key={lang}
                onClick={() => {
                  toggleLanguage();
                  handleButtonClick(lang);
                }}
                className={`hover:text-gray-400 transition-colors ${
                  selectedButton === lang ? "text-white" : "text-gris/60"
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
            <li className="group relative list-none">
              <Link
                href="/idea"
                className={`relative py-1 transition-colors ${
                  pathname === "/idea" ? "text-white" : ""
                }`}
              >
                <span className="relative z-10 group-hover:text-deepblue">
                  {t("header.idea")}
                </span>
                <span className="absolute left-0 bottom-0 w-0 h-full bg-white transition-all duration-700 ease-in-out group-hover:w-full group-hover:text-deepblue"></span>
              </Link>
            </li>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden ml-auto">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-500 hover:text-white transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-0 bg-gris z-[90] sm:hidden">
          <div className="h-screen flex flex-col p-4">
            {/* Header with close button */}
            <div className="flex justify-between items-center mb-8">
              <div className="flex flex-col">
                <span className="text-gray-500">{t("header.greeting")}</span>
                <span className="text-white">Paul Roy</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-500 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="space-y-6">
              {navigation.map(({ href, label }) => (
                <div key={href} className="flex items-center">
                  <span className={`mr-2 ${pathname === href ? 'opacity-100' : 'opacity-0'}`}>→</span>
                  <Link
                    href={href}
                    className={`text-lg transition-colors ${
                      pathname === href ? "text-white" : "text-gray-500"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-auto mb-4">
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs">
                {socialLinks.map(({ href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    className="text-gray-500 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
