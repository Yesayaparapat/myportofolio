import React from 'react';
import yesayaImage from '../assets/yesayaaja.png';
import SplitText from './SplitText';
import ShinyText from './ShinyText';
import Magnet from './Magnet';

// Import Resume PDF
import myResume from '../assets/certifikat/Yesaya-Parapat-Resume.pdf';

const Hero = () => {
  return (
    <section id="about" className="w-full relative overflow-hidden min-h-[80vh] flex items-center">
      {/* Watermark text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 text-[10rem] md:text-[18rem] font-serif italic font-black text-ill-stroke opacity-10 select-none whitespace-nowrap pointer-events-none">
        Developer
      </div>

      {/* Mobile: flex-row (gambar kiri, teks kanan) | Desktop: flex-row */}
      <div className="w-full py-10 md:py-20 px-4 md:px-8 flex flex-row md:flex-row items-center gap-4 max-w-6xl mx-auto relative z-10">

        {/* Gambar - kiri di mobile, kanan di desktop */}
        <div className="flex justify-center relative order-1 md:order-2 flex-shrink-0">
          <img
            src={yesayaImage}
            alt="Yesaya Illustration"
            className="w-36 xs:w-44 md:w-[28rem] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Teks - kanan di mobile, kiri di desktop */}
        <div className="flex-1 order-2 md:order-1">
          <p className="text-sm md:text-2xl text-paragraph mb-1 md:mb-2 font-medium">
            <span className='text-headline'>Hello ,</span> my name is
          </p>
          <h2 className="text-xl md:text-6xl font-extrabold text-headline mb-2 md:mb-4 leading-tight">
            <span className="text-primary-btn drop-shadow-[3px_3px_0_rgba(0,0,0,0.15)]">
              <SplitText text="Yesaya" delay={0.06} />
            </span>{' '}
            <span className="text-white drop-shadow-[3px_3px_0_rgba(0,0,0,0.15)]">
              <SplitText text="Parapat" delay={0.06} className="[-webkit-text-stroke:1px_#020826] text-white" />
            </span>
          </h2>
          <h1 className="text-lg md:text-5xl font-extrabold text-headline leading-tight mb-4 md:mb-6 opacity-90">
            I am a <br /> <ShinyText text="FULLSTACK DEVELOPER." speed={3.5} className="font-extrabold text-headline leading-tight" />
          </h1>
          <p className="text-xs md:text-xl text-paragraph max-w-lg mb-4 md:mb-8 leading-relaxed">
            I build scalable web applications with a focus on modern user interfaces and high performance. Let's create something amazing together.
          </p>
          <div className="flex flex-row gap-2 md:gap-0 md:space-x-4">
            <Magnet>
              <a 
                href={myResume} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-primary-btn text-btn-text px-3 md:px-8 py-2 md:py-3 rounded-full text-[10px] md:text-base font-semibold shadow-lg hover:opacity-90 transition-opacity block text-center"
              >
                My Resume
              </a>
            </Magnet>
            <Magnet>
              <a href="#projects" className="border-2 border-primary-btn text-primary-btn px-3 md:px-8 py-2 md:py-3 rounded-full text-[10px] md:text-base font-semibold hover:bg-primary-btn hover:text-btn-text transition-colors block text-center">
                View Projects
              </a>
            </Magnet>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
