const setup = () =>{
    document.getElementById('button').addEventListener('click', paragraph);
}

const paragraph = () => {
    const div = document.getElementById("myDIV");
    const p = document.createElement("p");
    const text = document.createTextNode("This is a new paragraph.");
    p.appendChild(text);
    div.appendChild(p);
};

window.addEventListener("load", setup);