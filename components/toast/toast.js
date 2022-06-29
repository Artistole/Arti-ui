const sclToastBtn = document.querySelector(".scl-toast-btn");

sclToastBtn.addEventListener("click", sclToast);

function sclToast() {
	document.querySelector(".scl-toast-wrapper").style.display = "flex";
	setTimeout(disappear, 3000);
	function disappear() {
		document.querySelector(".scl-toast-wrapper").style.display = "none";
	}
}

const hamburger = document.querySelector(".hamburger-container");

hamburger.addEventListener("click", toggle);

function toggle() {
	document.querySelector(".side-bar").classList.toggle("hide");
}
