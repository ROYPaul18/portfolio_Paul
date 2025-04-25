"use client";
import React from "react";
import Header from "@/app/ui/header";
import Footer from "@/app/ui/footer";
import { useTranslation } from "next-i18next";

const PrivacyPolicyPage = () => {
  const { t } = useTranslation("common");

  return (
    <div className="bg-deepblue">
      <Header />
      <div className="flex-col text-blanc mt-20 pb-8 px-4 pt-8 2xl:px-12 md:pt-16 2xl:pt-24 md:pb-12">
        <div className="mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {t("privacy_policy.title")}
          </h1>
          <p className="text-sm mb-6">{t("privacy_policy.lastUpdate")}</p>

          {/* Introduction */}
          <div className="mb-8">
            <p className="font-semibold">{t("privacy_policy.intro.responsible")}</p>
            <p className="mt-2">{t("privacy_policy.intro.text")}</p>
          </div>

          {/* Données collectées */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{t("privacy_policy.dataCollected.title")}</h2>
            
            {/* Via le formulaire */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">{t("privacy_policy.dataCollected.form.title")}</h3>
              <p>{t("privacy_policy.dataCollected.form.text")}</p>
              <ul className="list-disc pl-6 mt-2">
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <li key={index} className="mt-1">
                    {t(`privacy_policy.dataCollected.form.fields.${index}`)}
                  </li>
                ))}
              </ul>
              <p className="mt-3">{t("privacy_policy.dataCollected.form.usage")}</p>
            </div>

            {/* Données de navigation */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">{t("privacy_policy.dataCollected.analytics.title")}</h3>
              <p>{t("privacy_policy.dataCollected.analytics.text")}</p>
              <ul className="list-disc pl-6 mt-2">
                {[0, 1, 2, 3, 4].map((index) => (
                  <li key={index} className="mt-1">
                    {t(`privacy_policy.dataCollected.analytics.items.${index}`)}
                  </li>
                ))}
              </ul>
              <p className="mt-3">{t("privacy_policy.dataCollected.analytics.usage")}</p>
            </div>
          </div>

          {/* Utilisation des données */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{t("privacy_policy.usage.title")}</h2>
            <ul className="list-disc pl-6">
              {[0, 1, 2].map((index) => (
                <li key={index} className="mt-1">
                  {t(`privacy_policy.usage.list.${index}`)}
                </li>
              ))}
            </ul>
          </div>

          {/* Hébergement et sous-traitants */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{t("privacy_policy.hosting.title")}</h2>
            <p>{t("privacy_policy.hosting.text")}</p>
          </div>

          {/* Cookies */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{t("privacy_policy.cookies.title")}</h2>
            <p>{t("privacy_policy.cookies.text")}</p>
          </div>

          {/* Conservation des données */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{t("privacy_policy.retention.title")}</h2>
            <p>{t("privacy_policy.retention.text")}</p>
          </div>

          {/* Vos droits */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{t("privacy_policy.rights.title")}</h2>
            <p>{t("privacy_policy.rights.text")}</p>
            <ul className="list-disc pl-6 mt-2">
              {[0, 1, 2, 3, 4].map((index) => (
                <li key={index} className="mt-1">
                  {t(`privacy_policy.rights.list.${index}`)}
                </li>
              ))}
            </ul>
            <p className="mt-3">{t("privacy_policy.rights.contact").replace("{{email}}", "contact@example.com")}</p>
          </div>

          {/* Contact */}
          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-4">{t("privacy_policy.contact.title")}</h2>
            <p>{t("privacy_policy.contact.text").replace("{{email}}", "roypaul.18.pro@gmail.com")}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;