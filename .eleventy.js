module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./_tmp/style.css')

  eleventyConfig.addPassthroughCopy({ './_tmp/style.css': './style.css' })

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    }
  }
};