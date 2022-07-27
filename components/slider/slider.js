var slider = document.querySelector("#range");
var output = document.querySelector("#range-value");

output.innerHTML = slider.value;

slider.oninput = function () {
	output.innerHTML = this.value;
	if (slider.value === "0") {
		document.querySelector("#volume-icon").src = "volume_off_black_24dp.svg";
		document.querySelector("#range").style.opacity = "0.5";
	} else {
		document.querySelector("#volume-icon").src = "volume_up_black_24dp.svg";
		document.querySelector("#range").style.opacity = "1";
	}
};

const hamburger = document.querySelector(".hamburger-container");
const hamburgerline1 = document.querySelector(".hamburger:nth-child(1)");
const hamburgerline2 = document.querySelector(".hamburger:nth-child(2)");
const hamburgerline3 = document.querySelector(".hamburger:nth-child(3)");

hamburger.addEventListener("click", toggle);

function toggle() {
	document.querySelector(".side-bar").classList.toggle("hide");
	document
		.querySelector(".hamburger:nth-child(1)")
		.classList.toggle("hamburger1");
	document
		.querySelector(".hamburger:nth-child(2)")
		.classList.toggle("hamburger2");
	document
		.querySelector(".hamburger:nth-child(3)")
		.classList.toggle("hamburger3");
}
