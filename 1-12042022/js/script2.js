/*
Script para o cálculo das operações
matemáticas:
    - Soma;
    - Subtração;
    - Multiplicação;
    - Divisão;
    - Resto.
Será necessário mais 2 variáveis para
receber od números dos usaários
*/    

var numero1;
var numero2;



// Para obter o número digitado pelo usuário usaremos 
// O comando prompt (que é um input para dados)

numero1 = prompt("Digite um número","0");
numero2 = prompt("Digite outro número");

// Converter para inteiro com (parseInt)
var soma = parseInt(numero1) + parseInt(numero2);
var subtrair = numero1 - numero2;
var multiplicar = numero1 * numero2;
var dividir = numero1 / numero2;
var resto = numero1 % numero2;

alert("O resultado das operações é:\n\n"+
        "Soma: "+soma +
        "\nSubtração: "+subtrair+
        "\nMultiplicação: "+multiplicar+
        "\nDividir: "+dividir+
        "\nResto: "+resto);

