let userNumber = parseInt(prompt("Digite um número entre 0 e 100:"));
let correctNumber = Math.floor(Math.random() * 100);

let resultHTML = document.querySelector(".result");

let trying = 2;

for (let j = trying; j >= 0; j--) {

    if (userNumber != null && userNumber != undefined && !isNaN(userNumber) && !(userNumber.lenght == 0)) {
 
        if (userNumber == correctNumber) {
            resultHTML.textContent = "Parabéns! Você acertou";
            break;
        } else if (userNumber < correctNumber) {
            resultHTML.textContent = "Você errou. Informe um número maior que " + userNumber;
        } else {
            resultHTML.textContent = "Você errou. Informe um número menor que " + userNumber;
        }

    } else {
        resultHTML.textContent = "Informe o número correto. Deve ser um inteiro";
    }

    j > 0 ? userNumber = parseInt(prompt("Digite um número entre 0 e 10. Você possui " + j + " tentativa(s). ")) : null; 

}



