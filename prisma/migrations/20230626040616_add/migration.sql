/*
  Warnings:

  - You are about to drop the column `numero_arquivos` on the `processo` table. All the data in the column will be lost.
  - Added the required column `qtd_arquivos` to the `processo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "processo" DROP COLUMN "numero_arquivos",
ADD COLUMN     "qtd_arquivos" INTEGER NOT NULL;
