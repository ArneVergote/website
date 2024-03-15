const setup = () => {
    let btnValideer=document.getElementById("btnValideer");
    btnValideer.addEventListener("click", valideer);
};

const valideer = () => {
    valideerVoornaam();
    valideerAchternaam();
    valideerGeboortedatum();
    valideerEmail();
    valideerAantalKinderen();
};
const valideerVoornaam = () => {
    let txtVoornaam = document.getElementById("txtVoornaam");
    let errVoornaam = document.getElementById("errVoornaam");
    let voornaam = txtVoornaam.value.trim();
    if (voornaam.length > 30) {
        reportError(txtVoornaam, errVoornaam, "max. 30 karakters");
    } else {
        clearError(txtVoornaam, errVoornaam);
    }
};
const valideerAchternaam = () => {
    let txtAchternaam = document.getElementById("txtAchternaam");
    let errAchternaam = document.getElementById("errAchternaam");
    let achternaam = txtAchternaam.value.trim();

    if (achternaam === "") {
        reportError(txtAchternaam, errAchternaam, "verplicht veld");
    } else if (achternaam.length > 50) {
        reportError(txtAchternaam, errAchternaam, "max 50 karakters");
    } else {
        clearError(txtAchternaam, errAchternaam);
    }
};

const valideerGeboortedatum = () => {
    let txtGeboortedatum = document.getElementById("txtGeboortedatum");
    let errGeboortedatum = document.getElementById("errGeboortedatum");
    let geboortedatum = txtGeboortedatum.value.trim();

    if (!geboortedatum.match(/^\d{4}-\d{2}-\d{2}$/)) {
        reportError(txtGeboortedatum, errGeboortedatum, "formaat is niet jjjj-mm-dd");
    } else {
        clearError(txtGeboortedatum, errGeboortedatum);
    }
};

const valideerEmail = () => {
    let txtEmail = document.getElementById("txtEmail");
    let errEmail = document.getElementById("errEmail");
    let email = txtEmail.value.trim();

    if (email === "") {
        reportError(txtEmail, errEmail, "verplicht veld");
    } else if (!email.includes("@") || email.indexOf("@") !== email.lastIndexOf("@")) {
        reportError(txtEmail, errEmail, "geen geldig email adres");
    } else {
        const parts = email.split("@");
        if (parts.length !== 2 || parts[0].length < 1 || parts[1].length < 1) {
            reportError(txtEmail, errEmail, "geen geldig email adres");
        } else {
            clearError(txtEmail, errEmail);
        }
    }
};

const valideerAantalKinderen = () => {
    let txtAantalKinderen = document.getElementById("txtAantalKinderen");
    let errAantalKinderen = document.getElementById("errAantalKinderen");
    let aantalKinderen = txtAantalKinderen.value.trim();

    if (isNaN(aantalKinderen) || aantalKinderen < 0) {
        reportError(txtAantalKinderen, errAantalKinderen, "is geen positief getal");
    } else if (aantalKinderen >= 99) {
        reportError(txtAantalKinderen, errAantalKinderen, "is te vruchtbaar");
    } else {
        clearError(txtAantalKinderen, errAantalKinderen);
    }
};

const reportError = (element, errElement, message) => {
    element.className="invalid";
    errElement.innerHTML = message;
};

const clearError = (element, errElement) => {
    element.className="";
    errElement.innerHTML = "";
};

window.addEventListener("load", setup);