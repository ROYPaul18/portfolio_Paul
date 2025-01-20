"use client";
import React from "react";
import { useTranslation } from "next-i18next";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Moon, Sun, Menu, X } from "lucide-react";

type Locale = "fr" | "en";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = "" }) => {
  const pathname = usePathname();
  const params = useParams();
  const { t, i18n } = useTranslation("common");
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleLanguage = (): void => {
    const newLanguage = i18n.language === "fr" ? "en" : "fr";
    i18n.changeLanguage(newLanguage);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`relative px-4 py-4 md:py-6 bg-background dark:bg-background-dark ${className}`}>
      <div className="container mx-auto">
        {/* Mobile Header */}
        <div className="flex items-center justify-between md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 text-foreground dark:text-foreground-dark hover:bg-secondary/10 dark:hover:bg-secondary-dark/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <Link href="/" className="text-2xl font-semibold text-foreground dark:text-foreground-dark">
            Paul ROY
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-secondary/10 dark:hover:bg-secondary-dark/10 transition-colors"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-foreground dark:text-foreground-dark" />
              ) : (
                <Moon className="h-5 w-5 text-foreground dark:text-foreground-dark" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`
          fixed inset-0 bg-background dark:bg-background-dark z-50 transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          md:hidden
        `}>
          <div className="p-4 flex flex-col items-center justify-center h-full">
            <button
              onClick={closeMenu}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-secondary/10 dark:hover:bg-secondary-dark/10 transition-colors"
              aria-label="Close menu"
            >
              <X className="h-6 w-6 text-foreground dark:text-foreground-dark" />
            </button>
            
            <ul className="flex flex-col gap-8 items-center w-full">
              <li>
                <Link 
                  href="/services" 
                  className="text-2xl block py-2 text-center text-foreground dark:text-foreground-dark hover:text-primary dark:hover:text-primary-dark transition-colors"
                  onClick={closeMenu}
                >
                  {t("header.services")}
                </Link>
              </li>
              <li>
                <Link 
                  href="/projects" 
                  className="text-2xl block py-2 text-center text-foreground dark:text-foreground-dark hover:text-primary dark:hover:text-primary-dark transition-colors"
                  onClick={closeMenu}
                >
                  {t("header.projects")}
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-2xl block py-2 text-center text-foreground dark:text-foreground-dark hover:text-primary dark:hover:text-primary-dark transition-colors"
                  onClick={closeMenu}
                >
                  {t("header.about")}
                </Link>
              </li>
              <li>
                <Link 
                  href="/idea" 
                  className="text-xl bg-primary dark:bg-primary-dark text-background dark:text-background-dark rounded-md px-6 py-3 inline-block hover:opacity-90 transition-opacity"
                  onClick={closeMenu}
                >
                  {t("header.idea")}
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    toggleLanguage();
                    closeMenu();
                  }}
                  className="text-2xl py-2 text-foreground dark:text-foreground-dark hover:text-primary dark:hover:text-primary-dark transition-colors"
                >
                  {i18n.language.toUpperCase()}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Desktop Header - Unchanged */}
        <div className="hidden md:flex justify-between items-center relative">
          <ul className="flex gap-10 flex-1">
            <li>
              <Link 
                href="/services" 
                className="text-lg relative group text-foreground dark:text-foreground-dark hover:text-primary dark:hover:text-primary-dark transition-colors"
              >
                <span className="relative inline-block">
                  {t("header.services")}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary dark:bg-primary-dark transition-all duration-300 ease-in-out group-hover:w-full" />
                </span>
              </Link>
            </li>
            <li>
              <Link 
                href="/projects" 
                className="text-lg relative group text-foreground dark:text-foreground-dark hover:text-primary dark:hover:text-primary-dark transition-colors"
              >
                <span className="relative inline-block">
                  {t("header.projects")}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary dark:bg-primary-dark transition-all duration-300 ease-in-out group-hover:w-full" />
                </span>
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className="text-lg relative group text-foreground dark:text-foreground-dark hover:text-primary dark:hover:text-primary-dark transition-colors"
              >
                <span className="relative inline-block">
                  {t("header.about")}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary dark:bg-primary-dark transition-all duration-300 ease-in-out group-hover:w-full" />
                </span>
              </Link>
            </li>
          </ul>

          <h1 className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="text-6xl font-semibold text-foreground dark:text-foreground-dark hover:text-primary dark:hover:text-primary-dark transition-colors">
              Paul ROY
            </Link>
          </h1>

          <ul className="flex gap-10 items-center flex-1 justify-end">
            <li>
              <Link 
                href="/idea" 
                className="text-base bg-primary dark:bg-primary-dark text-background dark:text-background-dark rounded-md px-4 py-2 hover:opacity-90 transition-opacity"
              >
                {t("header.idea")}
              </Link>
            </li>
            <li>
              <button
                onClick={toggleLanguage}
                className="text-xl text-foreground dark:text-foreground-dark hover:text-primary dark:hover:text-primary-dark transition-colors"
                aria-label={t("header.language")}
              >
                {i18n.language.toUpperCase()}
              </button>
            </li>
            <li>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg hover:bg-secondary/10 dark:hover:bg-secondary-dark/10 transition-colors"
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5 text-foreground dark:text-foreground-dark" />
                ) : (
                  <Moon className="h-5 w-5 text-foreground dark:text-foreground-dark" />
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;