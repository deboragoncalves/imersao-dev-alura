let games = new Set();
let gamesLink = new Set();

let game;
let gameLink;

let trying = 5;

for (let k = trying; k >= 1; k--) {

    game = prompt("Digite os " + k + " melhores jogos de Vôlei: ");
    gameLink = prompt("Digite o link dos " + k + " melhores jogos de Vôlei: ");

    if (game != null && game != undefined && !(game.length == 0)) {

        if (gamesLink != null && gamesLink != undefined && !(gamesLink.length == 0)) {

            games.add(game)
            gamesLink.add(gameLink);

        } else {
            alert("Digite um valor para o link do jogo de vôlei");
            k++;
        }
        
    } else {
        alert("Digite um valor para o jogo de vôlei");
        k++;
    }

}

let listGames = document.querySelector(".list-games");

// TO DO: Exibir links

for (let game of games) {
    let itemList = document.createElement("li");
    itemList.textContent = game;
    listGames.appendChild(itemList);
}