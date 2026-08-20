import Hero from '../components/Hero';
import Services from '../components/Services';
import AuthorityBanner from '../components/AuthorityBanner';
import SocialProof from '../components/SocialProof';
import FAQ, { faqs } from '../components/FAQ';
import PageSEO, { SITE_URL } from '../components/PageSEO';

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
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
  address: {
    '@type': 'PostalAddress',
    streetAddress: '320 McKeever Rd',
    addressLocality: 'Arcola',
    addressRegion: 'TX',
    postalCode: '77583',
    addressCountry: 'US',
  },
  areaServed: ['Arcola, TX', 'Missouri City, TX', 'Katy, TX', 'Houston, TX'],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <PageSEO
        title="TyCal K9 | Elite Dog Training in Houston & Arcola, TX"
        description="Houston's #1 Dog Training Program. Elite obedience, protection, and puppy development training in Arcola, TX, serving Houston, Missouri City, and Katy."
        path="/"
        schema={[localBusinessSchema, faqSchema]}
      />
      <Hero />
      <Services />
      <AuthorityBanner />
      <SocialProof />
      <FAQ />
    </>
  );
}
