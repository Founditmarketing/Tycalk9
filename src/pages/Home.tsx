import Hero from '../components/Hero';
import Services from '../components/Services';
import AuthorityBanner from '../components/AuthorityBanner';
import SocialProof from '../components/SocialProof';
import FAQ, { faqs } from '../components/FAQ';
import PageSEO from '../components/PageSEO';
import { buildOrganizationSchema } from '../data/organizationSchema';

const localBusinessSchema = buildOrganizationSchema('LocalBusiness');

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
