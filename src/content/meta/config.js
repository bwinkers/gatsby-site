const base = {
  name: 'Brian Winkers',
  url: 'https://brianwinkers.com'
};

const config = {
  /* meta tags */
  siteTitle: `${base.name} - 25 years of leading the curve`,
  siteTitlePostfix: ` - ${base.name}`,
  siteDescription: `${
    base.name
  } is an experienced technology manager, architect, software developer, devops engineer and automation expert.`,
  siteImage: 'preview.jpg',
  siteLanguage: 'en',

  /* site header */
  headerTitle: `${base.name}`,
  headerSubTitle: 'making a better Internet one site at a time',

  /* url */
  siteUrl: base.url
  // pathPrefix: '',
};

module.exports = config;
