import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/hitget-logo-new.png';

interface HeaderProps {
  isArabic: boolean;
  toggleLanguage: () => void;
  scrollToSection: (sectionId: string) => void;
}

const Header = ({ isArabic, toggleLanguage, scrollToSection }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = {
    ar: [
      { name: 'الرئيسية', id: 'hero' },
      { name: 'المميزات', id: 'solution' },
      { name: 'آراء العملاء', id: 'testimonials' },
      { name: 'اطلب الآن', id: 'order' },
    ],
    en: [
      { name: 'Home', id: 'hero' },
      { name: 'Features', id: 'solution' },
      { name: 'Reviews', id: 'testimonials' },
      { name: 'Order Now', id: 'order' },
    ]
  };

  const items = menuItems[isArabic ? 'ar' : 'en'];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* الشعار */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection('order')}
          >
            {/* === بداية التعديل المطلوب === */}
            <img 
              src={logo} 
              alt="Hit&Get Logo" 
              className="h-14 w-auto transition-all duration-300" // تم تصغير الحجم بشكل كبير
            />
            {/* === نهاية التعديل المطلوب === */}
          </div>

          {/* القائمة - الشاشات الكبيرة */}
          <nav className="hidden md:flex items-center gap-8">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-semibold transition-all duration-300 hover:text-primary ${
                  isScrolled ? 'text-foreground' : 'text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* أزرار العمل */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className={`${isScrolled ? 'text-foreground' : 'text-white'}`}
            >
              <Globe className="w-4 h-4 ml-2" />
              {isArabic ? 'EN' : 'عربي'}
            </Button>

            {/* زر القائمة - الجوال */}
            <button
              className={`md:hidden ${isScrolled ? 'text-foreground' : 'text-white'}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* القائمة المنسدلة - الجوال */}
        {isMenuOpen && (
          <div className="md:hidden bg-white rounded-lg shadow-lg mt-2 p-4">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full py-3 text-foreground hover:text-primary transition-colors ${isArabic ? 'text-right' : 'text-left'}`}
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;