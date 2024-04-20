let personen = [];

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht

const addPersonToList = (persoon) => {
    personen.push(persoon);
    const selectElement = document.getElementById('lstPersonen');
    const optionElement = document.createElement('option');
    optionElement.setAttribute("value", personen.length - 1); // Index in het personen array
    optionElement.textContent = `${persoon.voornaam} ${persoon.familienaam}`;
    selectElement.appendChild(optionElement);
};
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();
    const persoon = {
        voornaam: document.getElementById("txtVoornaam").value,
        familienaam: document.getElementById("txtFamilienaam").value,
        geboorteDatum: new Date(document.getElementById("txtGeboorteDatum").value),
        email: document.getElementById("txtEmail").value,
        aantalKinderen: document.getElementById("txtAantalKinderen").value
    };
    // indien ok, bewaar de ingegeven data.
        // een nieuw aangemaakte persoon voegen we toe
        // een bestaande persoon in de lijst passen we aan
    if (selectedIndex === -1) {
        // Nieuwe persoon toevoegen aan de lijst
        addPersonToList(persoon);
    } else {
        // Bestaande persoon bijwerken in de lijst
        personen[selectedIndex] = persoon;
        const selectElement = document.getElementById('lstPersonen');
        selectElement.options[selectedIndex].textContent = `${persoon.voornaam} ${persoon.familienaam}`;
    }

    // Formulier leegmaken na bewaren
    document.getElementById('form').reset();
    selectedIndex = -1; // Reset geselecteerde index
    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");
    // Maak het formulier leeg voor het invoeren van nieuwe gegevens
    document.getElementById('form').reset();
    selectedIndex = -1; // Reset geselecteerde index
    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
};

const selectElement = document.getElementById('lstPersonen');
selectElement.addEventListener('change', (event) => {
    selectedIndex = parseInt(event.target.value); // Index van geselecteerde persoon
    if (selectedIndex !== -1) {
        // Toon gegevens van geselecteerde persoon in het formulier
        const persoon = personen[selectedIndex];
        document.getElementById("txtVoornaam").value = persoon.voornaam;
        document.getElementById("txtFamilienaam").value = persoon.familienaam;
        document.getElementById("txtGeboorteDatum").value = persoon.geboorteDatum.toISOString().split('T')[0];
        document.getElementById("txtEmail").value = persoon.email;
        document.getElementById("txtAantalKinderen").value = persoon.aantalKinderen;
    }
});

// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
};

window.addEventListener("load", setup);