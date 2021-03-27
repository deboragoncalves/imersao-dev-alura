function addGame() {

    let game = document.querySelector("#game");
    let linkGame = document.querySelector("#link-game");

    if (game.value != null && game.value != undefined && !(game.value.lenght == 0) && linkGame.value != null && linkGame.value != undefined && !(linkGame.value.lenght == 0)) {
     
        showList(game.value, linkGame.value);

    } else {
        alert("Informe o nome do jogo e o link.");
    }

}

function showList(nameGame, linkGame) {
    let link = document.createElement("a");
    let itemList = document.createElement("li");
    let listGames = document.querySelector("#listGames");

    // Link

    link.href = linkGame;
    link.target = "_blank";
    link.textContent = linkGame;

    // Nome

    itemList.textContent = nameGame + "\n\n";

    itemList.appendChild(link);

    listGames.appendChild(itemList);
}