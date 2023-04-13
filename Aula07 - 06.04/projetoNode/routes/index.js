const express = require('express');

//rotas (quando o servidor for acessado, pra onde ele vai?)
const router = express.Router();

/*
router.get('/',(req,res)=>{
    let nome = req.query.nome;
    let idade = req.query.idade;
    res.send('Olá ' + nome + ', você tem: ' + idade + ' anos de idade');
});
*/

router.get('/',(req,res)=>{
    res.send('Ola ' + req.query.nome + ', sua idade é: ' + req.query.idade);
});

/*
router.get('/post/:id', (req,res)=>{
    let id = req.params.id;
    res.send('ID dos post: ' + id);
});
*/


router.get('/', (req,res)=>{
    let nome = req.query.nome;
    let sobrenome = req.query.sobrenome;

    res.json({
        nomeCompleto:nome + ' ' + sobrenome
    })
}); 

router.get('/contato',(req,res)=>{
    res.send('Contato');
});

router.get('/cadastro',(req,res)=>{
    res.send('Cadastro');
});

module.exports = router;