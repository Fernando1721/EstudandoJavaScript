/*
Estrutura de Backend, onde iremos selecionar,
cadastrar, atulizar e deletar dados sobre os
clientes, ou seja, criaremos um CRUD
CRUD
=====================================================
 C -> Create: quando cria-se dados no banco         
 R -> Read: Quando lemos dados no banco             
 U -> Update: Quando atualizamos dados no banco     
 D -> Delete: Quando apagamos dados no banco        
=====================================================
 vamos usar os verbos: GET, POST, PUT, DELETE, onde:
 GET -> Read
 POST -> Create
 PUT -> Update
 DELETE -> Delete
*/

// importação do módulo express
const express = require('express');

// importação do módulo mongoose
const mongoose = require('mongoose');

// criação do app referente ao express
const app = express();

// preparar o servidor para receber json
app.use(express.json());


/*
caminho do banco de dados mongodb
mongodb+srv://<username>:<password>@fernando.ycwyv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
*/

const urldb = "mongodb+srv://fernando1822:fe160204@fernando.ycwyv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(urldb,{useNewUrlParser:true,useUnifiedTopology:true});


/*
Definição do esquema de dados da tabela
Schema
*/
const tabela = mongoose.Schema({
    nome:{type:String,require},
    email:{type:String,require},
    telefone:{type:String},
    cidades:{type:String}
});

const Cliente = mongoose.model("tbcliente", tabela);


// definição de uma rota padrão
const default_route = "/api/cliente";

// rota para listar os clientes com endpoint listar
app.get(`${default_route}/listar`,(req,res)=>{
    res.status(200).send({output:`Rota GET`});
});

// rota para cadastrar os clientes com endpoint cadastrar
app.post(`${default_route}/cadastrar`,(req,res)=>{
    
    const cli = new Cliente(req,body);
    cli.save().then((dados)=>{
        res.status(201).send({output:`Cadastro realizado`, payload:dados})
    }).catch((erro)=>console.error(`Erro ao tentar cadastrar ${erro}`));



});

// rota para atualizar os clientes com endpoint atualizar
// passagem de argumentos pela url com o id do cliente
app.put(`${default_route}/atualizar/:id`,(req,res)=>{
    res.status(200).send({output:req.params.id});
});

// rota para apagar clientes com endpoint deletar
app.delete(`${default_route}/apagar/:id`,(req,res)=>{
    res.status(204).send({output: req.params.id});
});

// definir a porta de comunicação do servidor
app.listen(8088
    ,()=>console.log("Servidor online em http://localhost:8088"));