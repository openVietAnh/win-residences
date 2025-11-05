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
        <div className="relative w-full h-[90vh] flex">
          {/* Close button */}
          <Button
            onClick={onClose}
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-50 text-white hover:bg-white/20 rounded-full"
          >
            <X className="h-6 w-6" />
          </Button>

          {/* Left sidebar - Sub-sections */}
          <div className="w-64 bg-black/50 backdrop-blur-sm border-r border-white/10 overflow-y-auto p-4 flex-shrink-0">
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Sections
            </h3>
            <div className="space-y-2">
              {subSections.map((subSection, index) => (
                <button
                  key={index}
                  onClick={() => handleSubSectionChange(index)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                    index === selectedSubSection
                      ? 'bg-accent text-white'
                      : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span className="text-sm">{subSection.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right side - Image viewer */}
          <div className="flex-1 relative flex items-center justify-center">
            {/* Previous button */}
            <Button
              onClick={handlePrevious}
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-40 text-white hover:bg-white/20 rounded-full h-12 w-12"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            {/* Image */}
            <div className="relative w-full h-full flex flex-col items-center justify-center p-4 md:p-8">
              <div className="relative w-full h-full max-h-[75vh] flex items-center justify-center">
                <img
                  src={currentImage.src}
                  alt={currentImage.alt}
                  className="max-w-full max-h-full object-contain animate-scale-in"
                  key={currentIndex}
                />
              </div>

              {/* Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm">
                {currentIndex + 1} / {images.length}
              </div>
            </div>

            {/* Next button */}
            <Button
              onClick={handleNext}
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-40 text-white hover:bg-white/20 rounded-full h-12 w-12"
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            {/* Thumbnail strip */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 max-w-full overflow-x-auto px-4 pb-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all ${
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
