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
  images: string[];
  link: string;
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
        techno: t("best_project.project_1_techno", {
          returnObjects: true,
        }) as string[],
        fonctionnalites: t("best_project.project_1_fonctionnalitées", {
          returnObjects: true,
        }) as string[],
        description: t("best_project.project_1_description"),
        image: "/img/projects/beaudy-ink.webp",
        images: [
          "/img/projects/beady-ink2.webp",
          "/img/projects/beaudy-ink3.webp",
          "/img/projects/beaudy-ink4.webp",
        ],
        link: "https://beaudy-ink.com",
      },
      "dashboard-devoteam": {
        type: t("best_project.project_2_type"),
        name: t("best_project.project_2_name"),
        techno: t("best_project.project_2_techno", {
          returnObjects: true,
        }) as string[],
        fonctionnalites: t("best_project.project_2_fonctionnalitées", {
          returnObjects: true,
        }) as string[],
        description: t("best_project.project_2_description"),
        image: "/img/projects/devoteam.png",
        images: ["/img/projects/devoteam5.webp", "/img/projects/devoteam4.webp", "/img/projects/devoteam3.webp"],
        link: "",
      },
    };

    // Set the current project based on the slug
    if (
      slug &&
      typeof slug === "string" &&
      projectsData[slug as keyof typeof projectsData]
    ) {
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
        <h1 className="text-4xl font-bold">{project.name}</h1>
        <p className="text-gris/60 text-lg">
          Produit: <span className="text-white"> {project.type} </span>
        </p>
      </section>

      {/* Main Image - Full Width */}
      <div className="w-screen h-[600px] 2xl:h-[1000px] relative">
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
              <div className="flex flex-col mb-16">
                <h2 className="text-lg 2xl:text-3xl font-normal text-gris/60 mb-4 mr-12 w-32">
                  Description
                </h2>
                <div className="">
                  <p className="text-white mb-6 text-base 2xl:text-2xl">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Images */}
              <div className="space-y-12">
                {project.images.map((imgSrc, index) => (
                  <div
                    key={index}
                    className="w-full h-[600px] relative overflow-hidden"
                  >
                    <Image
                      src={imgSrc}
                      alt={`${project.name} Preview ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Technical Details */}
            <div className="md:w-1/4">
              <div className="space-y-12">
                <div>
                  <h2 className="text-lg xl:text-base  2xl:text-3xl font-normal text-gris/60 mb-4">
                    Langage :
                  </h2>
                  <ul className="space-y-1 text-white">
                    {Array.isArray(project.techno) &&
                      project.techno.map((tech: string, index: number) => (
                        <li key={index} className="text-base 2xl:text-2xl">
                          {tech}
                        </li>
                      ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-lg 2xl:text-3xl font-normal text-gris/60 mb-4">
                    Fonctionnalités :
                  </h2>
                  <ul className="space-y-1 text-white">
                    {Array.isArray(project.fonctionnalites) &&
                      project.fonctionnalites.map(
                        (feature: string, index: number) => (
                          <li key={index} className="text-base 2xl:text-2xl">
                            {feature}
                          </li>
                        )
                      )}
                  </ul>
                </div>
                <div>
                  {project.link && (
                    <h2 className="text-base 2xl:text-2xl font-normal text-blanc mb-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blanc underline"
                      >
                        {project.link}
                      </a>
                    </h2>
                  )}
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
