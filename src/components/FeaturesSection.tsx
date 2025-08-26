import React from 'react';
import { Thermometer, Zap, Package, Feather, Car, Clock, Shield, Award } from 'lucide-react';

interface FeaturesSectionProps {
  isArabic: boolean;
}

const FeaturesSection = ({ isArabic }: FeaturesSectionProps) => {
  const mainFeatures = [
    {
      icon: <Thermometer className="w-12 h-12" />,
      title: "تبريد وتدفئة",
      subtitle: "نظام 2 في 1 الثوري",
      description: "من 5° إلى 55° درجة! حافظ على مشروباتك باردة في الصيف أو وجباتك ساخنة في الشتاء.",
      color: "from-blue-500 to-red-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-red-50"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "تعمل مباشرة",
      subtitle: "قابس 12 فولت",
      description: "فقط وصلها بمقبس ولاعة السيارة وانطلق. استهلاك طاقة منخفض لا يؤثر على بطارية سيارتك.",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-gradient-to-br from-yellow-50 to-orange-50"
    },
    {
      icon: <Package className="w-12 h-12" />,
      title: "سعة مثالية (7.5 لتر)",
      subtitle: "تتسع لـ 11 علبة مشروبات",
      description: "مساحة كافية لكل احتياجاتك اليومية أو لرحلة عائلية قصيرة. حجم مثالي لا يشغل مساحة كبيرة.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50"
    },
    {
      icon: <Feather className="w-12 h-12" />,
      title: "محمولة وخفيفة",
      subtitle: "وزن 2.15 كيلو فقط",
      description: "سهلة الحمل والتنقل من السيارة إلى المكتب أو الشاطئ أو مكان التخييم. تصميم مريح ومقبض قوي.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50"
    }
  ];

  const additionalFeatures = [
    {
      icon: <Car className="w-6 h-6" />,
      title: "متوافق مع جميع السيارات",
      description: "يعمل مع أي سيارة بمقبس 12 فولت"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "تشغيل سريع",
      description: "يصل للحرارة المطلوبة في 15 دقيقة"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "حماية من الحرارة الزائدة",
      description: "نظام أمان تلقائي للحماية"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "ضمان سنتين",
      description: "ضمان شامل على كل القطع"
    }
  ];

  return (
    <section className="py-20 bg-ice">
      <div className="container mx-auto px-4">
        
        {/* العنوان */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
            ليست مجرد ثلاجة
            <span className="text-gradient pb-2 mt-3 block">بل مركز راحتك المتنقل!</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            تقنيات متطورة وتصميم ذكي يجعل كل رحلة تجربة مميزة
          </p>
        </div>

        {/* المميزات الرئيسية */}
        <div className="grid grid-auto-fit gap-8 mb-16">
          {mainFeatures.map((feature, index) => (
            <div 
              key={index}
              className={`${feature.bgColor} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group`}
            >
              {/* الأيقونة */}
              <div className={`bg-gradient-to-r ${feature.color} text-white rounded-2xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>

              {/* المحتوى */}
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

              {/* المؤشر البصري */}
              <div className="mt-6 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-full"></div>
            </div>
          ))}
        </div>

        {/* المميزات الإضافية */}
        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            مميزات إضافية تجعلها الخيار الأمثل
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-primary/10 text-primary rounded-full p-4 w-fit mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {feature.icon}
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
              <div className="text-blue-100">السعة</div>
            </div>
            <div>
              <div className="text-3xl font-black mb-2">48W</div>
              <div className="text-blue-100">استهلاك الطاقة</div>
            </div>
            <div>
              <div className="text-3xl font-black mb-2">2.15kg</div>
              <div className="text-blue-100">الوزن</div>
            </div>
            <div>
              <div className="text-3xl font-black mb-2">12V</div>
              <div className="text-blue-100">الجهد</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;