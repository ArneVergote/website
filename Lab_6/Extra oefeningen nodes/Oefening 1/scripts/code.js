const setup = () =>{
    domTree();
}
const domTree = () =>{
    const nodeList = document.querySelectorAll("p");
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].textContent = "Good Job!";
    }
}

window.addEventListener("load", setup);