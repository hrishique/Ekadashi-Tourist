import React, { useState } from 'react';
import { 
  Star, Search, Filter, Info, ChevronRight, X, 
  Car, Users, Luggage, Snowflake, Music, ShieldCheck, 
  Settings, UserCheck, Zap, Camera
} from 'lucide-react';

import swiftImg from '../assets/swift.png';
import nexonImg from '../assets/nexon.png';
import cretaImg from '../assets/creta.png';
import ertigaImg from '../assets/ertiga.png';
import innovaImg from '../assets/innova.png';
import tempoImg from '../assets/tempo.png';

const FLEET = [
  {
    id: 'swift',
    name: "Swift 5-Seater",
    category: "Sedan/Hatchback",
    price: 15,
    rating: 4.8,
    reviews: 120,
    capacity: 5,
    luggage: "150L",
    ac: "Single",
    usb: 1,
    perfectFor: ["Budget-conscious", "City Travel", "Couples"],
    tags: ["Budget", "City"],
    features: ["AC", "USB", "ABS", "Power Steering", "Power Windows"],
    image: swiftImg,
    popular: true,
    description: "Best for budget-conscious travelers and city trips. Clean, compact, and reliable."
  },
  {
    id: 'nexon',
    name: "Nexon 5-Seater",
    category: "Compact SUV",
    price: 16,
    rating: 4.7,
    reviews: 85,
    capacity: 5,
    luggage: "160L",
    ac: "Single",
    usb: 2,
    perfectFor: ["Small families", "Comfortable long drives"],
    tags: ["Value", "Highway"],
    features: ["AC", "USB (dual)", "ABS", "Roof rails", "High Ground Clearance"],
    image: nexonImg,
    description: "Modern compact SUV with high safety rating and smooth highway performance."
  },
  {
    id: 'creta',
    name: "Creta 5-Seater",
    category: "Premium SUV",
    price: 18,
    rating: 4.9,
    reviews: 150,
    capacity: 5,
    luggage: "180L",
    ac: "Dual-zone",
    usb: 4,
    perfectFor: ["Luxury seekers", "Long outstation trips"],
    tags: ["Premium", "Luxury"],
    features: ["Dual-zone AC", "USB (4)", "ABS", "Premium Interiors", "Touchscreen"],
    image: cretaImg,
    description: "The gold standard for premium travel. Luxurious seating and advanced climate control."
  },
  {
    id: 'ertiga',
    name: "Ertiga 6+1 Seater",
    category: "Family MUV",
    price: 17,
    rating: 4.6,
    reviews: 95,
    capacity: 7,
    luggage: "200L",
    ac: "Single",
    usb: 3,
    perfectFor: ["Families of 5-7", "Small school groups"],
    tags: ["Family", "Groups"],
    features: ["AC", "USB (3)", "ABS", "Large luggage", "Easy entry"],
    image: ertigaImg,
    description: "Spacious and affordable choice for families needing extra seating without the premium price."
  },
  {
    id: 'innova',
    name: "Innova 6+1 Seater",
    category: "Premium MUV",
    price: 20,
    rating: 4.8,
    reviews: 200,
    capacity: 7,
    luggage: "240L",
    ac: "Dual AC",
    usb: 4,
    perfectFor: ["Large families", "Corporate travel", "Luxury groups"],
    tags: ["Elite", "Corporate"],
    features: ["Dual AC", "USB (4)", "ABS", "Premium Captain Seats", "Large Trunk"],
    image: innovaImg,
    popular: true,
    description: "Unmatched comfort for long-distance group travel. The choice of professionals and elite families."
  },
  {
    id: 'tempo',
    name: "Tempo 13-Seater",
    category: "Group Coach",
    price: 22,
    rating: 4.5,
    reviews: 70,
    capacity: 13,
    luggage: "400L",
    ac: "Full Coach AC",
    usb: 8,
    perfectFor: ["Large groups", "Corporate events", "School trips"],
    tags: ["Bulk", "Events"],
    features: ["Coach AC", "USB per row", "Luggage Racks", "Comfortable Seating"],
    image: tempoImg,
    description: "Perfect for large groups. High-roof design and ample luggage space for extended tours."
  }
];

const VehicleCard = ({ vehicle, onDetails }) => (
  <div className="vehicle-card fade-in" style={{
    backgroundColor: 'white',
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: 'var(--shadow-md)',
    transition: 'var(--transition-normal)',
    border: '1px solid var(--gray-100)',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column'
  }}>
    {vehicle.popular && (
      <div style={{
        position: 'absolute',
        top: '16px',
        right: '16px',
        backgroundColor: 'var(--accent)',
        color: 'white',
        padding: '4px 12px',
        borderRadius: '20px',
        fontSize: '0.75rem',
        fontWeight: 700,
        zIndex: 1
      }}>MOST POPULAR</div>
    )}

    <div style={{ height: '220px', backgroundColor: 'var(--gray-50)', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <img src={vehicle.image} alt={vehicle.name} style={{ width: '100%', height: '100%', objectFit: 'contain', transition: 'transform 0.5s' }} className="vehicle-img" />
    </div>

    <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
      <div style={{ marginBottom: '16px' }}>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '4px' }}>{vehicle.name}</h3>
        <p style={{ color: 'var(--gray-500)', fontSize: '0.875rem' }}>{vehicle.category}</p>
      </div>

      <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', color: 'var(--gray-600)' }}><Users size={14} /> {vehicle.capacity} Seats</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', color: 'var(--gray-600)' }}><Luggage size={14} /> {vehicle.luggage}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', color: 'var(--gray-600)' }}><Snowflake size={14} /> {vehicle.ac} AC</div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '20px' }}>
        <div style={{ display: 'flex' }}>
          {[...Array(5)].map((_, i) => <Star key={i} size={14} fill={i < Math.floor(vehicle.rating) ? "#FFD700" : "none"} color="#FFD700" />)}
        </div>
        <span style={{ fontWeight: 700, fontSize: '0.875rem' }}>{vehicle.rating}</span>
        <span style={{ color: 'var(--gray-400)', fontSize: '0.75rem' }}>({vehicle.reviews} reviews)</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '24px' }}>
        <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)' }}>₹{vehicle.price}</span>
        <span style={{ color: 'var(--gray-500)', fontSize: '0.875rem' }}>per km</span>
      </div>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', flexWrap: 'wrap' }}>
        {vehicle.tags.map(tag => (
          <span key={tag} style={{ backgroundColor: '#E3F2FD', color: '#1976D2', padding: '4px 10px', borderRadius: '8px', fontSize: '0.7rem', fontWeight: 600 }}>{tag}</span>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '12px', marginTop: 'auto' }}>
        <button className="btn btn-primary" style={{ flex: 1, padding: '10px' }} onClick={() => window.location.href = '#booking'}>BOOK</button>
        <button className="btn btn-secondary" style={{ flex: 1, padding: '10px' }} onClick={() => onDetails(vehicle)}>DETAILS</button>
      </div>
    </div>
  </div>
);

const DetailsModal = ({ vehicle, onClose }) => (
  <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(5px)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
    <div className="fade-in" style={{ backgroundColor: 'white', borderRadius: '32px', width: '100%', maxWidth: '1000px', maxHeight: '90vh', overflowY: 'auto', position: 'relative' }}>
      <button onClick={onClose} style={{ position: 'absolute', top: '24px', right: '24px', backgroundColor: 'white', border: 'none', width: '40px', height: '40px', borderRadius: '20px', boxShadow: 'var(--shadow-md)', cursor: 'pointer', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <X size={24} />
      </button>

      <div className="grid grid-2" style={{ gap: 0 }}>
        {/* Left Side: Images & Quick Specs */}
        <div style={{ backgroundColor: 'var(--gray-50)', padding: '40px' }}>
          <div style={{ marginBottom: '32px', textAlign: 'center' }}>
            <img src={vehicle.image} alt={vehicle.name} style={{ width: '100%', maxHeight: '300px', objectFit: 'contain' }} />
            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '20px' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'var(--primary)' }}></div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'var(--gray-300)' }}></div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'var(--gray-300)' }}></div>
            </div>
          </div>

          <h4 style={{ marginBottom: '20px', textTransform: 'uppercase', fontSize: '0.875rem', letterSpacing: '0.05em' }}>Vehicle Highlights</h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', backgroundColor: 'white', padding: '12px', borderRadius: '12px' }}>
              <Users size={18} color="var(--primary)" />
              <span style={{ fontSize: '0.875rem' }}>{vehicle.capacity} Passengers</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', backgroundColor: 'white', padding: '12px', borderRadius: '12px' }}>
              <Luggage size={18} color="var(--primary)" />
              <span style={{ fontSize: '0.875rem' }}>{vehicle.luggage} Space</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', backgroundColor: 'white', padding: '12px', borderRadius: '12px' }}>
              <Snowflake size={18} color="var(--primary)" />
              <span style={{ fontSize: '0.875rem' }}>{vehicle.ac} AC System</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', backgroundColor: 'white', padding: '12px', borderRadius: '12px' }}>
              <Zap size={18} color="var(--primary)" />
              <span style={{ fontSize: '0.875rem' }}>{vehicle.usb} USB Ports</span>
            </div>
          </div>
        </div>

        {/* Right Side: Features & Trust */}
        <div style={{ padding: '60px' }}>
          <div style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '8px' }}>{vehicle.name}</h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ display: 'flex' }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#FFD700" color="#FFD700" />)}
              </div>
              <span style={{ fontWeight: 700 }}>{vehicle.rating}/5</span>
              <span style={{ color: 'var(--gray-400)' }}>(120 verified reviews)</span>
            </div>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h4 style={{ marginBottom: '16px' }}>What's Included</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--gray-600)' }}><CheckCircle2 size={16} color="var(--success)" /> Verified Driver</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--gray-600)' }}><CheckCircle2 size={16} color="var(--success)" /> 24/7 Support</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--gray-600)' }}><CheckCircle2 size={16} color="var(--success)" /> GPS Tracking</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--gray-600)' }}><CheckCircle2 size={16} color="var(--success)" /> Full Insurance</div>
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--gray-50)', padding: '24px', borderRadius: '16px', marginBottom: '40px', border: '1px solid var(--gray-100)' }}>
            <p style={{ fontStyle: 'italic', color: 'var(--gray-600)', fontSize: '0.875rem', lineHeight: 1.6 }}>
              "Excellent car! Clean, comfortable, and the AC works perfectly. The driver was very professional and knew all the routes. Highly recommended for families!"
            </p>
            <p style={{ marginTop: '12px', fontWeight: 600, fontSize: '0.75rem' }}>- Priya Sharma, Delhi</p>
          </div>

          <div style={{ display: 'flex', gap: '16px' }}>
            <button className="btn btn-primary" style={{ flex: 1, height: '56px' }} onClick={() => window.location.href = '#booking'}>BOOK THIS VEHICLE</button>
            <button className="btn btn-secondary" style={{ flex: 1, height: '56px' }} onClick={onClose}>COMPARE OTHERS</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const VehicleShowcase = () => {
  const [filter, setFilter] = useState('All');
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const filteredFleet = filter === 'All' ? FLEET : FLEET.filter(v => {
    if (filter === 'Capacity: 1-5') return v.capacity <= 5;
    if (filter === 'Capacity: 6+') return v.capacity >= 6;
    if (filter === 'Budget') return v.price <= 17;
    if (filter === 'Premium') return v.price > 17;
    return true;
  });

  return (
    <section id="vehicles" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Our Elite Fleet</h2>
          <p style={{ color: 'var(--gray-600)', maxWidth: '600px', margin: '0 auto', marginBottom: '40px' }}>
            Choose from our range of verified vehicles. From budget hatchbacks to luxury coaches, we have it all.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            {['All', 'Capacity: 1-5', 'Capacity: 6+', 'Budget', 'Premium'].map(f => (
              <button 
                key={f} 
                onClick={() => setFilter(f)}
                style={{
                  backgroundColor: filter === f ? 'var(--primary)' : 'white',
                  color: filter === f ? 'white' : 'var(--gray-600)',
                  border: `1px solid ${filter === f ? 'var(--primary)' : 'var(--gray-200)'}`,
                  padding: '8px 24px',
                  borderRadius: '30px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
              >{f}</button>
            ))}
          </div>
        </div>

        <div className="grid grid-3">
          {filteredFleet.map(vehicle => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} onDetails={setSelectedVehicle} />
          ))}
        </div>

        {/* Comparison Table Link */}
        <div style={{ marginTop: '60px', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', backgroundColor: 'var(--gray-50)', padding: '16px 32px', borderRadius: '16px', border: '1px solid var(--gray-100)' }}>
            <Car size={24} color="var(--primary)" />
            <span style={{ fontWeight: 600 }}>Need a detailed comparison?</span>
            <button onClick={() => setSelectedVehicle(FLEET[0])} style={{ color: 'var(--primary)', fontWeight: 700, border: 'none', background: 'none', cursor: 'pointer', textDecoration: 'underline' }}>Compare Features</button>
          </div>
        </div>
      </div>

      {selectedVehicle && (
        <DetailsModal vehicle={selectedVehicle} onClose={() => setSelectedVehicle(null)} />
      )}

      <style>{`
        .vehicle-card:hover { transform: translateY(-10px); }
        .vehicle-card:hover .vehicle-img { transform: scale(1.1); }
        @media (max-width: 768px) {
          .grid-3 { grid-template-columns: 1fr !important; }
          .section { padding: 48px 0 !important; }
        }
      `}</style>
    </section>
  );
};

export default VehicleShowcase;
