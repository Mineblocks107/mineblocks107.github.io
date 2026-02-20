var score = 0
var inc = 0

var button = [1, 30, 0, 1]
var cursor = [1, 50, 1, 1]
var mouse = [1, 100, 3, 3]

function updateScore(){
    score += inc / 100
    document.getElementById("score").innerHTML = Math.round(score)
    document.getElementById("inc").innerHTML = "+ " + inc + " /S"
}

function updateStat(thing, ele, prefix = "S", toPlus = -1){
    document.getElementById(thing + "l").innerHTML = ele[0] + toPlus
    document.getElementById(thing + "s").innerHTML = ((ele[0] + toPlus) * ele[3]) + " /" + prefix
    document.getElementById(thing + "c").innerHTML = ele[1] * ele[0]
}

function upgradeEle(ele){
    if(ele[0] * ele[1] > score){
        return 1
    }
    score -= ele[0] * ele[1]
    ele[0] += 1
    inc += ele[2]
    return 0
}

function recUpgradeEle(ele){
    flag = 0
    while(flag == 0){
        flag = upgradeEle(ele)
    }
}

function update(){
    updateScore()
    updateStat("butt", button, "c", 0)
    updateStat("cur", cursor)
    updateStat("mou", mouse)
}

setInterval(update, 10)

