import React from 'react';
import Seo from '../components/Seo';
import BookingForm from '../components/BookingForm';
import VehicleShowcase from '../components/VehicleShowcase';

const TaxiBooking = () => {
  return (
    <main style={{ paddingTop: '80px' }}>
      <Seo
        title="Car & Taxi Booking in Kanpur, Unnao & Lucknow | Ekadashi Tours"
        description="Book AC cabs, Innova, Ertiga, Fortuner & tempo traveller for airport transfer, outstation and family trips from Kanpur, Unnao and Lucknow. Transparent fare, verified drivers, 24/7 support."
        path="/taxi-booking"
      />
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
