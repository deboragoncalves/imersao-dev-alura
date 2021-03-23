let firstData = parseFloat(prompt("Digite com o primeiro valor: "));
let secondData = parseFloat(prompt("Digite com o segundo valor: "));
let operation = prompt("Digite a operação desejada: \n\n1 - Soma; \n2 - Subtração; \n3 - Multiplicação; \n4 - Divisão");

let result;

let resultHTML = document.querySelector(".result");

if (firstData != null && firstData != undefined && !(firstData.lenght == 0) && !isNaN(firstData)) {
    
    if (secondData != null && secondData != undefined && !(secondData.lenght == 0) && !isNaN(secondData)) {
        switch (operation) {
            case "1":
                result = firstData + secondData;
                resultHTML.textContent = firstData + " + " + secondData + " = " + result;
                break;
            case "2":
                result = firstData - secondData;
                resultHTML.textContent = firstData + " - " + secondData + " = " + result;
                break;
            case "3":
                result = firstData * secondData;
                resultHTML.textContent = firstData + " * " + secondData + " = " + result;
                break;
            case "4":
                result = firstData / secondData;
                resultHTML.textContent = firstData + " / " + secondData + " = " + result;
                break;
            default:
                result = "Opção incorreta";
                resultHTML.textContent = result;
                break;
        }

    } else {
        alert("Informe corretamente os valores: todos devem ser numéricos.");
    }

} else {
    alert("Informe corretamente os valores: todos devem ser numéricos.");
}


