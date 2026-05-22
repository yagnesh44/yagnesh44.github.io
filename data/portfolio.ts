export const experiences = [
  {
    title: 'Software Engineer',
    company: 'Cubes Infotech',
    location: 'India',
    period: 'Aug 2023 – Jul 2024',
    description:
      'Designed and optimized RESTful APIs integrated with PostgreSQL and MySQL, reducing latency and containerizing services on AWS.',
    achievements: [
      'Architected distributed RESTful microservices using Java, Spring Boot, and Node.js integrated with PostgreSQL and MySQL — designed complex SQL queries, indexing strategies, and partitioning schemes that reduced data retrieval latency by 25% across high-volume backend services.',
      'Designed and implemented real-time ETL/ELT data pipelines using Kafka-based event streaming and message queues — ingesting, transforming, and routing high-volume data across distributed services with guaranteed delivery, fault tolerance, and sub-second processing latency.',
      'Reduced infrastructure costs 20% annually by architecting containerized deployments on Docker/Kubernetes/AWS — implemented auto-scaling, load balancing, and health-check policies for zero-downtime releases under peak loads.',
      'Implemented observability practices including Prometheus-based alerting, structured logging, and uptime monitoring — improving incident response time and platform SLA compliance across distributed services.',
      'Introduced automated CI/CD pipelines via Jenkins, reducing manual deployment effort by 40% and increasing release frequency while enforcing code quality through reviews and refactoring legacy modules.'
    ],
    technologies: ['PostgreSQL', 'MySQL', 'Docker', 'Kubernetes', 'AWS', 'REST APIs', 'Agile']
  },
  {
    title: 'Software Engineer Intern',
    company: 'Cubes Infotech',
    location: 'India',
    period: 'May 2023 – Jul 2023',
    description:
      'Engineered RESTful API endpoints using Node.js/Express and built reusable ReactJS UI components.',
    achievements: [
      'Developed Java and Node.js RESTful API services integrated with MySQL — optimized query structures and indexing strategies that reduced average backend response time by 20% across core data endpoints.',
      'Built reusable ReactJS UI components following component-based architecture, cutting front-end development time by 25% across multiple features and ensuring consistent design patterns.',
      'Resolved 10+ production issues through structured code reviews and log analysis, improving system stability and gaining hands-on experience with microservice communication patterns and backend performance profiling.'
    ],
    technologies: ['Node.js', 'Express.js', 'MySQL', 'ReactJS', 'REST APIs']
  },
  {
    title: 'Software Engineer Intern',
    company: 'Exasoft Infotech LLP',
    location: 'India',
    period: 'May 2022 – Jul 2022',
    description:
      'Delivered a production React + TypeScript online marketplace from scratch using Tailwind CSS.',
    achievements: [
      'Delivered a production React + TypeScript online marketplace from scratch — built reusable component architecture with Tailwind CSS, boosting user adoption by 33% via improved UX and intuitive navigation',
      'Set up automated end-to-end testing with Cypress, eliminating 66% of manual QA cycles and compressing release timelines significantly in a fast-paced, small-team environment',
      'Extended browser compatibility across legacy environments using Polyfills and Modernizr, broadening the addressable user base without sacrificing modern feature delivery'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Cypress', 'Polyfills', 'Modernizr']
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
    period: 'Aug 2020 – May 2024',
    description:
      'Completed rigorous coursework in core computer science and software engineering fundamentals.',
    courses: ['Database Systems', 'Data Structures and Algorithms', 'System Design', 'Software Design Patterns']
  }
];

export const projects = [
  {
    title: 'Legis AI | Business Compliance Platform',
    description: 'Achieved 85%+ relevance accuracy in compliance recommendations, as measured by rule-to-business matching precision, by building AI-driven rule generation and personalized matching pipelines using OpenAI GPT models and Firebase Firestore. Improved compliance research efficiency by 60%, as measured by reduced manual lookup time, by aggregating and structuring real-time regulatory data from Regulations.gov, SBA, and IRS APIs into a unified platform.',
    image: '⚖️',
    technologies: ['OpenAI GPT', 'Firebase Firestore', 'REST APIs', 'AI Pipelines'],
    github: 'https://github.com/yagnesh44/Legis',
    featured: true
  },
  {
    title: 'Grooming Service Platform',
    description: 'Architected and shipped a full-stack platform end-to-end — real-time chat, appointment scheduling, automated SMS reminders, and service management — built on a Next.js/Node.js/PostgreSQL stack with Redux for state management. Designed a scalable real-time data pipeline supporting live booking updates and concurrent user sessions, increasing booking consistency by 35% and significantly reducing no-shows. Led a small engineering team through full product lifecycle: requirements → architecture → deployment, mirroring the end-to-end ownership model of a high-output startup engineering team.',
    image: '💈',
    technologies: ['Next.js', 'Node.js', 'Express', 'PostgreSQL', 'ReactJS', 'Redux'],
    github: 'https://github.com/yagnesh44',
    featured: true
  },
  {
    title: 'Turbine — Intelligent IDE',
    description: 'Built an AI-powered desktop IDE using ElectronJS and ReactJS, integrating an LLM-driven function suggestion engine that cut repetitive coding by 30+ seconds per iteration via 30% reusable function inference. Integrated the LeetCode API to expose 3,000+ problems in-app, eliminating context switching and demonstrating ability to ship developer-facing tooling with real-world API integrations. Included 5+ algorithm visualizers to improve debugging clarity — awarded 1st place at college level and 3rd place nationally.',
    image: '💻',
    technologies: ['ElectronJS', 'ReactJS', 'Node.js', 'MongoDB', 'LLM Integration', 'Python'],
    github: 'https://github.com/yagnesh44/Advance-IDE',
    featured: true
  },
  {
    title: 'Airbnb Clone',
    description: 'A scalable booking & availability management platform using Spring Boot (J2EE), Hibernate ORM, and PostgreSQL. Features row-level locking, dynamic pricing engine with Strategy and Factory Design Patterns, and 90%+ code coverage with JUnit/Mockito.',
    image: '🏠',
    technologies: ['Spring Boot', 'PostgreSQL', 'Redis', 'Kafka', 'Docker', 'REST'],
    github: 'https://github.com/yagnesh44/AirBnb',
    featured: false
  },
  {
    title: 'CI/CD Pipeline using AWS Services',
    description: 'A robust CI/CD pipeline using AWS services, reducing deployment time by 90% and improving release reliability with 99.9% application uptime. Features automated testing, artifact generation, and real-time monitoring with Grafana.',
    image: '🚀',
    technologies: ['AWS CodeBuild', 'AWS Lambda', 'Grafana', 'AWS SNS', 'Discord Webhooks'],
    github: 'https://github.com/yagnesh44/simple-python-app',
    featured: false
  },
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website showcasing projects and skills with smooth animations and dynamic design.',
    image: '💼',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
    github: 'https://github.com/yagnesh44/yagnesh44.github.io',
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
    issuer: 'International Research Journal of Engineering and Technology (IRJET)',
    date: '2024',
    description: 'Researched and developed a speech recognition system for Gujarati numeral identification, applying signal processing and machine learning techniques to achieve accurate audio-to-text classification for a low-resource regional language.',
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
    title: 'Turbine IDE Award',
    issuer: 'National Competition',
    date: '2024',
    description: 'Turbine IDE: 1st place (college-level), 3rd place (national-level) — Project Leadership Award.',
    credential: 'TURBINE-AWARD',
    icon: '🏆',
    link: ''
  }
];

export const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 90 },
      { name: 'ReactJS', level: 90 },
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 90 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'TailwindCSS', level: 90 },
      { name: 'React Native', level: 80 },
      { name: 'Expo', level: 75 },
      { name: 'AngularJS', level: 70 },
      { name: 'Redux', level: 85 },
      { name: 'Zustand', level: 80 }
    ]
  },
  {
    category: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express.js', level: 90 },
      { name: 'Java', level: 85 },
      { name: 'Spring Boot', level: 85 },
      { name: 'Python', level: 85 },
      { name: 'Django', level: 75 },
      { name: 'Flask', level: 75 },
      { name: 'SQL', level: 90 },
      { name: 'PostgreSQL', level: 90 },
      { name: 'MySQL', level: 85 },
      { name: 'MongoDB', level: 85 },
      { name: 'Redis', level: 80 },
      { name: 'Firebase Firestore', level: 80 },
      { name: 'Oracle', level: 75 },
      { name: 'Cassandra', level: 70 }
    ]
  },
  {
    category: 'DevOps & Tooling',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 85 },
      { name: 'Kubernetes', level: 80 },
      { name: 'AWS', level: 85 },
      { name: 'Azure', level: 75 },
      { name: 'GCP', level: 70 },
      { name: 'Jenkins', level: 75 },
      { name: 'Vercel', level: 85 },
      { name: 'CI/CD', level: 85 },
      { name: 'Cypress', level: 80 },
      { name: 'Jest', level: 80 },
      { name: 'Agile', level: 85 },
      { name: 'JIRA', level: 80 }
    ]
  },
  {
    category: 'AI / Machine Learning',
    skills: [
      { name: 'AI/ML', level: 85 },
      { name: 'LLMs', level: 85 },
      { name: 'GenAI', level: 80 },
      { name: 'System Design', level: 85 },
      { name: 'Distributed Systems', level: 80 },
      { name: 'Real-Time Systems', level: 80 },
      { name: 'OpenAI API', level: 85 },
      { name: 'GraphQL', level: 75 },
      { name: 'WebSockets', level: 80 },
      { name: 'Socket.io', level: 80 },
      { name: 'Twilio SMS', level: 75 },
      { name: 'TensorFlow', level: 70 },
      { name: 'PyTorch', level: 70 },
      { name: 'Pandas', level: 80 },
      { name: 'LangChain', level: 75 },
      { name: 'LangGraph', level: 70 }
    ]
  }
];

export const roles = ['Full-Stack Software Engineer', 'Software Engineer', 'Backend Engineer', 'AI Developer'];
