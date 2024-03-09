const setup = () => {
    const tekst = "De man van An geeft geen hand aan ambetante verwanten";
    const zoekSequentie = "an";
    let teller = 0;

    // Met indexOf
    let positie = tekst.indexOf(zoekSequentie);
    while (positie !== -1) {
        teller++;
        positie = tekst.indexOf(zoekSequentie, positie + 1);
    }
    document.getElementById("resultIndexOf").innerText = "Het aantal keren dat de sequentie 'an' voorkomt (met indexOf): " + teller;

    // Met lastIndexOf
    teller = 0;
    positie = tekst.lastIndexOf(zoekSequentie);
    while (positie !== -1) {
        teller++;
        positie = tekst.lastIndexOf(zoekSequentie, positie - 1);
    }
    document.getElementById("resultLastIndexOf").innerText = "Het aantal keren dat de sequentie 'an' voorkomt (met lastIndexOf): " + teller;
};

document.addEventListener("DOMContentLoaded", setup);
