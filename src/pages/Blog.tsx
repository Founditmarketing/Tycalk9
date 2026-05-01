import { Link } from 'react-router-dom';
import { blogData } from '../data/blogData';
import { ArrowRight } from 'lucide-react';

export default function Blog() {
  return (
    <div className="min-h-screen bg-pureblack text-white flex flex-col font-sans">
      {/* Hero Section */}
      <section className="relative w-full pt-48 pb-12 md:pt-64 md:pb-16 flex flex-col items-center justify-center grunge-bg">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <h1 className="font-heading text-6xl md:text-8xl text-white uppercase tracking-wider mb-8 drop-shadow-lg z-10 relative text-center px-4">
          Our Blog
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 z-10 relative text-center px-6 font-medium italic max-w-2xl">
          “Stay up to date with the latest news, tips, and achievements from TyCal K9.”
        </p>
      </section>

      {/* Main Content Section */}
      <section className="w-full py-24 px-6 texture-bg flex-grow">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {blogData.map((post) => (
            <div key={post.slug} className="flex flex-col bg-black/40 border border-white/10 rounded-lg shadow-2xl backdrop-blur-sm overflow-hidden group">
              <Link to={`/blog/${post.slug}`} className="relative h-64 overflow-hidden block">
                <div className="absolute inset-0 bg-brand/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </Link>
              
              <div className="p-8 flex flex-col flex-grow">
                <p className="text-brand font-bold tracking-widest text-sm uppercase mb-3">{post.date}</p>
                <h2 className="font-heading text-3xl uppercase tracking-wide mb-4 text-white group-hover:text-brand transition-colors">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-gray-300 leading-relaxed mb-8 flex-grow">
                  {post.excerpt}
                </p>
                
                <Link 
                  to={`/blog/${post.slug}`} 
                  className="inline-flex items-center gap-2 text-brand font-bold uppercase tracking-widest hover:text-white transition-colors mt-auto w-fit"
                >
                  Read More <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}

        </div>
      </section>
    </div>
  );
}
