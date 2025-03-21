"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
const Idea = () => {
  const { t } = useTranslation("common");

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);
  const [selectedPages, setSelectedPages] = useState<string | null>(null);
  const [selectedDelay, setSelectedDelay] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    projectDetails: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const requestData = {
      ...formData,
      category: selectedCategory || "",
      budget: selectedBudget || "",
      pages: selectedPages || "",
      delay: selectedDelay || "",
    };

    console.log("Données envoyées :", JSON.stringify(requestData, null, 2));

    try {
      const res = await fetch("/api/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
      });

      if (!res.ok) throw new Error("Erreur API");

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        website: "",
        projectDetails: "",
      });
      setSelectedCategory(null);
      setSelectedBudget(null);
      setSelectedPages(null);
      setSelectedDelay(null);

      setTimeout(() => setSuccess(false), 3000);
    } catch {
      setError("Erreur d'envoi");
    } finally {
      setLoading(false);
    }
  };

  const getButtonClass = (selected: string | null, item: string): string => {
    return selected === null || selected === item
      ? "text-blanc"
      : "text-gris/60";
  };

  return (
    <section className="text-white mt-20 px-4 2xl:px-8 sm:flex-col flex">
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12">
        <div className="flex flex-col justify-between lg:fixed top-12 2xl:top-24 mt-12 w-1/2">
          <h1 className="text-2xl md:text-3xl lg:text-5xl 2xl:text-8xl font-medium">
            {t("idea.contact")}
          </h1>
          <div className="mt-12 text-base md:text-lg 2xl:text-3xl flex flex-col">
            <Link
              href="mailto:roypaul.18.pr@gmail.com"
              className="group relative text-sm md:text-base 2xl:text-2xl inline-flex items-center transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 md:size-6 mr-2 group-hover:text-black relative z-10"
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
              <span className="relative z-10 group-hover:text-black">
                roypaul.18.pr@gmail.com
              </span>
              <span className="block absolute left-0 bottom-0 w-0 h-full bg-white transition-all duration-700 ease-in-out group-hover:w-full"></span>
            </Link>
            <p className="group relative text-sm md:text-base 2xl:text-2xl inline-flex items-center transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 md:size-6 mr-2 group-hover:text-black relative z-10"
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
              <span className="relative z-10 group-hover:text-black">
                07 82 68 10 39
              </span>
              <span className="block absolute left-0 bottom-0 w-0 h-full bg-white transition-all duration-700 ease-in-out group-hover:w-full"></span>
            </p>
          </div>
        </div>

        <div className="py-44 col-start-2">
          <h2 className="text-xl 2xl:text-4xl font-medium border-b border-blanc pb-4 mb-2 2xl:mb-12">
            {t("idea.details")}
          </h2>

        <p>
          <a href="text-blanc">aa</a>
        </p>
          <form onSubmit={handleSubmit}>
            <p className="text-gris/60 mt-6 text-base 2xl:text-2xl">
              {" "}
              {t("idea.q_help")}{" "}
            </p>
            <div className="flex space-x-4 mt-2">
              {["Site Vitrine", "Application Web", "Autre"].map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`text-xs 2xl:text-2xl transition ${getButtonClass(
                    selectedCategory,
                    item
                  )}`}
                  onClick={() => setSelectedCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <p className="text-gris/60 mt-6 text-base 2xl:text-2xl">
              {t("idea.q_budget")}{" "}
            </p>
            <div className="flex space-x-4 mt-2">
              {["<1500€", "1500€-3000€", "3000€-5000€", "+5000€"].map(
                (item) => (
                  <button
                    key={item}
                    type="button"
                    className={`text-xs 2xl:text-2xl transition ${getButtonClass(
                      selectedBudget,
                      item
                    )}`}
                    onClick={() => setSelectedBudget(item)}
                  >
                    {item}
                  </button>
                )
              )}
            </div>

            <p className="text-gris/60 mt-6 2xl:text-2xl">{t("idea.pages")}</p>
            <div className="flex space-x-4 mt-2">
              {["1-3", "3-6", "6-10", "10+"].map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`text-xs 2xl:text-2xl transition ${getButtonClass(
                    selectedPages,
                    item
                  )}`}
                  onClick={() => setSelectedPages(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <p className="text-gris/60 mt-6 2xl:text-2xl">
              {t("idea.q_delay")}
            </p>
            <div className="flex space-x-4 mt-2">
              {["<1 mois", "1-3 mois", "3-6 mois", "+6 mois"].map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`text-xs 2xl:text-2xl transition ${getButtonClass(
                    selectedDelay,
                    item
                  )}`}
                  onClick={() => setSelectedDelay(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <h2 className="text-xl 2xl:text-4xl font-medium border-b border-blanc pb-4 mt-24 mb-2 2xl:mb-12">
              {t("idea.your_info")}
            </h2>
            <div className="mt-4 space-y-2 2xl:space-y-12">
              {[
                { label: t("idea.name_entreprise"), key: "name" },
                { label: t("idea.your_email"), key: "email" },
                { label: t("idea.your_number"), key: "numbers" },
                { label: t("idea.company"), key: "company" },
                { label: t("idea.name_site"), key: "website" },
              ].map(({ label, key }) => (
                <input
                  key={key}
                  type="text"
                  placeholder={label}
                  className="w-full bg-deepblue text-blanc py-3 px-4 placeholder-gris/60 focus:outline-none text-sm 2xl:text-2xl border-b border-gris/60"
                  value={formData[key as keyof typeof formData]}
                  onChange={(e) =>
                    setFormData({ ...formData, [key]: e.target.value })
                  }
                />
              ))}
              <textarea
                placeholder={t("idea.project")}
                className="w-full bg-deepblue text-blanc py-2 px-4 placeholder-gris/60 focus:outline-none text-sm 2xl:text-2xl border-b border-gris/60 h-24 resize-none"
                value={formData.projectDetails}
                onChange={(e) =>
                  setFormData({ ...formData, projectDetails: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full bg-grisbleu text-white py-6 2xl:py-14 text-lg 2xl:text-4xl mt-6 transition disabled:opacity-50"
              disabled={loading}
            >
              {loading ? t("idea.sending") : t("idea.submit")}
            </button>
          </form>
        </div>
      </div>

      {success && (
        <div className="fixed bottom-5 right-5 bg-green-500 text-white px-4 py-2 rounded-lg">
          {t("idea.success")}
        </div>
      )}
      {error && (
        <div className="fixed bottom-5 right-5 bg-red-500 text-white px-4 py-2 rounded-lg">
          {t("idea.error")}
        </div>
      )}
    </section>
  );
};

export default Idea;
