// Encontra o maior valor em um array
function maior(numeros){


    // Vamos transformar os números em
    // numeros. Realizando um parse
    // para inteiros
    for(var c = 0 ; c < numeros.length ; c++)
        numeros[c] = parseInt(numeros[c]);

    var m = numeros[0];
    for(var i = 1 ; i < numeros.length ; i++ ){
        if(numeros[i] > m ){
            m = numeros[i]
        }
    }
    return m;
}

// Encontrar o menor valor em um array
function menor(numeros){
    var m = numeros[0];
    for(var i = 1 ; numeros.length ; i++){
        if(numeros[i] < m ){
            m = numeros[i]
        }
    }
    return m; 
}
// Verificar se um campo está vazio e alertar o usuário
function verificarvazio(controle){
    if(controle.value == "" || controle.value == null){
        alert(" O campo " +controle.id+ "  não pode ser vazio ");
        controle.setfocus();
    }
}
function datahora(){
    return (
        new Date().toLocaleDateString() +
        " - "+new Date().toLocaleTimeString()
    );
}