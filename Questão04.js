/*4) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente.
Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. 
Seu objetivo é descobrir qual interruptor controla qual lâmpada.

Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada? */

/*
Primeiro passo: ir até os interruptores e acender um deles;

Segundo passo: Desligar o primeiro interruptor e acender o segundo;

Terceiro passo: Ir até a primeira sala e sentir a lâmpada. Se estiver acesa, corresponde ao segundo interruptor.
Se estiver desligada e quente, corresponde ao primeiro interruptor;

Quarto passo: Sabendo a resposta da primeira sala, partiria para a segunda e deduziria ali mesmo a resposta da segunda lâmpada e terceira.
Se estiver fria corresponde ao terceiro interruptor. A primeira lâmpada foi possível identificar na primeira sala, o que sobra é a segunda lâmpada.
*/