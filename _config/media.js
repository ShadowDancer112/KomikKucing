const metadata = require("../src/_data/metadata.json");

module.exports = function(eleventyConfig) {
	const lightboxImg = (src, alt, meta, thumbnailSrc) => {
		let formattedMetadata = "";
		if (meta && meta.constructor == Object) {
			let metaStrings = [];
			for (const key in meta) {
				metaStrings.push(`data-metadata-${key}="${meta[key]}"`);
			}
			formattedMetadata = metaStrings.join(" ");
		}

		return `
			<figure class="lightbox-image">
				<a class="lightbox-link" href="${metadata.assets.img}/${src}">
					<img src="${metadata.assets.img}/${thumbnailSrc || src}" 
						realSrc="${metadata.assets.img}/${src}" 
						alt="${alt}" 
						${formattedMetadata} />
				</a>
			</figure>
		`;
	};
	
	eleventyConfig.addShortcode("lightboxImg", lightboxImg);
};