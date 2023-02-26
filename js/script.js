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
