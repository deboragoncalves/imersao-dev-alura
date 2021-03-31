// 0 a 100

let cardPaulo = {
    name: "Tandara",
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

function raffleCard() {

    // 0 e 2

    let numCardMachine = parseInt(Math.random() * 3);

    // Carta aleatória

    cardMachine = cards[numCardMachine];

    let numCardPlayer = parseInt(Math.random() * 3);
    
    while (numCardPlayer == numCardMachine) {

        // Se for igual sorteia novamente

        numCardPlayer = parseInt(Math.random() * 3);
    }

    cardPlayer = cards[numCardPlayer];
    console.log(cardPlayer);

    // Sorteou, jogar

    let buttonRaffle = document.getElementById("buttonRaffle");
    buttonRaffle.disabled = true;

    let buttonPlay = document.getElementById("buttonPlay");
    buttonPlay.disabled = false;

    showOptions();

}

function showOptions() {
    let optionsHTML = document.getElementById("options");

    let optionsInput = "";

    for (let basic in cardPlayer.volleyballBasics) {

        // Radio button

        optionsInput += "<input type='radio' id='volleybalBasic' name='volleybalBasic' value=" + basic +">" + " " + basic + "\n\n";
        
    }
    
    optionsHTML.innerHTML = optionsInput;
}

function getBasicVolleybal() {
    let basicVolleybal = document.getElementsByName("volleybalBasic");

    for (let k = 0; k < basicVolleybal.length; k++) {
        if (basicVolleybal[k].checked) {
            return basicVolleybal[k].value;
        }
    }
}

function play() {
    let basicSelected = getBasicVolleybal();
    
    
    // Comparar atributos máquina e player

    if (cardPlayer.volleyballBasics[basicSelected] > cardMachine.volleyballBasics[basicSelected]) {

        console.log("venceu jogador")

    } else if (cardPlayer.volleyballBasics[basicSelected] < cardMachine.volleyballBasics[basicSelected]) {

        console.log("venceu machine")
    } else {
        console.log("none")
    }
}