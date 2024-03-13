const setup = () => {
    document.getElementById('button').addEventListener('click', dehet);
}
const dehet = () => {
    const text = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    const zin = text.split(  " ");
    text.toLowerCase();
    for (let i = 0; i < text.length; i++){
        if(zin[i] === "de"){
            zin[i] = "het";
        }
    }
    console.log(zin);
}
window.addEventListener("load", setup);