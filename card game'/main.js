const cards = document.querySelectorAll(".memory-card")

let hasFlippedCard = false
let firstCard, secondCard

console.log('test')

function flipCard(){
    console.log('test')

    if(lockBoard) return
    this.classList.add("flip")

    if (!hasFlippedCard){
        hasFlippedCard=true
        firstCard=this
        return
    }
    secondCard=this
    hasFlippedCard=false
    checkForMatch()

    if(lockBoard) return
    if(this===firstCard)return
    this.classList.add("flip")
    hasFlippedCard=false
   
    firstCard.removeEventListener("click",flipCard)
    secondCard.removeEventListener("click",flipCard)
}

function checkForMatch(){
    console.log(firstCard.dataset.framework)
    console.log(secondCard.dataset.framework)

    if(firstCard.dataset.framework===secondCard.dataset.framework){
        disableCards()
        return
    }
    unflipCarsd()
        setTimeout(() => {
        firstCard.classList.remove("flip")
        secondCard.classList.remove("flip")
    }, 1500)

    setTimeout(() => {
                firstCard.classList.remove("flip")
                secondCard.classList.remove("flip")
            }, 1500)
}
function disableCards(){
    firstCard.removeEventListener("click",flipCard)
    secondCard.removeEventListener("click",flipCard)

    setTimeout(() => {
                firstCard.classList.remove("flip")
                secondCard.classList.remove("flip")
            }, 1500)
    
}

// function checkForMatch(){
//    
// }
function unflipCarsd(){
    setTimeout(() => {
        firstCard.classList.remove("flip")
        secondCard.classList.remove("flip")
    }, 1500)
    lockBoard= true

        setTimeout(() => {
            firstCard.classList.remove("flip")
            secondCard.classList.remove("flip")
            
            lockBoard= false
        },1500)
}

let lockBoard=false
   
// (function shuffle(){
//     cards.forEach(card=> {
//     let randomPos=Math.floor(Math.random()*12)
//     card.style.order=randomPos
// })
// })()


cards.forEach(card=>card.addEventListener("click", flipCard))

