'use client';

import TypingAnimation from '../TypingAnimation';
import AnimatedShaderBackground from '../ui/animated-shader-background';

interface HeroSectionProps {
  roles: string[];
  visibleElements: Set<string>;
}

export default function HeroSection({ roles, visibleElements }: HeroSectionProps) {
  const isVisible = visibleElements.has('home');

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900"
    >
      {/* Animated aurora shader background */}
      <AnimatedShaderBackground />

      <div
        className={`relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        data-reveal="home"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <span className="text-white">Hi, I'm</span>{' '}
          <span className="text-pink-400">Yagnesh Mangroliya</span>
        </h1>
        <div className="text-2xl md:text-3xl mb-6 text-gray-300 min-h-[3rem]">
          <span className="inline-block">I'm a&nbsp;</span>
          <TypingAnimation words={roles} />
        </div>
        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Turning ideas into systems and chaos into architecture. <br />
          Seeking opportunities to build scalable backends, clean architectures, and AI-driven applications.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="https://drive.google.com/file/d/1VoEwjwyhAJ_y-QJa-9_BvqnjGMFjGjVS/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Resume
          </a>
        </div>

        {/* Social Icons at Bottom */}
        <div className="flex justify-center gap-4 mt-16">
          <a
            href="https://www.linkedin.com/in/yagnesh-mangroliya/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-pink-900/50 transition-all duration-300 transform hover:scale-110 group border border-gray-600 hover:border-pink-500/50"
            aria-label="LinkedIn"
          >
            <svg className="w-6 h-6 text-gray-300 group-hover:text-pink-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="https://github.com/yagnesh44"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-pink-900/50 transition-all duration-300 transform hover:scale-110 group border border-gray-600 hover:border-pink-500/50"
            aria-label="GitHub"
          >
            <svg className="w-6 h-6 text-gray-300 group-hover:text-pink-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
