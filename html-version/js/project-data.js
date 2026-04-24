/* ============================================
   PROJECT DATA - Semua data proyek ada di sini
   ============================================ */

const projectsData = {

    restablog: {
        title: "RestaBlog — Blog CMS Platform",
        subtitle: "Platform blog fullstack dengan content management system modern, editor rich-text, dan optimisasi SEO built-in.",
        category: "Web App",
        image: "../assets/images/project-1.png",
        year: "2025",
        status: "✅ Selesai",
        tech: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS", "Cloudinary", "JWT Auth"],
        description: `
            <p>RestaBlog adalah platform blog modern yang dibangun dari nol menggunakan arsitektur fullstack. 
            Proyek ini menggabungkan frontend Next.js yang cepat dengan backend Node.js/Express yang robust, 
            serta database MongoDB untuk penyimpanan konten yang fleksibel.</p>
            <p>Platform ini dilengkapi dengan CMS admin panel yang intuitif, memungkinkan penulis untuk 
            membuat, mengedit, dan mempublikasikan artikel dengan mudah. Editor WYSIWYG mendukung 
            formatting teks, embed gambar, code blocks, dan banyak lagi.</p>
        `,
        features: [
            { name: "Editor WYSIWYG", desc: "Memudahkan penulis memformat artikel dengan visual yang intuitif tanpa perlu coding." },
            { name: "Dashboard Admin", desc: "Pusat kendali untuk melihat statistik pengunjung dan mengelola semua artikel yang ada." },
            { name: "SEO Optimization", desc: "Meningkatkan visibilitas artikel di mesin pencari Google agar lebih mudah ditemukan pembaca." },
            { name: "Sistem Komentar", desc: "Memungkinkan interaksi langsung antara penulis dan pembaca dengan filter anti-spam." },
            { name: "Image Upload", desc: "Otomatis mengompres gambar sebelum disimpan agar loading website tetap cepat." },
            { name: "Authentication JWT", desc: "Menjaga keamanan akun admin dan memastikan hanya penulis terdaftar yang bisa login." }
        ],
        pages: [
            { icon: "🏠", name: "Homepage", desc: "Landing page dengan daftar artikel terbaru dan featured posts" },
            { icon: "📝", name: "Article Page", desc: "Halaman baca artikel dengan typography yang nyaman" },
            { icon: "🔍", name: "Search & Filter", desc: "Pencarian artikel berdasarkan judul, tag, dan kategori" },
            { icon: "👤", name: "Author Profile", desc: "Profil penulis dengan daftar semua artikel yang ditulis" },
            { icon: "⚙️", name: "Admin Dashboard", desc: "Panel admin untuk mengelola artikel, user, dan statistik" },
            { icon: "✏️", name: "Editor Page", desc: "Halaman editor WYSIWYG untuk menulis dan mengedit artikel" }
        ],
        screenshots: [
            { src: "../assets/images/project-1.png", caption: "Homepage - Daftar Artikel" },
            { src: "../assets/images/project-3.png", caption: "Admin Dashboard" },
            { src: "../assets/images/project-4.png", caption: "Editor WYSIWYG" }
        ]
    },

    shopdash: {
        title: "ShopDash — E-Commerce Dashboard",
        subtitle: "Dashboard admin e-commerce dengan analytics real-time, manajemen produk, dan laporan penjualan komprehensif.",
        category: "Web App",
        image: "../assets/images/project-3.png",
        year: "2025",
        status: "✅ Selesai",
        tech: ["React", "Express.js", "MySQL", "Chart.js", "Redux", "Stripe API"],
        description: `
            <p>ShopDash adalah dashboard admin lengkap untuk toko online yang memberikan visibilitas penuh 
            terhadap operasi bisnis e-commerce. Dibangun dengan React di frontend dan Express.js di backend, 
            dashboard ini mampu menampilkan data real-time dari ratusan transaksi per hari.</p>
            <p>Fitur analytics yang powerful memungkinkan pemilik toko melihat tren penjualan, produk terlaris, 
            customer behavior, dan revenue secara visual melalui chart dan grafik interaktif.</p>
        `,
        features: [
            { name: "Real-time Analytics", desc: "Memberikan data penjualan detik itu juga untuk pengambilan keputusan bisnis yang cepat." },
            { name: "Manajemen Produk", desc: "Fitur CRUD (Create, Read, Update, Delete) agar admin bisa mengatur stok dan harga dengan mudah." },
            { name: "Order Tracking", desc: "Memantau status pesanan pelanggan dari proses packing hingga pengiriman berhasil." },
            { name: "Laporan Keuangan", desc: "Menghasilkan laporan otomatis per minggu atau bulan untuk keperluan akuntansi." },
            { name: "Stripe Integration", desc: "Gerbang pembayaran yang aman untuk memproses transaksi kartu kredit dari seluruh dunia." },
            { name: "Role-based Access", desc: "Membatasi akses karyawan sesuai jabatannya (misal: kasir tidak bisa menghapus produk)." }
        ],
        pages: [
            { icon: "📊", name: "Dashboard Overview", desc: "Ringkasan penjualan, revenue, dan statistik hari ini" },
            { icon: "📦", name: "Products Manager", desc: "CRUD produk dengan upload gambar dan pengaturan varian" },
            { icon: "🛒", name: "Orders List", desc: "Daftar pesanan dengan filter status dan detail tracking" },
            { icon: "👥", name: "Customers", desc: "Database pelanggan dengan history transaksi" },
            { icon: "💰", name: "Revenue Reports", desc: "Laporan keuangan dengan chart dan export data" },
            { icon: "⚙️", name: "Settings", desc: "Pengaturan toko, payment, shipping, dan notifikasi" }
        ],
        screenshots: [
            { src: "../assets/images/project-3.png", caption: "Dashboard Overview" },
            { src: "../assets/images/project-1.png", caption: "Products Manager" },
            { src: "../assets/images/project-5.png", caption: "Revenue Analytics" }
        ]
    },

    taskflow: {
        title: "TaskFlow — Project Management",
        subtitle: "Aplikasi manajemen proyek dengan Kanban board, real-time collaboration, dan deadline tracking.",
        category: "Web App",
        image: "../assets/images/project-4.png",
        year: "2024",
        status: "✅ Selesai",
        tech: ["Vue.js", "Laravel", "PostgreSQL", "WebSocket", "Pusher", "Redis"],
        description: `
            <p>TaskFlow adalah aplikasi manajemen proyek yang dirancang untuk membantu tim bekerja lebih 
            efisien. Dengan tampilan Kanban board yang intuitif, setiap anggota tim dapat melihat, 
            mengatur, dan memindahkan tugas secara real-time.</p>
            <p>Backend dibangun dengan Laravel yang menyediakan API robust dan WebSocket untuk update 
            real-time. Database PostgreSQL memastikan data konsisten dan query performa tinggi.</p>
        `,
        features: [
            { name: "Kanban Board", desc: "Memvisualisasikan alur kerja dengan sistem drag-and-drop agar tim tahu progres tiap tugas." },
            { name: "Real-time Collaboration", desc: "Menghindari bentrok kerja dengan menampilkan siapa yang sedang mengedit tugas yang sama." },
            { name: "Deadline Tracking", desc: "Mengirimkan notifikasi pengingat agar tidak ada proyek yang melewati tenggat waktu." },
            { name: "File Attachment", desc: "Menyimpan semua dokumen yang relevan langsung di dalam tugas agar tidak tercecer." },
            { name: "Activity Log", desc: "Mencatat semua perubahan yang terjadi sebagai bukti audit (siapa melakukan apa, kapan)." },
            { name: "Filter Organisasi", desc: "Membantu manajer menemukan tugas spesifik dengan cepat menggunakan label prioritas." }
        ],
        pages: [
            { icon: "📋", name: "Kanban Board", desc: "Board utama dengan kolom drag-and-drop (To Do, In Progress, Done)" },
            { icon: "📅", name: "Calendar View", desc: "Tampilan kalender untuk melihat deadline dan jadwal task" },
            { icon: "👥", name: "Team Members", desc: "Kelola anggota tim, assign role, dan lihat workload" },
            { icon: "📈", name: "Reports", desc: "Laporan produktivitas tim dan progress proyek" },
            { icon: "⚙️", name: "Project Settings", desc: "Pengaturan proyek, integrasi, dan notifikasi" }
        ],
        screenshots: [
            { src: "../assets/images/project-4.png", caption: "Kanban Board" },
            { src: "../assets/images/project-3.png", caption: "Calendar View" },
            { src: "../assets/images/project-2.png", caption: "Team Reports" }
        ]
    },

    fittrack: {
        title: "FitTrack — Health & Fitness App",
        subtitle: "Aplikasi mobile untuk tracking workout, nutrisi, dan progress kebugaran harian dengan UI yang modern.",
        category: "Mobile App",
        image: "../assets/images/project-2.png",
        year: "2024",
        status: "🔄 Dalam Pengembangan",
        tech: ["React Native", "Firebase", "Firestore", "Google Fit API", "Expo", "Redux"],
        description: `
            <p>FitTrack adalah aplikasi mobile yang membantu pengguna mencapai tujuan kebugaran mereka. 
            Dibangun dengan React Native agar bisa berjalan di Android dan iOS, aplikasi ini menyediakan 
            fitur tracking workout, perhitungan kalori, dan monitoring progress yang komprehensif.</p>
            <p>Integrasi dengan Google Fit API memungkinkan sinkronisasi data langkah, detak jantung, 
            dan aktivitas fisik lainnya secara otomatis.</p>
        `,
        features: [
            { name: "Workout Tracker", desc: "Mencatat setiap set dan repetisi olahraga untuk memantau peningkatan kekuatan tubuh." },
            { name: "Calorie Counter", desc: "Membantu pengguna menjaga asupan nutrisi harian agar sesuai dengan target diet mereka." },
            { name: "Progress Chart", desc: "Memberikan motivasi visual melalui grafik perubahan berat badan dari minggu ke minggu." },
            { name: "Google Fit API", desc: "Menyinkronkan data langkah kaki secara otomatis tanpa perlu input manual." },
            { name: "Achievement System", desc: "Memberikan lencana virtual (gamifikasi) setiap kali pengguna mencapai target baru." },
            { name: "Dark Mode", desc: "Mengurangi ketegangan mata saat membuka aplikasi di malam hari setelah berolahraga." }
        ],
        pages: [
            { icon: "🏠", name: "Home Dashboard", desc: "Ringkasan aktivitas hari ini: langkah, kalori, workout" },
            { icon: "🏋️", name: "Workout Tracker", desc: "Log exercise dengan timer, set, rep, dan berat" },
            { icon: "🍎", name: "Nutrition Log", desc: "Catat makanan dan tracking asupan kalori harian" },
            { icon: "📊", name: "Progress Charts", desc: "Grafik progress berat badan, body fat, dan performa" },
            { icon: "🏆", name: "Achievements", desc: "Badge dan milestone yang sudah dicapai" },
            { icon: "👤", name: "Profile", desc: "Profil pengguna dengan goal setting dan body metrics" }
        ],
        screenshots: [
            { src: "../assets/images/project-2.png", caption: "Home Dashboard" },
            { src: "../assets/images/project-5.png", caption: "Workout Tracker" },
            { src: "../assets/images/project-1.png", caption: "Progress Charts" }
        ]
    },

    foodgo: {
        title: "FoodGo — Food Delivery App",
        subtitle: "Aplikasi food delivery dengan real-time tracking, payment gateway, dan rating system.",
        category: "Mobile App",
        image: "../assets/images/project-5.png",
        year: "2024",
        status: "✅ Selesai",
        tech: ["Flutter", "Node.js", "MongoDB", "Google Maps API", "Midtrans", "Socket.io"],
        description: `
            <p>FoodGo adalah aplikasi food delivery yang menghubungkan pelanggan dengan restoran lokal. 
            Dibangun dengan Flutter untuk cross-platform mobile experience yang smooth, dan Node.js 
            backend untuk handling order real-time.</p>
            <p>Fitur real-time tracking menggunakan Google Maps API dan Socket.io memungkinkan pelanggan 
            melihat posisi driver secara langsung. Payment gateway Midtrans mendukung berbagai metode 
            pembayaran populer di Indonesia.</p>
        `,
        features: [
            { name: "Real-time Tracking", desc: "Menghilangkan kecemasan pelanggan dengan menampilkan posisi driver kurir di peta." },
            { name: "Multi-Payment Gateway", desc: "Meningkatkan rasio konversi pesanan dengan menyediakan metode bayar GoPay, OVO, dll." },
            { name: "Rating & Review", desc: "Menjaga kualitas restoran dan kurir berdasarkan ulasan jujur dari pelanggan lain." },
            { name: "Promo & Diskon", desc: "Sistem voucher untuk menarik pelanggan baru dan mempertahankan pelanggan lama." },
            { name: "Push Notification", desc: "Memberi tahu pelanggan status pesanannya (dimasak, diantar) tanpa harus buka aplikasi." },
            { name: "Order History", desc: "Memudahkan pelanggan untuk memesan ulang makanan favorit mereka hanya dengan satu klik." }
        ],
        pages: [
            { icon: "🏠", name: "Home Feed", desc: "Daftar restoran terdekat dengan filter dan search" },
            { icon: "🍽️", name: "Restaurant Detail", desc: "Menu restoran dengan foto, harga, dan review" },
            { icon: "🛒", name: "Cart & Checkout", desc: "Keranjang belanja dengan pilihan pembayaran" },
            { icon: "🗺️", name: "Live Tracking", desc: "Peta real-time posisi driver dan estimasi sampai" },
            { icon: "⭐", name: "Rating & Review", desc: "Beri rating dan ulasan setelah pesanan selesai" },
            { icon: "📜", name: "Order History", desc: "Riwayat pesanan dengan opsi re-order" }
        ],
        screenshots: [
            { src: "../assets/images/project-5.png", caption: "Home Feed" },
            { src: "../assets/images/project-2.png", caption: "Live Tracking" },
            { src: "../assets/images/project-4.png", caption: "Restaurant Menu" }
        ]
    },

    travelui: {
        title: "TravelUI — Travel App Design",
        subtitle: "UI/UX design lengkap untuk aplikasi travel booking dengan user research, wireframe, dan high-fidelity prototype.",
        category: "UI/UX Design",
        image: "../assets/images/project-4.png",
        year: "2024",
        status: "✅ Selesai",
        tech: ["Figma", "Adobe XD", "Prototyping", "User Research", "Design System", "Illustration"],
        description: `
            <p>TravelUI adalah proyek desain UI/UX komprehensif untuk aplikasi travel booking. Proses 
            desain dimulai dari user research dan competitive analysis, dilanjutkan dengan wireframing, 
            visual design, hingga interactive prototyping.</p>
            <p>Design system yang dibuat mencakup komponen-komponen reusable, color palette, typography 
            scale, dan iconography yang konsisten. Prototype interaktif di Figma memungkinkan stakeholder 
            merasakan alur pengguna sebelum development dimulai.</p>
        `,
        features: [
            { name: "User Research Persona", desc: "Memastikan desain dibuat berdasarkan masalah nyata dari pelancong, bukan sekadar asumsi." },
            { name: "Design System", desc: "Menjaga konsistensi visual di seluruh halaman dan mempercepat proses coding oleh developer." },
            { name: "Interactive Prototype", desc: "Menguji alur aplikasi sebelum ditulis kodenya untuk menghemat biaya perbaikan bug." },
            { name: "Usability Testing", desc: "Mengidentifikasi titik kebingungan pengguna (pain points) lalu memperbaiki desainnya." },
            { name: "Responsive Design", desc: "Memastikan layout tetap indah dan fungsional baik di layar HP kecil maupun tablet." },
            { name: "Accessibility (WCAG)", desc: "Membuat aplikasi bisa digunakan oleh semua orang, termasuk mereka yang memiliki buta warna." }
        ],
        pages: [
            { icon: "🏠", name: "Splash & Onboarding", desc: "Welcome screen dan onboarding flow 3 langkah" },
            { icon: "🔍", name: "Explore & Search", desc: "Halaman pencarian destinasi dengan filter dan peta" },
            { icon: "🏨", name: "Hotel Booking", desc: "Detail hotel, galeri foto, amenities, dan booking form" },
            { icon: "✈️", name: "Flight Search", desc: "Pencarian tiket pesawat dengan filter dan perbandingan" },
            { icon: "📋", name: "Booking Summary", desc: "Ringkasan pemesanan dan konfirmasi pembayaran" },
            { icon: "👤", name: "User Profile", desc: "Profil pengguna, trip history, dan wishlist" }
        ],
        screenshots: [
            { src: "../assets/images/project-4.png", caption: "Home & Explore" },
            { src: "../assets/images/project-1.png", caption: "Hotel Booking Flow" },
            { src: "../assets/images/project-5.png", caption: "Design System Components" }
        ]
    }
};
