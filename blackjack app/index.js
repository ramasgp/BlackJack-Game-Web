let player = {
    name : "Yanto",
    chips : 1000
}
let cards = []
let sum = 0

let hasBlackJack = false
let isAlive = false

let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("card-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let cardRandom = Math.floor(Math.random()*13)+1
    if (cardRandom === 1){
        return 11
    }else if (cardRandom === 11 || cardRandom === 12 || cardRandom ===13){
        return 10
    }else{
        return cardRandom
    }
}

function renderGame(){
    if (sum < 21){
        message = "Apakah mau draw kartu lagi?"
        
    }else if (sum === 21){
        message = "Kamu mendapatkan blackjack"
        hasBlackJack = true
    }else{
        message = "Kamu telah keluar dari game"
        isAlive = false
    }

    messageEl.textContent = message
    cardsEl.textContent = "Cards: "
    for (let i=0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: "+ sum
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = cards[0] + cards[1]
    renderGame()
}

function newCard(){
    if (isAlive === true && hasBlackJack === false){
        let newCard = getRandomCard()
        cards.push(newCard)
        sum += newCard
        renderGame()
    }
}


