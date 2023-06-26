const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes');
require('dotenv').config(); // Usando require em vez de import
const cors = require('cors');

const server = express();

server.use(bodyParser.json());


  server.use(cors());

  server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
  });



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


app.listen(process.env.PORT, () => {
     console.log(`Servidor rodando na porta: ${process.env.PORT}`);
 });


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', routes);

// app.listen(port, () => {
//   console.log(`Servidor iniciado na porta ${port}`);
// });


