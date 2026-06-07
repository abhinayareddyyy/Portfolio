export const portfolioData = {
  personal: {
    name: 'Abhinaya Reddy',
    title: 'Software Engineer and Developer',
    subtitle: 'Frontend Developer & Problem Solver',
    email: 'abhinaya.4507@gmail.com',
    phone: '+91 7671941865',
    location: 'India',
    description: "I'm a Software Engineer passionate about building thoughtful digital experiences that blend design, technology, and problem-solving.",
  },

  social: {
    linkedin: 'https://linkedin.com/in/abhinaya-reddy-286326343/',
    github: 'https://github.com/abhinayareddyyy',
    twitter: 'https://twitter.com',
    email: 'mailto:abhinaya.4507@gmail.com',
  },

  about: {
    intro: '',
    story: "I enjoy turning ideas into impactful products, from responsive web applications to user-centric interfaces. Through hackathons and independent projects, I've explored solutions across healthcare, productivity, and front-end engineering.\n\nBeyond code, I'm actively involved in leadership and community-building. As a member of NEN, panel discussion moderator, anchor, public speaker, and social media marketer, I've had the opportunity to engage with diverse audiences, foster meaningful conversations, and bridge the gap between technology and people.",
    closing: "Currently, I'm focused on web development, exploring AI, and building projects that challenge me to grow as both an engineer and a creator.",
    stats: [
      { value: '5+', label: 'Projects Built' },
      { value: '9.63', label: 'CGPA' },
    ],
  },

  education: [
    {
      id: 1,
      institution: 'Geethanjali College of Engineering and Technology',
      degree: 'B.Tech in Computer Science Engineering',
      period: '2024 – 2028',
      score: 'CGPA: 9.63',
      scoreLabel: 'CGPA',
      type: 'University',
      coursework: ['Data Structures & Algorithms', 'Database Management Systems', 'Operating Systems', 'Object-Oriented Programming', 'Web Technologies'],
    },
    {
      id: 2,
      institution: 'Sri Chaitanya Junior Kalasala',
      degree: 'Intermediate — MPC (Mathematics, Physics, Chemistry)',
      period: '2022 – 2024',
      score: '96%',
      scoreLabel: 'Score',
      type: 'Junior College',
      coursework: [],
    },
    {
      id: 3,
      institution: 'Johnson Grammar School',
      degree: 'SSC Curriculum',
      period: '2012 – 2022',
      score: '9.7 GPA',
      scoreLabel: 'Grade',
      type: 'School',
      coursework: [],
    },
  ],

  skills: {
    web: ['HTML', 'CSS', 'JavaScript'],
    programming: ['Java', 'C', 'MySQL'],
    concepts: ['DSA', 'DBMS', 'Operating Systems', 'Web Technologies', 'Object Oriented Programming'],
    tools: ['Git', 'GitHub', 'VS Code', 'Canva'],
  },

  projects: [
    {
      id: 1,
      title: 'NeuroLift',
      description: 'IoT-enabled wearable prototype designed to monitor gait patterns in real-time for rehabilitation assistance during a 36-hour hackathon.',
      technologies: ['Arduino', 'Sensors', 'C#', 'IoT'],
      emoji: '⚙️',
      image: '/images/NeuroLift.jpg',
      github: 'https://github.com/abhinayareddyyy/NEUROLIFT',
      live: '',
      highlights: [
        'Real-time gait pattern monitoring',
        'Hardware and software integration',
        'Healthcare-focused innovation',
      ],
    },
    {
      id: 2,
      title: 'HungerHeal',
      description: 'Responsive web platform connecting food donors, volunteers, and NGOs to facilitate surplus food distribution and reduce food waste.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Web Development'],
      emoji: '🍽️',
      image: '/images/HungerHeal.png',
      github: 'https://github.com/abhinayareddyyy/HungerHeal',
      live: 'https://shimmering-squirrel-a414db.netlify.app/',
      highlights: [
        'Role-based workflow system',
        'Responsive UI design',
        'Social impact solution',
      ],
    },
    {
      id: 3,
      title: 'MintyMind',
      description: 'MintyMind is a web application designed to help users manage their daily tasks efficiently while maintaining an enjoyable user experience. The application leverages Design and Analysis of Algorithms (DAA) concepts to create smart task scheduling and optimization features.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'DAA'],
      emoji: '🧠',
      image: '/images/MintyMind Dark Mode.png',
      github: 'https://github.com/abhinayareddyyy/MintyMind',
      live: 'https://mintymind.vercel.app/',
      highlights: [
        'DAA-powered task scheduling',
        'Smart optimization features',
        'Enjoyable user experience',
      ],
    },
  ],

  experience: [
    {
      id: 1,
      company: 'Social Media Marketer – Communitie Hyderabad',
      role: '@communitie.racing',
      date: 'Feb 2026 – Present',
      type: 'Remote',
      description: 'Developing and executing social media campaigns to increase community visibility and engagement.',
      details: [
        'Developed and executed social media campaigns to increase community visibility and engagement.',
        'Collaborated on content strategy and publishing workflows across platforms.',
        'Managed community interactions and built engagement strategies.',
      ],
      icon: '📱',
    },
    {
      id: 2,
      company: 'National Entrepreneurship Development Cell at GCET (NEN)',
      role: 'Team Member',
      date: 'Aug 2025 – Present',
      type: 'Onsite',
      description: 'Active member contributing to entrepreneurship activities and startup development programs.',
      details: [
        'Active member contributing to entrepreneurship activities and startup development programs.',
        'Facilitated structured discussions as Panel Discussion Moderator and managed audience engagement.',
        'Strengthened communication and public speaking skills through moderation responsibilities.',
      ],
      icon: '🚀',
    },
  ],

  achievements: [
    {
      id: 1,
      title: 'Best TM Award',
      issuer: 'NEN Cell',
      date: '2026',
      description: 'Recognized for outstanding contribution, leadership, and active involvement in organizing events and initiatives.',
      certificate: '/images/Best TM.png',
    },
    {
      id: 2,
      title: 'Academic Topper – GCET',
      issuer: 'Top 2 students in B.Tech',
      date: '2026',
      description: 'Awarded for securing a position among the top 2 students in B.Tech based on academic performance.',
      certificate: '/images/Certificate of Merit.png',
    },
  ],

  volunteering: [
    {
      id: 1,
      title: 'Geenovate 2K25',
      category: 'Hackathon',
      description: 'Participated in Geenovate 2K25 hackathon, building innovative solutions under time pressure.',
      icon: '💡',
    },
    {
      id: 2,
      title: 'Vaisheshika 2K25',
      category: 'Hackathon',
      description: 'Competed in Vaisheshika 2K25, a technical fest hackathon focused on real-world problem solving.',
      icon: '🔬',
    },
    {
      id: 3,
      title: 'Orientation Day Ceremony Anchor – GCET',
      category: 'Anchoring',
      description: 'Served as the official anchor for the Orientation Day Ceremony at GCET, hosting the event for incoming students and faculty.',
      icon: '🎤',
    },
    {
      id: 4,
      title: 'NSS – Health & Hygiene Awareness',
      category: 'Volunteering',
      description: 'Educated young girls on hygiene and health at a local ashram as part of NSS outreach initiatives.',
      icon: '🤝',
    },
    {
      id: 5,
      title: 'Bhaswara 2026',
      category: 'Volunteering',
      description: 'Volunteered at Bhaswara 2026, contributing to event coordination and management.',
      icon: '🌟',
    },
  ],

  contact: {
    title: 'Get In Touch',
    description: 'Feel free to reach out. Whether you have a question or just want to connect, feel free to get in touch.',
    links: [
      { label: 'Email', value: 'abhinaya.4507@gmail.com', href: 'mailto:abhinaya.4507@gmail.com', icon: '✉️' },
      { label: 'LinkedIn', value: 'linkedin.com/in/p-abhinaya-reddy', href: 'https://linkedin.com/in/p-abhinaya-reddy', icon: 'in' },
      { label: 'GitHub', value: 'github.com/abhinayareddyyy', href: 'https://github.com/abhinayareddyyy', icon: 'github' },
    ],
  },

  navigation: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Volunteering', href: '#volunteering' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ],
};
