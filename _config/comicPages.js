module.exports = function (eleventyConfig) {
	function comicPages(collectionApi) {
		const taggedPages = collectionApi.getFilteredByTag("comic");

		taggedPages.sort((a, b) => {
			a = a.filePathStem;
			b = b.filePathStem;

			const partsA = a.split("/");
			const partsB = b.split("/");

			for (let i = 0; i < Math.min(partsA.length, partsB.length); i++) {
				const segA = partsA[i];
				const segB = partsB[i];

				const segNumA = parseInt(segA.match(/\d+$/), 10);
				const segNumB = parseInt(segB.match(/\d+$/), 10);

				if (!isNaN(segNumA) && !isNaN(segNumB)) {
					if (segNumA !== segNumB) {
						return segNumA - segNumB;
					}
				} else if (!isNaN(segNumA) && isNaN(segNumB)) {
					return -1;
				} else if (isNaN(segNumA) && !isNaN(segNumB)) {
					return 1;
				} else {
					const comparison = segA.localeCompare(segB);
					if (comparison !== 0) {
						return comparison;
					}
				}
			}

			return partsA.length - partsB.length;
		});

		return taggedPages;
	}

	function sortPagesByDirectory(collection) {
		const sortedPages = {};

		collection.forEach(page => {
			const [ , directory ] = page.filePathStem.match(new RegExp("^/page/(.*)/"));
			if (!sortedPages[directory]) {
				sortedPages[directory] = [];
			}
			sortedPages[directory].push(page);
		});

		return sortedPages;
	}

	function getComicPageByUrl(url) {
		const comicPages = this.ctx.collections.comicPages;
		const page = comicPages.find((_page) => {
			const pagePrefix = "/page/";
			const stem = _page.filePathStem.slice(pagePrefix.length);
			return stem === url;
		});
		return page;
	}

	eleventyConfig.addCollection("comicPages", comicPages);
	eleventyConfig.addFilter("getComicPageByUrl", getComicPageByUrl);
	eleventyConfig.addFilter("sortPagesByDirectory", sortPagesByDirectory);
};