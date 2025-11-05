import { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface GalleryImage {
  src: string;
  title: string;
  description: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

const ImageGallery = ({ images, initialIndex, isOpen, onClose }: ImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex, isOpen]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
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
        <div className="relative w-full h-[90vh] flex items-center justify-center">
          {/* Close button */}
          <Button
            onClick={onClose}
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-50 text-white hover:bg-white/20 rounded-full"
          >
            <X className="h-6 w-6" />
          </Button>

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
                alt={currentImage.title}
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
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageGallery;
