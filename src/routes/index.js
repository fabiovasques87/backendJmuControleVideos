
const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');


const prisma = new PrismaClient();

router.get('/', (req, res) => {
  res.send('Rota principal');
});



router.post('/upload', async (req, res) => {
 // Obtenha o nome do arquivo que foi salvo
  const fileName = req.file.filename;

  // Crie o link do arquivo combinando o caminho do pendrive com o nome do arquivo
  const caminhoDoPendrive = '/home/fabio/Documentos/testesVideos'; //esse link funciona no linux
  const linkDoArquivo = caminhoDoPendrive + '/' + fileName;

  try {
    const arquivo = await prisma.processo.create({
      data: {
        caminho: caminhoDoPendrive
      }
    });
    console.log('Arquivo salvo:', arquivo);
    res.send('Arquivo salvo com sucesso.' + 'link do arquivo' + linkDoArquivo);
  } catch (error) {
    console.error('Erro ao salvar o arquivo:', error);
    res.status(500).send('Erro ao salvar o arquivo.');
  }


  // Envie o link do arquivo como resposta
  // res.send('Link do arquivo: ' + linkDoArquivo);
});

module.exports = router;
