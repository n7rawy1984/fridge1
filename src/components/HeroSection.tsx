import React from 'react';
import { Snowflake, Thermometer, Car, Star } from 'lucide-react';
import heroImage from '@/assets/hero-freezer.jpg';

interface HeroSectionProps {
  isArabic: boolean;
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ isArabic, scrollToSection }: HeroSectionProps) => {
  const content = {
    ar: {
      rating: "#1 في الإمارات",
      title1: "اجعل مشروباتك",
      title2: "باردة كالثلج",
      title3: "فى أقسى درجات",
      title4: "الحرارة!",
      subtitle: "وداعًا للمشروبات الساخنة في سيارتك",
      description: "الحل الثوري الذي ينهي كل مشاكل الطعام والشراب في رحلاتك - تقنية متطورة في تصميم أنيق ومحمول.",
      features: [
        { icon: <Snowflake className="w-6 h-6 text-blue-200" />, text: "تبريد 5°" },
        { icon: <Thermometer className="w-6 h-6 text-orange-200" />, text: "تدفئة 55°" },
        { icon: <Car className="w-6 h-6 text-green-200" />, text: "تعمل في السيارة" }
      ],
      orderBtn: "اطلب الآن - خصم 25%",
      videoBtn: "شاهد كيف تعمل",
      stats: [
        { value: "500000+", label: "عميل سعيد" },
        { value: "5★", label: "تقييم العملاء" },
        { value: "100%", label: "معدل الرضا" }
      ]
    },
    en: {
      rating: "#1 in UAE",
      title1: "Keep Your Drinks",
      title2: "Ice Cold",
      title3: "In The Harshest",
      title4: "!Temperatures",
      subtitle: "Say Goodbye to Hot Drinks in Your Car",
      description: "The revolutionary solution that ends all food and drink problems on your trips - advanced technology in an elegant and portable design",
      features: [
        { icon: <Snowflake className="w-6 h-6 text-blue-200" />, text: "Cool 5°" },
        { icon: <Thermometer className="w-6 h-6 text-orange-200" />, text: "Heat 55°" },
        { icon: <Car className="w-6 h-6 text-green-200" />, text: "Car Compatible" }
      ],
      orderBtn: "Order Now - 25% Off",
      videoBtn: "See How It Works",
      stats: [
        { value: "500000+", label: "Happy Customers" },
        { value: "5★", label: "Customer Rating" },
        { value: "100%", label: "Satisfaction Rate" }
      ]
    }
  };

  const text = content[isArabic ? 'ar' : 'en'];

  return (
    <section className="min-h-screen bg-hero relative overflow-hidden" id="hero">
      {/* خلفية متحركة */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 animate-pulse-glow"></div>
      
      {/* المحتوى الرئيسي */}
      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          
          {/* النص والمحتوى */}
          <div className="text-white space-y-8 animate-slide-up">

            {/* العنوان الرئيسي */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-yellow-400 font-semibold">{text.rating}</span>
              </div>
              
              {/* === بداية التعديل المطلوب === */}
              <h1 className="text-4xl md:text-6xl font-black leading-tight">
                <span className="block mb-5">{text.title1}</span>
                <span className="mb-5 text-ice block">{text.title2}</span>
                <span className="block mb-5">{text.title3}</span>
                <span className="block text-hot-glow">{text.title4}</span>
              </h1>
              {/* === نهاية التعديل المطلوب === */}
              
              <h2 className="text-xl md:text-2xl font-medium text-blue-100">
                {text.subtitle}
              </h2>
            </div>

            {/* العنوان الفرعي */}
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
              {text.description}
            </p>

            {/* المميزات السريعة */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {text.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-lg p-3">
                  {feature.icon}
                  <span className="font-semibold">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* أزرار العمل */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                className="btn-hero"
                onClick={() => scrollToSection('order')}
              >
                {text.orderBtn}
              </button>
              <button 
                className="btn-outline"
                onClick={() => scrollToSection('video')}
              >
                {text.videoBtn}
              </button>
            </div>

            {/* إحصائيات */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-white/20">
              {text.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-secondary-glow">{stat.value}</div>
                  <div className="text-sm text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* الصورة */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl animate-pulse-glow"></div>
            <img 
              src={heroImage} 
              alt="الثلاجة المحمولة في السيارة" 
              className="relative z-10 w-full h-auto rounded-3xl shadow-2xl animate-float"
            />
            
            {/* شارات التميز */}
            <div className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg z-20">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">7.5L</div>
                <div className="text-xs text-gray-600">السعة</div>
              </div>
            </div>
            
            <div className="absolute bottom-4 left-4 bg-secondary rounded-full p-3 shadow-lg z-20">
              <div className="text-center text-white">
                <div className="text-lg font-bold">48W</div>
                <div className="text-xs">طاقة منخفضة</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* عنصر ديكوري */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;