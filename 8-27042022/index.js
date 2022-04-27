// importação do módulo do express
const express = require("express");

// realizar a aplicação da função do express
// em uma variável de aplicativo
const app = express();


// Permitir com que o servidor receba dados
// no formato de json
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Bem Vindo!");
})


// Criação de uma lista de clientes
const clientes = [
    {
        id:12,
        nome:"Fernando",
        idade:15
    },
    {
        id:45,
        nome:"Raphael",
        idade:21
    }
];



// Rota para clientes
app.get("/api/cliente/listar",(req,res)=>{
    res.status(200).send({output:clientes});
});


// Rota para cadastrar novos clientes
app.post("/api/cliente/cadastrar",(req,res)=>{
    clientes.push(req.body);
    res.status(201).send({output: "Cliente   cadastrado"})
})


app.listen(8088, () => console.log("http://localhost:8088"));
