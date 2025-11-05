import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
          {t('about.title')}
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
          {t('about.description')}
        </p>
      </div>
    </section>
  );
};

export default About;
