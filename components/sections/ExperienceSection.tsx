'use client';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

interface ExperienceSectionProps {
  experiences: ExperienceItem[];
  visibleElements: Set<string>;
  experienceVisible: boolean[];
}

export default function ExperienceSection({ experiences, visibleElements, experienceVisible }: ExperienceSectionProps) {
  // Icons for different experience types - work/experience related
  const getIcon = (index: number, title: string) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('intern') || lowerTitle.includes('junior')) {
      // Laptop icon for intern/junior positions
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    } else if (index === 0 || lowerTitle.includes('senior') || lowerTitle.includes('lead')) {
      // Briefcase icon for senior/lead positions
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    } else {
      // Building/Office icon for middle positions
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      );
    }
  };


  return (
    <section id="experience" className="py-24 bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Creative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-20 -left-20 w-96 h-96 bg-pink-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-rose-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-fuchsia-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            visibleElements.has('experience') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          data-reveal="experience"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-white">My</span>{' '}
            <span className="text-pink-400">Experience</span>
          </h2>
          <p className="text-xl text-white">A timeline of my work experience and achievements.</p>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-pink-600 hidden lg:block"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              // For even indices (0, 2, 4...): date on LEFT, card on RIGHT
              // For odd indices (1, 3, 5...): date on RIGHT, card on LEFT
              return (
                <div
                  key={index}
                  className="relative flex items-start transition-all duration-700"
                  data-reveal={`exp-${index}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Timeline Icon - Always centered */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white shadow-lg z-10 hidden lg:flex">
                    {getIcon(index, exp.title)}
                  </div>

                  {isEven ? (
                    <>
                      {/* Even: Date on LEFT */}
                      <div className={`hidden lg:flex w-1/2 items-center pr-8 justify-end transition-all duration-700 ${
                        experienceVisible[index] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                      }`}>
                        <div className="text-gray-300 font-semibold text-lg whitespace-nowrap">{exp.period}</div>
                      </div>
                      {/* Even: Card on RIGHT */}
                      <div className={`w-full lg:w-5/12 lg:pl-8 transition-all duration-700 ${
                        experienceVisible[index] ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
                      }`}>
                        <div className="bg-gray-800 rounded-xl shadow-md p-6 md:p-8 transform transition-all duration-500 hover:shadow-lg border border-gray-700">
                          <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                          <h4 className="text-xl text-pink-400 font-semibold mb-4">{exp.company}</h4>
                          <div className="lg:hidden text-gray-400 font-medium mb-4 text-sm">{exp.period}</div>
                          <ul className="list-disc list-inside space-y-2 text-gray-400">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="text-sm md:text-base leading-relaxed">{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Odd: Card on LEFT */}
                      <div className={`w-full lg:w-5/12 lg:pr-8 transition-all duration-700 ${
                        experienceVisible[index] ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
                      }`}>
                        <div className="bg-gray-800 rounded-xl shadow-md p-6 md:p-8 transform transition-all duration-500 hover:shadow-lg border border-gray-700">
                          <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                          <h4 className="text-xl text-pink-400 font-semibold mb-4">{exp.company}</h4>
                          <div className="lg:hidden text-gray-400 font-medium mb-4 text-sm">{exp.period}</div>
                          <ul className="list-disc list-inside space-y-2 text-gray-400">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="text-sm md:text-base leading-relaxed">{achievement}</li>
                            ))}
                          </ul>
                        </div>

                      </div>
                      {/* Odd: Date on RIGHT */}
                      <div className={`hidden lg:flex w-1/2 items-center pl-8 justify-start ml-auto transition-all duration-700 ${
                        experienceVisible[index] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                      }`}>
                        <div className="text-gray-300 font-semibold text-lg whitespace-nowrap">{exp.period}</div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
