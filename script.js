var score = 0
var scoreAdder = 1
var cursorPrice = 10
document.getElementById("score").innerText = score + " Fish"
function add() {
    score += scoreAdder
    score = Math.round(score*10)/10
    document.getElementById("score").innerText = score + " Fish"
}

function buyCursor() {
    if (score >= cursorPrice) {
        score = score - cursorPrice
        
        cursorPrice *= 1.1
        cursorPrice = Math.round(cursorPrice*10)/10
        scoreAdder *= 1.11
        scoreAdder = Math.round(scoreAdder*10)/10
        score = Math.round(score*10)/10
        document.getElementById("cursorPrice").innerText = "$ " + cursorPrice
        document.getElementById("score").innerText = score + " Fish"
    }
}