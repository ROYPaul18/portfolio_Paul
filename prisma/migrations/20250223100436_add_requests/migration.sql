/*
  Warnings:

  - The primary key for the `Request` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `description` on the `Request` table. All the data in the column will be lost.
  - You are about to drop the column `entreprise` on the `Request` table. All the data in the column will be lost.
  - You are about to drop the column `nom` on the `Request` table. All the data in the column will be lost.
  - You are about to drop the column `site` on the `Request` table. All the data in the column will be lost.
  - Added the required column `category` to the `Request` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Request` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectDescription` to the `Request` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Request" DROP CONSTRAINT "Request_pkey",
DROP COLUMN "description",
DROP COLUMN "entreprise",
DROP COLUMN "nom",
DROP COLUMN "site",
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "company" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "projectDescription" TEXT NOT NULL,
ADD COLUMN     "website" TEXT,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Request_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Request_id_seq";
