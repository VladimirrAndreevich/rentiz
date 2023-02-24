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
