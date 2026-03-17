import React from 'react';
import BookingForm from '../components/BookingForm';
import BusRental from '../components/BusRental';

const BusBooking = () => {
  return (
    <main style={{ paddingTop: '80px' }}>
      <section className="section" style={{ backgroundColor: 'var(--gray-900)', color: 'white', padding: '100px 0' }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '16px', color: 'white' }}>Luxury Bus Rentals</h1>
          <p style={{ color: 'var(--gray-400)', fontSize: '1.25rem' }}>35, 45, 55 Seater and Sleeper Buses for events and group travel.</p>
        </div>
      </section>

      <BusRental />
      
      <div style={{ backgroundColor: 'var(--gray-50)', padding: '100px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem' }}>Book Your Group Trip</h2>
            <p style={{ color: 'var(--gray-600)' }}>Fill in the details below to get an instant quote and confirm your coach.</p>
          </div>
          <BookingForm initialTripType="Bus Rental" />
        </div>
      </div>
    </main>
  );
};

export default BusBooking;
