import React, { useState } from 'react';
import { 
  Phone, Mail, MessageSquare, MapPin, Clock, 
  ShieldCheck, Award, Star, CheckCircle2, 
  Facebook, Twitter, Instagram, Linkedin, Send, ChevronDown, ChevronUp
} from 'lucide-react';

const ContactSupport = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    // Simulate sending
    setTimeout(() => {
      setIsSending(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="section" style={{ backgroundColor: 'white' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Need Help? We're Here 24/7</h2>
          <p style={{ color: 'var(--gray-600)' }}>Choose your preferred way to reach us.</p>
        </div>

        <div className="grid grid-2" style={{ gap: '60px', alignItems: 'start' }}>
          {/* Contact Channels */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            <div style={{ padding: '32px', backgroundColor: 'var(--gray-50)', borderRadius: '24px', border: '1px solid var(--gray-100)' }}>
              <div style={{ width: '48px', height: '48px', backgroundColor: 'var(--primary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', color: 'white' }}>
                <Phone size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Phone Support</h3>
              <p style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--gray-900)', marginBottom: '4px' }}>+91-9876-543-210</p>
              <p style={{ fontSize: '0.875rem', color: 'var(--gray-500)', marginBottom: '20px' }}>Available 24/7 for urgent bookings</p>
              <button className="btn btn-primary" style={{ width: '100%' }} onClick={() => window.location.href = 'tel:+919876543210'}>CALL US NOW</button>
            </div>

            <div style={{ padding: '32px', backgroundColor: 'var(--gray-50)', borderRadius: '24px', border: '1px solid var(--gray-100)' }}>
              <div style={{ width: '48px', height: '48px', backgroundColor: '#25D366', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', color: 'white' }}>
                <MessageSquare size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>WhatsApp Chat</h3>
              <p style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--gray-900)', marginBottom: '4px' }}>+91-9876-543-210</p>
              <p style={{ fontSize: '0.875rem', color: 'var(--gray-500)', marginBottom: '20px' }}>Avg. response time: 2-5 minutes</p>
              <button className="btn btn-primary" style={{ width: '100%', backgroundColor: '#25D366', borderColor: '#25D366' }} onClick={() => window.location.href = 'https://wa.me/919876543210'}>MESSAGE US</button>
            </div>

            <div style={{ gridColumn: '1 / -1', padding: '32px', backgroundColor: 'var(--gray-50)', borderRadius: '24px', border: '1px solid var(--gray-100)', display: 'flex', gap: '24px', alignItems: 'center' }}>
               <div style={{ width: '48px', height: '48px', backgroundColor: 'var(--secondary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0 }}>
                <MapPin size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '4px' }}>Office Address</h3>
                <p style={{ color: 'var(--gray-600)', fontSize: '0.9375rem' }}>123 Main Street, Kanpur 208001, Uttar Pradesh, India</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{ padding: '40px', backgroundColor: 'white', borderRadius: '32px', border: '1px solid var(--gray-100)', boxShadow: 'var(--shadow-xl)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Send Us a Message</h3>
            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px' }}>
              <div className="grid grid-2">
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-input" placeholder="Your Name" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone</label>
                  <input type="tel" className="form-input" placeholder="Your Phone" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input type="email" className="form-input" placeholder="your@email.com" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
              </div>
              <div className="form-group">
                <label className="form-label">Subject</label>
                <select className="form-input" value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})}>
                  <option>General Inquiry</option>
                  <option>Booking Issue</option>
                  <option>Vehicle Question</option>
                  <option>Complaint</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea className="form-input" rows="4" placeholder="How can we help you?" required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', height: '56px' }} disabled={isSending}>
                {isSending ? 'SENDING...' : isSuccess ? 'MESSAGE SENT! ✓' : 'SEND MESSAGE'}
              </button>
              {isSuccess && <p style={{ color: 'var(--success)', textAlign: 'center', fontSize: '0.875rem', fontWeight: 600 }}>We'll reply to your email within 4 hours.</p>}
            </form>
          </div>
        </div>

        {/* Credentials Section */}
        <div style={{ marginTop: '100px', paddingTop: '80px', borderTop: '1px solid var(--gray-100)' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.875rem', color: 'var(--gray-500)', fontWeight: 700 }}>Trusted by Thousands • Certified & Insured</h4>
          </div>
          <div className="grid grid-4" style={{ gap: '30px' }}>
            <div style={{ textAlign: 'center' }}>
              <ShieldCheck size={32} color="var(--primary)" style={{ marginBottom: '16px' }} />
              <h5 style={{ fontSize: '1rem', marginBottom: '4px' }}>Full Insurance</h5>
              <p style={{ fontSize: '0.8125rem', color: 'var(--gray-500)' }}>Comprehensive passenger coverage</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <UserCheck size={32} color="var(--primary)" style={{ marginBottom: '16px' }} />
              <h5 style={{ fontSize: '1rem', marginBottom: '4px' }}>Verified Drivers</h5>
              <p style={{ fontSize: '0.8125rem', color: 'var(--gray-500)' }}>Background checked & trained</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Star size={32} color="var(--primary)" style={{ marginBottom: '16px' }} />
              <h5 style={{ fontSize: '1rem', marginBottom: '4px' }}>4.7/5 Rated</h5>
              <p style={{ fontSize: '0.8125rem', color: 'var(--gray-500)' }}>Based on 250+ recent reviews</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Award size={32} color="var(--primary)" style={{ marginBottom: '16px' }} />
              <h5 style={{ fontSize: '1rem', marginBottom: '4px' }}>GST Registered</h5>
              <p style={{ fontSize: '0.8125rem', color: 'var(--gray-500)' }}>18ABCDE1234F1Z5</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const footerLinks = {
    company: ['About Us', 'Contact', 'Blog', 'Careers'],
    services: ['Vehicles', 'Tour Packages', 'Pricing', 'Reviews'],
    legal: ['Privacy Policy', 'Terms & Conditions', 'Cancellation Policy', 'Refund Policy']
  };

  return (
    <footer style={{ backgroundColor: 'var(--gray-900)', color: 'white', paddingTop: '80px', paddingBottom: '40px' }}>
      <div className="container">
        <div className="grid grid-4" style={{ gap: '60px', marginBottom: '80px' }}>
          {/* Brand Column */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--primary)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontWeight: 800, fontSize: '1.5rem' }}>HK</span>
              </div>
              <span style={{ fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.5px' }}>Hello Kanpur Travels</span>
            </div>
            <p style={{ color: 'var(--gray-400)', fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: '24px' }}>
              Premium travel rental booking service in Kanpur. Luxury cars and group travel across India.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="#" style={{ color: 'white' }}><Facebook size={20} /></a>
              <a href="#" style={{ color: 'white' }}><Twitter size={20} /></a>
              <a href="#" style={{ color: 'white' }}><Instagram size={20} /></a>
              <a href="#" style={{ color: 'white' }}><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="footer-links-col">
              <h4 style={{ color: 'white', marginBottom: '24px', textTransform: 'uppercase', fontSize: '0.875rem', letterSpacing: '0.05em' }}>{title}</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {links.map(link => (
                  <li key={link} style={{ marginBottom: '12px' }}>
                    <a href="#" style={{ color: 'var(--gray-400)', textDecoration: 'none', fontSize: '0.9375rem', transition: 'color 0.3s' }} className="footer-link">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Column */}
          <div style={{ gridColumn: 'span 1' }}>
            <h4 style={{ color: 'white', marginBottom: '24px', textTransform: 'uppercase', fontSize: '0.875rem', letterSpacing: '0.05em' }}>Newsletter</h4>
            <p style={{ color: 'var(--gray-400)', fontSize: '0.875rem', marginBottom: '20px' }}>Get exclusive offers & travel updates.</p>
            <div style={{ position: 'relative' }}>
              <input type="email" placeholder="Email address" style={{ width: '100%', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '12px 16px', color: 'white', fontSize: '0.875rem' }} />
              <button style={{ position: 'absolute', right: '8px', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'var(--primary)', border: 'none', borderRadius: '8px', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', cursor: 'pointer' }}>
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <p style={{ color: 'var(--gray-500)', fontSize: '0.8125rem' }}>© 2024 Hello Kanpur Travels. All rights reserved. | Sitemap</p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <span style={{ color: 'var(--gray-500)', fontSize: '0.8125rem' }}>Full Stack Experience</span>
            <span style={{ color: 'var(--gray-500)', fontSize: '0.8125rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <CheckCircle2 size={12} color="var(--primary)" /> SSL Secured
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .footer-link:hover { color: var(--primary) !important; }
        @media (max-width: 992px) {
          .grid-4 { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 576px) {
          .grid-4 { grid-template-columns: 1fr !important; }
          .footer-links-col { border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 20px; }
        }
      `}</style>
    </footer>
  );
};

export default ContactSupport;
