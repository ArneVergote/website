const setup = () => {
    const startButton = document.getElementById("startButton"); // Selecteer de startknop
    startButton.addEventListener("click", startGame);
    window.addEventListener("resize", updateSize);
    images(); // Roept de images-functie aan bij het laden van de pagina
    let playField = document.getElementById("playField");
    playField.addEventListener("click", checkClick);
}

let global = {
    gameStarted: false,
    IMAGE_COUNT: 5,
    IMAGE_SIZE: 48,
    IMAGE_PATH_PREFIX: "images/",
    IMAGE_PATH_SUFFIX: ".png",
    MOVE_DELAY: 3000,
    score: 0,
    timeoutId: 0,
    intervalId: 0 // Voeg een intervalId toe om de setInterval te volgen
};

const startGame = () => {
    if (!gameStarted) { // Controleer of het spel nog niet is gestart
        gameStarted = true; // Markeer het spel als gestart
        const startButton = document.getElementById("startButton"); // Selecteer de startknop
        startButton.style.display = "none"; // Verberg de startknop nadat het spel is gestart
        window.addEventListener("resize", updateSize);
        let playField = document.getElementById("playField");
        playField.addEventListener("click", checkClick);
        images(); // Roept de images-functie aan nadat het spel is gestart
    }
}
const images = () =>{
    let img = document.getElementById("img"); // Veranderd "img" naar "gameImage"
    let randomIndex = Math.floor(Math.random() * global.IMAGE_COUNT);
    let randomImagePath = global.IMAGE_PATH_PREFIX + randomIndex + global.IMAGE_PATH_SUFFIX;
    img.src = randomImagePath;
    moveImageToRandomPosition(img);
}

const updateSize = () => {
    let playField=document.getElementById("playField");
    playField.style.width=window.innerWidth+"px";
    playField.style.height=window.innerHeight+"px";
}

const  checkClick = (event) => {
    let clickedImage = event.target;
    if (clickedImage.id === "img") {
        let isBomb = isBombImage(clickedImage.src); // Controleert of de afbeelding een bom is
        if (!isBomb) {
            global.score++; // Verhoogt de score als er niet op een bom is geklikt
            document.getElementById("count").innerText = "Aantal hits: " + global.score; // Bijwerken van de score op het scherm
        } else {
            endGame(); // Roept de endGame-functie aan als er op een bom is geklikt
        }
        // Verwijder de afbeelding na een klik
        clickedImage.style.display = "none";

        setTimeout(() => {
            moveImageToRandomPosition(clickedImage);
            clickedImage.style.display = "block"; // Zorg ervoor dat de afbeelding weer zichtbaar wordt
            clearInterval(global.intervalId); // Stop de interval
            global.intervalId = setInterval(images, global.MOVE_DELAY); // Start de interval opnieuw na 3 seconden
        }, global.MOVE_DELAY);
    }
}

const isBombImage = (imageSrc) => {
    return imageSrc.includes("0.png"); // Stel in op basis van de naamgeving van de afbeeldingen
}

const moveImageToRandomPosition = (imageElement) => {
    let sprite=document.getElementsByClassName("sprite")[0];
    let playField = document.getElementById("playField");
    let maxLeft = playField.clientWidth - global.IMAGE_SIZE;
    let maxHeight = playField.clientHeight - global.IMAGE_SIZE;
    let left = Math.floor(Math.random() * maxLeft);
    let top = Math.floor(Math.random() * maxHeight);
    imageElement.style.left = left + "px";
    imageElement.style.top = top + "px";
}

const endGame = () => {
    clearTimeout(global.timeoutId);
    alert("Game Over! Je hebt op een bom geklikt. Je score is: " + global.score);
}

window.addEventListener("load", setup);