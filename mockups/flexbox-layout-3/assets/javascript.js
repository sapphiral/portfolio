console.log("hello");

// make slider top nav;
"use strict";
const mobile = 576,
	tablet = 768,
	desktop = 996,
	topnav = document.querySelector(".topnav"),
	topnavUl = document.querySelector(".topnav ul"),
	header = document.querySelector("header"),
	headerCheckbox = document.querySelector("input[type='checkbox']"),
	main = document.querySelector("main.main");
	;

console.log(getComputedStyle(header,null).height);
//settings for topnav

window.onload = function () {
	let run = window.requestAnimationFrame;
	headerCheckbox.addEventListener("click", function () {
		if (headerCheckbox.checked) {
			main.classList.add("offset");
		} else {
			main.classList.remove("offset");
		}
	});
	// let init = function() {
		
	// 	run(init);
	// }
	// if (window.innerWidth < tablet) {
	// 		topnav.classList.add("relative");
	// 		topnavUl.classList.add("topnav-absolute");
	// 		topnavUl.classList.add("offset-margin");
	// 		topnavUl.style.top = getComputedStyle(header,null).height;
	// };
	// window.addEventListener("resize", function () {
	// 	if (window.innerWidth < tablet) {
	// 		topnav.classList.add("relative");
	// 		topnavUl.classList.add("topnav-absolute");
	// 		topnavUl.classList.add("offset-margin");
	// 		topnavUl.style.top = getComputedStyle(header,null).height;

	// 	} else {
	// 		topnav.classList.remove("relative");
	// 		topnavUl.classList.remove("topnav-absolute")
	// 		topnavUl.classList.remove("offset-margin");
	// 		topnavUl.style.top = "";
	// 	}
	// });
	// run(init);
}
// const init = function() {
	
// 	if window.ready
// 	const inner
// 	run(init);
// }

// run(init);