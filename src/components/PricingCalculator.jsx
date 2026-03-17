import React, { useState, useEffect } from 'react';
import { 
  Calculator, MapPin, Calendar, Users, Info, 
  CheckCircle, ChevronRight, AlertTriangle, Tag, Loader 
} from 'lucide-react';
import { CONFIG } from '../config';

const SUGGESTIONS = ["Kanpur", "Lucknow", "Agra", "Delhi", "Jaipur", "Gwalior", "Mathura"];

const PricingCalculator = () => {
  const [loading, setLoading] = useState(false);
  const [calcData, setCalcData] = useState(() => {
    const saved = localStorage.getItem('etf_calc_data');
    return saved ? JSON.parse(saved) : {
      tripType: 'Outstation',
      from: '',
      to: '',
      pickupDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
      returnDate: '',
      passengers: 1
    };
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    localStorage.setItem('etf_calc_data', JSON.stringify(calcData));
  }, [calcData]);

  // Logic & Formulas
  const getVehicle = (p) => {
    if (p <= 4) return { name: "Swift", rate: 15 };
    if (p <= 7) return { name: "Ertiga", rate: 17 };
    if (p <= 14) return { name: "Innova", rate: 20 };
    return { name: "Tempo", rate: 22 };
  };

  const calculateEstimate = () => {
    if (!calcData.from || !calcData.to) return null;

    const distance = 245; // Placeholder distance logic
    const vehicle = getVehicle(calcData.passengers);
    const baseFare = distance * vehicle.rate;
    const driverFee = 500;
    const tollEstimate = Math.round(distance * 1.15);
    const subtotal = baseFare + driverFee + tollEstimate;

    // Discounts
    let groupDisc = calcData.passengers >= 6 ? 0.05 : 0;
    const isAdvance = new Date(calcData.pickupDate) - new Date() >= 7 * 24 * 60 * 60 * 1000;
    let advanceDisc = isAdvance ? 0.05 : 0;
    
    const totalDiscPercent = Math.min(0.10, groupDisc + advanceDisc);
    const discountAmount = Math.round(subtotal * totalDiscPercent);
    const finalPrice = subtotal - discountAmount;

    return {
      distance,
      vehicle,
      baseFare,
      driverFee,
      tollEstimate,
      subtotal,
      discountAmount,
      finalPrice,
      perPerson: Math.round(finalPrice / calcData.passengers)
    };
  };

  const estimate = calculateEstimate();

  const handleInputChange = (field, value) => {
    setLoading(true);
    setCalcData(prev => ({ ...prev, [field]: value }));
    setTimeout(() => setLoading(false), 300); // Simulate calculation speed
  };

  return (
    <section id="calculator" className="section" style={{ backgroundColor: 'white' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Instant Price Calculator</h2>
          <p style={{ color: 'var(--gray-600)', maxWidth: '600px', margin: '0 auto' }}>
            Get an exact quote for your trip in seconds. No hidden charges, 100% transparency.
          </p>
        </div>

        <div className="calculator-wrapper" style={{ 
          maxWidth: '1100px', 
          margin: '0 auto', 
          display: 'grid', 
          gridTemplateColumns: '1fr 400px', 
          gap: '40px',
          alignItems: 'start' 
        }}>
          {/* Inputs Section */}
          <div style={{ 
            backgroundColor: 'var(--gray-50)', 
            padding: '40px', 
            borderRadius: '24px', 
            border: '1px solid var(--gray-100)' 
          }}>
            <div className="grid grid-2">
              <div className="form-group" style={{ gridColumn: 'span 2' }}>
                <label className="form-label">Trip Type</label>
                <select className="form-input" value={calcData.tripType} onChange={e => handleInputChange('tripType', e.target.value)}>
                  <option>Local Taxi</option>
                  <option>Outstation</option>
                  <option>Car Rental</option>
                  <option>Group/Tempo</option>
                  <option>Tour Package</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">From</label>
                <input 
                  list="locations" 
                  placeholder="Pickup City" 
                  className="form-input" 
                  value={calcData.from} 
                  onChange={e => handleInputChange('from', e.target.value)} 
                />
              </div>

              <div className="form-group">
                <label className="form-label">To</label>
                <input 
                  list="locations" 
                  placeholder="Destination City" 
                  className="form-input" 
                  value={calcData.to} 
                  onChange={e => handleInputChange('to', e.target.value)} 
                />
              </div>

              <datalist id="locations">
                {SUGGESTIONS.map(s => <option key={s} value={s} />)}
              </datalist>

              <div className="form-group">
                <label className="form-label">Pickup Date</label>
                <input 
                  type="date" 
                  className="form-input" 
                  min={new Date().toISOString().split('T')[0]} 
                  value={calcData.pickupDate} 
                  onChange={e => handleInputChange('pickupDate', e.target.value)} 
                />
              </div>

              {calcData.tripType === 'Outstation' && (
                <div className="form-group">
                  <label className="form-label">Return Date</label>
                  <input 
                    type="date" 
                    className="form-input" 
                    min={calcData.pickupDate} 
                    value={calcData.returnDate} 
                    onChange={e => handleInputChange('returnDate', e.target.value)} 
                  />
                </div>
              )}

              <div className="form-group" style={{ gridColumn: 'span 2' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <label className="form-label" style={{ margin: 0 }}>Number of Passengers</label>
                  <span style={{ fontWeight: 700, color: 'var(--primary)' }}>{calcData.passengers}</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="25" 
                  value={calcData.passengers} 
                  onChange={e => handleInputChange('passengers', parseInt(e.target.value))} 
                  style={{ width: '100%', accentColor: 'var(--primary)' }} 
                />
              </div>
            </div>
          </div>

          {/* Result Section */}
          <div style={{ 
            backgroundColor: 'var(--gray-900)', 
            color: 'white', 
            padding: '40px', 
            borderRadius: '24px', 
            boxShadow: 'var(--shadow-xl)',
            position: 'sticky',
            top: '100px'
          }}>
            {loading ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '300px', gap: '16px' }}>
                <Loader className="spin" size={32} color="var(--primary)" />
                <p style={{ color: 'var(--gray-400)' }}>Calculating best price...</p>
              </div>
            ) : estimate ? (
              <div className="fade-in">
                <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '20px', marginBottom: '20px' }}>
                  <h3 style={{ color: 'white', marginBottom: '4px' }}>ESTIMATED COST</h3>
                  <p style={{ color: 'var(--gray-400)', fontSize: '0.875rem' }}>
                    {estimate.distance} km • {estimate.vehicle.name} (₹{estimate.vehicle.rate}/km)
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.875rem', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--gray-400)' }}>Base Fare</span>
                    <span>₹{estimate.baseFare}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--gray-400)' }}>Driver Fee</span>
                    <span>₹{estimate.driverFee}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--gray-400)' }}>Tolls (est)</span>
                    <span>₹{estimate.tollEstimate}</span>
                  </div>
                  {estimate.discountAmount > 0 && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#4ADE80' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Tag size={14} /> Discount</span>
                      <span>-₹{estimate.discountAmount}</span>
                    </div>
                  )}
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '16px', marginTop: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.25rem', fontWeight: 600 }}>FINAL PRICE</span>
                    <span style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)' }}>₹{estimate.finalPrice}</span>
                  </div>
                  <p style={{ textAlign: 'center', color: 'var(--gray-400)', fontSize: '0.75rem' }}>₹{estimate.perPerson} per person</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                  <div style={{ display: 'flex', gap: '8px', fontSize: '0.75rem', color: 'var(--gray-300)' }}>
                    <CheckCircle size={16} color="var(--primary)" /> <span>Includes AC & USB Chargers</span>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', fontSize: '0.75rem', color: 'var(--gray-300)' }}>
                    <CheckCircle size={16} color="var(--primary)" /> <span>Professional Driver & Insurance</span>
                  </div>
                </div>

                <button onClick={() => window.location.href = '#booking'} className="btn btn-primary" style={{ width: '100%', height: '56px', gap: '8px' }}>
                  BOOK AT THIS PRICE <ChevronRight size={20} />
                </button>
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <Calculator size={48} color="var(--gray-700)" style={{ marginBottom: '24px' }} />
                <p style={{ color: 'var(--gray-400)' }}>Enter your trip details to get an instant quote.</p>
              </div>
            )}
          </div>
        </div>

        {/* Not Included Section */}
        <div style={{ maxWidth: '1100px', margin: '40px auto 0', padding: '24px', backgroundColor: 'rgba(255, 152, 0, 0.05)', borderRadius: '16px', border: '1px solid rgba(255, 152, 0, 0.2)', display: 'flex', gap: '16px' }}>
          <AlertTriangle color="var(--accent)" size={24} />
          <div style={{ fontSize: '0.875rem' }}>
            <p style={{ fontWeight: 700, color: 'var(--accent)', marginBottom: '4px' }}>What's not included?</p>
            <p style={{ color: 'var(--gray-600)' }}>
              Estimate doesn't include meals, hotel accommodations, or state entry taxes. Parking charges beyond 2 hours will be billed as per actuals.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .spin { animation: spin 1s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        
        @media (max-width: 992px) {
          .calculator-wrapper { grid-template-columns: 1fr !important; }
          .calculator-wrapper > div:last-child { position: static !important; }
        }
      `}</style>
    </section>
  );
};

export default PricingCalculator;
