// hooks/useLenis.ts
import { useEffect } from 'react';
import Lenis from 'lenis';

export const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => t * (2 - t), // Adjust easing curve as needed
      smoothWheel: true,
      // smoothTouch: false, // Removed as it is not a valid property
      infinite: false,
    });

    const animate = () => {
      lenis.raf(1);
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      lenis.destroy();
    };
  }, []);
};
