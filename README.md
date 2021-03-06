# HUSH WebSite Specification
![](themes/hush/src/images-theme/logo-dark.svg)

## Description
1. A well designed visually appealing website that encourages conversions
2. Lightning fast load times
3. Well documented code and release notes to enable others to update the project in the future
if necessary.

## Technologies
1. Design (Mobile first) two artboard in the PSD format
2. Developnemt:
- HTML
- CSS (SASS preprocessor)
- JS
- Bundeling: WebPack, path: ./webpack.config.js
- SSG HUGO
3. CMS
- CMS: "DATO CMS"
> - Configs: main config file ./dato.config.js, income pages configs ./dato-config/
> - Docs: http://support.datocms.com/support/home

## Continius Deployment
1. Version control system "Git/GitHub"
2. Deployment system "Netlify"
> Current site have two envoirements, PRODUCTION & STAGE ![](./docs/deploy-environments.png).
> - Porduction: hush.com Pass: dev
> - Stage: hush-stage.netlify.com Pass: stage

## Project setup:
### Development
1. git clole git@github.com:LumoSpark/clients-hush.git
2. cd clients-hush
3. npm install
4. export DATO_API_TOKEN=abc123
5. echo 'DATO_API_TOKEN=abc123' >> .env

*DATO_API_TOKEN: ![](./docs/api-token.png)*

### Deployment
1. Deploymennt system: https://www.netlify.com/
2. Netlify configuration:
![](./docs/deploy-settings.png)
3. DATO API tocken same w/ Development, more details about DATO CMS deployment setup: https://docs.datocms.com/deployment/netlify.html

## Tips:
### If deploy unsuccess:
> Site deployment can be unsuccess by couple reasons:
> 1. DATO API key expired and should be upgraded in Netlify 
> 2. Invalid data entered
> 3. One of the service is temporary downd
> * In the all of these cases you will never brake your site or loose data.
### Admin tricks:
> 1. Image prefences
> ![](./docs/images-setup.png)
> 1. Imgix parameters to be included in the Title Field.
> 3. Changing the Imgix parameters will not trigger a new deployment action. Some other change (eg minor text change) is needed to trigger a new deployment.
> 4. Separate PHYSICAL images required in the media library for Mobile and Desktop versions. It is suggested that filenames for all mobile images are preceeded with "m-". 
> 2. Always follow behind tips which placed under input field (Sure if they are present)
> ![](./docs/tips.png)

## WARNING!!!
### Please never do changes byself in these models:
![](./docs/danger.png)
### You can lose your data and our garanties.
