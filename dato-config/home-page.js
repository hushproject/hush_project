module.exports = {
  create: function(dato, root, i18n, locale) {
    root.createPost(`content/_index.${locale}.md`, 'yaml', {
      frontmatter: {
        title: `title`
      },
      content: ''
    });
  }
}
