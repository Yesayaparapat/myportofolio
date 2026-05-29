import React from 'react';

const SplitText = ({ text = '', delay = 0.05, className = '' }) => {
  const letters = text.split('');

  return (
    <span className={`inline-block ${className}`}>
      {letters.map((char, index) => (
        <span
          key={index}
          className="inline-block animate-reveal-char opacity-0"
          style={{
            animationDelay: `${index * delay}s`,
            animationFillMode: 'both',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

export default SplitText;
