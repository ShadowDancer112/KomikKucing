module.exports = function (eleventyConfig) {
	eleventyConfig.addFilter("keys", Object.keys);

	const alphabetizePages = pages => {
		pages.sort((a, b) => {
			a = (a.data.title || "").toLowerCase();
			b = (b.data.title || "").toLowerCase();
			return a > b ? 1 : -1;
		});
		return pages;
	};

	const formatDate = (date) => {
		if (!(date instanceof Date)) {
			date = new Date(date);
		}

		const timezoneOffset = date.getTimezoneOffset();
		date.setMinutes(date.getMinutes() + timezoneOffset);
		const formattedDate = date.toLocaleString("en-US", { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
		return formattedDate;
	};

	eleventyConfig.addFilter("alphabetizePages", alphabetizePages);
	eleventyConfig.addFilter("formatDate", formatDate);
};