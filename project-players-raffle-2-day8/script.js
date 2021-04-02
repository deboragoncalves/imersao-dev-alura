// 0 a 100

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

let cards = new Array();
cards.push(cardGodofredo);
cards.push(cardRafa);
cards.push(cardPaulo);

// Math.random: entre 0 e 1 

let cardMachine;
let cardPlayer;

let raffleCard = () => {

    // 0 e 2

    let numCardMachine = parseInt(Math.random() * 3);

    cardMachine = cards[numCardMachine];

    let numCardPlayer = parseInt(Math.random() * 3);
    
    while (numCardPlayer == numCardMachine) {

        numCardPlayer = parseInt(Math.random() * 3);
    }

    cardPlayer = cards[numCardPlayer];

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

        // Radio button

        // Retorna valor: nomeObjeto.nomeObjeto[nomeChave]

        let portugueseBasic = setLanguageBasic(basic);

        inputsBasicVolleybal += "<input type='radio' id='volleybalBasic' name='volleybalBasic' value='" + basic + "'>" + portugueseBasic + " " + cardPlayer.volleyballBasics[basic] + "<br>";        
    }
    
    let divInputs = document.querySelector(".options-player");
    divInputs.innerHTML = inputsBasicVolleybal;
    console.log(divInputs)

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
    } else if (cardPlayer.volleyballBasics[basicSelected] < cardMachine.volleyballBasics[basicSelected]) {
        result += cardPlayer.name + " perdeu</p>";
    } else {
        result += cardPlayer.name + " empatou</p>";
    }

    divResults.innerHTML = result;
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
        default:
            return "";
    }

} 

// TO DO: corrigir inputs radio