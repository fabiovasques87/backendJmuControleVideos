/*
  Warnings:

  - Added the required column `caminho` to the `processo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "processo" ADD COLUMN     "caminho" TEXT NOT NULL;
