const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const CleanCSS = require("clean-css");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('img');
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy({'static': '/'});
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // https://www.11ty.dev/docs/copy/#passthrough-file-copy
  eleventyConfig.setTemplateFormats([
    'md',
    'jpg',
    'webp',
    'png'
  ]);

  eleventyConfig.addFilter('format_date_to_date_string', obj => {
    return new Date(obj).toDateString();
  });

  eleventyConfig.addFilter('format_date_to_iso_string', obj => {
    // TODO
    // when logged to console `obj` is `2019-12-11T00:00:00.000Z`.
    // if we render the date in the browser using {{post.data.date}}
    // we get `Wed Dec 11 2019 00:00:00 GMT+0000 (GMT)`.
    // not sure why this occurs hence using this filter to ensure we get iso date to use as the
    // `datetime` attribute of the `time` element.
    return new Date(obj).toISOString();
  });

  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });
};
