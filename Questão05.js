/* 5) Escreva um programa que inverta os caracteres de um string. */

var nome = prompt("Escolhe o nome que será invertido: ");
var nome_original = nome;
var i = nome.length - 1;
var j = 0;
var nome_invertido = "";
for (i = i; i >= 0; i--) {
    nome_invertido += nome[i];
}

nome = nome_invertido;
console.log(nome);
alert(`O nome ${nome_original} foi invertido com sucesso: ${nome}`);