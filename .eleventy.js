const fs = require("fs");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const eleventySass = require("@grimlink/eleventy-plugin-sass");
const sass = require("sass");

module.exports = function (eleventyConfig) {
	this.returnOptions = {
		dir: {
			input: "src",
			output: "build",
			data: "_data"
		}
	};

	eleventyConfig.addPlugin(pluginRss);
	eleventyConfig.addPlugin(eleventySass, { sass, outputPath: null });

	eleventyConfig.addPassthroughCopy("./src/assets/");
	eleventyConfig.addWatchTarget("./src/assets/");

	loadConfigModules(eleventyConfig);
	return this.returnOptions;
};

function loadConfigModules(eleventyConfig) {
	const paths = fs.readdirSync("./_config/");
	for (const p in paths) {
		const path = paths[p];
		if (!path.endsWith(".js")) {
			return;
		}
		const _module = require("./_config/" + path);
		const options = _module(eleventyConfig);
		if (options) {
			this.returnOptions = { ...this.returnOptions, ...options };
		}
	}
}