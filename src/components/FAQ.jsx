import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, ChevronUp, MessageCircle, ExternalLink, HelpCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { CONFIG } from '../config';

const FAQ = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState("Booking & Pricing");
  const [openQuestion, setOpenQuestion] = useState(null);

  const FAQ_DATA = [
    {
      category: "Booking & Pricing",
      questions: [
        {
          q: "How do I book online?",
          a: "Click 'Book Your Trip' on the homepage. Fill in 4 simple steps: (1) Trip details, (2) Vehicle choice, (3) Passenger info, (4) Confirm & pay. Total time: 5 minutes. You'll get an instant confirmation via email and WhatsApp.",
          link: "#booking",
          linkText: "Go to booking"
        },
        {
          q: "Can I change my booking after confirmation?",
          a: "Yes! You can modify your booking up to 48 hours before your trip. Contact us via WhatsApp, email, or call. Changes are free if the new price is the same or lower. If higher, you pay the difference."
        },
        {
          q: "What's your cancellation policy?",
          a: "Free cancellation up to 48 hours before pickup. Cancel 24-48 hours before: 25% refund. Cancel within 24 hours: 50% refund. No-show: Full charge. Cancellations processed within 3-5 business days."
        }
      ]
    },
    {
      category: "Safety & Insurance",
      questions: [
        {
          q: "Are your drivers verified and trained?",
          a: "Yes, 100%. All drivers undergo: (1) Background check, (2) Driving license verification, (3) Experience verification (8+ years), (4) Customer service training. We're proud of our team."
        },
        {
          q: "What insurance do you provide?",
          a: "Comprehensive insurance on all vehicles. Coverage includes: (1) Vehicle damage, (2) Third-party liability, (3) Passenger safety, (4) Accident assistance. Full details in your confirmation email."
        }
      ]
    }
  ];

  const filteredData = useMemo(() => {
    if (!searchTerm) {
      return FAQ_DATA.find(c => c.category === activeCategory)?.questions || [];
    }
    
    const results = [];
    FAQ_DATA.forEach(cat => {
      cat.questions.forEach(q => {
        if (q.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
            q.a.toLowerCase().includes(searchTerm.toLowerCase())) {
          results.push(q);
        }
      });
    });
    return results;
  }, [searchTerm, activeCategory, FAQ_DATA]);

  const toggleQuestion = (q) => {
    setOpenQuestion(openQuestion === q ? null : q);
  };

  return (
    <section id="faq" className="section" style={{ backgroundColor: 'white' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{t('faq.title')}</h2>
          <p style={{ color: 'var(--gray-600)' }}>{t('faq.subtitle')}</p>
        </div>

        {/* Search Bar */}
        <div style={{ position: 'relative', marginBottom: '40px' }}>
          <Search style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--gray-400)' }} size={20} />
          <input 
            type="text" 
            placeholder={t('faq.search_placeholder')} 
            className="form-input" 
            style={{ paddingLeft: '48px', height: '56px', borderRadius: '16px' }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Category Tabs (Desktop) */}
        {!searchTerm && (
          <div style={{ display: 'flex', gap: '8px', marginBottom: '32px', overflowX: 'auto', paddingBottom: '8px' }}>
            {FAQ_DATA.map(cat => (
              <button 
                key={cat.category}
                onClick={() => {
                  setActiveCategory(cat.category);
                  setOpenQuestion(null);
                }}
                style={{
                  backgroundColor: activeCategory === cat.category ? 'var(--primary)' : 'var(--gray-50)',
                  color: activeCategory === cat.category ? 'white' : 'var(--gray-600)',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '12px',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.3s'
                }}
              >
                {cat.category}
              </button>
            ))}
          </div>
        )}

        {/* Results Info */}
        {searchTerm && (
          <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p style={{ fontWeight: 600 }}>{t('faq.results', { count: filteredData.length, term: searchTerm })}</p>
            <button 
              onClick={() => setSearchTerm('')} 
              style={{ color: 'var(--primary)', fontWeight: 700, background: 'none', border: 'none', cursor: 'pointer' }}
            >{t('faq.clear')}</button>
          </div>
        )}

        {/* Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {filteredData.length > 0 ? (
            filteredData.map((item, idx) => (
              <div 
                key={idx} 
                style={{ 
                  border: '1px solid var(--gray-100)', 
                  borderRadius: '16px', 
                  overflow: 'hidden',
                  backgroundColor: openQuestion === item.q ? 'var(--gray-50)' : 'white',
                  transition: 'all 0.3s'
                }}
              >
                <button 
                  onClick={() => toggleQuestion(item.q)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    border: 'none',
                    background: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontWeight: 600,
                    fontSize: '1rem',
                    color: 'var(--gray-900)'
                  }}
                >
                  <span style={{ paddingRight: '16px' }}>{item.q}</span>
                  {openQuestion === item.q ? <ChevronUp size={20} color="var(--primary)" /> : <ChevronDown size={20} color="var(--gray-400)" />}
                </button>
                
                {openQuestion === item.q && (
                  <div className="fade-in" style={{ padding: '0 24px 24px', color: 'var(--gray-600)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                    <p style={{ marginBottom: item.link ? '16px' : 0 }}>{item.a}</p>
                    {item.link && (
                      <a 
                        href={item.link} 
                        style={{ 
                          display: 'inline-flex', 
                          alignItems: 'center', 
                          gap: '6px', 
                          color: 'var(--primary)', 
                          fontWeight: 700, 
                          textDecoration: 'none' 
                        }}
                      >
                        {item.linkText} <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div style={{ textAlign: 'center', padding: '60px 0', backgroundColor: 'var(--gray-50)', borderRadius: '24px' }}>
              <HelpCircle size={48} color="var(--gray-300)" style={{ marginBottom: '16px' }} />
              <p style={{ color: 'var(--gray-500)', marginBottom: '24px' }}>{t('faq.no_results')}</p>
              <button 
                className="btn btn-primary" 
                onClick={() => window.location.href = `https://wa.me/${CONFIG.business.whatsapp}`}
                style={{ display: 'inline-flex', gap: '8px' }}
              >
                <MessageCircle size={18} /> {t('faq.ask_whatsapp')}
              </button>
            </div>
          )}
        </div>

        {/* Footer Support CTA */}
        <div style={{ marginTop: '60px', textAlign: 'center', padding: '32px', backgroundColor: 'var(--gray-900)', borderRadius: '24px', color: 'white' }}>
          <h3 style={{ marginBottom: '8px', color: 'white' }}>{t('faq.still_questions')}</h3>
          <p style={{ color: 'var(--gray-400)', marginBottom: '24px', fontSize: '0.875rem' }}>{t('faq.team_available')}</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-primary" onClick={() => window.location.href = `tel:${CONFIG.business.phone}`}>{t('faq.call_now')}</button>
            <button className="btn btn-secondary" style={{ backgroundColor: 'white', color: 'var(--gray-900)' }} onClick={() => window.location.href = '#contact'}>{t('faq.contact_support')}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
