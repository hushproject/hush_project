module.exports = {
  create: function(dato, root, i18n, locale) {
    let testimonials =  dato.testimonialspreference,
      slug = testimonials.slug;
    root.createPost(`content/${slug}.md`, 'yaml', {
      frontmatter: {
        title: testimonials.pagetitle,
        slug: slug,
        layout: "testimonials",
        type: "testimonials",
        seo: testimonials.seofields
      }
    });
  }
}
