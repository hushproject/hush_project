module.exports = {
  create: function(dato, root, i18n, locale) {
    var fs = require('fs');
    fs.appendFile('themes/hush/layouts/robots.txt', `${dato.robotstxt.rules}`, function(err) {
      console.log(err);
    });
  }
}
