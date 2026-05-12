'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

interface CertificateItem {
  title: string;
  issuer: string;
  date: string;
  description: string;
  credential: string;
  icon: string;
  link?: string;
  image?: string;
  articleLink?: string;
  certificateLink?: string;
}

interface CertificationsSectionProps {
  certificates: CertificateItem[];
  visibleElements: Set<string>;
}

// Get icon component based on certificate type
const getCertificateIcon = (icon: string, issuer: string, title: string) => {
  const lowerIssuer = issuer.toLowerCase();
  const lowerTitle = title.toLowerCase();
  
  if (lowerIssuer.includes('aws') || lowerIssuer.includes('amazon')) {
    return (
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" 
        alt="AWS Logo" 
        className="w-12 h-12 object-contain"
      />
    );
  }
  if (lowerIssuer.includes('oracle')) {
    return (
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" 
        alt="Oracle Logo" 
        className="w-12 h-12 object-contain"
      />
    );
  }
  if (lowerTitle.includes('publication') || lowerTitle.includes('research') || lowerIssuer.includes('ijcea') || icon === '📄') {
    return (
      <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75h6m-6 3h6m-6-1.5h6" />
      </svg>
    );
  }
  return (
    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
};

export default function CertificationsSection({ certificates, visibleElements }: CertificationsSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeLoopIndex, setActiveLoopIndex] = useState(0);
  const isVisible = visibleElements.has('certificates');

  const total = certificates.length;
  const extendedCertificates = useMemo(
    () => [...certificates, ...certificates, ...certificates],
    [certificates]
  );
  const middleStart = total;

  const clampLoopIndex = (index: number) => {
    const loopLength = extendedCertificates.length;
    if (loopLength === 0) return 0;
    return (index % loopLength + loopLength) % loopLength;
  };

  const normalizeLoopIndex = (index: number) => {
    if (total === 0) return index;
    if (index < total) return index + total;
    if (index >= total * 2) return index - total;
    return index;
  };

  const focusCard = (loopIndex: number, smooth = true) => {
    if (!scrollRef.current || !cardRefs.current[loopIndex]) return;
    const container = scrollRef.current;
    const card = cardRefs.current[loopIndex]!;
    const cardCenter = card.offsetLeft + card.offsetWidth / 2;
    const scrollLeft = cardCenter - container.offsetWidth / 2;
    container.scrollTo({ left: scrollLeft, behavior: smooth ? 'smooth' : 'auto' });
  };

  const scrollCertificates = (direction: 'left' | 'right') => {
    if (total === 0) return;
    const delta = direction === 'left' ? -1 : 1;
    const next = normalizeLoopIndex(clampLoopIndex(activeLoopIndex + delta));
    setActiveLoopIndex(next);
    focusCard(next);
  };

  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, extendedCertificates.length);
    if (total > 0) {
      const initialIndex = middleStart;
      setActiveLoopIndex(initialIndex);
      requestAnimationFrame(() => focusCard(initialIndex, false));
    }
  }, [extendedCertificates.length, middleStart, total]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const updateActiveCard = () => {
      const containerCenter = container.scrollLeft + container.offsetWidth / 2;
      let closestIndex = middleStart;
      let closestDistance = Infinity;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const distance = Math.abs(cardCenter - containerCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      const normalizedIndex = normalizeLoopIndex(closestIndex);
      if (normalizedIndex !== closestIndex) {
        requestAnimationFrame(() => focusCard(normalizedIndex, false));
      }
      setActiveLoopIndex(normalizedIndex);
    };

    const handleScroll = () => {
      requestAnimationFrame(updateActiveCard);
    };

    updateActiveCard();
    container.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateActiveCard);

    return () => {
      container.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateActiveCard);
    };
  }, [certificates.length]);

  return (
    <section id="certificates" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Subtle dotted pattern */}
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          data-reveal="certificates"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-white">Certificates &</span>{' '}
            <span className="text-pink-400">Achievements</span>
          </h2>
          <p className="text-xl text-gray-400">A collection of my professional certifications and notable achievements.</p>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-16 bg-gradient-to-r from-gray-900 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-16 bg-gradient-to-l from-gray-900 to-transparent z-10" />
          <button
            onClick={() => scrollCertificates('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-pink-900/50 hover:bg-pink-800 text-pink-400 rounded-full p-3 shadow-md transition-all duration-300 hover:scale-110 hidden md:flex items-center justify-center"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => scrollCertificates('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-pink-900/50 hover:bg-pink-800 text-pink-400 rounded-full p-3 shadow-md transition-all duration-300 hover:scale-110 hidden md:flex items-center justify-center"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div
            ref={scrollRef}
            className="overflow-x-auto pb-12 scrollbar-hide scroll-smooth snap-x snap-mandatory"
          >
            <div className="flex gap-6 min-w-max justify-center items-center px-6 sm:px-10">
              {extendedCertificates.map((cert, index) => {
                const originalIndex = total > 0 ? index % total : 0;
                return (
                <div
                  key={index}
                    ref={(el) => { cardRefs.current[index] = el; }}
                  data-cert-card
                    className={`relative group snap-center flex-shrink-0 min-w-[70vw] sm:min-w-[420px] lg:min-w-[460px] transition-all duration-300 ease-out ${
                      index === activeLoopIndex ? 'scale-100 opacity-100 z-20' : 'scale-90 opacity-40'
                  }`}
                  data-reveal={`cert-${index}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-500/30 via-rose-400/20 to-gray-900 blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none" />
                    <div
                      className={`relative rounded-3xl border backdrop-blur flex flex-col transition-all duration-500 ${
                        (cert.issuer.toLowerCase().includes('aws') || cert.issuer.toLowerCase().includes('amazon') || cert.issuer.toLowerCase().includes('oracle'))
                          ? 'p-5 sm:p-6 h-auto min-h-[320px] items-center justify-center'
                          : 'p-6 sm:p-8 h-full'
                      } ${
                        index === activeLoopIndex
                          ? 'border-pink-300 shadow-2xl bg-gray-900/70'
                          : 'border-gray-800 bg-gray-900/30'
                    }`}
                  >
                    {/* Special layout for Barclays hackathon card */}
                    {cert.image ? (
                      <>
                        <div className="mb-5 rounded-xl overflow-hidden h-40 flex items-center justify-center bg-gray-800/50">
                          <img 
                            src={cert.image} 
                            alt={cert.title}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                        <p className="text-xs uppercase tracking-[0.3em] text-gray-500 text-center mb-3">
                          {cert.issuer}
                        </p>
                        <h3 className="text-2xl font-bold text-white text-center mb-2">{cert.title}</h3>
                        <p className={`text-sm text-gray-400 text-center ${cert.description ? 'mb-4' : 'mb-6'}`}>{cert.date}</p>
                        {cert.description && (
                          <p className="text-sm text-gray-300 leading-relaxed mb-6 flex-grow text-center">
                            {cert.description}
                          </p>
                        )}

                      </>
                    ) : (
                      <>
                        {(() => {
                          const isAWSOrOracle = cert.issuer.toLowerCase().includes('aws') || cert.issuer.toLowerCase().includes('amazon') || cert.issuer.toLowerCase().includes('oracle');
                          return (
                            <>
                              <div className={`flex justify-center ${isAWSOrOracle ? 'mb-4' : 'mb-5'}`}>
                                <div
                                  className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-500 ${
                                    cert.issuer.toLowerCase().includes('aws') || cert.issuer.toLowerCase().includes('amazon') || cert.issuer.toLowerCase().includes('oracle') || cert.title.toLowerCase().includes('publication') || cert.title.toLowerCase().includes('research') || cert.issuer.toLowerCase().includes('ijcea')
                                      ? index === activeLoopIndex
                                        ? 'border-2 border-pink-500 scale-105 bg-white'
                                        : 'border-2 border-pink-600/70 bg-white'
                                      : index === activeLoopIndex
                                        ? 'bg-gradient-to-br from-pink-500 to-rose-500 scale-105'
                                        : 'bg-pink-600/70'
                                  }`}
                                >
                                  {getCertificateIcon(cert.icon, cert.issuer, cert.title)}
                                </div>
                              </div>
                              <p className={`text-xs uppercase tracking-[0.3em] text-gray-500 text-center ${isAWSOrOracle ? 'mb-2' : 'mb-3'}`}>
                                {cert.issuer}
                              </p>
                              <h3 className={`text-2xl font-bold text-white text-center ${isAWSOrOracle ? 'mb-2' : 'mb-2'}`}>{cert.title}</h3>
                              <p className={`text-sm text-gray-400 text-center ${isAWSOrOracle ? 'mb-6' : cert.description ? 'mb-6' : 'mb-8'}`}>{cert.date}</p>
                              {cert.description && (
                                <p className={`text-sm text-gray-300 leading-relaxed ${isAWSOrOracle ? 'mb-6' : 'mb-6'} text-center`}>
                                  {cert.description}
                                </p>
                              )}

                            </>
                          );
                        })()}
                      </>
                    )}
                  </div>
                </div>
              );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
