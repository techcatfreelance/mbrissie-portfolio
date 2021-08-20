const Image = require("@11ty/eleventy-img");

async function artworkThumbnailShortcode(src, alt) {
  if (alt === undefined) {
    // You bet we throw an error on missing alt (alt="" works okay)
    throw new Error(`Missing \`alt\` on myImage from: ${src}`);
  }

  let metadata = await Image(src, {
    widths: [200],
    formats: ["jpeg"],
    urlPath: "/thumbnails/",
    outputDir: "./_site/thumbnails/"
  });

  let data = metadata.jpeg[metadata.jpeg.length - 1];
  return `<img class="lozad" data-src="${data.url}" width="${data.width}" height="${data.height}" alt="${alt}" loading="lazy" decoding="async">`;
}

async function artworkImgShortcode(src, alt) {
  if (alt === undefined) {
    // You bet we throw an error on missing alt (alt="" works okay)
    throw new Error(`Missing \`alt\` on myImage from: ${src}`);
  }

  let metadata = await Image(src, {
    widths: [1280],
    formats: ["jpeg"],
    urlPath: "/artwork/",
    outputDir: "./_site/artwork/"
  });

  let data = metadata.jpeg[metadata.jpeg.length - 1];
  return `<img class="bg-black w-full border-4 border-black lozad" data-src="${data.url}" width="${data.width}" height="${data.height}" alt="${alt}" loading="lazy" decoding="async">`;
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./_tmp/style.css')

  eleventyConfig.addPassthroughCopy({ './_tmp/style.css': './style.css' })
  eleventyConfig.addPassthroughCopy({ './src/media/': './media/' })

  eleventyConfig.addLiquidShortcode("artworkThumbnail", artworkThumbnailShortcode);
  eleventyConfig.addLiquidShortcode("artworkImg", artworkImgShortcode);

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    }
  }
};