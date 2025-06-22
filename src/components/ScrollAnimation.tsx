
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-up' | 'slide-left' | 'slide-right' | 'scale-in';
  delay?: number;
  duration?: number;
}

const ScrollAnimation = ({ 
  children, 
  className, 
  animation = 'fade-in',
  delay = 0,
  duration = 600
}: ScrollAnimationProps) => {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true
  });

  const getAnimationClasses = () => {
    const baseClasses = `transition-all duration-${duration}`;
    const delayClass = delay > 0 ? `delay-${delay}` : '';
    
    switch (animation) {
      case 'fade-in':
        return cn(
          baseClasses,
          delayClass,
          isVisible 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-4'
        );
      case 'slide-up':
        return cn(
          baseClasses,
          delayClass,
          isVisible 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-8'
        );
      case 'slide-left':
        return cn(
          baseClasses,
          delayClass,
          isVisible 
            ? 'opacity-100 transform translate-x-0' 
            : 'opacity-0 transform translate-x-8'
        );
      case 'slide-right':
        return cn(
          baseClasses,
          delayClass,
          isVisible 
            ? 'opacity-100 transform translate-x-0' 
            : 'opacity-0 transform -translate-x-8'
        );
      case 'scale-in':
        return cn(
          baseClasses,
          delayClass,
          isVisible 
            ? 'opacity-100 transform scale-100' 
            : 'opacity-0 transform scale-95'
        );
      default:
        return baseClasses;
    }
  };

  return (
    <div 
      ref={elementRef}
      className={cn(getAnimationClasses(), className)}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
