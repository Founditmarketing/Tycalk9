import { SITE_URL } from '../components/PageSEO';

export const ORG_ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: '320 McKeever Rd',
  addressLocality: 'Arcola',
  addressRegion: 'TX',
  postalCode: '77583',
  addressCountry: 'US',
};

export const ORG_AREA_SERVED = ['Arcola, TX', 'Missouri City, TX', 'Katy, TX', 'Houston, TX'];

export function buildOrganizationSchema(type: 'Organization' | 'LocalBusiness') {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    name: 'TyCal K9',
    image: `${SITE_URL}/tycalheroimage-left.png`,
    url: SITE_URL,
    telephone: '+17132916543',
    email: 'tycal0308@gmail.com',
    priceRange: '$$',
    foundingDate: '2013',
    founder: {
      '@type': 'Person',
      name: 'Manuel Golden',
    },
    address: ORG_ADDRESS,
    areaServed: ORG_AREA_SERVED,
  };
}
