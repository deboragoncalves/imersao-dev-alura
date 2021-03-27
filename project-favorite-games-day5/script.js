function addGame() {

    let game = document.querySelector("#game");
    let linkGame = document.querySelector("#link-game");

    checkAllInputValues(game.value, linkGame.value);

    game.value = "";
    linkGame.value = "";

}

function checkAllInputValues(nameGame, linkGame) {
    
    if (nameGame != null && nameGame != undefined && nameGame != "" && linkGame != null && linkGame != undefined && linkGame != "") {
    
        if (linkGame.startsWith("https") || linkGame.startsWith("http")) {
            showList(nameGame, linkGame);
        } else {
            alert("Informe o link correto.");
        }
       
    } else {
        alert("Informe o nome do jogo e o link.");
    }

}

function showList(nameGame, linkGame) {
    let link = document.createElement("a");
    let itemList = document.createElement("li");
    let listGames = document.querySelector("#listGames");

    link.href = linkGame;
    link.target = "_blank";
    link.textContent = linkGame;

    itemList.textContent = nameGame + "\n\n";

    itemList.appendChild(link);

    listGames.appendChild(itemList);
}

// TO DO: Embed/iframe