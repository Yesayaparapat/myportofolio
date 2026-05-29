import React from 'react';
import GlowCard from './GlowCard';

// Import skills assets from the Skils folder
import cssIcon from '../assets/Skils/css-3.png';
import githubIcon from '../assets/Skils/github.png';
import jsIcon from '../assets/Skils/js.png';
import nodejsIcon from '../assets/Skils/nodejs.png';
import reactIcon from '../assets/Skils/react.svg';
import tailwindIcon from '../assets/Skils/tailwindcss.png';
import tsIcon from '../assets/Skils/typescript.png';
import vueIcon from '../assets/Skils/vue.js.png';

const skills = [
  {
    name: 'JavaScript',
    category: 'Frontend',
    glowColor: 'rgba(247, 223, 30, 0.12)',
    labelColor: 'text-headline group-hover:text-primary-btn',
    icon: jsIcon
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    glowColor: 'rgba(49, 120, 198, 0.12)',
    labelColor: 'text-headline group-hover:text-primary-btn',
    icon: tsIcon
  },
  {
    name: 'React.js',
    category: 'Frontend',
    glowColor: 'rgba(97, 218, 251, 0.12)',
    labelColor: 'text-headline group-hover:text-primary-btn',
    icon: reactIcon
  },
  {
    name: 'Vue.js',
    category: 'Frontend',
    glowColor: 'rgba(65, 184, 131, 0.12)',
    labelColor: 'text-headline group-hover:text-primary-btn',
    icon: vueIcon
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    glowColor: 'rgba(6, 182, 212, 0.12)',
    labelColor: 'text-headline group-hover:text-primary-btn',
    icon: tailwindIcon
  },
  {
    name: 'CSS',
    category: 'Frontend',
    glowColor: 'rgba(21, 114, 182, 0.12)',
    labelColor: 'text-headline group-hover:text-primary-btn',
    icon: cssIcon
  },
  {
    name: 'Node.js',
    category: 'Backend',
    glowColor: 'rgba(51, 153, 51, 0.12)',
    labelColor: 'text-teal-700 group-hover:text-teal-500',
    icon: nodejsIcon
  },
  {
    name: 'GitHub',
    category: 'Tools',
    glowColor: 'rgba(31, 41, 55, 0.08)',
    labelColor: 'text-orange-700 group-hover:text-orange-500',
    icon: githubIcon
  }
];

const Skills = () => {
  return (
    <section id="skills" className="w-full relative overflow-hidden bg-bg/50 border-t-2 border-ill-secondary/35">
      {/* Watermark text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 text-[10rem] md:text-[18rem] font-serif italic font-black text-ill-stroke opacity-[0.06] select-none whitespace-nowrap pointer-events-none">
        Skills
      </div>

      <div className="w-full py-20 px-8 max-w-6xl mx-auto relative z-10">
        {/* Custom Header: <> My Skill */}
        <div className="flex items-center mb-12">
          <span className="text-[#06B6D4] font-mono text-3xl md:text-4xl font-extrabold mr-3">&lt;&gt;</span>
          <h2 className="text-3xl md:text-4xl font-bold text-headline">My Skill</h2>
        </div>

        {/* Infinite Marquee Slider container */}
        <div className="relative w-full overflow-hidden py-10">
          {/* Left and Right Fade Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-bg via-bg/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-bg via-bg/80 to-transparent z-20 pointer-events-none" />

          {/* Scrolling track */}
          <div className="animate-marquee flex gap-6 md:gap-8">
            {/* First copy */}
            {skills.map((skill, index) => (
              <GlowCard
                key={`marquee-1-${index}`}
                glowColor={skill.glowColor}
                className="w-32 md:w-36 h-32 md:h-36 bg-white border-2 border-ill-secondary rounded-2xl md:rounded-3xl p-4 flex flex-col items-center justify-center group cursor-default transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-btn hover:shadow-xl"
              >
                <div className="mb-3 flex items-center justify-center flex-grow">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span className={`text-xs md:text-sm font-bold text-center transition-colors ${skill.labelColor}`}>
                  {skill.name}
                </span>
              </GlowCard>
            ))}
            {/* Second copy (essential for infinite looping) */}
            {skills.map((skill, index) => (
              <GlowCard
                key={`marquee-2-${index}`}
                glowColor={skill.glowColor}
                className="w-32 md:w-36 h-32 md:h-36 bg-white border-2 border-ill-secondary rounded-2xl md:rounded-3xl p-4 flex flex-col items-center justify-center group cursor-default transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-btn hover:shadow-xl"
              >
                <div className="mb-3 flex items-center justify-center flex-grow">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span className={`text-xs md:text-sm font-bold text-center transition-colors ${skill.labelColor}`}>
                  {skill.name}
                </span>
              </GlowCard>
            ))}
          </div>
        </div>

        {/* Legend / Category indicator dots */}
        <div className="flex flex-wrap justify-center items-center gap-6 mt-8 text-xs md:text-sm text-paragraph/80 font-medium">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-white border border-headline/20"></span>
            <span>Frontend</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-[#06B6D4]"></span>
            <span>Backend</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-orange-400"></span>
            <span>Tools</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
