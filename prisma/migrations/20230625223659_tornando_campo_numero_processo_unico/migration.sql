/*
  Warnings:

  - A unique constraint covering the columns `[numero_processo]` on the table `processo` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "processo_numero_processo_key" ON "processo"("numero_processo");
