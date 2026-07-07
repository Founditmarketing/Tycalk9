import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const LAST_UPDATED = 'June 30, 2026';

export default function PrivacyPolicy() {
  useEffect(() => {
    document.getElementById('main-scroller')?.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-pureblack text-white flex flex-col font-sans">
      {/* Hero Section */}
      <section className="relative w-full pt-48 pb-12 md:pt-64 md:pb-16 flex flex-col items-center justify-center grunge-bg">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <h1 className="font-heading text-5xl md:text-8xl text-white uppercase tracking-wider mb-6 drop-shadow-lg z-10 relative text-center px-4">
          Privacy Policy
        </h1>
        <p className="text-base md:text-lg text-gray-300 z-10 relative text-center px-6 font-medium italic">
          Last Updated: {LAST_UPDATED}
        </p>
      </section>

      {/* Main Content Section */}
      <section className="w-full py-20 md:py-24 px-6 texture-bg flex-grow">
        <div className="max-w-3xl mx-auto flex flex-col gap-10">

          <p className="text-gray-300 text-lg leading-relaxed">
            TyCal K9 (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy. This Privacy
            Policy explains what information we collect when you visit{' '}
            <span className="text-brand">tycalk9.com</span>, how we use it, and the choices you have. By
            using our website or contacting us, you agree to the practices described below.
          </p>

          {/* Section */}
          <div className="flex flex-col gap-4">
            <h2 className="font-heading text-2xl md:text-3xl text-brand uppercase tracking-wide">
              Information We Collect
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              We only collect information you choose to provide and basic technical data needed to run
              the site:
            </p>
            <ul className="flex flex-col gap-3 text-gray-300 text-lg leading-relaxed">
              <li className="pl-5 border-l-2 border-brand/40">
                <span className="text-white font-semibold">Information you give us.</span> When you submit
                our contact form, we collect your name, email address, phone number, the service you&rsquo;re
                interested in, and any message you send. We use this only to respond to your inquiry.
              </li>
              <li className="pl-5 border-l-2 border-brand/40">
                <span className="text-white font-semibold">Information collected automatically.</span> Like
                most websites, we collect standard usage data such as your browser type, device, pages
                viewed, and general location, gathered through cookies and analytics tools.
              </li>
            </ul>
          </div>

          {/* Section */}
          <div className="flex flex-col gap-4">
            <h2 className="font-heading text-2xl md:text-3xl text-brand uppercase tracking-wide">
              How We Use Your Information
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              We use the information we collect to respond to your questions and booking requests,
              provide and improve our training services, understand how visitors use our site, and
              communicate with you about your inquiry. We do not sell or rent your personal information
              to anyone.
            </p>
          </div>

          {/* Section */}
          <div className="flex flex-col gap-4">
            <h2 className="font-heading text-2xl md:text-3xl text-brand uppercase tracking-wide">
              Cookies &amp; Analytics
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              We use cookies and similar technologies, including Google Analytics, Google Tag Manager,
              and Google Ads, to measure site traffic and improve our marketing. These tools may set
              cookies in your browser. You can disable cookies in your browser settings at any time, and
              you can opt out of Google Analytics using Google&rsquo;s{' '}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand hover:underline"
              >
                opt-out browser add-on
              </a>
              .
            </p>
          </div>

          {/* Section */}
          <div className="flex flex-col gap-4">
            <h2 className="font-heading text-2xl md:text-3xl text-brand uppercase tracking-wide">
              Third-Party Services
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Some content and features on our site are provided by trusted third parties, each with its
              own privacy policy:
            </p>
            <ul className="flex flex-col gap-3 text-gray-300 text-lg leading-relaxed">
              <li className="pl-5 border-l-2 border-brand/40">
                <span className="text-white font-semibold">Instagram</span> &mdash; embedded posts and reels.
              </li>
              <li className="pl-5 border-l-2 border-brand/40">
                <span className="text-white font-semibold">Google Maps</span> &mdash; the map showing our
                facility location.
              </li>
              <li className="pl-5 border-l-2 border-brand/40">
                <span className="text-white font-semibold">TrustIndex</span> &mdash; the customer reviews
                widget.
              </li>
              <li className="pl-5 border-l-2 border-brand/40">
                <span className="text-white font-semibold">Found It CRM</span> &mdash; processes contact-form
                submissions securely.
              </li>
            </ul>
          </div>

          {/* Section */}
          <div className="flex flex-col gap-4">
            <h2 className="font-heading text-2xl md:text-3xl text-brand uppercase tracking-wide">
              Your Choices &amp; Rights
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              You may request to see, correct, or delete the personal information you&rsquo;ve shared with
              us at any time. To do so, just contact us using the details below and we&rsquo;ll be happy to
              help. We retain contact-form submissions only as long as needed to respond to your inquiry
              and for our records.
            </p>
          </div>

          {/* Section */}
          <div className="flex flex-col gap-4">
            <h2 className="font-heading text-2xl md:text-3xl text-brand uppercase tracking-wide">
              Children&rsquo;s Privacy
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our website is intended for adults. We do not knowingly collect personal information from
              children under 13. If you believe a child has provided us information, please contact us and
              we will delete it.
            </p>
          </div>

          {/* Section */}
          <div className="flex flex-col gap-4">
            <h2 className="font-heading text-2xl md:text-3xl text-brand uppercase tracking-wide">
              Changes to This Policy
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              We may update this Privacy Policy from time to time. When we do, we&rsquo;ll revise the
              &ldquo;Last Updated&rdquo; date at the top of this page. We encourage you to review it
              periodically.
            </p>
          </div>

          {/* Contact block */}
          <div className="flex flex-col gap-4 bg-black/40 border border-white/10 rounded-lg p-8 md:p-10">
            <h2 className="font-heading text-2xl md:text-3xl text-brand uppercase tracking-wide">
              Contact Us
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              If you have any questions about this Privacy Policy or your information, reach out to us:
            </p>
            <div className="flex flex-col gap-2 text-gray-200 text-lg">
              <span className="font-semibold text-white">TyCal K9</span>
              <a href="https://maps.google.com/?q=320+McKeever+Rd,+Arcola,+TX+77583" target="_blank" rel="noopener noreferrer">320 McKeever Rd, Arcola, TX 77583</a>
              <a href="tel:+17132916543" className="text-brand hover:underline w-fit">(713) 291-6543</a>
              <a href="mailto:tycal0308@gmail.com" className="text-brand hover:underline w-fit">tycal0308@gmail.com</a>
            </div>
            <Link
              to="/contact"
              className="mt-4 w-fit bg-brand text-pureblack font-bold uppercase py-4 px-8 text-sm tracking-widest hover:bg-white transition-colors shadow-lg shadow-brand/20"
            >
              Contact Form
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
