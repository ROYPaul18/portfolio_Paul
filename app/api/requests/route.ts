// api/requests/route.ts
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Vérification du corps de la requête
    if (!req.body) {
      return NextResponse.json({ error: "Empty request body" }, { status: 400 });
    }

    const data = await req.json();

    if (!data || typeof data !== "object") {
      return NextResponse.json({ error: "Invalid JSON payload" }, { status: 400 });
    }

    const requiredFields = [
      "name",
      "email",
      "company",
      "website",
      "projectDescription",
      "number",
      "category",
      "budget",
      "pages",
      "delay",
    ];

    const missingFields = requiredFields.filter(
      (field) => !data[field] || String(data[field]).trim() === ""
    );

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          error: `Missing required fields: ${missingFields.join(", ")}`,
        },
        { status: 400 }
      );
    }

    const newRequest = await db.request.create({
      data: {
        name: data.name?.toString().trim() ?? "",
        email: data.email?.toString().trim().toLowerCase() ?? "",
        company: data.company?.toString().trim() ?? "",
        website: data.website?.toString().trim() ?? "",
        projectDescription: data.projectDescription?.toString().trim() ?? "",
        number: data.number?.toString().trim() ?? "",
        category: data.category?.toString().trim() ?? "",
        budget: data.budget?.toString().trim() ?? "",
        pages: data.pages?.toString().trim() ?? "",
        delay: data.delay?.toString().trim() ?? "",
      },
    });

    return NextResponse.json(newRequest, { status: 201 });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "An error occurred while processing the request." },
      { status: 500 }
    );
  }
}