let homeScore = 0;
let awayScore= 0;

document.querySelectorAll(".score-modifier-btn").forEach(button =>
{
    button.addEventListener("click", () => {
        let points = parseInt(button.dataset.points);
        let team = button.dataset.team;
        updateScore (team, points); 
    });
});

function updateScore(team, points){
    if (team === "home"){
        homeScore += points;
        document.getElementById("home-score").textContent = homeScore;
    } else if (team === "away") {
        awayScore += points;
        document.getElementById("away-score").textContent = awayScore;
    }
    else {
        console.log("error retrieving needed information to update scoreboard!");
    }
}