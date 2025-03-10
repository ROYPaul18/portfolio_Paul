/*
  Warnings:

  - You are about to drop the `Projet` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Projet";

-- CreateTable
CREATE TABLE "Request" (
    "id" SERIAL NOT NULL,
    "budget" TEXT NOT NULL,
    "pages" TEXT NOT NULL,
    "delay" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "entreprise" TEXT NOT NULL,
    "site" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Request_pkey" PRIMARY KEY ("id")
);
