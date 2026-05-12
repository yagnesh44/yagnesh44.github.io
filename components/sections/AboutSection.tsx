'use client';

import Image from 'next/image';

interface AboutSectionProps {
  visibleElements: Set<string>;
}

export default function AboutSection({ visibleElements }: AboutSectionProps) {
  const aboutCardVisible = visibleElements.has('about-card');

  return (
    <section id="about" className="min-h-screen flex items-center bg-gray-800 py-12">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div
          className={`bg-gray-900 rounded-2xl shadow-lg p-10 md:p-16 lg:p-20 transform transition-all duration-1000 ease-out w-full ${
            aboutCardVisible ? 'opacity-100 translate-x-0 translate-y-0 scale-100 rotate-0' : 'opacity-0 translate-x-10 translate-y-10 scale-90 rotate-1'
          }`}
          data-reveal="about-card"
        >
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 lg:gap-20">
            {/* Left Section - Text Content */}
            <div className="flex-1 w-full md:w-auto">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="text-white">About</span>{' '}
                <span className="text-pink-400">Me</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8 text-lg md:text-lg max-w-2xl">
              Hey there! I&apos;m a Software Engineer pursuing my MS in Computer Science at the University of Houston (GPA: 3.8/4.0).
              I have hands-on experience building RESTful microservices with Spring Boot, optimizing SQL-heavy backends, and deploying cloud-native solutions using AWS, Docker, and Kubernetes.
              I&apos;ve shipped production code that cut data retrieval times by 25%, saved 20% on infra costs, and boosted user adoption by 33%.
              I&apos;m passionate about building scalable, reliable systems and I&apos;m currently seeking full-time opportunities in Software Engineering, Cloud, or Full Stack Development.
              </p>
              <div className="flex items-center text-gray-400 text-lg">
                <svg className="w-6 h-6 text-pink-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Houston, TX</span>
              </div>
            </div>

            {/* Right Section - Profile Picture */}
            <div className="flex-shrink-0">
              <div className={`w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-pink-900/30 border-2 border-pink-700 flex items-center justify-center shadow-inner overflow-hidden relative transition-all duration-700 ease-out ${
                aboutCardVisible 
                  ? 'opacity-100 translate-x-0 translate-y-0 scale-100' 
                  : 'opacity-0 translate-x-20 translate-y-10 scale-75'
              }`}>
                <div className="absolute inset-0">
                  <Image 
                    src="/profile.png" 
                    alt="Yagnesh Mangroliya" 
                    fill
                    className={`object-cover rounded-full transition-all duration-700 ease-out ${
                      aboutCardVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'
                    }`}
                    style={{ objectPosition: 'center center' }}
                    sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
