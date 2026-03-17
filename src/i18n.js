import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "nav": {
        "home": "Home",
        "taxi": "Taxi",
        "buses": "Buses",
        "tours": "Tours",
        "about": "About",
        "contact": "Contact",
        "call_us": "Call Us",
        "premium_rental": "Premium Rental Services"
      },
      "common": {
        "book_now": "Book Now",
        "learn_more": "Learn More",
        "explore": "Explore"
      },
      "hero": {
        "title_1": "Premium Travel.",
        "title_2": "Transparent Pricing.",
        "title_3": "Book in 5 Minutes.",
        "subtitle": "Over 5,000 customers trust Ekadashi Tourist Family for safe, comfortable journeys across India. No hidden charges. Professional drivers. 24/7 support.",
        "stars": "4.7/5 Stars",
        "trips": "2,000+ Trips",
        "insured": "Insured",
        "cta_taxi": "Book a Taxi",
        "cta_bus": "Rent a Bus"
      },
      "why_us": {
        "title": "Why Choose Us",
        "subtitle": "We've built our reputation on trust, safety, and transparency. Here's why 5,000+ travelers chose Ekadashi Tourist Family.",
        "feature1_title": "Transparent Pricing",
        "feature1_desc": "No Hidden Charges. See the complete breakdown before you book. What you see is what you pay. No surprises at the end.",
        "feature2_title": "Professional Drivers",
        "feature2_desc": "Verified & Trained. 8+ years of experience. Background checked. 24/7 support. Your safety is our priority.",
        "feature3_title": "Safe & Certified Fleet",
        "feature3_desc": "Regular servicing. Full insurance. GPS tracking. Emergency support included in all our vehicles."
      },
      "home": {
        "services_title": "Our Specialized Services",
        "services_subtitle": "Choose your travel category for a personalized experience.",
        "taxi_title": "Car & Taxi Rentals",
        "taxi_desc": "Ideal for solo travelers, families, and small groups up to 7 people.",
        "bus_title": "Bus & Coach Rentals",
        "bus_desc": "Perfect for weddings, corporate events, and groups up to 55 people."
      },
      "contact": {
        "title": "Need Help? We're Here 24/7",
        "subtitle": "Choose your preferred way to reach us.",
        "phone_title": "Phone Support",
        "phone_sub": "Available 24/7 for urgent bookings",
        "whatsapp_title": "WhatsApp Chat",
        "whatsapp_sub": "Avg. response time: 2-5 minutes",
        "office_title": "Office Address",
        "form_title": "Send Us a Message",
        "name": "Name",
        "email": "Email",
        "phone": "Phone",
        "subject": "Subject",
        "message": "Message",
        "send": "SEND MESSAGE",
        "sending": "SENDING...",
        "sent": "MESSAGE SENT! ✓",
        "footer_support": "We'll reply to your email within 4 hours.",
        "placeholder_name": "Your Name",
        "placeholder_phone": "Your Phone",
        "placeholder_msg": "How can we help you?",
        "call_now": "CALL US NOW",
        "msg_us": "MESSAGE US"
      },
      "faq": {
        "title": "Frequently Asked Questions",
        "subtitle": "Answering 80% of your common queries instantly.",
        "search_placeholder": "Search FAQs...",
        "results": "{{count}} results for \"{{term}}\"",
        "clear": "Clear search",
        "no_results": "No FAQs found. Would you like to ask us directly?",
        "ask_whatsapp": "ASK VIA WHATSAPP",
        "still_questions": "Still have questions?",
        "team_available": "Our team is available 24/7 to help you plan your perfect journey.",
        "call_now": "CALL US NOW",
        "contact_support": "CONTACT SUPPORT"
      },
      "connect": {
        "hub": "Connectivity Hub",
        "title": "Connect With Us Everywhere",
        "everywhere": "Everywhere",
        "subtitle": "Stay updated with our latest tours, customer stories, and exclusive offers across all our digital platforms.",
        "whatsapp_sub": "Instant bookings & 24/7 support chat.",
        "instagram_sub": "Explore our travel reels & client journey photos.",
        "google_sub": "Read our 5-star reviews or find our office.",
        "facebook_sub": "Join our community of 10,000+ happy travelers.",
        "whatsapp_stats": "Online Now • 2 min response",
        "instagram_stats": "5k+ Community Members",
        "google_stats": "4.9/5 Rating (250+ Reviews)",
        "facebook_stats": "10k+ Page Likes",
        "direct_conv": "Prefer a direct conversation?",
        "experts": "Our travel experts are just a click away.",
        "call_us": "CALL US",
        "email_team": "EMAIL TEAM"
      },
      "tours": {
        "title": "Exclusive Tour Packages",
        "subtitle": "Carefully curated journeys for unforgettable memories. All-inclusive comfort.",
        "full_package_title": "Full Group Packages",
        "full_package_subtitle": "Complete itineraries including toll, parking, state tax, and professional driver.",
        "book_wa": "Book via WhatsApp",
        "manali_title": "Manali Magic",
        "manali_desc": "Experience the snow-capped peaks and vibrant spirit of the Himalayas.",
        "varanasi_title": "Spiritual Varanasi",
        "varanasi_desc": "Witness the divine Ganga Aarti and ancient heritage of the world's oldest city.",
        "jaipur_title": "Pink City Heritage",
        "jaipur_desc": "Explore the royal forts, palaces, and rich culture of Rajasthan's capital.",
        "goa_title": "Goa Beach Retreat",
        "goa_desc": "Sun, sand, and serenity on India's most popular coastline.",
        "chardham_title": "Chardham Yatra",
        "chardham_desc": "A 10-day sacred journey from Kanpur to the four holy shrines.",
        "nepal_title": "Nepal Expedition",
        "nepal_desc": "Explore the mystical temples and Himalayan vistas of Nepal in 6 days.",
        "duration": "Duration",
        "days": "Days",
        "from": "Starting from",
        "per_group": "per group"
      }
    }
  },
  hi: {
    translation: {
      "nav": {
        "home": "होम",
        "taxi": "टैक्सी",
        "buses": "बसें",
        "tours": "टूर",
        "about": "हमारे बारे में",
        "contact": "संपर्क करें",
        "call_us": "हमें कॉल करें",
        "premium_rental": "प्रीमियम रेंटल सेवाएं"
      },
      "common": {
        "book_now": "अभी बुक करें",
        "learn_more": "अधिक जानें",
        "explore": "एक्सप्लोर करें"
      },
      "hero": {
        "title_1": "प्रीमियम यात्रा।",
        "title_2": "पारदर्शी मूल्य निर्धारण।",
        "title_3": "5 मिनट में बुक करें।",
        "subtitle": "5,000 से अधिक ग्राहक भारत भर में सुरक्षित, आरामदायक यात्राओं के लिए एकादशी टूरिस्ट फैमिली पर भरोसा करते हैं। कोई छिपा हुआ शुल्क नहीं। पेशेवर ड्राइवर। 24/7 सहायता।",
        "stars": "4.7/5 सितारे",
        "trips": "2,000+ यात्राएं",
        "insured": "बीमाकृत",
        "cta_taxi": "टैक्सी बुक करें",
        "cta_bus": "बस किराए पर लें"
      },
      "why_us": {
        "title": "हमें क्यों चुनें",
        "subtitle": "हमने अपना नाम भरोसे, सुरक्षा और पारदर्शिता पर बनाया है। यहाँ बताया गया है कि 5,000+ यात्रियों ने एकादशी टूरिस्ट फैमिली को क्यों चुना।",
        "feature1_title": "पारदर्शी मूल्य निर्धारण",
        "feature1_desc": "कोई छिपा हुआ शुल्क नहीं। बुक करने से पहले पूरा विवरण देखें। जो आप देखते हैं वही आप भुगतान करते हैं। अंत में कोई आश्चर्य नहीं।",
        "feature2_title": "पेशेवर ड्राइवर",
        "feature2_desc": "सत्यापित और प्रशिक्षित। 8+ वर्षों का अनुभव। बैकग्राउंड चेक किया गया। 24/7 सहायता। आपकी सुरक्षा हमारी प्राथमिकता है।",
        "feature3_title": "सुरक्षित और प्रमाणित बेड़ा",
        "feature3_desc": "नियमित सर्विसिंग। पूर्ण बीमा। जीपीएस ट्रैकिंग। हमारे सभी वाहनों में आपातकालीन सहायता शामिल है।"
      },
      "home": {
        "services_title": "हमारी विशेष सेवाएं",
        "services_subtitle": "व्यक्तिगत अनुभव के लिए अपनी यात्रा श्रेणी चुनें।",
        "taxi_title": "कार और टैक्सी रेंटल",
        "taxi_desc": "अकेले यात्रियों, परिवारों और 7 लोगों तक के छोटे समूहों के लिए आदर्श।",
        "bus_title": "बस और कोच रेंटल",
        "bus_desc": "शादियों, कॉर्पोरेट कार्यक्रमों और 55 लोगों तक के समूहों के लिए उपयुक्त।"
      },
      "contact": {
        "title": "मदद चाहिए? हम यहाँ 24/7 हैं",
        "subtitle": "हम तक पहुँचने के लिए अपना पसंदीदा तरीका चुनें।",
        "phone_title": "फोन सहायता",
        "phone_sub": "तत्काल बुकिंग के लिए 24/7 उपलब्ध",
        "whatsapp_title": "व्हाट्सएप चैट",
        "whatsapp_sub": "औसत प्रतिक्रिया समय: 2-5 मिनट",
        "office_title": "कार्यालय का पता",
        "form_title": "हमें एक संदेश भेजें",
        "name": "नाम",
        "email": "ईमेल",
        "phone": "फोन",
        "subject": "विषय",
        "message": "संदेश",
        "send": "संदेश भेजें",
        "sending": "भेजा जा रहा है...",
        "sent": "संदेश भेज दिया गया! ✓",
        "footer_support": "हम 4 घंटे के भीतर आपके ईमेल का उत्तर देंगे।",
        "placeholder_name": "आपका नाम",
        "placeholder_phone": "आपका फोन",
        "placeholder_msg": "हम आपकी कैसे मदद कर सकते हैं?",
        "call_now": "हमें अभी कॉल करें",
        "msg_us": "हमें संदेश भेजें"
      },
      "faq": {
        "title": "अक्सर पूछे जाने वाले प्रश्न",
        "subtitle": "आपके 80% सामान्य प्रश्नों के उत्तर तुरंत।",
        "search_placeholder": "FAQ खोजें...",
        "results": "\"{{term}}\" के लिए {{count}} परिणाम",
        "clear": "खोज साफ़ करें",
        "no_results": "कोई FAQ नहीं मिला। क्या आप हमसे सीधे पूछना चाहेंगे?",
        "ask_whatsapp": "व्हाट्सएप के माध्यम से पूछें",
        "still_questions": "क्या अभी भी प्रश्न हैं?",
        "team_available": "हमारी टीम आपकी सही यात्रा की योजना बनाने में मदद करने के लिए 24/7 उपलब्ध है।",
        "call_now": "हमें अभी कॉल करें",
        "contact_support": "सहायता से संपर्क करें"
      },
      "connect": {
        "hub": "कनेक्टिविटी हब",
        "title": "हमारे साथ हर जगह जुड़ें",
        "everywhere": "हर जगह",
        "subtitle": "हमारे सभी डिजिटल प्लेटफॉर्म पर हमारे नवीनतम दौरों, ग्राहकों की कहानियों और विशेष प्रस्तावों के साथ अपडेट रहें।",
        "whatsapp_sub": "तत्काल बुकिंग और 24/7 सहायता चैट।",
        "instagram_sub": "हमारे यात्रा रील्स और क्लाइंट यात्रा की तस्वीरें देखें।",
        "google_sub": "हमारी 5-सितारा समीक्षाएं पढ़ें या हमारा कार्यालय खोजें।",
        "facebook_sub": "10,000+ खुश यात्रियों के हमारे समुदाय में शामिल हों।",
        "whatsapp_stats": "अभी ऑनलाइन • 2 मिनट में जवाब",
        "instagram_stats": "5k+ समुदाय सदस्य",
        "google_stats": "4.9/5 रेटिंग (250+ समीक्षाएं)",
        "facebook_stats": "10k+ पेज लाइक्स",
        "direct_conv": "क्या आप सीधी बातचीत पसंद करते हैं?",
        "experts": "हमारे यात्रा विशेषज्ञ बस एक क्लिक दूर हैं।",
        "call_us": "हमें कॉल करें",
        "email_team": "टीम को ईमेल करें"
      },
      "tours": {
        "title": "विशेष टूर पैकेज",
        "subtitle": "अविस्मरणीय यादों के लिए सावधानीपूर्वक तैयार की गई यात्राएं। सर्व-समावेशी आराम।",
        "full_package_title": "पूर्ण समूह पैकेज",
        "full_package_subtitle": "टोल, पार्किंग, राज्य कर और पेशेवर ड्राइवर सहित पूर्ण यात्रा कार्यक्रम।",
        "book_wa": "व्हाट्सएप के माध्यम से बुक करें",
        "manali_title": "मनाली मैजिक",
        "manali_desc": "हिमालय की बर्फ से ढकी चोटियों और जीवंत भावना का अनुभव करें।",
        "varanasi_title": "आध्यात्मिक वाराणसी",
        "varanasi_desc": "दुनिया के सबसे पुराने शहर की दिव्य गंगा आरती और प्राचीन विरासत के साक्षी बनें।",
        "jaipur_title": "पिंक सिटी हेरिटेज",
        "jaipur_desc": "राजस्थान की राजधानी के शाही किलों, महलों और समृद्ध संस्कृति का अन्वेषण करें।",
        "goa_title": "गोवा बीच रिट्रीट",
        "goa_desc": "भारत के सबसे लोकप्रिय समुद्र तट पर धूप, रेत और शांति।",
        "chardham_title": "चारधाम यात्रा",
        "chardham_desc": "कानपुर से चार पवित्र तीर्थों की 10 दिवसीय पवित्र यात्रा।",
        "nepal_title": "नेपाल अभियान",
        "nepal_desc": "6 दिनों में नेपाल के रहस्यमय मंदिरों और हिमालयी दृश्यों का अन्वेषण करें।",
        "duration": "अवधि",
        "days": "दिन",
        "from": "शुरुआत",
        "per_group": "प्रति समूह"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
