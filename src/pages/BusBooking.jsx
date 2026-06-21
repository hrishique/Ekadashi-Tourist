import React from 'react';
import BookingForm from '../components/BookingForm';
import BusRental from '../components/BusRental';

const BusBooking = () => {
  return (
    <main style={{ paddingTop: '80px' }}>
      <section className="section" style={{ backgroundColor: 'var(--gray-900)', color: 'white', padding: '100px 0' }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '16px', color: 'white' }}>Luxury Bus Booking</h1>
          <p style={{ color: 'var(--gray-400)', fontSize: '1.25rem' }}>35, 45, 55 Seater aur Sleeper Bus — event aur group travel ke liye, sabse saste daam mein.</p>
        </div>
      </section>

      <BusRental />

      <div style={{ backgroundColor: 'var(--gray-50)', padding: '100px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem' }}>Apna Group Trip Book Karein</h2>
            <p style={{ color: 'var(--gray-600)' }}>Neeche details bharein, instant quote paayein aur apni coach confirm karein.</p>
          </div>
          <BookingForm initialTripType="Bus Rental" />
        </div>
      </div>
    </main>
  );
};

export default BusBooking;
