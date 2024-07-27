import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

// Define translation resources
const resources = {
  en: {
    translation: {
      "Inventory Management System for IMC": "Inventory Management System for IMC",
      "Items by Status": "Items by Status",
      "In Stock": "In Stock",
      "In Service": "In Service",
      "Quantity by Category": "Quantity by Category",
      "Water Meters": "Water Meters",
      "Water Tanks": "Water Tanks",
      "Daily Activity": "Daily Activity",
      "Meeting with John": "Meeting with John",
      "Payment received from John Doe of $385.90": "Payment received from John Doe of $385.90",
      "Product Performance": "Product Performance",
      "Id": "Id",
      "Assigned": "Assigned",
      "Name": "Name",
      "Priority": "Priority",
      "Budget": "Budget",
      "Home": "Home",
      "Water Supply": "Water Supply",
      "HealthCare": "HealthCare",
      "Transportation": "Transportation",
      "Communication": "Communication",
      "Team": "Team",
      "Request": "Request",
      "Sunil Joshi": "Sunil Joshi",
      "Web Designer": "Web Designer",
      "Elite Admin": "Elite Admin",
      "Low": "Low",
      "$3.9k": "$3.9k"
    }
  },
  hi: {
    translation: {
      "Inventory Management System for IMC": "IMC के लिए इन्वेंटरी प्रबंधन प्रणाली",
      "Items by Status": "स्थिति के अनुसार आइटम",
      "In Stock": "स्टॉक में",
      "In Service": "सेवा में",
      "Quantity by Category": "श्रेणी के अनुसार मात्रा",
      "Water Meters": "वाटर मीटर",
      "Water Tanks": "पानी की टंकियां",
      "Daily Activity": "दैनिक गतिविधि",
      "Meeting with John": "जॉन के साथ बैठक",
      "Payment received from John Doe of $385.90": "$385.90 का भुगतान जॉन डो से प्राप्त हुआ",
      "Product Performance": "उत्पाद प्रदर्शन",
      "Id": "आईडी",
      "Assigned": "नियुक्त",
      "Name": "नाम",
      "Priority": "प्राथमिकता",
      "Budget": "बजट",
      "Home": "होम",
      "Water Supply": "जल आपूर्ति",
      "HealthCare": "स्वास्थ्य सेवा",
      "Transportation": "परिवहन",
      "Communication": "संचार",
      "Team": "टीम",
      "Request": "अनुरोध",
      "Sunil Joshi": "सुनील जोशी",
      "Web Designer": "वेब डिजाइनर",
      "Elite Admin": "एलीट एडमिन",
      "Low": "निम्न",
      "$3.9k": "$3.9k"
    }
  },
  ur: {
    translation: {
      "Inventory Management System for IMC": "آئی ایم سی کے لیے انوینٹری مینجمنٹ سسٹم",
      "Items by Status": "حالت کے لحاظ سے اشیاء",
      "In Stock": "اسٹاک میں",
      "In Service": "سروس میں",
      "Quantity by Category": "زمرے کے لحاظ سے مقدار",
      "Water Meters": "پانی کے میٹر",
      "Water Tanks": "پانی کے ٹینک",
      "Daily Activity": "روزانہ کی سرگرمی",
      "Meeting with John": "جان کے ساتھ ملاقات",
      "Payment received from John Doe of $385.90": "جان ڈو سے $385.90 کی ادائیگی موصول ہوئی",
      "Product Performance": "پروڈکٹ کی کارکردگی",
      "Id": "آئی ڈی",
      "Assigned": "تفویض کردہ",
      "Name": "نام",
      "Priority": "ترجیح",
      "Budget": "بجٹ",
      "Home": "ہوم",
      "Water Supply": "پانی کی فراہمی",
      "HealthCare": "صحت کی دیکھ بھال",
      "Transportation": "ٹرانسپورٹیشن",
      "Communication": "کمیونیکیشن",
      "Team": "ٹیم",
      "Request": "درخواست",
      "Sunil Joshi": "سنیل جوشی",
      "Web Designer": "ویب ڈیزائنر",
      "Elite Admin": "ایلیٹ ایڈمن",
      "Low": "کم",
      "$3.9k": "$3.9k"
    }
  }
};

// Initialize i18next
i18n
  .use(LanguageDetector) // Use the browser language detector
  .use(initReactI18next) // Pass the i18n instance to react-i18next
  .init({
    debug: true, // Enable debugging
    lng: 'en', // Default language
    resources, 
    interpolation: {
      escapeValue: false, 
    },
    react: {
      useSuspense: false, 
    },
  });

export default i18n;
