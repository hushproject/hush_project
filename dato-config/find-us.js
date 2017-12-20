module.exports = {
  create: function(dato, root, i18n, locale) {
    let contactPage =  dato.contact,
      slug = contactPage.slug;
    root.createPost(`content/${slug}.md`, 'yaml', {
      frontmatter: {
        slug: slug,
        layout: "find-us",
        type: "find-us",
        settings: contactPage.toMap()
      }
    });
  }
}
