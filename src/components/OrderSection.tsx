import React, { useState, useEffect } from 'react';
import { ShoppingCart, Truck, Shield, Clock, Star, Gift, Phone, MapPin, User, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

// تعريف دالة fbq بشكل آمن
declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

interface OrderSectionProps {
  isArabic: boolean;
}

const OrderSection = ({ isArabic }: OrderSectionProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: 'دبي'
  });

  // --- بداية كود المؤقت الثابت ---
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0, });

  useEffect(() => {
    // !! أهم تعديل: تحديد تاريخ انتهاء ثابت ومحدد !!
    // العرض سينتهي يوم 7 سبتمبر 2025 الساعة 11:59 مساءً (يمكنك تغيير هذا التاريخ)
    const offerEndDate = new Date('2025-09-07T23:59:59');

    const timer = setInterval(() => {
      const difference = +offerEndDate - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        // عندما ينتهي الوقت، يتم تصفير العدادات
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);

    // تنظيف المؤقت عند إغلاق الصفحة
    return () => clearInterval(timer);
  }, []); // القوس الفارغ يضمن أن هذا الكود يعمل مرة واحدة فقط عند تحميل الصفحة
  // --- نهاية كود المؤقت ---

  const cities = [
    'دبي', 'أبوظبي', 'الشارقة', 'عجمان', 'أم القيوين', 'رأس الخيمة', 'الفجيرة'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.address) {
      toast({ title: "خطأ في البيانات", description: "يرجى ملء جميع الحقول المطلوبة", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);

    const templateParams = {
        customer_name: formData.name,
        customer_phone: formData.phone,
        customer_address: formData.address,
        customer_city: formData.city,
        product_name: "ثلاجة السيارة المحمولة 7.5 لتر",
        product_price: "169 AED",
        order_date: new Date().toLocaleString('en-GB'),
    };

    try {
      await emailjs.send( 'service_0t5zams', 'template_iugigmp', templateParams, '9oDf7K1CgEjHTTxZS' );

      if (typeof window.fbq === 'function') {
        window.fbq('track', 'Purchase', {value: 169.00, currency: 'AED'});
      }

      toast({ title: "تم إرسال طلبك بنجاح! 🎉", description: "سيتم التواصل معك في أسرع وقت لتأكيد التفاصيل" });
      setFormData({ name: '', phone: '', address: '', city: 'دبي' });

    } catch (error) {
      console.error("EmailJS or Pixel error:", error);
      toast({ title: "حدث خطأ", description: "لم نتمكن من إرسال طلبك، يرجى المحاولة مرة أخرى", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background" id="order">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-full mb-6 animate-pulse">
            <Gift className="w-5 h-5" />
            <span className="font-bold">عرض الإطلاق الخاص - ينتهي قريباً!</span>
          </div>
          <h2 className="text-4xl mt-4 md:text-6xl font-black text-foreground mb-6 flex flex-col items-center">
            <span>
              خصم 
              <span className="text-red-500 bg-yellow-300 px-4 py-2 rounded-xl mx-2 animate-bounce">25%</span>
            </span>
            <span className="mt-8">+ توصيل مجاني!</span>
          </h2>
          <p className="text-xl mt-9 text-muted-foreground mb-8">
            لكل الإمارات السبع - عرض محدود لأول 100 عميل فقط!
          </p>

          <div className="flex justify-center gap-4 mb-8">
            <div className="bg-red-500 text-white rounded-lg p-2 text-center min-w-[55px]">
              <div className="text-2xl font-bold">{formatNumber(timeLeft.days)}</div>
              <div className="text-xs">أيام</div>
            </div>
            <div className="bg-red-500 text-white rounded-lg p-2 text-center min-w-[55px]">
              <div className="text-2xl font-bold">{formatNumber(timeLeft.hours)}</div>
              <div className="text-xs">ساعة</div>
            </div>
            <div className="bg-red-500 text-white rounded-lg p-2 text-center min-w-[55px]">
              <div className="text-2xl font-bold">{formatNumber(timeLeft.minutes)}</div>
              <div className="text-xs">دقيقة</div>
            </div>
             <div className="bg-red-500 text-white rounded-lg p-2 text-center min-w-[55px]">
              <div className="text-2xl font-bold">{formatNumber(timeLeft.seconds)}</div>
              <div className="text-xs">ثانية</div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-secondary">
              <div className="text-center mb-6">
                <div className="text-sm text-muted-foreground mb-2">السعر الأصلي</div>
                <div className="text-3xl font-bold text-muted-foreground line-through">219 درهم</div>
                <div className="text-sm text-secondary mb-2 mt-4">سعر العرض الخاص</div>
                <div className="text-5xl font-black text-secondary mb-2">
                  169 <span className="text-2xl">درهم</span>
                </div>
                <div className="bg-green-500 text-white rounded-full px-4 py-2 inline-block">
                  توفير 50 درهم!
                </div>
              </div>
              <div className="space-y-3 border-t pt-6">
                <h4 className="font-bold text-center mb-4">مزايا عرضنا:</h4>
                <div className="flex items-center gap-3"><div className="bg-green-500 text-white rounded-full p-1"><Truck className="w-4 h-4" /></div><span>توصيل مجاني لكل الإمارات</span></div>
                <div className="flex items-center gap-3"><div className="bg-blue-500 text-white rounded-full p-1"><Shield className="w-4 h-4" /></div><span>ضمان سنتين شامل</span></div>
                <div className="flex items-center gap-3"><div className="bg-orange-500 text-white rounded-full p-1"><Clock className="w-4 h-4" /></div><span>توصيل سريع لكل الإمارات</span></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-4 text-center"><Shield className="w-8 h-8 text-green-600 mx-auto mb-2" /><div className="font-bold text-green-800">دفع آمن</div><div className="text-sm text-green-600">عند الاستلام</div></div>
              <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4 text-center"><Star className="w-8 h-8 text-blue-600 mx-auto mb-2" /><div className="font-bold text-blue-800">جودة مضمونة</div><div className="text-sm text-blue-600">احكم بنفسك</div></div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="font-bold text-center mb-4">معتمد ومضمون:</h4>
              <div className="flex justify-center gap-8">
                <div className="text-center"><div className="text-2xl font-bold text-primary">CE</div><div className="text-xs text-muted-foreground">أوروبي</div></div>
                <div className="text-center"><div className="text-2xl font-bold text-secondary">ISO</div><div className="text-xs text-muted-foreground">جودة</div></div>
                <div className="text-center"><div className="text-2xl font-bold text-green-600">UAE</div><div className="text-xs text-muted-foreground">محلي</div></div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-border">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">احجز ثلاجتك الآن!</h3>
              <p className="text-muted-foreground">املأ البيانات وسنتواصل معك في أسرع وقت</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div><label className="block text-sm font-semibold text-foreground mb-2"><User className="w-4 h-4 inline ml-2" />الاسم الكامل *</label><input type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors text-right" placeholder="أدخل اسمك الكامل" required /></div>
              <div><label className="block text-sm font-semibold text-foreground mb-2"><Phone className="w-4 h-4 inline ml-2" />رقم الهاتف *</label><input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors text-right" placeholder="05xxxxxxxx" required /></div>
              <div><label className="block text-sm font-semibold text-foreground mb-2"><MapPin className="w-4 h-4 inline ml-2" />المدينة *</label><select name="city" value={formData.city} onChange={handleInputChange} className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors text-right" required>{cities.map(city => (<option key={city} value={city}>{city}</option>))}</select></div>
              <div><label className="block text-sm font-semibold text-foreground mb-2"><MapPin className="w-4 h-4 inline ml-2" />العنوان بالتفصيل *</label><input type="text" name="address" value={formData.address} onChange={handleInputChange} className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors text-right" placeholder="المنطقة، اسم الشارع، رقم المبنى" required /></div>
              <button type="submit" disabled={isSubmitting} className="w-full bg-secondary-gradient text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
                {isSubmitting ? (<><Loader2 className="w-6 h-6 animate-spin" /><span>جاري إرسال الطلب...</span></>) : (<><ShoppingCart className="w-6 h-6" /><span>اطلب الآن - 169 درهم</span></>)}
              </button>
              <p className="text-center text-sm text-muted-foreground">🔒 بياناتك محمية 100% | دفع آمن عند الاستلام | لا توجد رسوم خفية</p>
            </form>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-6">ضماناتنا لك:</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div><Shield className="w-12 h-12 mx-auto mb-4" /><h4 className="font-bold mb-2">ضمان سنتان</h4><p className="text-green-100">لا يشمل سوء الإستخدام</p></div>
            <div><Truck className="w-12 h-12 mx-auto mb-4" /><h4 className="font-bold mb-2">توصيل سريع ومجاني</h4><p className="text-green-100">لكل الإمارات</p></div>
            <div><Star className="w-12 h-12 mx-auto mb-4" /><h4 className="font-bold mb-2">جودة مضمونة</h4><p className="text-green-100">منتج أصلي بشهادات دولية</p></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;