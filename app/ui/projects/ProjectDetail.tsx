"use client";
import { projects } from "@/utils/project";
import Link from "next/link";

interface Project {
  name: string;
  type: string;
  category: string;
  year: number;
  slug: string;
  langage?: string[];
  fonctionnalité?: string[];
  description?: string;
  img?: string[];
}

interface ProjectDetailProps {
  slug: string;
}

export default function ProjectDetail({ slug }: ProjectDetailProps) {
  const project = projects.find((proj) => proj.slug === slug);

  if (!project) {
    return (
      <div className="text-center text-gray-500 text-xl py-20">
        Projet non trouvé
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen px-10 md:px-20 py-44  flex flex-col justify-between">
      {/* Titre et description du projet */}
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <h1 className="text-4xl font-medium text-black">{project.name}</h1>
          <p className="text-lg text-gray-500 mt-2">
            {project.type} • {project.category} • {project.year}
          </p>
        </div>
      </div>

      {/* Détails du projet */}
      <div className="mt-16 flex flex-col md:flex-row justify-around gap-10 ">
        {project.description && (
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold text-deepblue">À propos</h2>
            <p className="text-gray-600 mt-2">{project.description}</p>
          </div>
        )}

        <div className="md:w-1/2">
          {project.langage && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-deepblue">
                Technologies utilisées :
              </h2>
              <ul className="text-gray-600 mt-2">
                {project.langage.map((lang, index) => (
                  <li key={index} className="mt-1">
                    {lang}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.fonctionnalité && (
            <div>
              <h2 className="text-xl font-semibold text-deepblue">
                Fonctionnalités :
              </h2>
              <ul className="text-gray-600 mt-2">
                {project.fonctionnalité.map((fonc, index) => (
                  <li key={index} className="mt-1">
                    {fonc}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Lien de retour */}
      <div className="mt-20 text-center">
        <Link href={"/projects"} className="text-deepblue hover:underline">
          ← Tous mes projets
        </Link>
      </div>
    </div>
  );
}
