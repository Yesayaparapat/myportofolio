import React from 'react';
import GlowCard from './GlowCard';

// Import local contact icons
import gmailIcon from '../assets/contact/gmail.png';
import whatsappIcon from '../assets/contact/whatsapp.png';
import locationIcon from '../assets/contact/location.png';

const contactMethods = [
  {
    name: 'Email',
    value: 'yesayaparapat2004@gmail.com',
    link: 'mailto:yesayaparapat2004@gmail.com',
    color: 'hover:shadow-red-100 hover:border-red-400 text-red-500',
    glowColor: 'rgba(239, 68, 68, 0.12)',
    icon: (
      <img src={gmailIcon} alt="Gmail" className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300" />
    )
  },
  {
    name: 'WhatsApp',
    value: '0823-1246-0397',
    link: 'https://wa.me/6282312460397',
    color: 'hover:shadow-emerald-100 hover:border-emerald-400 text-emerald-500',
    glowColor: 'rgba(16, 185, 129, 0.12)',
    icon: (
      <img src={whatsappIcon} alt="WhatsApp" className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300" />
    )
  },
  {
    name: 'Lokasi',
    value: 'Jakarta, Indonesia',
    link: 'https://maps.google.com/?q=Jakarta,+Indonesia',
    color: 'hover:shadow-indigo-100 hover:border-indigo-400 text-indigo-500',
    glowColor: 'rgba(99, 102, 241, 0.12)',
    icon: (
      <img src={locationIcon} alt="Location" className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300" />
    )
  },
  {
    name: 'LinkedIn',
    value: 'Yesaya Parapat',
    link: 'https://www.linkedin.com/in/yesayaparapat/',
    color: 'hover:shadow-sky-100 hover:border-sky-400 text-sky-600',
    glowColor: 'rgba(2, 132, 199, 0.12)',
    icon: (
      <svg className="w-10 h-10 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    )
  },
  {
    name: 'GitHub',
    value: 'Yesayaparapat',
    link: 'https://github.com/Yesayaparapat',
    color: 'hover:shadow-zinc-200 hover:border-zinc-400 text-zinc-800',
    glowColor: 'rgba(113, 113, 122, 0.12)',
    icon: (
      <svg className="w-10 h-10 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    )
  }
];

const Contact = () => {
  return (
    <section id="contact" className="w-full relative overflow-hidden bg-bg/40 py-20 border-t-2 border-ill-secondary/35">
      {/* Watermark text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 text-[10rem] md:text-[18rem] font-serif italic font-black text-ill-stroke opacity-[0.06] select-none whitespace-nowrap pointer-events-none">
        Connect
      </div>

      <div className="w-full px-8 max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-headline mb-4 text-center">Mari Terhubung</h2>
        <p className="text-center text-paragraph max-w-lg mx-auto mb-16 text-sm md:text-base">
          Saya selalu terbuka untuk berkolaborasi, mendiskusikan peluang baru, atau sekadar menyapa. Hubungi saya di bawah ini!
        </p>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block cursor-pointer"
            >
              <GlowCard
                glowColor={method.glowColor}
                className={`bg-white rounded-3xl p-6 border-2 border-ill-secondary flex flex-col items-center justify-center text-center group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${method.color}`}
              >
                {/* Icon Container */}
                <div className="mb-4 flex items-center justify-center flex-grow">
                  {method.icon}
                </div>

                {/* Label */}
                <span className="text-xs font-bold uppercase tracking-wider text-paragraph/60 mb-1 block">
                  {method.name}
                </span>

                {/* Value */}
                <span className="text-sm font-bold text-headline group-hover:text-primary-btn transition-colors break-all w-full">
                  {method.value}
                </span>
              </GlowCard>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
