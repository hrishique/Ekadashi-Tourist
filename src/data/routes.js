// Daily AC Sleeper one-way routes + weekly special yatras.
//
// Every field here is taken from the official Ekadashi Tour's banner for that
// route and the Hindi description that was published along with it — so the
// poster on screen and the text next to it always say the same thing.
// Boarding points differ per route (Kainchi Dham is Kanpur-only), so they are
// listed per route rather than assumed.

import bannerJaipur from '../assets/banner-jaipur.jpg';
import bannerDelhi from '../assets/banner-delhi.jpg';
import bannerKainchi from '../assets/banner-kainchi-dham.jpg';
import bannerVrindavan from '../assets/banner-vrindavan.jpg';
import bannerBageshwar from '../assets/banner-bageshwar-dham.jpg';
import bannerSanwariya from '../assets/banner-sanwariya-seth.jpg';
import bannerKhatushyam from '../assets/banner-khatushyam.jpg';
import bannerMahakaleshwar from '../assets/banner-mahakaleshwar.jpg';
import bannerNainital from '../assets/poster-kathgodam.jpg';
import bannerManona from '../assets/banner-manona-dham.jpg';
import bannerDevDarshan from '../assets/banner-kanpur-dev-darshan.jpg';

// Shared boarding points — printed on every daily sleeper banner.
const LKO = 'ट्रांसपोर्ट नगर, लखनऊ';
const KNP = 'रामादेवी चौराहा, कानपुर';

// Printed on every daily sleeper banner: 6pm, 8pm, 9pm.
// `short` is used on the compact cards, `full` inside the detail view.
const EVENING_TIMES = [
  { short: '6pm', full: 'शाम 6:00 बजे' },
  { short: '8pm', full: 'शाम 8:00 बजे' },
  { short: '9pm', full: 'रात 9:00 बजे' },
];

export const SLEEPER_FEATURES = [
  'डेली बस सेवा उपलब्ध',
  'आरामदायक स्लीपर एवं पुशबैक सीट',
  'सुरक्षित एवं विश्वसनीय यात्रा',
  'परिवार सहित यात्रा के लिए उपयुक्त',
];

// Fare slabs are printed on the Kathgodam (Nainital) banner and apply to the
// daily sleeper coaches. Kept as a reference strip, not a per-route promise.
export const FARE_SLABS = [
  { label: 'Push Back Sitting', price: '₹1050+' },
  { label: 'Upper AC Sleeper', price: '₹1250+' },
  { label: 'Lower AC Sleeper', price: '₹1450+' },
];

export const DAILY_ROUTES = [
  {
    id: 'jaipur',
    name: 'जयपुर',
    place: '(गुलाबी नगरी)',
    sub: 'Lucknow & Kanpur to Jaipur',
    image: bannerJaipur,
    alt: 'लखनऊ और कानपुर से जयपुर (गुलाबी नगरी) AC Sleeper Bus — Ekadashi Tours daily bus service banner',
    intro: 'राजस्थान की शान, ऐतिहासिक धरोहरों और रंग-बिरंगी संस्कृति के शहर जयपुर की आरामदायक यात्रा अब आपके अपने EKADASHI TOUR\'S के साथ।',
    times: EVENING_TIMES,
    boarding: [LKO, KNP],
    highlights: ['हवा महल', 'सिटी पैलेस', 'आमेर किला', 'जल महल', 'जौहरी बाजार', 'अल्बर्ट हॉल संग्रहालय'],
    tagline: 'गुलाबी नगरी की शाही यात्रा',
    theme: 'heritage',
  },
  {
    id: 'delhi',
    name: 'नई दिल्ली',
    place: '(कश्मीरी गेट)',
    sub: 'Lucknow & Kanpur to New Delhi',
    image: bannerDelhi,
    alt: 'लखनऊ और कानपुर से नई दिल्ली कश्मीरी गेट AC Sleeper Bus — Ekadashi Tours daily bus service banner',
    intro: 'EKADASHI TOUR\'S के साथ अब लखनऊ और कानपुर से दिल्ली की आरामदायक एवं सुरक्षित यात्रा।',
    times: EVENING_TIMES,
    boarding: [LKO, KNP],
    highlights: ['लाल किला', 'जामा मस्जिद', 'इंडिया गेट', 'राष्ट्रपति भवन', 'अक्षरधाम मंदिर', 'चाँदनी चौक'],
    tagline: 'सुरक्षित एवं समयबद्ध यात्रा',
    theme: 'heritage',
  },
  {
    id: 'kainchi-dham',
    name: 'काठगोदाम',
    place: '(कैची धाम)',
    sub: 'Kanpur to Kainchi Dham',
    image: bannerKainchi,
    alt: 'कानपुर से काठगोदाम कैची धाम नीम करौली बाबा AC Sleeper Bus — Ekadashi Tours banner',
    intro: 'नीम करौली बाबा के पावन धाम के दर्शन का सुनहरा अवसर — EKADASHI TOUR\'S के साथ आरामदायक एवं सुरक्षित यात्रा।',
    times: EVENING_TIMES,
    boarding: [KNP],
    highlights: ['कैची धाम', 'नीम करौली बाबा आश्रम', 'काठगोदाम की सुंदर वादियाँ', 'प्राकृतिक सौंदर्य एवं आध्यात्मिक वातावरण'],
    tagline: 'नीम करौली बाबा की कृपा से आपकी यात्रा मंगलमय हो',
    theme: 'darshan',
  },
  {
    id: 'vrindavan',
    name: 'श्री वृंदावन',
    place: '(छटीकरा)',
    sub: 'Lucknow & Kanpur to Vrindavan',
    image: bannerVrindavan,
    alt: 'लखनऊ और कानपुर से श्री वृंदावन छटीकरा AC Sleeper Bus — Ekadashi Tours banner',
    intro: 'राधे-राधे की पावन नगरी वृंदावन के दिव्य दर्शन का शुभ अवसर — EKADASHI TOUR\'S के साथ आरामदायक एवं सुरक्षित यात्रा।',
    times: EVENING_TIMES,
    boarding: [LKO, KNP],
    highlights: ['बाँके बिहारी मंदिर', 'प्रेम मंदिर', 'इस्कॉन मंदिर', 'निधिवन', 'राधा रमण मंदिर', 'श्री रंगनाथ मंदिर'],
    tagline: 'राधे-राधे जपो, चले आएंगे बिहारी',
    theme: 'darshan',
  },
  {
    id: 'bageshwar-dham',
    name: 'बागेश्वर धाम सरकार',
    place: '(छतरपुर, म.प्र.)',
    sub: 'Lucknow & Kanpur to Bageshwar Dham',
    image: bannerBageshwar,
    alt: 'लखनऊ और कानपुर से बागेश्वर धाम सरकार छतरपुर AC Sleeper Bus — Ekadashi Tours banner',
    intro: 'बालाजी महाराज एवं बागेश्वर धाम सरकार के दिव्य दर्शन का सुनहरा अवसर — सुरक्षित, आरामदायक एवं श्रद्धामय यात्रा।',
    times: EVENING_TIMES,
    boarding: [LKO, KNP],
    highlights: ['बालाजी महाराज के दर्शन', 'दिव्य दरबार स्थल', 'आध्यात्मिक एवं भक्तिमय वातावरण', 'मनोकामना पूर्ति का पावन धाम'],
    tagline: 'बोलो बागेश्वर धाम सरकार की जय',
    theme: 'darshan',
  },
  {
    id: 'sanwariya-seth',
    name: 'साँवरिया सेठ',
    place: '(चित्तौड़गढ़)',
    sub: 'Lucknow & Kanpur to Sanwariya Seth',
    image: bannerSanwariya,
    alt: 'लखनऊ और कानपुर से साँवरिया सेठ चित्तौड़गढ़ AC Sleeper Bus — Ekadashi Tours banner',
    intro: 'राजस्थान के प्रसिद्ध साँवरिया सेठ जी के दिव्य दर्शन का सुनहरा अवसर — आरामदायक, सुरक्षित एवं श्रद्धामय यात्रा।',
    times: EVENING_TIMES,
    boarding: [LKO, KNP],
    highlights: ['मनोकामनाएँ पूर्ण करने वाले श्रीकृष्ण का पावन धाम', 'लाखों श्रद्धालुओं की आस्था का केंद्र', 'भक्ति, श्रद्धा और विश्वास का अद्भुत संगम'],
    tagline: 'जय श्री साँवरिया सेठ महाराज',
    theme: 'darshan',
  },
  {
    id: 'khatushyam',
    name: 'खाटूश्याम जी',
    place: '(रिंगस, सीकर)',
    sub: 'Lucknow & Kanpur to Khatu Shyam Ji',
    image: bannerKhatushyam,
    alt: 'लखनऊ और कानपुर से खाटूश्याम जी रिंगस सीकर AC Sleeper Bus — Ekadashi Tours banner',
    intro: 'हारे का सहारा, बाबा खाटू श्याम हमारा — EKADASHI TOUR\'S लेकर आया है श्रद्धालुओं के लिए आरामदायक एवं सुरक्षित यात्रा सेवा।',
    times: EVENING_TIMES,
    boarding: [LKO, KNP],
    highlights: ['खाटूश्याम जी मंदिर दर्शन', 'श्याम कुंड', 'रिंगस से खाटू पदयात्रा मार्ग', 'अनुभवी स्टाफ एवं भरोसेमंद सेवा'],
    tagline: 'हारे का सहारा, बाबा खाटू श्याम हमारा',
    theme: 'darshan',
    featured: true,
  },
  {
    id: 'mahakaleshwar',
    name: 'महाकालेश्वर',
    place: '(उज्जैन)',
    sub: 'Lucknow & Kanpur to Ujjain',
    image: bannerMahakaleshwar,
    alt: 'लखनऊ और कानपुर से महाकालेश्वर ज्योतिर्लिंग उज्जैन AC Sleeper Bus — Ekadashi Tours banner',
    intro: 'बाबा महाकाल की नगरी उज्जैन के दिव्य दर्शन का पावन अवसर — सुरक्षित, आरामदायक एवं भक्तिमय यात्रा।',
    times: EVENING_TIMES,
    boarding: [LKO, KNP],
    highlights: ['श्री महाकालेश्वर ज्योतिर्लिंग दर्शन', 'भस्म आरती का अद्भुत अनुभव', 'हरसिद्धि माता मंदिर', 'रामघाट एवं शिप्रा नदी', 'काल भैरव मंदिर'],
    tagline: 'जय श्री महाकाल — कालों के काल महाकाल',
    theme: 'darshan',
    featured: true,
  },
  {
    id: 'kathgodam-nainital',
    name: 'काठगोदाम',
    place: '(नैनीताल)',
    sub: 'Lucknow & Kanpur to Nainital',
    image: bannerNainital,
    alt: 'लखनऊ और कानपुर से काठगोदाम नैनीताल AC Sleeper Bus — Ekadashi Tours banner',
    intro: 'उत्तराखंड की खूबसूरत वादियों और देवभूमि की यात्रा अब EKADASHI TOUR\'S के साथ।',
    times: EVENING_TIMES,
    boarding: [LKO, KNP],
    highlights: ['नैनी झील', 'नैना देवी मंदिर', 'स्नो व्यू प्वाइंट', 'मॉल रोड', 'भीमताल एवं सातताल', 'उत्तराखंड की मनमोहक वादियाँ'],
    tagline: 'सुरक्षित यात्रा हमारी पहचान',
    theme: 'hills',
    fares: FARE_SLABS,
  },
];

export const WEEKLY_ROUTES = [
  {
    id: 'manona-dham',
    name: 'मनौना धाम',
    place: '(आँवला) बाँस-बरेली',
    sub: 'Manona Dham, Aonla — Bareilly',
    image: bannerManona,
    alt: 'लखनऊ और कानपुर से मनौना धाम आँवला बरेली AC Sitting Bus — Ekadashi Tours banner',
    intro: 'गुरुजी के आशीर्वाद से करें मनौना धाम की पावन यात्रा — यात्रा होगी यादगार, सेवा होगी शानदार।',
    busType: 'AC Luxury Sitting Bus',
    schedule: [
      { label: 'गुरुवार को प्रस्थान', kind: 'go' },
      { label: 'शुक्रवार को वापसी', kind: 'return' },
    ],
    boarding: [LKO, KNP],
    returnTo: 'वापसी में — कानपुर, लखनऊ',
    highlights: ['दिव्य दरबार', 'आध्यात्मिक वातावरण', 'भक्ति एवं श्रद्धा का अद्भुत संगम', 'गुरु कृपा एवं आशीर्वाद प्राप्त करने का अवसर'],
    features: ['आरामदायक पुशबैक सीटें', 'सुरक्षित एवं सुविधाजनक यात्रा', 'अनुभवी स्टाफ एवं बेहतर सेवा', 'परिवार सहित यात्रा के लिए उपयुक्त'],
    tagline: 'गुरुजी का आशीर्वाद, यात्रा होगी यादगार',
    theme: 'darshan',
  },
  {
    id: 'kanpur-dev-darshan',
    name: 'कानपुर देव दर्शन',
    place: '(10 प्राचीन मंदिर)',
    sub: 'Kanpur Local Temple Darshan',
    image: bannerDevDarshan,
    alt: 'कानपुर देव दर्शन — हर रविवार ₹499 में 10 प्राचीन मंदिरों की बस यात्रा — Ekadashi Tours banner',
    intro: 'कानपुर के प्राचीन एवं प्रसिद्ध मंदिरों की दिव्य यात्रा — सभी श्रद्धालुओं के लिए सुनहरा अवसर।',
    busType: 'AC Luxury Bus',
    price: '₹499',
    priceNote: 'प्रति व्यक्ति',
    schedule: [{ label: 'प्रत्येक रविवार', kind: 'go' }],
    boarding: [KNP],
    highlights: [
      'बाबा सिद्धनाथ धाम', 'माता वैष्णो देवी मंदिर', 'पनकी हनुमान मंदिर',
      'शोभन सरकार आश्रम', 'खैरेश्वर महादेव (शिवराजपुर)', 'साँई दरबार',
      'सुधांशु आश्रम', 'इस्कॉन मंदिर', 'जागेश्वर महादेव', 'कानपुर केदारनाथ',
    ],
    features: ['चाय-नाश्ता व्यवस्था', 'स्वादिष्ट भोजन व्यवस्था', 'शुद्ध पेयजल व्यवस्था', 'आरामदायक बस यात्रा'],
    tagline: 'आइए, कानपुर के पावन मंदिरों के दर्शन कर पुण्य लाभ प्राप्त करें',
    theme: 'darshan',
    featured: true,
  },
];

// Printed on every banner.
export const SERVICE_PROMISE = [
  'यह व्यवसाय नहीं, श्रद्धालुओं की सेवा है।',
  'जितना खर्च, उतना ही किराया !',
];

export const BOOKING_NOTE = 'बुकिंग यात्रा तिथि से 10 दिन पहले तक मान्य';
