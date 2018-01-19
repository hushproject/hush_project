module.exports = {
  create: function(dato, root, i18n, locale) {
    var fs = require('fs');
    fs.appendFile('static/_redirects', `${dato.redirect.rules}`, function(err) {
      console.log(err);
    });
  }
}
