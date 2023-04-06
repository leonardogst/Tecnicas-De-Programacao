//fazer a importação do express
const express = require('express');

//rotas (quando o servidor for acessado, pra onde ele vai?)
const router = express.Router();
router.get('/',(req,res)=>{
    res.send('Olá, mundo');
});

//configuração básica do aplicativo
const app = express();
app.use('/', router);//exportamos apenas uma rota, pois foi criada duas

module.exports = app;//exportamos o app pois vamos usa-lo em servidor