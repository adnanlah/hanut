const fs = require("fs");
const path = require("path");
const pluginInjector = require("@infinity-interactive/eleventy-plugin-injector");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('_site/admin')
  eleventyConfig.addPassthroughCopy('_site/_assets')
  
  eleventyConfig.addPlugin(pluginInjector, {
    watch: path.resolve(__dirname, './_site/categories/.'),
    inject: (eleventyInstance, options, file) => {
      const categoryName = path.basename(file).split('.')[0];
      const filetext = fs.readFileSync(file, 'utf-8');
      console.log(path.resolve(__dirname, './_site/categories/**.md'))
      if (!filetext.includes('pagination')) {

        let paginationText = `\npagination:\n`
          + ` data: collections.${categoryName}\n`
          + ` size: 5\n`
          + `permalink: /category/{{name}}/{{pagination.pageNumber+1}}/index.html\n`
                 
        let content = `\n{% include "paginateproducts.njk" %}`;

        let newtext = filetext.replace('\n', paginationText);
        newtext += content;

        try {
          console.log('writing file')
          fs.writeFileSync(path.resolve(__dirname, `./_site/categories/${categoryName}.md`), newtext);
        } catch(e) {
          console.log('error writing', e.message)
        }
        
      }
    }
  });
  
  eleventyConfig.addFilter('categoryFilter', function(collection, category) {
    if (!category) return collection;
    return collection.filter(item => item.data.tags.includes(category))
  });

  eleventyConfig.setDataDeepMerge(true);
  
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