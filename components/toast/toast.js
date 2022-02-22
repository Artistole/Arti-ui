const toastBtn = document.querySelector(".toast-btn");

toastBtn.addEventListener("click", toast);

function toast() {
	document.querySelector(".toast-wrapper").style.display = "flex";
	setTimeout(disappear, 3000);
	function disappear() {
		document.querySelector(".toast-wrapper").style.display = "none";
	}
}

const hamburger = document.querySelector(".hamburger-container");

hamburger.addEventListener("click", toggle);

function toggle() {
	document.querySelector(".side-bar").classList.toggle("hide");
}
