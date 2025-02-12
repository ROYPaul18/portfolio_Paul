"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const BestProject = () => {
  const { t } = useTranslation("common");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section className="relative w-full">
      <div className="py-12">
        <div className="mx-auto">
          <div className="flex justify-between items-start gap-20">
            <div className="w-1/2">
              <h2 className="text-4xl md:text-4xl font-bold text-white">
                See my Projects That
              </h2>
              <h2 className="text-4xl md:text-4xl font-bold text-white">
                Impress Both Clients and
              </h2>
              <h2 className="text-4xl md:text-4xl font-bold text-white">
                Customers.
              </h2>
            </div>
            
            <p className="text-lg text-gray-500 leading-relaxed w-1/2 pt-44 mb-24">
              My projects showcases the exceptional work that I have delivered. Have a look into my portfolio, highlighting the diverse range of web design and Webflow development projects for various industries.
            </p>
          </div>
        </div>
      </div>

      <div className="p-20">
        <div className="grid grid-cols-3 gap-8">
          {/* Premier projet */}
          <div 
            className={`relative transition-opacity duration-300 ${
              hoveredProject && hoveredProject !== 1 ? 'opacity-30' : 'opacity-100'
            }`}
            onMouseEnter={() => setHoveredProject(1)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="bg-grisbleu p-6 flex flex-col h-full">
              <p className="text-xs text-blanc mb-4">Webflow Development</p>
              <div className="aspect-[4/3] w-full mb-6">
                <Image
                  src="/img/projects/beaudy-ink.png"
                  alt={t('project_home_1.name')}
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-medium text-white mb-4">The Bang</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                The product design & branding studio. Founded by designers, The Bang is an award winning design studio housing unmatched talent.
              </p>
            </div>
          </div>

          {/* Deuxième projet */}
          <div 
            className={`relative transition-opacity duration-300 ${
              hoveredProject && hoveredProject !== 2 ? 'opacity-30' : 'opacity-100'
            }`}
            onMouseEnter={() => setHoveredProject(2)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="bg-grisbleu p-6 flex flex-col h-full">
              <p className="text-xs text-blanc mb-4">Webflow Development, Web Design, Branding</p>
              <div className="aspect-[4/3] w-full mb-6">
                <Image
                  src="/img/projects/devoteam.png"
                  alt={t('project_home_2.name')}
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-medium text-white mb-4">The AID Studio</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Aid Studio, xsd in Romania, operates as an interior design and architecture studio. They specialise in creating unique and practical living and working spaces.
              </p>
            </div>
          </div>

          {/* Troisième projet */}
          <div 
            className={`relative transition-opacity duration-300 ${
              hoveredProject && hoveredProject !== 3 ? 'opacity-30' : 'opacity-100'
            }`}
            onMouseEnter={() => setHoveredProject(3)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="bg-grisbleu p-6 flex flex-col h-full">
              <p className="text-xs text-blanc mb-4">Webflow Development</p>
              <div className="aspect-[4/3] w-full mb-6">
                <Image
                  src="/img/projects/devoteam.png"
                  alt="Imvizar"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-medium text-white mb-4">Imvizar</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Immersive storytelling experiences utilising augmented reality. Blending technology with storytelling for unforgettable journeys that captivate and engage audiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestProject;
