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
  },
  {
    id: 'technusa-dashboard',
    title: 'TechNusa — Enterprise Resource Planning',
    category: 'web',
    image: '/assets/images/projects/technusa.png',
    images: ['/assets/images/projects/technusa.png'],
    description: 'Dashboard ERP kompleks untuk manajemen sumber daya perusahaan dengan arsitektur micro-frontend.',
    fullDescription: 'Proyek utama di TechNusa yang melibatkan migrasi sistem monolitik ke micro-frontend. Mengelola data karyawan, penggajian, dan performa dalam satu platform terintegrasi.',
    features: [
      'Micro-frontend Architecture',
      'Real-time Analytics Dashboard',
      'Advanced Role-based Access Control',
      'Payroll & Attendance System'
    ],
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
    year: '2024',
    status: 'In Production',
    fileTree: ['packages/shell/src', 'packages/auth/src', 'packages/payroll/src'],
    codeSnippet: `// Micro-frontend Load Example\nconst RemoteApp = React.lazy(() => import('payroll/App'));`,
    links: { live: '#', github: '#' },
    isPrivate: true
  },
  {
    id: 'luxecart',
    title: 'LuxeCart — Premium E-Commerce',
    category: 'web',
    image: '/assets/images/projects/luxecart.png',
    images: ['/assets/images/projects/luxecart.png'],
    description: 'Platform e-commerce premium dengan integrasi pembayaran Midtrans dan manajemen stok otomatis.',
    fullDescription: 'Membangun pengalaman belanja yang mewah dengan performa tinggi. Fokus pada kecepatan load dan alur checkout yang mulus.',
    features: [
      'Midtrans Payment Integration',
      'Inventory Management System',
      'SEO Optimized Product Pages',
      'Automated Email Invoices'
    ],
    tags: ['Node.js', 'Express', 'MongoDB', 'React'],
    year: '2023',
    status: 'Completed',
    fileTree: ['api/routes/payment.js', 'client/src/pages/Checkout.tsx'],
    codeSnippet: `// Midtrans Integration\nconst snap = new midtransClient.Snap({ ... });`,
    links: { live: '#', github: '#' },
    isPrivate: true
  },
  {
    id: 'smart-inventory',
    title: 'SmartInventory — B2B Supply Chain',
    category: 'web',
    image: '/assets/images/projects/inventory.png',
    images: ['/assets/images/projects/inventory.png'],
    description: 'Sistem manajemen rantai pasok untuk klien B2B skala menengah.',
    fullDescription: 'Membantu bisnis mengelola stok barang di berbagai gudang secara real-time dengan notifikasi otomatis saat stok menipis.',
    features: [
      'Multi-warehouse Tracking',
      'Low Stock Alerts',
      'Supplier Management',
      'Detailed Export Reports'
    ],
    tags: ['Node.js', 'MongoDB', 'Chart.js'],
    year: '2022',
    status: 'Completed',
    fileTree: ['src/models/Inventory.js', 'src/controllers/ReportController.js'],
    codeSnippet: `// Stock Alert Logic\nif (item.quantity < item.minThreshold) sendAlert(item.name);`,
    links: { live: '#', github: '#' },
    isPrivate: true
  }
];
