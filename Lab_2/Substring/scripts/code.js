function toonSubstring() {
    let woord = document.getElementById("inputWoord").value;
    let start = parseInt(document.getElementById("inputStartIndex").value);
    let eind = parseInt(document.getElementById("inputEindIndex").value);

    if (!isNaN(start) && !isNaN(eind)) {
        // Controleer of de indices binnen de lengte van de string vallen
        if (start >= 0 && start <= woord.length && eind >= start && eind <= woord.length) {
            // Gebruik substring om het deel van de string te extraheren
            let substring = woord.substring(start, eind);
            // Toon de substring in de output paragraaf
            document.getElementById("outputSubstring").innerText = substring;
        } else {
            alert("Ongeldige start- of eindindex!");
        }
    } else {
        alert("Voer geldige getallen in voor start- en eindindex!");
    }
}