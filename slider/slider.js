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
