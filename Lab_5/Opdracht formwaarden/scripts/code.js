const setup = () => {
    document.getElementById('button').addEventListener('click', toonResultaat);
};

function toonResultaat() {
    const form = document.getElementById('myForm');
    const formData = new FormData(form);
    const data = {};

    for (const [key, value] of formData.entries()) {
        // If the key already exists, consider the value as an array
        if (key in data) {
            if (!Array.isArray(data[key])) {
                data[key] = [data[key]];
            }
            data[key].push(value);
        } else {
            data[key] = value;
        }
    }

    let result = "";
    if (data['isRoker'] === undefined) {
        result += "Er is geen roker.\n";
    } else {
        result += "Er is een roker.\n";
    }

    if (data['moedertaal'] === 'nl') {
        result += "Moedertaal is Nederlands.\n";
    } else if (data['moedertaal'] === 'fr') {
        result += "Moedertaal is Frans.\n";
    } else if (data['moedertaal'] === 'en') {
        result += "Moedertaal is Engels.\n";
    }

    result += "Favoriete buurland is " + data['favorieteBuurland'] + ".\n";

    const bestellingen = data['bestelling'];
    result += "Bestelling bestaat uit ";

    if (Array.isArray(bestellingen)) {
        if (bestellingen.length > 0) {
            result += bestellingen.join(" ") + ".";
        } else {
            result += "geen bestelling.";
        }
    } else if (bestellingen !== undefined) {
        result += bestellingen + ".";
    } else {
        result += "geen bestelling.";
    }

    console.log(result);

}

window.addEventListener("load", setup);
