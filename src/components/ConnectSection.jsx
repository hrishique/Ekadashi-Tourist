import React from 'react';
import { 
  MessageSquare, Instagram, Facebook, 
  MapPin, Phone, Mail, ExternalLink, 
  Star, Heart, ArrowUpRight, Users 
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { CONFIG } from '../config';

const SocialCard = ({ icon: Icon, title, subtitle, link, color, platform, stats }) => (
  <a 
    href={link} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="social-card"
    style={{
      textDecoration: 'none',
      display: 'flex',
      flexDirection: 'column',
      padding: '40px',
      borderRadius: '32px',
      backgroundColor: 'white',
      border: '1px solid var(--gray-100)',
      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      position: 'relative',
      overflow: 'hidden',
      height: '100%'
    }}
  >
    <div className="card-bg" style={{
      position: 'absolute',
      top: 0,
      right: 0,
      width: '120px',
      height: '120px',
      backgroundColor: color,
      opacity: 0.03,
      borderRadius: '0 0 0 100%',
      transition: 'all 0.4s ease'
    }}></div>
    
    <div style={{ 
      width: '64px', 
      height: '64px', 
      backgroundColor: `${color}15`, 
      borderRadius: '20px', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      marginBottom: '24px',
      color: color,
      transition: 'all 0.4s ease'
    }} className="icon-box">
      <Icon size={32} />
    </div>

    <div style={{ flex: 1 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
        <h3 style={{ fontSize: '1.5rem', margin: 0, color: 'var(--gray-900)' }}>{title}</h3>
        <ArrowUpRight size={18} color="var(--gray-300)" className="arrow-icon" />
      </div>
      <p style={{ color: 'var(--gray-500)', fontSize: '1rem', marginBottom: '20px' }}>{subtitle}</p>
    </div>

    {stats && (
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '12px', 
        paddingTop: '20px', 
        borderTop: '1px solid var(--gray-50)',
        fontSize: '0.875rem',
        fontWeight: 600,
        color: 'var(--gray-900)'
      }}>
        {stats}
      </div>
    )}

    <style>{`
      .social-card:hover {
        transform: translateY(-10px);
        border-color: ${color}40;
        box-shadow: 0 20px 40px ${color}15;
      }
      .social-card:hover .card-bg {
        transform: scale(3);
        opacity: 0.05;
      }
      .social-card:hover .icon-box {
        background-color: ${color};
        color: white;
        transform: rotate(-5deg) scale(1.1);
      }
      .social-card:hover .arrow-icon {
        color: ${color};
        transform: translate(3px, -3px);
      }
    `}</style>
  </a>
);

const ConnectSection = () => {
  const { t } = useTranslation();

  return (
    <section className="section" style={{ backgroundColor: 'var(--gray-50)', padding: '120px 0', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span style={{ 
            backgroundColor: 'var(--primary)15', 
            color: 'var(--primary)', 
            padding: '8px 20px', 
            borderRadius: '30px', 
            fontSize: '0.875rem', 
            fontWeight: 800, 
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            display: 'inline-block',
            marginBottom: '20px'
          }}>
            {t('connect.hub')}
          </span>
          <h2 style={{ fontSize: '3.5rem', marginBottom: '24px', letterSpacing: '-0.02em' }}>
            {t('connect.title')} <span style={{ color: 'var(--primary)' }}>{t('connect.everywhere')}</span>
          </h2>
          <p style={{ color: 'var(--gray-600)', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto' }}>
            {t('connect.subtitle')}
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '30px' 
        }}>
          <SocialCard 
            icon={MessageSquare}
            title="WhatsApp"
            subtitle={t('connect.whatsapp_sub')}
            link={`https://wa.me/${CONFIG.business.whatsapp}`}
            color="#25D366"
            stats={<><span style={{ color: '#25D366' }}>●</span> {t('connect.whatsapp_stats')}</>}
          />
          <SocialCard 
            icon={Instagram}
            title="Instagram"
            subtitle={t('connect.instagram_sub')}
            link={CONFIG.business.social.instagram}
            color="#E4405F"
            stats={<><Heart size={14} color="#E4405F" /> {t('connect.instagram_stats')}</>}
          />
          <SocialCard 
            icon={MapPin}
            title="Google My Business"
            subtitle={t('connect.google_sub')}
            link={CONFIG.business.social.gmb}
            color="#4285F4"
            stats={<><Star size={14} fill="#FBBC05" color="#FBBC05" /> {t('connect.google_stats')}</>}
          />
          <SocialCard 
            icon={Facebook}
            title="Facebook"
            subtitle={t('connect.facebook_sub')}
            link={CONFIG.business.social.facebook}
            color="#1877F2"
            stats={<><Users size={14} color="#1877F2" /> {t('connect.facebook_stats')}</>}
          />
        </div>

        {/* Quick Contact Bar */}
        <div style={{ 
          marginTop: '60px', 
          backgroundColor: 'var(--gray-900)', 
          borderRadius: '32px', 
          padding: '40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '30px'
        }}>
          <div>
            <h4 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '8px' }}>{t('connect.direct_conv')}</h4>
            <p style={{ color: 'var(--gray-400)', margin: 0 }}>{t('connect.experts')}</p>
          </div>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href={`tel:${CONFIG.business.phone}`} className="btn btn-primary" style={{ height: '56px', padding: '0 32px' }}>
              <Phone size={20} /> {t('connect.call_us')}
            </a>
            <a href={`mailto:${CONFIG.business.email}`} className="btn btn-secondary" style={{ height: '56px', padding: '0 32px', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', border: 'none' }}>
              <Mail size={20} /> {t('connect.email_team')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
