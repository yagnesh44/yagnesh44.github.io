export const experiences = [
  {
    title: 'Software Engineer',
    company: 'Cubes Infotech',
    location: 'India',
    period: 'Aug 2023 - Aug 2024',
    description:
      'Developed RESTful microservices and optimized backend systems with cloud-native technologies.',
    achievements: [
      'Developed RESTful microservices using Spring Boot and integrated backend systems with relational databases — MySQL, optimizing complex SQL queries that reduced data retrieval time by 25%',
      'Optimized system reliability and maintainability by refactoring code and removing 15% of unused components, while enforcing best practices through code reviews',
      'Significantly reduced server usage, saving 20% annually on infrastructure costs by utilizing cloud-native technologies, Docker, Kubernetes, and AWS for containerization and orchestration',
    ],
    technologies: ['Spring Boot', 'MySQL', 'Docker', 'Kubernetes', 'AWS', 'REST APIs']
  },
  {
    title: 'Software Engineer - Intern',
    company: 'Exasoft Infotech LLP',
    location: 'India',
    period: 'May 2023 - July 2023',
    description:
      'Built a React-based online marketplace and implemented automated testing pipelines.',
    achievements: [
      'Built a React-based online marketplace using component-based architecture and Tailwind CSS, enhancing UI/UX and accessibility to boost user adoption by 33% through intuitive navigation',
      'Integrated Polyfills and Modernizr, increasing user accessibility and browser compatibility',
      'Implemented automated frontend testing with Cypress, cutting manual testing by 66%, accelerating the release cycle',
    ],
    technologies: ['React', 'Tailwind CSS', 'Cypress', 'JavaScript', 'Polyfills', 'Modernizr']
  }
];

export const education = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'University of Houston',
    location: 'Houston, TX',
    period: 'Expected May 2026',
    description:
      'GPA: 3.8/4.0. Pursuing advanced coursework in distributed systems, cloud computing, and artificial intelligence.',
    courses: ['Distributed Systems', 'Cloud Computing', 'Software Engineering', 'Artificial Intelligence']
  },
  {
    degree: 'Bachelor of Science in Information Technology',
    institution: 'Dharmsinh Desai University',
    location: 'India',
    period: 'Aug 2020 - May 2024',
    description:
      'Completed rigorous coursework in core computer science and software engineering fundamentals.',
    courses: ['Database Systems', 'Data Structures and Algorithms', 'System Design', 'Software Design Patterns']
  }
];

export const projects = [
  {
    title: 'Legis AI | Business Compliance Platform',
    description: 'Achieved 85%+ relevance accuracy in compliance recommendations by building AI-driven rule generation and personalized matching pipelines using OpenAI GPT models and Firebase Firestore. Improved compliance research efficiency by 60% by aggregating and structuring real-time regulatory data from Regulations.gov, SBA, and IRS APIs into a unified platform.',
    image: '⚖️',
    technologies: ['OpenAI GPT', 'Firebase Firestore', 'REST APIs', 'AI Pipelines'],
    github: 'https://github.com/yagnesh44/Legis',
    featured: true
  },
  {
    title: 'Advance IDE (Turbine)',
    description: 'Built an intelligent IDE with 5+ algorithm visualizers using ElectronJS, ReactJS, and a Python-powered AI function suggestion engine, reducing repetitive coding by over 30 seconds per iteration. Designed and exposed internal REST API endpoints to integrate the LeetCode platform, giving access to 3,000+ problems directly within the IDE. Leveraged Pandas and NumPy for usage analytics and performance profiling, enabling data-driven improvements to the suggestion engine\'s reusability.',
    image: '💻',
    technologies: ['Python', 'MongoDB', 'ElectronJS', 'Node.js', 'React', 'Pandas', 'NumPy'],
    github: 'https://github.com/yagnesh44/Advance-IDE',
    featured: true
  },
  {
    title: 'Airbnb Clone',
    description: 'A scalable booking & availability management platform using Spring Boot (J2EE), Hibernate ORM, and PostgreSQL. Features row-level locking, dynamic pricing engine with Strategy and Factory Design Patterns, and 90%+ code coverage with JUnit/Mockito.',
    image: '🏠',
    technologies: ['Spring Boot', 'PostgreSQL', 'Redis', 'Kafka', 'Docker', 'REST'],
    github: 'https://github.com/yagnesh44/AirBnb',
    featured: true
  },
  {
    title: 'CI/CD Pipeline using AWS Services',
    description: 'A robust CI/CD pipeline using AWS services, reducing deployment time by 90% and improving release reliability with 99.9% application uptime. Features automated testing, artifact generation, and real-time monitoring with Grafana.',
    image: '🚀',
    technologies: ['AWS CodeBuild', 'AWS Lambda', 'Grafana', 'AWS SNS', 'Discord Webhooks'],
    github: 'https://github.com/yagnesh44/simple-python-app',
    featured: true
  },
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website showcasing projects and skills with smooth animations and dynamic design.',
    image: '💼',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
    github: '',
    featured: false
  }
];

export const certificates = [
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2025',
    description: 'Certified Cloud Practitioner by Amazon Web Services (AWS).',
    credential: 'AWS-CCP',
    icon: '☁️',
    link: ''
  },
  {
    title: 'Speech-Based Recognition of Gujarati Numerals',
    issuer: 'IRJET Journal',
    date: '2024',
    description: 'Published research paper in the International Research Journal of Engineering and Technology (IRJET).',
    credential: 'IRJET-PUB',
    icon: '📄',
    link: ''
  },
  {
    title: 'Advanced Software Engineering',
    issuer: 'Walmart USA — Forage',
    date: 'April 2025',
    description: 'Completed the Walmart USA Advanced Software Engineering Virtual Experience Program.',
    credential: 'WALMART-FORAGE',
    icon: '💻',
    link: ''
  },
  {
    title: 'Project TURBINE (IDE) — 3rd National Rank',
    issuer: 'National Competition',
    date: '',
    description: 'Achieved 3rd national-level rank while leading the development of Project TURBINE (IDE).',
    credential: 'TURBINE-3RD',
    icon: '🏆',
    link: ''
  }
];

export const skillCategories = [
  {
    category: 'Frontend',
    color: 'from-pink-500 to-rose-600',
    skills: [
      { name: 'React', level: 90 },
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 80 },
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'TailwindCSS', level: 85 },
      { name: 'Bootstrap', level: 80 }
    ]
  },
  {
    category: 'Backend Development',
    color: 'from-rose-500 to-pink-600',
    skills: [
      { name: 'Java', level: 90 },
      { name: 'Spring Boot', level: 90 },
      { name: 'Hibernate', level: 75 },
      { name: 'Python', level: 85 },
      { name: 'FastAPI', level: 75 },
      { name: 'Flask', level: 75 },
      { name: 'Node.js', level: 80 },
      { name: 'JUnit', level: 75 },
      { name: 'Bash', level: 70 },
      { name: 'MySQL', level: 85 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 80 }
    ]
  },
  {
    category: 'DevOps & Tooling',
    color: 'from-fuchsia-500 to-pink-600',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Maven', level: 75 },
      { name: 'Docker', level: 85 },
      { name: 'Kubernetes', level: 75 },
      { name: 'Linux', level: 80 },
      { name: 'Agile/Scrum', level: 80 },
      { name: 'JIRA', level: 80 }
    ]
  },
  {
    category: 'AI / Machine Learning',
    color: 'from-pink-500 to-fuchsia-600',
    skills: [
      { name: 'TensorFlow', level: 75 },
      { name: 'PyTorch', level: 70 },
      { name: 'Pandas', level: 85 },
      { name: 'Hugging Face', level: 75 },
      { name: 'LLMs', level: 80 },
      { name: 'BERT', level: 70 },
      { name: 'LangChain', level: 75 },
      { name: 'LangGraph', level: 70 }
    ]
  }
];

export const roles = ['Full Stack Developer', 'Software Engineer', 'AI Engineer', 'Backend Developer'];
