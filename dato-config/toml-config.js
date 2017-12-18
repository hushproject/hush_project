module.exports = {
  create: function(dato, root, i18n, locale) {
    ['config.yaml'].forEach(file => {
      root.addToDataFile(file, 'yaml', {
        baseURL: 'https://hush.netlify.com',
        languageCode: "en-us",
        title: "HUSH",
        theme: "hush",
        sitemap: {
          changefreq: "monthly",
          priority: 0.5,
          filename: "sitemap.xml"
        },
        enableRobotsTXT: true,
        params: {
          footer: dato.sitefooter.toMap(),
          siteMenu: dato.sitemenu.toMap()
        }
      });
    });
  }
}
