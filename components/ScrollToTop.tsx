import React, { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 800);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const onClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      aria-label="Scroll to top"
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 flex items-center justify-center rounded-full border-2 border-curandera-dark bg-transparent text-curandera-dark hover:bg-curandera-dark hover:text-white transition-colors duration-300"
    >
      <ChevronUp size={24} />
    </button>
  );
};
