import React from 'react';
import { Star, Quote, MapPin } from 'lucide-react';
import familyImage from '@/assets/happy-family-camping-new.jpg';

interface TestimonialsSectionProps {
  isArabic: boolean;
}

const TestimonialsSection = ({ isArabic }: TestimonialsSectionProps) => {
  
  const content = {
    ar: {
      title: "ماذا يقول عشاق الرحلات",
      subtitle: "في الإمارات؟",
      description: 'آلاف العائلات اختاروا ثلاجة "Hit&Get" لرحلات أكثر راحة ومتعة.',
      imageAlt: "عائلة سعيدة في رحلة تخييم مع الثلاجة المحمولة",
      satisfactionBadge: "راضي 100%",
      testimonials: [
        { name: "فاطمة الزهراني", location: "أبوظبي", text: "أفضل استثمار لرحلاتنا العائلية إلى شاطئ جميرا. المشروبات تبقى باردة طول اليوم ووجبات الأطفال محفوظة بشكل مثالي!", avatar: "👩‍💼", rating: 5 },
        { name: "محمد العلي", location: "دبي", text: "كمندوب مبيعات أقضي ساعات طويلة في السيارة. هذه الثلاجة غيرت حياتي! مشروباتي باردة والغداء ساخن دائماً.", avatar: "👨‍💼", rating: 5 },
        { name: "سارة الخليفي", location: "الشارقة", text: "رائعة للرحلات البرية! استخدمناها في رحلة إلى العين وكانت مثالية. التبديل بين البارد والحار سهل جداً.", avatar: "👩", rating: 5 }
      ],
      statsTitle: "أرقام تتحدث عن نفسها",
      stats: [
        { number: "500000+", label: "عميل راضي" },
        { number: "5/5", label: "تقييم العملاء" },
        { number: "100%", label: "معدل الرضا" },
        { number: "2سنة", label: "ضمان شامل" }
      ],
      awards: [
        { title: "المنتج الأكثر مبيعاً", subtitle: "في فئة الثلاجات المحمولة" },
        { title: "تقييم 5 نجوم", subtitle: "من أكثر من 20000 تقييم" },
        { title: "معدلات نجاح فاقت التوقعات", subtitle: "رضا استثنائي من العملاء" }
      ]
    },
    en: {
      title: "What Are Trip Lovers Saying",
      subtitle: "in the UAE?",
      description: "Thousands of families have chosen the 'Hit&Get' fridge for more comfortable and enjoyable trips.",
      imageAlt: "Happy family on a camping trip with the portable fridge",
      satisfactionBadge: "100% Satisfied",
      testimonials: [
        { name: "Fatima Al-Zahrani", location: "Abu Dhabi", text: "The best investment for our family trips to Jumeirah Beach. Drinks stay cold all day and the kids' meals are kept perfectly!", avatar: "👩‍💼", rating: 5 },
        { name: "Mohammed Al-Ali", location: "Dubai", text: "As a sales representative, I spend long hours in the car. This fridge has changed my life! My drinks are always cold and my lunch is always hot.", avatar: "👨‍💼", rating: 5 },
        { name: "Sara Al-Khulaifi", location: "Sharjah", text: "Great for road trips! We used it on a trip to Al Ain and it was perfect. Switching between cool and warm is so easy.", avatar: "👩", rating: 5 }
      ],
      statsTitle: "Numbers That Speak For Themselves",
      stats: [
        { number: "500,000+", label: "Happy Customers" },
        { number: "5/5", label: "Customer Rating" },
        { number: "100%", label: "Satisfaction Rate" },
        { number: "2 Years", label: "Full Warranty" }
      ],
      awards: [
        { title: "Best-Selling Product", subtitle: "In the portable fridge category" },
        { title: "5-Star Rating", subtitle: "From over 20,000 reviews" },
        { title: "Exceeded Expectations", subtitle: "Exceptional customer satisfaction" }
      ]
    }
  };

  const text = content[isArabic ? 'ar' : 'en'];

  const awardIcons = ["🏆", "⭐", "🔄"];

  return (
    <section id="testimonials" className="pt-5 pb-20 bg-gradient-to-b from-background to-muted/30" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        
        {/* العنوان */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
            {text.title}
            <span className="text-gradient block pt-2 pb-4">{text.subtitle}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {text.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* صورة العائلة السعيدة */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl"></div>
            <img 
              src={familyImage} 
              alt={text.imageAlt}
              className="relative z-10 w-full h-[550px] rounded-3xl shadow-xl "
            />
            <div className="absolute top-4 right-4 bg-green-500 text-white rounded-full p-4 shadow-lg z-20">
              <div className="text-center">
                <div className="text-xl font-bold">✓</div>
                <div className="text-xs">{text.satisfactionBadge}</div>
              </div>
            </div>
          </div>

          {/* التقييمات */}
          <div className="space-y-8">
            {text.testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="feature-card relative bg-white border-2 border-primary/10 hover:border-primary/30 transition-all duration-300"
              >
                <div className="absolute -top-4 -right-4 bg-primary text-white rounded-full p-3">
                  <Quote className="w-5 h-5" />
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div className="flex-1">
                    <div className="flex gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
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
          </div>
        </div>

        {/* الإحصائيات */}
        <div className="mt-20 bg-gradient-to-r from-primary to-secondary text-white rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">
            {text.statsTitle}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {text.stats.map((stat, index) => (
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
            <div className="text-green-600 text-2xl mb-2">{awardIcons[0]}</div>
            <div className="font-bold text-green-800">{text.awards[0].title}</div>
            <div className="text-sm text-green-600">{text.awards[0].subtitle}</div>
          </div>
          <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 text-center">
            <div className="text-blue-600 text-2xl mb-2">{awardIcons[1]}</div>
            <div className="font-bold text-blue-800">{text.awards[1].title}</div>
            <div className="text-sm text-blue-600">{text.awards[1].subtitle}</div>
          </div>
          <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-6 text-center">
            <div className="text-purple-600 text-2xl mb-2">{awardIcons[2]}</div>
            <div className="font-bold text-purple-800">{text.awards[2].title}</div>
            <div className="text-sm text-purple-600">{text.awards[2].subtitle}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;