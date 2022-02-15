const hamburger = document.querySelector(".hamburger-container");

hamburger.addEventListener("click", fn);

function fn() {
	let displayValue = document.getElementById("side-bar").style.display;
	if (displayValue === "none") {
		document.getElementById("side-bar").style.display = "block";
	} else {
		document.getElementById("side-bar").style.display = "none";
	}
}
