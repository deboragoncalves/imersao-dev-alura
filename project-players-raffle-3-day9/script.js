// Retirar carta sorteada após rodada

let cardPaulo = {
    name: "Tandara",
    image: "https://www.olimpiadatododia.com.br/wp-content/uploads/2018/03/Tandara-Jo%C3%A3o-Neto-Fotojump.jpg",
    position: "Oposta",
    volleyballBasics: {
        serve: 70,
        defense: 70,
        atack: 95,
        block: 80,
    }
}

let cardRafa = {
    name: "Fernanda Garay",
    image: "https://matchpointvolei.files.wordpress.com/2018/03/591627200.jpg",
    position: "Ponteira",
    volleyballBasics: {
        serve: 80,
        defense: 90,
        atack: 95,
        block: 80,
        pass: 80
    }
}

let cardGodofredo = {
    name: "Thaísa",
    image: "https://media-manager.noticiasaominuto.com.br/1920/1483287193/naom_52239117b4bac.jpg",
    position: "Central",
    volleyballBasics: {
        serve: 95,
        defense: 75,
        atack: 100,
        block: 100
    }
}

let cardAna = {
    name: "Carol Gattaz",
    image: "https://www.melhordovolei.com.br/wp-content/uploads/2018/12/353034_853648_volei_fem_minas_x_sesc_rj_43.jpg",
    position: "Central",
    volleyballBasics: {
        serve: 95,
        defense: 80,
        atack: 100,
        block: 100
    }
}


let cardClaudia = {
    name: "Dani Lins",
    image: "https://lh3.googleusercontent.com/proxy/bupy5BPAdIE7Fkgx8-ea8LCtuScEwajtZGH-rTRvlpwYV4Oi5OMroCtxmZrR30oyns7uSjXs-9sxpcaaCLolH2Ie0CVDk5Fk_-4ynZGGmSVI4ZDLIrtBog5aYzcfOC0g_QQNKSK-VR6PU0OuTYAlvmk88Iw7zkuqkKQ0LXP4A40h5pvFCBWny6ldjoydsdmgBexh4-LTfa4cClcNflcEkJbunifpjUeUrzz8KtqzX2yCBkbfTk84ZS2WKRwAaew",
    position: "Levantadora",
    volleyballBasics: {
        serve: 95,
        defense: 90,
        ifting: 100,
        block: 80
    }
}

let cards = new Array();
cards.push(cardGodofredo);
cards.push(cardRafa);
cards.push(cardPaulo);
cards.push(cardAna);
cards.push(cardClaudia);

let cardMachine;
let cardPlayer;

let pointsPlayer = 0;
let pointsMachine = 0;

let updateScore = () => {
    let divScore = document.querySelector("#score");
    let score = "Jogador: " + pointsPlayer + " x Máquina: " + pointsMachine; 

    divScore.textContent = score;
}

updateScore();

let updateAmountCards = () => {
    let divAmountCards = document.querySelector("#amount-cards");
    amountCards = "Quantidade de cartas no jogo: " + cards.length;

    divAmountCards.textContent = amountCards;

};

updateAmountCards();

let raffleCard = () => {

    // Sorteio número carta máquina

    let numCardMachine = parseInt(Math.random() * cards.length);

    cardMachine = cards[numCardMachine];

    let numCardPlayer = parseInt(Math.random() * cards.length);

    cardPlayer = cards[numCardPlayer];

    // Splice: retirar. Primeiro argumento, index do elemento; segundo, quantidade de elementos

    cards.splice(numCardMachine, 1);
    cards.splice(numCardPlayer, 1);

    let buttonRaffle = document.getElementById("buttonRaffle");
    buttonRaffle.disabled = true;

    let buttonPlay = document.getElementById("buttonPlay");
    buttonPlay.disabled = false;

    showPlayerCard();

}

let showPlayerCard = () => {

    let divCardPlayer = document.querySelector("#card-player");

    let divCardImage = document.querySelector(".card-image-player");
    let imagePlayer = document.createElement("img");
    imagePlayer.src = cardPlayer.image;
    divCardImage.append(imagePlayer);

    let divCardTitle = document.querySelector(".card-title-player");
    divCardTitle.textContent = cardPlayer.name;

    let inputsBasicVolleybal = "";

    for (let basic in cardPlayer.volleyballBasics) {

        let portugueseBasic = setLanguageBasic(basic);

        inputsBasicVolleybal += "<input type='radio' id='volleybalBasic' name='volleybalBasic' value='" + basic + "'>" + portugueseBasic + " " + cardPlayer.volleyballBasics[basic] + "<br>";        
    }
    
    let divInputs = document.querySelector(".options-player");
    divInputs.innerHTML = inputsBasicVolleybal;

    divCardPlayer.append(divCardImage);
    divCardPlayer.append(divCardTitle);
    divCardPlayer.append(divInputs);

}

let getBasicVolleybal = () => {
    let basicVolleybal = document.getElementsByName("volleybalBasic");

    for (let k = 0; k < basicVolleybal.length; k++) {
        if (basicVolleybal[k].checked) {
            return basicVolleybal[k].value;
        }
    }
}

let play = () => {

    let divResults = document.getElementById("results");

    let result = "<p class='final-result'>";

    let basicSelected = getBasicVolleybal();
    
    if (cardPlayer.volleyballBasics[basicSelected] > cardMachine.volleyballBasics[basicSelected]) {
        result += cardPlayer.name + " venceu</p>";

        pointsPlayer++;

    } else if (cardPlayer.volleyballBasics[basicSelected] < cardMachine.volleyballBasics[basicSelected]) {
        result += cardPlayer.name + " perdeu</p>";

        pointsMachine++;

    } else {
        result += cardPlayer.name + " empatou</p>";
    }

    if (cards.length == 0) {
        alert("Fim de jogo");

        let finalResult = document.querySelector("#resultFinal");
        finalResult.style.backgroundColor = "#ffffff";
        finalResult.style.opacity = "0.8";
        finalResult.style.margin = "0 auto";
        finalResult.style.padding = "5px";

        let textResult = "<p class='result-final'>";

        if (pointsMachine > pointsPlayer) {
            textResult = "Resultado: " + pointsPlayer + " pontos. Você perdeu.</p>";
        } else if (pointsMachine == pointsPlayer) {
            textResult = "Resultado: " + pointsPlayer + " pontos. Você empatou.</p>";
        } else {
            textResult = "Resultado: " + pointsPlayer + " pontos. + Você venceu.</p>";
        }

        finalResult.innerHTML = textResult;

    } else {

        let buttonNextRound = document.querySelector("#buttonNextRound");
        buttonNextRound.disabled = false;

    }

    divResults.innerHTML = result;

    let buttonPlay = document.querySelector("#buttonPlay");
    buttonPlay.disabled = true;

    updateScore();
    updateAmountCards();
    showMachineCard();

}

let showMachineCard = () => {

    let divCardMachine = document.querySelector("#card-machine");

    let divCardImage = document.querySelector(".card-image-machine");
    let imageMachine = document.createElement("img");
    imageMachine.src = cardMachine.image;
    divCardImage.appendChild(imageMachine);

    let divCardTitle = document.querySelector(".card-title-machine");
    divCardTitle.textContent = cardMachine.name;

    let inputsBasicVolleybal = "";

    for (let basic in cardMachine.volleyballBasics) {

        let portugueseBasic = setLanguageBasic(basic);

        inputsBasicVolleybal += "<p id='volleybalBasic'>" + portugueseBasic + " " + cardMachine.volleyballBasics[basic] + "</p>";  
    }
    
    let divInputs = document.querySelector(".options-machine");
    divInputs.innerHTML = inputsBasicVolleybal;

    divCardMachine.append(divCardImage);
    divCardMachine.append(divCardTitle);
    divCardMachine.append(divInputs);

};

let setLanguageBasic = (basicSelected) => {

    switch (basicSelected) {
        case "defense":
            return "defesas";
        case "atack":
            return "ataques";
        case "block":
            return "bloqueios";
        case "serve":
            return "saques";
        case "ifting":
            return "levantamentos";
        default:
            return "";
    }

} 

let nextRound = () => {

    // Limpar cartas e resultado

    let divCardPlayer = document.querySelector("#card-player");
    let divCardMachine = document.querySelector("#card-machine");

    let divImagePlayer = "<div class='card-image-player'></div>";
    let spanTitlePlayer = "<span class='card-title-player'></span>";
    let divOptionsPlayer = "<div class='options-player'></div>";

    divCardPlayer.innerHTML = divImagePlayer + spanTitlePlayer + divOptionsPlayer;
    
    let divImageMachine = "<div class='card-image-machine'></div>";
    let spanTitleMachine = "<span class='card-title-machine'></span>";
    let divOptionsMachine = "<div class='options-machine'></div>";

    divCardMachine.innerHTML = divImageMachine + spanTitleMachine + divOptionsMachine;

    let buttonNextRound = document.querySelector("#buttonNextRound");
    let buttonPlay = document.querySelector("#buttonPlay");
    let buttonRaffle = document.querySelector("#buttonRaffle");

    buttonPlay.disabled = true;
    buttonNextRound.disabled = false;
    buttonRaffle.disabled = false;

    let result = document.querySelector("#results");
    result.innerHTML = "";

};