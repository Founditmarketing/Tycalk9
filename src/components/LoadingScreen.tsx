import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [phase, setPhase] = useState<'initial' | 'fade-in' | 'shimmer' | 'reveal' | 'unmounted'>('initial');

  useEffect(() => {
    // 1. Trigger fade in slightly after mount
    const fadeInTimer = setTimeout(() => {
      setPhase('fade-in');
    }, 100);

    // 2. Trigger shimmer sweep over the logo
    const shimmerTimer = setTimeout(() => {
      setPhase('shimmer');
    }, 1500); // Wait for fade-in to mostly finish

    // 3. Trigger reveal animation (slide up to reveal site)
    const revealTimer = setTimeout(() => {
      setPhase('reveal');
      onComplete(); // Mount the app content underneath
    }, 3300); // 1500ms fade-in + 800ms shimmer + 1000ms pause

    // 4. Unmount component after slide-up finishes
    const unmountTimer = setTimeout(() => {
      setPhase('unmounted');
    }, 4100); // 800ms for slide up animation

    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(shimmerTimer);
      clearTimeout(revealTimer);
      clearTimeout(unmountTimer);
    };
  }, []); // Empty dependency array to ensure this only runs once

  if (phase === 'unmounted') return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-pureblack flex items-center justify-center transition-opacity duration-800 ease-in-out ${
        phase === 'reveal' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div 
        className={`relative w-28 md:w-40 transition-opacity duration-[1500ms] ease-in-out ${
          phase === 'initial' ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {/* The Logo */}
        <img 
          src="/tycalk9-logo.png" 
          alt="TyCal K9" 
          className="w-full h-auto drop-shadow-2xl"
        />
        
        {/* The Shimmer Sweep Overlay */}
        {/* We use CSS mask to clip the sweep effect exactly to the logo shape */}
        <div 
          className={`absolute inset-0 z-10 pointer-events-none transition-opacity duration-100 ${
            phase === 'shimmer' || phase === 'reveal' ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            WebkitMaskImage: 'url("/tycalk9-logo.png")',
            maskImage: 'url("/tycalk9-logo.png")',
            WebkitMaskSize: 'contain',
            maskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
            maskPosition: 'center',
          }}
        >
          <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-80 ${phase === 'shimmer' || phase === 'reveal' ? 'animate-sweep' : ''}`} />
        </div>
      </div>
    </div>
  );
}
