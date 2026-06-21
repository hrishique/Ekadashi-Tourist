import { Star, CheckCircle, Shield, ArrowRight, BadgeIndianRupee } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import heroImage from '../assets/real-bus-seats-wide.jpg';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero-section" style={{
      position: 'relative',
      padding: '90px 40px 100px',
      background: 'radial-gradient(circle at 12% 18%, rgba(46, 125, 50, 0.10), transparent 42%), radial-gradient(circle at 88% 82%, rgba(255, 152, 0, 0.08), transparent 48%), linear-gradient(180deg, #f7f8f6 0%, #eef2ec 100%)',
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
              backgroundColor: 'rgba(46, 125, 50, 0.08)',
              border: '1px solid rgba(46, 125, 50, 0.18)',
              marginBottom: '22px'
            }}>
              <Star size={14} fill="#FF9800" color="#FF9800" />
              <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--primary-dark)', letterSpacing: '0.02em' }}>
                Kanpur Ki No.1 Bus Booking Service
              </span>
            </div>

            <h1 className="hero-headline" style={{
              fontSize: '58px',
              fontWeight: 800,
              color: '#15201a',
              lineHeight: 1.08,
              marginBottom: '22px',
              fontFamily: 'Poppins, sans-serif',
              letterSpacing: '-0.02em'
            }}>
              {t('hero.title_1')}<br />
              <span style={{
                background: 'linear-gradient(120deg, #2E7D32, #43A047)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>{t('hero.title_2')}</span><br />
              {t('hero.title_3')}
            </h1>

            <p className="hero-subheadline" style={{
              fontSize: '19px',
              color: '#475247',
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
                <Star size={20} fill="#FF9800" color="#FF9800" />
                <span>{t('hero.stars')}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16px', fontWeight: 600, color: '#1a1a1a' }}>
                <CheckCircle size={20} color="#2E7D32" />
                <span>{t('hero.trips')}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16px', fontWeight: 600, color: '#1a1a1a' }}>
                <Shield size={20} color="#2196F3" />
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
                background: 'linear-gradient(135deg, #2E7D32, #1B5E20)',
                fontSize: '1.125rem',
                boxShadow: '0 10px 26px rgba(46, 125, 50, 0.32)',
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
                borderColor: '#2E7D32',
                color: '#2E7D32',
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
              boxShadow: '0 34px 64px -18px rgba(21, 64, 30, 0.45), 0 12px 24px rgba(0,0,0,0.12)',
              border: '1px solid rgba(255,255,255,0.6)'
            }}>
              <img src={heroImage} alt="Ekadashi Tours premium luxury bus interior" style={{ width: '100%', height: '480px', objectFit: 'cover', display: 'block' }} />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, transparent 55%, rgba(10, 25, 15, 0.35))'
              }} />
            </div>

            {/* Floating price card */}
            <div className="hero-float-card hero-float-price" style={{
              position: 'absolute',
              bottom: '24px',
              left: '-18px',
              background: 'rgba(255,255,255,0.92)',
              backdropFilter: 'blur(10px)',
              borderRadius: '18px',
              padding: '16px 20px',
              boxShadow: '0 16px 34px -10px rgba(21, 64, 30, 0.4)',
              border: '1px solid rgba(255,255,255,0.7)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <div style={{
                width: '44px', height: '44px', borderRadius: '12px',
                background: 'linear-gradient(135deg, #2E7D32, #1B5E20)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0
              }}>
                <BadgeIndianRupee size={24} />
              </div>
              <div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--gray-500)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Sabse Saste Daam</div>
                <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--gray-900)' }}>Bus ₹45/km se shuru</div>
              </div>
            </div>

            {/* Floating rating card */}
            <div className="hero-float-card hero-float-rating" style={{
              position: 'absolute',
              top: '20px',
              right: '-14px',
              background: 'rgba(255,255,255,0.92)',
              backdropFilter: 'blur(10px)',
              borderRadius: '16px',
              padding: '12px 16px',
              boxShadow: '0 14px 30px -10px rgba(21, 64, 30, 0.4)',
              border: '1px solid rgba(255,255,255,0.7)',
              textAlign: 'center'
            }}>
              <div style={{ display: 'flex', gap: '2px', marginBottom: '4px', justifyContent: 'center' }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="#FFD700" color="#FFD700" />)}
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
          .hero-image-frame img { height: 320px !important; }
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
