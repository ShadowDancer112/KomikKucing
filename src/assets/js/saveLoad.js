const savePage = () => {
	const currentPath = window.location.pathname;
	console.log(currentPath);

	if (currentPath.startsWith("/page/")) {
		const page = currentPath.substring("/page/".length);
		localStorage.setItem("saved-page", page);
		console.log("Page saved:", page);
	}
};

const loadPage = () => {
	const page = localStorage.getItem("saved-page");
	const path = "/page/" + page;

	if (page === null) {
		return;
	}

	if (swup) {
		swup.navigate(path);
		return;
	}

	window.href = path;
};

const initSaveButtons = () => {
	const saveButton = document.querySelector("#save-page");
	const loadButton = document.querySelector("#load-page");

	if (saveButton !== null) {
		saveButton.addEventListener("click", savePage);
	}
	
	if (loadButton !== null) {
		loadButton.addEventListener("click", loadPage);
	}
};

window.addEventListener("DOMContentLoaded", initSaveButtons);
if (swup) {
	swup.hooks.on('page:view', initSaveButtons);
}