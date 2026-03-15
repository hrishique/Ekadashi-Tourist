import React from 'react';
import { Users, Briefcase, Star, ChevronRight } from 'lucide-react';
import swiftImg from '../assets/swift.png';
import fortunerImg from '../assets/fortuner.png';
import tempoImg from '../assets/tempo.png';

const VehicleCard = ({ name, type, seats, luggage, price, rating, reviews, image, tags, popular }) => (
  <div className="fade-in" style={{
    backgroundColor: 'white',
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: 'var(--shadow-lg)',
    border: '1px solid var(--gray-100)',
    transition: 'var(--transition-normal)',
    position: popular ? 'relative' : 'static'
  }}>
    {popular && (
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        backgroundColor: 'var(--accent)',
        color: 'white',
        padding: '6px 16px',
        borderRadius: '20px',
        fontSize: '0.75rem',
        fontWeight: 700,
        zIndex: 1
      }}>MOST POPULAR</div>
    )}
    
    <div style={{ padding: '24px', backgroundColor: 'var(--gray-50)', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img src={image} alt={name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
    </div>

    <div style={{ padding: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
        <div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '4px' }}>{name}</h3>
          <p style={{ color: 'var(--gray-600)', fontSize: '0.875rem' }}>{type}</p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--accent)' }}>
            <Star size={16} fill="var(--accent)" />
            <span style={{ fontWeight: 700 }}>{rating}</span>
          </div>
          <p style={{ fontSize: '0.75rem', color: 'var(--gray-500)' }}>({reviews} reviews)</p>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.875rem', color: 'var(--gray-700)' }}>
          <Users size={16} />
          <span>{seats} Seats</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.875rem', color: 'var(--gray-700)' }}>
          <Briefcase size={16} />
          <span>{luggage} Luggage</span>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
        {tags.map(tag => (
          <span key={tag} style={{ backgroundColor: 'var(--gray-100)', padding: '4px 10px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 500, color: 'var(--gray-700)' }}>
            {tag}
          </span>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--gray-100)', paddingTop: '20px' }}>
        <div>
          <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)' }}>₹{price}</span>
          <span style={{ color: 'var(--gray-500)', fontSize: '0.875rem' }}> / km</span>
        </div>
        <button className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
          Book Now
        </button>
      </div>
    </div>
  </div>
);

const VehicleShowcase = () => {
  const vehicles = [
    {
      name: "Maruti Swift",
      type: "Budget Hatchback",
      seats: 4,
      luggage: "2 Small",
      price: 12,
      rating: 4.8,
      reviews: 120,
      image: swiftImg,
      tags: ["Budget", "City Trip", "Compact"],
      popular: false
    },
    {
      name: "Toyota Fortuner",
      type: "Premium SUV",
      seats: 7,
      luggage: "4 Large",
      price: 18,
      rating: 4.9,
      reviews: 85,
      image: fortunerImg,
      tags: ["Luxury", "Outstation", "Safe"],
      popular: true
    },
    {
      name: "Tempo Traveller",
      type: "14-Seater Van",
      seats: 14,
      luggage: "10 Large",
      price: 22,
      rating: 4.7,
      reviews: 45,
      image: tempoImg,
      tags: ["Group", "Long Trip", "Spacious"],
      popular: false
    }
  ];

  return (
    <section id="vehicles" className="section" style={{ backgroundColor: 'var(--gray-50)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Our Elite Fleet</h2>
          <p style={{ color: 'var(--gray-600)', maxWidth: '600px', margin: '0 auto' }}>
            Choose from our range of well-maintained, sanitized vehicles for a safe and comfortable journey.
          </p>
        </div>

        <div className="grid grid-3">
          {vehicles.map((v, i) => (
            <div key={v.name} style={{ animationDelay: `${i * 0.1}s` }}>
              <VehicleCard {...v} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleShowcase;
