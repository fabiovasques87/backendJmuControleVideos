-- CreateTable
CREATE TABLE "processo" (
    "id" SERIAL NOT NULL,
    "date_proces" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "numero_proces" INTEGER NOT NULL,
    "nome_escrivao" TEXT NOT NULL,

    CONSTRAINT "processo_pkey" PRIMARY KEY ("id")
);
