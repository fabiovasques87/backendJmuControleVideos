
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

   //campos adicionais do corpo da solicitação
   const { nome_escrivao, numero_processo } = req.body;

  // Crie o link do arquivo combinando o caminho do pendrive com o nome do arquivo
  const dir = '/home/fabio/Documentos/testesVideos'; //esse link funciona no linux
  const linkDoArquivo = dir + '/' + fileName;

  try {
    const arquivo = await prisma.processo.create({
      data: {
        caminho: linkDoArquivo,
        nome_escrivao,
        numero_processo: parseInt(numero_processo)
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


//rota usando o id como parametro de pesquisa

// router.get('/searchProcesso/:id', async (req, res) => {
//   const id = parseInt(req.params.id); // Converter para número inteiro

//   try {
//     const processo = await prisma.processo.findUnique({
//       where: {
//         id: id
//       },
//       select: {
//         nome_escrivao: true,
//         caminho: true,
//         numero_processo: true
//       },
//     });

//     if (processo) {
//       const { nome_escrivao, caminho, numero_processo } = processo;
//       res.send({
//         nome_escrivao,
//         caminho,
//         numero_processo
        
//       });
//     } else {
//       res.status(404).send('Processo não encontrado!');
//     }
//   } catch (error) {
//     console.error('Erro ao pesquisar o processo:', error);
//     res.status(500).send('Erro ao pesquisar o processo.');
//   }
// });

//rota usando o numero_processo como parametro de pesquisa

router.get('/searchProcesso/:numero_processo', async (req, res) => {
  const numero = parseInt(req.params.numero_processo); // Converter para número inteiro

  try {
    const processo = await prisma.processo.findFirst({
      where: {
        numero_processo: numero
      },
      select: {
        nome_escrivao: true,
        caminho: true,
        numero_processo: true
      },
    });

    if (processo) {
      const { nome_escrivao, caminho, numero_processo } = processo;
      res.send({
        nome_escrivao,
        caminho,
        numero_processo
        
      });
    } else {
      res.status(404).send('Processo não encontrado!');
    }
  } catch (error) {
    console.error('Erro ao pesquisar o processo:', error);
    res.status(500).send('Erro ao pesquisar o processo.');
  }
});

module.exports = router;
