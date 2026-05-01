import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import VideoPlayer from './VideoPlayer';

interface VideoItem {
  src: string;
  poster?: string;
}

interface VideoCarouselProps {
  videos: VideoItem[];
}

export default function VideoCarousel({ videos }: VideoCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  if (!videos || videos.length === 0) return null;

  return (
    <div className="relative w-full flex flex-col gap-6">
      {/* Embla Carousel Viewport */}
      <div className="overflow-hidden w-full px-4 md:px-12" ref={emblaRef}>
        {/* Embla Container */}
        <div className="flex touch-pan-y" style={{ backfaceVisibility: 'hidden' }}>
          {videos.map((vid, idx) => (
            <div 
              key={idx} 
              className="flex-[0_0_auto] min-w-0 w-48 md:w-64 mr-4 md:mr-6 transition-transform duration-300 hover:scale-[1.02] py-2"
            >
              <div className="w-full relative rounded-md shadow-lg bg-black overflow-hidden ring-2 ring-brand/20 hover:ring-brand/50 transition-all">
                <VideoPlayer 
                  src={vid.src} 
                  poster={vid.poster}
                  aspectRatioClass="aspect-[9/16]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Under Carousel */}
      <div className="flex justify-center px-4 md:px-12 gap-6 max-w-7xl mx-auto w-full mt-2">
        <button 
          onClick={scrollPrev}
          className="p-3 md:p-4 bg-pureblack/50 hover:bg-brand text-white hover:text-pureblack rounded-full transition-all duration-300 border border-white/10 shadow-xl"
          aria-label="Previous videos"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
        </button>
        <button 
          onClick={scrollNext}
          className="p-3 md:p-4 bg-pureblack/50 hover:bg-brand text-white hover:text-pureblack rounded-full transition-all duration-300 border border-white/10 shadow-xl"
          aria-label="Next videos"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      </div>
    </div>
  );
}
