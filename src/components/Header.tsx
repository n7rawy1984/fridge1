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
      // --- بداية التعديل رقم 3 ---
      { name: 'المميزات', id: 'solution' }, // تم تغيير 'features' إلى 'solution'
      // --- نهاية التعديل رقم 3 ---
      { name: 'آراء العملاء', id: 'testimonials' }, // هذا كان صحيحًا بالفعل
      { name: 'اطلب الآن', id: 'order' },
    ],
    en: [
      { name: 'Home', id: 'hero' },
      // --- بداية التعديل رقم 3 (للغة الإنجليزية) ---
      { name: 'Features', id: 'solution' }, // تم تغيير 'features' إلى 'solution'
      // --- نهاية التعديل رقم 3 ---
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
            className={`flex items-center transition-all duration-300 mt-1 ${
              isScrolled ? 'transform scale-90' : ''
            }`}
            // --- بداية التعديل رقم 1 ---
            onClick={() => scrollToSection('order')} // تم تغيير 'hero' إلى 'order'
            // --- نهاية التعديل رقم 1 ---
          >
            <img 
              src={logo} 
              alt="Hit&Get Logo" 
              className={`h-28 md:h-15 w-auto cursor-pointer transition-all duration-800 ${
                isScrolled 
                  ? 'opacity-80 hover:opacity-100 animate-pulse' 
                  : 'opacity-100 hover:animate-spin-slow'
              }`}
            />
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
                className="block w-full text-right py-3 text-foreground hover:text-primary transition-colors"
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