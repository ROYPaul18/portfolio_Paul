import { NextRequest } from "next/server";
import { db } from "@/lib/db";

const createErrorResponse = (message: string, status: number = 400) => {
  return new Response(
    JSON.stringify({ error: message }),
    {
      status,
      headers: { "Content-Type": "application/json" },
    }
  );
};

export async function POST(req: NextRequest) {
  try {
    // Lire le body de la requête
    let data;
    try {
      data = await req.json();
      if (!data || typeof data !== "object") {
        return createErrorResponse("Données invalides ou manquantes");
      }
    } catch {
      return createErrorResponse("Format de données invalide");
    }

    // Champs obligatoires
    const requiredFields = [
      "name", "email", "company", "website", 
      "projectDetails", "category", "budget", "pages", "delay", "number"
    ];

    const missingFields = requiredFields.filter(
      (field) => !data[field] || String(data[field]).trim() === ""
    );

    if (missingFields.length > 0) {
      return createErrorResponse(
        `Champs obligatoires manquants : ${missingFields.join(", ")}`
      );
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return createErrorResponse("Format d'email invalide");
    }

    // Enregistrement en base
    const newRequest = await db.request.create({
      data: {
        name: data.name.trim(),
        email: data.email.trim().toLowerCase(),
        company: data.company.trim(),
        website: data.website.trim(),
        projectDescription: data.projectDetails.trim(),
        number: data.number.trim(),
        category: data.category.trim(),
        budget: data.budget.trim(),
        pages: data.pages.trim(),
        delay: data.delay.trim(),
      },
    });

    return new Response(
      JSON.stringify({
        message: "Demande enregistrée avec succès",
        request: newRequest,
      }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Erreur serveur:", error);

    if (error instanceof Error && "code" in error && error.code === "P2002") {
      return createErrorResponse("Une entrée avec ces données existe déjà", 409);
    }

    return createErrorResponse(
      "Erreur serveur interne, veuillez réessayer plus tard",
      500
    );
  }
}
