module.exports = {
  create: function(dato, root, i18n, locale) {
    let notFound =  dato.notfoundpage;
    root.createPost(`content/not-found.md`, 'yaml', {
      frontmatter: {
        slug: "404",
        layout: "404",
        type: "404",
        settings: notFound.toMap()
      }
    });
  }
}
