let player = {
    name : "ProPlayer",
    chips: 200
}

let cards = []
let sum = 0
let isAlive = false
let isBlackjack = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let lowTokenEL = document.getElementById("lowToken-el")

playerEl.textContent = player.name + ": $" + player.chips

function startGame(){
    if(player.chips === 0){
        lowTokenEL.textContent = "you're out of tokens! Please reload the game."
        return
    }
    player.chips -= 5
    playerEl.textContent = player.name + ": $" + player.chips
    outOfGameMsgEl.textContent = ""
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame(){
    cardsEl.textContent = "Cards:"
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += " " + cards[i] 
    }
    sumEl.textContent = "Sum: " + sum

    if(sum < 21){
        message = "Do you want to draw a new card?"
    }
    else if(sum === 21){
        message = "You've got Blackjack!"
        isBlackjack = true
        player.chips += 50
        playerEl.textContent = player.name + ": $" + player.chips
    }
    else{
        message = "You're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message
}

let outOfGameMsgEl = document.getElementById("outMsg-el")
function newCard(){
    if(isAlive && !isBlackjack){
        let drawCard = getRandomCard()
        cards.push(drawCard)
        sum += drawCard
        renderGame()
    }
    else{
        outOfGameMsgEl.textContent = "You can't draw a new card.Please start new game!"
    }
}

function getRandomCard(){
    let cardVal = Math.floor(Math.random() * 13) + 1

    if(cardVal === 1){
        return 11
    }
    else if(cardVal >= 9){
        return 10
    }
    else {
        return cardVal
    }   
}

// End of the program