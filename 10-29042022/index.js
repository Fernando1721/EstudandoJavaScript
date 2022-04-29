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
    nomeproduto:{type:String,require},
    descricao:{type:String,require},
    categoria:{type:String,require},
    quantidade:{type:String,require},
    preco:{type:String,require}
});

const Produtos = mongoose.model("tbprodutos", tabela);


// definição de uma rota padrão
const default_route = "/api/produtos";

// rota para listar os produtos com endpoint listar
app.get(`${default_route}/listar`,(req,res)=>{
    
    Produtos.find().then((dados)=>{
       
        res.status(200).send({output:dados});
    })
    .catch((erro)=> res.status(500).send({output:`Erro interno ao processar a consulta do produto -> ${erro}`}));
    
});

// rota para cadastrar os produtos com endpoint cadastrar
app.post(`${default_route}/cadastrar`,(req,res)=>{
    
    const prod = new Produtos(req.body);
    prod.save().then((dados)=>{
        res.status(201).send({output:`Produto Cadastrado!`, payload:dados})
    }).catch((erro)=>console.error(`Erro ao tentar cadastrar produto ${erro}`));



});

// rota para atualizar os produtos com endpoint atualizar
// passagem de argumentos pela url com o id do cliente
app.put(`${default_route}/atualizar/:id`,(req,res)=>{
   
    Produtos.findByIdAndUpdate(req.params.id,req.body,{new:true},(erro,dados)=> {
        if(erro){
            return res.status(500).send({output: `Não atualizou -> ${erro}`});
        }
        res.status(200).send({output:"Dados do produto atualizados!"})
    });

});

// rota para apagar produtos com endpoint deletar
app.delete(`${default_route}/apagar/:id`,(req,res)=>{
    
    Produtos.findByIdAndDelete(req.params.id, (erro,dados)=>{
        if(erro){
            return res.status(500).send({output:`Erro ao tentar apagar -> ${erro}`});
        }
        res.status(204).send({output:`Apagar`})
    });
});

// definir a porta de comunicação do servidor


app.listen(8085
    ,()=>console.log("Servidor online em http://localhost:8085"));