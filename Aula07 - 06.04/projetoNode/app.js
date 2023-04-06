//fazer a importação do express
const express = require('express');

const router = require('./routes/index');

//configuração básica do aplicativo
const app = express();
app.use('/', router);//exportamos apenas uma rota, pois foi criada duas

module.exports = app;//exportamos o app pois vamos usa-lo em servidor