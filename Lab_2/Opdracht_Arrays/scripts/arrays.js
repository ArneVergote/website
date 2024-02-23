let familieleden = ["Jef", "Lotte", "Colt", "Tony", "Lara"];

console.log("Aantal elementen in de array: " + familieleden.length);

console.log("Eerste element: " + familieleden[0]);
console.log("Derde element: " + familieleden[2]);
console.log("Vijfde element: " + familieleden[4]);

function VoegNaamToe(array, nieuweNaam) {
    array.push(nieuweNaam);
}

let extraNaam = prompt("Voer een extra naam in:");

VoegNaamToe(familieleden, extraNaam);

console.log("Array na toevoeging van extra naam: " + familieleden);

let arrayAlsString = familieleden.join(", ");
console.log("Array als string: " + arrayAlsString);