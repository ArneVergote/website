const setup = () => {

	let sliders = document.getElementsByClassName("slider");

	sliders[0].addEventListener("change", update);
	sliders[0].addEventListener("input", update);
	sliders[1].addEventListener("change", update);
	sliders[1].addEventListener("input", update);
	sliders[2].addEventListener("change", update);
	sliders[2].addEventListener("input", update);
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