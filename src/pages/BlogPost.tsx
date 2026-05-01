import { useParams, Navigate, Link } from 'react-router-dom';
import { blogData } from '../data/blogData';
import { ArrowLeft } from 'lucide-react';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  
  const post = blogData.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Helper to safely render paragraphs from string content containing newlines
  const renderContent = (content: string) => {
    return content.split('\n\n').map((paragraph, idx) => (
      <p key={idx} className="mb-6 leading-relaxed">
        {paragraph}
      </p>
    ));
  };

  return (
    <div className="w-full bg-pureblack min-h-screen flex flex-col font-sans text-white">
      {/* Hero Section */}
      <section className="relative w-full pt-48 pb-12 md:pt-64 md:pb-16 flex flex-col items-center justify-center grunge-bg">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="max-w-4xl mx-auto px-6 z-10 relative flex flex-col items-center">
          <p className="text-brand font-bold tracking-widest text-lg uppercase mb-4 drop-shadow-md">
            {post.date}
          </p>
          <h1 className="font-heading text-4xl md:text-6xl text-white uppercase tracking-wider mb-8 drop-shadow-lg text-center leading-[1.1]">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full py-20 px-6 flex-grow texture-bg">
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          
          <Link to="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-brand transition-colors w-fit font-bold uppercase tracking-widest text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          {/* Featured Image */}
          <div className="w-full rounded-lg overflow-hidden border-2 border-brand/50 shadow-2xl">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-auto object-cover max-h-[600px]"
            />
          </div>

          {/* Blog Content */}
          <div className="text-gray-300 text-lg md:text-xl">
            {renderContent(post.content)}
          </div>

          {/* CTA */}
          <div className="mt-12 bg-brand/10 border border-brand/30 p-8 md:p-12 rounded-lg text-center flex flex-col items-center gap-6">
            <h3 className="font-heading text-3xl md:text-4xl uppercase text-white tracking-widest">
              Ready to start training?
            </h3>
            <Link to="/contact" className="bg-brand text-pureblack font-bold uppercase py-4 px-10 text-lg tracking-widest hover:bg-white transition-colors shadow-xl inline-block mt-4">
              Get In Touch Today
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
