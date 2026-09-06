import React, { useState, useEffect } from 'react';
import Magnet from './Magnet';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor window scroll offset to apply sticky styles
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${isScrolled
        ? 'bg-bg/85 backdrop-blur-md shadow-md border-b border-ill-secondary/35 py-4'
        : 'bg-transparent py-6'
      }`}>
      <nav className="w-full px-8 flex justify-between items-center max-w-6xl mx-auto">
        <Magnet className="flex items-center text-2xl font-bold text-headline cursor-pointer">
          <span className="text-link">&lt;/</span><span className="text-link">yp</span><span className="text-link">&gt;</span>
          <div className="overflow-hidden flex items-center ml-2 mt-[3px]">
            <span className="font-bold text-headline text-[10px] tracking-[3px] animate-slide-left-fade">YESAYA PARAPAT</span>
          </div>
        </Magnet>
        <div className="hidden md:flex space-x-8 text-link font-medium">
          <a href="#about" className="hover:text-headline transition-colors">About</a>
          <a href="#skills" className="hover:text-headline transition-colors">Skills</a>
          <a href="#experience" className="hover:text-headline transition-colors">Experience</a>
          <a href="#projects" className="hover:text-headline transition-colors">Projects</a>
          <a href="#certificates" className="hover:text-headline transition-colors">Course &amp; Certification</a>
          <a href="#contact" className="hover:text-headline transition-colors">Contact</a>
        </div>
        <button className="md:hidden text-headline" aria-label="Open navigation menu">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
