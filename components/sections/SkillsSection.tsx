'use client';

import React from 'react';

interface SkillCategory {
  category: string;
  skills: { name: string; level: number }[];
}

interface SkillsSectionProps {
  skillCategories: SkillCategory[];
  visibleElements: Set<string>;
}

// Convert level (0-100) to stars (0-5)
const getStarRating = (level: number): number => {
  return Math.round((level / 100) * 5);
};

// Star rating component
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center justify-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

// Get icon for skill - using CDN URLs for proper tech logos
const getSkillIcon = (skillName: string) => {
  const iconUrls: { [key: string]: string } = {
    // Frontend
    'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'ReactJS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    'HTML5': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    'CSS3': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    'TailwindCSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
    'Bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    'React Native': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'Expo': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/expo.svg',
    'AngularJS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
    'Redux': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
    'Zustand': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/react.svg',
    // Backend
    'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    'Spring Boot': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
    'Hibernate': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg',
    'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'FastAPI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
    'Flask': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    'Django': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
    'JUnit': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/junit/junit-original.svg',
    'Bash': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg',
    'SQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'Redis': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    'Firebase Firestore': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg',
    'Oracle': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg',
    'Cassandra': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cassandra/cassandra-original.svg',
    'GraphQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
    'WebSockets': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/socketdotio.svg',
    'Socket.io': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg',
    'OpenAI API': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg',
    'Twilio SMS': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twilio.svg',
    // DevOps & Tooling
    'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    'Maven': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg',
    'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    'Kubernetes': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
    'Linux': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
    'Agile/Scrum': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/agile.svg',
    'Agile': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/agile.svg',
    'JIRA': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg',
    'AWS': 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
    'Azure': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
    'GCP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
    'Jenkins': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
    'Vercel': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/vercel.svg',
    'CI/CD': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/githubactions.svg',
    'Cypress': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/cypress.svg',
    'Jest': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
    // AI / Machine Learning
    'AI/ML': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/intel.svg',
    'LLMs': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg',
    'GenAI': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg',
    'System Design': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/diagramsdotnet.svg',
    'Distributed Systems': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
    'Real-Time Systems': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg',
    'TensorFlow': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
    'PyTorch': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
    'Pandas': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
    'Hugging Face': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/huggingface.svg',
    'BERT': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/huggingface.svg',
    'LangChain': 'https://raw.githubusercontent.com/langchain-ai/.github/main/profile/lc-square.png',
    'LangGraph': 'https://raw.githubusercontent.com/langchain-ai/.github/main/profile/langgraph.png',
  };

  const iconUrl = iconUrls[skillName];

  if (iconUrl) {
    return (
      <img
        src={iconUrl}
        alt={skillName}
        className="w-full h-full object-contain"
        loading="lazy"
      />
    );
  }

  // Fallback for skills without icons
  return (
    <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
      <span className="text-white text-xs">{skillName.charAt(0)}</span>
    </div>
  );
};

export default function SkillsSection({ skillCategories, visibleElements }: SkillsSectionProps) {
  // Use categories directly as they are now organized into 4 categories
  const organizedCategories = skillCategories;

  // Category gradient colors matching the theme
  const categoryGradients: { [key: string]: string } = {
    'Frontend': 'from-pink-500/20 via-rose-500/20 to-fuchsia-500/20',
    'Backend Development': 'from-rose-500/20 via-pink-500/20 to-purple-500/20',
    'DevOps & Tooling': 'from-fuchsia-500/20 via-purple-500/20 to-pink-500/20',
    'AI / Machine Learning': 'from-pink-500/20 via-fuchsia-500/20 to-purple-500/20',
  };

  return (
    <section id="skills" className="py-24 bg-gray-800 relative overflow-hidden">
      {/* Subtle dotted pattern */}
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${visibleElements.has('skills') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          data-reveal="skills"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-white">My</span>{' '}
            <span className="text-pink-400">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg mt-4">Technologies I work with</p>
        </div>

        <div className="space-y-16">
          {organizedCategories.map((category, catIndex) => {
            const gradient = categoryGradients[category.category] || 'from-pink-500/20 to-fuchsia-500/20';
            return (
              <div
                key={category.category}
                className={`transition-all duration-700 ${visibleElements.has(`skill-cat-${catIndex}`) ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
                  }`}
                data-reveal={`skill-cat-${catIndex}`}
                style={{ transitionDelay: `${catIndex * 150}ms` }}
              >
                {/* Category Header */}
                <div className="relative mb-10">
                  <h3 className="text-2xl font-bold text-pink-400 mb-2 text-center">
                    {category.category}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="flex flex-wrap justify-center gap-6 md:gap-7">
                  {category.skills.map((skill, skillIndex) => {
                    const rating = getStarRating(skill.level);
                    return (
                      <div
                        key={skill.name}
                        className={`group relative w-24 h-24 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 shadow-lg border border-gray-600/50 transform transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-pink-500/20 hover:border-pink-500/50 flex flex-col items-center justify-center p-2.5 overflow-hidden ${visibleElements.has(`skill-${catIndex}-${skillIndex}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                          }`}
                        data-reveal={`skill-${catIndex}-${skillIndex}`}
                        style={{ transitionDelay: `${skillIndex * 50}ms` }}
                      >
                        {/* Content - Icon and Name */}
                        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full group-hover:opacity-0 transition-opacity duration-300">
                          <div className="flex justify-center items-center mb-1.5">
                            <div className="w-12 h-12 flex items-center justify-center bg-gray-800/50 rounded-lg p-2">
                              {getSkillIcon(skill.name)}
                            </div>
                          </div>
                          <p className="text-gray-200 font-medium text-xs text-center leading-tight">{skill.name}</p>
                        </div>

                        {/* Star rating - visible on hover */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                          <StarRating rating={rating} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}