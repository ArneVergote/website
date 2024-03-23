const paragraafNode = document.getElementById("abc");
console.log(paragraafNode.nodeName + ' ELEMENT NODE');
for (let i = 0; i < paragraafNode.childNodes.length; i++) {
    const childNode = paragraafNode.childNodes[i];
    if (childNode.nodeType === Node.TEXT_NODE) {
        console.log('TEXT NODE met nodeValue="' + childNode.nodeValue.trim() + '"');
    } else if (childNode.nodeType === Node.ELEMENT_NODE) {
        console.log(childNode.nodeName + ' ELEMENT NODE');
        console.log('TEXT NODE met nodeValue="' + childNode.textContent.trim() + '"');
    }
}