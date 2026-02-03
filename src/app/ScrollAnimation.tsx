'use client';

import { useEffect } from 'react';

export default function ScrollAnimation() {
  useEffect(() => {
    // Smooth scroll for anchor links
    const initSmoothScroll = () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e: Event) {
          e.preventDefault();
          const target = e.currentTarget as HTMLAnchorElement;
          const href = target.getAttribute('href');
          if (href) {
            const element = document.querySelector(href);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }
        });
      });
    };

    // Scroll animation with Intersection Observer
    const initScrollAnimation = () => {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
          }
        });
      }, observerOptions);

      document
        .querySelectorAll('.about-item, .skill-category, .project-card, .company-project-item')
        .forEach((el) => {
          const htmlEl = el as HTMLElement;
          htmlEl.style.opacity = '0';
          htmlEl.style.transform = 'translateY(20px)';
          htmlEl.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
          observer.observe(el);
        });
    };

    // Navbar shadow on scroll
    const initNavbarScroll = () => {
      const handleScroll = () => {
        const navbar = document.querySelector('.navbar') as HTMLElement;
        if (navbar) {
          if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
          } else {
            navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
          }
        }
      };

      window.addEventListener('scroll', handleScroll);
    };

    // Initialize all animations
    initSmoothScroll();
    initScrollAnimation();
    initNavbarScroll();

    // Cleanup function
    return () => {
      // Remove event listeners on unmount if needed
    };
  }, []);

  return null;
}
