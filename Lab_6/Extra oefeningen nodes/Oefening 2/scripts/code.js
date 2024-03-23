const setup = () =>{
    node();
}

const node = () =>{
    let listItems = document.querySelectorAll('li');

    // Iterate through each <li> element using a for loop
    for (let i = 0; i < listItems.length; i++) {
        // Add the class 'listitem' to each <li> element
        listItems[i].classList.add('listitem');
        listItems[i].style.backgroundColor = 'red';
    }


    let imgElement = document.createElement('img');
    imgElement.src = 'Lab_6/img/me.jpg';
    document.body.appendChild(imgElement);
}

window.addEventListener("load", setup);