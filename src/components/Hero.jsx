import React from 'react';
import yesayaImage from '../assets/yesayaaja.png';

const Hero = () => {
  return (
    <section className="w-full relative overflow-hidden min-h-[80vh] flex items-center">
      {/* Watermark text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 text-[10rem] md:text-[18rem] font-serif italic font-black text-ill-stroke opacity-10 select-none whitespace-nowrap pointer-events-none">
        Developer
      </div>

      <div className="w-full py-20 px-8 flex flex-col-reverse md:flex-row items-center max-w-6xl mx-auto relative z-10">
        <div className="flex-1 mt-10 md:mt-0">
        <p className="text-xl md:text-2xl text-paragraph mb-2 font-medium"><span className='text-headline'>Hello ,</span> my name is</p>
        <h2 className="text-4xl md:text-6xl font-extrabold text-headline mb-4">
          <span className="text-primary-btn drop-shadow-[5px_5px_0_rgba(0,0,0,0.15)]">Yesaya</span> <span className="text-white drop-shadow-[5px_5px_0_rgba(0,0,0,0.15)] [-webkit-text-stroke:1px_#020826]">Parapat</span>
        </h2>
        <h1 className="text-3xl md:text-5xl font-extrabold text-headline leading-tight mb-6 opacity-90">
          Hi, I am a <br /> Web Developer.
        </h1>
        <p className="text-lg md:text-xl text-paragraph max-w-lg mb-8 leading-relaxed">
          I build scalable web applications with a focus on modern user interfaces and high performance. Let's create something amazing together.
        </p>
        <div className="flex space-x-4">
          <a href="#contact" className="bg-primary-btn text-btn-text px-8 py-3 rounded-full font-semibold shadow-lg hover:opacity-90 transition-opacity">
            Contact Me
          </a>
          <a href="#projects" className="border-2 border-primary-btn text-primary-btn px-8 py-3 rounded-full font-semibold hover:bg-primary-btn hover:text-btn-text transition-colors">
            View Projects
          </a>
        </div>
      </div>
      <div className="flex-1 flex justify-center relative">
        <img src={yesayaImage} alt="Yesaya Illustration" className="w-72 md:w-[28rem] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
      </div>
      </div>
    </section>
  );
};

export default Hero;
