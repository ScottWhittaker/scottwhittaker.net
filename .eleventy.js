const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('img');
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPlugin(syntaxHighlight);

eleventyConfig.addFilter('format_date', obj => {
    return new Date(obj).toDateString();
  });
};
