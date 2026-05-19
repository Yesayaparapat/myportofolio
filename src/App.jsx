import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
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
          <Projects />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
