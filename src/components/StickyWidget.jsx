import React, { useState } from 'react';
import { MessageCircle, Calculator, Phone, X, Send } from 'lucide-react';

const StickyWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [calcData, setCalcData] = useState({
    from: '',
    to: '',
    passengers: 4
  });

  const getEstimate = () => {
    const distance = 200; // Mock
    const rate = calcData.passengers > 7 ? 20 : 12;
    return distance * rate + 500;
  };

  return (
    <div style={{ position: 'fixed', bottom: '32px', right: '32px', zIndex: 1000, display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-end' }}>
      
      {isOpen && (
        <div className="fade-in" style={{
          backgroundColor: 'white',
          width: '320px',
          borderRadius: '24px',
          boxShadow: 'var(--shadow-xl)',
          border: '1px solid var(--gray-100)',
          overflow: 'hidden',
          marginBottom: '8px'
        }}>
          <div style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h4 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Calculator size={20} /> Quick Quote
            </h4>
            <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
              <X size={20} />
            </button>
          </div>
          
          <div style={{ padding: '24px' }}>
            <div className="form-group">
              <label className="form-label" style={{ fontSize: '0.75rem' }}>From</label>
              <input type="text" placeholder="Pickup City" className="form-input" style={{ padding: '8px 12px', fontSize: '0.875rem' }} 
                value={calcData.from} onChange={e => setCalcData({...calcData, from: e.target.value})} />
            </div>
            <div className="form-group">
              <label className="form-label" style={{ fontSize: '0.75rem' }}>To</label>
              <input type="text" placeholder="Destination City" className="form-input" style={{ padding: '8px 12px', fontSize: '0.875rem' }}
                value={calcData.to} onChange={e => setCalcData({...calcData, to: e.target.value})} />
            </div>
            
            <div style={{ backgroundColor: 'var(--gray-50)', padding: '16px', borderRadius: '12px', textAlign: 'center' }}>
              <p style={{ fontSize: '0.75rem', color: 'var(--gray-500)', marginBottom: '4px' }}>ESTIMATED PRICE</p>
              <p style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)', margin: 0 }}>₹{getEstimate()}</p>
            </div>
            
            <button className="btn btn-primary" style={{ width: '100%', marginTop: '20px', gap: '8px', fontSize: '0.875rem' }}
              onClick={() => window.location.href = '#booking'}>
              Proceed to Booking
            </button>
          </div>
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <button onClick={() => setIsOpen(!isOpen)} style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: 'var(--accent)',
          color: 'white',
          border: 'none',
          boxShadow: 'var(--shadow-lg)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'var(--transition-normal)'
        }}>
          {isOpen ? <X size={28} /> : <Calculator size={28} />}
        </button>

        <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          color: 'white',
          boxShadow: 'var(--shadow-lg)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'var(--transition-normal)'
        }}>
          <MessageCircle size={28} />
        </a>
      </div>
    </div>
  );
};

export default StickyWidget;
