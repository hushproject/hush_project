module.exports = {
  create: function(dato, root, i18n, locale) {
    var fs = require('fs');
    console.log(dato.sitemapxml.manualsitemapmanagement);
    if (dato.sitemapxml.manualsitemapmanagement === true) {
      fs.appendFile('themes/hush/layouts/sitemap.xml', `${dato.sitemapxml.rules}`, function(err) {
        console.log(err);
      });
    }
  }
}
