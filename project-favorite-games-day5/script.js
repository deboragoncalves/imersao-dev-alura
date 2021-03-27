function addGame() {

    let game = document.querySelector("#game");
    let linkGame = document.querySelector("#link-game");
    let listGames = document.querySelector("#listGames");

    if (game.value != null && game.value != undefined && !(game.value.lenght == 0) && linkGame.value != null && linkGame.value != undefined && !(linkGame.value.lenght == 0)) {
        let itemList = document.createElement("li");
        let link = document.createElement("a");

        link.href = linkGame.value;
        link.target = "_blank";
        link.textContent = linkGame.value;

        itemList.textContent = game.value + "\n\n";
        itemList.appendChild(link);

        console.log(itemList)
        listGames.appendChild(itemList);
    } else {
        alert("Informe o nome do jogo e o link.");
    }

}