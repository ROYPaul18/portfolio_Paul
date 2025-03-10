"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Header from "@/app/ui/header";
import Footer from "@/app/ui/footer";
import { useTranslation } from "next-i18next";
import { useParams } from "next/navigation";

type Project = {
  type: string;
  name: string;
  techno: string[];
  fonctionnalites: string[];
  description: string;
  image: string;
} | null;


const ProjectPage = () => {
  const { slug } = useParams();
  const { t } = useTranslation("common");
  const [project, setProject] = useState<Project>(null);

  useEffect(() => {
    // Dynamically find the project based on the slug from the URL
    const projectsData = {
      "beaudy-ink": {
        type: t("best_project.project_1_type"),
        name: t("best_project.project_1_name"),
        techno: t("best_project.project_1_techno", { returnObjects: true }) as string[],
        fonctionnalites: t("best_project.project_1_fonctionnalitées", { returnObjects: true }) as string[],
        description: t("best_project.project_1_description"),
        image: "/img/projects/beaudy-ink.png"
      },
      "dashboard-devoteam": {
        type: t("best_project.project_2_type"),
        name: t("best_project.project_2_name"),
        techno: t("best_project.project_2_techno", { returnObjects: true }) as string[],
        fonctionnalites: t("best_project.project_2_fonctionnalitées", { returnObjects: true }) as string[],
        description: t("best_project.project_2_description"),
        image: "/img/projects/devoteam.png"
      },
      "imvizar": {
        type: t("best_project.project_3_type"),
        name: t("best_project.project_3_name"),
        techno: t("best_project.project_3_techno", { returnObjects: true }) as string[],
        fonctionnalites: t("best_project.project_3_fonctionnalitées", { returnObjects: true }) as string[],
        description: t("best_project.project_3_description"),
        image: "/img/projects/devoteam.png"
      }
    };
    

    // Set the current project based on the slug
    if (slug && typeof slug === 'string' && projectsData[slug as keyof typeof projectsData]) {
      setProject(projectsData[slug as keyof typeof projectsData]);
    }
  }, [slug, t]);

  if (!project) {
    return (
      <div className="min-h-screen bg-deepblue text-white flex items-center justify-center">
        <Header />
        <p>Projet non trouvé</p>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-deepblue text-white">
      <Header />

      {/* Header Section */}
      <section className="container mx-auto px-8 py-8 mt-24 mb-4">
        <h1 className="text-5xl font-bold">{project.name}</h1>
        <p className="text-gray-400 text-lg">
          Produit: <span className="text-white"> {project.type} </span>
        </p>
      </section>

      {/* Main Image - Full Width */}
      <div className="w-screen h-[600px] relative">
        <Image
          src={project.image}
          alt={`${project.name} Project`}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Project Details */}
      <section className="text-white py-16">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row gap-16">
            {/* Left Column - Description and Images */}
            <div className="flex-1">
              {/* Description */}
              <div className="flex mb-16">
                <h2 className="text-lg font-normal text-gray-400 mb-4 mr-12 w-32">
                  Description :
                </h2>
                <div className="flex-col">
                  <p className="text-white mb-6 text-base">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Images */}
              <div className="space-y-8">
                <div className="w-full h-96 relative rounded overflow-hidden">
                  <Image 
                    src={project.image}
                    alt={`${project.name} Preview 1`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-full h-96 relative rounded overflow-hidden">
                  <Image 
                    src={project.image}
                    alt={`${project.name} Preview 2`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Technical Details */}
            <div className="md:w-1/3">
              <div className="space-y-12">
                <div>
                  <h2 className="text-lg xl:text-base font-normal text-gray-400 mb-4">
                    Langage :
                  </h2>
                  <ul className="space-y-1 text-white">
                    {Array.isArray(project.techno) && project.techno.map((tech: string, index: number) => (
                      <li key={index} className="text-base">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-lg font-normal text-gray-400 mb-4">
                    Fonctionnalités :
                  </h2>
                  <ul className="space-y-1 text-white">
                    {Array.isArray(project.fonctionnalites) && project.fonctionnalites.map(
                      (feature: string, index: number) => (
                        <li key={index} className="text-base">
                          {feature}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectPage;