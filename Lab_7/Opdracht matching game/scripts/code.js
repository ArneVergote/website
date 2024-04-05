const setup = () => {
    createGameBoard();
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => card.addEventListener("click", flipCard));
}

let global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6,
    KAART_ACHTERKANT: "achterkant.png"
}

const afbeeldingen = ["kaart1.png", "kaart2.png", "kaart3.png", "kaart4.png", "kaart5.png", "kaart6.png"];

let omgedraaideKaarten = [];

let verwijderdeKaarten = [];

const shuffle = (array) =>{
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const createGameBoard = () =>{
    shuffle(afbeeldingen); // Schud de kaarten

    const gameBoard = document.getElementById("gameBoard");

    for (let i = 0; i < global.AANTAL_VERTICAAL; i++) {
        for (let j = 0; j < global.AANTAL_HORIZONTAAL; j++) {
            const cardContainer = document.createElement("div");
            cardContainer.classList.add("card");

            const cardFront = document.createElement("img");
            cardFront.src = global.KAART_ACHTERKANT;

            const cardBack = document.createElement("img");
            cardBack.src = `images/${afbeeldingen[i * global.AANTAL_HORIZONTAAL + j]}`;

            cardContainer.appendChild(cardFront);
            cardContainer.appendChild(cardBack);

            gameBoard.appendChild(cardContainer);
        }
        gameBoard.appendChild(document.createElement("br"));
    }
}

// Functie om een kaart om te draaien
const flipCard = (event) => {
    const card = event.currentTarget;

    // Controleer of de kaart al is omgedraaid, verwijderd of als er al twee omgedraaid zijn
    if (card.classList.contains("flipped") || verwijderdeKaarten.includes(card) || omgedraaideKaarten.length >= 2) {
        return;
    }

    card.classList.add("flipped");
    omgedraaideKaarten.push(card);

    // Controleer of er twee kaarten zijn omgedraaid
    if (omgedraaideKaarten.length === 2) {
        checkMatch();
    }
}

// Functie om te controleren of de omgedraaide kaarten overeenkomen
const checkMatch = () =>{
    const [card1, card2] = flippedCards;

    // Vergelijk de bronnen van de afbeeldingen op de omgedraaide kaarten
    if (card1.querySelector(".back").src === card2.querySelector(".back").src) {
        // Verwijder de overeenkomende kaarten
        setTimeout(() => {
            flippedCards.forEach(card => card.style.visibility = "hidden");
            flippedCards = [];

            // Controleer of er geen kaarten meer over zijn
            if (document.querySelectorAll('.card:not([style*="visibility: hidden"])').length === 0) {
                endGame();
            }
        }, 1000);
    } else {
        // Kaarten draaien niet overeen, draai ze terug na een korte wachttijd
        setTimeout(() => {
            card1.classList.remove("flipped");
            card2.classList.remove("flipped");
            flippedCards = [];
        }, 1000);
    }
}

window.addEventListener("load", setup);