/*1) Observe o trecho de código abaixo:

int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça

{

K = K + 1;

SOMA = SOMA + K;

}

imprimir(SOMA);
Resposta: 91 */

//declaração de variaveis
var indice = 13;
var soma = 0;
var k = 0;

//criando função para somar os valores passados como parâmetros da função
const somarNumeros = (k, indice) =>{
    while(k < indice){
        k += 1;
        soma += k;
    }
    return soma;
}

//chamando a função com os valores a serem somados no console
console.log(somarNumeros(k, indice));
