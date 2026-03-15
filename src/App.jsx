import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import VehicleShowcase from './components/VehicleShowcase';
import Testimonials from './components/Testimonials';
import BookingForm from './components/BookingForm';
import FAQ from './components/FAQ';
import ContactSupport, { Footer } from './components/ContactSupport';
import StickyWidget from './components/StickyWidget';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <VehicleShowcase />
        <Testimonials />
        <BookingForm />
        <FAQ />
        <ContactSupport />
      </main>
      <Footer />
      <StickyWidget />

      <style>{`
        .app-wrapper {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        main {
          flex: 1;
        }
      `}</style>
    </div>
  );
}

export default App;
