"use client";

import { useState, useEffect } from 'react';
import i18n from 'i18next';
import { initReactI18next, I18nextProvider } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// Ensure only one initialization
const initializeI18n = () => {
  if (i18n.isInitialized) return Promise.resolve();

  return new Promise((resolve, reject) => {
    i18n
      .use(HttpBackend)
      .use(LanguageDetector)
      .use(initReactI18next)
      .init({
        fallbackLng: 'fr',
        lng: 'fr',
        ns: ['common'],
        defaultNS: 'common',
        backend: {
          loadPath: '/locales/{{lng}}/{{ns}}.json'
        },
        detection: {
          order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
          caches: ['localStorage', 'cookie']
        },
        interpolation: {
          escapeValue: false
        },
        debug: process.env.NODE_ENV === 'development',
        react: {
          useSuspense: false
        }
      }, (err) => {
        if (err) {
          console.error('i18next initialization error:', err);
          reject(err);
        } else {
          resolve(true);
        }
      });
  });
};

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const initialize = async () => {
      try {
        await initializeI18n();
        setIsReady(true);
      } catch (error) {
        console.error('Failed to initialize i18n:', error);
      }
    };

    initialize();
  }, []);

  // Render a loading state or null until i18n is initialized
  if (!isReady) {
    return <div>Loading translations...</div>;
  }

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}

export default i18n;