import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "nav": {
        "home": "Home",
        "taxi": "Taxi",
        "buses": "Bus Booking",
        "tours": "Tour Package",
        "about": "Hamare Baare Mein",
        "contact": "Sampark",
        "call_us": "Call Karein",
        "premium_rental": "Premium Bus & Travel Service"
      },
      "common": {
        "book_now": "Abhi Book Karein",
        "learn_more": "Aur Jaanein",
        "explore": "Dekhein"
      },
      "hero": {
        "title_1": "Bus Ki Ticket Book Karaiye,",
        "title_2": "Sabse Saste Daam Mein.",
        "title_3": "Premium Safar, 5 Minute Mein.",
        "subtitle": "5,000+ log Ekadashi Tours pe bharosa karte hain — safe, AC aur full-luxury bus safar ke liye. Koi hidden charge nahi. Verified driver. 24/7 support.",
        "stars": "4.7/5 Rating",
        "trips": "2,000+ Safar",
        "insured": "Fully Insured",
        "cta_taxi": "Taxi Book Karein",
        "cta_bus": "Abhi Bus Book Karein"
      },
      "why_us": {
        "title": "Humein Kyun Chunein?",
        "subtitle": "Humne apna naam bharose, safety aur transparency pe banaya hai. Yahi wajah hai ki 5,000+ travellers ne Ekadashi Tours ko chuna.",
        "feature1_title": "Transparent Pricing",
        "feature1_desc": "Koi hidden charge nahi. Book karne se pehle poora breakdown dekhein. Jo dikhta hai wahi dena hai — end mein koi surprise nahi.",
        "feature2_title": "Professional Drivers",
        "feature2_desc": "Verified & trained. 8+ saal ka experience. Background checked. 24/7 support. Aapki safety hamari pehli priority.",
        "feature3_title": "Safe & Certified Fleet",
        "feature3_desc": "Regular servicing. Full insurance. GPS tracking. Har gaadi mein emergency support shaamil."
      },
      "home": {
        "services_title": "Hamari Khaas Services",
        "services_subtitle": "Apni travel category chunein aur personalised experience paayein.",
        "taxi_title": "Car & Taxi Rental",
        "taxi_desc": "Akele travellers, family aur 7 logon tak ke chhote group ke liye perfect.",
        "bus_title": "Bus & Coach Rental",
        "bus_desc": "Shaadi, corporate event aur 55 logon tak ke bade group ke liye sabse behtar."
      },
      "contact": {
        "title": "Madad Chahiye? Hum 24/7 Haazir Hain",
        "subtitle": "Humse judne ka apna pasandeeda tareeka chunein.",
        "phone_title": "Phone Support",
        "phone_sub": "Urgent booking ke liye 24/7 available",
        "whatsapp_title": "WhatsApp Chat",
        "whatsapp_sub": "Average reply time: 2-5 minute",
        "office_title": "Office Address",
        "form_title": "Humein Message Bhejein",
        "name": "Naam",
        "email": "Email",
        "phone": "Phone",
        "subject": "Subject",
        "message": "Message",
        "send": "MESSAGE BHEJEIN",
        "sending": "BHEJ RAHE HAIN...",
        "sent": "MESSAGE BHEJ DIYA! ✓",
        "footer_support": "Hum 4 ghante ke andar aapke email ka reply denge.",
        "placeholder_name": "Aapka Naam",
        "placeholder_phone": "Aapka Phone",
        "placeholder_msg": "Hum aapki kaise madad karein?",
        "call_now": "ABHI CALL KAREIN",
        "msg_us": "MESSAGE KAREIN"
      },
      "faq": {
        "title": "Aksar Pooche Jaane Wale Sawaal",
        "subtitle": "Aapke 80% common sawaalon ka jawaab turant.",
        "search_placeholder": "FAQ search karein...",
        "results": "\"{{term}}\" ke liye {{count}} result",
        "clear": "Search hataayein",
        "no_results": "Koi FAQ nahi mila. Kya aap humse seedhe poochna chahenge?",
        "ask_whatsapp": "WHATSAPP PE POOCHEIN",
        "still_questions": "Abhi bhi koi sawaal hai?",
        "team_available": "Hamari team aapke perfect safar ki planning ke liye 24/7 available hai.",
        "call_now": "ABHI CALL KAREIN",
        "contact_support": "SUPPORT SE BAAT KAREIN"
      },
      "connect": {
        "hub": "Connectivity Hub",
        "title": "Humse Har Jagah Judein",
        "everywhere": "Har Jagah",
        "subtitle": "Hamare naye tours, customer stories aur exclusive offers ke saath har digital platform pe updated rahein.",
        "whatsapp_sub": "Instant booking & 24/7 support chat.",
        "instagram_sub": "Hamare travel reels & client journey photos dekhein.",
        "google_sub": "Hamari 5-star reviews padhein ya office dhoondein.",
        "facebook_sub": "10,000+ khush travellers ki community mein judein.",
        "whatsapp_stats": "Abhi Online • 2 min reply",
        "instagram_stats": "5k+ Community Members",
        "google_stats": "4.9/5 Rating (250+ Reviews)",
        "facebook_stats": "10k+ Page Likes",
        "direct_conv": "Seedhi baat karna pasand karenge?",
        "experts": "Hamare travel experts bas ek click door hain.",
        "call_us": "CALL KAREIN",
        "email_team": "TEAM KO EMAIL KAREIN"
      },
      "tours": {
        "title": "Exclusive Tour Package",
        "subtitle": "Yaadgaar memories ke liye saavdhani se design ki gayi journeys. All-inclusive comfort.",
        "full_package_title": "Full Group Package",
        "full_package_subtitle": "Toll, parking, state tax aur professional driver — sab kuch shaamil, poora itinerary.",
        "book_wa": "WhatsApp Pe Book Karein",
        "manali_title": "Manali Magic",
        "manali_desc": "Himalaya ki barf se dhaki chotiyon aur jeevant spirit ka anubhav karein.",
        "varanasi_title": "Aadhyatmik Varanasi",
        "varanasi_desc": "Duniya ke sabse purane shehar ki divya Ganga Aarti aur prachin virasat ke saakshi banein.",
        "jaipur_title": "Pink City Heritage",
        "jaipur_desc": "Rajasthan ki rajdhani ke shaahi kile, mahal aur samriddh sanskriti explore karein.",
        "goa_title": "Goa Beach Retreat",
        "goa_desc": "Bharat ke sabse popular beach pe dhoop, ret aur sukoon.",
        "chardham_title": "Chardham Yatra",
        "chardham_desc": "Kanpur se chaar pavitra teerthon ki 10-din ki pavitra yatra.",
        "nepal_title": "Nepal Expedition",
        "nepal_desc": "6 din mein Nepal ke rahasyamay mandir aur Himalayi nazaare explore karein.",
        "duration": "Duration",
        "days": "Din",
        "from": "Shuru",
        "per_group": "per group"
      },
      "gallery": {
        "badge": "Hamari Asli Buses",
        "title": "Andar Se Dekhiye Hamari Luxury Fleet",
        "subtitle": "Ye rahi hamari actual buses — premium push-back seats, mood lighting, LED TV aur full AC. Jaisa photo mein, waisa hi safar mein.",
        "cta": "Apni Bus Book Karein",
        "tag_seater": "Pushback Seater",
        "tag_sleeper": "Luxury Sleeper",
        "tag_exterior": "Premium Exterior",
        "label_aisle": "Spacious Aisle & Mood Lighting",
        "label_wide": "Premium Push-back Seating",
        "label_rows": "Comfortable Row Layout",
        "label_neon": "Ambient Neon Interior",
        "label_tv": "LED TV & Front Cabin",
        "label_sleeper": "Luxury Sleeper Berths",
        "label_exterior": "Hamari Premium Coach"
      }
    }
  },
  hi: {
    translation: {
      "nav": {
        "home": "होम",
        "taxi": "टैक्सी",
        "buses": "बस बुकिंग",
        "tours": "टूर पैकेज",
        "about": "हमारे बारे में",
        "contact": "संपर्क करें",
        "call_us": "हमें कॉल करें",
        "premium_rental": "प्रीमियम बस और ट्रैवल सेवा"
      },
      "common": {
        "book_now": "अभी बुक करें",
        "learn_more": "अधिक जानें",
        "explore": "एक्सप्लोर करें"
      },
      "hero": {
        "title_1": "बस की टिकट बुक कराइए,",
        "title_2": "सबसे सस्ते दाम में।",
        "title_3": "प्रीमियम सफर, 5 मिनट में।",
        "subtitle": "5,000 से अधिक लोग सुरक्षित, एसी और पूरी तरह लग्ज़री बस सफर के लिए एकादशी टूर्स पर भरोसा करते हैं। कोई छिपा हुआ शुल्क नहीं। वेरिफाइड ड्राइवर। 24/7 सहायता।",
        "stars": "4.7/5 रेटिंग",
        "trips": "2,000+ सफर",
        "insured": "पूर्ण बीमाकृत",
        "cta_taxi": "टैक्सी बुक करें",
        "cta_bus": "अभी बस बुक करें"
      },
      "why_us": {
        "title": "हमें क्यों चुनें",
        "subtitle": "हमने अपना नाम भरोसे, सुरक्षा और पारदर्शिता पर बनाया है। यहाँ बताया गया है कि 5,000+ यात्रियों ने एकादशी टूर्स को क्यों चुना।",
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
      },
      "gallery": {
        "badge": "हमारी असली बसें",
        "title": "अंदर से देखिए हमारी लग्ज़री फ्लीट",
        "subtitle": "ये रही हमारी असली बसें — प्रीमियम पुश-बैक सीटें, मूड लाइटिंग, LED TV और फुल एसी। जैसा फोटो में, वैसा ही सफर में।",
        "cta": "अपनी बस बुक करें",
        "tag_seater": "पुशबैक सीटर",
        "tag_sleeper": "लग्ज़री स्लीपर",
        "tag_exterior": "प्रीमियम एक्सटीरियर",
        "label_aisle": "खुला रास्ता और मूड लाइटिंग",
        "label_wide": "प्रीमियम पुश-बैक सीटिंग",
        "label_rows": "आरामदायक रो लेआउट",
        "label_neon": "एम्बिएंट नियॉन इंटीरियर",
        "label_tv": "LED TV और फ्रंट केबिन",
        "label_sleeper": "लग्ज़री स्लीपर बर्थ",
        "label_exterior": "हमारी प्रीमियम कोच"
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
