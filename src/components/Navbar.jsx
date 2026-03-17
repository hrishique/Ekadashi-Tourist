import React, { useState } from 'react';
import { Phone, Menu, X, Languages } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CONFIG } from '../config';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'hi' : 'en';
    i18n.changeLanguage(newLang);
  };

  const currentLang = i18n.language === 'hi' ? 'HI' : 'EN';

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--gray-200)',
      padding: '0.75rem 0'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: 'inherit' }}>
          <div style={{
            backgroundColor: 'var(--primary)',
            color: 'white',
            width: '36px',
            height: '36px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: '1.125rem'
          }}>E</div>
          <div>
            <h1 style={{ fontSize: '1.125rem', margin: 0, fontWeight: 700, letterSpacing: '-0.02em' }}>Ekadashi Tourist Family</h1>
            <p style={{ fontSize: '0.6875rem', color: 'var(--gray-600)', margin: 0 }}>{t('nav.premium_rental')}</p>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link to="/" className="nav-link">{t('nav.home')}</Link>
            <Link to="/taxi-booking" className="nav-link">{t('nav.taxi')}</Link>
            <Link to="/bus-booking" className="nav-link">{t('nav.buses')}</Link>
            <a href="/#tours" className="nav-link">{t('nav.tours')}</a>
            <Link to="/about" className="nav-link">{t('nav.about')}</Link>
            <Link to="/contact" className="nav-link">{t('nav.contact')}</Link>
          </div>
          
          <button 
            onClick={toggleLanguage}
            className="lang-toggle"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: '100px',
              border: '1px solid var(--gray-200)',
              backgroundColor: 'white',
              cursor: 'pointer',
              fontSize: '0.8125rem',
              fontWeight: 600,
              color: 'var(--gray-700)',
              transition: 'all 0.2s'
            }}
          >
            <Languages size={14} />
            <span>{currentLang === 'EN' ? 'HINDI' : 'ENGLISH'}</span>
          </button>

          <a href={`tel:${CONFIG.business.phone}`} className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem', gap: '8px', borderRadius: '100px' }}>
            <Phone size={16} />
            <span>{t('nav.call_us')}</span>
          </a>
        </div>

        {/* Mobile Toggle Group */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button 
            onClick={toggleLanguage}
            className="mobile-lang-toggle"
            style={{
              display: 'none',
              padding: '6px 10px',
              borderRadius: '8px',
              border: '1px solid var(--gray-200)',
              backgroundColor: 'white',
              cursor: 'pointer',
              fontSize: '0.75rem',
              fontWeight: 700,
              color: 'var(--primary)'
            }}
          >
            {currentLang === 'EN' ? 'हिन्दी' : 'EN'}
          </button>
          
          <button 
            className="mobile-toggle" 
            onClick={toggleMenu}
            style={{ 
              display: 'none', 
              background: 'none', 
              border: 'none', 
              color: 'var(--gray-900)', 
              cursor: 'pointer',
              padding: '8px'
            }}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`} style={{
        position: 'fixed',
        top: '64px',
        left: 0,
        width: '100%',
        backgroundColor: 'white',
        padding: '2rem',
        borderBottom: '1px solid var(--gray-200)',
        display: 'none',
        flexDirection: 'column',
        gap: '1.5rem',
        zIndex: 999,
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        opacity: 0,
        transform: 'translateY(-10px)',
        pointerEvents: 'none'
      }}>
        <Link to="/" onClick={toggleMenu} className="mobile-nav-link">{t('nav.home')}</Link>
        <Link to="/taxi-booking" onClick={toggleMenu} className="mobile-nav-link">{t('nav.taxi')}</Link>
        <Link to="/bus-booking" onClick={toggleMenu} className="mobile-nav-link">{t('nav.buses')}</Link>
        <a href="/#tours" onClick={toggleMenu} className="mobile-nav-link">{t('nav.tours')}</a>
        <Link to="/about" onClick={toggleMenu} className="mobile-nav-link">{t('nav.about')}</Link>
        <Link to="/contact" onClick={toggleMenu} className="mobile-nav-link">{t('nav.contact')}</Link>
        <a href={`tel:${CONFIG.business.phone}`} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', gap: '10px', height: '52px' }}>
          <Phone size={20} />
          <span>{t('nav.call_us')}</span>
        </a>
      </div>

      <style>{`
        .nav-link {
          font-weight: 500;
          text-decoration: none;
          color: var(--gray-700);
          transition: color 0.2s;
          font-size: 0.9375rem;
        }
        .nav-link:hover { color: var(--primary); }
        
        .lang-toggle:hover {
          background-color: var(--gray-50) !important;
          border-color: var(--primary) !important;
          color: var(--primary) !important;
        }

        .mobile-nav-link {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--gray-900);
          text-decoration: none;
          padding: 0.5rem 0;
          border-bottom: 1px solid var(--gray-50);
        }

        @media (max-width: 991px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
          .mobile-lang-toggle { display: block !important; }
          .mobile-menu { display: flex !important; }
          .mobile-menu.open {
            opacity: 1 !important;
            transform: translateY(0) !important;
            pointer-events: all !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
