let namePlayer = prompt("Digite o nome dessa jogadora. Você tem três tentativas!");


for (let i = 0; i < 2; i++) {
    if (namePlayer == "Amanda" || namePlayer == "Amandinha" || namePlayer == "Amanda Campos") {
        alert("Acertou!");
        break;
    }

    alert("Errou!")
    namePlayer = prompt("Digite o nome dessa jogadora: ");
}
