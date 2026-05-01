import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Instagram, Menu, X } from 'lucide-react';
import FadeIn from './FadeIn';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // The top alert bar is about 32px tall
      if (window.scrollY > 32) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <FadeIn direction="down" scale={false} className="absolute top-0 left-0 w-full z-50">
      <header className="w-full">
      {/* Top Alert Bar */}
      <div className="w-full bg-black md:bg-brand py-2 px-4 flex justify-center items-center text-white md:text-pureblack z-50 relative">
        <div className="text-center font-bold italic text-[11px] md:text-sm tracking-wider md:tracking-wide">
          <span className="block md:inline">320 McKeever Rd, Arcola, TX —</span>
          <span className="block md:inline md:ml-1">tycal0308@gmail.com — (713) 291-6543</span>
        </div>
        <a 
          href="https://www.instagram.com/tycalk9/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute right-4 flex items-center justify-center bg-pureblack rounded w-7 h-7 hover:bg-white transition-colors group"
        >
          <Instagram className="w-4 h-4 text-brand group-hover:text-pureblack transition-colors" />
        </a>
      </div>

      {/* Main Navigation Bar */}
      <div className={`w-full px-6 flex items-center justify-between border-b-0 md:border-b border-white/10 transition-all duration-300 ${
        isScrolled 
          ? "fixed top-0 left-0 bg-pureblack shadow-lg py-2 z-50 animate-in slide-in-from-top" 
          : "bg-transparent py-4 relative"
      }`}>
        {/* Left: Logo */}
        <div className="flex items-center relative h-full">
          <Link to="/" className={`transition-all duration-300 z-20 block ${
            isScrolled ? "relative w-12 md:w-16 -mb-6 md:-mb-8" : "absolute top-[-20px] md:top-[-28px] left-0 w-14 md:w-32"
          }`}>
             <img src="/tycalk9-logo.png" alt="TyCal K9 Logo" className="w-full h-auto drop-shadow-lg" />
          </Link>
          {/* Spacer to push content to the right of absolute logo */}
          <div className={`transition-all duration-300 ${isScrolled ? "hidden" : "w-28 md:w-32"}`}></div>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
          <Link to="/" className="text-brand hover:text-white transition-colors font-heading text-xl md:text-2xl tracking-wide uppercase">Home</Link>
          <Link to="/about" className="text-white hover:text-brand transition-colors font-heading text-xl md:text-2xl tracking-wide uppercase">About Us</Link>
          <div className="relative group flex items-center gap-1 cursor-pointer py-4">
            <span className="text-white group-hover:text-brand transition-colors font-heading text-xl md:text-2xl tracking-wide uppercase">Services</span>
            <ChevronDown className="w-5 h-5 text-white group-hover:text-brand transition-colors" />
            
            {/* Dropdown Menu */}
            <div className="absolute top-[100%] left-0 w-72 bg-pureblack border-t-2 border-brand opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-2xl z-50 flex flex-col py-2 translate-y-2 group-hover:translate-y-0">
              <Link to="/services/canine-training" className="px-5 py-3 text-gray-300 hover:text-brand hover:bg-white/5 transition-colors font-sans font-medium text-sm tracking-wider uppercase">Canine Training</Link>
              <Link to="/services/dog-obedience-training" className="px-5 py-3 text-gray-300 hover:text-brand hover:bg-white/5 transition-colors font-sans font-medium text-sm tracking-wider uppercase">Dog Obedience Training</Link>
              <Link to="/services/advanced-obedience-training" className="px-5 py-3 text-gray-300 hover:text-brand hover:bg-white/5 transition-colors font-sans font-medium text-sm tracking-wider uppercase">Advanced Obedience Training</Link>
              <Link to="/services/off-leash-obedience-training" className="px-5 py-3 text-gray-300 hover:text-brand hover:bg-white/5 transition-colors font-sans font-medium text-sm tracking-wider uppercase">Off-Leash Obedience Training</Link>
              <Link to="/services/puppy-development" className="px-5 py-3 text-gray-300 hover:text-brand hover:bg-white/5 transition-colors font-sans font-medium text-sm tracking-wider uppercase">Puppy Development</Link>
              <Link to="/services/puppy-training" className="px-5 py-3 text-gray-300 hover:text-brand hover:bg-white/5 transition-colors font-sans font-medium text-sm tracking-wider uppercase">Puppy Training</Link>
              <Link to="/services/puppy-obedience-training" className="px-5 py-3 text-gray-300 hover:text-brand hover:bg-white/5 transition-colors font-sans font-medium text-sm tracking-wider uppercase">Puppy Obedience Training</Link>
              <Link to="/services/board-and-train" className="px-5 py-3 text-gray-300 hover:text-brand hover:bg-white/5 transition-colors font-sans font-medium text-sm tracking-wider uppercase">Board and Train</Link>
              <Link to="/services/protection-dog-work" className="px-5 py-3 text-gray-300 hover:text-brand hover:bg-white/5 transition-colors font-sans font-medium text-sm tracking-wider uppercase">Protection Dog Work</Link>
              <Link to="/services/family-protection-training" className="px-5 py-3 text-gray-300 hover:text-brand hover:bg-white/5 transition-colors font-sans font-medium text-sm tracking-wider uppercase">Family Protection Training</Link>
              <Link to="/services/security-dog-training" className="px-5 py-3 text-gray-300 hover:text-brand hover:bg-white/5 transition-colors font-sans font-medium text-sm tracking-wider uppercase">Security Dog Training</Link>
              <Link to="/services/dog-sports-training" className="px-5 py-3 text-gray-300 hover:text-brand hover:bg-white/5 transition-colors font-sans font-medium text-sm tracking-wider uppercase">Dog Sports Training</Link>
            </div>
          </div>
          <Link to="/gallery" className="text-white hover:text-brand transition-colors font-heading text-xl md:text-2xl tracking-wide uppercase">Gallery</Link>
          <Link to="/#reviews" className="text-brand font-heading text-xl md:text-2xl tracking-wide uppercase hover:text-white transition-colors">Reviews</Link>
          <Link to="/contact" className="text-white hover:text-brand transition-colors font-heading text-xl md:text-2xl tracking-wide uppercase">Contact Us</Link>
          <Link to="/blog" className="text-white hover:text-brand transition-colors font-heading text-xl md:text-2xl tracking-wide uppercase">Blogs</Link>
        </nav>

        {/* Right: Button & Mobile Menu */}
        <div className="flex items-center gap-4">
          <Link to="/contact">
            <button className="hidden lg:block bg-brand text-pureblack font-bold uppercase py-3 px-8 text-sm tracking-widest hover:bg-white transition-colors shadow-lg shadow-brand/20">
              Call Now
            </button>
          </Link>
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden bg-brand p-2 text-pureblack rounded hover:bg-white transition-colors"
            aria-label="Open mobile menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-[85vw] max-w-sm bg-pureblack border-l border-white/10 z-[101] overflow-y-auto transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden flex flex-col ${isMobileMenuOpen ? 'translate-x-0 shadow-2xl' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <img src="/tycalk9-logo.png" alt="TyCal K9" className="h-10 drop-shadow-md" />
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 bg-white/5 hover:bg-brand text-white hover:text-pureblack rounded-full transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col p-6 gap-6">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="font-heading text-2xl tracking-widest uppercase text-white hover:text-brand transition-colors">Home</Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="font-heading text-2xl tracking-widest uppercase text-white hover:text-brand transition-colors">About Us</Link>
          
          <div className="flex flex-col">
            <div 
              className="flex items-center justify-between cursor-pointer group"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              <span className="font-heading text-2xl tracking-widest uppercase text-white group-hover:text-brand transition-colors">Services</span>
              <ChevronDown className={`w-6 h-6 text-brand transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
            </div>
            
            <div className={`flex flex-col gap-4 overflow-hidden transition-all duration-300 ${isServicesOpen ? 'max-h-[1000px] mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="pl-4 border-l-2 border-brand/50 flex flex-col gap-4">
                <Link to="/services/canine-training" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-400 hover:text-brand font-sans tracking-wide uppercase text-sm">Canine Training</Link>
                <Link to="/services/dog-obedience-training" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-400 hover:text-brand font-sans tracking-wide uppercase text-sm">Dog Obedience Training</Link>
                <Link to="/services/advanced-obedience-training" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-400 hover:text-brand font-sans tracking-wide uppercase text-sm">Advanced Obedience</Link>
                <Link to="/services/off-leash-obedience-training" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-400 hover:text-brand font-sans tracking-wide uppercase text-sm">Off-Leash Obedience</Link>
                <Link to="/services/puppy-development" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-400 hover:text-brand font-sans tracking-wide uppercase text-sm">Puppy Development</Link>
                <Link to="/services/puppy-training" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-400 hover:text-brand font-sans tracking-wide uppercase text-sm">Puppy Training</Link>
                <Link to="/services/puppy-obedience-training" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-400 hover:text-brand font-sans tracking-wide uppercase text-sm">Puppy Obedience</Link>
                <Link to="/services/board-and-train" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-400 hover:text-brand font-sans tracking-wide uppercase text-sm">Board and Train</Link>
                <Link to="/services/protection-dog-work" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-400 hover:text-brand font-sans tracking-wide uppercase text-sm">Protection Dog Work</Link>
                <Link to="/services/family-protection-training" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-400 hover:text-brand font-sans tracking-wide uppercase text-sm">Family Protection</Link>
                <Link to="/services/security-dog-training" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-400 hover:text-brand font-sans tracking-wide uppercase text-sm">Security Dog Training</Link>
                <Link to="/services/dog-sports-training" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-400 hover:text-brand font-sans tracking-wide uppercase text-sm">Dog Sports Training</Link>
              </div>
            </div>
          </div>

          <Link to="/gallery" onClick={() => setIsMobileMenuOpen(false)} className="font-heading text-2xl tracking-widest uppercase text-white hover:text-brand transition-colors">Gallery</Link>
          <Link to="/#reviews" onClick={() => setIsMobileMenuOpen(false)} className="font-heading text-2xl tracking-widest uppercase text-brand hover:text-white transition-colors">Reviews</Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="font-heading text-2xl tracking-widest uppercase text-white hover:text-brand transition-colors">Contact Us</Link>
          <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)} className="font-heading text-2xl tracking-widest uppercase text-white hover:text-brand transition-colors">Blogs</Link>
        </div>
        
        <div className="mt-auto p-6 border-t border-white/10 flex flex-col gap-4">
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
            <button className="w-full bg-brand text-pureblack font-bold uppercase py-4 text-sm tracking-widest hover:bg-white transition-colors shadow-lg shadow-brand/20">
              Call Now
            </button>
          </Link>
          <div className="flex items-center justify-center gap-4 mt-4 text-gray-400">
            <a href="https://www.instagram.com/tycalk9/" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors"><Instagram className="w-6 h-6" /></a>
          </div>
        </div>
      </div>
      </header>
    </FadeIn>
  );
}
