let teamRioDeJaneiro = {
    name: "Rio de Janeiro",
    wins: 16,
    ties: 2,
    losses: 3
}

let teamOsasco = {
    name: "Osasco",
    wins: 11,
    ties: 5,
    losses: 8
}

// Declarar antes
teamRioDeJaneiro.points = calcPoints(teamRioDeJaneiro);
teamOsasco.points = calcPoints(teamOsasco);

/*

Vitórias - 3
Derrotas - 0
Empates - 1

*/

function calcPoints(team) {
    return team.wins * 3 - team.ties;
}

let teams = new Array();
teams.push(teamRioDeJaneiro);
teams.push(teamOsasco);

showTeams(teams);

function showTeams(teams) {

    // Tr - linha
    // Td - dados

    let htmlContent = "";

    for (let team of teams) {
        htmlContent += "<tr>";
        htmlContent += "<td>" + team.name + "</td>";
        htmlContent += "<td>" + team.wins + "</td>";
        htmlContent += "<td>" + team.ties + "</td>";
        htmlContent += "<td>" + team.losses + "</td>";
        htmlContent += "<td>" + team.points + "</td>";
        htmlContent += "<td><button onClick='addWin(" + teams.indexOf(team) + ")'>Vitória</button></td>";
        htmlContent += "<td><button onClick='addTies(" + teams.indexOf(team) + ")'>Empate</button></td>";
        htmlContent += "<td><button onClick='addLosses(" + teams.indexOf(team) + ")'>Derrota</button></td>";
        htmlContent += "</tr>";
    }

    var tableTeams = document.getElementById("tableTeams");
    tableTeams.innerHTML = htmlContent;

}

function addWin(indexTeam) {
    let team = teams[indexTeam];
    team.points = calcPoints(team);
    team.wins++;
    showTeams(teams);
}

function addTies(indexTeam) {
    let team = teams[indexTeam];
    team.points = calcPoints(team);
    team.ties++;
    showTeams(teams);
}

function addLosses(indexTeam) {
    let team = teams[indexTeam];
    team.losses++;
    team.points = calcPoints(team);
    showTeams(teams);
}

