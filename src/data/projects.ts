export interface Project {
  id: string;
  title: string;
  category: 'web' | 'mobile' | 'design';
  image: string;
  images: string[];
  description: string;
  fullDescription: string;
  features: string[];
  tags: string[];
  year: string;
  status: string;
  codeSnippet: string;
  fileTree: string[];
  links: {
    live: string;
    github: string;
  };
  isPrivate?: boolean;
}

export const projects: Project[] = [
  {
    id: 'restaprop',
    title: 'RestaProp — Property Management System',
    category: 'web',
    image: '/assets/images/projects/restaprop.png',
    images: [
      '/assets/images/projects/restaprop.png',
      'https://picsum.photos/id/20/1200/800',
      'https://picsum.photos/id/119/1200/800'
    ],
    description: 'Sistem manajemen properti berbasis cloud untuk mengelola inventaris aset, penyewa, dan laporan keuangan dalam satu dashboard.',
    fullDescription: 'RestaProp dirancang untuk membantu pemilik properti skala besar mengotomatisasi proses administrasi. Mulai dari pelacakan jatuh tempo sewa hingga manajemen perbaikan aset, semuanya terintegrasi dalam satu sistem yang aman.',
    features: [
      'Dashboard Analitik Pendapatan Real-time',
      'Manajemen Inventaris Aset & Properti',
      'Sistem Notifikasi Jatuh Tempo Otomatis',
      'Laporan Keuangan Bulanan (PDF/Excel)',
      'Portal Penyewa untuk Pengaduan & Pembayaran',
      'Role-Based Access Control (Admin & Staff)',
      'Integrasi Google Maps untuk Lokasi Aset'
    ],
    tags: ['Next.js', 'PostgreSQL', 'Prisma', 'Tailwind'],
    year: '2024',
    status: 'In Progress',
    fileTree: ['src/app/dashboard/properties/page.tsx', 'src/lib/prisma.ts', 'src/services/billing.ts', 'package.json'],
    codeSnippet: `// Example Service for Auto Billing
export const generateInvoice = async (tenantId: string) => {
  const tenant = await prisma.tenant.findUnique({ where: { id: tenantId } });
  if (!tenant) throw new Error("Tenant not found");

  return await prisma.invoice.create({
    data: {
      amount: tenant.monthlyRent,
      dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      status: 'PENDING',
      tenantId
    }
  });
};`,
    links: { live: '#', github: '#' },
    isPrivate: true
  },
  {
    id: 'finflow',
    title: 'FinFlow — Intelligent Finance Tracker',
    category: 'mobile',
    image: '/assets/images/projects/finflow.png',
    images: [
      '/assets/images/projects/finflow.png',
      'https://picsum.photos/id/3/1200/800',
      'https://picsum.photos/id/2/1200/800'
    ],
    description: 'Aplikasi pelacakan keuangan cerdas yang membantu pengguna memonitor pengeluaran harian dan mencapai target menabung.',
    fullDescription: 'FinFlow menggabungkan kemudahan input data dengan visualisasi analitik yang tajam. Fokus pada pengalaman pengguna yang cepat untuk mencatat setiap transaksi kapanpun dan dimanapun.',
    features: [
      'Input Transaksi Cepat & Kategorisasi Otomatis',
      'Visualisasi Grafik Pengeluaran Interaktif',
      'Sistem Target Tabungan (Savings Goals)',
      'Sinkronisasi Cloud dengan Firebase Auth',
      'Mode Gelap & Terang yang Elegan',
      'Ekspor Riwayat Transaksi ke CSV/XLS',
      'Keamanan PIN & Biometric Authentication'
    ],
    tags: ['React Native', 'Firebase', 'Expo', 'Reanimated'],
    year: '2023',
    status: 'Completed',
    fileTree: ['src/screens/Home.tsx', 'src/hooks/useFinance.ts', 'src/context/AuthContext.tsx', 'app.json'],
    codeSnippet: `// Expense Tracker Hook
export const useTransaction = () => {
  const [transactions, setTransactions] = useState([]);

  const addExpense = (amount: number, category: string) => {
    const newTx = { id: Date.now(), amount, category, date: new Date() };
    setTransactions(prev => [newTx, ...prev]);
    // Sync with Firebase
    saveToCloud(newTx);
  };

  return { transactions, addExpense };
};`,
    links: { live: '#', github: '#' },
    isPrivate: true
  },
  {
    id: 'eduvibe',
    title: 'EduVibe — E-Learning UX Case Study',
    category: 'design',
    image: '/assets/images/projects/eduvibe.png',
    images: [
      '/assets/images/projects/eduvibe.png',
      'https://picsum.photos/id/24/1200/800',
      'https://picsum.photos/id/60/1200/800'
    ],
    description: 'Riset dan perancangan ulang pengalaman pengguna pada platform edukasi online untuk meningkatkan retensi belajar.',
    fullDescription: 'EduVibe berfokus pada penyelesaian masalah kebingungan navigasi pada platform belajar tradisional. Melalui riset pengguna, kami menciptakan antarmuka yang lebih intuitif dan fokus pada konten pembelajaran.',
    features: [
      'Analisis Kompetitor & User Persona',
      'Wireframing & Prototipe High-Fidelity',
      'Design System yang Konsisten & Accessible',
      'Fokus pada Micro-interactions & Feedback',
      'User Testing & Iterasi Berdasarkan Data',
      'Desain Responsif untuk Mobile & Desktop',
      'Dokumentasi Komponen Lengkap di Figma'
    ],
    tags: ['Figma', 'UI/UX', 'Research', 'Prototyping'],
    year: '2024',
    status: 'Case Study',
    fileTree: ['research/personas.pdf', 'wireframes/low-fi.png', 'design-system/atoms.fig', 'prototypes/interaction.mp4'],
    codeSnippet: `// Design System Tokens
export const theme = {
  colors: {
    primary: '#4F46E5', // Indigo-600
    background: '#F9FAFB',
    text: '#111827'
  },
  typography: {
    heading: 'Inter-Bold',
    body: 'Inter-Regular'
  }
};`,
    links: { live: '#', github: '#' },
    isPrivate: true
  }
];
