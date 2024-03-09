const setup = () => {
    document.getElementById('button').addEventListener('click', toonText);
}
const maakMetSpaties = (inputText) => {
    let result="";
    for (let i = 0; i < inputText.length; i++) {
        result = result += inputText[i] + " ";
    }
    return result;
}
const toonText = () => {
    const text = document.getElementById('text').value;
    const tekstMetSpaties = maakMetSpaties(text);
    document.getElementById('result').innerText = "hi" + tekstMetSpaties;
}
document.addEventListener("load", setup);