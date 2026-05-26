import { useState, useRef } from 'react';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  aspectRatioClass?: string;
}

export default function VideoPlayer({ src, poster, aspectRatioClass = "aspect-video" }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className={`relative ${aspectRatioClass} border-[1px] border-brand bg-black overflow-hidden rounded-sm group`}>
      <video 
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        controls={isPlaying}
        playsInline
        preload="metadata"
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      />
      {!isPlaying && (
        <div 
          className="absolute inset-0 cursor-pointer flex items-center justify-center"
          onClick={handlePlay}
        >
          {poster && (
            <img src={poster} alt="Video thumbnail" className="absolute inset-0 w-full h-full object-cover z-0" />
          )}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
          
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="w-14 h-14 border-2 border-white rounded-full flex items-center justify-center backdrop-blur-sm bg-black/20 group-hover:scale-110 transition-transform shadow-xl">
              <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1 drop-shadow-md"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
