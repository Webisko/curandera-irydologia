import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  bg?: 'default' | 'white' | 'soft';
}

export const Section: React.FC<SectionProps> = ({ id, className = '', children, bg = 'default' }) => {
  const bgColors = {
    default: 'bg-curandera-bg',
    white: 'bg-white',
    soft: 'bg-curandera-soft'
  };

  return (
    <section id={id} className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 ${bgColors[bg]} ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};