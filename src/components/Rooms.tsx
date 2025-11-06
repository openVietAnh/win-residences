import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import ImageGallery from './ImageGallery';

// Image data structure for each room type
const roomImageData = {
  oneBedroom: {
    coverImage: '/assets/1bedroom.jpg',
    subSections: {
      'Balcony (301,401,501,601)': [
        'image-01.jpg',
        'image 02 - Living room.jpg',
        'image 03 - Balcony.jpg',
        'image 04 - Bedroom.jpg',
        'image 05 - Bedroom.jpg',
        'image 06 - Kitchen.jpg',
        'image 07 - Kitchen.jpg',
        'image 08 - Kitchen.jpg',
        'image 09 - Bathroom.jpg',
        'image 10 - Bathroom.jpg',
        'image 11- Bathroom.jpg',
      ],
      'Light well view (102)': [
        'image 01 - living room.jpg',
        'image 02 - bed room .jpg',
        'image 03 - bed room .jpg',
        'image 04- Kitchen.jpg',
        'image 05- Kitchen .jpg',
        'image 06 - Bathroom.jpg',
        'image 07 - Bathroom.jpg',
      ],
      'No balcony (201)': [
        'image 01 - Living room.jpg',
        'image 02 - Bedroom.jpg',
        'image 03 - Bedroom.jpg',
        'image 04 - Kitchen.jpg',
        'image 05 - Kitchen.jpg',
        'image 06 - Bathroom.jpg',
        'image 07 - Bathroom.jpg',
        'image 08 - Bathroom.jpg',
      ],
    },
  },
  twoBedroom: {
    coverImage: '/assets/2bedroom.jpg',
    subSections: {
      'Light well view (202,302,402,502,602)': [
        'image 01 - Living room.jpg',
        'image 02 - Bedroom1.jpg',
        'image 02.1- Ensuite bathroom in bedroom 1.jpg',
        'image 03 - Bedroom2.jpg',
        'image 04 - Bedroom2.jpg',
        'image 05 - Bedroom2.jpg',
        'image 05.1 - 2nd Bedroom opposite Bedroom 2.jpg',
        'image 05.2 - 2nd Bedroom opposite Bedroom 2.jpg',
        'image 06 - Kitchen.jpg',
        'image 08 - Kitchen.jpg',
      ],
      'Penthouse (701)': [
        'image 01 - Living room  .jpg',
        'image 02 - Living room  .jpg',
        'image 03 - Living room.jpg',
        'image 03.1 - Terrace.jpg',
        'image 03.2 - Terrace.jpg',
        'image 04 - Bedroom.jpg',
        'image 05 - Bedroom 1.jpg',
        'image 05.1 - Bathroom 1.jpg',
        'image 05.2 - Bathroom 1.jpg',
        'image 06 - Bedroom 2.jpg',
        'image 06.1 - Bathroom 2.jpg',
        'image 06.2 - Bathroom 2.jpg',
        'image 06.3 - Bathroom2.jpg',
        'image 07 - Kitchen.jpg',
        'image 08 - Kitchen.jpg',
      ],
    },
  },
  commonArea: {
    coverImage: '/assets/common-area.jpg',
    subSections: {
      'Common areas': [
        'c01 - Front of the Building .jpg',
        'c02 - Front of the Building.jpg',
        'c02.1 - Front of the buiding.jpg',
        'c03 - Seating Area.jpg',
        'c04 - Public Lockers.jpg',
        'c04.1 - Basement.JPG',
        'c04.2 - Basement.JPG',
        'c05 - Hallway & Elevator.jpg',
        'c06 - Hallway & Elevator.jpg',
        'c07 - Smart Door Lock.jpg',
      ],
    },
  },
};

const Rooms = () => {
  const { t } = useTranslation();
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedRoomIndex, setSelectedRoomIndex] = useState(0);

  const rooms = useMemo(() => [
    {
      coverImage: roomImageData.oneBedroom.coverImage,
      title: t('rooms.oneBedroom.title'),
      description: t('rooms.oneBedroom.description'),
      subSections: Object.entries(roomImageData.oneBedroom.subSections).map(([title, fileNames]) => ({
        title,
        images: fileNames.map(fileName => ({
          src: `/assets/1bedroom/${title}/${fileName}`,
          alt: fileName.replace(/\.(jpg|JPG|jpeg|JPEG|png|PNG)$/, ''),
        })),
      })),
    },
    {
      coverImage: roomImageData.twoBedroom.coverImage,
      title: t('rooms.twoBedroom.title'),
      description: t('rooms.twoBedroom.description'),
      subSections: Object.entries(roomImageData.twoBedroom.subSections).map(([title, fileNames]) => ({
        title,
        images: fileNames.map(fileName => ({
          src: `/assets/2 bedrooms/${title}/${fileName}`,
          alt: fileName.replace(/\.(jpg|JPG|jpeg|JPEG|png|PNG)$/, ''),
        })),
      })),
    },
    {
      coverImage: roomImageData.commonArea.coverImage,
      title: t('rooms.commonArea.title'),
      description: t('rooms.commonArea.description'),
      subSections: Object.entries(roomImageData.commonArea.subSections).map(([title, fileNames]) => ({
        title,
        images: fileNames.map(fileName => ({
          src: `/assets/Common areas/${fileName}`,
          alt: fileName.replace(/\.(jpg|JPG|jpeg|JPEG|png|PNG)$/, ''),
        })),
      })),
    },
  ], [t]);

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
