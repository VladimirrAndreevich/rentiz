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
