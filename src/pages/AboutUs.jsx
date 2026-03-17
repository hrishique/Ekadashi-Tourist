import React from 'react';
import { Users, Target, ShieldCheck, Clock, Award, Headphones } from 'lucide-react';
import { CONFIG } from '../config';

const AboutUs = () => {
  return (
    <main style={{ paddingTop: '80px' }}>
      <section className="section" style={{ backgroundColor: 'var(--gray-900)', color: 'white', padding: '120px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <h1 style={{ fontSize: '4rem', marginBottom: '24px', color: 'white' }}>Trusted by Thousands Since 2014</h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--gray-400)', lineHeight: '1.6' }}>
              Ekadashi Tourist Family is more than just a car rental service. We are your partners in creating lasting memories across the length and breadth of India.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ padding: '100px 0' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '80px', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Our Mission</h2>
              <p style={{ color: 'var(--gray-600)', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '32px' }}>
                To provide the most transparent, comfortable, and reliable travel experience in India. We believe that every journey should be as beautiful as the destination itself.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ color: 'var(--primary)' }}><ShieldCheck size={24} /></div>
                  <div>
                    <h4 style={{ marginBottom: '4px' }}>Safety First</h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>GPS tracked fleets and verified drivers.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ color: 'var(--primary)' }}><Clock size={24} /></div>
                  <div>
                    <h4 style={{ marginBottom: '4px' }}>24/7 Support</h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>Round-the-clock team available for you.</p>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{ backgroundColor: 'var(--primary)', position: 'absolute', inset: '20px -20px -20px 20px', borderRadius: '32px', zIndex: 0 }}></div>
              <img 
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80" 
                alt="Our Fleet" 
                style={{ width: '100%', height: '500px', objectFit: 'cover', borderRadius: '32px', position: 'relative', zIndex: 1 }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--gray-50)', padding: '100px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Why We Stand Out</h2>
            <p style={{ color: 'var(--gray-600)' }}>The values that drive Ekadashi Tourist Family forward.</p>
          </div>
          <div className="grid grid-3">
            {[
              { icon: Award, title: "10+ Years Experience", desc: "A decade of mastering the roads and serving diverse client needs." },
              { icon: Users, title: "Professional Drivers", desc: "Expert navigators who prioritize your comfort and local insights." },
              { icon: Headphones, title: "Personalized Tours", desc: "We don't just rent cars; we design custom travel itineraries." }
            ].map((feature, i) => (
              <div key={i} style={{ padding: '40px', backgroundColor: 'white', borderRadius: '24px', boxShadow: 'var(--shadow-md)' }}>
                <div style={{ color: 'var(--primary)', marginBottom: '20px' }}>
                  <feature.icon size={40} />
                </div>
                <h3 style={{ marginBottom: '12px' }}>{feature.title}</h3>
                <p style={{ color: 'var(--gray-600)', lineHeight: '1.6' }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
