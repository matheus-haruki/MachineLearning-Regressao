# MachineLearning-Regressao

### Aprendizagem de Máquina - 10/09/2025

### Professor: Bruno Zolotareff dos Santos

---

## Integrantes

* Amanda Macedo
* Flávio Máximo
* Giovanni Trimmer
* Matheus Shiomi


# Análise de Regressão Linear: Taxa SELIC vs. Cotação do Dólar (USD/BRL)

## Resumo dos Resultados

A análise de regressão linear foi executada para investigar a existência de uma relação linear entre a Taxa SELIC (variável independente, `x`) e a cotação do Dólar (variável dependente, `y`). Os resultados indicam que **não há uma correlação linear significativa** entre as duas variáveis no conjunto de dados analisado. O modelo gerado possui um poder preditivo extremamente baixo, sendo inadequado para fins de previsão.

## Análise Detalhada

### Coeficiente de Determinação (R²)

* **Valor do R²:** `0.0205` (ou 2.05%)
* **Interpretação:** Este é o resultado mais crítico da análise. Ele demonstra que apenas **2.05%** da variação na cotação do Dólar pode ser explicada pela variação na Taxa SELIC. Os 97.95% restantes da variação são atribuíveis a outros fatores não contemplados no modelo.
* **Diagnóstico do Script:** `FRACO`.

### Equação da Reta e Implicações

* **Equação Gerada:** `y = 0.0352x + 3.1328`
* **Coeficiente Angular (a):** O valor de `0.0352` sugere uma correlação positiva mínima (um aumento na SELIC levaria a um aumento ínfimo no Dólar). No entanto, dado o baixíssimo R², essa correlação **não é estatisticamente significante** e pode ser considerada ruído estatístico.
* **Poder Preditivo:** O modelo **não possui utilidade prática para realizar previsões**. Utilizar esta equação para estimar a cotação do Dólar com base na SELIC resultaria em previsões imprecisas e não confiáveis.

## Conclusão Final

A hipótese de que a Taxa SELIC é um forte preditor linear da cotação do Dólar é **rejeitada** por esta análise. A complexidade do mercado de câmbio é muito maior, sendo influenciada por um conjunto amplo de variáveis macroeconômicas, políticas e de mercado (como risco-país, fluxo de capital estrangeiro, balança comercial e cenário internacional) que dominam o comportamento da taxa de câmbio.

## Dados de Saída do Script

```
Equação da reta: y = 0.0352x + 3.1328
Coeficiente angular (a): 0.03521582617405069
Coeficiente linear (b): 3.132805744321142
R²: 0.02052528820075805
Diagnóstico: FRACO
```