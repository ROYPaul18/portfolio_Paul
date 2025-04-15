'use client'
import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { gsap } from "gsap";

const Header: React.FC = () => {
  const { t, i18n } = useTranslation("common", { useSuspense: false });
  const pathname = usePathname();
  const [isLoaded, setIsLoaded] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState(i18n.language || "fr");
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const linkRefs = useRef<(HTMLAnchorElement | HTMLButtonElement | null)[]>([]);
  const mobileMenuBgRef = useRef<HTMLDivElement | null>(null);

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
    { href: "/idea", label: t("header.idea") },
  ];

  const socialLinks = [
    { href: "/", label: "LinkedIn" },
    { href: "/", label: "Twitter / X" },
    { href: "/", label: "Instagram" },
    { href: "/", label: "Facebook" },
  ];

  // Effet GSAP pour l'animation des titres et liens
  useEffect(() => {
    if (isLoaded) {
      gsap.fromTo(
        titleRefs.current,
        { y: "-100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 1.5, stagger: 0.2, ease: "power3.out" }
      );

      gsap.fromTo(
        linkRefs.current,
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 1.5, stagger: 0.2, ease: "power3.out" }
      );
    }
  }, [isLoaded]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Animation du background lors de l'ouverture/fermeture du menu mobile
  useEffect(() => {
    if (mobileMenuOpen && mobileMenuBgRef.current) {
      gsap.to(mobileMenuBgRef.current, { height: "100%", duration: 0.5, ease: "power3.out" });
    } else if (mobileMenuBgRef.current) {
      gsap.to(mobileMenuBgRef.current, { height: "0%", duration: 0.5, ease: "power3.in" });
    }
  }, [mobileMenuOpen]);

  if (!isLoaded) return null;

  
  return (
    <>
      {/* Navbar Desktop & Mobile */}
      <nav className="fixed top-0 left-0 w-full px-4 sm:px-6 py-4 backdrop-blur-lg text-gris/60 flex justify-between items-center z-50 text-xs 2xl:text-xl">
        {/* Navigation Desktop */}
        <div className="hidden sm:flex flex-col">
          <p className="mb-2">{t("header.quickLink")}</p>
          <ul className="flex">
            {navigation.map(({ href, label }, index) => (
              <li key={href} className="group relative mr-3">
                <Link
                  ref={(el) => {
                    if (el) linkRefs.current[index] = el;
                  }}
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
            ref={(el) => {
              if (el) linkRefs.current[0] = el;
            }}
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
              ref={(el) => {
                if (el) linkRefs.current[2] = el;
              }}
              onClick={toggleLanguage}
              className="hover:text-gris/60 transition-colors"
            >
              {lang.toUpperCase()}
            </button>

            {/* Idea Link */}
            <Link
              ref={(el) => {
                if (el) linkRefs.current[3] = el;
              }}
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
        <div
          ref={mobileMenuBgRef}
          className="fixed inset-0 top-0 bg-grismobile z-40 flex flex-col p-4 sm:hidden overflow-hidden"
        >
          {/* Header */}
          <div className="justify-between items-center mb-8">
            <div className="flex flex-col">
              <span className="text-gris/60">{t("header.greeting")}</span>
              <span className="text-white">Paul Roy</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6 flex-grow">
            {navigation.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`flex items-center text-lg font-mono transition-colors ${
                  pathname === href ? "text-white" : "text-gris/60"
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
                </svg>
                {label}
              </Link>
            ))}
          </div>

          {/* Social Links - Ajoutés en bas du menu mobile */}
          <div className="mt-auto pt-8 border-t border-gris/20">
            <div className="flex justify-center gap-4">
              {socialLinks.map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-gris/60 hover:text-white transition-colors text-sm flex items-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  
                  {label}
                </Link>
                
              ))}
               <button
                onClick={() => {
                  toggleLanguage();
                }}
                className="text-gris/60 hover:text-white transition-colors text-sm"
              >
                {lang.toUpperCase()}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;