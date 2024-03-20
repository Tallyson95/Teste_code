//2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor 
//sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
//escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci 
//e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

var num = 7;

const Fibonacci = (numb) => {
    var atual = 0;
    var novo = 1;

    while (atual <= numb) {
        if (atual === numb) {
            return console.log(`O número ${numb} pertence à sequência de Fibonacci`);
        }
        var aux = novo;
        novo += atual;
        atual = aux;
    }

    return console.log(`O número ${numb} NÃO pertence à sequência de Fibonacci`);
}

console.log(Fibonacci(num));
