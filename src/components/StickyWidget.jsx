import React, { useState } from 'react';
import { MessageCircle, Phone, Calculator, X, MessageSquare, ChevronUp } from 'lucide-react';
import { CONFIG } from '../config';

const StickyWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky-widget" style={{ 
      position: 'fixed', 
      bottom: '30px', 
      right: '30px', 
      zIndex: 3000,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: '12px'
    }}>
      {/* Expanded Menu */}
      {isOpen && (
        <div className="fade-in" style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '10px',
          marginBottom: '8px'
        }}>
          <button 
            onClick={() => window.location.href = '#calculator'}
            style={{
              padding: '12px 24px',
              backgroundColor: 'white',
              border: 'none',
              borderRadius: '30px',
              boxShadow: 'var(--shadow-lg)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontWeight: 700,
              fontSize: '0.875rem',
              color: 'var(--gray-900)',
              cursor: 'pointer',
              transition: 'var(--transition-normal)'
            }}
            className="widget-option"
          >
            <Calculator size={18} color="var(--primary)" /> 
            <span>Price Calculator</span>
          </button>

          <button 
            onClick={() => window.location.href = `tel:${CONFIG.business.phone}`}
            style={{
              padding: '12px 24px',
              backgroundColor: 'white',
              border: 'none',
              borderRadius: '30px',
              boxShadow: 'var(--shadow-lg)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontWeight: 700,
              fontSize: '0.875rem',
              color: 'var(--gray-900)',
              cursor: 'pointer',
              transition: 'var(--transition-normal)'
            }}
            className="widget-option"
          >
            <Phone size={18} color="var(--secondary)" /> 
            <span>Quick Call</span>
          </button>

          <button 
            onClick={() => window.location.href = `https://wa.me/${CONFIG.business.whatsapp}`}
            style={{
              padding: '12px 24px',
              backgroundColor: '#25D366',
              border: 'none',
              borderRadius: '30px',
              boxShadow: 'var(--shadow-lg)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontWeight: 700,
              fontSize: '0.875rem',
              color: 'white',
              cursor: 'pointer',
              transition: 'var(--transition-normal)'
            }}
            className="widget-option"
          >
            <MessageSquare size={18} /> 
            <span>WhatsApp (2 min)</span>
          </button>
        </div>
      )}

      {/* Main Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          backgroundColor: isOpen ? 'var(--gray-900)' : 'var(--primary)',
          color: 'white',
          border: 'none',
          boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          position: 'relative'
        }}
        className="main-widget-btn"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        {!isOpen && (
          <div style={{
            position: 'absolute',
            top: '-5px',
            right: '-5px',
            backgroundColor: 'var(--accent)',
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            border: '3px solid white'
          }}></div>
        )}
      </button>



      <style>{`
        .widget-option:hover {
          transform: scale(1.05) translateX(-5px);
          background-color: var(--gray-50);
        }
        .main-widget-btn:hover {
          transform: scale(1.1) rotate(5deg);
        }
        @media (max-width: 768px) {
          .sticky-widget { bottom: 20px; right: 20px; }
        }
      `}</style>
    </div>
  );
};

export default StickyWidget;
