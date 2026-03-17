import React from 'react';
import { Calculator, UserCheck, Wrench } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FeatureCard = ({ icon: Icon, title, description, color }) => (
  <div className="fade-in" style={{
    padding: '32px',
    borderRadius: '20px',
    backgroundColor: 'white',
    boxShadow: 'var(--shadow-md)',
    transition: 'var(--transition-normal)',
    border: '1px solid var(--gray-100)',
    textAlign: 'center'
  }}>
    <div style={{
      width: '64px',
      height: '64px',
      borderRadius: '16px',
      backgroundColor: `${color}15`,
      color: color,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 24px'
    }}>
      <Icon size={32} />
    </div>
    <h3 style={{ marginBottom: '16px', fontSize: '1.25rem' }}>{title}</h3>
    <p style={{ color: 'var(--gray-600)', fontSize: '1rem' }}>{description}</p>
  </div>
);

const WhyChooseUs = () => {
  const { t } = useTranslation();

  return (
    <section id="services" className="section" style={{ backgroundColor: 'var(--white)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{t('why_us.title')}</h2>
          <p style={{ color: 'var(--gray-600)', maxWidth: '600px', margin: '0 auto' }}>
            {t('why_us.subtitle')}
          </p>
        </div>

        <div className="grid grid-3">
          <FeatureCard 
            icon={Calculator} 
            title={t('why_us.feature1_title')}
            description={t('why_us.feature1_desc')}
            color="var(--primary)"
          />
          <FeatureCard 
            icon={UserCheck} 
            title={t('why_us.feature2_title')}
            description={t('why_us.feature2_desc')}
            color="var(--secondary)"
          />
          <FeatureCard 
            icon={Wrench} 
            title={t('why_us.feature3_title')}
            description={t('why_us.feature3_desc')}
            color="var(--accent)"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
