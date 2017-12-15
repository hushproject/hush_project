var homePage = require("./dato-config/home-page.js"),
  toml = require("./dato-config/toml-config.js");

module.exports = (dato, root, i18n) => {
  i18n.availableLocales.forEach((locale) => {
    i18n.withLocale(locale, () => {
      homePage.create(dato, root, i18n, locale);
      toml.create(dato, root, i18n, locale);
    });
  });
}
