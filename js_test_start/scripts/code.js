const setup = () => {
    toon();
    tel();
}

const toon = () =>{
    let optie1 = document.getElementsByClassName("img.with-egg");
    let optie2 = document.getElementById("img.without-egg");
    let img = document.getElementById("img");



}

const tel= () =>{
    let text = document.getElementById("note");
    let letter = document.getElementById("letter");
    let count = 0;
    for (let i; i < text.length; i++)
    {
        if(text[i] === letter){
            count++;
        }
    }
    console.log("Letter &ldquo" + letter + "&ldquo komt " + count + " keer voor in bovenstaande zin.");

}
window.addEventListener("load", setup);