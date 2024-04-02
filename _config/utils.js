module.exports = function(eleventyConfig) {
	eleventyConfig.addFilter("keys", Object.keys);

	const alphabetizePages = pages => {
		pages.sort((a, b) => {
			a = (a.data.title || "").toLowerCase();
			b = (b.data.title || "").toLowerCase();
			return a > b ? 1 : -1;
		});
		return pages;
	};

	eleventyConfig.addFilter("alphabetizePages", alphabetizePages);
};