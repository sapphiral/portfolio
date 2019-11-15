console.log("hello");
const body = document.body;
const header = document.querySelector("header");
const topnav = document.getElementById("topnav");
const topnav_btn = document.getElementById("topnav-button");
const x_btn = document.querySelector("#topnav .btn");
const topnav_link_array = document.querySelectorAll("#topnav a");

const sticky = function () {
	if (window.scrollY>header.scrollTop) {
		header.classList.add("sticky");
	}
	else {
		header.classList.remove("sticky");
	}
}

//create scroll function with callback settimeout
window.addEventListener("scroll", sticky)



topnav.style.top = getComputedStyle(header,null).height;
topnav_btn.onclick= function() {
	topnav.style.width = "250px";
}
x_btn.onclick= function() {
	topnav.style.width = "0px";
}


topnav_link_array.forEach(function(elem, index){
	elem.onclick = function() {
		topnav_link_array.forEach(function(elem2, index) {
			elem2.classList.remove("active");
		});
		elem.classList.add("active");
	}
});