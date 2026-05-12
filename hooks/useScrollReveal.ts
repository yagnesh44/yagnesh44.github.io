'use client';

import { useEffect, useState } from 'react';

export function useScrollReveal(experienceCount: number) {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  const [experienceVisible, setExperienceVisible] = useState<boolean[]>(
    new Array(experienceCount).fill(false)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const id =
            entry.target.id || entry.target.getAttribute('data-reveal') || '';

          if (!id) return;

          if (entry.isIntersecting) {
            // Element enters viewport - add to visible set
            setVisibleElements(prev => {
              const next = new Set(prev);
              next.add(id);
              return next;
            });

            if (id.startsWith('exp-')) {
              const index = parseInt(id.split('-')[1], 10);
              if (!isNaN(index)) {
                setExperienceVisible(prev => {
                  const next = [...prev];
                  next[index] = true;
                  return next;
                });
              }
            }
          } else {
            // Element leaves viewport - remove from visible set to allow re-trigger
            setVisibleElements(prev => {
              const next = new Set(prev);
              next.delete(id);
              return next;
            });

            if (id.startsWith('exp-')) {
              const index = parseInt(id.split('-')[1], 10);
              if (!isNaN(index)) {
                setExperienceVisible(prev => {
                  const next = [...prev];
                  next[index] = false;
                  return next;
                });
              }
            }
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const elements = document.querySelectorAll('[data-reveal], section[id]');
    elements.forEach(el => observer.observe(el));

    setExperienceVisible(new Array(experienceCount).fill(false));

    return () => observer.disconnect();
  }, [experienceCount]);

  return { visibleElements, experienceVisible };
}
