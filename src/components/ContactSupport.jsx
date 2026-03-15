import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, Twitter } from 'lucide-react';

const ContactSupport = () => {
  return (
    <section id="contact" className="section" style={{ backgroundColor: 'var(--white)' }}>
      <div className="container">
        <div className="grid grid-2" style={{ alignItems: 'flex-start', gap: '60px' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Need Help? We're 24/7.</h2>
            <p style={{ color: 'var(--gray-600)', marginBottom: '40px', fontSize: '1.125rem' }}>
              Whether you need to change a booking, have questions about our fleet, or just want to talk about your next trip - we're here for you.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'var(--primary)10', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 style={{ marginBottom: '4px' }}>Phone Support</h4>
                  <a href="tel:+919876543210" style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--primary)' }}>+91-9876-543-210</a>
                  <p style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>Available 24/7 for urgent bookings</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'var(--secondary)10', color: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h4 style={{ marginBottom: '4px' }}>WhatsApp</h4>
                  <a href="https://wa.me/919876543210" style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--secondary)' }}>+91-9876-543-210</a>
                  <p style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>Response time: 2-5 minutes</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'var(--accent)10', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 style={{ marginBottom: '4px' }}>Email Address</h4>
                  <a href="mailto:support@hellokanpurtravels.in" style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--accent)' }}>support@hellokanpurtravels.in</a>
                  <p style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>Response time: 2-4 hours</p>
                </div>
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--gray-50)', padding: '40px', borderRadius: '24px', border: '1px solid var(--gray-100)' }}>
            <h3 style={{ marginBottom: '24px' }}>Visit Our Office</h3>
            <div style={{ display: 'flex', gap: '16px', marginBottom: '32px' }}>
              <div style={{ color: 'var(--primary)' }}><MapPin size={24} /></div>
              <p style={{ fontSize: '1.125rem' }}>
                123, Civil Lines, Kanpur, <br />
                Uttar Pradesh 208001, India
              </p>
            </div>
            <div style={{ width: '100%', height: '250px', backgroundColor: 'var(--gray-200)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gray-500)' }}>
              [Interactive Map Placeholder]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => (
  <footer style={{ backgroundColor: 'var(--gray-900)', color: 'var(--white)', padding: '80px 0 40px' }}>
    <div className="container">
      <div className="grid grid-4" style={{ marginBottom: '60px' }}>
        <div>
          <h3 style={{ color: 'white', marginBottom: '24px' }}>Hello Kanpur Travels</h3>
          <p style={{ color: 'var(--gray-400)', fontSize: '0.875rem', marginBottom: '24px' }}>
            Kanpur's most trusted premium travel partner. Specializing in luxury car rentals, outstation trips, and group tours.
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <Facebook size={20} style={{ cursor: 'pointer', color: 'var(--gray-400)' }} />
            <Instagram size={20} style={{ cursor: 'pointer', color: 'var(--gray-400)' }} />
            <Twitter size={20} style={{ cursor: 'pointer', color: 'var(--gray-400)' }} />
          </div>
        </div>

        <div>
          <h4 style={{ color: 'white', marginBottom: '24px' }}>Quick Links</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--gray-400)', fontSize: '0.875rem' }}>
            <li className="footer-link">Home</li>
            <li className="footer-link">Services</li>
            <li className="footer-link">Vehicle Fleet</li>
            <li className="footer-link">Tour Packages</li>
            <li className="footer-link">Contact Us</li>
          </ul>
        </div>

        <div>
          <h4 style={{ color: 'white', marginBottom: '24px' }}>Legal</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--gray-400)', fontSize: '0.875rem' }}>
            <li className="footer-link">Privacy Policy</li>
            <li className="footer-link">Terms & Conditions</li>
            <li className="footer-link">Cancellation Policy</li>
            <li className="footer-link">Refund Policy</li>
          </ul>
        </div>

        <div>
          <h4 style={{ color: 'white', marginBottom: '24px' }}>Newsletter</h4>
          <p style={{ color: 'var(--gray-400)', fontSize: '0.875rem', marginBottom: '20px' }}>
            Get exclusive offers and travel tips.
          </p>
          <div style={{ display: 'flex', gap: '8px' }}>
            <input type="email" placeholder="Email" style={{
              flex: 1,
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '10px 16px',
              borderRadius: '8px',
              color: 'white',
              fontSize: '0.875rem'
            }} />
            <button className="btn btn-primary" style={{ padding: '10px 16px', fontSize: '0.875rem' }}>Join</button>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '40px', textAlign: 'center' }}>
        <p style={{ color: 'var(--gray-500)', fontSize: '0.75rem' }}>
          © 2024 Hello Kanpur Travels. All rights reserved. GST Registered: 18ABCDE1234F1Z5.
        </p>
      </div>
    </div>
    <style>{`
      .footer-link { cursor: pointer; transition: color 0.2s; }
      .footer-link:hover { color: var(--primary); }
    `}</style>
  </footer>
);

export default ContactSupport;
