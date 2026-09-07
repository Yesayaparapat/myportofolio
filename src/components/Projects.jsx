import React, { useState, useEffect, useRef } from 'react';
import GlowCard from './GlowCard';

// Import Bootcamp Final Project assets
import projectBootcamp1 from '../assets/project/ProjectBootcamp1.png';
import projectBootcamp2 from '../assets/project/ProjectBootcamp2.png';

// Import Absensi project assets
import absensi1 from '../assets/project/absensi1.png';
import absensi2 from '../assets/project/absensi2.png';

// Import Sistem Pakar Tanaman Hias project assets
import tanamanHias1 from '../assets/project/sistem pakar tanaman hias.png';
import tanamanHias2 from '../assets/project/sistem pakar tanaman hias2.png';

// Import Wedding Invitation project assets
import weddingWeb from '../assets/project/wedingweb.png';

// Import PT Super Spring Technical Test assets
import takeHome1 from '../assets/project/Take-hometask.png';
import takeHome2 from '../assets/project/Take-hometask2.png';

// Import Apotek Asrama UNAI project assets
import tugasKampus from '../assets/project/tugasKampus.png';

// Import TOEFL Simulation project assets
import tofleImg from '../assets/project/testsimulasitofle.png';

// Import Weather App project assets
import weatherAppImg from '../assets/project/weatherApp.png';

// Import Password Generator project assets
import passwordGenImg from '../assets/project/generatePassword.png';

// Import QR Code Generator project assets
import qrCodeImg from '../assets/project/qrcodeGenerate.png';

// Import Toast Notification project assets
import toastNotificationImg from '../assets/project/toastNotification.png';

// Import Age Calculator project assets
import kalkulatorUmurImg from '../assets/project/kalkulatorUmur.png';

// Import Stopwatch project assets
import stopwatchImg from '../assets/project/stopwatch.png';

// Import Portfolio project assets
import portofolio1 from '../assets/project/portofolio1.png';
import portofolio2 from '../assets/project/portofolio2.png';

const projects = [
  // ==========================================
  // PROYEK UTAMA / FEATURED PROJECTS (8) -> SLIDER VIEW
  // ==========================================
  {
    title: 'Chill-app Movie Clone',
    subtitle: 'Final Project — Harisenin.com Full Stack Developer Bootcamp',
    category: 'featured',
    categoryLabel: 'Featured Project',
    description: 'A fully responsive Netflix-inspired streaming platform clone built with React 19 and Vite on the frontend, backed by Express.js and MySQL on the backend. Designed with Atomic Design architecture, secured with JWT-based authentication, and optimized for smooth category filtering and real-time watchlist management.',
    tech: ['React 19', 'Vite', 'Tailwind CSS v4', 'Express.js', 'MySQL', 'JWT', 'Axios', 'Atomic Design'],
    role: 'Full Stack Developer',
    duration: 'Final Project',
    images: [projectBootcamp2, projectBootcamp1],
    features: [
      'Built a fully responsive Netflix-inspired streaming platform clone with React 19 and Vite on the frontend, backed by Express.js and MySQL',
      'Structured the codebase with Atomic Design (atoms, molecules, organisms, pages), improving component reusability and long-term maintainability',
      'Implemented JWT-based authentication with bcrypt.js password hashing and custom middleware to secure private routes and API endpoints',
      'Reduced redundant API calls by fetching movie data via Axios and performing in-memory filtering for category views (Trending, Top Rated, Continue Watching, New Releases)',
      'Built an interactive Watchlist ("Daftar Saya") feature with real-time add/remove functionality, keeping state synchronized across pages via React state management',
      'Designed a dark-themed, mobile-first UI from scratch with Tailwind CSS v4, ensuring visual consistency across mobile, tablet, and desktop'
    ],
    githubFrontend: 'https://github.com/Yesayaparapat/Mission-Advanced-Frontend.git',
    githubBackend: 'https://github.com/Yesayaparapat/Mission-Advanced-BackEnd.git',
    githubLink: 'https://github.com/Yesayaparapat/Mission-Advanced-Frontend.git'
  },
  {
    title: 'Employee Attendance App',
    subtitle: 'Internship Project — Sleek, automated HR attendance and request management portal',
    category: 'featured',
    categoryLabel: 'Featured Project',
    description: 'A comprehensive employee attendance web application developed during an internship at Kantor Akuntan Publik using Laravel, React, TypeScript, and Inertia.js to streamline HR operations. It features secure role-based access control (RBAC), automated approval workflows for sick/leave requests, and seamless frontend-backend communication to deliver a smooth Single Page Application (SPA) experience.',
    tech: ['Laravel', 'React', 'TypeScript', 'Inertia.js', 'MySQL', 'Tailwind CSS'],
    role: 'Fullstack Developer Intern',
    duration: '4 Months (Internship)',
    images: [absensi1, absensi2],
    features: [
      'Comprehensive Employee Attendance tracking dashboard with check-in/out records',
      'Secure role-based access control (RBAC) separating Admin, HR, and general Employees',
      'Automated approval workflows for sick and leave requests to streamline administration',
      'Seamless frontend-backend communication via Inertia.js to eliminate full-page refreshes',
      'Responsive design styled using Tailwind CSS for optimal mobile and desktop utility'
    ],
    challenges: 'Ensuring secure authorization rules across critical HR approval pipelines and delivering an SPA experience without losing server-side state hydration.',
    solution: 'Designed granular middlewares and authorization gates in Laravel for RBAC, and leveraged Inertia.js server-side routing combined with client-side React hydration for state persistency.',
    githubLink: 'https://github.com/Yesayaparapat/attandances-app.git'
  },
  {
    title: 'GPS Tracking TMS — PT Super Spring',
    subtitle: 'Technical Test — Interactive Fleet Management & GPS Tracking Dashboard',
    category: 'featured',
    categoryLabel: 'Featured Project',
    description: 'Aplikasi dashboard sistem GPS tracking & Transportation Management System (TMS) responsif yang dikembangkan sebagai tes kemampuan teknis (Take-Home Technical Assessment) Frontend Developer untuk PT Super Spring guna menguji keahlian kandidat dalam membangun aplikasi web modern, sistem autentikasi, dan visualisasi pemantauan armada kendaraan secara real-time.',
    tech: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'Oxlint'],
    role: 'Frontend Developer',
    duration: 'Technical Test',
    images: [takeHome1, takeHome2],
    features: [
      'Dashboard manajemen armada (Vehicle Lists) interaktif yang menyajikan data status operasional kendaraan secara real-time',
      'Komponen visualisasi kartu armada informatif dengan indikator speedometer/odometer, status ACC, baterai, dan masa aktif GSM',
      'Sistem autentikasi login akun terstruktur dengan penanganan state dan efek animated canvas background interaktif',
      'Navigasi responsif dengan collapsible sidebar drawer serta top navbar informasi profil admin',
      'Arsitektur modern berbasis TypeScript dan Tailwind CSS v4 dengan linting performa tinggi menggunakan Oxlint'
    ],
    demoLink: 'https://super-spring.netlify.app/',
    githubLink: 'https://github.com/Yesayaparapat/pt-super-spring.git'
  },
  {
    title: 'Wedding Invitation Web App',
    subtitle: 'Sabat Tino & Renti — Digital Interactive Wedding Invitation',
    category: 'featured',
    categoryLabel: 'Featured Project',
    description: 'Mengembangkan website undangan pernikahan digital interaktif dan responsif berbasis HTML5, CSS3, Bootstrap 5, dan Vanilla JavaScript. Dilengkapi fitur personalisasi nama tamu dinamis via URL query, pemutar musik interaktif dengan kontrol animasi, galeri foto modern dengan modal lightbox, sistem RSVP asinkronus yang terintegrasi dengan Google Sheets API, serta kartu amplop digital dengan fitur one-click copy to clipboard.',
    tech: ['HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript', 'Google Sheets API'],
    role: 'Frontend Developer',
    duration: 'Client Project',
    images: [weddingWeb],
    features: [
      'Personalisasi nama tamu dinamis secara otomatis melalui URL query parameter',
      'Pemutar musik latar interaktif dengan toggle kontrol putar/jeda dan animasi visualizer',
      'Galeri momen foto modern dan responsif dilengkapi modal lightbox pop-up',
      'Sistem konfirmasi kehadiran (RSVP) asinkronus yang terintegrasi langsung dengan Google Sheets API',
      'Kartu amplop digital & info rekening cashless dengan fitur praktis one-click copy to clipboard'
    ],
    demoLink: 'https://sabattino-new-wedding.netlify.app/',
    githubLink: 'https://github.com/Yesayaparapat/sabattino.git'
  },
  {
    title: 'Sistem Pakar Tanaman Hias',
    subtitle: 'Final Year Research Project — Interactive diagnostics system for ornamental plant diseases',
    category: 'featured',
    categoryLabel: 'Featured Project',
    description: 'Sebuah aplikasi sistem pakar berbasis web yang dikembangkan sebagai Final Year Research Project (Tugas Akhir) untuk mendeteksi dan mendiagnosis penyakit pada tanaman hias berdasarkan gejala-gejala yang diinput oleh pengguna. Dibangun dengan antarmuka yang ramah pengguna, responsif, dan interaktif guna membantu pecinta tanaman hias merawat tanaman mereka dengan lebih baik.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    role: 'Frontend Developer',
    duration: 'Final Year Project',
    images: [tanamanHias1, tanamanHias2],
    features: [
      'Interactive Consultation form with dynamic questions based on observed symptoms',
      'Advanced Diagnosis Engine presenting accuracy metrics and recommendation details',
      'Plant Disease Directory listing common ornamental plant diseases, prevention tips, and cures',
      'Responsive UI layout optimized for gardeners diagnosing on both mobile and desktop screens',
      'Smooth micro-interactions and transitions for an intuitive client-side consultation experience'
    ],
    githubLink: 'https://github.com/detamor/frontend_SistemPakar.git'
  },
  {
    title: 'Apotek Asrama UNAI',
    subtitle: 'Campus Entrepreneurship Project — Online Dormitory Pharmacy & Delivery Portal',
    category: 'featured',
    categoryLabel: 'Featured Project',
    description: 'Platform web layanan pemesanan obat dan kebutuhan kesehatan mahasiswa asrama UNAI (Universitas Advent Indonesia) yang dikembangkan untuk mata kuliah Kewirausahaan. Menyediakan katalog obat bebas & resep, suplemen/vitamin, alat kesehatan, estimasi stok real-time, serta layanan pengantaran langsung ke kamar asrama dengan cepat dan terpercaya.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    role: 'Frontend Developer',
    duration: 'Academic Project',
    images: [tugasKampus],
    features: [
      'Katalog produk kesehatan lengkap mencakup obat bebas, pereda nyeri, obat pencernaan, vitamin, dan alat kesehatan',
      'Fitur pemesanan obat langsung dengan integrasi layanan pengantaran cepat ke kamar asrama',
      'Informasi ketersediaan stok produk secara real-time dan jam operasional darurat hingga malam',
      'Bagian edukasi kesehatan dan artikel tips hidup sehat praktis khusus bagi mahasiswa asrama',
      'Desain antarmuka yang bersih, responsif, dan mudah dinavigasi di perangkat seluler maupun desktop'
    ],
    demoLink: 'https://apotekasramaunai.netlify.app/',
    githubLink: 'https://github.com/Yesayaparapat/Kewirausahaan.git'
  },
  {
    title: 'Simulasi TOEFL CBT Platform',
    subtitle: 'Interactive CBT Test Platform — 234 Integrated Practice Questions',
    category: 'featured',
    categoryLabel: 'Featured Project',
    description: 'Aplikasi web simulasi ujian TOEFL interaktif berbasis Computer-Based Test (CBT) yang menyediakan 234 butir latihan soal terintegrasi, mencakup section Structure, Written Expression, Reading Comprehension, dan Listening. Dilengkapi dengan navigasi soal ala Moodle untuk memudahkan navigasi antar nomor, pelacakan skor real-time, filter kategori soal, serta indikator visual status jawaban.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
    role: 'Frontend Developer',
    duration: 'Web Project',
    images: [tofleImg],
    features: [
      'Bank soal komprehensif berisi 234 soal terintegrasi (Structure 1 & 2, Written, Reading 1 & 2, Listening)',
      'Navigasi nomor soal bergaya Moodle CBT dengan kode warna indikator (Benar, Salah, Belum Dijawab)',
      'Pelacakan progres latihan soal dan kalkulasi skor secara instan dan real-time',
      'Filter tab kategori untuk kemudahan latihan terfokus per topik materi ujian TOEFL',
      'Antarmuka interaktif yang responsif, bersih, dan nyaman untuk simulasi belajar intensif'
    ],
    demoLink: 'https://toflesimulasi.netlify.app/',
    githubLink: 'https://github.com/Yesayaparapat/tofleweb.git'
  },
  {
    title: 'Personal Portfolio Website',
    subtitle: 'Premium, interactive developer profile and showcase portal',
    category: 'featured',
    categoryLabel: 'Featured Project',
    description: 'Sebuah situs portofolio personal premium interaktif yang dirancang untuk memamerkan keahlian, pengalaman kerja, proyek, dan kredensial sertifikat. Dilengkapi dengan efek animasi mikro yang responsif, desain kaca (glassmorphism), marquee keahlian dinamis, dan slider detail proyek yang elegan.',
    tech: ['React', 'Tailwind CSS', 'Vite', 'Framer Motion'],
    role: 'Frontend Developer',
    duration: '3 Weeks',
    images: [portofolio1, portofolio2],
    features: [
      'Interactive horizontal sliders for both Projects and Course & Certification sections',
      'Infinite horizontal marquee displaying skill badges with local assets',
      'Detailed project lightbox modals with responsive touch-friendly image sliders',
      'Clean single-page layout utilizing custom animations (SplitText, ShinyText, Magnet)',
      'Polished responsive typography and colors matching the warm ivory theme'
    ],
    demoLink: 'https://yesayaparapat.netlify.app/',
    githubLink: 'https://github.com/Yesayaparapat/myportofolio.git'
  },

  // ==========================================
  // GOLONGAN KEDUA: LEARNING / PRACTICE PROJECTS (6) -> GRID VIEW
  // ==========================================
  {
    title: 'Weather Forecast Web App',
    subtitle: 'Real-Time Global Weather Tracker & Atmospheric Conditions',
    category: 'learning',
    categoryLabel: 'Learning / Practice',
    description: 'Aplikasi pelacak cuaca berbasis web yang menyajikan informasi prakiraan cuaca secara real-time untuk berbagai kota di seluruh dunia. Terintegrasi dengan OpenWeatherMap REST API untuk menampilkan data temperatur terkini, kelembapan udara (humidity), kecepatan angin (wind speed), serta ikon visual kondisi cuaca dengan antarmuka latar belakang gradien langit yang dinamis dan minimalis.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Weather API'],
    role: 'Frontend Developer',
    duration: 'Practice Project',
    images: [weatherAppImg],
    features: [
      'Pencarian prakiraan cuaca instan berdasarkan nama kota di seluruh dunia',
      'Integrasi REST API cuaca real-time untuk kalkulasi temperatur, kelembapan udara, dan kecepatan angin',
      'Ikon ilustrasi kondisi cuaca adaptif yang berubah sesuai parameter cuaca aktual',
      'Validasi input pengguna dengan pesan error interaktif saat kota tidak ditemukan',
      'Antarmuka modern, responsif, dan elegan dengan gradien warna atmosferik yang sejuk'
    ],
    demoLink: 'https://wheater-app-project.netlify.app/',
    githubLink: 'https://github.com/Yesayaparapat/wheater-app.git'
  },
  {
    title: 'Random Password Generator',
    subtitle: 'Secure Credential Generator & Quick Clipboard Utility',
    category: 'learning',
    categoryLabel: 'Learning / Practice',
    description: 'Aplikasi web utilitas keamanan yang dirancang untuk menghasilkan kata sandi (password) acak yang kuat, aman, dan terlindungi dari serangan brute-force. Menggabungkan kombinasi huruf besar, huruf kecil, angka, dan simbol khusus secara algoritmik, dilengkapi dengan fitur one-click copy to clipboard untuk memudahkan pengguna menyalin kredensial secara instan.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    role: 'Frontend Developer',
    duration: 'Practice Project',
    images: [passwordGenImg],
    features: [
      'Algoritma generator kata sandi acak dengan standar keamanan tinggi (kombinasi huruf, angka, dan simbol)',
      'Fitur praktis one-click copy to clipboard untuk menyalin password yang di-generate dengan cepat',
      'Antarmuka dark theme modern, minimalis, dan elegan untuk kenyamanan visual pengguna',
      'Performa aplikasi ultra-ringan dan cepat tanpa dependensi pihak ketiga (Pure Vanilla JS)',
      'Layout responsif dan adaptif untuk penggunaan optimal di desktop maupun perangkat mobile'
    ],
    demoLink: 'https://generate-password-random-project.netlify.app/',
    githubLink: 'https://github.com/Yesayaparapat/generatePassword.git'
  },
  {
    title: 'QR Code Generator',
    subtitle: 'Instant Text & URL to QR Code Converter',
    category: 'learning',
    categoryLabel: 'Learning / Practice',
    description: 'Aplikasi web utilitas berbasis JavaScript murni untuk mengonversi teks atau tautan URL menjadi kode QR (Quick Response Code) secara instan. Menampilkan animasi rendering kode QR yang mulus dengan transisi responsif, validasi input teks, serta antarmuka minimalis modern yang ramah pengguna.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'QR Code API'],
    role: 'Frontend Developer',
    duration: 'Practice Project',
    images: [qrCodeImg],
    features: [
      'Konversi instan teks, tautan URL, atau data teks bebas menjadi kode QR beresolusi tinggi',
      'Efek transisi dan animasi rendering kode QR dinamis saat tombol generate diklik',
      'Validasi input interaktif untuk memastikan kolom teks tidak kosong sebelum proses generate',
      'Desain antarmuka minimalis dan clean yang berfokus pada kemudahan penggunaan pengguna',
      'Performa ultra-ringan dan responsif di berbagai perangkat desktop maupun smartphone'
    ],
    demoLink: 'https://app-qrcodegenerator.netlify.app/',
    githubLink: 'https://github.com/Yesayaparapat/qrCodeGenerate.git'
  },
  {
    title: 'Toast Notification System',
    subtitle: 'Interactive Alert System & Micro-Animation UI Kit',
    category: 'learning',
    categoryLabel: 'Learning / Practice',
    description: 'Komponen antarmuka web interaktif untuk menampilkan pesan notifikasi toast dinamis (Success, Warning, Error). Dilengkapi dengan animasi slide-in/slide-out yang halus, auto-dismiss timer progress bar, integrasi ikon FontAwesome, serta struktur Vanilla JavaScript yang ringan dan modular untuk mudah diintegrasikan ke berbagai proyek web.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'FontAwesome'],
    role: 'Frontend Developer',
    duration: 'Practice Project',
    images: [toastNotificationImg],
    features: [
      'Tiga varian status notifikasi kontekstual: Success, Warning, dan Error',
      'Animasi transisi slide-in dan slide-out yang halus dan responsif',
      'Timer dismiss otomatis dengan visual progress bar penanda durasi waktu tayang',
      'Penanganan antrean multi-toast bertumpuk (stacking) saat tombol diakses berturut-turut',
      'Arsitektur komponen modular dan ringan berbasis Vanilla JavaScript tanpa library eksternal berat'
    ],
    demoLink: 'https://toastnotificationproject.netlify.app/',
    githubLink: 'https://github.com/Yesayaparapat/toastNotification.git'
  },
  {
    title: 'Kalkulator Usia Web App',
    subtitle: 'Precise Age Calculator & Date Difference Tracker',
    category: 'learning',
    categoryLabel: 'Learning / Practice',
    description: 'Aplikasi kalkulator usia presisi berbasis web yang menghitung umur pengguna secara akurat hingga rincian tahun, bulan, dan hari berdasarkan tanggal lahir yang diinput. Mengimplementasikan logika kalkulasi kalender dinamis untuk memperhitungkan jumlah hari per bulan dan tahun kabisat, disajikan dalam antarmuka kartu minimalis dan responsif.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    role: 'Frontend Developer',
    duration: 'Practice Project',
    images: [kalkulatorUmurImg],
    features: [
      'Kalkulasi usia pengguna secara detail dan presisi (tahun, bulan, dan hari)',
      'Logika penanggalan JavaScript yang memperhitungkan variasi hari tiap bulan dan tahun kabisat',
      'Input tanggal interaktif dengan pembatasan tanggal maksimal hingga hari ini',
      'Desain antarmuka kartu minimalis dan bersih yang fokus pada kemudahan membaca hasil',
      'Performa instan dan ringan berbasis Vanilla JavaScript murni tanpa dependensi luar'
    ],
    demoLink: 'https://kalkulatorumurapp.netlify.app/',
    githubLink: 'https://github.com/Yesayaparapat/KalkulatorUmur.git'
  },
  {
    title: 'Precision Digital Stopwatch',
    subtitle: 'Accurate Interval Timer & Digital Stopwatch Web App',
    category: 'learning',
    categoryLabel: 'Learning / Practice',
    description: 'Aplikasi stopwatch digital presisi berbasis web yang dibangun untuk mengukur interval waktu secara real-time dengan akurasi tinggi. Dilengkapi dengan kontrol Start, Stop/Pause, dan Reset interaktif, antarmuka tampilan digital yang bersih dan jelas, serta optimasi performa rendering tanpa jeda.',
    tech: ['React', 'JavaScript', 'CSS3', 'Vite'],
    role: 'Frontend Developer',
    duration: 'Practice Project',
    images: [stopwatchImg],
    features: [
      'Pengukuran interval waktu real-time yang akurat dan presisi (jam, menit, detik)',
      'Kontrol interaktif terpadu untuk fungsi Start, Stop/Pause, dan Reset waktu',
      'Tampilan layar digital modern yang tajam dan mudah dibaca di berbagai pencahayaan',
      'State management presisi untuk menjaga kestabilan interval counting tanpa memory leak',
      'Desain kartu antarmuka minimalis, ringan, dan responsif di seluruh perangkat'
    ],
    demoLink: 'https://appstopwatchjs.netlify.app/',
    githubLink: 'https://github.com/Yesayaparapat/StopWatch.git'
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all'); // 'all' | 'featured' | 'learning'
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'slider'
  const scrollRef = useRef(null);

  const featuredCount = projects.filter((p) => p.category === 'featured').length;
  const learningCount = projects.filter((p) => p.category === 'learning').length;

  // Filtered projects list based on active category
  const filteredProjects = projects.filter((project) => {
    if (activeCategory === 'featured') return project.category === 'featured';
    if (activeCategory === 'learning') return project.category === 'learning';
    return true;
  });

  // Prevent background scrolling when modal is active
  useEffect(() => {
    if (selectedProject) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [selectedProject]);

  // Reset image slider index when a different project is selected
  useEffect(() => {
    setCurrentImgIndex(0);
  }, [selectedProject]);

  // Reset horizontal slider scroll position when category or view mode changes
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [activeCategory, viewMode]);

  // Support closing modal with Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle horizontal scrolling behavior for Slider View
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const cardWidth = window.innerWidth < 640 ? 300 + 24 : 410 + 32;
      const offset = direction === 'left' ? -cardWidth : cardWidth;
      scrollRef.current.scrollTo({
        left: scrollLeft + offset,
        behavior: 'smooth'
      });
    }
  };

  // Reusable project card renderer for both Grid and Slider modes
  const renderProjectCard = (project, mode) => {
    const isFeatured = project.category === 'featured';
    const isSlider = mode === 'slider';

    return (
      <GlowCard
        key={project.title}
        className={`bg-white rounded-3xl overflow-hidden border-2 border-ill-secondary hover:shadow-2xl transition-all duration-300 group cursor-pointer flex flex-col ${
          isFeatured ? 'hover:border-primary-btn' : 'hover:border-amber-700/80'
        } ${
          isSlider
            ? 'w-[300px] sm:w-[410px] flex-shrink-0 snap-start transform hover:-translate-y-2'
            : 'transform hover:-translate-y-1.5'
        }`}
        onClick={() => setSelectedProject(project)}
      >
        {/* Project Image Wrapper */}
        <div className="relative aspect-video overflow-hidden bg-ill-secondary flex-shrink-0">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <span className="absolute top-3.5 left-3.5 bg-headline/85 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-md">
            {project.role}
          </span>
          <span
            className={`absolute top-3.5 right-3.5 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md ${
              isFeatured
                ? 'bg-primary-btn/95 text-btn-text'
                : 'bg-amber-800/90 text-white border border-amber-500/40'
            }`}
          >
            {isFeatured ? 'Featured' : 'Practice'}
          </span>
        </div>

        {/* Project Content */}
        <div className="p-6 sm:p-7 flex flex-col flex-grow">
          <div className="mb-2.5">
            <h3 className="text-xl sm:text-2xl font-bold text-headline mb-1 group-hover:text-primary-btn transition-colors leading-snug">
              {project.title}
            </h3>
            <p className="text-xs italic text-primary-btn font-medium mb-3 line-clamp-1">
              {project.subtitle}
            </p>
          </div>

          <p className="text-paragraph mb-5 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
            {project.tech.slice(0, 3).map((t, i) => (
              <span
                key={i}
                className="bg-bg text-link px-2.5 py-0.5 rounded-full text-xs font-medium border border-link/40"
              >
                {t}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="text-xs text-paragraph/70 font-semibold px-1.5 py-0.5">
                +{project.tech.length - 3} more
              </span>
            )}
          </div>

          {/* Card Action Bar */}
          <div className="pt-4 border-t border-ill-secondary/60 flex items-center justify-between text-xs mt-auto">
            <div className="inline-flex items-center text-primary-btn font-bold group-hover:underline">
              <span>Detail Lengkap</span>
              <svg
                className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1.5 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>

            {/* Quick links */}
            <div className="flex items-center space-x-1.5" onClick={(e) => e.stopPropagation()}>
              {project.demoLink && project.demoLink !== '#' && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-bg text-headline hover:bg-primary-btn hover:text-white transition-all shadow-xs border border-ill-secondary"
                  title="Buka Demo Langsung"
                  aria-label="Live Demo"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              )}
              {(project.githubLink || project.githubFrontend) && (
                <a
                  href={project.githubLink || project.githubFrontend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-bg text-headline hover:bg-headline hover:text-white transition-all shadow-xs border border-ill-secondary"
                  title="Lihat Source Code GitHub"
                  aria-label="GitHub"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </GlowCard>
    );
  };

  return (
    <section id="projects" className="w-full relative overflow-hidden">
      {/* Background watermark text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 text-[12rem] md:text-[20rem] font-serif italic font-black text-ill-stroke opacity-10 select-none whitespace-nowrap pointer-events-none">
        Projects
      </div>

      <div className="w-full py-20 px-6 md:px-8 max-w-6xl mx-auto relative z-10">
        
        {/* Main Section Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-link/15 text-link text-xs font-bold px-3 py-1 rounded-full mb-3 border border-link/30">
            <span className="w-2 h-2 rounded-full bg-link"></span>
            PORTFOLIO SHOWCASE
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-headline mb-3">
            Projects &amp; Works
          </h2>
          <p className="text-paragraph max-w-2xl text-sm md:text-base leading-relaxed">
            Koleksi proyek lengkap mencakup aplikasi web berskala penuh, pengujian teknis, hingga aplikasi utilitas interaktif. Gunakan filter kategori dan pilih mode tampilan <strong>Grid</strong> atau <strong>Slider</strong> sesuai preferensi Anda.
          </p>
        </div>

        {/* Filter Tabs & View Controls Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          {/* Category Navigation Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-xs md:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer shadow-xs ${
                activeCategory === 'all'
                  ? 'bg-headline text-white shadow-md scale-102 ring-2 ring-headline/20'
                  : 'bg-white/80 text-headline hover:bg-white border border-ill-secondary hover:border-headline/40'
              }`}
            >
              <span>Semua Proyek</span>
              <span
                className={`text-[11px] px-2 py-0.5 rounded-full font-bold transition-colors ${
                  activeCategory === 'all'
                    ? 'bg-white/20 text-white'
                    : 'bg-ill-secondary/70 text-paragraph'
                }`}
              >
                {projects.length}
              </span>
            </button>

            <button
              onClick={() => setActiveCategory('featured')}
              className={`px-4 py-2 rounded-full text-xs md:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer shadow-xs ${
                activeCategory === 'featured'
                  ? 'bg-primary-btn text-btn-text shadow-md scale-102 ring-2 ring-primary-btn/30'
                  : 'bg-white/80 text-headline hover:bg-white border border-ill-secondary hover:border-primary-btn/50'
              }`}
            >
              <span>Featured Projects</span>
              <span
                className={`text-[11px] px-2 py-0.5 rounded-full font-bold transition-colors ${
                  activeCategory === 'featured'
                    ? 'bg-white/25 text-white'
                    : 'bg-ill-secondary/70 text-paragraph'
                }`}
              >
                {featuredCount}
              </span>
            </button>

            <button
              onClick={() => setActiveCategory('learning')}
              className={`px-4 py-2 rounded-full text-xs md:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer shadow-xs ${
                activeCategory === 'learning'
                  ? 'bg-[#9a3412] text-white shadow-md scale-102 ring-2 ring-amber-700/30'
                  : 'bg-white/80 text-headline hover:bg-white border border-ill-secondary hover:border-amber-700/50'
              }`}
            >
              <span>Learning &amp; Practice</span>
              <span
                className={`text-[11px] px-2 py-0.5 rounded-full font-bold transition-colors ${
                  activeCategory === 'learning'
                    ? 'bg-white/25 text-white'
                    : 'bg-ill-secondary/70 text-paragraph'
                }`}
              >
                {learningCount}
              </span>
            </button>
          </div>

          {/* View Mode Toggle (Grid & Slider) + Slider Arrows */}
          <div className="flex items-center gap-2.5 self-start sm:self-auto">
            {/* View Mode Switcher */}
            <div className="flex items-center bg-white/90 p-1 rounded-2xl border-2 border-ill-secondary shadow-xs">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-headline text-white shadow-sm'
                    : 'text-paragraph hover:text-headline hover:bg-black/5'
                }`}
                aria-label="Grid View"
                title="Tampilan Grid"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                <span>Grid</span>
              </button>

              <button
                onClick={() => setViewMode('slider')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  viewMode === 'slider'
                    ? 'bg-headline text-white shadow-sm'
                    : 'text-paragraph hover:text-headline hover:bg-black/5'
                }`}
                aria-label="Slider View"
                title="Tampilan Slider"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                </svg>
                <span>Slider</span>
              </button>
            </div>

            {/* Slider Arrow Controls (Active when Slider View is selected) */}
            {viewMode === 'slider' && (
              <div className="flex space-x-1.5 animate-fade-in">
                <button
                  onClick={() => scroll('left')}
                  className="w-9 h-9 rounded-full border-2 border-ill-secondary flex items-center justify-center text-headline bg-white/90 hover:bg-primary-btn hover:text-btn-text hover:border-primary-btn transition-all active:scale-95 shadow-xs cursor-pointer"
                  aria-label="Proyek Sebelumnya"
                  title="Geser ke Kiri"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => scroll('right')}
                  className="w-9 h-9 rounded-full border-2 border-ill-secondary flex items-center justify-center text-headline bg-white/90 hover:bg-primary-btn hover:text-btn-text hover:border-primary-btn transition-all active:scale-95 shadow-xs cursor-pointer"
                  aria-label="Proyek Selanjutnya"
                  title="Geser ke Kanan"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Gallery Content based on View Mode */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 animate-fade-in">
            {filteredProjects.map((project) => renderProjectCard(project, 'grid'))}
          </div>
        ) : (
          <div className="relative animate-fade-in">
            {/* Edge Fades */}
            <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-bg via-bg/5 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-bg via-bg/5 to-transparent z-10 pointer-events-none" />

            <div
              ref={scrollRef}
              className="flex gap-6 md:gap-8 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory pb-6 px-1"
            >
              {filteredProjects.map((project) => renderProjectCard(project, 'slider'))}
            </div>
          </div>
        )}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-headline/65 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-bg max-w-4xl w-full rounded-3xl overflow-hidden shadow-2xl relative border-2 border-ill-secondary transform transition-all duration-300 animate-scale-up max-h-[90vh] flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              className="absolute top-4 right-4 bg-white/80 hover:bg-white text-headline p-2 rounded-full z-10 shadow-md border border-ill-secondary transition-all hover:scale-110 cursor-pointer"
              onClick={() => setSelectedProject(null)}
              aria-label="Close details"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Left Column: Image Slider and Action Links */}
            <div className="md:w-1/2 flex flex-col border-b md:border-b-0 md:border-r border-ill-secondary overflow-y-auto max-h-[40vh] md:max-h-full">
              {/* Carousel Container */}
              <div className="relative aspect-video md:aspect-auto md:h-64 bg-ill-secondary flex-shrink-0 group/image overflow-hidden">
                <img
                  src={selectedProject.images[currentImgIndex]}
                  alt={`${selectedProject.title} screenshot ${currentImgIndex + 1}`}
                  className="w-full h-full object-cover transition-all duration-350"
                />

                {/* Left/Right Slide Controls */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-headline/60 hover:bg-headline/90 text-white p-1.5 rounded-full transition-opacity opacity-0 group-hover/image:opacity-100 shadow-md flex items-center justify-center cursor-pointer"
                      onClick={() => setCurrentImgIndex((prev) => (prev === 0 ? selectedProject.images.length - 1 : prev - 1))}
                      aria-label="Previous screenshot"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-headline/60 hover:bg-headline/90 text-white p-1.5 rounded-full transition-opacity opacity-0 group-hover/image:opacity-100 shadow-md flex items-center justify-center cursor-pointer"
                      onClick={() => setCurrentImgIndex((prev) => (prev === selectedProject.images.length - 1 ? 0 : prev + 1))}
                      aria-label="Next screenshot"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    {/* Image Slide Dots Indicators */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1.5 bg-headline/45 px-2.5 py-1 rounded-full backdrop-blur-xs">
                      {selectedProject.images.map((_, idx) => (
                        <button
                          key={idx}
                          className={`w-2 h-2 rounded-full transition-all ${idx === currentImgIndex ? 'bg-white scale-125' : 'bg-white/50'}`}
                          onClick={() => setCurrentImgIndex(idx)}
                          aria-label={`Go to slide ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}

                {/* Category & Role Tag in Preview */}
                <div className="absolute bottom-4 left-4 flex gap-2 z-10">
                  <span className="bg-primary-btn text-btn-text text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    {selectedProject.role}
                  </span>
                  {selectedProject.category === 'learning' && (
                    <span className="bg-amber-800/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      Learning Project
                    </span>
                  )}
                </div>
              </div>

              {/* Quick Stats & Links */}
              <div className="p-6 md:p-8 flex flex-col flex-grow bg-white/40">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-bg/55 p-3 rounded-xl border border-ill-secondary">
                    <span className="block text-xs font-semibold text-paragraph/70 uppercase tracking-wider mb-0.5">Role</span>
                    <span className="text-sm font-bold text-headline">{selectedProject.role}</span>
                  </div>
                  <div className="bg-bg/55 p-3 rounded-xl border border-ill-secondary">
                    <span className="block text-xs font-semibold text-paragraph/70 uppercase tracking-wider mb-0.5">Duration</span>
                    <span className="text-sm font-bold text-headline">{selectedProject.duration}</span>
                  </div>
                </div>

                <div className="mt-auto space-y-3">
                  {selectedProject.demoLink && selectedProject.demoLink !== '#' && (
                    <a
                      href={selectedProject.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full bg-primary-btn text-btn-text py-3 rounded-xl font-bold hover:opacity-90 transition-opacity shadow-md text-sm cursor-pointer"
                    >
                      <span>Live Demo</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}

                  {selectedProject.githubFrontend && selectedProject.githubBackend ? (
                    <div className="flex flex-col sm:flex-row gap-2">
                      <a
                        href={selectedProject.githubFrontend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center border-2 border-headline text-headline py-2.5 px-3 rounded-xl font-bold hover:bg-headline hover:text-white transition-colors text-xs text-center cursor-pointer"
                      >
                        <svg className="w-4 h-4 mr-1.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        <span>GitHub Frontend</span>
                      </a>
                      <a
                        href={selectedProject.githubBackend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center border-2 border-headline text-headline py-2.5 px-3 rounded-xl font-bold hover:bg-headline hover:text-white transition-colors text-xs text-center cursor-pointer"
                      >
                        <svg className="w-4 h-4 mr-1.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        <span>GitHub Backend</span>
                      </a>
                    </div>
                  ) : selectedProject.githubLink && selectedProject.githubLink !== '#' ? (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full border-2 border-headline text-headline py-3 rounded-xl font-bold hover:bg-headline hover:text-white transition-colors text-sm cursor-pointer"
                    >
                      <span>GitHub Code</span>
                      <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                  ) : null}
                </div>
              </div>
            </div>

            {/* Right Column: Detailed Info Scrollable */}
            <div className="md:w-1/2 p-6 md:p-8 overflow-y-auto max-h-[50vh] md:max-h-full flex flex-col">
              <div className="mb-2">
                <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full inline-block mb-1.5 ${
                  selectedProject.category === 'learning'
                    ? 'bg-amber-100 text-amber-900 border border-amber-300'
                    : 'bg-link/15 text-link border border-link/30'
                }`}>
                  {selectedProject.categoryLabel || (selectedProject.category === 'learning' ? 'Learning / Practice' : 'Featured Project')}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-headline font-serif leading-tight">
                  {selectedProject.title}
                </h3>
              </div>

              <p className="text-xs md:text-sm italic text-primary-btn font-medium mb-4">
                {selectedProject.subtitle}
              </p>

              {/* Tech Stack tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {selectedProject.tech.map((t, i) => (
                  <span key={i} className="bg-bg text-link px-2.5 py-0.5 rounded-full text-xs font-semibold border border-link/50">
                    {t}
                  </span>
                ))}
              </div>

              {/* Project Description */}
              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-headline mb-2">Project Overview</h4>
                <p className="text-paragraph text-sm leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Key Challenges & Solution if available */}
              {selectedProject.challenges && (
                <div className="mb-4 bg-white/60 p-3.5 rounded-xl border border-ill-secondary">
                  <h4 className="text-xs uppercase tracking-wider font-bold text-headline mb-1 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>Key Engineering Challenge</span>
                  </h4>
                  <p className="text-paragraph text-xs leading-relaxed">{selectedProject.challenges}</p>
                </div>
              )}

              {selectedProject.solution && (
                <div className="mb-6 bg-white/60 p-3.5 rounded-xl border border-ill-secondary">
                  <h4 className="text-xs uppercase tracking-wider font-bold text-headline mb-1 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Architectural Solution</span>
                  </h4>
                  <p className="text-paragraph text-xs leading-relaxed">{selectedProject.solution}</p>
                </div>
              )}

              {/* Features List */}
              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-headline mb-2.5">Key Features</h4>
                <ul className="space-y-2">
                  {selectedProject.features.map((feat, i) => (
                    <li key={i} className="flex items-start text-sm text-paragraph">
                      <svg className="w-4 h-4 text-primary-btn mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
