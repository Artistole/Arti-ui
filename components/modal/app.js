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

hamburger.addEventListener("click", toggle);

function toggle() {
	document.querySelector(".side-bar").classList.toggle("hide");
}
