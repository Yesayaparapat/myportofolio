import React from 'react';

const projects = [
  {
    title: 'Movie Streaming App',
    description: 'An interactive streaming platform with dynamic movie cards, search functionality, and personalized watchlists.',
    tech: ['React', 'Tailwind CSS', 'Vite'],
    link: '#'
  },
  {
    title: 'Student CRUD Management',
    description: 'A comprehensive management system for student data, featuring create, read, update, and delete functionalities.',
    tech: ['Laravel', 'React', 'MySQL'],
    link: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="w-full relative overflow-hidden">
      {/* Watermark text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 text-[12rem] md:text-[20rem] font-serif italic font-black text-ill-stroke opacity-10 select-none whitespace-nowrap pointer-events-none">
        Projects
      </div>
      
      <div className="w-full py-20 px-8 max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-headline mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-2xl p-8 border-2 border-ill-secondary hover:border-primary-btn hover:shadow-xl transition-all group duration-300 transform hover:-translate-y-2">
            <h3 className="text-2xl font-bold text-headline mb-4 group-hover:text-primary-btn transition-colors">{project.title}</h3>
            <p className="text-paragraph mb-6 line-clamp-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t, i) => (
                <span key={i} className="bg-bg text-link px-3 py-1 rounded-full text-sm font-medium border border-link">
                  {t}
                </span>
              ))}
            </div>
            <a href={project.link} className="inline-flex items-center text-primary-btn font-bold hover:underline">
              View Project
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Projects;
