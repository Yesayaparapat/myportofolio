import React from 'react';
import GlowCard from './GlowCard';

const experiences = [
  {
    role: 'Fullstack Developer Intern',
    company: 'Kantor Akuntan Publik',
    duration: 'Mei 2025 - Agustus 2025',
    type: 'Magang',
    desc: 'Mengembangkan aplikasi absensi karyawan komprehensif berbasis web untuk menyederhanakan operasional HR.',
    points: [
      'Mengembangkan aplikasi web absensi karyawan yang komprehensif menggunakan Laravel, React, TypeScript, dan Inertia.js untuk merampingkan operasional HR.',
      'Menerapkan kontrol akses berbasis peran (RBAC) yang aman dan alur kerja persetujuan otomatis untuk pengajuan sakit dan cuti guna meningkatkan efisiensi administratif.',
      'Mengintegrasikan komunikasi frontend-backend secara mulus via Inertia.js untuk menghindari pemuatan ulang halaman secara penuh dan menghadirkan pengalaman pengguna Single Page Application (SPA) yang lancar.'
    ],
    tech: ['Laravel', 'React', 'TypeScript', 'Inertia.js', 'MySQL']
  },
  {
    role: 'Front-End Developer',
    company: 'Campus Project',
    duration: 'Jan, 2026 - Mar, 2026',
    type: 'Proyek',
    desc: 'Merancang dan membangun antarmuka web responsif untuk sistem pakar diagnosis penyakit tanaman hias.',
    points: [
      'Designed and implemented a responsive front-end interface using HTML, CSS, and JavaScript to enhance user experience.',
      'Collaborated on optimizing application performance, resolving functionality bugs, and ensuring smooth component integration.'
    ],
    tech: ['HTML', 'CSS', 'JavaScript']
  }
];

const Experience = () => {
  return (
    <section id="experience" className="w-full relative overflow-hidden bg-white/30 border-t-2 border-ill-secondary/35">
      {/* Watermark text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 text-[10rem] md:text-[18rem] font-serif italic font-black text-ill-stroke opacity-[0.06] select-none whitespace-nowrap pointer-events-none">
        Experience
      </div>

      <div className="w-full py-20 px-8 max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-headline mb-4 text-center">Work Experience</h2>
        <p className="text-center text-paragraph max-w-lg mx-auto mb-16 text-sm md:text-base">
          Perjalanan profesional saya sebagai pengembang perangkat lunak, kontribusi tim, dan solusi teknis yang saya bangun.
        </p>

        {/* Timeline container */}
        <div className="relative max-w-5xl mx-auto pl-8 md:pl-0">
          {/* Central Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-ill-secondary/70 transform -translate-x-1/2" />

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-stretch mb-12 md:mb-16 w-full group justify-between ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Timeline Bullet Node */}
                <span className="absolute left-[-26px] md:left-1/2 md:-translate-x-1/2 top-2 md:top-8 flex h-5 w-5 items-center justify-center rounded-full bg-white border-4 border-primary-btn group-hover:scale-125 transition-transform duration-300 z-10 shadow-sm" />

                {/* Card Content Column */}
                <div className="w-full md:w-[calc(50%-2rem)] flex flex-col">
                  <GlowCard className="bg-white rounded-3xl p-6 md:p-8 border-2 border-ill-secondary hover:border-primary-btn hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    {/* Header info */}
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-headline font-serif group-hover:text-primary-btn transition-colors">
                          {exp.role}
                        </h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-sm font-semibold text-primary-btn">{exp.company}</span>
                          <span className="text-xs text-paragraph/50">•</span>
                          <span className="bg-bg text-link text-[10px] font-bold px-2 py-0.5 rounded-md border border-link/30">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-paragraph/80 font-mono bg-bg px-3 py-1 rounded-full border border-ill-secondary/60 self-start sm:self-auto">
                        {exp.duration}
                      </span>
                    </div>

                    {/* Job Description */}
                    <p className="text-sm text-paragraph leading-relaxed mb-4 text-left">
                      {exp.desc}
                    </p>

                    {/* Key Points list */}
                    <ul className="space-y-2.5 mb-6">
                      {exp.points.map((point, pIndex) => (
                        <li key={pIndex} className="flex items-start text-sm text-paragraph text-left">
                          <svg className="w-4 h-4 text-primary-btn mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                          </svg>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies tag list */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-ill-secondary/40">
                      {exp.tech.map((t, tIndex) => (
                        <span
                          key={tIndex}
                          className="bg-bg text-link px-2.5 py-0.5 rounded-full text-xs font-semibold border border-link/40 shadow-xs hover:border-link hover:text-headline transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </GlowCard>
                </div>

                {/* Spacer for desktop layout alignment */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
