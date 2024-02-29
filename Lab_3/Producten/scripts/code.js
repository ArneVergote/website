function herlaadDOMElementen() {
    // Haal alle cellen op per class
    const prijsCellen = document.getElementsByClassName('prijs');
    const aantalCellen = document.getElementsByClassName('aantal');
    const btwCellen = document.getElementsByClassName('btw');
    const subtotaalCellen = document.getElementsByClassName('subtotaal');

    return { prijsCellen, aantalCellen, btwCellen, subtotaalCellen };
}

function herbereken() {
    const { prijsCellen, aantalCellen, btwCellen, subtotaalCellen } = herlaadDOMElementen();

    let totaal = 0;

    // Loop door elke rij en bereken de subtotaal per product
    for (let i = 0; i < prijsCellen.length; i++) {
        const prijs = parseFloat(prijsCellen[i].innerText);
        const aantal = parseInt(aantalCellen[i].querySelector('input').value);
        const btwTarief = parseFloat(btwCellen[i].innerText);
        const subtotaal = prijs * aantal * (1 + btwTarief);

        subtotaalCellen[i].innerText = subtotaal.toFixed(2) + ' Eur';
        totaal += subtotaal;
    }

    // Update het totaalbedrag
    document.getElementById('totaal').innerText = totaal.toFixed(2) + ' Eur';
}