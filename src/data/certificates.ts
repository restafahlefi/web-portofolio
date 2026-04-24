export interface Signature {
  name: string;
  role: string;
}

export interface Certificate {
  id: string;
  fullId: string;
  title: string;
  issuer: string;
  description: string;
  issueDate: string;
  year: string;
  skills: string[];
  image: string;
  sealText: string;
  qrUrl: string;
  authorityBlock: string;
  signatures: {
    left: Signature;
    right: Signature;
  };
}

export const certificates: Certificate[] = [
  {
    id: 'python-dev',
    fullId: 'IBM-DS-2024-MRF847',
    title: 'PYTHON FOR DATA SCIENCE & AI',
    issuer: 'IBM Professional Certification',
    description: 'Has successfully completed the professional curriculum with distinction and demonstrated exceptional competence in Python, Data Analysis, and AI fundamentals',
    issueDate: 'March 15, 2024',
    year: '2024',
    skills: ['Python', 'Data Analysis', 'AI Basics'],
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
    sealText: 'IBM PROFESSIONAL CERTIFIED - DATA SCIENCE 2024',
    qrUrl: 'https://www.linkedin.com/in/mochamad-resta-fahlefi',
    authorityBlock: 'IBM Corporation | 1 New Orchard Road, Armonk, NY | verify.ibm.com',
    signatures: {
      left: { name: 'Arvind Krishna', role: 'Chairman and CEO, IBM, March 15, 2024' },
      right: { name: 'Dr. Dario Gil', role: 'Senior VP & Director of IBM Research, March 15, 2024' }
    }
  },
  {
    id: 'js-ts-expert',
    fullId: 'META-FE-2023-MRF321',
    title: 'MODERN JAVASCRIPT & TYPESCRIPT MASTERY',
    issuer: 'Meta Front-End Developer Program',
    description: 'Has successfully completed the professional curriculum with distinction and demonstrated exceptional technical competence in ES6+, TypeScript, and Asynchronous JavaScript',
    issueDate: 'November 20, 2023',
    year: '2023',
    skills: ['ES6+', 'TypeScript', 'Async JS'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
    sealText: 'META CERTIFIED FRONT-END ENGINEER 2023',
    qrUrl: 'https://www.linkedin.com/in/mochamad-resta-fahlefi',
    authorityBlock: 'Meta Platforms, Inc. | 1 Hacker Way, Menlo Park, CA | verify.meta.com',
    signatures: {
      left: { name: 'Javier Olivan', role: 'Chief Operating Officer, Meta, Nov 20, 2023' },
      right: { name: 'Dan Abramov', role: 'React Core Team & Co-author of Redux, Nov 20, 2023' }
    }
  },
  {
    id: 'react-nextjs',
    fullId: 'VERCEL-NX-2026-MRF156',
    title: 'PROFESSIONAL REACT & NEXT.JS FRAMEWORK',
    issuer: 'Vercel Certified Developer Program',
    description: 'Has successfully completed the professional curriculum with distinction and demonstrated exceptional expertise in Next.js, React Server Components, and Tailwind CSS',
    issueDate: 'June 10, 2026',
    year: '2026',
    skills: ['Next.js', 'React Server Components', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
    sealText: 'VERCEL CERTIFIED NEXT.JS EXPERT 2026',
    qrUrl: 'https://www.linkedin.com/in/mochamad-resta-fahlefi',
    authorityBlock: 'Vercel Inc. | 340 S Lemon Ave #4133, Walnut, CA | verify.vercel.com',
    signatures: {
      left: { name: 'Guillermo Rauch', role: 'CEO & Founder, Vercel, June 10, 2026' },
      right: { name: 'Lee Robinson', role: 'VP of Developer Experience, Vercel, June 10, 2026' }
    }
  },
  {
    id: 'fullstack-backend',
    fullId: 'UDCT-FS-2025-MRF904',
    title: 'FULLSTACK NODE.JS & PHP LARAVEL',
    issuer: 'Udacity Nanodegree Program',
    description: 'Has successfully graduated from the intensive Nanodegree program and demonstrated exceptional fullstack competence in Node.js, Express, Laravel, and PHP',
    issueDate: 'September 5, 2025',
    year: '2025',
    skills: ['Node.js', 'Laravel', 'Express', 'PHP'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    sealText: 'UDACITY NANODEGREE GRADUATE 2025',
    qrUrl: 'https://www.linkedin.com/in/mochamad-resta-fahlefi',
    authorityBlock: 'Udacity, Inc. | 2465 Latham Street, Mountain View, CA | verify.udacity.com',
    signatures: {
      left: { name: 'Gabriel Dalporto', role: 'CEO, Udacity, Sept 5, 2025' },
      right: { name: 'Sebastian Thrun', role: 'Founder & Chairman, Udacity, Sept 5, 2025' }
    }
  },
  {
    id: 'database-mastery',
    fullId: 'MDB-DB-2022-MRF673',
    title: 'RELATIONAL & NOSQL DATABASE DESIGN',
    issuer: 'MongoDB University / Oracle Academy',
    description: 'Has successfully completed the professional curriculum with distinction and demonstrated exceptional architecture skills in MySQL, MongoDB, and PostgreSQL',
    issueDate: 'August 18, 2022',
    year: '2022',
    skills: ['MySQL', 'MongoDB', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=800',
    sealText: 'MONGODB & ORACLE CERTIFIED DB ARCHITECT 2022',
    qrUrl: 'https://www.linkedin.com/in/mochamad-resta-fahlefi',
    authorityBlock: 'MongoDB, Inc. | 1633 Broadway, New York, NY | verify.mongodb.com',
    signatures: {
      left: { name: 'Dev Ittycheria', role: 'President & CEO, MongoDB Inc., Aug 18, 2022' },
      right: { name: 'Safra Catz', role: 'Chief Executive Officer, Oracle, Aug 18, 2022' }
    }
  },
  {
    id: 'git-web-foundation',
    fullId: 'GHUB-ADV-2021-MRF218',
    title: 'ADVANCED GIT & WEB FOUNDATIONS',
    issuer: 'GitHub Learning Lab',
    description: 'Has successfully completed the advanced curriculum with distinction and demonstrated exceptional mastery in Git, GitHub Actions, HTML5, and CSS/SASS',
    issueDate: 'December 12, 2021',
    year: '2021',
    skills: ['Git', 'GitHub Actions', 'HTML5', 'SASS'],
    image: 'https://images.unsplash.com/photo-1618401471353-b98aade1555a?auto=format&fit=crop&q=80&w=800',
    sealText: 'GITHUB CERTIFIED ADVANCED DEVELOPER 2021',
    qrUrl: 'https://www.linkedin.com/in/mochamad-resta-fahlefi',
    authorityBlock: 'GitHub, Inc. | 88 Colin P Kelly Jr St, San Francisco, CA | verify.github.com',
    signatures: {
      left: { name: 'Thomas Dohmke', role: 'Chief Executive Officer, GitHub, Dec 12, 2021' },
      right: { name: 'Nat Friedman', role: 'Former CEO & Chairman Emeritus, GitHub, Dec 12, 2021' }
    }
  }
];
