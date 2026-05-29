import React from 'react';

const ShinyText = ({ text = '', speed = 3, className = '' }) => {
  return (
    <span
      className={`shiny-text ${className}`}
      style={{
        animation: `shiny-text ${speed}s linear infinite`,
      }}
    >
      {text}
    </span>
  );
};

export default ShinyText;
