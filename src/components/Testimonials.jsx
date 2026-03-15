import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialCard = ({ quote, name, location, trip, date, rating }) => (
  <div style={{
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '24px',
    boxShadow: 'var(--shadow-lg)',
    border: '1px solid var(--gray-100)',
    position: 'relative',
    maxWidth: '600px',
    margin: '0 auto'
  }}>
    <Quote size={48} style={{ position: 'absolute', top: '20px', left: '20px', color: 'var(--gray-100)', zIndex: 0 }} />
    <div style={{ position: 'relative', zIndex: 1 }}>
      <div style={{ display: 'flex', gap: '4px', marginBottom: '24px', color: 'var(--accent)' }}>
        {[...Array(rating)].map((_, i) => <Star key={i} size={20} fill="var(--accent)" />)}
      </div>
      <p style={{ fontSize: '1.25rem', lineHeight: 1.6, color: 'var(--gray-800)', marginBottom: '32px', fontStyle: 'italic' }}>
        "{quote}"
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: 'var(--primary)',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 700,
          fontSize: '1.25rem'
        }}>
          {name.charAt(0)}
        </div>
        <div style={{ textAlign: 'left' }}>
          <h4 style={{ fontSize: '1.125rem', marginBottom: '2px' }}>{name}</h4>
          <p style={{ color: 'var(--gray-500)', fontSize: '0.875rem' }}>{location} • {trip} • {date}</p>
        </div>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviews = [
    {
      quote: "Best travel experience! Driver was professional, car was spotless, and pricing was exactly as quoted. Will definitely book again for my next family trip.",
      name: "Priya Sharma",
      location: "Delhi",
      trip: "Manali Family Trip",
      date: "March 2024",
      rating: 5
    },
    {
      quote: "The 14-seater Tempo Traveller was very comfortable for our corporate group. Highly recommend Hello Kanpur Travels for their punctuality and clean vehicles.",
      name: "Rahul Mehra",
      location: "Kanpur",
      trip: "Corporate Retreat",
      date: "February 2024",
      rating: 5
    },
    {
      quote: "I was worried about hidden costs, but the pricing was transparent from start to finish. The driver was very helpful with local suggestions as well.",
      name: "Ananya Iyer",
      location: "Mumbai",
      trip: "Lucknow Local",
      date: "January 2024",
      rating: 5
    }
  ];

  const next = () => setCurrentIndex((currentIndex + 1) % reviews.length);
  const prev = () => setCurrentIndex((currentIndex - 1 + reviews.length) % reviews.length);

  return (
    <section id="testimonials" className="section" style={{ backgroundColor: 'var(--white)', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '24px', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '4px' }}>4.7/5</p>
              <p style={{ fontSize: '0.75rem', color: 'var(--gray-500)', fontWeight: 600 }}>STARS RATED</p>
            </div>
            <div style={{ width: '1px', height: '40px', backgroundColor: 'var(--gray-200)' }}></div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '4px' }}>5,000+</p>
              <p style={{ fontSize: '0.75rem', color: 'var(--gray-500)', fontWeight: 600 }}>HAPPY CUSTOMERS</p>
            </div>
            <div style={{ width: '1px', height: '40px', backgroundColor: 'var(--gray-200)' }}></div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '4px' }}>2,000+</p>
              <p style={{ fontSize: '0.75rem', color: 'var(--gray-500)', fontWeight: 600 }}>TRIPS DONE</p>
            </div>
          </div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>What Our Customers Say</h2>
        </div>

        <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
          <TestimonialCard {...reviews[currentIndex]} />
          
          <button onClick={prev} style={{
            position: 'absolute',
            left: '-20px',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'white',
            border: 'none',
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            boxShadow: 'var(--shadow-md)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--primary)',
            zIndex: 10
          }}>
            <ChevronLeft size={24} />
          </button>
          
          <button onClick={next} style={{
            position: 'absolute',
            right: '-20px',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'white',
            border: 'none',
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            boxShadow: 'var(--shadow-md)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--primary)',
            zIndex: 10
          }}>
            <ChevronRight size={24} />
          </button>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '40px' }}>
          {reviews.map((_, i) => (
            <div key={i} onClick={() => setCurrentIndex(i)} style={{
              width: currentIndex === i ? '24px' : '10px',
              height: '10px',
              borderRadius: '5px',
              backgroundColor: currentIndex === i ? 'var(--primary)' : 'var(--gray-300)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}></div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          button { display: none !important; }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
