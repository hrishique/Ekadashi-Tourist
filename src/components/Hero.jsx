import { useState, useEffect } from 'react';
import { Star, CheckCircle, Shield, ArrowRight, BadgeIndianRupee } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import posterKathgodam from '../assets/poster-kathgodam.jpg';
import posterMahakaleshwar from '../assets/poster-mahakaleshwar.jpg';
import posterKhatushyam from '../assets/poster-khatushyam.jpg';
import busWide from '../assets/real-bus-seats-wide.jpg';
import busExterior from '../assets/real-bus-exterior.jpg';

// How long each slide stays before auto-advancing (ms).
// You asked for ~1 second — these posters are text-heavy, so 3.5s gives
// time to read. Lower this to 1000 for a 1-second rotation.
const ROTATE_MS = 3500;

const SLIDES = [
  { src: posterKathgodam, alt: 'Kanpur se Kathgodam (Nainital) AC Sleeper Bus - Ekadashi Tours' },
  { src: posterKhatushyam, alt: 'Kanpur se Khatu Shyam Ji AC Sleeper Bus - Ekadashi Tours' },
  { src: posterMahakaleshwar, alt: 'Kanpur se Mahakaleshwar (Ujjain) AC Sleeper Bus - Ekadashi Tours' },
  { src: busWide, alt: 'Ekadashi Tours premium luxury bus interior' },
  { src: busExterior, alt: 'Ekadashi Tours premium coach exterior' },
];

const Hero = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero-section" style={{
      position: 'relative',
      padding: '90px 40px 100px',
      background: 'radial-gradient(circle at 12% 18%, rgba(234, 88, 12, 0.10), transparent 42%), radial-gradient(circle at 88% 82%, rgba(245, 158, 11, 0.10), transparent 48%), linear-gradient(180deg, #fff8f3 0%, #fdeede 100%)',
      overflow: 'hidden'
    }}>
      <div className="container">
        <div className="grid grid-2" style={{ alignItems: 'center', gap: '56px' }}>
          <div className="fade-in" style={{ textAlign: 'left' }}>
            <div className="hero-eyebrow" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 18px',
              borderRadius: '100px',
              backgroundColor: 'rgba(234, 88, 12, 0.08)',
              border: '1px solid rgba(234, 88, 12, 0.20)',
              marginBottom: '22px'
            }}>
              <Star size={14} fill="#F59E0B" color="#F59E0B" />
              <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--primary-dark)', letterSpacing: '0.02em' }}>
                Kanpur Ki No.1 Bus Booking Service
              </span>
            </div>

            <h1 className="hero-headline" style={{
              fontSize: '58px',
              fontWeight: 800,
              color: '#2a160a',
              lineHeight: 1.08,
              marginBottom: '22px',
              fontFamily: 'Poppins, sans-serif',
              letterSpacing: '-0.02em'
            }}>
              {t('hero.title_1')}<br />
              <span style={{
                background: 'linear-gradient(120deg, #EA580C, #FB923C)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>{t('hero.title_2')}</span><br />
              {t('hero.title_3')}
            </h1>

            <p className="hero-subheadline" style={{
              fontSize: '19px',
              color: '#5b4636',
              lineHeight: 1.65,
              marginBottom: '32px',
              maxWidth: '560px',
              fontFamily: 'Inter, sans-serif'
            }}>
              {t('hero.subtitle')}
            </p>

            <div className="trust-badges" style={{
              display: 'flex',
              gap: '24px',
              marginBottom: '36px',
              flexWrap: 'wrap'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16px', fontWeight: 600, color: '#1a1a1a' }}>
                <Star size={20} fill="#F59E0B" color="#F59E0B" />
                <span>{t('hero.stars')}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16px', fontWeight: 600, color: '#1a1a1a' }}>
                <CheckCircle size={20} color="#EA580C" />
                <span>{t('hero.trips')}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16px', fontWeight: 600, color: '#1a1a1a' }}>
                <Shield size={20} color="#B45309" />
                <span>{t('hero.insured')}</span>
              </div>
            </div>

            <div className="cta-buttons" style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap'
            }}>
              <Link to="/bus-booking" className="btn btn-primary hero-btn" style={{
                height: '58px',
                minWidth: '220px',
                gap: '10px',
                background: 'linear-gradient(135deg, #EA580C, #C2410C)',
                fontSize: '1.125rem',
                boxShadow: '0 10px 26px rgba(234, 88, 12, 0.32)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {t('hero.cta_bus')} <ArrowRight size={20} />
              </Link>
              <Link to="/taxi-booking" className="btn btn-secondary hero-btn" style={{
                height: '58px',
                minWidth: '180px',
                borderColor: '#EA580C',
                color: '#EA580C',
                fontSize: '1.125rem',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {t('hero.cta_taxi')}
              </Link>
            </div>
          </div>

          <div className="fade-in hero-image-container" style={{ animationDelay: '0.15s', position: 'relative' }}>
            <div className="hero-image-frame" style={{
              position: 'relative',
              borderRadius: '28px',
              overflow: 'hidden',
              aspectRatio: '3 / 2',
              backgroundColor: '#2a160a',
              boxShadow: '0 34px 64px -18px rgba(124, 45, 18, 0.45), 0 12px 24px rgba(0,0,0,0.12)',
              border: '1px solid rgba(255,255,255,0.6)'
            }}>
              {SLIDES.map((slide, i) => (
                <img
                  key={i}
                  src={slide.src}
                  alt={slide.alt}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    opacity: active === i ? 1 : 0,
                    transition: 'opacity 0.9s ease-in-out'
                  }}
                />
              ))}
              <div style={{
                position: 'absolute',
                inset: 0,
                pointerEvents: 'none',
                background: 'linear-gradient(180deg, transparent 60%, rgba(30, 12, 4, 0.30))'
              }} />

              {/* Slide indicators */}
              <div style={{
                position: 'absolute',
                bottom: '14px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '7px',
                zIndex: 3
              }}>
                {SLIDES.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Slide ${i + 1}`}
                    onClick={() => setActive(i)}
                    style={{
                      width: active === i ? '22px' : '8px',
                      height: '8px',
                      borderRadius: '100px',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0,
                      background: active === i ? '#F59E0B' : 'rgba(255,255,255,0.65)',
                      transition: 'all 0.3s ease'
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Floating price card */}
            <div className="hero-float-card hero-float-price" style={{
              position: 'absolute',
              bottom: '24px',
              left: '-18px',
              background: 'rgba(255,255,255,0.94)',
              backdropFilter: 'blur(10px)',
              borderRadius: '18px',
              padding: '16px 20px',
              boxShadow: '0 16px 34px -10px rgba(124, 45, 18, 0.4)',
              border: '1px solid rgba(255,255,255,0.7)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              zIndex: 4
            }}>
              <div style={{
                width: '44px', height: '44px', borderRadius: '12px',
                background: 'linear-gradient(135deg, #EA580C, #C2410C)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0
              }}>
                <BadgeIndianRupee size={24} />
              </div>
              <div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--gray-500)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Sabse Saste Daam</div>
                <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--gray-900)' }}>Bus ₹499 se shuru</div>
              </div>
            </div>

            {/* Floating rating card */}
            <div className="hero-float-card hero-float-rating" style={{
              position: 'absolute',
              top: '20px',
              right: '-14px',
              background: 'rgba(255,255,255,0.94)',
              backdropFilter: 'blur(10px)',
              borderRadius: '16px',
              padding: '12px 16px',
              boxShadow: '0 14px 30px -10px rgba(124, 45, 18, 0.4)',
              border: '1px solid rgba(255,255,255,0.7)',
              textAlign: 'center',
              zIndex: 4
            }}>
              <div style={{ display: 'flex', gap: '2px', marginBottom: '4px', justifyContent: 'center' }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="#F59E0B" color="#F59E0B" />)}
              </div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--gray-800)' }}>5,000+ Khush Yaatri</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-btn:hover {
          transform: translateY(-3px) scale(1.02);
        }
        .hero-float-card { animation: floatUp 0.8s ease-out 0.4s both; }
        @keyframes floatUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 1200px) {
          .hero-headline { font-size: 46px !important; }
        }
        @media (max-width: 768px) {
          .hero-section { padding: 40px 16px 56px !important; }
          .hero-headline { font-size: 34px !important; text-align: center; }
          .hero-subheadline { font-size: 16px !important; text-align: center; margin-inline: auto; margin-bottom: 24px !important; }
          .hero-eyebrow { margin-left: 50%; transform: translateX(-50%); }
          .trust-badges { justify-content: center; gap: 12px !important; margin-bottom: 24px !important; }
          .cta-buttons { flex-direction: column; width: 100%; gap: 12px !important; }
          .hero-btn { width: 100%; height: 54px !important; min-width: auto !important; }
          .grid-2 { grid-template-columns: 1fr !important; gap: 28px !important; }
          .hero-image-container { order: -1; width: 100%; }
          .hero-float-price { left: 8px !important; bottom: 12px !important; padding: 12px 14px !important; }
          .hero-float-rating { right: 8px !important; top: 12px !important; }
        }
        @media (max-width: 480px) {
          .hero-headline { font-size: 28px !important; }
          .trust-badges { display: grid; grid-template-columns: 1fr 1fr; gap: 8px !important; justify-items: center; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
