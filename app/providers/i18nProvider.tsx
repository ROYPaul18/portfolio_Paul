"use client";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    lng: "fr",
    fallbackLng: "fr",
    ns: ["common"],
    defaultNS: "common",
  
    interpolation: {
      escapeValue: false,
    },
    debug: true,
    react: {
      useSuspense: false, 
    }, 
  });

export function I18nProvider({ children }: { children: React.ReactNode }) {
  
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
