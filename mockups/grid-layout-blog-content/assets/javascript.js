console.log("hello world");
const check = document.querySelector(".toggle input");
const main = document.querySelector("main");

check.addEventListener("click", function(){
	if (check.checked == true) {
		ul = document.querySelector(".topnav ul");
		ul.classList.add("show");
		main.classList.add("slide");
	}
	else {
		ul.classList.remove("show");
		main.classList.remove("slide");
	}
});