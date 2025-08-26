import React, { createContext, useContext, useState, useEffect } from 'react';

interface LanguageContextType {
  isArabic: boolean;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [isArabic, setIsArabic] = useState(true);

  const toggleLanguage = () => {
    setIsArabic(!isArabic);
  };

  useEffect(() => {
    document.body.dir = isArabic ? 'rtl' : 'ltr';
    document.documentElement.lang = isArabic ? 'ar' : 'en';
  }, [isArabic]);

  return (
    <LanguageContext.Provider value={{ isArabic, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};