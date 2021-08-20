const express = require("express")
const cors = require("cors")
const api = express()
const treinos = [
  { tipo: "Dorsal", descricao: "Puxada barra fixa: 4 x falha" },
  { tipo: "Dorsal", descricao: "Puxada frente: 4 x 12 comb. puxada invertida (supinado)" },
  { tipo: "Pernas", descricao: "Mesa Flexora: 4 x 12 execução lenta e concentrada." },
  { tipo: "Dorsal", descricao: "Remada unilateral c/ halter: 4 x 15" },
  { tipo: "Dorsal", descricao: "Cadeira abdutora= 4 x 15 obs: controlar velocidade." },
  { tipo: "Pernas", descricao: "Panturrilha maquina= 4 x 15 execução lenta e concentrada." },
];

const treinoDorsal = treinos.filter(o => o.tipo === "Dorsal");
const treinoPernas = treinos.filter(p => p.tipo === "Pernas");

api.use(cors())

api.get("/" , (req, res)=>{
  return res.send("REST API ONLINE!")
})

// rotas
api.get("/treino/pernas", (req, res) => {
  return res.json(treinoPernas);
});

api.get("/treino/dorsal", (req, res) => {
  return res.json(treinoDorsal);
});

api.post("/treino/cadastrar", (req, res) => {
  console.log('Cadastrando...')
  console.log(req.body)
  res.redirect("https://eduardorojas.com.br/")
});


api.listen(4000, (error)=>{
  if(error){console.log(error)}
  else(console.log('API rodando: http://localhost:4000'))
})
