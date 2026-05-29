import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      <div className="font-sans antialiased text-paragraph bg-bg min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Experience />
          <Projects />
          <Certificates />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;




