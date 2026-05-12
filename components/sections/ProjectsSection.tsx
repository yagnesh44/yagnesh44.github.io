'use client';

interface ProjectItem {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  featured: boolean;
}

interface ProjectsSectionProps {
  projects: ProjectItem[];
  visibleElements: Set<string>;
}

export default function ProjectsSection({ projects, visibleElements }: ProjectsSectionProps) {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  // Get icon component for project
  const getProjectIcon = (image: string) => {
    if (image === '🛒') {
      return (
        <svg className="w-24 h-24 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      );
    } else if (image === '📝') {
      return (
        <svg className="w-24 h-24 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      );
    }
    return <span className="text-8xl">{image}</span>;
  };

  // Get small icon for other projects
  const getSmallIcon = (image: string) => {
    if (image === '📋') {
      return (
        <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      );
    } else if (image === '🌤️') {
      return (
        <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z" />
        </svg>
      );
    }
    return <span className="text-2xl">{image}</span>;
  };

  return (
    <section id="projects" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Subtle dotted pattern */}
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            visibleElements.has('projects') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          data-reveal="projects"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-pink-400">
            Projects
          </h2>
          <p className="text-xl text-gray-400">A selection of my best and personal projects.</p>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-left">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={`${project.title}-featured`}
                className={`relative bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-700 group flex flex-col ${
                  visibleElements.has(`project-${index}`) ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
                }`}
                data-reveal={`project-${index}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative z-10 flex flex-col flex-1">
                  <div className="h-48 bg-pink-900/30 flex items-center justify-center transition-colors duration-500 group-hover:bg-pink-900/50 flex-shrink-0">
                    <div className="group-hover:scale-110 transition-transform duration-500">
                      {getProjectIcon(project.image)}
                    </div>
                  </div>
                  <div className="p-6 transition-colors duration-500 group-hover:bg-gray-700/70 rounded-b-xl flex flex-col flex-1">
                    <h4 className="text-2xl font-bold text-pink-400 mb-3">{project.title}</h4>
                    <p className="text-gray-400 mb-4 leading-relaxed group-hover:text-gray-200 flex-1">{project.description}</p>
                    <div className="mt-auto">
                      <h5 className="text-sm font-semibold text-gray-300 mb-2">Tech Stack:</h5>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-800 text-gray-200 border border-pink-400/60 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-150 transition-all duration-700 ease-out"
                    style={{
                      background:
                        'radial-gradient(circle at center, rgba(244,114,182,0.65) 0%, rgba(236,72,153,0.35) 45%, rgba(236,72,153,0) 75%)'
                    }}
                  />
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out pointer-events-auto"
                    aria-label="View project on GitHub"
                  >
                    <svg className="w-12 h-12 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.563 21.8 24 17.302 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-white mb-8 text-left">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.slice(0, 3).map((project, index) => (
              <div
                key={`${project.title}-other`}
                className={`relative bg-gray-800 rounded-xl shadow-md p-6 transform transition-all duration-700 group hover:shadow-lg overflow-hidden flex flex-col ${
                  visibleElements.has(`project-other-${index}`) ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
                }`}
                data-reveal={`project-other-${index}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative z-10 -m-6 p-6 rounded-xl transition-colors duration-500 group-hover:bg-gray-700/70 flex flex-col flex-1">
                  <div className="mb-4 flex-shrink-0">
                    {getSmallIcon(project.image)}
                  </div>
                  <h4 className="text-xl font-bold text-pink-400 mb-2">{project.title}</h4>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed flex-1">{project.description}</p>
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="mt-auto">
                      <h5 className="text-xs font-semibold text-gray-300 mb-2">Tech Stack:</h5>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-0.5 bg-gray-800 text-gray-200 border border-pink-400/60 rounded-full text-[11px] font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-150 transition-all duration-700 ease-out"
                    style={{
                      background:
                        'radial-gradient(circle at center, rgba(244,114,182,0.65) 0%, rgba(236,72,153,0.35) 45%, rgba(236,72,153,0) 75%)'
                    }}
                  />
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out pointer-events-auto"
                    aria-label="View project on GitHub"
                  >
                    <svg className="w-10 h-10 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.563 21.8 24 17.302 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
