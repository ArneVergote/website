const setup = () => {
    gemeenten();
}
const gemeenten = () => {
    let gemeentes = [];
    let gemeente = "";

    while (gemeente !== "stop") {
        gemeente = prompt("Gemeente");
        if (gemeente !== "stop") {
            gemeentes.push(gemeente);
        }
    }
    gemeentes.sort();
    console.log(gemeentes);

    const keuze = document.getElementById("gemeentes");

    keuze.innerHTML = "";

    for (let i = 0; i < gemeentes.length; i++) {
        const option = document.createElement("option");
        option.text = gemeentes[i];
        keuze.add(option);
    }
}
window.addEventListener("load", setup);