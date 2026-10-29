/* ============================================================================
   portfolio.js — ALL page content lives here. Components only read from it.

   ── EDIT ME ─────────────────────────────────────────────────────────────────
   • socials.github / socials.linkedin → paste your profile URLs below.
     While they are "", those icons are hidden (no dead links).
   • projects[*].repo  → paste GitHub repo URLs for each project.
   • projects[2].live (my-store-app) → paste your Vercel URL.
   • Put your resume PDF at public/Hariprasad_Mukkera_Resume.pdf (already wired).
   • Put your images in public/images/ (see public/images/README.txt).
   ────────────────────────────────────────────────────────────────────────────
   Facts only — do not invent employers, links, metrics or percentages.
   ============================================================================ */

export const profile = {
  fullName: 'Mukkera Hariprasad',
  displayName: 'Hariprasad',
  brand: 'Hari.dev',
  role: 'Java Full Stack Developer',
  gradYear: '2026',
  degree: 'B.Tech CSE',
  location: 'Hyderabad, Telangana',
  email: 'mukkerahariprasad1849@gmail.com',
  phone: '+91 8985256813',
  // Resume PDF: copy your file to public/Hariprasad_Mukkera_Resume.pdf
  resume: '/Hariprasad_Mukkera_Resume.pdf',
  profileImage: '/images/profile.jpg',

  // ── PASTE YOUR LINKS HERE ("" = hidden, so nothing looks broken) ──
  socials: {
    // e.g. "https://github.com/mukkerahariprasad"
    github: '',
    // e.g. "https://www.linkedin.com/in/mukkerahariprasad"
    linkedin: '',
  },

  summary:
    'Java Full Stack Developer skilled in Spring Boot, Spring Data JPA, MySQL and React.js. Built and deployed FarmBridge, a multi-role marketplace with Docker and GitHub Actions CI/CD, and designed a microservices e-commerce system using Eureka and RabbitMQ. Seeking a Java Full Stack Developer role to build and ship end-to-end web applications.',
}

export const typingRoles = [
  'Java Full Stack Developer',
  'Spring Boot + React.js',
  'REST APIs & Microservices',
  'Docker & CI/CD',
]

export const badge = 'Open to work · 2026 graduate'

export const heroTagline =
  'I build and ship complete web applications — Spring Boot REST APIs, React UIs, MySQL schemas — then deploy them with Docker and CI/CD.'

export const heroButtons = [
  { label: 'View my projects', href: '#projects', kind: 'primary' },
  { label: 'Download resume', href: 'RESUME', kind: 'outline' },
  { label: 'Contact me', href: '#contact', kind: 'ghost' },
]

export const stats = [
  { value: '3', label: 'Projects built' },
  { value: '4', label: 'Microservices designed' },
  { value: '6 mo', label: 'Full stack training' },
  { value: '2', label: 'Live deployments' },
]

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export const aboutParagraphs = [
  "I'm a final-year B.Tech CSE student (2026) and a Java Full Stack Developer. I like owning a feature end to end — from the MySQL schema, to the Spring Boot REST API, to a working React screen, to the live deployment.",
  'My strongest area is the Spring ecosystem: Spring Boot, Spring Security with JWT and role-based access, Spring Data JPA and Hibernate. On the frontend I work with React.js, React Router, Context API, Axios and Tailwind CSS.',
  'I care about how software is shipped, not only how it is written. FarmBridge runs in Docker on Render behind a GitHub Actions CI/CD pipeline, and my microservices e-commerce system uses Eureka for service discovery and RabbitMQ for asynchronous orders.',
]

export const recruiterSnapshot = {
  title: 'Recruiter snapshot',
  rows: [
    { key: 'Looking for', value: 'Java Full Stack Developer role' },
    { key: 'Level', value: '2026 graduate, B.Tech CSE' },
    { key: 'Core stack', value: 'Spring Boot · React.js · MySQL' },
    { key: 'Shipped', value: 'FarmBridge — live on Render with CI/CD' },
    { key: 'Training', value: '6-month full stack program (Student Tribe)' },
    { key: 'Location', value: 'Hyderabad, Telangana' },
  ],
}

export const skills = [
  {
    group: 'Languages',
    items: ['Java', 'SQL', 'JavaScript (ES6+)', 'HTML5', 'CSS3'],
  },
  {
    group: 'Backend',
    items: [
      'Spring Boot',
      'Spring Security',
      'Spring Data JPA',
      'Hibernate',
      'REST APIs',
      'Microservices',
      'JWT',
      'RBAC',
    ],
  },
  {
    group: 'Frontend',
    items: ['React.js', 'React Router', 'Context API', 'Axios', 'Tailwind CSS'],
  },
  {
    group: 'Database',
    items: ['MySQL', 'JPQL', 'Schema Design'],
  },
  {
    group: 'Testing',
    items: ['JUnit 5', 'Spring Boot Test', 'MockMvc', 'Postman'],
  },
  {
    group: 'DevOps & Tools',
    items: ['Docker', 'GitHub Actions (CI/CD)', 'Nginx', 'Git/GitHub', 'Maven', 'Swagger', 'Vercel', 'Render'],
  },
]

export const experience = [
  {
    title: 'Full Stack Development Trainee',
    org: 'Student Tribe',
    orgLogo: '/images/student-tribe.png',
    orgInitials: 'ST',
    period: 'Mar 2026 – Sep 2026',
    points: [
      'Completed a 6-month hands-on full stack development program covering Java, Spring Boot, React.js and MySQL.',
      'Built the React.js frontend of an e-commerce application with product browsing, cart, wishlist and payment-order workflow, and deployed it on Vercel.',
      'Followed Git and GitHub workflows, committing and pushing code in stages across multiple repositories.',
    ],
    tech: ['Java', 'Spring Boot', 'React.js', 'MySQL'],
  },
]


export const projects = [
  {
    id: 'farmbridge',
    name: 'FarmBridge',
    subtitle: 'Farmer-to-Buyer Marketplace',
    image: '/images/farmbridge.png',
    initials: 'FB',
    tag: 'Featured · Live',
    year: '2026',
    role: 'Full Stack Developer (Spring Boot API, React UI, Docker deployment)',
    summary:
      'A multi-role marketplace where Admin, Farmer and Buyer each get their own access — products, orders, reviews, notifications, wishlist and farmer verification.',
    highlights: [
      'Three roles (Admin, Farmer, Buyer) with separate role-based access.',
      'Notifications, reviews and farmer verification flows.',
      'Dockerized and deployed live on Render with a GitHub Actions CI/CD pipeline.',
    ],
    tech: ['Spring Boot', 'React', 'MySQL', 'Docker', 'GitHub Actions'],
    // ── PASTE YOUR LINKS HERE ──
    live: 'https://farmbridge-frontend.onrender.com', // already live
    repo: '', // e.g. "https://github.com/<you>/farmbridge"
  },
  {
    id: 'microservices',
    name: 'E-Commerce Microservices',
    subtitle: 'Product · User · Cart · Order',
    image: '/images/microservices.png',
    initials: 'AVN',
    tag: 'Backend',
    year: '2025',
    role: 'Backend Developer (architecture, service discovery, messaging)',
    summary:
      'An e-commerce backend split into 4 independent Spring Boot services that find and call each other through Eureka — no hard-coded URLs.',
    highlights: [
      '4 independent services (Product, User, Cart, Order) exposing REST APIs.',
      'Eureka service discovery so services register and resolve each other.',
      'RabbitMQ for asynchronous order processing, decoupling the Order service.',
    ],
    tech: ['Spring Boot', 'Eureka', 'RabbitMQ', 'MySQL', 'Spring Data JPA'],
    live: '',
    repo: '', // e.g. "https://github.com/<you>/ecommerce-microservices"
  },
  {
    id: 'mystore',
    name: 'my-store-app',
    subtitle: 'E-Commerce Frontend',
    image: '/images/mystore.png',
    initials: 'MS',
    tag: 'Frontend · Live',
    year: '2026',
    role: 'Frontend Developer (built during Student Tribe training)',
    summary:
      'A React e-commerce storefront with product browsing, cart, wishlist and a full payment-order workflow.',
    highlights: [
      'Product browsing, cart, wishlist and payment-order workflow.',
      'Routing with React Router; cart and wishlist state with Context API.',
      'Axios calls to backend REST APIs; deployed on Vercel.',
    ],
    tech: ['React.js', 'React Router', 'Context API', 'Axios', 'Vercel'],
    live: '', // e.g. "https://my-store-app-yourname.vercel.app"
    repo: '', // e.g. "https://github.com/<you>/my-store-app"
  },
]

export const education = {
  degree: 'B.Tech in Computer Science and Engineering',
  college: 'AVN Institute of Engineering and Technology',
  period: '2022 – 2026',
  cgpa: '7.67 / 10',
  collegeImage: '/images/college.jpg', // missing file → gradient block with “AVN”
  collegeInitials: 'AVN',
  profileImage: '/images/profile.jpg',
  profileInitials: 'HP',
}

export const certifications = [
  { name: 'TCS iON Career Edge – Young Professional', year: '2025' },
  { name: 'Infosys Springboard – Generative AI', year: '2025' },
]

export const availability =
  "I'm available for Java Full Stack Developer roles. Send me a message and I'll get back to you."
