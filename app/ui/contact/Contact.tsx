"use client";
import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <section className=" text-white py-24 px-6">
      <div className="">
        {/* Titre */}
        <h1 className="text-3xl md:text-4xl font-semibold mb-24">
          À propos — Je suis Paul, un développeur Web freelance, dédié à aider
          les entreprises à libérer leur potentiel de croissance. L les entreprises à libérer leur potentiel de croissance.
        </h1>
        <div className="flex mb-24">
          <div className="w-1/2"></div>
          <div className="w-1/2">
            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed max-w-3xl">
              Depuis mes années de lycée, je suis passionné par le développement
              web, et aujourd’hui, je me spécialise dans la création
              d’expériences web sur mesure adaptées aux besoins de chaque
              client. Ce qui m’anime, c’est de proposer les meilleures solutions
              digitales aux entreprises en combinant créativité et expertise
              technique.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed max-w-3xl mt-4">
              Depuis que j’ai commencé mon activité de freelance il y a trois
              mois, j’ai eu l’opportunité de collaborer avec deux clients
              professionnels, en les accompagnant dans la réalisation de leurs
              projets numériques. Mon objectif est d’aider les entreprises à
              atteindre leurs ambitions grâce à des solutions personnalisées et
              efficaces. À travers chaque projet, je cherche à dépasser les
              attentes et à créer un impact durable.
            </p>
            <div className="flex justify-start mt-10 space-x-12 text-lg">
              <Link
                href="/work"
                className="text-white hover:opacity-80 transition-opacity"
              >
                Mon travail
              </Link>
              <Link
                href="/idea"
                className="text-white hover:opacity-80 transition-opacity"
              >
                Une idée ?
              </Link>
              <Link
                href="/idea"
                className="text-white hover:opacity-80 transition-opacity"
              >
                Mon CV
              </Link>
            </div>
          </div>
        </div>

        {/* Liens */}

        {/* Statistiques */}
        <div className="grid grid-cols-4 gap-6 mt-16">
          {[
            { number: "2", label: "Projets Réalisés" },
            { number: "2", label: "Clients" },
            { number: "3 mois", label: "De Freelancing" },
            { number: "2 ans", label: "Expériences" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-grisbleu p-10  flex flex-col justify-center items-start"
            >
              <h2 className="text-5xl font-bold mb-16">{item.number}</h2>
              <p className="text-gray-400 text-lg mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
