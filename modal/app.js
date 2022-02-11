const modalInitialise = document.querySelector(".modal-initialise");
const modalClose = document.querySelector(".modal-close");
const modal = document.querySelector(".modal");

modalInitialise.addEventListener("click", () => {
	document.querySelector(".modal").style.display = "block";
	document.querySelector("header").style.backgroundColor = "rgba(0, 0, 0, 0.1)";
	document.querySelector(".modal-initialise").style.opacity = "0.5";
	document.querySelector("iframe").style.opacity = "0.5";
	document.querySelector("#overlay").style.backgroundColor =
		"rgba(0, 0, 0, 0.5)";
});

modalClose.addEventListener("click", () => {
	document.querySelector(".modal").style.display = "none";
	document.querySelector("#overlay").style.backgroundColor = "transparent";
	document.querySelector("header").style.backgroundColor = "white";
	document.querySelector("iframe").style.opacity = "1";
	document.querySelector(".modal-initialise").style.opacity = "1";
});

document.addEventListener("mouseup", function (e) {
	var container = document.querySelector(".modal");
	if (!container.contains(e.target)) {
		container.style.display = "none";
		document.querySelector("#overlay").style.backgroundColor = "transparent";
		document.querySelector("header").style.backgroundColor = "white";
		document.querySelector(".modal-initialise").style.opacity = "1";
		document.querySelector("iframe").style.opacity = "1";
	}
});
