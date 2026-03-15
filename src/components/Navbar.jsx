import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const Navbar = () => {
  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--gray-200)',
      padding: '1rem 0'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            backgroundColor: 'var(--primary)',
            color: 'white',
            width: '40px',
            height: '40px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: '1.25rem'
          }}>H</div>
          <div>
            <h1 style={{ fontSize: '1.25rem', margin: 0 }}>Hello Kanpur Travels</h1>
            <p style={{ fontSize: '0.75rem', color: 'var(--gray-600)', margin: 0 }}>Premium Rental Services</p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <div className="desktop-only" style={{ display: 'flex', gap: '24px' }}>
            <a href="#services" style={{ fontWeight: 500 }}>Services</a>
            <a href="#vehicles" style={{ fontWeight: 500 }}>Vehicles</a>
            <a href="#testimonials" style={{ fontWeight: 500 }}>Reviews</a>
            <a href="#faq" style={{ fontWeight: 500 }}>FAQ</a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a href="tel:+919876543210" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem', gap: '8px' }}>
              <Phone size={16} />
              <span>Call Us</span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-only { display: none; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
