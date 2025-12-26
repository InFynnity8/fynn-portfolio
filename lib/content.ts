export type Experience = {
  company: string;
  role: string;
  startDate: string; // ISO or human-friendly
  endDate?: string;
  location?: string;
  summary: string;
  highlights?: string[];
};

export type Education = {
  institution: string;
  degree: string;
  startDate?: string;
  endDate?: string;
  details?: string[];
};

export type Project = {
  title: string;
  description: string;
  link?: string;
  tech?: string[];
};

export type Service = {
  icon?: string;
  title: string;
  description: string;
};



export type SkillCategory = {
  name: string;
  skills: string[];
};

export type SiteContent = {

  name: string;

  title: string;

  bio: string;

  skillCategories: SkillCategory[];

  experience: Experience[];

  projects: Project[];

  education: Education[];

  services: Service[];

  contact: {

    email: string;

    phone: string;

    linkedin: string;

    github: string;

  };

};


export const content: SiteContent = {

  name: "Emmanuel Fynn-Sackey Opoku",

  title: "Software Engineer — Backend & Frontend",

  bio: "I am a driven Software Engineer who builds production-ready web, mobile and desktop experiences. I focus on clean, maintainable code, accessible interfaces, and performant interactions. I have hands-on experience delivering full-stack projects with Angular, React/Next.js, React Native, and real-time features using WebSockets. I enjoy working in Agile teams, iterating on UI/UX, and shipping polished products that solve real user problems.",

  skillCategories: [

    {

      name: "Frontend",

      skills: [

        "TypeScript",

        "React / Next.js",

        "Angular",

        "React Native",

        "Tailwind CSS",

      ],

    },

    {

      name: "Backend",

      skills: [

        "Node.js / Express",

        "NestJS",

        "Rust",

        "RESTful APIs",

        "WebSockets (Socket.IO)",

        "MongoDB",

        "Firebase",

        "SQL",

      ],

    },

    {

      name: "Other",

      skills: ["Electron", "Tauri", "Git & GitHub", "Testing & Debugging"],

    },

  ],

  experience: [

    {

      company: "Amalitech",

      role: "Software Engineering Intern",

      startDate: "2025-09",

      endDate: "2025-10",

      location: "Ghana",

      summary:

        "Built and optimized production web applications, delivering scalable, user-friendly interfaces and real-time collaboration features.",

      highlights: [

        "Delivered two production apps (Eventora and Collabspace) using Angular and TypeScript.",

        "Implemented real-time chat, comments and live updates with Socket.IO.",

        "Worked in an Agile team: code reviews, sprints, and GitHub-based collaboration.",

      ],

    },

    {

      company: "ConnectLoud Africa",

      role: "Software Development Intern",

      startDate: "2024-08",

      endDate: "2024-10",

      location: "Ghana",

      summary:

        "Developed responsive, accessible web interfaces and contributed TypeScript-driven features to improve maintainability and UX across devices.",

      highlights: [

        "Built user-facing components with React and Tailwind CSS.",

        "Improved code quality and reliability through TypeScript adoption and code reviews.",

      ],

    },

    {

      company: "InternhubHQ",

      role: "Frontend Developer Intern",

      startDate: "2023-10",

      endDate: "2024-01",

      location: "Remote",

      summary:

        "Designed and implemented core frontend features for a platform connecting interns with employers, focusing on authentication, forms, and real-time messaging.",

      highlights: [

        "Implemented secure authentication and registration flows.",

        "Built a real-time chat system to connect interns and companies.",

        "Worked with teams to integrate payments and backend services.",

      ],

    },

    {

      company: "Freelance",

      role: "Full-Stack Developer",

      startDate: "2021",

      summary:

        "Delivered end-to-end web and desktop apps for clients, owning design, development and deployment across the stack.",

      highlights: [

        "Built an Invoice Management System and an Electron-based classroom app.",

        "Developed responsive e-commerce sites with Next.js and modern UI/UX patterns.",

      ],

    },

  ],

  projects: [

    {

      title: "Eventora (Event Booking)",

      description:

        "Event booking and ticketing platform built with Angular and TypeScript. Features include seat selection, booking flows, and admin management.",

      tech: ["Angular", "TypeScript", "Socket.IO", "REST APIs"],

    },

    {

      title: "Collabspace (Collaboration Platform)",

      description:

        "A Trello-like collaboration tool with real-time cards, comments and team workflows, focused on reliable sync and smooth interactions.",

      tech: ["Angular", "TypeScript", "WebSockets"],

    },

    {

      title: "Music & School Mobile App",

      description:

        "Mobile experiences built with React Native; integrated Firebase and MongoDB for real-time features and persistent data.",

      tech: ["React Native", "Firebase", "MongoDB"],

    },

    {

      title: "E‑Commerce / Client Projects",

      description:

        "Multiple full-stack client projects using Next.js, Node.js, and modern deployment workflows focused on performance and UX.",

      tech: ["Next.js", "Node.js", "Tailwind CSS"],

    },

  ],

  education: [

    {

      institution: "Kwame Nkrumah University of Science and Technology (KNUST)",

      degree: "BSc Computer Science — Expected Nov 2026",

      startDate: "2022",

      endDate: "2026",

      details: ["Relevant coursework: Data Structures, Algorithms, Web Development"],

    },

    {

      institution: "Mpraeso Senior High School",

      degree: "W.A.S.S.C.E (General Science)",

      startDate: "2019",

      endDate: "2022",

    },

  ],

  services: [

    {

      icon: "web",

      title: "Web Development",

      description: "Building responsive and performant websites with modern technologies with a focus on user experience.",

    },

    {

      icon: "mobile",

      title: "Mobile App Development",

      description: "Creating cross-platform mobile applications with a focus on user experience.",

    },

    {

      icon: "desktop",

      title: "Desktop App Development",

      description: "Developing native desktop applications for Windows and macOS using Electron and Tauri.",

    },

    {

      icon: "backend",

      title: "Backend Development",

      description: "Building robust and scalable backend systems with Node.js, Express, and NestJS.",

    },

    {

      icon: "api",

      title: "API Integration",

      description: "Integrating third-party APIs to extend the functionality of your applications.",

    },

    {

      icon: "seo",

      title: "SEO",

      description: "Optimizing websites for search engines to improve visibility and organic traffic.",

    }

  ],

  contact: {

    email: "sackeyemmanuelfynn@gmail.com",

    phone: "0599515047",

    linkedin: "https://linkedin.com/in/sackeyemmanuelfynn",

    github: "https://github.com/InFynnity8",

  },

};



export default content;
