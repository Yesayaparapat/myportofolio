import React, { useState, useEffect, useRef } from 'react';
import GlowCard from './GlowCard';

// Import Absensi project assets
import absensi1 from '../assets/project/absensi1.png';
import absensi2 from '../assets/project/absensi2.png';

// Import Sistem Pakar Tanaman Hias project assets
import tanamanHias1 from '../assets/project/sistem pakar tanaman hias.png';
import tanamanHias2 from '../assets/project/sistem pakar tanaman hias2.png';

// Import Portfolio project assets
import portofolio1 from '../assets/project/portofolio1.png';
import portofolio2 from '../assets/project/portofolio2.png';

const projects = [
  {
    title: 'Employee Attendance App',
    subtitle: 'Sleek, automated HR attendance and request management portal',
    description: 'A comprehensive employee attendance web application built using Laravel, React, TypeScript, and Inertia.js to streamline HR operations. It features secure role-based access control (RBAC), automated approval workflows for sick/leave requests, and seamless frontend-backend communication to deliver a smooth Single Page Application (SPA) experience.',
    tech: ['Laravel', 'React', 'TypeScript', 'Inertia.js', 'MySQL', 'Tailwind CSS'],
    role: 'Fullstack Developer',
    duration: '4 Months',
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
    demoLink: '#',
    githubLink: '#'
  },
  {
    title: 'Sistem Pakar Tanaman Hias',
    subtitle: 'Interactive diagnostics system for ornamental plant diseases',
    description: 'Sebuah aplikasi sistem pakar berbasis web yang dirancang untuk mendeteksi dan mendiagnosis penyakit pada tanaman hias berdasarkan gejala-gejala yang diinput oleh pengguna. Dibangun dengan antarmuka yang ramah pengguna, responsif, dan interaktif guna membantu pecinta tanaman hias merawat tanaman mereka dengan lebih baik.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    role: 'Frontend Developer',
    duration: '2 Months',
    images: [tanamanHias1, tanamanHias2],
    features: [
      'Interactive Consultation form with dynamic questions based on observed symptoms',
      'Advanced Diagnosis Engine presenting accuracy metrics and recommendation details',
      'Plant Disease Directory listing common ornamental plant diseases, prevention tips, and cures',
      'Responsive UI layout optimized for gardeners diagnosing on both mobile and desktop screens',
      'Smooth micro-interactions and transitions for an intuitive client-side consultation experience'
    ],
    demoLink: '#',
    githubLink: '#'
  },
  {
    title: 'Personal Portfolio Website',
    subtitle: 'Premium, interactive developer profile and showcase portal',
    description: 'Sebuah situs portofolio personal premium interaktif yang dirancang untuk memamerkan keahlian, pengalaman kerja, proyek, dan kredensial sertifikat. Dilengkapi dengan efek animasi mikro yang responsif, desain kaca (glassmorphism), marquee keahlian dinamis, dan slider detail proyek yang elegan.',
    tech: ['React', 'Tailwind CSS', 'Vite', 'Framer Motion'],
    role: 'Frontend Developer',
    duration: '3 Weeks',
    images: [portofolio1, portofolio2],
    features: [
      'Interactive horizontal sliders for both Projects and Certifications sections',
      'Infinite horizontal marquee displaying skill badges with local assets',
      'Detailed project lightbox modals with responsive touch-friendly image sliders',
      'Clean single-page layout utilizing custom animations (SplitText, ShinyText, Magnet)',
      'Polished responsive typography and colors matching the warm ivory theme'
    ],
    demoLink: '#',
    githubLink: '#'
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const scrollRef = useRef(null);

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

  // Handle horizontal scrolling behavior
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const cardWidth = window.innerWidth < 640 ? 300 + 24 : 420 + 32; // card size + gap
      const offset = direction === 'left' ? -cardWidth : cardWidth;
      scrollRef.current.scrollTo({
        left: scrollLeft + offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" className="w-full relative overflow-hidden">
      {/* Watermark text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 text-[12rem] md:text-[20rem] font-serif italic font-black text-ill-stroke opacity-10 select-none whitespace-nowrap pointer-events-none">
        Projects
      </div>

      <div className="w-full py-20 px-8 max-w-6xl mx-auto relative z-10">
        
        {/* Header container with title and slider controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-bold text-headline mb-4">Featured Projects</h2>
            <p className="text-paragraph max-w-lg text-sm md:text-base">
              Koleksi aplikasi dan sistem yang telah saya bangun, mencakup solusi full-stack dan aplikasi web interaktif.
            </p>
          </div>
          {/* Slide navigation controls */}
          <div className="flex space-x-3 self-end md:self-auto">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border-2 border-ill-secondary flex items-center justify-center text-headline bg-white/80 hover:bg-primary-btn hover:text-btn-text hover:border-primary-btn transition-all active:scale-95 shadow-sm cursor-pointer"
              aria-label="Sebelumnya"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border-2 border-ill-secondary flex items-center justify-center text-headline bg-white/80 hover:bg-primary-btn hover:text-btn-text hover:border-primary-btn transition-all active:scale-95 shadow-sm cursor-pointer"
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
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-bg via-bg/5 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-bg via-bg/5 to-transparent z-10 pointer-events-none" />

          {/* Slider track */}
          <div
            ref={scrollRef}
            className="flex gap-6 md:gap-8 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory pb-6 px-1"
          >
            {projects.map((project, index) => (
              <GlowCard
                key={index}
                className="w-[300px] sm:w-[420px] flex-shrink-0 bg-white rounded-3xl overflow-hidden border-2 border-ill-secondary hover:border-primary-btn hover:shadow-2xl transition-all group duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col snap-start"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image Wrapper */}
                <div className="relative aspect-video overflow-hidden bg-ill-secondary flex-shrink-0">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-primary-btn text-btn-text text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                    {project.role}
                  </span>
                </div>

                {/* Project Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-headline mb-2 group-hover:text-primary-btn transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs italic text-primary-btn font-medium mb-4">
                    {project.subtitle}
                  </p>
                  <p className="text-paragraph mb-6 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
                    {project.tech.slice(0, 3).map((t, i) => (
                      <span key={i} className="bg-bg text-link px-2.5 py-0.5 rounded-full text-xs font-medium border border-link/50">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-xs text-paragraph/70 font-semibold px-2 py-0.5">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* View Details Action */}
                  <div className="inline-flex items-center text-primary-btn font-bold hover:underline mt-auto">
                    View Project Details
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
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
              className="absolute top-4 right-4 bg-white/80 hover:bg-white text-headline p-2 rounded-full z-10 shadow-md border border-ill-secondary transition-all hover:scale-110"
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

                <span className="absolute bottom-4 left-4 bg-primary-btn text-btn-text text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
                  {selectedProject.role}
                </span>
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
                  <a
                    href={selectedProject.demoLink}
                    className="flex items-center justify-center w-full bg-primary-btn text-btn-text py-3 rounded-xl font-bold hover:opacity-90 transition-opacity shadow-md text-sm"
                  >
                    <span>Live Demo</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a
                    href={selectedProject.githubLink}
                    className="flex items-center justify-center w-full border-2 border-headline text-headline py-3 rounded-xl font-bold hover:bg-headline hover:text-white transition-colors text-sm"
                  >
                    <span>GitHub Code</span>
                    <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Detailed Info Scrollable */}
            <div className="md:w-1/2 p-6 md:p-8 overflow-y-auto max-h-[50vh] md:max-h-full flex flex-col">
              <h3 className="text-3xl font-bold text-headline font-serif leading-tight mb-1">
                {selectedProject.title}
              </h3>
              <p className="text-sm italic text-primary-btn font-medium mb-4">
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


