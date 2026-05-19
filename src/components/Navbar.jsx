import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full py-6 px-8 flex justify-between items-center max-w-6xl mx-auto">
      <div className="text-2xl font-bold text-headline">
        Portofolio<span className="text-link">.</span>
      </div>
      <div className="hidden md:flex space-x-8 text-link font-medium">
        <a href="#about" className="hover:text-headline transition-colors">About</a>
        <a href="#projects" className="hover:text-headline transition-colors">Projects</a>
        <a href="#contact" className="hover:text-headline transition-colors">Contact</a>
      </div>
      <button className="md:hidden text-headline">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
