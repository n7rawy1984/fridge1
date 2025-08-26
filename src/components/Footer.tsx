import React from 'react';
import { Phone, MessageCircle, MapPin } from 'lucide-react'; // أزلنا الأيقونات غير المستخدمة

interface FooterProps {
  isArabic: boolean;
}

const Footer = ({ isArabic }: FooterProps) => {
  const content = {
    ar: {
      companyDescription: "متخصصون في اكتشاف وتقديم أروع الصفقات على المنتجات الأكثر رواجًا في الإمارات. في 'وصل وحصل'، مهمتنا هي جلب كل ما هو جديد ومبتكر بين يديك، بسهولة وسرعة.",
      contactUs: "تواصل معنا",
      phoneAndWhatsApp: "الواتساب",
      location: "دبي، الإمارات العربية المتحدة",
      copyright: "© 2025 وصل وحصل. جميع الحقوق محفوظة.",
      license: "مرخص من وزارة التجارة والصناعة - الإمارات العربية المتحدة",
      finalMessageTitle: "شكراً لاختيارك وصل وحصل!",
      finalMessageSubtitle: "نسعى دائماً لتقديم أفضل تجربة لعملائنا الكرام"
    },
    en: {
      companyDescription: "Specializing in discovering and delivering the best deals on the most trending products in the UAE. At 'Hit&Get', our mission is to bring what's new and innovative to your fingertips, easily and quickly.",
      contactUs: "Contact Us",
      phoneAndWhatsApp: "WhatsApp",
      location: "Dubai, United Arab Emirates",
      copyright: "© 2025 Hit&Get. All rights reserved.",
      license: "Licensed by the Ministry of Commerce and Industry - UAE",
      finalMessageTitle: "Thank you for choosing Hit&Get!",
      finalMessageSubtitle: "We always strive to provide the best experience for our valued customers"
    }
  };

  const text = content[isArabic ? 'ar' : 'en'];

  return (
    <footer className="bg-gradient-to-b from-background to-muted/50 py-16 border-t border-border">
      <div className="container mx-auto px-4">
        
        {/* الجزء العلوي */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 mb-12">
          
          {/* معلومات الشركة */}
          <div className="space-y-4 lg:col-span-2 md:col-span-1">
            <h3 className="text-2xl font-bold text-gradient">Hit&Get</h3>
            <p className="text-muted-foreground leading-relaxed max-w-lg">
              {text.companyDescription}
            </p>
          </div>

          {/* معلومات التواصل */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-foreground">{text.contactUs}</h4>
            <div className="space-y-3">
              <a href="tel:+971588079593" className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-primary group-hover:text-secondary transition-colors" />
               <span className="text-muted-foreground group-hover:text-foreground transition-colors">0588079593</span>
              </a>
              <a href="https://wa.me/971588079593" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                <MessageCircle className="w-5 h-5 text-primary group-hover:text-secondary transition-colors" />
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">{text.phoneAndWhatsApp}</span>
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">{text.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- بداية التعديلات المطلوبة --- */}

        {/* الفاصل */}
        <div className="border-t border-border pt-8">
          
          {/* رسالة الشكر (أصبحت هنا الآن) */}
          <div className="mb-8 text-center">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6 inline-block">
              <p className="text-lg font-semibold text-foreground mb-2">
                {text.finalMessageTitle} 🚗❄️
              </p>
              <p className="text-muted-foreground">
                {text.finalMessageSubtitle}
              </p>
            </div>
          </div>
          
          {/* حقوق النشر (أصبحت في النهاية وفي المنتصف) */}
          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              {text.copyright}
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              {text.license}
            </p>
          </div>

        </div>
        {/* --- نهاية التعديلات المطلوبة --- */}
      </div>
    </footer>
  );
};

export default Footer;