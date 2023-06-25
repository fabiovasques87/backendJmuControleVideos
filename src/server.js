const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes');


const multer = require('multer');

// Configuração do diretório de destino dos uploads
const storage = multer.diskStorage({
 destination: '/home/fabio/Documentos/testesVideos', // caminho do arquivo, esse link funciona no linux
//  destination: 'd://public', // caminho do arquivo
  filename: function (req, file, cb) {
    cb(null, file.originalname);

     // Gere um nome de arquivo único, se necessário
     const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1E9);

     // Obtém a extensão do arquivo
     const extensao = path.extname(file.originalname);
 
     // Concatena o nome único com a extensão do arquivo
     const fileName = uniqueName + extensao;
 
     cb(null, fileName);

  }
});

const upload = multer({ storage: storage });

// ...

app.use(upload.single('file')); // 'file' é o nome do campo do formulário para o upload do arquivo



const port = 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', routes);

app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});


