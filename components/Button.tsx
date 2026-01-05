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
  const baseStyles = "px-8 py-3 rounded-none transition-all duration-300 font-sans tracking-wide text-sm font-medium uppercase";
  
  const variants = {
    primary: "bg-[#030303] text-white hover:bg-curandera-accent shadow-md hover:shadow-lg",
    outline: "border border-[#030303] text-[#030303] hover:bg-[#030303] hover:text-white",
    text: "text-curandera-dark underline decoration-curandera-accent/50 hover:decoration-curandera-accent"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};