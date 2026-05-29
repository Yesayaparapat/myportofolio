import React, { useRef, useState } from 'react';

const GlowCard = ({ children, className = '', glowColor = 'rgba(99, 102, 241, 0.15)', onClick, ...rest }) => {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden isolate ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      {...rest}
    >
      {/* Radial Glow Overlay */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 -z-10"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${coords.x}px ${coords.y}px, ${glowColor}, transparent 80%)`,
        }}
      />
      {children}
    </div>
  );
};

export default GlowCard;
