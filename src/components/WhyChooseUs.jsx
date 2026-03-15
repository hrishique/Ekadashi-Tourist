import React from 'react';
import { Calculator, UserCheck, Wrench } from 'lucide-react';

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
  return (
    <section id="services" className="section" style={{ backgroundColor: 'var(--white)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Why Choose Us</h2>
          <p style={{ color: 'var(--gray-600)', maxWidth: '600px', margin: '0 auto' }}>
            We've built our reputation on trust, safety, and transparency. Here's why 5,000+ travelers chose Ekadashi Tourist Family.
          </p>
        </div>

        <div className="grid grid-3">
          <FeatureCard 
            icon={Calculator} 
            title="Transparent Pricing" 
            description="No Hidden Charges. See the complete breakdown before you book. What you see is what you pay. No surprises at the end."
            color="var(--primary)"
          />
          <FeatureCard 
            icon={UserCheck} 
            title="Professional Drivers" 
            description="Verified & Trained. 8+ years of experience. Background checked. 24/7 support. Your safety is our priority."
            color="var(--secondary)"
          />
          <FeatureCard 
            icon={Wrench} 
            title="Safe & Certified Fleet" 
            description="Regular servicing. Full insurance. GPS tracking. Emergency support included in all our vehicles."
            color="var(--accent)"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
