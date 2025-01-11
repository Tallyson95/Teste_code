const faturamentoMensal = [
  { dia: 1, valor: 100 },
  { dia: 2, valor: 200 },
  { dia: 3, valor: 0 },
  { dia: 4, valor: 300 },
  { dia: 5, valor: 50 },
];

const diasComFaturamento = faturamentoMensal.filter(dia => dia.valor > 0);
const menorValor = Math.min(...diasComFaturamento.map(dia => dia.valor));
const maiorValor = Math.max(...diasComFaturamento.map(dia => dia.valor));
const somaFaturamento = diasComFaturamento.reduce((soma, dia) => soma + dia.valor, 0);
const mediaMensal = somaFaturamento / diasComFaturamento.length;
const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > mediaMensal).length;

console.log("Menor valor de faturamento:", menorValor);
console.log("Maior valor de faturamento:", maiorValor);
console.log("Dias com faturamento acima da média:", diasAcimaDaMedia);
