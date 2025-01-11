# LePenon-SurfHouse Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/b82dcde1-3fc8-471f-8352-227a06973b05/deploy-status)](https://app.netlify.com/sites/lepenon-surfhouse/deploys)

## Localization

The entire website is localized and translated into few languages.
The default language is French.

The enabled languages and all static texts are listed and translated in the `_translations.yml`.

To add a new language support:
1. Add a new language-short-name.html file at the root of the repository (ex: `en.html`), within set the correct `lang` variable.
2. Add and translate all entries in the `_translations.yml` file.

Pros
- All translations and available languages are contained within 1 config file.

Cons
- You need to restart the website after editing the `_translations.yml` file.

## Deployment

Netlify has been configured to deploy the website at every git commit/push on the `master` branch.

## Local Development

- Open Docker on your runnning maching
- From the root, run the script: `./scripts/docker.sh`
- Access the website at: http://localhost:3000

## Javascript Dependencies

| Plugin | Version | URL |
|-|-|-|
| Animate | 3.7.2 | https://daneden.github.io/animate.css/ |
| WOW | 1.1.3 | https://wowjs.uk/ |
| Flickity | 2.2.1 | https://flickity.metafizzy.co/ |
| FontAwesome | 5.12.1 | https://fontawesome.com/ |
| Fittext | 1.2.0 | http://fittextjs.com/ |
| Vanilla Lazyload | 15.1.1 | https://github.com/verlok/lazyload |
| jQuery | 3.4.1 | https://jquery.com/ |
| jQuery-Easing | 1.4.1 | https://github.com/gdsmith/jquery.easing |
| Bootstrap | 4.4.1 | https://getbootstrap.com/ |
| creative | n/a | https://github.com/BlackrockDigital/startbootstrap-creative |

## User Reviews

The widgets for the user reviews are generated from:
- https://dash.elfsight.com/apps/

## TODO

### SEO
- [ ] Google Search Console: secure domain name (?)
- [ ] Add images to the sitemap.xml (create custom sitemap.xml)
- [x] Structured Data for Images: Add schema markup where possible.
- [ ] Metadata Localization: Titles, meta descriptions, and Open Graph tags should match the target language.

### Gallery
- [ ] Rewrite the import script to work with Docker and the current localisation
