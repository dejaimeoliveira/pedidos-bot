const express = require("express");
const bodyParser = require("body-parser");

const app = express( );

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.send("Olá, Dejaime Carlos de Oliveira");
})

app.get('/pergunta', (req, res) => {
  msg=req.query.pergunta;
  res.send("A sua pergunta: " + msg);
});

app.get("/mensagem/:tipo/:id", (req, res) => {
  msg=req.params.tipo;
  cod=req.params.id;
  res.send("Você quer editar o id: " + cod);
})

app.post('/pedido', (req, res) => {
  console.log(req);
  const produto = req.body.produto;
  const qtd = req.body.quantidade;
  const pagto = req.body.tipoPagamento;
  const bebida = req.body.bebida;

  const pedido = {
    produto,
    qtd,
    pagto,
    bebida
  }
  res.jason(pedido);
})

/*app.listen(3000, '127.0.0.1', () => {
  console.log('Servidor rodando');
})*/

/app.listen(3000, err => {
   if(err) {
     console.log("Não foi possível iniciar o servidor");
   } else {
     console.log("Servidor inicializado na porta 3000");
   }
})