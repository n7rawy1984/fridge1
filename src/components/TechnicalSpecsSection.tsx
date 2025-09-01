import React from 'react';
import { Zap, Thermometer, Weight, Ruler, Battery, Shield } from 'lucide-react';
import certificatesImage from '@/assets/certificates-image.jpg';

interface TechnicalSpecsSectionProps {
  isArabic: boolean;
}

const TechnicalSpecsSection = ({ isArabic }: TechnicalSpecsSectionProps) => {
  const content = {
    ar: {
      title: 'المواصفات التقنية',
      subtitle: 'جميع التفاصيل التقنية للثلاجة المحمولة Hit&Get',
      specs: [
        { icon: <Thermometer className="w-6 h-6" />, label: 'نطاق التبريد', value: '5°C إلى 55°C', color: 'text-blue-500' },
        { icon: <Ruler className="w-6 h-6" />, label: 'السعة', value: '7.5 لتر', color: 'text-green-500' },
        { icon: <Zap className="w-6 h-6" />, label: 'استهلاك الطاقة', value: '48 واط', color: 'text-yellow-500' },
        { icon: <Battery className="w-6 h-6" />, label: 'الجهد', value: '12V DC', color: 'text-purple-500' },
        { icon: <Weight className="w-6 h-6" />, label: 'الوزن', value: '4.2 كيلو', color: 'text-orange-500' },
        { icon: <Shield className="w-6 h-6" />, label: 'الضمان', value: 'سنتان كاملتان', color: 'text-red-500' },
      ],
      dimensions: 'الأبعاد الخارجية',
      cooling: 'نظام التبريد',
      heating: 'نظام التدفئة',
      safety: 'ميزات الأمان'
    },
    en: {
      title: 'Technical Specifications',
      subtitle: 'All technical details of Hit&Get portable cooler',
      specs: [
        { icon: <Thermometer className="w-6 h-6" />, label: 'Temperature Range', value: '5°C to 55°C', color: 'text-blue-500' },
        { icon: <Ruler className="w-6 h-6" />, label: 'Capacity', value: '7.5 Liters', color: 'text-green-500' },
        { icon: <Zap className="w-6 h-6" />, label: 'Power Consumption', value: '48 Watts', color: 'text-yellow-500' },
        { icon: <Battery className="w-6 h-6" />, label: 'Voltage', value: '12V DC', color: 'text-purple-500' },
        { icon: <Weight className="w-6 h-6" />, label: 'Weight', value: '4.2 kg', color: 'text-orange-500' },
        { icon: <Shield className="w-6 h-6" />, label: 'Warranty', value: '2 Years Full', color: 'text-red-500' },
      ],
      dimensions: 'External Dimensions',
      cooling: 'Cooling System',
      heating: 'Heating System',
      safety: 'Safety Features'
    }
  };

  const text = content[isArabic ? 'ar' : 'en'];

  const detailedSpecs = {
    ar: {
      dimensions: [
        { label: 'الطول', value: '35 سم' },
        { label: 'العرض', value: '24 سم' },
        { label: 'الارتفاع', value: '28 سم' },
      ],
      cooling: [
        { label: 'نوع التبريد', value: 'ثرموإلكتريك' },
        { label: 'أقصى تبريد', value: 'تحت درجة الحرارة المحيطة بـ 15°' },
        { label: 'وقت الوصول للبرودة', value: '30-45 دقيقة' },
      ],
      heating: [
        { label: 'أقصى تدفئة', value: '55°C' },
        { label: 'وقت الوصول للسخونة', value: '20-30 دقيقة' },
        { label: 'التحكم في الحرارة', value: 'تحكم ذكي' },
      ],
      safety: [
        { label: 'حماية من الحرارة الزائدة', value: '✓' },
        { label: 'فصل تلقائي عند العطل', value: '✓' },
        { label: 'مقاوم للاهتزاز', value: '✓' },
      ]
    },
    en: {
      dimensions: [
        { label: 'Length', value: '35 cm' },
        { label: 'Width', value: '24 cm' },
        { label: 'Height', value: '28 cm' },
      ],
      cooling: [
        { label: 'Cooling Type', value: 'Thermoelectric' },
        { label: 'Max Cooling', value: '15° below ambient' },
        { label: 'Cooling Time', value: '30-45 minutes' },
      ],
      heating: [
        { label: 'Max Heating', value: '55°C' },
        { label: 'Heating Time', value: '20-30 minutes' },
        { label: 'Temperature Control', value: 'Smart Control' },
      ],
      safety: [
        { label: 'Overheat Protection', value: '✓' },
        { label: 'Auto Shut-off', value: '✓' },
        { label: 'Vibration Resistant', value: '✓' },
      ]
    }
  };

  const details = detailedSpecs[isArabic ? 'ar' : 'en'];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background" id="specs">
      <div className="container mx-auto px-4" dir={isArabic ? 'rtl' : 'ltr'}>
        
        {/* العنوان */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
            {text.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {text.subtitle}
          </p>
        </div>

        {/* المواصفات الرئيسية */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {text.specs.map((spec, index) => (
            <div key={index} className="feature-card text-center">
              <div className={`${spec.color} bg-gray-50 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center`}>
                {spec.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{spec.label}</h3>
              <p className="text-2xl font-black text-primary">{spec.value}</p>
            </div>
          ))}
        </div>

        {/* التفاصيل المتقدمة */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* الأبعاد والتبريد */}
          <div className="space-y-8">
            
            {/* الأبعاد */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-primary">{text.dimensions}</h3>
              <div className="space-y-3">
                {details.dimensions.map((dim, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-muted-foreground">{dim.label}</span>
                    <span className="font-bold">{dim.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* نظام التبريد */}
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
              <h3 className="text-xl font-bold mb-4 text-blue-600">{text.cooling}</h3>
              <div className="space-y-3">
                {details.cooling.map((cool, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-blue-700">{cool.label}</span>
                    <span className="font-bold text-blue-900">{cool.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* التدفئة والأمان */}
          <div className="space-y-8">
            
            {/* نظام التدفئة */}
            <div className="bg-orange-50 rounded-2xl p-6 border border-orange-200">
              <h3 className="text-xl font-bold mb-4 text-orange-600">{text.heating}</h3>
              <div className="space-y-3">
                {details.heating.map((heat, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-orange-700">{heat.label}</span>
                    <span className="font-bold text-orange-900">{heat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ميزات الأمان */}
            <div className="bg-green-50 rounded-2xl p-4 border border-green-200">
              <h3 className="text-xl font-bold mb-4 text-green-600">{text.safety}</h3>
              <div className="space-y-3">
                {details.safety.map((safe, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-green-700">{safe.label}</span>
                    <span className="font-bold text-green-900 text-xl">{safe.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* شهادات الجودة */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap justify-center items-center gap-8 bg-white rounded-2xl p-8 shadow-lg border border-border">
            <div className="text-center">
              <div className="text-2xl font-black text-primary">CE</div>
              <div className="text-xs text-muted-foreground">معتمد أوروبياً</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-secondary">FCC</div>
              <div className="text-xs text-muted-foreground">معتمد أمريكياً</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-green-600">RoHS</div>
              <div className="text-xs text-muted-foreground">صديق للبيئة</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-purple-600">ISO</div>
              <div className="text-xs text-muted-foreground">جودة عالمية</div>
            </div>
          </div>
          {/* صور شهادات الجودة */}
        <div className="mt-4 text-center" >
          <div className="bg-white rounded-2xl p-4 pt-0 pb-0 shadow-lg border border-border inline-block max-w-full lg:max-w-4xl"> {/* زيادة max-w-4xl لجعلها أكبر */}
            <img 
              src={certificatesImage} 
              alt="شهادات جودة المنتج" 
              className="w-[550px] h-auto object-contain rounded-lg "
            />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecsSection;