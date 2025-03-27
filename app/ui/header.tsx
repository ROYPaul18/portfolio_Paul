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
      <nav className="fixed top-0 left-0 w-full px-4 sm:px-6 py-4 backdrop-blur-lg text-gris/60 flex justify-between items-center z-50 text-xs 2xl:text-xl">
        {/* Navigation Desktop */}
        <div className="hidden sm:flex flex-col">
          <p className="mb-2">{t("header.quickLink")}</p>
          <ul className="flex">
            {navigation.map(({ href, label }) => (
              <li key={href} className="group relative mr-3">
                <Link
                  href={href}
                  className={`group relative py-1 transition-colors ${
                    pathname === href ? "text-white" : "text-gris/60"
                  }`}
                >
                  <span className="relative z-10 group-hover:text-black">
                    {label}
                  </span>
                  <span className="absolute left-0 bottom-0 w-0 h-full bg-white transition-all duration-700 ease-in-out group-hover:w-full"></span>
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
              pathname === "/" ? "text-white" : "text-gris/60"
            }`}
          >
            Paul Roy
          </Link>
        </div>

        {/* Right Side */}
        <div className="hidden sm:flex flex-col items-end">
          <div className="flex items-center mb-2">
            <span className="size-1 2xl:size-2 bg-green-500 mr-2"></span>
            <p>{t("header.dispo")}</p>
          </div>

          <div className="flex items-center gap-4">
            {/* Button Lang Switch */}
            <button
              onClick={toggleLanguage}
              className="hover:text-gris/60 transition-colors"
            >
              {lang.toUpperCase()}
            </button>

            {/* Idea Link */}
            <Link
              href="/idea"
              className={`group relative transition-colors ${
                pathname === "/idea" ? "text-white" : "text-gris/60"
              }`}
            >
              <span className="relative z-10 group-hover:text-black">
                {t("header.idea")}
              </span>
              <span className="absolute left-0 bottom-0 w-0 h-full bg-white transition-all duration-700 ease-in-out group-hover:w-full"></span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden ml-auto">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gris/60 hover:text-white transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-0 bg-grismobile z-40 flex flex-col p-4 sm:hidden">
          {/* Header */}
          <div className=" justify-between items-center mb-8">
            <div className="flex flex-col">
              <span className="text-gris/60">{t("header.greeting")}</span>
              <span className="text-white">Paul Roy</span>
            </div>          
          </div>

          {/* Navigation Links */}
          <div className="space-y-6">
            {navigation.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`flex items-center text-lg font-mono transition-colors ${
                  pathname === href ? "text-white" : "text-gray-400"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 mr-2 md:hidden"
                  viewBox="0 0 13 12"
                  fill="none"
                  preserveAspectRatio="xMidYMid meet"
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
                {label}
              </Link>
            ))} 
            <Link
              href="/idea"
              className="flex items-center text-lg font-mono text-gray-400 transition-colors sm:hidden"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 mr-2 md:hidden"
                  viewBox="0 0 13 12"
                  fill="none"
                  preserveAspectRatio="xMidYMid meet"
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
              {t("header.idea")}
            </Link>
          </div>

          {/* Social Links */}
          <div className="mt-auto mb-4 flex flex-wrap gap-x-4 gap-y-2 text-xs">
            {socialLinks.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="text-gris/60 hover:text-white transition-colors"
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
