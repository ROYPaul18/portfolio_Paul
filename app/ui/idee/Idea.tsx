'use client'
import React, { useState } from "react";

const Idea = () => {
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);
  const [selectedPages, setSelectedPages] = useState<string | null>(null);
  const [selectedDelay, setSelectedDelay] = useState<string | null>(null);

  return (
    <section className="text-white py-24 px-6">
      <div className="grid grid-cols-2 gap-16">
        {/* Section Gauche - Contact */}
        <div className="flex flex-col justify-between sticky top-0">
          <h1 className="text-5xl font-semibold">Contactez-moi</h1>

          <div className="mt-12 text-lg">
            <p className="text-gray-400">roypaul.18.pr@gmail.com</p>
            <p className="text-gray-400">+33 7 82 68 10 39</p>
          </div>
        </div>

        {/* Section Droite - Formulaire */}
        <div>
          <div className="flex">
            <p className="text-gray-400 text-lg leading-relaxed mb-24 mt-24">
              Je suis prêt à vous aider ! Que vous souhaitiez lancer un nouveau
              projet, améliorer votre site existant, demander un devis ou
              discuter d'une collaboration potentielle, n'hésitez pas à me
              contacter.
            </p>
          </div>
          <h2 className="text-2xl font-semibold border-b border-gray-600 pb-4">
            Les détails de ce projet
          </h2>

          {/* Catégorie */}
          <p className="text-gray-400 mt-6">Sur quoi je peux vous aider ?</p>
          <div className="flex space-x-4 mt-2">
            {["Site Vitrine", "Application Web", "Autre"].map((item) => (
              <button key={item} className="text-gray-600 text-xs transition">
                {item}
              </button>
            ))}
          </div>

          {/* Budget */}
          <p className="text-gray-400 mt-6">
            À combien estimez-vous votre budget (en Euros) ?
          </p>
          <div className="flex space-x-4 mt-2">
            {["<1500", "1500€-3000€", "3000€-5000€", "+5000€"].map((item) => (
              <button
                key={item}
                className={`text-xs transition ${
                  selectedBudget === item ? "text-blanc" : "text-gray-600"
                }`}
                onClick={() => setSelectedBudget(item)}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Nombre de pages */}
          <p className="text-gray-400 mt-6">Combien de pages ?</p>
          <div className="flex space-x-4 mt-2">
            {["1-3", "3-6", "6-10", "10+"].map((item) => (
              <button
                key={item}
                className={`text-xs transition ${
                  selectedPages === item ? "text-blanc" : "text-gray-600"
                }`}
                onClick={() => setSelectedPages(item)}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Délai */}
          <p className="text-gray-400 mt-6">Vous avez un délai de ...</p>
          <div className="flex space-x-4 mt-2">
            {["<1 mois", "1-3 mois", "3-6 mois", "+6 mois"].map((item) => (
              <button
                key={item}
                className={`text-xs transition ${
                  selectedDelay === item ? "text-blanc" : "text-gray-600"
                }`}
                onClick={() => setSelectedDelay(item)}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Informations personnelles */}
          <h2 className="text-2xl font-semibold border-b border-gray-600 pb-4 mt-10">
            Qui êtes-vous ?
          </h2>
          <div className="mt-6 space-y-4 border-b">
            {[
              "Votre nom",
              "Votre e-mail",
              "Nom de votre entreprise",
              "Adresse de votre site",
              "Parlez-moi de votre projet",
            ].map((placeholder) => (
              <input
                key={placeholder}
                type="text"
                placeholder={placeholder}
                className="w-full bg-deepblue text-white py-3 px-4 focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm border-b"
              />
            ))}
          </div>

          {/* Bouton de soumission */}
          <button className="w-full bg-grisbleu text-white py-6 text-lg mt-6 transition">
            Soumettre
          </button>
        </div>
      </div>
    </section>
  );
};

export default Idea;
