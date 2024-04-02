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
	
		const day = date.getDate();
		const suffixes = ["th", "st", "nd", "rd"];
		const suffix = suffixes[(day - 20) % 10] || suffixes[day] || suffixes[0];
		const formattedDate = day + suffix + " " + date.toLocaleString("en-US", { month: "long", year: "numeric" });
		return formattedDate;
	};

	eleventyConfig.addFilter("alphabetizePages", alphabetizePages);
	eleventyConfig.addFilter("formatDate", formatDate);
};