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

function createGameBoard() {
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
// Functie om een kaart om te draaien
// Functie om een kaart om te draaien
// Functie om een kaart om te draaien
// Functie om een kaart om te draaien
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
// Functie om te controleren of de omgedraaide kaarten overeenkomen
// Functie om te controleren of de omgedraaide kaarten overeenkomen
// Functie om te controleren of de omgedraaide kaarten overeenkomen
// Functie om te controleren of de omgedraaide kaarten overeenkomen
// Functie om te controleren of de omgedraaide kaarten overeenkomen
const checkMatch = () => {
    const [card1, card2] = omgedraaideKaarten;

    if (card1.querySelector("img").src === card2.querySelector("img").src) {
        // Verwijder de overeenkomende kaarten
        verwijderdeKaarten.push(card1, card2);
        omgedraaideKaarten = [];

        if (verwijderdeKaarten.length === global.AANTAL_KAARTEN) {
            // Einde van het spel
            setTimeout(() => {
                alert("Gefeliciteerd! Je hebt alle kaarten gevonden!");
            }, 500);
        }
    } else {
        // Kaarten draaien niet overeen, draai ze terug na een korte wachttijd
        setTimeout(() => {
            card1.classList.remove("flipped");
            card2.classList.remove("flipped");
            omgedraaideKaarten = [];
        }, 1000);
    }
}


window.addEventListener("load", setup);