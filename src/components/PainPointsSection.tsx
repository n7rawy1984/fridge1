import React from 'react';
import { AlertTriangle, Thermometer, Baby, Coffee } from 'lucide-react';
import problemImage from '@/assets/problem-hot-drinks.jpg';

interface PainPointsSectionProps {
  isArabic: boolean;
}

const PainPointsSection = ({ isArabic }: PainPointsSectionProps) => {
  const content = {
    ar: {
      title: "هل سئمت من هذه المشاكل؟",
      subtitle: "رحلات الصيف الطويلة لم تعد مشكلة بعد اليوم!",
      transition: "ماذا لو قلنا لك أن هناك حل بسيط؟",
      transitionDesc: "حل واحد يحل كل هذه المشاكل ويجعل رحلاتك أكثر راحة ومتعة...",
      painPoints: [
        {
          icon: <Thermometer className="w-8 h-8" />,
          title: "المشروبات تفقد برودتها",
          description: "بعد 10 دقائق فقط في حرارة الصيف القاسية",
          color: "text-red-500 bg-red-50"
        },
        {
          icon: <AlertTriangle className="w-8 h-8" />,
          title: "الطعام يفسد بسرعة", 
          description: "السندويشات والوجبات الخفيفة تفسد بسبب الحرارة",
          color: "text-orange-500 bg-orange-50"
        },
        {
          icon: <Baby className="w-8 h-8" />,
          title: "حليب الأطفال والأدوية",
          description: "تحتاج مكان آمن وبارد للحفظ أثناء التنقل",
          color: "text-purple-500 bg-purple-50"
        },
        {
          icon: <Coffee className="w-8 h-8" />,
          title: "لا توجد طريقة للتسخين",
          description: "في رحلات التخييم الشتوية أو الطرق الطويلة",
          color: "text-blue-500 bg-blue-50"
        }
      ],
      tempWarning: "درجة حرارة داخل السيارة في الصيف",
      tempDesc: "كافية لإفساد طعامك ومشروباتك في دقائق!"
    },
    en: {
      title: "?Tired of These Problems",
      subtitle: "!Long summer trips are no longer a problem",
      transition: "?What if we told you there's a simple solution",
      transitionDesc: "One solution that solves all these problems and makes your trips more comfortable and enjoyable",
      painPoints: [
        {
          icon: <Thermometer className="w-8 h-8" />,
          title: "Drinks Lose Their Coolness",
          description: "After just 10 minutes in harsh summer heat",
          color: "text-red-500 bg-red-50"
        },
        {
          icon: <AlertTriangle className="w-8 h-8" />,
          title: "Food Spoils Quickly", 
          description: "Sandwiches and snacks spoil due to heat",
          color: "text-orange-500 bg-orange-50"
        },
        {
          icon: <Baby className="w-8 h-8" />,
          title: "Baby Milk & Medicine",
          description: "Need a safe, cool place to store while traveling",
          color: "text-purple-500 bg-purple-50"
        },
        {
          icon: <Coffee className="w-8 h-8" />,
          title: "No Way to Heat",
          description: "On winter camping trips or long roads",
          color: "text-blue-500 bg-blue-50"
        }
      ],
      tempWarning: "Temperature inside car in summer",
      tempDesc: "!Enough to spoil your food and drinks in minutes"
    }
  };

  const text = content[isArabic ? 'ar' : 'en'];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        
        {/* العنوان */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
            {text.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {text.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* الصورة */}
          <div className="relative">
            <div className="absolute inset-0 bg-red-200 rounded-3xl blur-2xl opacity-30"></div>
            <img 
              src={problemImage} 
              alt="مشاكل المشروبات الساخنة في السيارة" 
              className="relative z-10 w-full h-auto rounded-3xl shadow-xl"
            />
            
            {/* عنصر تحذيري */}
            {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="bg-red-500 text-white rounded-full p-4 shadow-lg animate-pulse">
                <X className="w-8 h-8" />
              </div>
            </div> */}
          </div>

          {/* قائمة المشاكل */}
          <div className="space-y-6">
            {text.painPoints.map((point, index) => (
              <div 
                key={index}
                className="feature-card border-r-4 border-red-400 hover:border-red-500 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`${point.color} p-3 rounded-xl`}>
                    {point.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {point.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                  {/* <div className="text-red-500">
                    <X className="w-6 h-6" />
                  </div> */}
                </div>
              </div>
            ))}

            {/* إحصائية مؤثرة */}
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 text-center">
              <div className="text-3xl font-black text-red-600 mb-2">50°C+</div>
              <p className="text-red-700 font-semibold">
                {text.tempWarning}
              </p>
              <p className="text-sm text-red-600 mt-2">
                {text.tempDesc}
              </p>
            </div>
          </div>
        </div>

        {/* عبارة انتقالية */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {text.transition}
          </h3>
          <p className="text-lg text-muted-foreground">
            {text.transitionDesc}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;