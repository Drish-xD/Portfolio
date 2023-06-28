import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { RefObject, useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const SplitTextAnime = (): RefObject<HTMLDivElement> => {
  const sectionHeaders = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animation
    const ctx = gsap.context(() => {
      if (sectionHeaders.current) {
        gsap.from(sectionHeaders.current.children, {
          y: '100%',
          ease: 'power3.out',
          duration: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionHeaders.current,
            scrub: true
          }
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return sectionHeaders;
};

export default SplitTextAnime;