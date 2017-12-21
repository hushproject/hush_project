module.exports = {
  create: function(dato, root, i18n, locale) {
    dato.contentpages.forEach((page) => {
      root.createPost(`content/${page.slug}.md`, 'yaml', {
        frontmatter: {
          slug: page.slug,
          layout: "content-page",
          type: "content-page",
          settings: page.toMap()
        }
      });
    });
  }
}
