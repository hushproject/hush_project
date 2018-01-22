var homePage = require("./dato-config/home-page.js"),
  toml = require("./dato-config/toml-config.js"),
  testimonials = require("./dato-config/testimonials.js"),
  notFound = require("./dato-config/not-found.js"),
  findUs = require("./dato-config/find-us.js"),
  contentPage = require("./dato-config/content-config.js"),
  redirects = require("./dato-config/redirects.js"),
  robots = require("./dato-config/robots-config.js"),
  sitemap = require("./dato-config/sitemap-config.js");

module.exports = (dato, root, i18n) => {
  i18n.availableLocales.forEach((locale) => {
    i18n.withLocale(locale, () => {
      homePage.create(dato, root, i18n, locale);
      toml.create(dato, root, i18n, locale);
      testimonials.create(dato, root, i18n, locale);
      notFound.create(dato, root, i18n, locale);
      findUs.create(dato, root, i18n, locale);
      contentPage.create(dato, root, i18n, locale);
      redirects.create(dato, root, i18n, locale);
      robots.create(dato, root, i18n, locale);
      sitemap.create(dato, root, i18n, locale);
    });
  });
}
