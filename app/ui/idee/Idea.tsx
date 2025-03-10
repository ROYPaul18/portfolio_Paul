"use client";

import React, { useState } from "react";
import Link from "next/link";

const Idea = () => {
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
    return selected === null || selected === item ? "text-blanc" : "text-gris/60";
  };

  return (
    <section className="text-white mt-20 px-4 2xl:px-8">
      <div className="grid grid-cols-2">
        <div className="flex flex-col justify-between fixed top-12 mt-12 w-1/4">
          <h1 className="text-5xl font-medium">Contactez-moi</h1>
          <div className="mt-12 text-lg">
            <Link
              href="/services/site-vitrine"
              className="group relative inline-flex items-center gap-2 mt-4 md:mt-6 text-lg md:text-base 2xl:text-2xl py-1 transition-colors"
            >
              <span className="relative z-10 group-hover:text-black">
                roypaul.18.pr@gmail.com
              </span>
            </Link>
            <Link
              href="/services/site-vitrine"
              className="group relative inline-flex items-center gap-2 mt-4 md:mt-6 text-lg md:text-base 2xl:text-2xl py-1 transition-colors"
            >
              <span className="relative z-10 group-hover:text-black">
                07 82 68 10 39
              </span>
            </Link>
          </div>
        </div>

        <div className="mt-16 col-start-2">
          <h2 className="text-xl 2xl:text-4xl font-medium border-b border-blanc pb-4 mb-2 2xl:mb-12">
            Les détails de ce projet
          </h2>

          <form onSubmit={handleSubmit}>
            <p className="text-gris/60 mt-6 text-base 2xl:text-2xl">Sur quoi puis-je vous aider ?</p>
            <div className="flex space-x-4 mt-2">
              {["Site Vitrine", "Application Web", "Autre"].map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`text-xs 2xl:text-2xl transition ${getButtonClass(selectedCategory, item)}`}
                  onClick={() => setSelectedCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <p className="text-gris/60 mt-6 text-base 2xl:text-2xl">Quel est votre budget ?</p>
            <div className="flex space-x-4 mt-2">
              {["<1500€", "1500€-3000€", "3000€-5000€", "+5000€"].map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`text-xs 2xl:text-2xl transition ${getButtonClass(selectedBudget, item)}`}
                  onClick={() => setSelectedBudget(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <p className="text-gris/60 mt-6 2xl:text-2xl">Nombre de pages ?</p>
            <div className="flex space-x-4 mt-2">
              {["1-3", "3-6", "6-10", "10+"].map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`text-xs 2xl:text-2xl transition ${getButtonClass(selectedPages, item)}`}
                  onClick={() => setSelectedPages(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <p className="text-gris/60 mt-6 2xl:text-2xl">Délai ?</p>
            <div className="flex space-x-4 mt-2">
              {["<1 mois", "1-3 mois", "3-6 mois", "+6 mois"].map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`text-xs 2xl:text-2xl transition ${getButtonClass(selectedDelay, item)}`}
                  onClick={() => setSelectedDelay(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <h2 className="text-xl 2xl:text-4xl font-medium border-b border-blanc pb-4 mt-24 mb-2 2xl:mb-12">
              Vos informations
            </h2>
            <div className="mt-4 space-y-2 2xl:space-y-12 border-b">
              {[
                { label: "Votre nom", key: "name" },
                { label: "Votre e-mail", key: "email" },
                { label: "Nom de votre entreprise", key: "company" },
                { label: "Adresse de votre site", key: "website" },
                { label: "Parlez-moi de votre projet", key: "projectDetails" },
              ].map(({ label, key }) => (
                <input
                  key={key}
                  type="text"
                  placeholder={label}
                  className="w-full bg-deepblue text-white py-3 px-4 focus:outline-none text-sm 2xl:text-2xl border-b border-gris/60"
                  value={formData[key as keyof typeof formData]}
                  onChange={(e) =>
                    setFormData({ ...formData, [key]: e.target.value })
                  }
                />
              ))}
            </div>

            <button
              type="submit"
              className="w-full bg-grisbleu text-white py-6 2xl:py-14 text-lg 2xl:text-4xl mt-6 transition disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Envoi en cours..." : "Soumettre"}
            </button>
          </form>
        </div>
      </div>

      {success && <div className="fixed bottom-5 right-5 bg-green-500 text-white px-4 py-2 rounded-lg">Demande envoyée avec succès !</div>}
      {error && <div className="fixed bottom-5 right-5 bg-red-500 text-white px-4 py-2 rounded-lg">{error}</div>}
    </section>
  );
};

export default Idea;
