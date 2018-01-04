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
          siteMenu: {
            stringmenu: dato.sitemenu.stringmenu,
            menugroup: dato.sitemenu.menugroup.map(t => {
              return {
                link: t.link.toMap(),
                selectfrompages: t.selectfrompages.map(s => {
                  return {
                    url: `/${s.slug}`,
                    title: s.title
                  }
                })
              }
            })
          },
          testimonials: {
            list: dato.testimonials.map(t => t.toMap()),
            settings: dato.testimonialspreference.toMap(),
          },
          formSetting: dato.formseting.toMap(),
          globalSeo: dato.site.globalSeo.toMap(),
          favicon: `//${dato.site.imgixHost}${dato.site.favicon.path}`,
          gtm: {
            head: dato.sitesetting.gtmcodehead,
            body: dato.sitesetting.gtmsnippetbody
          }
        }
      });
    });
  }
}
