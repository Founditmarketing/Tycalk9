import { useEffect, useRef, useState, ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  scale?: boolean;
  className?: string;
}

export default function FadeIn({ children, delay = 0, direction = 'up', scale = true, className = '' }: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          if (domRef.current) observer.unobserve(domRef.current);
        }
      },
      { threshold: 0.15 }
    );

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    if (isVisible) return '';
    
    const hiddenScaleClass = scale ? 'scale-95' : '';
    
    switch (direction) {
      case 'up': return `translate-y-12 ${hiddenScaleClass}`;
      case 'down': return `-translate-y-12 ${hiddenScaleClass}`;
      case 'left': return `-translate-x-12 ${hiddenScaleClass}`;
      case 'right': return `translate-x-12 ${hiddenScaleClass}`;
      case 'none': return `${hiddenScaleClass}`;
      default: return `translate-y-12 ${hiddenScaleClass}`;
    }
  };

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${getTransform()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
