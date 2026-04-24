export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Rivera",
    role: "CTO",
    company: "TechFlow Systems",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
    content: "Resta adalah engineer yang luar biasa. Dia tidak hanya menulis kode yang bersih, tapi juga memahami arsitektur sistem skala besar dengan sangat baik."
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Product Manager",
    company: "Creative Pulse",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    content: "Kemampuannya menerjemahkan kebutuhan bisnis yang kompleks menjadi fitur yang intuitif sangat membantu tim kami mencapai target lebih cepat."
  },
  {
    id: 3,
    name: "David Chen",
    role: "Senior Developer",
    company: "Global Stack",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    content: "Bekerja bersama Resta dalam proyek CMS adalah pengalaman yang menyenangkan. Dia selalu memperhatikan detail kecil yang sering terlewatkan orang lain."
  },
  {
    id: 4,
    name: "Linda Wijaya",
    role: "CEO",
    company: "StartUp Indonusa",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
    content: "Proyek ShopDash yang dia bangun benar-benar mengubah cara kami mengelola inventaris. Efisiensi operasional kami naik drastis!"
  },
  {
    id: 5,
    name: "Michael Scott",
    role: "Director of IT",
    company: "Dunder Solutions",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
    content: "Kualitas kodenya sangat stabil. Sejak deployment, kami hampir tidak pernah menemukan bug yang berarti. Sangat direkomendasikan!"
  },
  {
    id: 6,
    name: "Anya Taylor",
    role: "UI/UX Lead",
    company: "Design Sphere",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
    content: "Melihat bagaimana dia mengimplementasikan desain TravelUI saya ke dalam kode yang responsif dan smooth adalah sebuah kepuasan tersendiri."
  },
  {
    id: 7,
    name: "Budi Santoso",
    role: "Fullstack Developer",
    company: "Freelance",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150",
    content: "Resta adalah mentor yang hebat di komunitas. Pengetahuannya tentang Next.js dan TypeScript benar-benar di atas rata-rata."
  },
  {
    id: 8,
    name: "Jessica Low",
    role: "Operations Lead",
    company: "LogiNext",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150",
    content: "Dashboard analitik yang dia buat sangat user-friendly. Tim lapangan kami bisa menggunakannya tanpa perlu training yang lama."
  },
  {
    id: 9,
    name: "Robert Downey",
    role: "Lead Engineer",
    company: "Stark Tech",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150",
    content: "Implementasi keamanan data pada RestaBlog sangat solid. Dia benar-benar memikirkan aspek enkripsi dan proteksi dari awal."
  },
  {
    id: 10,
    name: "Siti Aminah",
    role: "Project Manager",
    company: "GovTech ID",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150",
    content: "Komunikasi yang baik dan selalu on-time. Resta adalah developer yang sangat profesional dan bisa diandalkan untuk deadline ketat."
  },
  {
    id: 11,
    name: "James Wilson",
    role: "Fitness Coach",
    company: "FitLife Academy",
    image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=150",
    content: "Aplikasi FitTrack yang dikembangkan Resta sangat membantu klien saya melacak progres mereka. UI-nya sangat memotivasi!"
  },
  {
    id: 12,
    name: "Grace Hopper",
    role: "Cloud Architect",
    company: "Nebula Cloud",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=150",
    content: "Pengetahuannya tentang skalabilitas cloud dan optimasi server sangat impresif. Arsitektur backend-nya sangat efisien."
  }
];
