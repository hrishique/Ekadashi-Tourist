import React from 'react';
import BookingForm from '../components/BookingForm';
import VehicleShowcase from '../components/VehicleShowcase';

const TaxiBooking = () => {
  return (
    <main style={{ paddingTop: '80px' }}>
      <section className="section" style={{ backgroundColor: 'var(--gray-900)', color: 'white', padding: '100px 0' }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '16px', color: 'white' }}>Quick Car & Taxi Booking</h1>
          <p style={{ color: 'var(--gray-400)', fontSize: '1.25rem' }}>Solo trip, airport transfer ya outstation family safar — sab kuch ek jagah.</p>
        </div>
      </section>
      
      <VehicleShowcase />
      <BookingForm initialTripType="Outstation" />
    </main>
  );
};

export default TaxiBooking;
