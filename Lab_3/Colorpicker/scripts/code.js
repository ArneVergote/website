const setup = () => {

	let sliders = document.getElementsByClassName("slider");

	// we moeten zowel op het input als het change event reageren,
	// zie http://stackoverflow.com/questions/18544890
	sliders[0].addEventListener("change", update);
	sliders[0].addEventListener("input", update);
	sliders[1].addEventListener("change", update);
	sliders[1].addEventListener("input", update);
	sliders[2].addEventListener("change", update);
	sliders[2].addEventListener("input", update);

	// maak het blokje rood

}

	const update = () => {
		let colorDemos = document.getElementsByClassName("colorDemo");
		let sliders = document.getElementsByClassName("slider");
		let red=sliders[0].value;
		let green=sliders[1].value;
		let blue=sliders[2].value;
		console.log(red);
		document.getElementById('sliderValueR').textContent = ' ' + red;
		document.getElementById('sliderValueG').textContent = ' ' + green;
		document.getElementById('sliderValueB').textContent = ' ' + blue;
		colorDemos[0].style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
	}
	window.addEventListener("load", setup);
