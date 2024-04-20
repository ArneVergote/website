const setup = () => {
    calculateHoeOud();
}
const calculateHoeOud = () =>{
let date = new Date();
let geboortedatum = new Date('2004-11-10');
let hoeOud = Math.floor((date - geboortedatum) / (1000 * 60 *60 *24));
console.log("Ik ben " + hoeOud + " dagen oud.");
}

window.addEventListener("load", setup);