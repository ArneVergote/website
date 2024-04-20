const setup = () => {
    let tekst = "{\"voornaam\":\"Jan\",\"familienaam\":\"Janssens\",\"geboorteDatum\":\"1993-12-31T00:00:00.000Z\",\"adres\":{\"straat\":\"Kerkstraat 13\",\"postcode\":\"8500\",\"gemeente\":\"Kortrijk\"},\"isIngeschreven\":true,\"namenVanExen\":[\"Sofie\",\"Berta\",\"Philip\",\"Albertoooo\"],\"aantalAutos\":2}";
    let student1 = JSON.parse(tekst);
    console.log(student1.voornaam);

}


window.addEventListener("load", setup);