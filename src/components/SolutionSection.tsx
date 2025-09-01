import React from 'react';
import { CheckCircle, ArrowRight, Zap, Shield } from 'lucide-react';
import productImage from '@/assets/product-shot.jpg';

interface SolutionSectionProps {
  isArabic: boolean;
  scrollToSection: (sectionId: string) => void;
}

const SolutionSection = ({ isArabic, scrollToSection }: SolutionSectionProps) => {
  const content = {
    ar: {
      badge: "الحل المثالي",
      title1: "ثلاجة",
      title2: "Hit&Get",
      title3: "المحمولة",
      subtitle: "برودة الصيف ودفء الشتاء بلمسة زر!",
      description: "الحل الثوري الذي ينهي كل مشاكل الطعام والشراب في رحلاتك. تقنية متطورة في تصميم أنيق ومحمول.",
      revolutionaryTitle: "نظام 2 في 1 الثوري",
      revolutionaryDesc: "لأول مرة في المنطقة - ثلاجة تبرد وتسخن بنفس الجهاز! تبديل فوري بين التبريد والتدفئة حسب احتياجك.",
      exclusiveText: "براءة اختراع حصرية",
      features: [
        {
          title: "تحكم دقيق في درجة الحرارة",
          description: "من 5° للمشروبات الباردة إلى 55° للوجبات الساخنة"
        },
        {
          title: "استهلاك طاقة ذكي",
          description: "48 واط فقط - لا تستنزف بطارية سيارتك"
        },
        {
          title: "صديق للبيئة",
          description: "تقنية تبريد صديقة للبيئة بدون غازات ضارة"
        }
      ],
      tryBtn: "جربها الآن",
      specsBtn: "المواصفات التقنية",
      certifications: [
        { name: "CE", desc: "معتمد أوروبياً" },
        { name: "2", desc: "سنة ضمان" },
        { name: "ISO", desc: "مطابق للمعايير" }
      ]
    },
    en: {
      badge: "Perfect Solution",
      title1: "Hit&Get",
      title2: "Portable",
      title3: "Cooler",
      subtitle: "Summer Cool & Winter Warm at the Touch of a Button!",
      description: "The revolutionary solution that ends all food and drink problems on your trips. Advanced technology in an elegant and portable design.",
      revolutionaryTitle: "Revolutionary 2-in-1 System",
      revolutionaryDesc: "First time in the region - a cooler that cools and heats with the same device! Instant switching between cooling and heating as needed",
      exclusiveText: "Exclusive Patent",
      features: [
        {
          title: "Precise Temperature Control",
          description: "From 5° for cold drinks to 55° for hot meals"
        },
        {
          title: "Smart Power Consumption",
          description: "Only 48 watts - won't drain your car battery"
        },
        {
          title: "Eco-Friendly",
          description: "Environmentally friendly cooling technology without harmful gases"
        }
      ],
      tryBtn: "Try It Now",
      specsBtn: "Technical Specifications",
      certifications: [
        { name: "CE", desc: "European Certified" },
        { name: "2", desc: "Year Warranty" },
        { name: "ISO", desc: "Standards Compliant" }
      ]
    }
  };

  const text = content[isArabic ? 'ar' : 'en'];
  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background" id="solution">
      <div className="container mx-auto px-4" dir={isArabic ? 'rtl' : 'ltr'}>
        
        {/* العنوان */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full mb-6">
            <CheckCircle className="w-5 h-5" />
            <span className="font-semibold">{text.badge}</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            {text.title1}
            <span className="text-gradient"> "{text.title2}" </span>
            {text.title3}
          </h2>
          
          <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
            {text.subtitle}
          </h3>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {text.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* المنتج */}
          <div className="relative">
            {/* خلفية متوهجة */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse-glow"></div>
            
            {/* الصورة الرئيسية */}
            <div className="relative z-10">
             <div className="rounded-3xl overflow-hidden shadow-2xl"> {/* أضفنا shadow-2xl لتحسين المظهر */}
    <img 
      src={productImage} 
      alt="ثلاجة Hit&Get المحمولة" 
      className="mt-4 pl-1.5 w-[800px] h-[800px] object-contain mx-auto animate-float"
    />
  </div>
              
              {/* مؤشر التحكم */}
              <div className="absolute top-1/4 left-6 transform -translate-y-1/2 mt-10">
                <div className="bg-white rounded-2xl p-4 shadow-xl border-2 border-primary/20 ">
                  <div className="text-center">
                    <div className="text-primary font-black text-lg mb-1"> {isArabic ? 'ساخن | بارد' : 'COOL/HOT'}</div>
                    <div className="text-xs  text-gray-600">{isArabic ? 'مفتاح التحويل' : 'Switch key'}</div>
                  </div>
                </div>
              </div>
              
              {/* مؤشر درجة الحرارة */}
              <div className="absolute bottom-1/4 right-7 mb-1">
                <div className="bg-secondary text-white rounded-2xl p-4 shadow-xl">
                  <div className="text-center">
                    <div className="font-black text-xl mb-1">5° → 55°</div>
                    <div className="text-xs opacity-90">{isArabic ? 'وعاء محكم' : 'Airtight container'}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* شارات الجودة */}
            {/* <div className="absolute -top-4 -right-4 z-20">
              <div className="bg-green-500 text-white rounded-full p-3 shadow-lg">
                <Shield className="w-6 h-6" />
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 z-20">
              <div className="bg-yellow-500 text-white rounded-full p-3 shadow-lg">
                <Zap className="w-6 h-6" />
              </div>
            </div> */}
          </div>

          {/* الفوائد */}
          <div className="space-y-8">
            
            {/* الفائدة الرئيسية */}
            <div className="bg-primary-gradient text-white rounded-3xl p-8 shadow-primary">
              <h4 className="text-2xl font-bold mb-4">{text.revolutionaryTitle}</h4>
              <p className="text-lg leading-relaxed mb-6">
                {text.revolutionaryDesc}
              </p>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6" />
                <span className="font-semibold">{text.exclusiveText}</span>
              </div>
            </div>

            {/* المميزات الإضافية */}
            <div className="grid gap-4">
              {text.features.map((feature, index) => (
                <div key={index} className={`feature-card ${index === 0 ? 'bg-blue-50 border-blue-200' : index === 1 ? 'bg-green-50 border-green-200' : 'bg-purple-50 border-purple-200'}`}>
                  <div className="flex items-start gap-4">
                    <div className={`${index === 0 ? 'bg-blue-500' : index === 1 ? 'bg-green-500' : 'bg-purple-500'} text-white p-2 rounded-lg`}>
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className={`font-bold ${index === 0 ? 'text-blue-900' : index === 1 ? 'text-green-900' : 'text-purple-900'} mb-1`}>{feature.title}</h5>
                      <p className={`${index === 0 ? 'text-blue-700' : index === 1 ? 'text-green-700' : 'text-purple-700'} text-sm`}>{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* زر العمل */}
            <div className="flex gap-4">
              <button 
                className="btn-cta flex-1"
                onClick={() => scrollToSection('order')}
              >
                {text.tryBtn}
                <ArrowRight className="w-5 h-5 mr-2" />
              </button>
              <button 
                className="btn-outline"
                onClick={() => scrollToSection('specs')}
              >
                {text.specsBtn}
              </button>
            </div>
          </div>
        </div>

        {/* شهادة الجودة */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-8 bg-white rounded-2xl p-8 shadow-lg border border-border">
            {text.certifications.map((cert, index) => (
              <div key={index}>
                <div className={`text-2xl font-black ${index === 0 ? 'text-primary' : index === 1 ? 'text-secondary' : 'text-green-600'}`}>{cert.name}</div>
                <div className="text-xs text-muted-foreground">{cert.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;