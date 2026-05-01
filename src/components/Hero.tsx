import FadeIn from './FadeIn';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative w-full h-[95vh] min-h-[600px] flex items-center grunge-bg overflow-hidden">
      {/* Background image / overlay for extra grunge if needed */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Desktop Container */}
      <div className="hidden md:flex max-w-7xl mx-auto w-full px-6 pt-48 relative z-10 h-full">
        {/* Left Side: Dog Photo */}
        <FadeIn direction="left" delay={200} className="w-[40%] h-full relative">
          <img 
            src="/tycalheroimage-left.png" 
            alt="TyCal K9 Dog" 
            className="absolute bottom-0 left-[-2rem] h-[110%] w-auto object-contain object-bottom drop-shadow-2xl max-w-none"
          />
        </FadeIn>

        {/* Right Side Content */}
        <FadeIn direction="right" delay={400} className="w-full md:w-[60%] flex flex-col justify-center gap-6 pl-0 md:-ml-4">
          <h1 className="font-heading text-[4.5rem] lg:text-[6rem] text-white uppercase leading-[0.9] tracking-tight">
            #1 Dog Training<br />Program in Houston
          </h1>
          <p className="text-gray-400 italic text-3xl md:text-5xl font-heading uppercase tracking-wide mt-2">
             "Where the pros go."
          </p>
          <div className="mt-4">
            <Link to="/contact">
              <button className="bg-brand text-pureblack font-bold uppercase py-4 px-10 text-lg tracking-widest hover:bg-white transition-colors">
                Book A Free Evaluation
              </button>
            </Link>
          </div>
        </FadeIn>
      </div>

      {/* Mobile Container */}
      <div className="md:hidden w-full h-full relative z-10 flex flex-col pt-52 pb-0">
        {/* Mobile Text */}
        <FadeIn direction="down" delay={200} className="px-6 flex flex-col z-20">
          <p className="text-gray-400 italic text-[1.1rem] font-heading uppercase tracking-widest drop-shadow-md">
             "WHERE THE PROS GO."
          </p>
          <h1 className="font-heading text-5xl text-white uppercase leading-[0.9] tracking-tight mt-1 drop-shadow-xl">
            #1 Dog Training<br />Program In<br />Houston
          </h1>
        </FadeIn>
        
        {/* Dog Image & Floating Button */}
        <FadeIn direction="up" delay={400} className="flex-1 relative w-full mt-2">
          <img 
            src="/tycalheroimage-left.png" 
            alt="TyCal K9 Dog" 
            className="w-[80%] h-auto object-contain object-bottom absolute bottom-0 right-[-5%]"
          />
          {/* Button overlay */}
          <div className="absolute bottom-10 w-full px-6 flex justify-center z-20">
            <Link to="/contact">
              <button className="bg-brand text-pureblack font-bold uppercase py-3 px-8 text-sm tracking-widest hover:bg-white transition-colors rounded-md shadow-2xl">
                Free Evaluation
              </button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
