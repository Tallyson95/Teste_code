const faturamentoEstados = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53
};

const totalFaturamento = Object.values(faturamentoEstados).reduce((total, valor) => total + valor, 0);
const percentuais = Object.entries(faturamentoEstados).map(([estado, valor]) => ({
  estado,
  percentual: ((valor / totalFaturamento) * 100).toFixed(2) + "%"
}));

console.log("Percentual de representação por estado:");
percentuais.forEach(({ estado, percentual }) => {
  console.log(`${estado}: ${percentual}`);
});
