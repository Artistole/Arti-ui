const toastBtn = document.querySelector(".toast-btn");

toastBtn.addEventListener("click", toast);

function toast() {
	document.querySelector(".toast-wrapper").style.display = "flex";
	setTimeout(disappear, 3000);
	function disappear() {
		document.querySelector(".toast-wrapper").style.display = "none";
	}
}
