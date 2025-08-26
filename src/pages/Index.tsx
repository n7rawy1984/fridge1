import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import PainPointsSection from '../components/PainPointsSection';
import SolutionSection from '../components/SolutionSection';
import VideoSection from '../components/VideoSection';
import FeaturesSection from '../components/FeaturesSection';
import TechnicalSpecsSection from '../components/TechnicalSpecsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import OrderSection from '../components/OrderSection';
import Footer from '../components/Footer';

const Index = () => {
  const { isArabic, toggleLanguage } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Header 
        isArabic={isArabic} 
        toggleLanguage={toggleLanguage} 
        scrollToSection={scrollToSection} 
      />
      <HeroSection isArabic={isArabic} scrollToSection={scrollToSection} />
      <PainPointsSection isArabic={isArabic} />
      <SolutionSection isArabic={isArabic} scrollToSection={scrollToSection} />
      <VideoSection isArabic={isArabic} />
      <FeaturesSection isArabic={isArabic} />
      <TechnicalSpecsSection isArabic={isArabic} />
      <TestimonialsSection isArabic={isArabic} />
      <OrderSection isArabic={isArabic} />
      <Footer isArabic={isArabic} />
    </div>
  );
};

export default Index;
