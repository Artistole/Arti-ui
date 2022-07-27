const modalInitialise = document.querySelector(".modal-initialise");
const modalClose = document.querySelector(".modal-close");
const modal = document.querySelector(".modal");

modalInitialise.addEventListener("click", () => {
	document.querySelector(".modal").style.display = "block";
	document.querySelector("#overlay").style.display = "block";
	document.querySelector("#overlay").style.backgroundColor =
		"rgba(0, 0, 0, 0.5)";
});

modalClose.addEventListener("click", () => {
	document.querySelector(".modal").style.display = "none";
	document.querySelector("#overlay").style.display = "none";

	// document.querySelector("header").style.backgroundColor = "white";
	// document.querySelector("iframe").style.opacity = "1";
	// document.querySelector(".modal-initialise").style.opacity = "1";
});

document.addEventListener("mouseup", function (e) {
	var container = document.querySelector(".modal");
	if (!container.contains(e.target)) {
		container.style.display = "none";
		document.querySelector("#overlay").style.display = "none";
		// document.querySelector("#overlay").style.backgroundColor = "transparent";
		// document.querySelector("header").style.backgroundColor = "white";
		// document.querySelector(".modal-initialise").style.opacity = "1";
		// document.querySelector("iframe").style.opacity = "1";
	}
});

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
