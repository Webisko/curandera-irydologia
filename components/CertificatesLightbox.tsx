import React, { useState, useEffect } from 'react';
import { asset } from '../utils/asset';
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from 'lucide-react';

interface CertificatesLightboxProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CertificatesLightbox: React.FC<CertificatesLightboxProps> = ({ isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const certificates = [
    { id: 'certyfikat', name: 'Certyfikat', path: 'images/certyfikat.webp' },
    { id: 'dyplom', name: 'Dyplom', path: 'images/dyplom.webp' },
    { id: 'zaswiadczenie', name: 'Zaświadczenie', path: 'images/zaswiadczenie.webp' },
  ];

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex]);

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToIndex = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setZoom(1);
    setOffset({ x: 0, y: 0 });
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const toggleZoom = () => {
    setZoom(zoom === 1 ? 2 : 1);
    setOffset({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom === 1) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - offset.x, y: e.clientY - offset.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || zoom === 1) return;
    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;
    
    // Limit dragging to prevent moving too far outside the image
    const maxOffsetX = 100;
    const maxOffsetY = 100;
    
    setOffset({
      x: Math.max(-maxOffsetX, Math.min(maxOffsetX, newX)),
      y: Math.max(-maxOffsetY, Math.min(maxOffsetY, newY)),
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white hover:bg-curandera-accent hover:text-white transition-colors"
          aria-label="Zamknij galerię"
        >
          <X size={24} />
        </button>

        {/* Main image container - transparent background */}
        <div 
          className="relative flex-1 overflow-hidden flex items-center justify-center"
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              key={`main-${currentIndex}`}
              src={asset(certificates[currentIndex].path)}
              alt={certificates[currentIndex].name}
              className={`transition-opacity duration-300 object-contain ${
                isTransitioning ? 'opacity-0' : 'opacity-100'
              } ${zoom > 1 ? 'cursor-grab active:cursor-grabbing' : 'cursor-zoom-in'}`}
              style={{
                transform: `scale(${zoom}) translate(${offset.x}px, ${offset.y}px)`,
                maxWidth: '100%',
                maxHeight: '100%',
                userSelect: 'none',
              }}
              onMouseDown={handleMouseDown}
              draggable={false}
            />
          </div>

          {/* Zoom button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleZoom();
            }}
            className="absolute top-4 left-4 p-2 rounded-full bg-curandera-accent text-white hover:bg-curandera-secondary transition-colors z-10"
            aria-label={zoom === 1 ? 'Powiększ' : 'Zmniejsz'}
            title={zoom === 1 ? 'Powiększ (2x)' : 'Zmniejsz'}
          >
            {zoom === 1 ? <ZoomIn size={20} /> : <ZoomOut size={20} />}
          </button>

          {/* Arrow Navigation */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-curandera-dark/70 hover:bg-curandera-dark transition-colors text-white z-10"
            aria-label="Poprzednie zdjęcie"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-curandera-dark/70 hover:bg-curandera-dark transition-colors text-white z-10"
            aria-label="Następne zdjęcie"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Thumbnails - transparent background */}
        <div className="p-4 flex gap-3 justify-center">
          {certificates.map((cert, index) => (
            <button
              key={cert.id}
              onClick={() => goToIndex(index)}
              className={`relative rounded overflow-hidden transition-all duration-200 ${
                currentIndex === index
                  ? 'ring-2 ring-curandera-accent scale-105'
                  : 'opacity-60 hover:opacity-100 hover:scale-105'
              }`}
              style={{ width: '80px', height: '80px' }}
            >
              <img
                src={asset(cert.path)}
                alt={`Miniatura: ${cert.name}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
};
