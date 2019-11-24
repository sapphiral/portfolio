console.log("hello");

// make slider top nav;
"use strict";
const mobile = 576,
	tablet = 768,
	desktop = 996,
	body = document.querySelector("body"),
	topnav = document.querySelector(".topnav"),
	topnavUl = document.querySelector(".topnav .ul-container"),
	header = document.querySelector("header"),
	headerCheckbox = document.querySelector("input[type='checkbox']"),
	main = document.querySelector("main.main"),
	search = document.getElementById("search"),
	relatedArticle = document.querySelector("section.related")
	;

console.log(getComputedStyle(header,null).height);
//settings for topnav

window.onload = function () {
	setInterval(function() {
		console.log("hello")
	},1000);

	//**topnav slider 
	headerCheckbox.addEventListener("click", function () {
		if (headerCheckbox.checked) {
			topnavUl.classList.add("offset");
			main.classList.add("offset");
			body.classList.add("scroll-disabed");

		} else {
			topnavUl.classList.remove("offset");
			main.classList.remove("offset");
			body.classList.remove("scroll-disabed");
		}
	});
	topnavUl.style.top = getComputedStyle(header,null).height;
	window.addEventListener("resize", function () {
		if (window.innerWidth > desktop) {
			topnavUl.classList.remove("offset");
			main.classList.remove("offset");
			headerCheckbox.checked = false;

		}
	});
	search.addEventListener("click", ()=>{
		createModalBox("<h1>chưa có</h1>");
	})
	// run(init);
	const createModalBox = (message) => {
		let wrapper = document.createElement("div"),
			div = document.createElement("div"),
			modalHeader = document.createElement("div"),
			modalContent = document.createElement("div"),
			buttonContainer = document.createElement("div"),
			exitButton = document.createElement("div");

		wrapper.classList.add("modal-wrapper");
		div.classList.add("modal-box");
		modalHeader.classList.add("modal-header");
		modalContent.classList.add("modal-content");
		buttonContainer.classList.add("modal-button-container");
		exitButton.classList.add("modal-exit-button");
		buttonContainer.addEventListener("click", () => {
			body.removeChild(wrapper);
			body.classList.remove("scroll-disabled");
		});

		modalContent.innerHTML = message;
		buttonContainer.appendChild(exitButton);
		modalHeader.appendChild(buttonContainer);
		div.appendChild(modalHeader);
		div.appendChild(modalContent);
		wrapper.appendChild(div);
		body.appendChild(wrapper);

		wrapper.style.top = window.scrollY +"px";
		body.classList.add("scroll-disabled");
	};

	const _createModalBox = () => {
		let wrapper = document.createElement("div");
		let text = '<div class="modal-wrapper">\
			<div class="modal-box">\
				<div class="modal-header">\
					<div class="modal-button-container">\
						<div class="modal-exit-button">\
						</div>\
					</div>\
				</div>\
			</div>\
		</div>'
		body.innerHTML += text;
		body.classList.add("scroll-disabled");



	};

	relatedArticle.addEventListener("click", function() {
		if (event.target.nodeName.toLowerCase() == "p") {
			createModalBox("<h1>Chưa có</h1>");
		}
	});

}
// const init = function() {
	
// 	if window.ready
// 	const inner
// 	run(init);
// }

// run(init);