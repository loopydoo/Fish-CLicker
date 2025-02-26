var score = 0
var scoreAdder = 1
var cursorPrice = 10
var knifePrice = 100
var spoonPrice = 1000
var cookiePrice = 10000000000
document.getElementById("score").innerText = score + " Fish"
function add() {
    score += scoreAdder
    score = Math.round(score*10)/10
    document.getElementById("score").innerText = score + " Fish"
}

function buyCursor() {
    if (score >= cursorPrice) {
        score = score - cursorPrice
        
        cursorPrice *= 1.5
        cursorPrice = Math.round(cursorPrice*10)/10
        scoreAdder += 1
        scoreAdder = Math.round(scoreAdder*10)/10
        score = Math.round(score*10)/10
        document.getElementById("cursorPrice").innerText = "$ " + cursorPrice
        document.getElementById("score").innerText = score + " Fish"
        document.getElementById("fpc").innerText = scoreAdder + " Fpc"
    }
}

function buyKnife() {
    if (score >= knifePrice) {
        score = score - knifePrice
        
        knifePrice *= 1.5
        knifePrice = Math.round(knifePrice*10)/10
        scoreAdder += 3
        scoreAdder = Math.round(scoreAdder*10)/10
        score = Math.round(score*10)/10
        document.getElementById("knifePrice").innerText = "$ " + knifePrice
        document.getElementById("score").innerText = score + " Fish"
        document.getElementById("fpc").innerText = scoreAdder + " Fpc"
    }
}

function buySpoon() {
    if (score >= spoonPrice) {
        score = score - spoonPrice
        
        spoonPrice *= 1.5
        spoonPrice = Math.round(spoonPrice*10)/10
        scoreAdder += 7
        scoreAdder = Math.round(scoreAdder*10)/10
        score = Math.round(score*10)/10
        document.getElementById("spoonPrice").innerText = "$ " + spoonPrice
        document.getElementById("score").innerText = score + " Fish"
        document.getElementById("fpc").innerText = scoreAdder + " Fpc"
    }
}

function buyCookie() {
    if (score >= cookiePrice) {
        score = score - cookiePrice
        
        cookiePrice *= 1.5
        cookiePrice = Math.round(cookiePrice*10)/10
        scoreAdder *= 1.5
        scoreAdder = Math.round(scoreAdder*10)/10
        score = Math.round(score*10)/10
        document.getElementById("cookiePrice").innerText = "$ " + cookiePrice
        document.getElementById("score").innerText = score + " Fish"
        document.getElementById("fpc").innerText = scoreAdder + " Fpc"
    }
}