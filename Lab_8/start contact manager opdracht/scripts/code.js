let personen = [];
let selectedIndex = -1;
// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht


const change = (event) => { // Voeg het event object toe als parameter
    selectedIndex = parseInt(event.target.value); // Index van geselecteerde persoon
    if (selectedIndex !== -1) {
        // Toon gegevens van geselecteerde persoon in het formulier
        const persoon = personen[selectedIndex];
        toonPersoonInFormulier(persoon);
    } else {
        // Wis gegevens in het formulier als er geen persoon is geselecteerd
        wisFormulier();
    }
};
// Functie om een persoon weer te geven in het formulier
const toonPersoonInFormulier = (persoon) => {
    document.getElementById("txtVoornaam").value = persoon.voornaam;
    document.getElementById("txtFamilienaam").value = persoon.familienaam;
    document.getElementById("txtGeboorteDatum").value = persoon.geboorteDatum.toISOString().split('T')[0];
    document.getElementById("txtEmail").value = persoon.email;
    document.getElementById("txtAantalKinderen").value = persoon.aantalKinderen;
};

// Functie om het formulier leeg te maken
const wisFormulier = () => {
    document.getElementById("txtVoornaam").value = "";
    document.getElementById("txtFamilienaam").value = "";
    document.getElementById("txtGeboorteDatum").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtAantalKinderen").value = "";
};
const addPersonToList = (persoon) => {
    const selectElement = document.getElementById('lstPersonen');
    const optionElement = document.createElement('option');
    optionElement.setAttribute("value", personen.length); // Index in het personen array
    optionElement.textContent = `${persoon.voornaam} ${persoon.familienaam}`;
    selectElement.appendChild(optionElement);
};
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    if (valideer()) {
        const persoon = {
            voornaam: document.getElementById("txtVoornaam").value,
            familienaam: document.getElementById("txtFamilienaam").value,
            geboorteDatum: new Date(document.getElementById("txtGeboorteDatum").value),
            email: document.getElementById("txtEmail").value,
            aantalKinderen: document.getElementById("txtAantalKinderen").value
        };

        if (selectedIndex === -1) {
            personen.push(persoon);
            addPersonToList(persoon);
        } else {
            // Bestaande persoon bijwerken in de lijst
            personen[selectedIndex] = persoon;
        }
        selectedIndex = -1; // Reset geselecteerde index
    }
};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");

    wisFormulier();
};

const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change", change);
};

window.addEventListener("load", setup);