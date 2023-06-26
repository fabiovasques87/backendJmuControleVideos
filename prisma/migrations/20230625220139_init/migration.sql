/*
  Warnings:

  - You are about to drop the column `date_proces` on the `processo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "processo" DROP COLUMN "date_proces",
ADD COLUMN     "date_processo" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
