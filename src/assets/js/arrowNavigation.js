document.addEventListener("keydown", function (event) {
	console.log(event);
	console.log(event.key);

	if (event.key === "ArrowLeft") {
		let previousLink = document.querySelector(".previous-page a");
		if (previousLink) {
			previousLink.click();
		}
	} else if (event.key === "ArrowRight") {
		let nextLink = document.querySelector(".next-page a");
		if (nextLink) {
			nextLink.click();
		}
	}
});