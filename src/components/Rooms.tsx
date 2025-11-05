import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import ImageGallery from './ImageGallery';
import oneBedroom1 from '@/assets/1bedroom.jpg';
import oneBedroom2 from '@/assets/1bedroom-2.jpg';
import oneBedroom3 from '@/assets/1bedroom-3.jpg';
import twoBedroom1 from '@/assets/2bedroom.jpg';
import twoBedroom2 from '@/assets/2bedroom-2.jpg';
import twoBedroom3 from '@/assets/2bedroom-3.jpg';
import commonArea1 from '@/assets/common-area.jpg';
import commonArea2 from '@/assets/common-area-2.jpg';
import commonArea3 from '@/assets/common-area-3.jpg';

const Rooms = () => {
  const { t } = useTranslation();
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedRoomIndex, setSelectedRoomIndex] = useState(0);

  const rooms = [
    {
      coverImage: oneBedroom1,
      title: t('rooms.oneBedroom.title'),
      description: t('rooms.oneBedroom.description'),
      images: [
        { src: oneBedroom1, alt: 'One Bedroom - Main View' },
        { src: oneBedroom2, alt: 'One Bedroom - Bedroom' },
        { src: oneBedroom3, alt: 'One Bedroom - Bathroom' },
      ],
    },
    {
      coverImage: twoBedroom1,
      title: t('rooms.twoBedroom.title'),
      description: t('rooms.twoBedroom.description'),
      images: [
        { src: twoBedroom1, alt: 'Two Bedroom - Main View' },
        { src: twoBedroom2, alt: 'Two Bedroom - Living Area' },
        { src: twoBedroom3, alt: 'Two Bedroom - Master Bedroom' },
      ],
    },
    {
      coverImage: commonArea1,
      title: t('rooms.commonArea.title'),
      description: t('rooms.commonArea.description'),
      images: [
        { src: commonArea1, alt: 'Common Area - Main Space' },
        { src: commonArea2, alt: 'Common Area - Lounge' },
        { src: commonArea3, alt: 'Common Area - Reception' },
      ],
    },
  ];

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
        images={rooms[selectedRoomIndex]?.images.map((img) => ({
          src: img.src,
          title: img.alt,
          description: '',
        })) || []}
        initialIndex={0}
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
      />
    </section>
  );
};

export default Rooms;
