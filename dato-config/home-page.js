module.exports = {
  create: function(dato, root, i18n, locale) {
    root.createPost(`content/_index.md`, 'yaml', {
      frontmatter: {
        homepageheadersection: dato.homepageheadersection.toMap(),
        homepagesections: dato.homepagesections.map(section => section.toMap()),
        settings: dato.homepageseo.toMap()
      }
    });
  }
}
