let games = new Array();

let trying = 5;

for (let k = trying; k >= 1; k--) {
    console.log(k);
    game = prompt("Digite os " + k + " melhores jogos de Vôlei: ")

    if (game != null && game != undefined && !(game.length == 0)) {
        games.push(game);
    } else {
        alert("Digite um valor para o jogo de vôlei");
        k++;
    }

}

let listGames = document.querySelector(".list-games");

for (let game of games) {
    let itemList = document.createElement("li");
    itemList.textContent = game;
    listGames.appendChild(itemList);
}