import React, { useState } from 'react';
import { Users, Shield, Snowflake, Wifi, Music, ChevronRight, Star, Clock } from 'lucide-react';
import { CONFIG } from '../config';

// Images from assets
import bus35 from '../assets/bus-35.png';
import bus45 from '../assets/bus-45.png';
import bus55 from '../assets/bus-55.png';
import sleeperImg from '../assets/bus-sleeper.png';

const BUS_FLEET = [
  {
    id: 'bus-35',
    name: "Luxury 35-Seater",
    capacity: 35,
    type: "Executive Coach",
    features: ["Pushback Seats", "Full AC", "GPS Tracking", "USB Charging"],
    image: bus35,
    tag: "Most Popular",
    pricePrefix: "Starting from ₹45/km"
  },
  {
    id: 'bus-45',
    name: "Grand 45-Seater",
    capacity: 45,
    type: "Tourist Coach",
    features: ["H-Line Seating", "Individual AC", "Mic & Audio", "Ample Luggage"],
    image: bus45,
    tag: "Large Groups",
    pricePrefix: "Starting from ₹55/km"
  },
  {
    id: 'bus-55',
    name: "Elite 55-Seater",
    capacity: 55,
    type: "Mega Coach",
    features: ["Premium Interior", "Pantograph Lockers", "Emergency Exit", "High-Def TV"],
    image: bus55,
    tag: "Corporate/Events",
    pricePrefix: "Starting from ₹65/km"
  },
  {
    id: 'sleeper',
    name: "Luxury Sleeper",
    capacity: "30 Berths",
    type: "Long Distance",
    features: ["Full Sleeper Berths", "Privacy Curtains", "Reading Lights", "Blankets Provided"],
    image: sleeperImg,
    tag: "Overnight Journeys",
    pricePrefix: "Starting from ₹75/km"
  }
];

const BusRental = () => {
  const [activeBus, setActiveBus] = useState(BUS_FLEET[0]);

  return (
    <section id="buses" className="section" style={{ backgroundColor: 'var(--gray-50)', padding: '100px 0' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px', flexWrap: 'wrap', gap: '24px' }}>
          <div style={{ maxWidth: '600px', textAlign: window.innerWidth < 768 ? 'center' : 'left' }}>
            <span style={{ color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.875rem', display: 'block', marginBottom: '12px' }}>Mass Transport Solutions</span>
            <h2 className="bus-title" style={{ lineHeight: 1.1, marginBottom: '20px' }}>Luxury Bus Rentals for Large Groups</h2>
            <p style={{ color: 'var(--gray-600)', fontSize: '1.125rem' }}>
              From corporate events to family weddings, our premium bus fleet ensures everyone travels together in ultimate comfort and safety.
            </p>
          </div>
          <button className="btn btn-primary" onClick={() => window.location.href = `https://wa.me/${CONFIG.business.whatsapp}`} style={{ height: '56px', padding: '0 32px', width: window.innerWidth < 768 ? '100%' : 'auto' }}>
            GET GROUP QUOTE
          </button>
        </div>

        <div className="bus-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '40px', alignItems: 'center' }}>
          {/* Fleet Selector */}
          <div className="bus-selector" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {BUS_FLEET.map(bus => (
              <div 
                key={bus.id}
                onClick={() => setActiveBus(bus)}
                className={`bus-tab-card ${activeBus.id === bus.id ? 'active' : ''}`}
                style={{ 
                  padding: '24px', 
                  backgroundColor: activeBus.id === bus.id ? 'white' : 'transparent',
                  borderRadius: '24px',
                  border: `1px solid ${activeBus.id === bus.id ? 'var(--gray-200)' : 'transparent'}`,
                  boxShadow: activeBus.id === bus.id ? 'var(--shadow-md)' : 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  minWidth: window.innerWidth < 768 ? '280px' : 'auto'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <h3 style={{ fontSize: '1.125rem', margin: 0, color: activeBus.id === bus.id ? 'var(--primary)' : 'var(--gray-900)' }}>{bus.name}</h3>
                  <span style={{ color: 'var(--gray-500)', fontSize: '0.75rem', fontWeight: 600 }}>{bus.capacity} Seats</span>
                </div>
                <p style={{ color: 'var(--gray-500)', fontSize: '0.8125rem', margin: 0 }}>{bus.type}</p>
              </div>
            ))}
          </div>

          {/* Active Display */}
          <div className="fade-in" key={activeBus.id} style={{ backgroundColor: 'white', borderRadius: '40px', padding: '40px', boxShadow: 'var(--shadow-xl)', border: '1px solid var(--gray-100)' }}>
            <div className="active-display-img" style={{ position: 'relative', height: '400px', borderRadius: '24px', overflow: 'hidden', marginBottom: '32px', backgroundColor: 'var(--gray-50)' }}>
              <img src={activeBus.image} alt={activeBus.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', top: '24px', right: '24px', backgroundColor: 'var(--accent)', color: 'white', padding: '6px 16px', borderRadius: '30px', fontWeight: 800, fontSize: '0.75rem' }}>
                {activeBus.tag}
              </div>
            </div>

            <div className="spec-footer" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '40px' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>{activeBus.name} Features</h3>
                <div className="spec-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px' }}>
                  {activeBus.features.map(f => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--gray-700)', fontSize: '0.9375rem' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--primary)' }}></div>
                      {f}
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Star size={20} fill="#FFD700" color="#FFD700" />
                    <span style={{ fontWeight: 700 }}>4.9/5</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--gray-500)' }}>
                    <Shield size={20} />
                    <span>Safety Insured</span>
                  </div>
                </div>
              </div>

              <div style={{ backgroundColor: 'var(--gray-900)', color: 'white', padding: '32px', borderRadius: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '0.875rem', marginBottom: '8px' }}>ESTIMATED RATE</span>
                <h4 style={{ fontSize: '2rem', color: 'white', margin: '0 0 8px 0' }}>{activeBus.pricePrefix}</h4>
                <p style={{ color: 'var(--gray-500)', fontSize: '0.75rem', marginBottom: '24px' }}>*Tolls & State Entry extra. Final quote varies by route & duration.</p>
                <button 
                  onClick={() => window.location.href = `https://wa.me/${CONFIG.business.whatsapp}?text=I'm interested in booking the ${activeBus.name}`}
                  className="btn btn-primary" 
                  style={{ width: '100%', height: '56px' }}
                >
                  REQUEST QUOTE
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Global Bus Features */}
        <div className="features-strip" style={{ marginTop: '80px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px' }}>
          {[
            { icon: Snowflake, title: "Climate Controlled", desc: "Heavy-duty AC systems" },
            { icon: Users, title: "Versatile Fleet", desc: "35 to 55 seat options" },
            { icon: Clock, title: "Expert Drivers", desc: "10+ yrs experience" },
            { icon: Wifi, title: "Premium Comfort", desc: "Reclining luxury seats" }
          ].map((item, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ width: '56px', height: '56px', backgroundColor: 'white', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', boxShadow: 'var(--shadow-sm)' }}>
                <item.icon size={24} color="var(--primary)" />
              </div>
              <h5 style={{ fontSize: '1rem', marginBottom: '4px' }}>{item.title}</h5>
              <p style={{ fontSize: '0.8125rem', color: 'var(--gray-500)', margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .bus-title { font-size: 3rem; }
        @media (max-width: 1024px) {
          .bus-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .bus-title { font-size: 2rem !important; text-align: center; }
          .section { padding: 60px 0 !important; }
          .bus-selector { 
            flex-direction: row !important; 
            overflow-x: auto; 
            padding-bottom: 10px;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
          }
          .bus-tab-card { 
            scroll-snap-align: center; 
            flex-shrink: 0;
            padding: 16px !important;
          }
          .bus-tab-card.active {
            background-color: white !important;
            border-color: var(--primary) !important;
          }
          .bus-grid > div:last-child { 
            padding: 24px !important; 
            border-radius: 24px !important;
          }
          .active-display-img { height: 250px !important; }
          .spec-grid { grid-template-columns: 1fr !important; gap: 12px !important; }
          .spec-footer { grid-template-columns: 1fr !important; gap: 24px !important; }
          .features-strip { grid-template-columns: repeat(2, 1fr) !important; gap: 20px !important; }
        }
      `}</style>
    </section>
  );
};

export default BusRental;
