const express = require('express');

//rotas (quando o servidor for acessado, pra onde ele vai?)
const router = express.Router();
router.get('/',(req,res)=>{
    res.send('Informações');
});
router.get('/contato',(req,res)=>{
    res.send('Contato');
});
router.get('/cadastro',(req,res)=>{
    res.send('Cadastro');
});

module.exports = router;