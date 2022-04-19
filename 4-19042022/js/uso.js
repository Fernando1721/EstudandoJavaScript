// Verificar qual a página que irá abrir este arquivo
// JavaScript

var pagina = window.location;
console.log(pagina);
// vamos quebrar a url onde houver barra

pagina = pagina.href.split("/");
console.log(pagina);
// Pegar o último elemento do array página criado
// Acima

pagina = pagina[pagina.length - 1];
console.log(pagina);

if(pagina == "home.html"){


    document.body.style.backgroundColor="rgb(150,150,150)";
    /*
    Acessar a caixa(input) chamando números, capturar
    esses números e utilizar a função maior para
    encontrar o maior valor entre eles.
    */

    // referenciar um elemento input da tela home
    const txtN = document.getElementById("txtN");
    // Aplicar um evento chamado onblur. ou seja,
    // Quando a caixa perder o foco
    txtN.onblur = function(){
        // Vamos capturar o valor contido em 
        // txtN, ou seja, os números dentro 
        // Desta caixa e alocar em um array
        var valores = txtN.value.split(",");
        alert(maior(valores));
    }
}
if(pagina =="formulario.html"){
    document.body.style.backgroundColor="rgb(120,200,150)";
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const cpf = document.getElementById("cpf");
    const telefone = document.getElementById("telefone");

    nome.onblur = () => {
        verificarvazio(nome);
    };
    email.onblur = () => {
        verificarvazio(email);
    };
    cpf.onblur = () => {
        verificarvazio(cpf);
    };
    telefone.onblur = () => {
        verificarvazio(telefone);
    };
}

