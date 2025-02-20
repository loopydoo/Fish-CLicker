var score = 0
var scoreAdder = 1
document.getElementById("score").innerText = score + " Fish"
function add() {
    score += scoreAdder
    document.getElementById("score").innerText = score + " Fish"
}