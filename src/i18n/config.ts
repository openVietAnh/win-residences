import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        rooms: 'Rooms',
        location: 'Location',
        contact: 'Contact',
      },
      hero: {
        title: 'Win Residences',
        subtitle: 'Experience Luxury Living in Premium Apartments',
        cta: 'View Rooms',
      },
      about: {
        title: 'Welcome to Win Residences',
        description: 'Discover the perfect blend of modern luxury and Japanese-inspired design. Our residences offer exceptional comfort and sophisticated living spaces tailored for discerning guests.',
      },
      rooms: {
        title: 'Our Residences',
        oneBedroom: {
          title: '1 Bedroom',
          description: 'Elegant one-bedroom apartment with modern amenities and thoughtful design',
        },
        twoBedroom: {
          title: '2 Bedrooms',
          description: 'Spacious two-bedroom residence perfect for families or extended stays',
        },
        commonArea: {
          title: 'Common Areas',
          description: 'Beautifully designed shared spaces for relaxation and socializing',
        },
      },
      location: {
        title: 'Our Location',
        description: 'Conveniently located in the heart of the city with easy access to transportation and attractions',
      },
      contact: {
        title: 'Contact Us',
        address: 'Address',
        phone: 'Phone',
        email: 'Email',
        hours: 'Business Hours',
        hoursValue: '24/7 Reception',
      },
      footer: {
        rights: 'All rights reserved.',
      },
    },
  },
  ja: {
    translation: {
      nav: {
        home: 'ホーム',
        rooms: '客室',
        location: 'アクセス',
        contact: 'お問い合わせ',
      },
      hero: {
        title: 'ウィン レジデンス',
        subtitle: 'プレミアムアパートメントで豪華な暮らしを体験',
        cta: '客室を見る',
      },
      about: {
        title: 'ウィン レジデンスへようこそ',
        description: '現代的な豪華さと日本風デザインの完璧な融合を発見してください。私たちのレジデンスは、洗練されたゲストのために特別に設計された、優れた快適さと洗練された生活空間を提供します。',
      },
      rooms: {
        title: '客室のご案内',
        oneBedroom: {
          title: '1ベッドルーム',
          description: 'モダンな設備と思慮深いデザインのエレガントな1ベッドルームアパートメント',
        },
        twoBedroom: {
          title: '2ベッドルーム',
          description: 'ファミリーや長期滞在に最適な広々とした2ベッドルームレジデンス',
        },
        commonArea: {
          title: '共用エリア',
          description: 'リラックスと交流のための美しくデザインされた共有スペース',
        },
      },
      location: {
        title: 'アクセス',
        description: '市内中心部に位置し、交通機関や観光スポットへのアクセスが便利です',
      },
      contact: {
        title: 'お問い合わせ',
        address: '住所',
        phone: '電話',
        email: 'メール',
        hours: '営業時間',
        hoursValue: '24時間対応',
      },
      footer: {
        rights: '著作権所有。',
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
