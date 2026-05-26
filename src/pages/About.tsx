import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="w-full bg-pureblack min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full pt-48 pb-12 md:pt-64 md:pb-16 flex flex-col items-center justify-center grunge-bg">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <h1 className="font-heading text-6xl md:text-8xl text-white uppercase tracking-wider mb-8 drop-shadow-lg z-10 relative text-center px-4">
          About Us
        </h1>
        <Link to="/contact" className="z-10 relative">
          <button className="bg-brand text-pureblack font-bold uppercase py-4 px-10 text-sm md:text-lg tracking-widest hover:bg-white transition-colors shadow-2xl">
            Meet Our Trainer
          </button>
        </Link>
      </section>

      {/* Content Section */}
      <section className="w-full py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left: Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <h2 className="text-white font-heading text-5xl md:text-6xl tracking-wide mb-2">
              About TyCal K9
            </h2>
            <div className="text-gray-300 text-lg flex flex-col gap-6 leading-relaxed">
              <p>
                Founded in 2013 by <strong className="text-white">Manuel Golden</strong>, TyCal K9 has earned a reputation as one of <strong className="text-white">Houston's most trusted names in professional dog training and development</strong>. With more than 12 <strong className="text-white">years of hands-on experience</strong>, our team specializes in obedience, puppy development, protection work, and advanced canine behavior.
              </p>
              <p>
                Every program is built on the principles of <strong className="text-white">discipline, communication, and trust</strong> &mdash; helping dogs reach their full potential and owners build lasting bonds. Whether you're looking for a well-mannered family companion or a high-performing protection dog, TyCal K9 delivers <strong className="text-white">proven results through passion and precision</strong>.
              </p>
              <p className="mt-4 italic font-medium">
                📍 Located in Arcola, TX — Serving Houston and surrounding areas.
              </p>
            </div>
          </div>

          {/* Right: Stats Grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            {/* Box 1: Established */}
            <div className="border border-brand rounded-md p-8 flex flex-col justify-center min-h-[200px]">
              <div className="font-heading text-6xl text-white mb-2">2013</div>
              <div className="text-gray-400 text-xl font-medium">Established</div>
            </div>

            {/* Box 2: Experience */}
            <div className="bg-brand rounded-md p-8 flex flex-col justify-center min-h-[200px] shadow-xl">
              <div className="font-heading text-6xl text-white mb-2">12+</div>
              <div className="text-pureblack text-xl font-bold">Experience years</div>
            </div>

            {/* Box 3: Projects */}
            <div className="bg-brand rounded-md p-8 flex flex-col justify-center min-h-[200px] shadow-xl">
              <div className="font-heading text-6xl text-white mb-2">500+</div>
              <div className="text-pureblack text-xl font-bold">Projects Completed</div>
            </div>

            {/* Box 4: Satisfaction */}
            <div className="border border-brand rounded-md p-8 flex flex-col justify-center min-h-[200px]">
              <div className="font-heading text-6xl text-white mb-2">100</div>
              <div className="text-gray-400 text-xl font-medium">Customer Satisfaction</div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
