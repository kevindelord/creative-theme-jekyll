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

## Dependencies

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

### General
- [x] Update old/deprecated packages.
- [x] Activities: style should be calculated, not imported from markdown
- [x] Update Bootstrap / Creative
- [x] Create favicon
- [ ] Add images to the sitemap.xml

### SEO
- [x] Generate a sitemap.xml for better indexing
- [x] Add google analytics
- [x] Only one h1 element
- [x] Create a 404 page
- [ ] Google Search Console: secure domain name (?)
- [x] Add localized meta description
- [ ] Make sure all images have a verbose file name.
	- [x] Booking (x3)
	- [x] Activities (x6)
	- [x] Gallery (x9?)
	- [ ] Header background
- [x] Add an alt-tag to all pictures
	- [x] Booking (x3)
	- [x] Activities (x6)
	- [x] Gallery (x9?)
	- [ ] Header background

### Navigation Bar
- [x] Navigation bar: too wide
- [x] Navigation bar: Animation glitch when clicking nav-link
- [x] Navigation bar: current index not visible

### Booking
- [x] Rename About section into Booking with lower part with a calendar (or 'coming soon').
- [x] Prepare booking area with a coming soon.
- [x] Find out how to integrate booking info to a gmaps POI.

### Map
- [x] Add a new section to show a map location
- [x] Mobile: Add link to map application
- [x] Add POI to google maps

### Slideshow
- [x] Responsive design for mobile devices
- [x] Add lazy loading of all images using dedicated library
- [x] Start slideshow at index

### Gallery
- [x] Disable overlay for mobile devices
- [x] Fix images with weird ratio
- [x] Grid: enforce 2 columns on xs devices
- [x] Disable overlay also for ipad (large screen but not mousepad and no hover)
- [x] Add floating button 'show all pictures'
- [ ] Add new photos to the gallery

### User Review
- [x] Add Google and Airbnb reviews
- [x] Improve text in booking section above CTAs
- [x] Add widget in header

### Contact
- [x] Fix design with vertical aligned elements, smaller call/email icons.
- [x] Add GitHub link

### Info
- [x] Fix size of Youtube video on small devices

### Description on Partner's websites.
- [x] Check for those information:
	- Non-smoker property
	- Smoke detector
	- Bedsheets handling
	- Heating
