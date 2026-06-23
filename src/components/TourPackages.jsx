import React from 'react';
import { useTranslation } from 'react-i18next';
import { Clock, Send, Landmark, Mountain, RouteIcon, MapPin, Repeat } from 'lucide-react';
import { CONFIG } from '../config';

// Real yatra packages run by Ekadashi Tours from Kanpur.
// `days` is only set where a fixed duration is known; one-way/return darshan
// trips show a "Return Trip" tag instead. Prices are only shown where fixed.
const YATRAS = [
  { name: 'कानपुर देव दर्शन यात्रा', sub: 'Kanpur Local Darshan', Icon: Landmark, tag: 'darshan' },
  { name: 'कानपुर ⟷ खाटूश्याम जी', sub: 'Khatu Shyam Ji • Return', Icon: Repeat, tag: 'return' },
  { name: 'कानपुर ⟷ महाकालेश्वर (उज्जैन)', sub: 'Mahakaleshwar, Ujjain • Return', Icon: Repeat, tag: 'return' },
  { name: 'कानपुर ⟷ काठगोदाम (नैनीताल)', sub: 'Kathgodam / Nainital • Return', Icon: Mountain, tag: 'return' },
  { name: 'कानपुर ⟷ दिल्ली', sub: 'Delhi • Return', Icon: Repeat, tag: 'return' },
  { name: 'अयोध्या • बनारस • प्रयागराज', sub: 'Triveni Teerth Yatra', Icon: Landmark, days: 3 },
  { name: 'खाटूश्याम • सालासर • मेहंदीपुर', sub: 'Shyam–Balaji Yatra', Icon: Landmark, days: 3 },
  { name: 'महाकालेश्वर • ओंकारेश्वर • सीहोर', sub: 'Jyotirlinga Darshan', Icon: Landmark, days: 3 },
  { name: '7 ज्योतिर्लिंग यात्रा', sub: 'Saat Jyotirlinga Yatra', Icon: Landmark, days: 12, featured: true },
  { name: 'कामाख्या देवी • काठमांडू (नेपाल)', sub: 'Kamakhya + Nepal Yatra', Icon: Mountain, days: 12, price: '₹75,000 se suru', featured: true },
  { name: 'अमरनाथ यात्रा', sub: 'Baba Barfani Darshan', Icon: Mountain, days: 12 },
  { name: 'कन्याकुमारी • रामेश्वरम • जगन्नाथ पुरी', sub: 'Dakshin Bharat Yatra', Icon: RouteIcon, days: 14, featured: true },
  { name: 'चार धाम यात्रा', sub: 'Uttarakhand Char Dham', Icon: Mountain, tag: 'darshan' },
];

const TourPackages = () => {
  const { t } = useTranslation();

  const handleBookNow = (yatraName) => {
    const message = `Namaste! Main "${yatraName}" yatra ke baare mein jaankari aur booking chahta/chahti hoon. Kripya details bhejein. (Ekadashi Tours)`;
    window.location.href = `https://wa.me/${CONFIG.business.whatsapp}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="tours" className="section" style={{ background: 'linear-gradient(180deg, #fff8f3 0%, #fdeede 100%)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '8px 20px', backgroundColor: 'rgba(234, 88, 12, 0.10)',
            color: 'var(--primary-dark)', borderRadius: '100px',
            fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.05em', marginBottom: '18px'
          }}>
            <MapPin size={15} /> Kanpur • Unnao • Lucknow
          </div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px', color: 'var(--gray-900)' }}>{t('tours.title')}</h2>
          <p style={{ color: 'var(--gray-600)', fontSize: '1.125rem', maxWidth: '720px', margin: '0 auto' }}>{t('tours.subtitle')}</p>
        </div>

        <div className="yatra-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '24px'
        }}>
          {YATRAS.map((y, idx) => {
            const Icon = y.Icon;
            return (
              <div key={idx} className="yatra-card" style={{
                position: 'relative',
                backgroundColor: 'white',
                borderRadius: '22px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
                border: y.featured ? '2px solid var(--primary)' : '1px solid var(--gray-100)',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
              }}>
                {/* Gradient header strip */}
                <div style={{
                  position: 'relative',
                  padding: '22px 22px 18px',
                  background: y.featured
                    ? 'linear-gradient(135deg, #EA580C, #C2410C)'
                    : 'linear-gradient(135deg, #FB923C, #EA580C)',
                  color: 'white'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                    <div style={{
                      width: '46px', height: '46px', borderRadius: '13px',
                      background: 'rgba(255,255,255,0.18)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      backdropFilter: 'blur(4px)'
                    }}>
                      <Icon size={24} color="white" />
                    </div>
                    <div style={{
                      display: 'inline-flex', alignItems: 'center', gap: '5px',
                      background: 'rgba(255,255,255,0.20)',
                      padding: '5px 11px', borderRadius: '100px',
                      fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.02em'
                    }}>
                      {y.days
                        ? <><Clock size={12} /> {y.days} {t('tours.days')}</>
                        : y.tag === 'return'
                          ? <><Repeat size={12} /> Return Trip</>
                          : <><Landmark size={12} /> Darshan</>}
                    </div>
                  </div>
                  <h3 style={{
                    fontSize: '1.18rem', color: 'white', margin: 0, lineHeight: 1.3,
                    fontFamily: 'Poppins, sans-serif'
                  }}>{y.name}</h3>
                </div>

                {/* Body */}
                <div style={{ padding: '18px 22px 22px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <p style={{ color: 'var(--gray-500)', fontSize: '0.875rem', fontWeight: 600, margin: '0 0 14px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    {y.sub}
                  </p>

                  {y.price ? (
                    <div style={{ marginBottom: '16px' }}>
                      <span style={{ fontSize: '0.72rem', color: 'var(--gray-400)', textTransform: 'uppercase', fontWeight: 700 }}>{t('tours.from')}</span>
                      <div style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--primary)' }}>{y.price}</div>
                    </div>
                  ) : (
                    <p style={{ color: 'var(--gray-400)', fontSize: '0.8125rem', marginBottom: '16px' }}>
                      AC Luxury Bus • Experienced Driver
                    </p>
                  )}

                  <button
                    onClick={() => handleBookNow(y.name)}
                    className="btn-wa-yatra"
                    style={{
                      marginTop: 'auto',
                      width: '100%',
                      backgroundColor: '#25D366',
                      color: 'white',
                      border: 'none',
                      borderRadius: '12px',
                      padding: '12px',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      cursor: 'pointer',
                      fontFamily: 'Inter, sans-serif',
                      transition: 'all 0.2s'
                    }}
                  >
                    <Send size={17} /> {t('tours.book_wa')}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .yatra-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-xl);
          border-color: var(--primary-light);
        }
        .btn-wa-yatra:hover {
          background-color: #1ebe57 !important;
          transform: scale(1.02);
        }
        @media (max-width: 600px) {
          .yatra-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default TourPackages;
