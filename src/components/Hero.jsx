import React from 'react';
import { Star, Shield, CheckCircle } from 'lucide-react';
import heroImage from '../assets/kanpur_hero.png';

const Hero = () => {
  return (
    <section className="hero-section" style={{
      position: 'relative',
      padding: '80px 0',
      overflow: 'hidden',
      backgroundColor: 'var(--gray-50)'
    }}>
      <div className="container">
        <div className="grid grid-2" style={{ alignItems: 'center' }}>
          <div className="fade-in">
            <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary)' }}>
                <Star size={16} fill="var(--primary)" />
                <span>4.7/5 Stars</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.875rem', fontWeight: 600, color: 'var(--secondary)' }}>
                <CheckCircle size={16} fill="var(--secondary)" />
                <span>2,000+ Trips</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.875rem', fontWeight: 600, color: 'var(--accent)' }}>
                <Shield size={16} fill="var(--accent)" />
                <span>Fully Insured</span>
              </div>
            </div>

            <h1 style={{ fontSize: '3.5rem', lineHeight: 1.1, marginBottom: '24px' }}>
              Premium Travel. <span style={{ color: 'var(--primary)' }}>Transparent Pricing.</span> Book in 5 Minutes.
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--gray-600)', marginBottom: '40px', maxWidth: '540px' }}>
              5,000+ Happy Customers trust us for safe, comfortable journeys across India. No hidden charges, verified drivers, and 24/7 support.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="#booking" className="btn btn-primary btn-large">Book Your Trip</a>
              <a href="#calculator" className="btn btn-secondary btn-large">Calculate Price</a>
            </div>
          </div>

          <div className="fade-in" style={{ animationDelay: '0.2s' }}>
            <div style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-xl)',
              transform: 'perspective(1000px) rotateY(-5deg)'
            }}>
              <img src={heroImage} alt="Premium Luxury Car in Kanpur" style={{ width: '100%', height: 'auto' }} />
              <div style={{
                position: 'absolute',
                bottom: '24px',
                right: '24px',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(4px)',
                padding: '12px 20px',
                borderRadius: '12px',
                boxShadow: 'var(--shadow-lg)'
              }}>
                <p style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--gray-900)' }}>Luxury Fleet</p>
                <p style={{ fontSize: '0.75rem', color: 'var(--gray-600)' }}>14-seaters, Tempo, Premium Cars</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .hero-section h1 { font-size: 2.5rem !important; }
        }
        @media (max-width: 768px) {
          .hero-section { padding: 40px 0 !important; }
          .hero-section h1 { font-size: 2rem !important; }
          .hero-section .grid { gap: 40px !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
