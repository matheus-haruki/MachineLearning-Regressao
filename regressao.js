// Instalar dependências antes (no terminal):
// npm install xlsx

const XLSX = require("xlsx");

function regressaoLinear(x, y) {
  if (x.length !== y.length) {
    throw new Error("Os vetores x e y devem ter o mesmo tamanho.");
  }

  const n = x.length;
  const media = arr => arr.reduce((a, b) => a + b, 0) / arr.length;

  const mediaX = media(x);
  const mediaY = media(y);

  let numerador = 0;
  let denominador = 0;

  for (let i = 0; i < n; i++) {
    numerador += (x[i] - mediaX) * (y[i] - mediaY);
    denominador += (x[i] - mediaX) ** 2;
  }

  const a = numerador / denominador; // coeficiente angular (inclinação)
  const b = mediaY - a * mediaX; // coef linear (intercepto)

  // Calcular R²
  let somaTotal = 0;
  let somaResiduos = 0;
  for (let i = 0; i < n; i++) {
    const yEstimado = a * x[i] + b;
    somaTotal += (y[i] - mediaY) ** 2;
    somaResiduos += (y[i] - yEstimado) ** 2;
  }

  const r2 = 1 - (somaResiduos / somaTotal);

  return {
    equacao: `y = ${a.toFixed(4)}x + ${b.toFixed(4)}`,
    a: a,
    b: b,
    r2: r2
  };
}

// === Leitura dos dados fictícios do Excel ===
const workbook = XLSX.readFile("usd_brl_selic.xlsx");
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const data = XLSX.utils.sheet_to_json(sheet);

// Extrair arrays
const x = data.map(row => row.SELIC_pct_a_a); // variável independente
const y = data.map(row => row.USD_BRL);       // variável dependente

// Rodar regressão
const resultado = regressaoLinear(x, y);

// Exibir resultados
console.log("Equação da reta:", resultado.equacao);
console.log("Coeficiente angular (a):", resultado.a);
console.log("Coeficiente linear (b):", resultado.b);
console.log("R²:", resultado.r2);

// Diagnóstico simples
if (resultado.r2 > 0.7) {
  console.log("Diagnóstico: ÓTIMO");
} else if (resultado.r2 >= 0.4) {
  console.log("Diagnóstico: BOM");
} else if (resultado.r2 >= 0.2) {
  console.log("Diagnóstico: RAZOÁVEL");
} else {
  console.log("Diagnóstico: FRACO");
}