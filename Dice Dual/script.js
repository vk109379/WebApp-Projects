let player1 = document.getElementById("pl1");
let player2 = document.getElementById("pl2");
let face = [
    "dice1.png",
    "dice2.png",
    "dice3.png",
    "dice4.png",
    "dice5.png", 
    "dice6.png"
];
let diceVal1 = diceNum()
let diceVal2 = diceNum()
let whoWin = document.getElementById("won");


player1.src = `images/${ face[diceVal1]}`
player2.src = `images/${ face[diceVal2]}`

if(diceVal1 === diceVal2){
    whoWin.innerHTML = "Its a Draw!"
}
else if(diceVal1 > diceVal2){
    whoWin.innerHTML = "Player 1 Wins!"
}
else {
    whoWin.innerHTML = "Player 2 Wins!"
}

function diceNum(){
    let num = Math.floor(Math.random() *6) ;

    console.log(num +1);
    return num;
}

