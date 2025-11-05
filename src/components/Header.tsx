import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ja' : 'en';
    i18n.changeLanguage(newLang);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Win Residences
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-accent transition-colors"
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => scrollToSection('rooms')}
              className="text-foreground hover:text-accent transition-colors"
            >
              {t('nav.rooms')}
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className="text-foreground hover:text-accent transition-colors"
            >
              {t('nav.location')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-accent transition-colors"
            >
              {t('nav.contact')}
            </button>
            <Button
              onClick={toggleLanguage}
              variant="outline"
              size="sm"
              className="ml-4"
            >
              {i18n.language === 'en' ? '日本語' : 'English'}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              onClick={toggleLanguage}
              variant="outline"
              size="sm"
            >
              {i18n.language === 'en' ? '日本語' : 'EN'}
            </Button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-foreground hover:text-accent transition-colors text-left"
              >
                {t('nav.home')}
              </button>
              <button
                onClick={() => scrollToSection('rooms')}
                className="text-foreground hover:text-accent transition-colors text-left"
              >
                {t('nav.rooms')}
              </button>
              <button
                onClick={() => scrollToSection('location')}
                className="text-foreground hover:text-accent transition-colors text-left"
              >
                {t('nav.location')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-accent transition-colors text-left"
              >
                {t('nav.contact')}
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
