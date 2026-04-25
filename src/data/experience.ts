export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechNusa Solutions",
    location: "Jakarta, Indonesia",
    period: "2023 - Sekarang",
    description: [
      "Memimpin tim frontend yang terdiri dari 4 developer untuk memigrasikan sistem monolitik ke arsitektur micro-frontend menggunakan React dan Next.js.",
      "Mengoptimalkan Core Web Vitals yang berdampak pada peningkatan load time aplikasi sebesar 40%.",
      "Bekerja sama erat dengan tim UI/UX untuk mengimplementasikan Design System perusahaan menggunakan Tailwind CSS."
    ],
    skills: ["React", "Next.js", "Micro-frontends", "Core Web Vitals", "Tailwind CSS"]
  },
  {
    id: 2,
    title: "Fullstack Web Developer",
    company: "Creative Studio Web",
    location: "Jakarta, Indonesia",
    period: "2021 - 2023",
    description: [
      "Membangun dan memelihara lebih dari 15 website E-Commerce dan Company Profile untuk klien dari berbagai industri.",
      "Mengembangkan RESTful API menggunakan Node.js (Express) dan MongoDB untuk kebutuhan sistem manajemen inventaris.",
      "Mengintegrasikan sistem pembayaran (Payment Gateway) Midtrans ke dalam alur checkout e-commerce."
    ],
    skills: ["Node.js", "Express", "MongoDB", "Midtrans", "JavaScript"]
  }
];
