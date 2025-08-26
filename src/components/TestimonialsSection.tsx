import React from 'react';
import { Star, Quote, MapPin, Users } from 'lucide-react';
import familyImage from '@/assets/happy-family-camping-new.jpg';

interface TestimonialsSectionProps {
  isArabic: boolean;
}

const TestimonialsSection = ({ isArabic }: TestimonialsSectionProps) => {
  const testimonials = [
    {
      name: "فاطمة الزهراني",
      location: "أبوظبي",
      rating: 5,
      text: "أفضل استثمار لرحلاتنا العائلية إلى شاطئ جميرا. المشروبات تبقى باردة طول اليوم ووجبات الأطفال محفوظة بشكل مثالي!",
      avatar: "👩‍💼"
    },
    {
      name: "محمد العلي",
      location: "دبي",
      rating: 5,
      text: "كمندوب مبيعات أقضي ساعات طويلة في السيارة. هذه الثلاجة غيرت حياتي! مشروباتي باردة والغداء ساخن دائماً.",
      avatar: "👨‍💼"
    },
    {
      name: "سارة الخليفي",
      location: "الشارقة",
      rating: 5,
      text: "رائعة للرحلات البرية! استخدمناها في رحلة إلى العين وكانت مثالية. التبديل بين البارد والحار سهل جداً.",
      avatar: "👩‍🚗"
    }
  ];

  const stats = [
    { number: "500000+", label: isArabic ? "عميل راضي" : "Happy Customers" },
    { number: "5/5", label: isArabic ? "تقييم العملاء" : "Customer Rating" },
    { number: "100%", label: isArabic ? "معدل الرضا" : "Satisfaction Rate" },
    { number: isArabic ? "2سنة" : "2 Years", label: isArabic ? "ضمان شامل" : "Full Warranty" }
  ];

  return (
    <section id="testimonials" className="pt-5 pb-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        
        {/* العنوان */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
            ماذا يقول عشاق الرحلات
            <span className="text-gradient block pt-2 pb-4">في الإمارات؟</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            آلاف العائلات اختاروا ثلاجة "Hit&Get" لرحلات أكثر راحة ومتعة
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* صورة العائلة السعيدة */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl"></div>
            <img 
              src={familyImage} 
              alt="عائلة سعيدة في رحلة تخييم مع الثلاجة المحمولة" 
              className="relative z-10 w-full h-[550px] rounded-3xl shadow-xl "
            />
            
            {/* شارة النجاح */}
            <div className="absolute top-4 right-4 bg-green-500 text-white rounded-full p-4 shadow-lg z-20">
              <div className="text-center">
                <div className="text-xl font-bold">✓</div>
                <div className="text-xs">راضي 100%</div>
              </div>
            </div>
          </div>

          {/* التقييمات */}
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="feature-card relative bg-white border-2 border-primary/10 hover:border-primary/30 transition-all duration-300"
              >
                {/* أيقونة الاقتباس */}
                <div className="absolute -top-4 -right-4 bg-primary text-white rounded-full p-3">
                  <Quote className="w-5 h-5" />
                </div>

                <div className="flex items-start gap-4">
                  {/* الصورة الرمزية */}
                  <div className="text-4xl">{testimonial.avatar}</div>
                  
                  <div className="flex-1">
                    {/* النجوم */}
                    <div className="flex gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* النص */}
                    <p className="text-muted-foreground mb-4 leading-relaxed italic">
                      "{testimonial.text}"
                    </p>

                    {/* معلومات العميل */}
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-bold text-foreground">{testimonial.name}</span>
                      <span className="text-muted-foreground">•</span>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{testimonial.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* المزيد من التقييمات */}
            {/* <div className="text-center">
              <button className="btn-outline">
                <Users className="w-5 h-5 ml-2" />
                اقرأ المزيد من التقييمات
              </button>
            </div> */}
          </div>
        </div>

        {/* الإحصائيات */}
        <div className="mt-20 bg-gradient-to-r from-primary to-secondary text-white rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">
            أرقام تتحدث عن نفسها
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-black mb-2">{stat.number}</div>
                <div className="text-blue-100 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* شهادات إضافية */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6 text-center">
            <div className="text-green-600 text-2xl mb-2">🏆</div>
            <div className="font-bold text-green-800">المنتج الأكثر مبيعاً</div>
            <div className="text-sm text-green-600">في فئة الثلاجات المحمولة</div>
          </div>
          
          <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 text-center">
            <div className="text-blue-600 text-2xl mb-2">⭐</div>
            <div className="font-bold text-blue-800">تقييم 5 نجوم</div>
            <div className="text-sm text-blue-600">من أكثر من 20000 تقييم</div>
          </div>
          
          <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-6 text-center">
            <div className="text-purple-600 text-2xl mb-2">🔄</div>
            <div className="font-bold text-purple-800">معدلات نجاح فاقت التوقعات</div>
            <div className="text-sm text-purple-600">رضا استثنائي من العملاء</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;