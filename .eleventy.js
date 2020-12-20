const fs = require("fs");
const path = require("path");
const pluginInjector = require("@infinity-interactive/eleventy-plugin-injector");

// addded a coment here

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('_site/admin')
  eleventyConfig.addPassthroughCopy('_site/_assets')
  
  // let listFiles = []
  // fs.readdirSync(path.resolve(__dirname, './_site/categories/')).forEach(file => {
  //   if (file.split('.').pop() !== 'md')
  //     return;
  //   listFiles.push(path.resolve(__dirname, './_site/categories/', file))
  // });

  // eleventyConfig.addPlugin(pluginInjector, {
  //   watch: listFiles,
  //   inject: (eleventyInstance, options, file) => {
  //     const categoryName = path.basename(file).split('.')[0];
  //     const filetext = fs.readFileSync(file, 'utf-8');

  //     if (!filetext.includes('pagination')) {

  //       let paginationText = `\npagination:\n`
  //         + ` data: "collections.${categoryName}\n"`
  //         + ` size: 5\n`
  //         + `permalink: /category/{{name}}/{{pagination.pageNumber+1}}/index.html\n`
                 
  //       let include = `\n{% include "paginateproducts.njk" %}`;

  //       let newtext = filetext.replace('\n', paginationText);
  //       newtext += include;

  //       try {
  //         fs.writeFileSync(path.resolve(__dirname, `./_site/categories/${categoryName}.md`), newtext);
  //       } catch(e) {
  //         console.log('error writing', e.message)
  //       }
        
  //     }
  //   }
  // });
  
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