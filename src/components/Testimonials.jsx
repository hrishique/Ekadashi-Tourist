import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, CheckCircle2, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Delhi",
    rating: 5,
    text: "Best travel experience! Driver was professional, car was spotless, and pricing was exactly as quoted. Definitely booking again!",
    tripType: "Manali Family Trip",
    date: "March 2024",
    verified: true
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Lucknow",
    rating: 5,
    text: "Amazing service for our corporate trip. 25 colleagues, zero complaints. Highly recommended!",
    tripType: "Corporate Team Outing",
    date: "February 2024",
    verified: true
  },
  {
    id: 3,
    name: "Ankit Patel",
    location: "Mumbai",
    rating: 5,
    text: "Smooth booking process and very reliable. The driver was familiar with all the shortcuts and scenic routes. 10/10!",
    tripType: "Chardham Pilgrimage",
    date: "January 2024",
    verified: true
  },
  {
    id: 4,
    name: "Neha Gupta",
    location: "Agra",
    rating: 5,
    text: "Saved so much time and stress! Booking was quick, price was fair, and driver was excellent. No regrets!",
    tripType: "Local City Tour",
    date: "March 2024",
    verified: true
  },
  {
    id: 5,
    name: "Rahul Singh",
    location: "Kanpur",
    rating: 5,
    text: "Booked 15 cars for corporate event. Flawless execution, all drivers professional. Best value in Kanpur.",
    tripType: "Team Building Event",
    date: "December 2023",
    verified: true
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(nextSlide, 5000);
    }
    return () => clearInterval(timerRef.current);
  }, [isPaused, nextSlide]);

  return (
    <section id="reviews" className="section" style={{ backgroundColor: 'var(--gray-50)', padding: '80px 0' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <div style={{ display: 'flex', gap: '2px' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="#FFD700" color="#FFD700" />
              ))}
            </div>
            <span style={{ fontWeight: 700, fontSize: '1.25rem' }}>4.7/5 Stars</span>
            <span style={{ color: 'var(--gray-500)' }}>(250+ Reviews)</span>
          </div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '12px' }}>What Our Customers Say</h2>
          <p style={{ color: 'var(--gray-600)', fontSize: '1.125rem' }}>5,000+ Happy Customers & Growing</p>
        </div>

        {/* Carousel Container */}
        <div 
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{ 
            maxWidth: '900px', 
            margin: '0 auto', 
            position: 'relative',
            padding: '0 60px'
          }}
        >
          {/* Navigation Arrows */}
          <button onClick={prevSlide} className="carousel-btn prev" style={{
            position: 'absolute',
            left: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            backgroundColor: 'white',
            border: 'none',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--gray-900)',
            zIndex: 10,
            transition: 'all 0.3s ease'
          }}>
            <ChevronLeft size={24} />
          </button>

          <button onClick={nextSlide} className="carousel-btn next" style={{
            position: 'absolute',
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            backgroundColor: 'white',
            border: 'none',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--gray-900)',
            zIndex: 10,
            transition: 'all 0.3s ease'
          }}>
            <ChevronRight size={24} />
          </button>

          {/* Card Wrapper */}
          <div style={{ overflow: 'hidden', borderRadius: '24px' }}>
            <div style={{
              display: 'flex',
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: 'transform 0.5s ease-in-out'
            }}>
              {TESTIMONIALS.map((t) => (
                <div key={t.id} style={{ 
                  flex: '0 0 100%', 
                  padding: '10px' 
                }}>
                  <div style={{
                    backgroundColor: 'white',
                    padding: '40px',
                    borderRadius: '24px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                    textAlign: 'center',
                    minHeight: '280px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    border: '1px solid var(--gray-100)'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2px', marginBottom: '20px' }}>
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} size={18} fill="#FFD700" color="#FFD700" />
                      ))}
                    </div>

                    <p style={{ 
                      fontSize: '1.125rem', 
                      lineHeight: 1.6, 
                      color: '#333', 
                      fontStyle: 'italic',
                      marginBottom: '24px',
                      maxWidth: '600px',
                      marginInline: 'auto'
                    }}>
                      "{t.text}"
                    </p>

                    <div style={{ borderTop: '1px solid var(--gray-100)', paddingTop: '20px' }}>
                      <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#2c2c2c', marginBottom: '4px' }}>
                        - {t.name}, {t.location}
                      </h4>
                      <p style={{ fontSize: '0.875rem', color: '#666', marginBottom: '8px' }}>
                        Trip: {t.tripType} • {t.date}
                      </p>
                      {t.verified && (
                        <div style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          gap: '4px', 
                          color: '#2196F3',
                          fontSize: '0.75rem',
                          fontWeight: 600
                        }}>
                          <CheckCircle2 size={14} />
                          <span>Verified Booking</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '8px', 
            marginTop: '32px' 
          }}>
            {TESTIMONIALS.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setCurrentIndex(i)}
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: currentIndex === i ? 'var(--primary)' : 'var(--gray-300)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'background-color 0.3s ease'
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .carousel-btn:hover {
          transform: translateY(-50%) scale(1.1) !important;
          color: var(--primary) !important;
        }
        @media (max-width: 768px) {
          .carousel-wrapper { padding: 0 10px !important; }
          .carousel-btn { display: none !important; }
          .section { padding: 48px 0 !important; }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
