let score = 18;

function storeScore(score) {
    localStorage.setItem("currentScore", score)
}

function getScore() {
    return +(localStorage.getItem("currentScore"));
}

/* Displaying score in html */
let $scoreDisplay = $("#scoreDisplay");
$scoreDisplay.html("Current Score: " + score)