"use client";
import { useState } from "react";
import Link from "next/link";
import { projects } from "../../../utils/project";

// interface Project {
//   name: string;
//   type: string;
//   category: string;
//   year: number;
//   slug: string;
// }

const ALL_CATEGORIES = "Toutes";
const categories = [
  "Site E-commerce",
  "Application Web",
  "Site vitrine",
  ALL_CATEGORIES,
];
const years = [2024, 2023];

export default function ProjectsTable() {
  const [selectedCategory, setSelectedCategory] =
    useState<string>("Application Web");
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === ALL_CATEGORIES ||
      project.category === selectedCategory;
    const matchesYear = selectedYear === null || project.year === selectedYear;
    return matchesCategory && matchesYear;
  });

  const FilterButton = ({
    value,
    selected,
    onClick,
  }: {
    value: string | number;
    selected: boolean;
    onClick: () => void;
  }) => (
    <button
      className={`px-4 py-2 rounded font-bold ${
        selected ? "bg-deepblue text-white" : "bg-lightblue"
      }`}
      onClick={onClick}
      role="radio"
      aria-checked={selected}
    >
      {value}
    </button>
  );

  const handleYearClick = (year: number) => {
    setSelectedYear(selectedYear === year ? null : year);
  };

  // Classes communes pour l'alignement des colonnes
  const columnClasses = {
    first: "p-8", // Première colonne
    others: "p-8", // Autres colonnes
  };

  return (
    <div className="py-52 mb-14 w-full">
      <div
        className="flex justify-end items-center mb-4"
        role="radiogroup"
        aria-label="Filtres de projet"
      >
        <div className="flex space-x-2">
          {categories.map((category) => (
            <FilterButton
              key={category}
              value={category}
              selected={selectedCategory === category}
              onClick={() => {
                setSelectedCategory(category);
                setSelectedYear(null);
              }}
            />
          ))}
        </div>

        <span
          className="mx-4 border-r border-deepblue h-6"
          role="separator"
          aria-hidden="true"
        />

        <div className="flex space-x-2">
          {years.map((year) => (
            <FilterButton
              key={year}
              value={year}
              selected={selectedYear === year}
              onClick={() => handleYearClick(year)}
            />
          ))}
        </div>
      </div>

      <table
        className="w-full text-deepblue"
        role="grid"
        aria-label="Liste des projets"
      >
        <thead>
          <tr className="border-b border-deepblue text-lg font-medium text-center">
            <th className={columnClasses.first} scope="col">
              Projet
            </th>
            <th className={columnClasses.others} scope="col">
              Type
            </th>
            <th className={columnClasses.others} scope="col">
              Catégorie
            </th>
            <th className={columnClasses.others} scope="col">
              Année
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredProjects.map((project, index) => (
            <tr
              key={project.slug || index}
              className="border-b border-deepblue py-2 text-xl font-medium hover:bg-lightblue/20 cursor-pointer transition-colors duration-200 text-center"
            >
              <td className={columnClasses.first}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="block w-full h-full py-2"
                >
                  {project.name}
                </Link>
              </td>
              <td className={columnClasses.others}>{project.type}</td>
              <td className={columnClasses.others}>{project.category}</td>
              <td className={columnClasses.others}>{project.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
