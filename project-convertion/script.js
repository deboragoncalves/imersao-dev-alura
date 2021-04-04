let euroValue = parseFloat(prompt("Qual valor em Euros você quer converter?")).toFixed(2);

const convertion = 6.55;

let realValue = euroValue * convertion;

let textRealValue = document.querySelector(".euro-value");
textRealValue.textContent = "Resultado: "
textRealValue.textContent += "€ " + euroValue + " euros equivalem a R$ " + realValue + " reais.";
