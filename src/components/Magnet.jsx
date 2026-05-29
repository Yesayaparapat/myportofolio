import React, { useState, useRef } from 'react';

const Magnet = ({ children, className = '', ...rest }) => {
  const magnetRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!magnetRef.current) return;
    const rect = magnetRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate mouse position relative to the center of the element
    const x = e.clientX - rect.left - width / 2;
    const y = e.clientY - rect.top - height / 2;
    
    // Pull factor (0.35 means element moves 35% of the mouse offset distance)
    const pullX = 0.35;
    const pullY = 0.35;
    
    setPosition({ x: x * pullX, y: y * pullY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={magnetRef}
      className={`inline-block transition-transform duration-200 ease-out ${className}`}
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Magnet;
