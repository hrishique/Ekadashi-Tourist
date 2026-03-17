import React from 'react';
import { useTranslation } from 'react-i18next';
import { Clock, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { CONFIG } from '../config';

// Images
import manaliImg from '../assets/manali.png';
import varanasiImg from '../assets/varanasi.png';
import jaipurImg from '../assets/jaipur.png';
import chardhamImg from '../assets/chardham.png';
import nepalImg from '../assets/nepal.png';
import goaImg from '../assets/goa.png';

const TourPackages = () => {
  const { t } = useTranslation();

  const simplePackages = [
    { titleKey: 'manali_title', descKey: 'manali_desc', img: manaliImg, location: 'Himachal Pradesh' },
    { titleKey: 'varanasi_title', descKey: 'varanasi_desc', img: varanasiImg, location: 'Uttar Pradesh' },
    { titleKey: 'jaipur_title', descKey: 'jaipur_desc', img: jaipurImg, location: 'Rajasthan' },
    { titleKey: 'goa_title', descKey: 'goa_desc', img: goaImg, location: 'Goa' },
  ];

  const fullPackages = [
    { 
      titleKey: 'chardham_title', 
      descKey: 'chardham_desc', 
      img: chardhamImg, 
      duration: '10', 
      price: '₹1,40,000',
      tag: 'Most Popular Pilgrimage'
    },
    { 
      titleKey: 'nepal_title', 
      descKey: 'nepal_desc', 
      img: nepalImg, 
      duration: '6', 
      price: '₹75,000',
      tag: 'International Expedition'
    }
  ];

  const handleBookNow = (title) => {
    const message = `Namaste! I am interested in booking the ${title} tour package with Ekadashi Tourist Family. Please provide more details.`;
    window.location.href = `https://wa.me/${CONFIG.business.whatsapp}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="tours" className="section" style={{ backgroundColor: '#f9fafb' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px', color: 'var(--gray-900)' }}>{t('tours.title')}</h2>
          <p style={{ color: 'var(--gray-600)', fontSize: '1.125rem', maxWidth: '700px', margin: '0 auto' }}>{t('tours.subtitle')}</p>
        </div>

        {/* Simple Packages Grid */}
        <div className="tour-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '30px',
          marginBottom: '100px'
        }}>
          {simplePackages.map((pkg, idx) => (
            <div key={idx} className="tour-card" style={{ 
              backgroundColor: 'white', 
              borderRadius: '24px', 
              overflow: 'hidden', 
              boxShadow: 'var(--shadow-md)',
              transition: 'all 0.3s ease',
              border: '1px solid var(--gray-100)'
            }}>
              <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                <img src={pkg.img} alt={t(`tours.${pkg.titleKey}`)} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: '20px', left: '20px', backgroundColor: 'rgba(255,255,255,0.9)', padding: '6px 12px', borderRadius: '100px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8125rem', fontWeight: 600 }}>
                  <MapPin size={14} color="var(--primary)" /> {pkg.location}
                </div>
              </div>
              <div style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>{t(`tours.${pkg.titleKey}`)}</h3>
                <p style={{ color: 'var(--gray-500)', fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: '24px', height: '4.8em', overflow: 'hidden' }}>
                  {t(`tours.${pkg.descKey}`)}
                </p>
                <button 
                  onClick={() => handleBookNow(t(`tours.${pkg.titleKey}`))}
                  className="btn-wa-tour"
                  style={{ 
                    width: '100%', 
                    backgroundColor: '#25D336', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '12px', 
                    padding: '12px', 
                    fontWeight: 700, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    gap: '8px', 
                    cursor: 'pointer' 
                  }}
                >
                  <Send size={18} /> {t('tours.book_wa')}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Full Packages Section */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div style={{ display: 'inline-block', padding: '8px 20px', backgroundColor: 'rgba(34, 197, 94, 0.1)', color: 'var(--primary)', borderRadius: '100px', fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
            Full Inclusions • Fixed Pricing
          </div>
          <h2 style={{ fontSize: '2.25rem', marginBottom: '16px' }}>{t('tours.full_package_title')}</h2>
          <p style={{ color: 'var(--gray-600)', maxWidth: '600px', margin: '0 auto' }}>{t('tours.full_package_subtitle')}</p>
        </div>

        <div className="full-tour-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', 
          gap: '40px' 
        }}>
          {fullPackages.map((pkg, idx) => (
            <div key={idx} className="full-tour-card" style={{ 
              display: 'flex', 
              backgroundColor: 'white', 
              borderRadius: '32px', 
              overflow: 'hidden', 
              boxShadow: 'var(--shadow-lg)',
              border: '1px solid var(--gray-100)'
            }}>
              <div style={{ width: '40%', position: 'relative' }}>
                <img src={pkg.img} alt={t(`tours.${pkg.titleKey}`)} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: '20px', left: '20px', backgroundColor: 'var(--primary)', color: 'white', padding: '6px 14px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 700 }}>
                  {pkg.tag}
                </div>
              </div>
              <div style={{ width: '60%', padding: '32px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <h3 style={{ fontSize: '1.5rem', margin: 0 }}>{t(`tours.${pkg.titleKey}`)}</h3>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--gray-400)', textTransform: 'uppercase', fontWeight: 700 }}>{t('tours.from')}</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)' }}>{pkg.price}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--gray-600)', fontSize: '0.875rem' }}>
                    <Clock size={16} /> {pkg.duration} {t('tours.days')}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--gray-600)', fontSize: '0.875rem' }}>
                    <CheckCircle2 size={16} color="#25D336" /> All Inclusive
                  </div>
                </div>

                <p style={{ color: 'var(--gray-500)', fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: '24px', flex: 1 }}>
                  {t(`tours.${pkg.descKey}`)}
                </p>

                <button 
                  onClick={() => handleBookNow(t(`tours.${pkg.titleKey}`))}
                  className="btn btn-primary" 
                  style={{ width: '100%', borderRadius: '14px', height: '52px' }}
                >
                  {t('common.book_now')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .tour-card:hover {
          transform: translateY(-10px);
          box-shadow: var(--shadow-xl);
          border-color: var(--primary-light);
        }
        .btn-wa-tour:hover {
          background-color: #1ebe2d !important;
          transform: scale(1.02);
        }
        .full-tour-card {
          transition: transform 0.3s ease;
        }
        .full-tour-card:hover {
          transform: scale(1.01);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        @media (max-width: 768px) {
          .full-tour-card { flex-direction: column; }
          .full-tour-card > div { width: 100% !important; }
          .full-tour-card img { height: 200px; }
          .full-tour-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default TourPackages;
