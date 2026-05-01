import { useState, useRef, useEffect } from 'react';
import { Star, ChevronLeft } from 'lucide-react';
import VideoPlayer from './VideoPlayer';

const reviews = [
  {
    initial: 'S',
    name: 'Soledad Canas2',
    time: '1 month ago',
    text: 'Manuel does a great job. He knows what he is doing. My dogs are a lot more under control and better behaved. This is the first week back...',
    color: 'bg-purple-600'
  },
  {
    initial: 'C',
    name: 'Cathy H.',
    time: '2 months ago',
    text: 'TyCal J did a phenomenal job training our two dogs! We struggled on walks with pulling, poor impulse control and excessive barking. It...',
    color: 'bg-pink-500'
  },
  {
    initial: 'L',
    name: 'LaQuinta Murphy',
    time: '3 months ago',
    text: 'I dropped Scar off for the boarding with training, with TyCalK9 for 4 weeks and from...',
    color: 'bg-teal-600',
    hasImage: true
  }
];

export default function SocialProof() {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (widgetRef.current && !widgetRef.current.hasChildNodes()) {
      const script = document.createElement('script');
      script.src = 'https://cdn.trustindex.io/loader.js?c9f871660dd509033d369192cb4';
      script.defer = true;
      script.async = true;
      widgetRef.current.appendChild(script);
    }
  }, []);

  return (
    <section id="reviews" className="w-full grunge-bg py-24 px-6 relative">
      <div className="absolute inset-0 bg-pureblack/45 z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-20">
        
        {/* Top Half: Reviews Header & Carousel */}
        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
          
          {/* Left Title */}
          <div className="w-full lg:w-1/3">
            <h2 className="text-white font-heading text-6xl md:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.9]">
              What Our<br/>Clients Say!
            </h2>
          </div>

          {/* Right Reviews Carousel */}
          <div className="w-full lg:w-2/3 flex flex-col gap-6">
            <div ref={widgetRef} className="w-full min-h-[250px]"></div>
          </div>
        </div>

        {/* Bottom Half: 3 Column Videos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { video: "/Video_1-1.mov", poster: "/video-thumb-1.png" },
            { video: "/Video-2.mov", poster: "/video-thumb-3.png" },
            { video: "/Video_3.mov", poster: "/video-thumb-2.png" }
          ].map((vid, idx) => (
            <VideoPlayer key={idx} src={vid.video} poster={vid.poster} />
          ))}
        </div>

      </div>
    </section>
  );
}
