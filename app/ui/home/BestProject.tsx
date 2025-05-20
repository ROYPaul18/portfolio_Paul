"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BestProject = () => {
  const { t } = useTranslation("common");
  const projectsRef = useRef<HTMLDivElement[]>([]);
  const containerRef = useRef(null);

  useEffect(() => {
    // Project cards animation
    projectsRef.current.forEach((project, index) => {
      if (!project) return;

      gsap.fromTo(
        project,
        { y: index % 2 === 0 ? -50 : 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: project,
            start: "top bottom-=100",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });
  }, []);

  const projects = [
    {
      slug: t("best_project.project_1_slug"),
      name: t("best_project.project_1_name"),
      type: t("best_project.project_1_type"),
      description: t("best_project.project_1_description"),
      image: "/img/projects/beaudy-ink.png",
    },
    {
      slug: t("best_project.project_2_slug"),
      name: t("best_project.project_2_name"),
      type: t("best_project.project_2_type"),
      description: t("best_project.project_2_description"),
      image: "/img/projects/devoteam.png",
    },
    {
      slug: t("best_project.project_3_slug"),
      name: t("best_project.project_3_name"),
      type: t("best_project.project_3_type"),
      description: t("best_project.project_3_description"),
      image: "/img/projects/Link.png",
    },
  ];

  return (
    <section ref={containerRef} className="relative w-full py-12">
      <div className="p-4 sm:p-6 md:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Link key={index} href={`/projects/${project.slug}`} passHref>
              <div
                ref={(el) => {
                  if (el) projectsRef.current[index] = el;
                }}
                className="relative bg-grisbleu p-4 sm:p-4 flex flex-col h-full transition-transform"
              >
                <p className="text-xs sm:text-xs 2xl:text-2xl text-gris/60 mb-3 sm:mb-4 px-4">
                  {project.type}
                </p>
                <div className="aspect-[4/3] w-full mb-4 sm:mb-8 p-2">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="px-4">
                  <h3 className="text-lg lg:text-base xl:text-xl 2xl:text-4xl font-medium text-white mb-3 sm:mb-2">
                    {project.name}
                  </h3>
                  <p className="text-sm lg:text-sm 2xl:text-2xl text-gris/80 leading-none">
                    {project.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestProject;
