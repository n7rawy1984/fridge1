import React from 'react';
import { Thermometer, Zap, Package, Feather, Car, Clock, Shield, Award } from 'lucide-react';

interface FeaturesSectionProps {
  isArabic: boolean;
}

const FeaturesSection = ({ isArabic }: FeaturesSectionProps) => {
  const content = {
    ar: {
      title: "ليست مجرد ثلاجة",
      subtitle: "بل مركز راحتك المتنقل!",
      description: "تقنيات متطورة وتصميم ذكي يجعل كل رحلة تجربة مميزة.",
      mainFeatures: [
        { title: "تبريد وتدفئة", subtitle: "نظام 2 في 1 الثوري", description: "من 5° إلى 55° درجة! حافظ على مشروباتك باردة في الصيف أو وجباتك ساخنة في الشتاء." },
        { title: "تعمل مباشرة", subtitle: "قابس 12 فولت", description: "فقط وصلها بمقبس ولاعة السيارة وانطلق. استهلاك طاقة منخفض لا يؤثر على بطارية سيارتك." },
        { title: "سعة مثالية (7.5 لتر)", subtitle: "تتسع لـ 11 علبة مشروبات", description: "مساحة كافية لكل احتياجاتك اليومية أو لرحلة عائلية قصيرة. حجم مثالي لا يشغل مساحة كبيرة." },
        { title: "محمولة وخفيفة", subtitle: "وزن 2.15 كيلو فقط", description: "سهلة الحمل والتنقل من السيارة إلى المكتب أو الشاطئ أو مكان التخييم. تصميم مريح ومقبض قوي." }
      ],
      additionalTitle: "مميزات إضافية تجعلها الخيار الأمثل",
      additionalFeatures: [
        { title: "متوافق مع جميع السيارات", description: "يعمل مع أي سيارة بمقبس 12 فولت" },
        { title: "تشغيل سريع", description: "يصل للحرارة المطلوبة في 15 دقيقة" },
        { title: "حماية من الحرارة الزائدة", description: "نظام أمان تلقائي للحماية" },
        { title: "ضمان سنتين", description: "ضمان شامل على كل القطع" }
      ],
      specs: { capacity: "السعة", power: "استهلاك الطاقة", weight: "الوزن", voltage: "الجهد" }
    },
    en: {
      title: "Not Just a Fridge",
      subtitle: "It's Your Mobile Comfort Hub!",
      description: "Advanced technology and smart design make every trip a unique experience.",
      mainFeatures: [
        { title: "Cooling & Heating", subtitle: "Revolutionary 2-in-1 System", description: "From 5°C to 55°C! Keep your drinks cold in the summer or your meals hot in the winter." },
        { title: "Plug & Play", subtitle: "12V Car Plug", description: "Just plug it into your car's cigarette lighter and go. Low power consumption that won't drain your battery." },
        { title: "Perfect Capacity (7.5L)", subtitle: "Holds up to 11 cans", description: "Enough space for your daily needs or a short family trip. Perfectly sized to not take space." },
        { title: "Portable & Lightweight", subtitle: "Only 2.15 kg", description: "Easy to carry from the car to the office, beach, or campsite. Comfortable design with a strong handle." }
      ],
      additionalTitle: "More Features That Make It The Perfect Choice",
      additionalFeatures: [
        { title: "Universal Car Compatibility", description: "Works with any car that has a 12V socket" },
        { title: "Rapid Operation", description: "Reaches desired temperature in 15 minutes" },
        { title: "Overheat Protection", description: "Automatic safety system for protection" },
        { title: "Two-Year Warranty", description: "Comprehensive warranty on all parts" }
      ],
      specs: { capacity: "Capacity", power: "Power Consumption", weight: "Weight", voltage: "Voltage" }
    }
  };

  const text = content[isArabic ? 'ar' : 'en'];

  const mainFeaturesData = [
    { icon: <Thermometer className="w-12 h-12" />, color: "from-blue-500 to-red-500", bgColor: "bg-gradient-to-br from-blue-50 to-red-50" },
    { icon: <Zap className="w-12 h-12" />, color: "from-yellow-500 to-orange-500", bgColor: "bg-gradient-to-br from-yellow-50 to-orange-50" },
    { icon: <Package className="w-12 h-12" />, color: "from-green-500 to-emerald-500", bgColor: "bg-gradient-to-br from-green-50 to-emerald-50" },
    { icon: <Feather className="w-12 h-12" />, color: "from-purple-500 to-pink-500", bgColor: "bg-gradient-to-br from-purple-50 to-pink-50" }
  ];

  const additionalFeaturesIcons = [
    <Car className="w-6 h-6" />, 
    <Clock className="w-6 h-6" />, 
    <Shield className="w-6 h-6" />, 
    <Award className="w-6 h-6" />
  ];

  return (
    <section className="py-20 bg-ice " dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4 ">
        
        {/* العنوان */}
        <div className="text-center mb-16 ">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
            {text.title}
            <span className="text-gradient pb-2 mt-3 block">{text.subtitle}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {text.description}
          </p>
        </div>

        {/* المميزات الرئيسية */}
        <div className="grid grid-auto-fit gap-8 mb-16 ">
          {text.mainFeatures.map((feature, index) => (
            <div 
              key={index}
              className={`${mainFeaturesData[index].bgColor} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group`}
            >
              <div className={`bg-gradient-to-r ${mainFeaturesData[index].color} text-white rounded-2xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {mainFeaturesData[index].icon}
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm font-semibold text-primary">
                    {feature.subtitle}
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
              <div className="mt-6 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-full"></div>
            </div>
          ))}
        </div>

        {/* المميزات الإضافية */}
        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            {text.additionalTitle}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {text.additionalFeatures.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-primary/10 text-primary rounded-full p-4 w-fit mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {additionalFeaturesIcons[index]}
                </div>
                <h4 className="font-bold text-foreground mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* المواصفات التقنية */}
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary text-white rounded-3xl p-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-black mb-2">7.5L</div>
              <div className="text-blue-100">{text.specs.capacity}</div>
            </div>
            <div>
              <div className="text-3xl font-black mb-2">48W</div>
              <div className="text-blue-100">{text.specs.power}</div>
            </div>
            <div>
              <div className="text-3xl font-black mb-2">2.15kg</div>
              <div className="text-blue-100">{text.specs.weight}</div>
            </div>
            <div>
              <div className="text-3xl font-black mb-2">12V</div>
              <div className="text-blue-100">{text.specs.voltage}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;