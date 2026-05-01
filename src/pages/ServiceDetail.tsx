import { useParams, Navigate, Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  
  // Find the matching service by slug
  const service = servicesData.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="w-full bg-pureblack min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full pt-48 pb-12 md:pt-64 md:pb-16 flex flex-col items-center justify-center grunge-bg">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <h1 className="font-heading text-6xl md:text-8xl text-white uppercase tracking-wider mb-8 drop-shadow-lg z-10 relative text-center px-4">
          {service.title}
        </h1>
        <Link to="/contact" className="z-10 relative">
          <button className="bg-brand text-pureblack font-bold uppercase py-4 px-10 text-sm md:text-lg tracking-widest hover:bg-white transition-colors shadow-2xl">
            Call Now
          </button>
        </Link>
      </section>

      {/* Content Section */}
      <section className="w-full py-20 px-6 flex-grow">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left: Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:sticky lg:top-32">
            <h2 className="text-white font-heading text-5xl md:text-6xl tracking-wide mb-2 leading-[1.1]">
              {service.subtitle}
            </h2>
            <div className="text-gray-300 text-lg flex flex-col gap-6 leading-relaxed">
              <p>{service.description}</p>
            </div>
            <div className="mt-8">
              <Link to="/contact">
                <button className="bg-brand text-pureblack font-bold uppercase py-4 px-10 text-sm md:text-lg tracking-widest hover:bg-white transition-colors shadow-xl">
                  Call Now
                </button>
              </Link>
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-full lg:w-1/2 flex justify-center pt-4">
            <img 
              src={service.image} 
              alt={service.title}
              className="w-full h-auto rounded-md border-2 border-brand shadow-2xl"
            />
          </div>

        </div>
      </section>
    </div>
  );
}
