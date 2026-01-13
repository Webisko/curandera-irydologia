import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  // Custom style: dark background, white text, on hover dark border and dark text
  const customStyles = "px-8 py-3 rounded-none transition-all duration-300 font-sans tracking-wide border border-curandera-dark bg-curandera-dark text-white text-h-m font-normal hover:bg-white hover:text-curandera-dark hover:border-curandera-dark shadow-md hover:shadow-lg";

  // Always use customStyles for this button (for 'Kup analizę irydologiczną')
  return (
    <button 
      className={`${customStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};