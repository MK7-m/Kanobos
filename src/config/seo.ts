export const seoConfig = {
  siteName: 'Kanobos',
  siteUrl: 'https://kanobos.com',
  defaultTitle: 'Kanobos - Professional Website Design & Development in 48 Hours',
  defaultDescription: 'Get your complete professional website designed, developed, and launched in just 48 hours. Starting at €499 with SEO optimization, hosting, and support included. Trusted by 500+ businesses.',
  defaultKeywords: [
    'website design',
    'web development',
    '48 hour website',
    'quick website',
    'professional website',
    'SEO optimization',
    'web hosting',
    'responsive design',
    'business website',
    'Netherlands web design',
    'website developer',
    'affordable website',
    'fast website delivery',
    'custom website design',
    'small business website'
  ],
  twitterHandle: '@kanobos',
  linkedIn: 'https://www.linkedin.com/company/kanobos',
  email: 'info@kanobos.com',
  phone: '+31-XXX-XXXXXX',
  locale: 'nl_NL',
  alternateLocale: 'en_US',
  ogImage: {
    url: 'https://kanobos.com/og-image.jpg',
    width: 1200,
    height: 630,
    alt: 'Kanobos - Professional Website Design & Development in 48 Hours'
  },
  twitterImage: {
    url: 'https://kanobos.com/twitter-image.jpg',
    width: 1200,
    height: 600,
    alt: 'Kanobos - Professional Website Design & Development in 48 Hours'
  },
  businessInfo: {
    name: 'Kanobos',
    legalName: 'Kanobos B.V.',
    foundingDate: '2020',
    priceRange: '€499-€10000',
    rating: {
      value: 4.9,
      count: 500
    },
    address: {
      country: 'Netherlands',
      countryCode: 'NL'
    }
  }
};

export const generatePageTitle = (pageTitle?: string): string => {
  if (!pageTitle) return seoConfig.defaultTitle;
  return `${pageTitle} | ${seoConfig.siteName}`;
};

export const generatePageDescription = (description?: string): string => {
  return description || seoConfig.defaultDescription;
};

export const generateCanonicalUrl = (path: string = ''): string => {
  return `${seoConfig.siteUrl}${path}`;
};
