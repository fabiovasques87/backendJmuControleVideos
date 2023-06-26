/*
  Warnings:

  - You are about to drop the column `numero_proces` on the `processo` table. All the data in the column will be lost.
  - Added the required column `numero_processo` to the `processo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "processo" DROP COLUMN "numero_proces",
ADD COLUMN     "numero_processo" INTEGER NOT NULL;
