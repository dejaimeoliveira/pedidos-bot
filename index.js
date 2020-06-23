const express = require("express");
const app = express( );


app.get('/', (req, res) => {
  res.send("Olá, Neto");
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

app.post('/mensagem', (req, res) => {

  res.send("mensagem recebida");
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