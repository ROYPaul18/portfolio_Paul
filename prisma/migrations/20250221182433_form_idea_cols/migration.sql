-- CreateTable
CREATE TABLE "Projet" (
    "id" SERIAL NOT NULL,
    "budget" TEXT NOT NULL,
    "pages" TEXT NOT NULL,
    "delay" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "entreprise" TEXT NOT NULL,
    "site" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Projet_pkey" PRIMARY KEY ("id")
);
