/*
  Warnings:

  - Added the required column `numero_arquivos` to the `processo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "processo" ADD COLUMN     "numero_arquivos" INTEGER NOT NULL;
