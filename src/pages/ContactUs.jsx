import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from 'lucide-react';
import { CONFIG } from '../config';

const ContactUs = () => {
  return (
    <main style={{ paddingTop: '80px' }}>
      <section className="section" style={{ backgroundColor: 'var(--gray-50)', padding: '100px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '24px' }}>Get in Touch</h1>
            <p style={{ color: 'var(--gray-600)', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto' }}>
              Have questions about a trip or need a custom quote? We're here to help you 24/7.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '60px' }}>
            {/* Contact Form */}
            <div style={{ backgroundColor: 'white', padding: '48px', borderRadius: '32px', boxShadow: 'var(--shadow-xl)' }}>
              <h3 style={{ marginBottom: '32px' }}>Send us a message</h3>
              <form style={{ display: 'grid', gap: '20px' }}>
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input type="text" placeholder="Your name" className="form-input" style={{ height: '56px' }} />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input type="tel" placeholder="+91 XXXXX XXXXX" className="form-input" style={{ height: '56px' }} />
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea placeholder="How can we help you?" className="form-input" style={{ minHeight: '150px', padding: '16px' }}></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ height: '60px', fontSize: '1.125rem' }}>
                  <Send size={20} /> SEND MESSAGE
                </button>
              </form>
            </div>

            {/* Contact Info Cards */}
            <div style={{ display: 'grid', gap: '24px' }}>
              <div style={{ display: 'flex', gap: '24px', padding: '32px', backgroundColor: 'white', borderRadius: '24px', border: '1px solid var(--gray-100)' }}>
                <div style={{ color: 'var(--primary)', backgroundColor: 'var(--primary)15', padding: '16px', borderRadius: '16px', height: 'fit-content' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 style={{ marginBottom: '8px' }}>Call Support</h4>
                  <p style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '4px' }}>{CONFIG.business.phone}</p>
                  <p style={{ color: 'var(--gray-500)', fontSize: '0.875rem' }}>Available 24/7 for urgent bookings.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '24px', padding: '32px', backgroundColor: 'white', borderRadius: '24px', border: '1px solid var(--gray-100)' }}>
                <div style={{ color: '#25D366', backgroundColor: '#25D36615', padding: '16px', borderRadius: '16px', height: 'fit-content' }}>
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h4 style={{ marginBottom: '8px' }}>WhatsApp Us</h4>
                  <p style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '4px' }}>{CONFIG.business.phone}</p>
                  <p style={{ color: 'var(--gray-500)', fontSize: '0.875rem' }}>Text for quick quotes and queries.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '24px', padding: '32px', backgroundColor: 'white', borderRadius: '24px', border: '1px solid var(--gray-100)' }}>
                <div style={{ color: 'var(--primary)', backgroundColor: 'var(--primary)15', padding: '16px', borderRadius: '16px', height: 'fit-content' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 style={{ marginBottom: '8px' }}>Visit Our Office</h4>
                  <p style={{ color: 'var(--gray-900)', fontWeight: 600, marginBottom: '4px' }}>{CONFIG.business.address}</p>
                  <p style={{ color: 'var(--gray-500)', fontSize: '0.875rem' }}>GST: {CONFIG.business.gst}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section style={{ height: '500px', backgroundColor: 'var(--gray-200)' }}>
        <iframe 
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.226920404052!2d80.32432!3d26.4499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c47a32463e231%3A0xc34800b39679c132!2sKanpur%20Central!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
        ></iframe>
      </section>
    </main>
  );
};

export default ContactUs;
