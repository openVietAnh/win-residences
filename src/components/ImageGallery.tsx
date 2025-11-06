import { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface GalleryImage {
  src: string;
  alt: string;
}

interface SubSection {
  title: string;
  images: GalleryImage[];
}

interface ImageGalleryProps {
  subSections: SubSection[];
  isOpen: boolean;
  onClose: () => void;
}

const ImageGallery = ({ subSections, isOpen, onClose }: ImageGalleryProps) => {
  const [selectedSubSection, setSelectedSubSection] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setSelectedSubSection(0);
    setCurrentIndex(0);
  }, [isOpen]);

  const currentSubSection = subSections[selectedSubSection];
  const images = currentSubSection?.images || [];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleSubSectionChange = (index: number) => {
    setSelectedSubSection(index);
    setCurrentIndex(0);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex]);

  if (!images.length) return null;

  const currentImage = images[currentIndex];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl w-full p-0 bg-black/95 border-none">
        <div className="relative w-full h-[90vh] flex flex-col md:flex-row">
          {/* Close button */}
          <Button
            onClick={onClose}
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-50 text-white hover:bg-white/20 rounded-full"
          >
            <X className="h-6 w-6" />
          </Button>

          {/* Sections selector - Top on mobile, Left sidebar on desktop */}
          <div className="md:w-64 bg-black/50 backdrop-blur-sm border-b md:border-b-0 md:border-r border-white/10 overflow-x-auto md:overflow-y-auto p-3 md:p-4 flex-shrink-0">
            <h3 className="text-white font-semibold mb-3 md:mb-4 text-xs md:text-sm uppercase tracking-wider hidden md:block">
              Sections
            </h3>
            <div className="flex md:flex-col gap-2 md:space-y-2 md:gap-0">
              {subSections.map((subSection, index) => (
                <button
                  key={index}
                  onClick={() => handleSubSectionChange(index)}
                  className={`flex-shrink-0 whitespace-nowrap md:w-full text-left px-3 md:px-4 py-2 md:py-3 rounded-lg transition-all ${
                    index === selectedSubSection
                      ? 'bg-accent text-white'
                      : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span className="text-xs md:text-sm">{subSection.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Image viewer */}
          <div className="flex-1 relative flex items-center justify-center min-h-0">
            {/* Previous button */}
            <Button
              onClick={handlePrevious}
              variant="ghost"
              size="icon"
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-40 text-white hover:bg-white/20 rounded-full h-10 w-10 md:h-12 md:w-12"
            >
              <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
            </Button>

            {/* Image */}
            <div className="relative w-full h-full flex flex-col items-center justify-center p-2 md:p-8">
              <div className="relative w-full h-full max-h-[60vh] md:max-h-[75vh] flex items-center justify-center">
                <img
                  src={currentImage.src}
                  alt={currentImage.alt}
                  className="max-w-full max-h-full object-contain animate-scale-in"
                  key={currentIndex}
                />
              </div>

              {/* Counter */}
              <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-xs md:text-sm bg-black/50 px-2 py-1 rounded">
                {currentIndex + 1} / {images.length}
              </div>
            </div>

            {/* Next button */}
            <Button
              onClick={handleNext}
              variant="ghost"
              size="icon"
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-40 text-white hover:bg-white/20 rounded-full h-10 w-10 md:h-12 md:w-12"
            >
              <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
            </Button>

            {/* Thumbnail strip */}
            <div className="absolute bottom-12 md:bottom-20 left-1/2 -translate-x-1/2 flex gap-2 max-w-full overflow-x-auto px-4 pb-2 scrollbar-hide">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`flex-shrink-0 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded overflow-hidden border-2 transition-all ${
                    index === currentIndex
                      ? 'border-accent scale-110'
                      : 'border-white/20 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageGallery;
