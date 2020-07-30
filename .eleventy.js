module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('_site/admin')
  eleventyConfig.addPassthroughCopy('_site/_assets')
  // eleventyConfig.addLayoutAlias('base', 'pageTemplates/base.njk');
  // eleventyConfig.addLayoutAlias('page', 'pageTemplates/page.njk');
  // eleventyConfig.addLayoutAlias('page-hero', 'pageTemplates/page-hero.njk');

  return {
    markdownTemplateEngine: 'njk',
    dir: {
      input: '_site',
      data: '_data',
      includes: '_includes',
      layouts: '_layouts',
      output: 'dist'
    }
  }
}