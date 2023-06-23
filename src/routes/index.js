
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Rota principal');
});

router.post('/upload', (req, res) => {
 // Obtenha o nome do arquivo que foi salvo
  const fileName = req.file.filename;

  // Crie o link do arquivo combinando o caminho do pendrive com o nome do arquivo
  const caminhoDoPendrive = 'd://public';
  const linkDoArquivo = caminhoDoPendrive + '/' + fileName;

  // Envie o link do arquivo como resposta
  res.send('Link do arquivo: ' + linkDoArquivo);
});

module.exports = router;
