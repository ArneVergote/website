const setup = () => {
    document.getElementById('button').addEventListener('click', trigrams);
}
const trigrams = () => {
    const text = document.getElementById('text').value;
    let k = 0;
        for (let i = 0; i < text.length - 2; i++) {
            console.log(text.substring(k, i + 3));
            k++;
        }
}
window.addEventListener("load", setup);

