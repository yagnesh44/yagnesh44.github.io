'use client';

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  courses: string[];
}

interface EducationSectionProps {
  education: EducationItem[];
  visibleElements: Set<string>;
}

export default function EducationSection({ education, visibleElements }: EducationSectionProps) {
  return (
    <section id="education" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            visibleElements.has('education') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          data-reveal="education"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-pink-400">
            Education
          </h2>
          <p className="text-xl text-gray-400">My academic journey and learning milestones.</p>
        </div>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl bg-gray-800 border border-gray-700 p-6 md:p-8 shadow-md transition-all duration-700 max-w-5xl mx-auto ${
                visibleElements.has(`edu-${index}`) ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
              }`}
              data-reveal={`edu-${index}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/15 via-pink-400/15 to-pink-300/10 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
              <div className="relative z-10">
                <div className="text-pink-400 font-semibold text-lg mb-2">{edu.period}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                <h4 className="text-xl text-pink-400 font-semibold mb-4">{edu.institution}</h4>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {edu.description}
                </p>
                <div>
                  <h5 className="text-sm font-semibold text-gray-300 mb-3">Key Courses:</h5>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-gray-800 border border-pink-500 text-gray-200 rounded-full text-sm font-medium"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
