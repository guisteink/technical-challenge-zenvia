const express = require("express");
const app = express();

const caixaController = require("./controllers/caixaEletronico/caixaController");
const jokenpoController = require("./controllers/jokenpo/jokenpoController");

app.use(express.json());
app.use((error, req, res, next) => res.status(500).json({ message: error.message }));
app.get("/ping", (req, res) => res.json("Api running!"));

app.post("/caixa-eletronico/saque", (req, res) => caixaController.saque(req, res));
app.post("/jokenpo/play", (req, res) => jokenpoController.play(req, res));

app.listen(3000, () =>
{
    console.log("Server is now running! 🔥")
});

module.exports = app;

// const caixa = caixaEletronico;

// let dinheiroSacado = caixa.saque(50);

// console.log(dinheiroSacado);
