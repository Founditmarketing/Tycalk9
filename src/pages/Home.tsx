import Hero from '../components/Hero';
import Services from '../components/Services';
import AuthorityBanner from '../components/AuthorityBanner';
import SocialProof from '../components/SocialProof';
import FAQ from '../components/FAQ';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <AuthorityBanner />
      <SocialProof />
      <FAQ />
    </>
  );
}
