import React from 'react';

interface CTAButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const CTAButton = ({ onClick, children }: CTAButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-primary hover:bg-primary-hover text-white font-bold py-4 px-8 rounded-full text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/20"
    >
      {children}
    </button>
  );
};

export default CTAButton;