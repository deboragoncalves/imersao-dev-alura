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

function raffleCard() {

    // 0 e 2

    let numCardMachine = parseInt(Math.random() * 3);

    cardMachine = cards[numCardMachine];

    let numCardPlayer = parseInt(Math.random() * 3);
    
    while (numCardPlayer == numCardMachine) {

        numCardPlayer = parseInt(Math.random() * 3);
    }

    cardPlayer = cards[numCardPlayer];
    console.log(cardPlayer);

    let buttonRaffle = document.getElementById("buttonRaffle");
    buttonRaffle.disabled = true;

    let buttonPlay = document.getElementById("buttonPlay");
    buttonPlay.disabled = false;

    showPlayerCard();

}

let showPlayerCard = () => {
    let cardPlayerHTML = document.getElementById("card-player");
    let frame = "<img src='https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png' style='width: inherit; height: inherit; position: absolute;'>";
    cardPlayerHTML.style.backgroundImage = `url(${cardPlayer.image})`;

    let namePlayer = `<p class='card-subtitle'>${cardPlayer.name}</p>`;

    let optionsInput = "";

    for (let basic in cardPlayer.volleyballBasics) {

        // Radio button

        // Retorna valor: nomeObjeto.nomeObjeto[nomeChave]

        optionsInput += "<input type='radio' id='volleybalBasic' name='volleybalBasic' value=" + basic + ">" + basic + "\n\n";        
    }
    
    let titlePlayerHTML = "<div id='options' class='card-status'></div>";

    let test = cardPlayerHTML.innerHTML = frame + namePlayer + titlePlayerHTML + optionsInput;
    console.log(test)

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

    let portugueseBasic = setLanguageBasic(basicSelected);

    let showResult = document.querySelector(".result");

    let playersNames = document.querySelector(".playersNames");

    playersNames.textContent = "Jogadoras sorteadas: " + cardPlayer.name + " e " + cardMachine.name;
    
    if (cardPlayer.volleyballBasics[basicSelected] > cardMachine.volleyballBasics[basicSelected]) {

        showResult.textContent = "Venceu a jogadora " + cardPlayer.name + ", que fez " + cardPlayer.volleyballBasics[basicSelected] + " pontos em " + portugueseBasic;

    } else if (cardPlayer.volleyballBasics[basicSelected] < cardMachine.volleyballBasics[basicSelected]) {

        showResult.textContent = "Venceu a jogadora " + cardPlayer.name + ", que fez " + cardPlayer.volleyballBasics[basicSelected] + " pontos em " + portugueseBasic;

    } else {

        showResult.textContent = "Nenhuma jogadora venceu. Ambas empataram em " + cardPlayer.volleyballBasics[basicSelected] + " pontos em " + portugueseBasic;
    }

}

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