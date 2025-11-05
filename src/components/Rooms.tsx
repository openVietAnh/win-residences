import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import ImageGallery from './ImageGallery';
import oneBedroom1 from '@/assets/1bedroom.jpg';
import twoBedroom1 from '@/assets/2bedroom.jpg';
import commonArea1 from '@/assets/common-area.jpg';

// 1 Bedroom - Balcony
import balcony01 from '@/assets/1bedroom/Balcony (301,401,501,601)/image-01.jpg';
import balcony02 from '@/assets/1bedroom/Balcony (301,401,501,601)/image 02 - Living room.jpg';
import balcony03 from '@/assets/1bedroom/Balcony (301,401,501,601)/image 03 - Balcony.jpg';
import balcony04 from '@/assets/1bedroom/Balcony (301,401,501,601)/image 04 - Bedroom.jpg';
import balcony05 from '@/assets/1bedroom/Balcony (301,401,501,601)/image 05 - Bedroom.jpg';
import balcony06 from '@/assets/1bedroom/Balcony (301,401,501,601)/image 06 - Kitchen.jpg';
import balcony07 from '@/assets/1bedroom/Balcony (301,401,501,601)/image 07 - Kitchen.jpg';
import balcony08 from '@/assets/1bedroom/Balcony (301,401,501,601)/image 08 - Kitchen.jpg';
import balcony09 from '@/assets/1bedroom/Balcony (301,401,501,601)/image 09 - Bathroom.jpg';
import balcony10 from '@/assets/1bedroom/Balcony (301,401,501,601)/image 10 - Bathroom.jpg';
import balcony11 from '@/assets/1bedroom/Balcony (301,401,501,601)/image 11- Bathroom.jpg';

// 1 Bedroom - Light well view
import lightWell1Bed01 from '@/assets/1bedroom/Light well view (102)/image 01 - living room.jpg';
import lightWell1Bed02 from '@/assets/1bedroom/Light well view (102)/image 02 - bed room .jpg';
import lightWell1Bed03 from '@/assets/1bedroom/Light well view (102)/image 03 - bed room .jpg';
import lightWell1Bed04 from '@/assets/1bedroom/Light well view (102)/image 04- Kitchen.jpg';
import lightWell1Bed05 from '@/assets/1bedroom/Light well view (102)/image 05- Kitchen .jpg';
import lightWell1Bed06 from '@/assets/1bedroom/Light well view (102)/image 06 - Bathroom.jpg';
import lightWell1Bed07 from '@/assets/1bedroom/Light well view (102)/image 07 - Bathroom.jpg';

// 1 Bedroom - No balcony
import noBalcony01 from '@/assets/1bedroom/No balcony (201)/image 01 - Living room.jpg';
import noBalcony02 from '@/assets/1bedroom/No balcony (201)/image 02 - Bedroom.jpg';
import noBalcony03 from '@/assets/1bedroom/No balcony (201)/image 03 - Bedroom.jpg';
import noBalcony04 from '@/assets/1bedroom/No balcony (201)/image 04 - Kitchen.jpg';
import noBalcony05 from '@/assets/1bedroom/No balcony (201)/image 05 - Kitchen.jpg';
import noBalcony06 from '@/assets/1bedroom/No balcony (201)/image 06 - Bathroom.jpg';
import noBalcony07 from '@/assets/1bedroom/No balcony (201)/image 07 - Bathroom.jpg';
import noBalcony08 from '@/assets/1bedroom/No balcony (201)/image 08 - Bathroom.jpg';

// 2 Bedrooms - Light well view
import lightWell2Bed01 from '@/assets/2 bedrooms/Light well view (202,302,402,502,602)/image 01 - Living room.jpg';
import lightWell2Bed02 from '@/assets/2 bedrooms/Light well view (202,302,402,502,602)/image 02 - Bedroom1.jpg';
import lightWell2Bed02_1 from '@/assets/2 bedrooms/Light well view (202,302,402,502,602)/image 02.1- Ensuite bathroom in bedroom 1.jpg';
import lightWell2Bed03 from '@/assets/2 bedrooms/Light well view (202,302,402,502,602)/image 03 - Bedroom2.jpg';
import lightWell2Bed04 from '@/assets/2 bedrooms/Light well view (202,302,402,502,602)/image 04 - Bedroom2.jpg';
import lightWell2Bed05 from '@/assets/2 bedrooms/Light well view (202,302,402,502,602)/image 05 - Bedroom2.jpg';
import lightWell2Bed05_1 from '@/assets/2 bedrooms/Light well view (202,302,402,502,602)/image 05.1 - 2nd Bedroom opposite Bedroom 2.jpg';
import lightWell2Bed05_2 from '@/assets/2 bedrooms/Light well view (202,302,402,502,602)/image 05.2 - 2nd Bedroom opposite Bedroom 2.jpg';
import lightWell2Bed06 from '@/assets/2 bedrooms/Light well view (202,302,402,502,602)/image 06 - Kitchen.jpg';
import lightWell2Bed08 from '@/assets/2 bedrooms/Light well view (202,302,402,502,602)/image 08 - Kitchen.jpg';

// 2 Bedrooms - Penthouse
import penthouse01 from '@/assets/2 bedrooms/Penthouse (701)/image 01 - Living room  .jpg';
import penthouse02 from '@/assets/2 bedrooms/Penthouse (701)/image 02 - Living room  .jpg';
import penthouse03 from '@/assets/2 bedrooms/Penthouse (701)/image 03 - Living room.jpg';
import penthouse03_1 from '@/assets/2 bedrooms/Penthouse (701)/image 03.1 - Terrace.jpg';
import penthouse03_2 from '@/assets/2 bedrooms/Penthouse (701)/image 03.2 - Terrace.jpg';
import penthouse04 from '@/assets/2 bedrooms/Penthouse (701)/image 04 - Bedroom.jpg';
import penthouse05 from '@/assets/2 bedrooms/Penthouse (701)/image 05 - Bedroom 1.jpg';
import penthouse05_1 from '@/assets/2 bedrooms/Penthouse (701)/image 05.1 - Bathroom 1.jpg';
import penthouse05_2 from '@/assets/2 bedrooms/Penthouse (701)/image 05.2 - Bathroom 1.jpg';
import penthouse06 from '@/assets/2 bedrooms/Penthouse (701)/image 06 - Bedroom 2.jpg';
import penthouse06_1 from '@/assets/2 bedrooms/Penthouse (701)/image 06.1 - Bathroom 2.jpg';
import penthouse06_2 from '@/assets/2 bedrooms/Penthouse (701)/image 06.2 - Bathroom 2.jpg';
import penthouse06_3 from '@/assets/2 bedrooms/Penthouse (701)/image 06.3 - Bathroom2.jpg';
import penthouse07 from '@/assets/2 bedrooms/Penthouse (701)/image 07 - Kitchen.jpg';
import penthouse08 from '@/assets/2 bedrooms/Penthouse (701)/image 08 - Kitchen.jpg';

// Common areas
import common01 from '@/assets/Common areas/c01 - Front of the Building .jpg';
import common02 from '@/assets/Common areas/c02 - Front of the Building.jpg';
import common02_1 from '@/assets/Common areas/c02.1 - Front of the buiding.jpg';
import common03 from '@/assets/Common areas/c03 - Seating Area.jpg';
import common04 from '@/assets/Common areas/c04 - Public Lockers.jpg';
import common04_1 from '@/assets/Common areas/c04.1 - Basement.jpg';
import common04_2 from '@/assets/Common areas/c04.2 - Basement.jpg';
import common05 from '@/assets/Common areas/c05 - Hallway & Elevator.jpg';
import common06 from '@/assets/Common areas/c06 - Hallway & Elevator.jpg';
import common07 from '@/assets/Common areas/c07 - Smart Door Lock.jpg';

const Rooms = () => {
  const { t } = useTranslation();
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedRoomIndex, setSelectedRoomIndex] = useState(0);

  const rooms = [
    {
      coverImage: oneBedroom1,
      title: t('rooms.oneBedroom.title'),
      description: t('rooms.oneBedroom.description'),
      subSections: [
        {
          title: 'Balcony (301,401,501,601)',
          images: [
            { src: balcony01, alt: 'Balcony - Overview' },
            { src: balcony02, alt: 'Balcony - Living room' },
            { src: balcony03, alt: 'Balcony - Balcony' },
            { src: balcony04, alt: 'Balcony - Bedroom' },
            { src: balcony05, alt: 'Balcony - Bedroom' },
            { src: balcony06, alt: 'Balcony - Kitchen' },
            { src: balcony07, alt: 'Balcony - Kitchen' },
            { src: balcony08, alt: 'Balcony - Kitchen' },
            { src: balcony09, alt: 'Balcony - Bathroom' },
            { src: balcony10, alt: 'Balcony - Bathroom' },
            { src: balcony11, alt: 'Balcony - Bathroom' },
          ],
        },
        {
          title: 'Light well view (102)',
          images: [
            { src: lightWell1Bed01, alt: 'Light well view - Living room' },
            { src: lightWell1Bed02, alt: 'Light well view - Bedroom' },
            { src: lightWell1Bed03, alt: 'Light well view - Bedroom' },
            { src: lightWell1Bed04, alt: 'Light well view - Kitchen' },
            { src: lightWell1Bed05, alt: 'Light well view - Kitchen' },
            { src: lightWell1Bed06, alt: 'Light well view - Bathroom' },
            { src: lightWell1Bed07, alt: 'Light well view - Bathroom' },
          ],
        },
        {
          title: 'No balcony (201)',
          images: [
            { src: noBalcony01, alt: 'No balcony - Living room' },
            { src: noBalcony02, alt: 'No balcony - Bedroom' },
            { src: noBalcony03, alt: 'No balcony - Bedroom' },
            { src: noBalcony04, alt: 'No balcony - Kitchen' },
            { src: noBalcony05, alt: 'No balcony - Kitchen' },
            { src: noBalcony06, alt: 'No balcony - Bathroom' },
            { src: noBalcony07, alt: 'No balcony - Bathroom' },
            { src: noBalcony08, alt: 'No balcony - Bathroom' },
          ],
        },
      ],
    },
    {
      coverImage: twoBedroom1,
      title: t('rooms.twoBedroom.title'),
      description: t('rooms.twoBedroom.description'),
      subSections: [
        {
          title: 'Light well view (202,302,402,502,602)',
          images: [
            { src: lightWell2Bed01, alt: 'Light well view - Living room' },
            { src: lightWell2Bed02, alt: 'Light well view - Bedroom 1' },
            { src: lightWell2Bed02_1, alt: 'Light well view - Ensuite bathroom in bedroom 1' },
            { src: lightWell2Bed03, alt: 'Light well view - Bedroom 2' },
            { src: lightWell2Bed04, alt: 'Light well view - Bedroom 2' },
            { src: lightWell2Bed05, alt: 'Light well view - Bedroom 2' },
            { src: lightWell2Bed05_1, alt: 'Light well view - 2nd Bedroom opposite Bedroom 2' },
            { src: lightWell2Bed05_2, alt: 'Light well view - 2nd Bedroom opposite Bedroom 2' },
            { src: lightWell2Bed06, alt: 'Light well view - Kitchen' },
            { src: lightWell2Bed08, alt: 'Light well view - Kitchen' },
          ],
        },
        {
          title: 'Penthouse (701)',
          images: [
            { src: penthouse01, alt: 'Penthouse - Living room' },
            { src: penthouse02, alt: 'Penthouse - Living room' },
            { src: penthouse03, alt: 'Penthouse - Living room' },
            { src: penthouse03_1, alt: 'Penthouse - Terrace' },
            { src: penthouse03_2, alt: 'Penthouse - Terrace' },
            { src: penthouse04, alt: 'Penthouse - Bedroom' },
            { src: penthouse05, alt: 'Penthouse - Bedroom 1' },
            { src: penthouse05_1, alt: 'Penthouse - Bathroom 1' },
            { src: penthouse05_2, alt: 'Penthouse - Bathroom 1' },
            { src: penthouse06, alt: 'Penthouse - Bedroom 2' },
            { src: penthouse06_1, alt: 'Penthouse - Bathroom 2' },
            { src: penthouse06_2, alt: 'Penthouse - Bathroom 2' },
            { src: penthouse06_3, alt: 'Penthouse - Bathroom 2' },
            { src: penthouse07, alt: 'Penthouse - Kitchen' },
            { src: penthouse08, alt: 'Penthouse - Kitchen' },
          ],
        },
      ],
    },
    {
      coverImage: commonArea1,
      title: t('rooms.commonArea.title'),
      description: t('rooms.commonArea.description'),
      subSections: [
        {
          title: 'Common Areas',
          images: [
            { src: common01, alt: 'Common Areas - Front of the Building' },
            { src: common02, alt: 'Common Areas - Front of the Building' },
            { src: common02_1, alt: 'Common Areas - Front of the building' },
            { src: common03, alt: 'Common Areas - Seating Area' },
            { src: common04, alt: 'Common Areas - Public Lockers' },
            { src: common04_1, alt: 'Common Areas - Basement' },
            { src: common04_2, alt: 'Common Areas - Basement' },
            { src: common05, alt: 'Common Areas - Hallway & Elevator' },
            { src: common06, alt: 'Common Areas - Hallway & Elevator' },
            { src: common07, alt: 'Common Areas - Smart Door Lock' },
          ],
        },
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
        subSections={rooms[selectedRoomIndex]?.subSections || []}
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
      />
    </section>
  );
};

export default Rooms;
