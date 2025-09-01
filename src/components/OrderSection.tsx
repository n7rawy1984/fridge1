import React, { useState, useEffect } from 'react';
import { ShoppingCart, Truck, Shield, Clock, Star, Gift, Phone, MapPin, User, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

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
    city: isArabic ? 'دبي' : 'Dubai'
  });

  const content = {
    ar: {
      offerTitle: "عرض الإطلاق الخاص - ينتهي قريباً!",
      discount: "خصم",
      freeShipping: "+ توصيل مجاني!",
      offerDesc: "لكل الإمارات السبع - عرض محدود لأول 100 عميل فقط!",
      timer: { days: 'أيام', hours: 'ساعة', minutes: 'دقيقة', seconds: 'ثانية' },
      price: { original: "السعر الأصلي", originalPrice: "200 درهم", offer: "سعر العرض الخاص", offerPrice: "149 درهم", savings: "توفير 50 درهم!", benefitsTitle: "مزايا عرضنا:", benefits: ["توصيل مجاني لكل الإمارات", "ضمان سنتين شامل", "توصيل سريع لكل الإمارات"] },
      guarantees: { safePayment: "دفع آمن", onReceipt: "عند الاستلام", quality: "جودة مضمونة", judgeYourself: "احكم بنفسك" },
      certified: { title: "معتمد ومضمون:", certs: ["أوروبي", "جودة", "محلي"] },
      form: { title: "احجز ثلاجتك الآن!", desc: "املأ البيانات وسنتواصل معك في أسرع وقت", nameLabel: "الاسم الكامل *", namePlaceholder: "أدخل اسمك الكامل", phoneLabel: "رقم الهاتف *", phonePlaceholder: "05xxxxxxxx", cityLabel: "المدينة *", cities: ['دبي', 'أبوظبي', 'الشارقة', 'عجمان', 'أم القيوين', 'رأس الخيمة', 'الفجيرة'], addressLabel: "العنوان بالتفصيل *", addressPlaceholder: "المنطقة، اسم الشارع، رقم المبنى", buttonIdle: "اطلب الآن - 149 درهم", buttonSubmitting: "جاري إرسال الطلب...", footer: "🔒 بياناتك محمية 100% | دفع آمن عند الاستلام | لا توجد رسوم خفية" },
      finalGuarantees: { title: "ضماناتنا لك:", items: [{ title: "ضمان سنتان", desc: "لا يشمل سوء الإستخدام" }, { title: "توصيل سريع ومجاني", desc: "لكل الإمارات" }, { title: "جودة مضمونة", desc: "منتج أصلي بشهادات دولية" }] },
      toasts: { errorTitle: "خطأ في البيانات", errorDesc: "يرجى ملء جميع الحقول المطلوبة", successTitle: "تم إرسال طلبك بنجاح! 🎉", successDesc: "سيتم التواصل معك في أسرع وقت لتأكيد التفاصيل", failureTitle: "حدث خطأ", failureDesc: "لم نتمكن من إرسال طلبك، يرجى المحاولة مرة أخرى" },
      productName: "ثلاجة السيارة المحمولة 7.5 لتر"
    },
    en: {
      offerTitle: "Special Launch Offer - Ending Soon!",
      discount: "Discount",
      freeShipping: "+ Free Delivery!",
      offerDesc: "For all 7 Emirates - Limited offer for the first 100 customers only!",
      timer: { days: 'Days', hours: 'Hours', minutes: 'Minutes', seconds: 'Seconds' },
      price: { original: "Original Price", originalPrice: "200 AED", offer: "Special Offer Price", offerPrice: "149 AED", savings: "You save 50 AED!", benefitsTitle: "Our Offer Includes:", benefits: ["Free delivery across the UAE", "Full two-year warranty", "Fast delivery across the UAE"] },
      guarantees: { safePayment: "Secure Payment", onReceipt: "Cash on delivery", quality: "Guaranteed Quality", judgeYourself: "See for yourself" },
      certified: { title: "Certified & Guaranteed:", certs: ["European", "Quality", "Local"] },
      form: { title: "Reserve Your Fridge Now!", desc: "Fill in your details and we'll contact you shortly", nameLabel: "Full Name *", namePlaceholder: "Enter your full name", phoneLabel: "Phone Number *", phonePlaceholder: "05xxxxxxxx", cityLabel: "City *", cities: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Umm Al Quwain', 'Ras Al Khaimah', 'Fujairah'], addressLabel: "Detailed Address *", addressPlaceholder: "Area, Street Name, Building No.", buttonIdle: "Order Now - 149 AED", buttonSubmitting: "Submitting Order...", footer: "🔒 100% Secure Data | Safe Payment on Delivery | No Hidden Fees" },
      finalGuarantees: { title: "Our Guarantees To You:", items: [{ title: "Two-Year Warranty", desc: "Misuse not covered" }, { title: "Fast & Free Delivery", desc: "To all Emirates" }, { title: "Guaranteed Quality", desc: "Original product with international certificates" }] },
      toasts: { errorTitle: "Validation Error", errorDesc: "Please fill in all required fields", successTitle: "Your Order Has Been Sent! 🎉", successDesc: "We will contact you shortly to confirm the details", failureTitle: "An Error Occurred", failureDesc: "We couldn't send your order, please try again" },
      productName: "Portable Car Fridge 7.5L"
    }
  };

  const text = content[isArabic ? 'ar' : 'en'];

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
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
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address) {
      toast({ title: text.toasts.errorTitle, description: text.toasts.errorDesc, variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    const templateParams = {
        customer_name: formData.name,
        customer_phone: formData.phone,
        customer_address: formData.address,
        customer_city: formData.city,
        product_name: text.productName,
        product_price: "149 AED",
        order_date: new Date().toLocaleString('en-GB'),
    };
    try {
      await emailjs.send('service_0t5zams', 'template_iugigmp', templateParams, '9oDf7K1CgEjHTTxZS');
      if (typeof window.fbq === 'function') {
        window.fbq('track', 'Purchase', { value: 149.00, currency: 'AED' });
      }
      toast({ title: text.toasts.successTitle, description: text.toasts.successDesc });
      setFormData({ name: '', phone: '', address: '', city: text.form.cities[0] });
    } catch (error) {
      console.error("EmailJS or Pixel error:", error);
      toast({ title: text.toasts.failureTitle, description: text.toasts.failureDesc, variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background" id="order">
      <div className="container mx-auto px-4" dir={isArabic ? 'rtl' : 'ltr'}>
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-full mb-6 animate-pulse">
            <Gift className="w-5 h-5" />
            <span className="font-bold">{text.offerTitle}</span>
          </div>
          <h2 className="text-4xl mt-4 md:text-6xl font-black text-foreground mb-6 flex flex-col items-center">
            <span>
              {text.discount}
              <span className="text-red-500 bg-yellow-300 px-4 py-2 rounded-xl mx-2 animate-bounce">25%</span>
            </span>
            <span className="mt-8">{text.freeShipping}</span>
          </h2>
          <p className="text-xl mt-9 text-muted-foreground mb-8">{text.offerDesc}</p>
          <div className="flex justify-center gap-4 mb-8">
            <div className="bg-red-500 text-white rounded-lg p-2 text-center min-w-[55px]"><div className="text-2xl font-bold">{formatNumber(timeLeft.days)}</div><div className="text-xs">{text.timer.days}</div></div>
            <div className="bg-red-500 text-white rounded-lg p-2 text-center min-w-[55px]"><div className="text-2xl font-bold">{formatNumber(timeLeft.hours)}</div><div className="text-xs">{text.timer.hours}</div></div>
            <div className="bg-red-500 text-white rounded-lg p-2 text-center min-w-[55px]"><div className="text-2xl font-bold">{formatNumber(timeLeft.minutes)}</div><div className="text-xs">{text.timer.minutes}</div></div>
            <div className="bg-red-500 text-white rounded-lg p-2 text-center min-w-[55px]"><div className="text-2xl font-bold">{formatNumber(timeLeft.seconds)}</div><div className="text-xs">{text.timer.seconds}</div></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-secondary">
              <div className="text-center mb-6">
                <div className="text-sm text-muted-foreground mb-2">{text.price.original}</div>
                <div className="text-3xl font-bold text-muted-foreground line-through">{text.price.originalPrice}</div>
                <div className="text-sm text-secondary mb-2 mt-4">{text.price.offer}</div>
                <div className="text-5xl font-black text-secondary mb-2">149 <span className="text-2xl">{isArabic ? 'درهم' : 'AED'}</span></div>
                <div className="bg-green-500 text-white rounded-full px-4 py-2 inline-block">{text.price.savings}</div>
              </div>
              <div className="space-y-3 border-t pt-6">
                <h4 className="font-bold text-center mb-4">{text.price.benefitsTitle}</h4>
                {text.price.benefits.map((benefit, i) => {
                  const icons = [<Truck className="w-4 h-4" />, <Shield className="w-4 h-4" />, <Clock className="w-4 h-4" />];
                  const colors = ['bg-green-500', 'bg-blue-500', 'bg-orange-500'];
                  return <div key={i} className="flex items-center gap-3"><div className={`${colors[i]} text-white rounded-full p-1`}>{icons[i]}</div><span>{benefit}</span></div>;
                })}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-4 text-center"><Shield className="w-8 h-8 text-green-600 mx-auto mb-2" /><div className="font-bold text-green-800">{text.guarantees.safePayment}</div><div className="text-sm text-green-600">{text.guarantees.onReceipt}</div></div>
              <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4 text-center"><Star className="w-8 h-8 text-blue-600 mx-auto mb-2" /><div className="font-bold text-blue-800">{text.guarantees.quality}</div><div className="text-sm text-blue-600">{text.guarantees.judgeYourself}</div></div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="font-bold text-center mb-4">{text.certified.title}</h4>
              <div className="flex justify-center gap-8">
                <div className="text-center"><div className="text-2xl font-bold text-primary">CE</div><div className="text-xs text-muted-foreground">{text.certified.certs[0]}</div></div>
                <div className="text-center"><div className="text-2xl font-bold text-secondary">ISO</div><div className="text-xs text-muted-foreground">{text.certified.certs[1]}</div></div>
                <div className="text-center"><div className="text-2xl font-bold text-green-600">UAE</div><div className="text-xs text-muted-foreground">{text.certified.certs[2]}</div></div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-border">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">{text.form.title}</h3>
              <p className="text-muted-foreground">{text.form.desc}</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6" dir={isArabic ? 'rtl' : 'ltr'}>
              <div><label className="block text-sm font-semibold text-foreground mb-2"><User className="w-4 h-4 inline mx-2" />{text.form.nameLabel}</label><input type="text" name="name" value={formData.name} onChange={handleInputChange} className={`w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors ${isArabic ? 'text-right' : 'text-left'}`} placeholder={text.form.namePlaceholder} required /></div>
              <div><label className="block text-sm font-semibold text-foreground mb-2"><Phone className="w-4 h-4 inline mx-2" />{text.form.phoneLabel}</label><input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className={`w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors ${isArabic ? 'text-right' : 'text-left'}`} placeholder={text.form.phonePlaceholder} required /></div>
              <div><label className="block text-sm font-semibold text-foreground mb-2"><MapPin className="w-4 h-4 inline mx-2" />{text.form.cityLabel}</label><select name="city" value={formData.city} onChange={handleInputChange} className={`w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors ${isArabic ? 'text-right' : 'text-left'}`} required>{text.form.cities.map(city => (<option key={city} value={city}>{city}</option>))}</select></div>
              <div><label className="block text-sm font-semibold text-foreground mb-2"><MapPin className="w-4 h-4 inline mx-2" />{text.form.addressLabel}</label><input type="text" name="address" value={formData.address} onChange={handleInputChange} className={`w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors ${isArabic ? 'text-right' : 'text-left'}`} placeholder={text.form.addressPlaceholder} required /></div>
              <button type="submit" disabled={isSubmitting} className="w-full bg-secondary-gradient text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
                {isSubmitting ? (<><Loader2 className="w-6 h-6 animate-spin" /><span>{text.form.buttonSubmitting}</span></>) : (<><ShoppingCart className="w-6 h-6" /><span>{text.form.buttonIdle}</span></>)}
              </button>
              <p className="text-center text-sm text-muted-foreground">{text.form.footer}</p>
            </form>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-6">{text.finalGuarantees.title}</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {text.finalGuarantees.items.map((item, i) => {
               const icons = [<Shield className="w-12 h-12 mx-auto mb-4" />, <Truck className="w-12 h-12 mx-auto mb-4" />, <Star className="w-12 h-12 mx-auto mb-4" />];
               return <div key={i}>{icons[i]}<h4 className="font-bold mb-2">{item.title}</h4><p className="text-green-100">{item.desc}</p></div>
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;