import React, { useState, useEffect, useRef } from 'react';

// Import PDF certificates from certifikat folder
import certBootcamp from '../assets/certifikat/FULL STACK DEVELOPER - Yesaya Parapat - E-certificate Harisenin Bootcamp Full Stack Developer Batch 18.pdf';
import certRiseUp from '../assets/certifikat/Rise Up+ E-Certificate - Yesaya Parapat.pdf';
import certDatabase from '../assets/certifikat/certifikat database.pdf';
import certCheatCode from '../assets/certifikat/idcamp-virtual-roadshow-x-algobash-ctrlcareer-your-tech-career-cheat-code-certificate.pdf';
import certLiveFrontendBackend from '../assets/certifikat/idcamp-x-dicoding-live-6-frontend-vs-backend-a-never-ending-love-hate-relationship-certificate.pdf';
import sertifikat1 from '../assets/certifikat/sertifikat1.pdf';
import sertifikat2 from '../assets/certifikat/sertifikat2.pdf';
import sertifikat3 from '../assets/certifikat/sertifikat3.pdf';
import sertifikat4 from '../assets/certifikat/sertifikat4.pdf';
import sertifikat5 from '../assets/certifikat/sertifikat5.pdf';
import sertifikat6 from '../assets/certifikat/sertifikat6.pdf';

// Import certificate image previews from certifikat-img folder
import imgBootcamp from '../assets/certifikat-img/fullstack.png';
import imgRiseUp from '../assets/certifikat-img/riseUp.png';
import imgDatabase from '../assets/certifikat-img/database.png';
import imgCheatCode from '../assets/certifikat-img/ctrl+career.png';
import imgLiveFrontendBackend from '../assets/certifikat-img/idcamp x dicoding.png';
import imgSertifikat1 from '../assets/certifikat-img/belajar membuat fe untuk pemula.png';
import imgSertifikat2 from '../assets/certifikat-img/belajar dp Javascript.png';
import imgSertifikat3 from '../assets/certifikat-img/belajar dasar PW.png';
import imgSertifikat4 from '../assets/certifikat-img/belajar DG dengan github.png';
import imgSertifikat5 from '../assets/certifikat-img/p ke logika pemograman.png';
import imgSertifikat6 from '../assets/certifikat-img/pemograman dasar untuk menjadi pengembang softwarte.png';

const certificates = [
  {
    title: 'Full Stack Developer Bootcamp (Batch 18)',
    issuer: 'Harisenin.com',
    date: '20 Agustus 2026',
    credentialId: 'HSBC/FSD/019/20260820080',
    credentialUrl: '',
    image: imgBootcamp,
    file: certBootcamp,
    skills: ['Full Stack Web Development', 'Frontend Architecture', 'Backend & RESTful API', 'Database Management', 'Modern JavaScript / React', 'Node.js'],
    description: 'Sertifikasi kelulusan program intensif Full Stack Developer Bootcamp (Batch 18) dari Harisenin.com yang membuktikan kompetensi menyeluruh dalam membangun aplikasi web modern end-to-end, mulai dari arsitektur frontend responsif hingga integrasi API backend dan manajemen basis data.'
  },
  {
    title: 'RISE UP+ : Career Preparation Program',
    issuer: 'Harisenin.com',
    date: 'Agustus 2026',
    credentialId: 'Harisenin-RiseUp-2026',
    credentialUrl: '',
    image: imgRiseUp,
    file: certRiseUp,
    skills: ['Career Preparation', 'Professional Growth', 'Interview Preparation', 'Workplace Readiness', 'Communication'],
    description: 'Sertifikat kelulusan program akselerasi karir profesional intensif selama 3 minggu oleh Harisenin.com, melatih kesiapan karir, pemahaman industri teknologi, personal branding, dan strategi wawancara kerja.'
  },
  {
    title: 'Information Technology Specialist - Databases',
    issuer: 'Certiport (NCS Pearson)',
    date: '23 Maret 2025',
    credentialId: 'wL5Yr-FaGW',
    credentialUrl: 'https://verify.certiport.com',
    image: imgDatabase,
    file: certDatabase,
    skills: ['Database Administration', 'Relational Databases', 'SQL Querying', 'Database Security', 'Data Modeling'],
    description: 'Sertifikasi internasional bergengsi dari Certiport yang memvalidasi keahlian tingkat profesional dalam merancang database, mengelola skema relasional, menulis query SQL, serta mengkonfigurasi hak akses dan keamanan data.'
  },
  {
    title: 'Belajar Membuat Front-End Web untuk Pemula',
    issuer: 'Dicoding Indonesia',
    date: '08 April 2025',
    credentialId: 'GRX53EL63Z0M',
    credentialUrl: 'https://dicoding.com/certificates/GRX53EL63Z0M',
    image: imgSertifikat1,
    file: sertifikat1,
    skills: ['HTML5', 'CSS3', 'Web Accessibility', 'Semantic HTML', 'Responsive Layouts'],
    description: 'Sertifikasi keahlian dalam merancang antarmuka web responsif, layouting modern, serta memastikan standar aksesibilitas web yang optimal.'
  },
  {
    title: 'Belajar Dasar Pemrograman JavaScript',
    issuer: 'Dicoding Indonesia',
    date: '12 Maret 2025',
    credentialId: 'MEPJQM8G6X3V',
    credentialUrl: 'https://dicoding.com/certificates/MEPJQM8G6X3V',
    image: imgSertifikat2,
    file: sertifikat2,
    skills: ['JavaScript ES6', 'Functional Programming', 'OOP', 'Asynchronous JavaScript'],
    description: 'Sertifikasi dasar pemrograman JavaScript yang mencakup logika pemrosesan data, manajemen objek, functional programming, serta asynchronous logic.'
  },
  {
    title: 'Belajar Dasar Pemrograman Web',
    issuer: 'Dicoding Indonesia',
    date: '25 Februari 2025',
    credentialId: '1OP82JMR1PQK',
    credentialUrl: 'https://dicoding.com/certificates/1OP82JMR1PQK',
    image: imgSertifikat3,
    file: sertifikat3,
    skills: ['HTML', 'CSS', 'DOM Manipulation', 'Flexbox', 'Responsive Design'],
    description: 'Sertifikasi dasar pemrograman web yang memvalidasi kemampuan menyusun struktur halaman web statis yang menarik dan interaktif menggunakan CSS layouting.'
  },
  {
    title: 'Belajar Dasar Git dengan GitHub',
    issuer: 'Dicoding Indonesia',
    date: '16 Februari 2025',
    credentialId: '53XEDOJ8YPRN',
    credentialUrl: 'https://dicoding.com/certificates/53XEDOJ8YPRN',
    image: imgSertifikat4,
    file: sertifikat4,
    skills: ['Git Version Control', 'GitHub Repositories', 'Branching & Merging', 'Collaborative Coding'],
    description: 'Sertifikasi dasar kontrol versi menggunakan Git dan manajemen repositori di GitHub untuk memfasilitasi kolaborasi pengembangan kode dalam tim.'
  },
  {
    title: 'Pengenalan ke Logika Pemrograman (Programming Logic 101)',
    issuer: 'Dicoding Indonesia',
    date: '14 Februari 2025',
    credentialId: '6RPNRVKMQX2M',
    credentialUrl: 'https://dicoding.com/certificates/6RPNRVKMQX2M',
    image: imgSertifikat5,
    file: sertifikat5,
    skills: ['Flowcharts', 'Pseudocode', 'Algorithms', 'Logic Gates', 'Computational Thinking'],
    description: 'Sertifikasi dasar logika pemrograman yang melatih berpikir komputasional, merancang pseudocode serta flowchart, dan memformulasikan solusi algoritma dasar.'
  },
  {
    title: 'Memulai Dasar Pemrograman untuk Menjadi Pengembang Software',
    issuer: 'Dicoding Indonesia',
    date: '14 Februari 2025',
    credentialId: 'L4PQEQRVVPO1',
    credentialUrl: 'https://dicoding.com/certificates/L4PQEQRVVPO1',
    image: imgSertifikat6,
    file: sertifikat6,
    skills: ['SDLC Fundamentals', 'Programming Paradigms', 'Software Quality', 'Tech Standards'],
    description: 'Sertifikasi pengenalan siklus hidup pengembangan perangkat lunak (SDLC), metodologi pengerjaan kode, dan dasar rekayasa perangkat lunak modern.'
  },
  {
    title: 'IDCamp Virtual Roadshow x Algobash: Your Tech Career Cheat Code',
    issuer: 'Indosat Ooredoo Hutchison',
    date: '13 Desember 2024',
    credentialId: 'IDCamp-Roadshow-Bandung',
    credentialUrl: '',
    image: imgCheatCode,
    file: certCheatCode,
    skills: ['Career Planning', 'Technical Interviews', 'Algorithmic Problem Solving', 'Tech Industry Insights'],
    description: 'Sertifikat keikutsertaan dalam sesi roadshow kolaborasi Indosat Ooredoo Hutchison dan Algobash untuk persiapan karir teknologi dan wawancara pemrograman.'
  },
  {
    title: 'IDCamp x Dicoding Live #6 - Frontend vs Backend: A Never-Ending Relationship',
    issuer: 'Indosat Ooredoo Hutchison',
    date: '06 Februari 2025',
    credentialId: 'IDCamp-Live-6',
    credentialUrl: '',
    image: imgLiveFrontendBackend,
    file: certLiveFrontendBackend,
    skills: ['System Architecture', 'Frontend Development', 'Backend Development', 'API Design'],
    description: 'Sertifikat partisipasi dalam seminar interaktif mengenai perbedaan arsitektur frontend dan backend serta cara interaksi komunikasi sistem keduanya.'
  }
];

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const scrollRef = useRef(null);

  // Prevent background scrolling when modal is active
  useEffect(() => {
    if (selectedCert) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [selectedCert]);

  // Support closing modal with Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle horizontal scrolling behavior
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const cardWidth = window.innerWidth < 640 ? 280 + 24 : 350 + 32; // card size + gap
      const offset = direction === 'left' ? -cardWidth : cardWidth;
      scrollRef.current.scrollTo({
        left: scrollLeft + offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="certificates" className="w-full relative overflow-hidden bg-white/40 border-t-2 border-b-2 border-ill-secondary/35">
      {/* Watermark text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 text-[10rem] md:text-[18rem] font-serif italic font-black text-ill-stroke opacity-[0.06] select-none whitespace-nowrap pointer-events-none">
        Credentials
      </div>

      <div className="w-full py-20 px-8 max-w-6xl mx-auto relative z-10">
        
        {/* Header container with title and slider controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-bold text-headline mb-4">Course & Certification</h2>
            <p className="text-paragraph max-w-lg text-sm md:text-base">
              Kredensial dan sertifikat profesional yang telah saya selesaikan untuk memvalidasi keahlian teknis saya.
            </p>
          </div>
          {/* Slide navigation controls */}
          <div className="flex space-x-3 self-end md:self-auto">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border-2 border-ill-secondary flex items-center justify-center text-headline bg-white/80 hover:bg-primary-btn hover:text-btn-text hover:border-primary-btn transition-all active:scale-95 shadow-sm"
              aria-label="Sebelumnya"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border-2 border-ill-secondary flex items-center justify-center text-headline bg-white/80 hover:bg-primary-btn hover:text-btn-text hover:border-primary-btn transition-all active:scale-95 shadow-sm"
              aria-label="Selanjutnya"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Horizontal Slider Layout */}
        <div className="relative">
          {/* Side fade gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-white/30 via-white/5 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-white/30 via-white/5 to-transparent z-10 pointer-events-none" />

          {/* Slider track */}
          <div
            ref={scrollRef}
            className="flex gap-6 md:gap-8 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory pb-6 px-1"
          >
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="w-[280px] sm:w-[350px] flex-shrink-0 bg-white rounded-3xl overflow-hidden border-2 border-ill-secondary hover:border-primary-btn hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col group snap-start"
                onClick={() => setSelectedCert(cert)}
              >
                {/* Image Preview */}
                <div className="relative aspect-[4/3] overflow-hidden bg-ill-secondary/25 border-b border-ill-secondary/60 flex-shrink-0 flex items-center justify-center p-4">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain shadow-md rounded-md group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-headline/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white/95 text-headline text-xs font-bold px-4 py-2 rounded-full shadow-lg border border-ill-secondary transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      Preview Certificate
                    </span>
                  </div>
                </div>

                {/* Info Container */}
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary-btn mb-1.5">{cert.issuer}</span>
                  <h3 className="text-xl font-bold text-headline mb-3 leading-snug group-hover:text-primary-btn transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex justify-between items-center text-xs text-paragraph/75 font-medium mt-auto pt-4 border-t border-ill-secondary/40">
                    <span>Diterbitkan: {cert.date}</span>
                    <span className="text-link group-hover:underline flex items-center">
                      Detail Kredensial
                      <svg className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox certificate modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-headline/65 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto animate-fade-in"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-bg max-w-4xl w-full rounded-3xl overflow-hidden shadow-2xl relative border-2 border-ill-secondary transform transition-all duration-300 animate-scale-up max-h-[90vh] flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 bg-white/80 hover:bg-white text-headline p-2 rounded-full z-10 shadow-md border border-ill-secondary transition-all hover:scale-110"
              onClick={() => setSelectedCert(null)}
              aria-label="Close credentials details"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Left Column: Certificate Image View */}
            <div className="md:w-1/2 bg-headline/5 flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-ill-secondary/70 max-h-[50vh] md:max-h-full overflow-y-auto">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full max-h-full object-contain rounded-lg shadow-xl animate-fade-in"
              />
            </div>

            {/* Right Column: Credential Details */}
            <div className="md:w-1/2 p-6 md:p-8 overflow-y-auto max-h-[50vh] md:max-h-full flex flex-col">
              <span className="text-xs font-bold uppercase tracking-wider text-primary-btn mb-1">
                {selectedCert.issuer}
              </span>
              <h3 className="text-2xl font-bold text-headline font-serif leading-tight mb-4">
                {selectedCert.title}
              </h3>

              <div className="space-y-4 mb-6">
                <div>
                  <span className="block text-xs font-semibold text-paragraph/70 uppercase tracking-wider mb-0.5">Deskripsi Program</span>
                  <p className="text-paragraph text-sm leading-relaxed">
                    {selectedCert.description}
                  </p>
                </div>

                <div>
                  <span className="block text-xs font-semibold text-paragraph/70 uppercase tracking-wider mb-1.5">Keahlian yang Divalidasi</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedCert.skills.map((skill, i) => (
                      <span key={i} className="bg-white text-link px-2.5 py-0.5 rounded-full text-xs font-semibold border border-link/40 shadow-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="bg-white/40 p-3 rounded-xl border border-ill-secondary/80">
                    <span className="block text-xs font-semibold text-paragraph/70 uppercase tracking-wider mb-0.5">Diterbitkan</span>
                    <span className="text-sm font-bold text-headline">{selectedCert.date}</span>
                  </div>
                  <div className="bg-white/40 p-3 rounded-xl border border-ill-secondary/80">
                    <span className="block text-xs font-semibold text-paragraph/70 uppercase tracking-wider mb-0.5">ID Kredensial</span>
                    <span className="text-xs font-mono font-bold text-headline/90 truncate block mt-0.5" title={selectedCert.credentialId}>
                      {selectedCert.credentialId}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-4 border-t border-ill-secondary/60">
                <a
                  href={selectedCert.credentialUrl && selectedCert.credentialUrl !== '#' ? selectedCert.credentialUrl : selectedCert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full bg-primary-btn text-btn-text py-3 rounded-xl font-bold hover:opacity-90 transition-opacity shadow-md text-sm"
                >
                  <span>{selectedCert.credentialUrl && selectedCert.credentialUrl !== '#' ? 'Verifikasi Kredensial Resmi' : 'Buka PDF Sertifikat'}</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
