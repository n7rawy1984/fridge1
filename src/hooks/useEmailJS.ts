import { useState } from 'react';
import emailjs from '@emailjs/browser';

interface OrderData {
  name: string;
  phone: string;
  email: string;
  address: string;
  quantity: number;
  total: number;
}

export const useEmailJS = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendOrderEmail = async (orderData: OrderData) => {
    setIsLoading(true);
    setError(null);

    try {
      // يجب تحديث هذه المعاملات بمفاتيح EmailJS الخاصة بك
      const SERVICE_ID = 'YOUR_SERVICE_ID'; // ضع هنا service ID من EmailJS
      const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // ضع هنا template ID من EmailJS  
      const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // ضع هنا public key من EmailJS

      const templateParams = {
        to_email: 'your-email@example.com', // ضع هنا الإيميل الذي تريد استلام الطلبات عليه
        customer_name: orderData.name,
        customer_phone: orderData.phone,
        customer_email: orderData.email,
        customer_address: orderData.address,
        quantity: orderData.quantity,
        total_amount: orderData.total,
        order_date: new Date().toLocaleDateString('ar-EG'),
        order_time: new Date().toLocaleTimeString('ar-EG'),
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      
      return { success: true };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'حدث خطأ في إرسال الطلب';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setIsLoading(false);
    }
  };

  return {
    sendOrderEmail,
    isLoading,
    error,
    clearError: () => setError(null)
  };
};

/*
تعليمات لإعداد EmailJS:

1. قم بزيارة https://www.emailjs.com/ وإنشاء حساب
2. إنشاء خدمة جديدة (Service) واختر مزود البريد الإلكتروني
3. إنشاء قالب جديد (Template) مع المتغيرات التالية:
   - {{to_email}} - الإيميل المستلم
   - {{customer_name}} - اسم العميل
   - {{customer_phone}} - رقم هاتف العميل
   - {{customer_email}} - إيميل العميل
   - {{customer_address}} - عنوان العميل
   - {{quantity}} - الكمية
   - {{total_amount}} - المبلغ الإجمالي
   - {{order_date}} - تاريخ الطلب
   - {{order_time}} - وقت الطلب

4. انسخ المفاتيح التالية من لوحة التحكم:
   - Service ID
   - Template ID  
   - Public Key

5. استبدل القيم في الكود أعلاه بالمفاتيح الفعلية
*/