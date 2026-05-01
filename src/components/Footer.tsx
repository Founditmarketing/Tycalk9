import { Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full flex flex-col">
      {/* Top Footer */}
      <div className="w-full bg-brand py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-pureblack">
          
          {/* Column 1: Logo */}
          <div className="hidden md:flex justify-center lg:justify-start">
             <img src="/tycalk9-logo.png" alt="TyCal K9 Logo" className="w-48 h-auto object-contain" />
          </div>

          {/* Column 2: Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-3xl uppercase tracking-wide">Contact</h3>
            <div className="flex flex-col gap-3 font-medium">
              <a href="tel:7132916543" className="hover:underline">(713) 291-6543</a>
              <a href="mailto:tycal0308@gmail.com" className="hover:underline">tycal0308@gmail.com</a>
              <p>
                320 McKeever Rd, Arcola,<br />
                TX 77583
              </p>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-3xl uppercase tracking-wide">Quick Link</h3>
            <div className="flex flex-col gap-3 font-medium italic">
              <a href="#" className="hover:underline">Home</a>
              <a href="#" className="hover:underline">About Us</a>
              <a href="#" className="hover:underline">Gallery</a>
              <a href="#" className="hover:underline">Reviews</a>
              <a href="#" className="hover:underline">Contact Us</a>
            </div>
          </div>

          {/* Column 4: Social & Payments */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="font-heading text-3xl uppercase tracking-wide">Follow Us</h3>
              <a 
                href="https://www.instagram.com/tycalk9/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-pureblack rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-colors group"
              >
                <Instagram className="w-5 h-5 text-brand group-hover:text-pureblack transition-colors" />
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-heading text-3xl uppercase tracking-wide leading-none">Accepted<br/>Payments</h3>
              <div className="flex">
                <img src="/tycalk9paymentoptions.webp" alt="Accepted Payments" className="w-56 h-auto object-contain" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Map */}
      <div className="w-full h-[400px] bg-gray-200 relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111244.11029302685!2d-95.53934394017772!3d29.38781708821945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640fbadb904d1ed%3A0x6bba8dddbcf90c6a!2s320%20McKeever%20Rd%2C%20Arcola%2C%20TX%2077583!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={false} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Map to TyCal K9"
          className="absolute inset-0"
        />
        {/* We want standard colors based on prompt: "standard light-mode colors".
            So no grayscale or invert CSS filter on the iframe! */}
      </div>
    </footer>
  );
}
