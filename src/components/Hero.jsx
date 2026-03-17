import { Star, CheckCircle, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import heroImage from '../assets/kanpur_hero.png';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero-section" style={{
      position: 'relative',
      padding: '80px 40px',
      backgroundColor: '#f5f5f5',
      overflow: 'hidden'
    }}>
      <div className="container">
        <div className="grid grid-2" style={{ alignItems: 'center', gap: '40px' }}>
          <div className="fade-in" style={{ textAlign: 'left' }}>
            <h1 className="hero-headline" style={{ 
              fontSize: '56px', 
              fontWeight: 700, 
              color: '#1a1a1a', 
              lineHeight: 1.1, 
              marginBottom: '24px',
              fontFamily: 'Poppins, sans-serif'
            }}>
              {t('hero.title_1')}<br />
              <span style={{ color: '#2E7D32' }}>{t('hero.title_2')}</span><br />
              {t('hero.title_3')}
            </h1>
            
            <p className="hero-subheadline" style={{ 
              fontSize: '20px', 
              color: '#444', 
              lineHeight: 1.6, 
              marginBottom: '32px', 
              maxWidth: '600px',
              fontFamily: 'Inter, sans-serif'
            }}>
              {t('hero.subtitle')}
            </p>

            <div className="trust-badges" style={{ 
              display: 'flex', 
              gap: '24px', 
              marginBottom: '32px',
              flexWrap: 'wrap'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16px', fontWeight: 500, color: '#1a1a1a' }}>
                <Star size={20} fill="#FF9800" color="#FF9800" />
                <span>{t('hero.stars')}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16px', fontWeight: 500, color: '#1a1a1a' }}>
                <CheckCircle size={20} color="#2E7D32" />
                <span>{t('hero.trips')}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16px', fontWeight: 500, color: '#1a1a1a' }}>
                <Shield size={20} color="#2196F3" />
                <span>{t('hero.insured')}</span>
              </div>
            </div>

            <div className="cta-buttons" style={{ 
              display: 'flex', 
              gap: '16px', 
              flexWrap: 'wrap' 
            }}>
              <Link to="/taxi-booking" className="btn btn-primary hero-btn" style={{ 
                height: '56px', 
                minWidth: '200px', 
                backgroundColor: '#2E7D32',
                fontSize: '1.125rem',
                boxShadow: '0 4px 6px rgba(46, 125, 50, 0.2)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {t('hero.cta_taxi')}
              </Link>
              <Link to="/bus-booking" className="btn btn-secondary hero-btn" style={{ 
                height: '56px', 
                minWidth: '200px', 
                borderColor: '#2E7D32',
                color: '#2E7D32',
                fontSize: '1.125rem',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {t('hero.cta_bus')}
              </Link>
            </div>
          </div>

          <div className="fade-in hero-image-container" style={{ animationDelay: '0.2s' }}>
            <div style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-xl)',
              transform: 'perspective(1000px)'
            }}>
              <img src={heroImage} alt="Premium Travel Vehicle" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 12px rgba(0,0,0,0.15);
        }
        @media (max-width: 1200px) {
          .hero-headline { fontSize: 44px !important; }
        }
        @media (max-width: 768px) {
          .hero-section { padding: 40px 16px !important; }
          .hero-headline { fontSize: 32px !important; text-align: center; }
          .hero-subheadline { fontSize: 16px !important; text-align: center; margin-inline: auto; margin-bottom: 24px !important; }
          .trust-badges { justify-content: center; gap: 12px !important; margin-bottom: 24px !important; }
          .cta-buttons { flex-direction: column; width: 100%; gap: 12px !important; }
          .hero-btn { width: 100%; height: 52px !important; min-width: auto !important; }
          .grid-2 { grid-template-columns: 1fr !important; gap: 24px !important; }
          .hero-image-container { order: -1; width: 100%; }
        }
        @media (max-width: 480px) {
          .hero-headline { fontSize: 28px !important; }
          .trust-badges { display: grid; grid-template-columns: 1fr 1fr; gap: 8px !important; justify-items: center; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
