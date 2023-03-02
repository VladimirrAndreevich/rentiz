// Mobile navigation
const burger = document.querySelector(".navigation-icon"),
	menu = document.querySelector(".navigation"),
	body = document.body;

if (burger && menu) {
	burger.addEventListener("click", () => {
		burger.classList.toggle("_active");
		menu.classList.toggle("_active");
		body.classList.toggle("_lock");
	});
	console.log("Sdsd");
}

// DropdownS
const filter = document.querySelector(".filter");

if (filter) {
	const items = filter.querySelectorAll(".block-filter");

	items.forEach((item) => {
		item.addEventListener("click", (event) => {
			item
				.querySelector(".block-filter__dropdown")
				.classList.toggle("block-filter__dropdown_active");
			item.querySelector(".block-filter__type").classList.toggle("_active");

			if (event.target.classList.contains("block-filter__item")) {
				item.querySelector(".block-filter__value").textContent =
					event.target.textContent;
			}
		});
	});
}

// Residence Swiper
var swiper = new Swiper(".popular__swiper", {
	slidesPerView: 1,
	spaceBetween: 20,
	grabCursor: true,
	navigation: {
		nextEl: ".popular__button-next",
		prevEl: ".popular__button-prev",
	},
	breakpoints: {
		476: {
			slidesPerView: 1.5,
			spaceBetween: 20,
		},
		630: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		800: {
			slidesPerView: 2.5,
			spaceBetween: 20,
		},
		950: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
	},
});

// Reviews slider
var reviewrs__swiper = new Swiper(".reviews__swiper", {
	slidesPerView: 1,
	spaceBetween: 20,
	grabCursor: true,
	autoHeight: true,
	navigation: {
		nextEl: ".reviews__slider-next",
		prevEl: ".reviews__slider-prev",
	},
});

// Additionl Button

document.querySelector("#more-button").addEventListener("click", function () {
	document.querySelector("#list-container").classList.toggle("active");
});

// Set Initial Colors to main color
let color = getComputedStyle(document.documentElement)
	.getPropertyValue("--color-accent")
	.replaceAll(" ", "");
document.getElementById("main-color").setAttribute("value", color);

// Change color by changing of color picker
document.getElementById("main-color").addEventListener("change", () => {
	color = document.getElementById("main-color").value;
	document.documentElement.style.setProperty("--color-accent", color);
});

// Set Initial Colors to additional color
let colorAdditional = getComputedStyle(document.documentElement)
	.getPropertyValue("--color-accent-darken")
	.replaceAll(" ", "");
document
	.getElementById("adiditional-color")
	.setAttribute("value", colorAdditional);
// Change color by changing of color picker
document.getElementById("adiditional-color").addEventListener("change", () => {
	color = document.getElementById("adiditional-color").value;
	document.documentElement.style.setProperty("--color-accent-darken", color);
});
