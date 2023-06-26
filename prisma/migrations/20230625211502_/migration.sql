/*
  Warnings:

  - Made the column `date_proces` on table `processo` required. This step will fail if there are existing NULL values in that column.
  - Made the column `numero_proces` on table `processo` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nome_escrivao` on table `processo` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "processo" ALTER COLUMN "date_proces" SET NOT NULL,
ALTER COLUMN "numero_proces" SET NOT NULL,
ALTER COLUMN "nome_escrivao" SET NOT NULL;
