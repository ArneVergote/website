const storeSliderValues = () => {
    let sliders = {
        red: parseInt(document.getElementById("sldRed").value),
        green: parseInt(document.getElementById("sldGreen").value),
        blue: parseInt(document.getElementById("sldBlue").value),
    };

    localStorage.setItem("sliders", JSON.stringify(sliders));
};

const restoreSliderValues = () => {
    let storedSliders = localStorage.getItem("sliders");

    if (storedSliders) {
        let sliders = JSON.parse(storedSliders);

        document.getElementById("sldRed").value = sliders.red;
        document.getElementById("sldGreen").value = sliders.green;
        document.getElementById("sldBlue").value = sliders.blue;

        update();
    }
};

const storeSwatches = () => {
    const swatchComponents = document.getElementById("swatchComponents");
    const swatches = [];

    // Iterate through each swatch component
    for (let i = 0; i < swatchComponents.children.length; i++) {
        const swatchElement = swatchComponents.children[i];
        const red = parseInt(swatchElement.getAttribute("data-red"));
        const green = parseInt(swatchElement.getAttribute("data-green"));
        const blue = parseInt(swatchElement.getAttribute("data-blue"));

        // Store swatch data in an object
        const swatchData = { red, green, blue };
        swatches.push(swatchData);
    }

    localStorage.setItem("swatches", JSON.stringify(swatches));
};

const restoreSwatches = () => {
    const storedSwatches = localStorage.getItem("swatches");

    if (storedSwatches) {
        const swatchesArray = JSON.parse(storedSwatches);
        const swatchComponents = document.getElementById("swatchComponents");

        swatchComponents.innerHTML = "";

        for (let i = 0; i < swatchesArray.length; i++) {
            const swatchData = swatchesArray[i];
            const { red, green, blue } = swatchData;
            const swatch = buildSwatchComponent(red, green, blue);

            swatchComponents.appendChild(swatch); // Append the swatch component to the container
        }
    }
};

