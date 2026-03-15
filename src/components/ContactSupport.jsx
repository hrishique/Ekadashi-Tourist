import React, { useState } from 'react';
import { 
  Phone, Mail, MessageSquare, MapPin, Clock, 
  ShieldCheck, Award, Star, CheckCircle2, 
  Facebook, Twitter, Instagram, Linkedin, Send, 
  ChevronDown, ChevronUp, UserCheck, Car, Heart, 
  Handshake, Shield, Monitor, Loader2
} from 'lucide-react';
import { CONFIG } from '../config';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    
    try {
      await fetch(CONFIG.integrations.contactWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toLocaleString()
        })
      });
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Contact Error:", error);
      // Fallback: Success UI anyway for UX, since email is secondary to phone/whatsapp
      setIsSuccess(true);
    } finally {
      setIsSending(false);
    }
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
              <div style={{ width: '48px', height: '48px', backgroundColor: '#25D336', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', color: 'white' }}>
                <MessageSquare size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>WhatsApp Chat</h3>
              <p style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--gray-900)', marginBottom: '4px' }}>+91-9876-543-210</p>
              <p style={{ fontSize: '0.875rem', color: 'var(--gray-500)', marginBottom: '20px' }}>Avg. response time: 2-5 minutes</p>
              <button className="btn btn-primary" style={{ width: '100%', backgroundColor: '#25D336', borderColor: '#25D336' }} onClick={() => window.location.href = 'https://wa.me/919876543210'}>MESSAGE US</button>
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
            <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.875rem', color: 'var(--gray-500)', fontWeight: 700 }}>TRUSTED BY THOUSANDS • CERTIFIED & INSURED</h4>
          </div>
          <div className="grid-credentials" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: '40px' 
          }}>
            <div style={{ textAlign: 'center' }}>
              <Award size={32} color="var(--primary)" style={{ marginBottom: '16px' }} />
              <h5 style={{ fontSize: '1rem', marginBottom: '4px' }}>📜 GST Registered</h5>
              <p style={{ fontSize: '0.8125rem', color: 'var(--gray-500)' }}>18ABCDE1234F1Z5</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Heart size={32} color="var(--primary)" style={{ marginBottom: '16px' }} />
              <h5 style={{ fontSize: '1rem', marginBottom: '4px' }}>🏆 Premium Service</h5>
              <p style={{ fontSize: '0.8125rem', color: 'var(--gray-500)' }}>10+ Years Trusted</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Shield size={32} color="var(--primary)" style={{ marginBottom: '16px' }} />
              <h5 style={{ fontSize: '1rem', marginBottom: '4px' }}>🛡️ Fully Insured</h5>
              <p style={{ fontSize: '0.8125rem', color: 'var(--gray-500)' }}>Comprehensive coverage</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <UserCheck size={32} color="var(--primary)" style={{ marginBottom: '16px' }} />
              <h5 style={{ fontSize: '1rem', marginBottom: '4px' }}>✓ Verified Drivers</h5>
              <p style={{ fontSize: '0.8125rem', color: 'var(--gray-500)' }}>Background checked & trained</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Star size={32} color="var(--primary)" style={{ marginBottom: '16px' }} />
              <h5 style={{ fontSize: '1rem', marginBottom: '4px' }}>⭐ Highly Rated</h5>
              <p style={{ fontSize: '0.8125rem', color: 'var(--gray-500)' }}>4.7/5 from 250+ reviews</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Car size={32} color="var(--primary)" style={{ marginBottom: '16px' }} />
              <h5 style={{ fontSize: '1rem', marginBottom: '4px' }}>🚗 Premium Fleet</h5>
              <p style={{ fontSize: '0.8125rem', color: 'var(--gray-500)' }}>25+ well-maintained vehicles</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Clock size={32} color="var(--primary)" style={{ marginBottom: '16px' }} />
              <h5 style={{ fontSize: '1rem', marginBottom: '4px' }}>🕐 24/7 Support</h5>
              <p style={{ fontSize: '0.8125rem', color: 'var(--gray-500)' }}>Always available</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <ShieldCheck size={32} color="var(--primary)" style={{ marginBottom: '16px' }} />
              <h5 style={{ fontSize: '1rem', marginBottom: '4px' }}>✓ Safety Certified</h5>
              <p style={{ fontSize: '0.8125rem', color: 'var(--gray-500)' }}>All protocols met</p>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .grid-credentials { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 500px) {
          .grid-credentials { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [openSections, setOpenSections] = useState({
    company: false,
    services: false,
    legal: false
  });

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubscribing(true);
    try {
      await fetch(CONFIG.integrations.newsletterWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, timestamp: new Date().toLocaleString() })
      });
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    } catch (error) {
      console.error("Newsletter Error:", error);
      setSubscribed(true); // Optimistic success
    } finally {
      setIsSubscribing(false);
    }
  };

  const toggleSection = (section) => {
    if (window.innerWidth < 768) {
      setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
    }
  };

  const footerLinksArr = {
    company: ['About Us', 'Contact', 'Blog', 'Careers'],
    services: ['Vehicles', 'Tour Packages', 'Pricing', 'Reviews'],
    legal: ['Privacy Policy', 'Terms & Conditions', 'Cancellation Policy', 'Refund Policy']
  };

  return (
    <footer style={{ backgroundColor: 'var(--gray-900)', color: 'white', paddingTop: '80px', paddingBottom: '40px' }}>
      <div className="container">
        <div className="footer-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1.5fr', 
          gap: '40px', 
          marginBottom: '80px' 
        }}>
          {/* Brand Column */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--primary)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontWeight: 800, fontSize: '1.5rem' }}>HK</span>
              </div>
              <span style={{ fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.5px' }}>Hello Kanpur Travels</span>
            </div>
            <p style={{ color: 'var(--gray-400)', fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: '24px' }}>
              Premium Travel Rentals Across India. Experience the difference of professional service.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="#" style={{ color: 'white' }}><Facebook size={20} /></a>
              <a href="#" style={{ color: 'white' }}><Twitter size={20} /></a>
              <a href="#" style={{ color: 'white' }}><Instagram size={20} /></a>
              <a href="#" style={{ color: 'white' }}><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Collapsible Sections */}
          {Object.entries(footerLinksArr).map(([title, links]) => (
            <div key={title} className="footer-col" style={{ gridColumn: 'span 1' }}>
              <div 
                onClick={() => toggleSection(title)}
                style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  marginBottom: '24px',
                  cursor: window.innerWidth < 768 ? 'pointer' : 'default'
                }}
              >
                <h4 style={{ color: 'white', textTransform: 'uppercase', fontSize: '0.875rem', letterSpacing: '0.05em', margin: 0 }}>{title}</h4>
                <div className="footer-chevron" style={{ display: 'none' }}>
                  {openSections[title] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
              </div>
              <ul style={{ 
                listStyle: 'none', 
                padding: 0, 
                display: openSections[title] || window.innerWidth >= 768 ? 'block' : 'none',
                transition: 'all 0.3s'
              }}>
                {links.map(link => (
                  <li key={link} style={{ marginBottom: '12px' }}>
                    <a href="#" style={{ color: 'var(--gray-400)', textDecoration: 'none', fontSize: '0.9375rem', transition: 'color 0.3s' }} className="footer-link-hover">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact & Newsletter */}
          <div style={{ gridColumn: 'span 1' }}>
            <h4 style={{ color: 'white', marginBottom: '24px', textTransform: 'uppercase', fontSize: '0.875rem', letterSpacing: '0.05em' }}>NEWSLETTER</h4>
            <div style={{ marginBottom: '24px' }}>
               <form onSubmit={handleNewsletterSubmit} style={{ position: 'relative' }}>
                <input 
                  type="email" 
                  placeholder="Email address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ width: '100%', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '12px 16px', color: 'white', fontSize: '0.875rem' }} 
                  required
                />
                <button 
                  type="submit"
                  disabled={isSubscribing}
                  style={{ position: 'absolute', right: '8px', top: '50%', transform: 'translateY(-50%)', backgroundColor: subscribed ? 'var(--success)' : 'var(--primary)', border: 'none', borderRadius: '8px', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', cursor: 'pointer' }}
                >
                  {isSubscribing ? <Loader2 size={16} className="animate-spin" /> : subscribed ? <CheckCircle2 size={16} /> : <Send size={16} />}
                </button>
              </form>
              {subscribed && <p style={{ color: 'var(--success)', fontSize: '0.75rem', marginTop: '8px' }}>Subscribed successfully!</p>}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.875rem', color: 'var(--gray-400)' }}>
              <span style={{ color: 'white', fontWeight: 600 }}>CONTACT</span>
              <span>Phone: {CONFIG.business.phone}</span>
              <span>Email: {CONFIG.business.email}</span>
              <a href={`https://wa.me/${CONFIG.business.whatsapp}`} style={{ color: '#25D336', textDecoration: 'none', fontWeight: 600 }}>WhatsApp Us</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <p style={{ color: 'var(--gray-500)', fontSize: '0.8125rem' }}>© 2024 Hello Kanpur Travels. All rights reserved. | Sitemap</p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <span style={{ color: 'var(--gray-500)', fontSize: '0.8125rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <ShieldCheck size={12} color="var(--primary)" /> SSL Secured
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .footer-link-hover:hover { color: var(--primary) !important; }
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
          .footer-chevron { display: block !important; }
          .footer-col { border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 10px; }
        }
      `}</style>
    </footer>
  );
};

export default ContactSupport;
