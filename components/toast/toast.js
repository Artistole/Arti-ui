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
