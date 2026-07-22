import React from 'react';
import Seo from '../components/Seo';
import BookingForm from '../components/BookingForm';
import BusRental from '../components/BusRental';
import DailyRoutes from '../components/DailyRoutes';

const BusBooking = () => {
  return (
    <main style={{ paddingTop: '80px' }}>
      <Seo
        title="Daily AC Sleeper Bus Booking | Lucknow & Kanpur | Ekadashi Tours"
        description="Book AC Sleeper luxury bus from Lucknow & Kanpur to Khatushyam, Ujjain, Vrindavan, Kainchi Dham, Bageshwar Dham, Sanwariya Seth, Jaipur, Delhi, Nainital. Daily 6pm, 8pm, 9pm. 35/45/55 seater group coach bhi available."
        path="/bus-booking"
      />
      <section className="section bus-hero" style={{ backgroundColor: 'var(--gray-900)', color: 'white', padding: '100px 0' }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '16px', color: 'white' }}>Daily AC Sleeper Bus Booking</h1>
          <p style={{ color: 'var(--gray-400)', fontSize: '1.25rem' }}>
            Lucknow &amp; Kanpur se Khatushyam, Mahakaleshwar, Vrindavan, Kainchi Dham, Bageshwar Dham,
            Sanwariya Seth, Jaipur, Delhi aur Nainital — daily AC sleeper luxury bus. Group travel ke liye
            35, 45, 55 seater aur sleeper coach bhi available.
          </p>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .bus-hero { padding: 56px 0 !important; }
            .bus-hero h1 { font-size: 2rem !important; }
            .bus-hero p { font-size: 1rem !important; }
          }
        `}</style>
      </section>

      <DailyRoutes />

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
