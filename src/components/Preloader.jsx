import React, { useEffect, useState } from 'react';

const Preloader = ({ onComplete }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Step 1: Expand YP to Yesaya Parapat after 0.5s
    const expandTimer = setTimeout(() => {
      setStep(1);
    }, 500);

    // Step 2: Slide up after 1.7s total
    const slideTimer = setTimeout(() => {
      setStep(2);
    }, 1700);

    // Step 3: Unmount after 2.4s total
    const removeTimer = setTimeout(() => {
      onComplete();
    }, 2400);

    return () => {
      clearTimeout(expandTimer);
      clearTimeout(slideTimer);
      clearTimeout(removeTimer);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg transition-transform duration-700 ease-in-out ${step === 2 ? '-translate-y-full' : 'translate-y-0'}`}>
      
      <div className="flex items-center justify-center text-3xl sm:text-5xl md:text-7xl font-extrabold text-headline font-serif">
        
        {/* Yesaya */}
        <div className={`flex items-center transition-transform duration-1000 ease-[cubic-bezier(0.7,0,0.3,1)] ${step === 0 ? 'translate-x-3' : '-translate-x-3'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:w-12 md:h-12 text-black drop-shadow-md shrink-0 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          <span className="text-primary-btn drop-shadow-[4px_4px_0_rgba(0,0,0,0.15)]">Y</span>
          <div className={`py-6 -my-6 overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.7,0,0.3,1)] ${step === 0 ? 'max-w-0 opacity-0' : 'max-w-[200px] md:max-w-[300px] opacity-100'}`}>
            <span className="text-primary-btn drop-shadow-[4px_4px_0_rgba(0,0,0,0.15)]">esaya</span>
          </div>
        </div>

        {/* Parapat */}
        <div className={`flex items-center transition-transform duration-1000 ease-[cubic-bezier(0.7,0,0.3,1)] ${step === 0 ? '-translate-x-3' : 'translate-x-3'}`}>
          <span className="text-white drop-shadow-[4px_4px_0_rgba(0,0,0,0.15)] [-webkit-text-stroke:1px_#020826]">P</span>
          <div className={`flex items-center py-6 -my-6 overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.7,0,0.3,1)] ${step === 0 ? 'max-w-0 opacity-0' : 'max-w-[300px] md:max-w-[500px] opacity-100'}`}>
            <span className="text-white drop-shadow-[4px_4px_0_rgba(0,0,0,0.15)] [-webkit-text-stroke:1px_#020826]">arapat</span>
            <span className="text-primary-btn drop-shadow-[4px_4px_0_rgba(0,0,0,0.15)] mr-4">.</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Preloader;
