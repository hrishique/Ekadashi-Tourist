import React from 'react';
import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import VehicleShowcase from '../components/VehicleShowcase';
import BusRental from '../components/BusRental';
import Testimonials from '../components/Testimonials';
import PricingCalculator from '../components/PricingCalculator';
import TourPackages from '../components/TourPackages';
import FAQ from '../components/FAQ';
import ConnectSection from '../components/ConnectSection';
import ContactSupport from '../components/ContactSupport';

const Home = () => {
  const { t } = useTranslation();

  return (
    <main>
      <Hero />
      <WhyChooseUs />
      
      {/* Dynamic Entry Points */}
      <section className="section" style={{ backgroundColor: 'white', padding: '100px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{t('home.services_title')}</h2>
            <p style={{ color: 'var(--gray-600)', fontSize: '1.125rem' }}>{t('home.services_subtitle')}</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ padding: '40px', backgroundColor: 'var(--gray-50)', borderRadius: '24px', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🚖</div>
              <h3 style={{ marginBottom: '16px' }}>{t('home.taxi_title')}</h3>
              <p style={{ color: 'var(--gray-600)', marginBottom: '24px' }}>{t('home.taxi_desc')}</p>
              <a href="/taxi-booking" className="btn btn-primary">{t('hero.cta_taxi')}</a>
            </div>
            <div style={{ padding: '40px', backgroundColor: 'var(--gray-50)', borderRadius: '24px', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🚌</div>
              <h3 style={{ marginBottom: '16px' }}>{t('home.bus_title')}</h3>
              <p style={{ color: 'var(--gray-600)', marginBottom: '24px' }}>{t('home.bus_desc')}</p>
              <a href="/bus-booking" className="btn btn-primary">{t('hero.cta_bus')}</a>
            </div>
          </div>
        </div>
      </section>

      <TourPackages />
      <Testimonials />
      <PricingCalculator />
      <FAQ />
      <ConnectSection />
      <ContactSupport />
    </main>
  );
};

export default Home;
