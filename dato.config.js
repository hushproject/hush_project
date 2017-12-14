var content = require("./dato-config/content-config.js"),
  toml = require("./dato-config/toml-config.js");

module.exports = (dato, root, i18n) => {
  i18n.availableLocales.forEach((locale) => {
    i18n.withLocale(locale, () => {
      // content.create(dato, root, i18n, locale);
      toml.create(dato, root, i18n, locale);
    });
  });
}
