const hamburger = document.querySelector(".hamburger-container");

hamburger.addEventListener("click", toggle);

function toggle() {
	document.querySelector(".side-bar").classList.toggle("hide");
}
