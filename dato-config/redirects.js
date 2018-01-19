module.exports = {
  create: function(dato, root, i18n, locale) {
    var fs = require('fs');
    fs.appendFile('static/_redirects', dato.redirects.map(i => `${i.item}\n`).join(""), function(err) {
      console.log(err);
    });
  }
}
