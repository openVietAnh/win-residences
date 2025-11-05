import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        <h3 className="text-2xl font-bold mb-2">Win Residences</h3>
        <p className="text-primary-foreground/80">
          © {currentYear} Win Residences. {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
