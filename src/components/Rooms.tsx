import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import ImageGallery from './ImageGallery';
import oneBedroom1 from '@/assets/1bedroom.jpg';
import twoBedroom1 from '@/assets/2bedroom.jpg';
import commonArea1 from '@/assets/common-area.jpg';

// Dynamically import all images from sub-folders
const oneBedroomImages = import.meta.glob('@/assets/1bedroom/**/*.{jpg,JPG,jpeg,JPEG,png,PNG}', { eager: true, as: 'url' });
const twoBedroomImages = import.meta.glob('@/assets/2 bedrooms/**/*.{jpg,JPG,jpeg,JPEG,png,PNG}', { eager: true, as: 'url' });
const commonAreaImages = import.meta.glob('@/assets/Common areas/**/*.{jpg,JPG,jpeg,JPEG,png,PNG}', { eager: true, as: 'url' });

// Helper function to group images by sub-folder
const groupImagesByFolder = (images: Record<string, string>) => {
  const groups: Record<string, { src: string; alt: string }[]> = {};
  
  Object.entries(images).forEach(([path, src]) => {
    // Extract folder name from path
    const pathParts = path.split('/');
    const folderName = pathParts[pathParts.length - 2]; // Get the immediate parent folder
    const fileName = pathParts[pathParts.length - 1];
    
    if (!groups[folderName]) {
      groups[folderName] = [];
    }
    
    groups[folderName].push({
      src,
      alt: fileName.replace(/\.(jpg|JPG|jpeg|JPEG|png|PNG)$/, ''),
    });
  });
  
  return groups;
};

const Rooms = () => {
  const { t } = useTranslation();
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedRoomIndex, setSelectedRoomIndex] = useState(0);

  // Group images by sub-folders
  const oneBedroomGroups = useMemo(() => groupImagesByFolder(oneBedroomImages), []);
  const twoBedroomGroups = useMemo(() => groupImagesByFolder(twoBedroomImages), []);
  const commonAreaGroups = useMemo(() => groupImagesByFolder(commonAreaImages), []);

  const rooms = useMemo(() => [
    {
      coverImage: oneBedroom1,
      title: t('rooms.oneBedroom.title'),
      description: t('rooms.oneBedroom.description'),
      subSections: Object.entries(oneBedroomGroups).map(([title, images]) => ({
        title,
        images,
      })),
    },
    {
      coverImage: twoBedroom1,
      title: t('rooms.twoBedroom.title'),
      description: t('rooms.twoBedroom.description'),
      subSections: Object.entries(twoBedroomGroups).map(([title, images]) => ({
        title,
        images,
      })),
    },
    {
      coverImage: commonArea1,
      title: t('rooms.commonArea.title'),
      description: t('rooms.commonArea.description'),
      subSections: Object.entries(commonAreaGroups).map(([title, images]) => ({
        title,
        images,
      })),
    },
  ], [t, oneBedroomGroups, twoBedroomGroups, commonAreaGroups]);

  const handleCardClick = (index: number) => {
    setSelectedRoomIndex(index);
    setIsGalleryOpen(true);
  };

  return (
    <section id="rooms" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-foreground mb-12">
          {t('rooms.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <Card 
              key={index}
              className="overflow-hidden group hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => handleCardClick(index)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.coverImage}
                  alt={room.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-accent px-4 py-2 rounded-full">
                    {t('rooms.viewGallery') || 'View Gallery'}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {room.title}
                </h3>
                <p className="text-muted-foreground">
                  {room.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <ImageGallery
        subSections={rooms[selectedRoomIndex]?.subSections || []}
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
      />
    </section>
  );
};

export default Rooms;
