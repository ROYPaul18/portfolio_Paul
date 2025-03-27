/*
  Warnings:

  - Added the required column `number` to the `Request` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Request" ADD COLUMN     "number" TEXT NOT NULL;
