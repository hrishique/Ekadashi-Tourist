import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{
      borderBottom: '1px solid var(--gray-200)',
      padding: '20px 0'
    }}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'transparent',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
          textAlign: 'left'
        }}
      >
        <span style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--gray-900)' }}>{question}</span>
        {isOpen ? <ChevronUp size={20} color="var(--primary)" /> : <ChevronDown size={20} color="var(--gray-400)" />}
      </button>
      {isOpen && (
        <div className="fade-in" style={{ marginTop: '16px', color: 'var(--gray-600)', lineHeight: 1.6 }}>
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "How do I book a trip online?",
      answer: "Booking is simple! Scroll to our 'Book Your Journey' section, fill in your trip details, select your preferred vehicle, and provide your contact info. You'll then be redirected to WhatsApp to confirm with our team."
    },
    {
      question: "Are there any hidden charges?",
      answer: "No, we take pride in our 100% transparent pricing. The estimated price you see includes the base fare and driver fees. Tolls, parking, and state taxes are extra and charged as per actuals."
    },
    {
      question: "Are your drivers verified and trained?",
      answer: "Yes, all our drivers undergo rigorous background checks and have at least 8 years of professional driving experience. Your safety is our top priority."
    },
    {
      question: "What is your cancellation policy?",
      answer: "Cancellations made 24 hours before the trip are free. For same-day cancellations, a small convenience fee may apply. Please contact our support for specific cases."
    },
    {
      question: "Do you provide emergency support?",
      answer: "Yes, we provide 24/7 technical and emergency support. All our vehicles are equipped with GPS tracking, and our team is always just a call away."
    }
  ];

  return (
    <section id="faq" className="section" style={{ backgroundColor: 'var(--gray-50)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Frequently Asked Questions</h2>
          <p style={{ color: 'var(--gray-600)', maxWidth: '600px', margin: '0 auto' }}>
            Got questions? We've got answers. If you don't find what you're looking for, feel free to contact us.
          </p>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'white', padding: '40px', borderRadius: '24px', boxShadow: 'var(--shadow-md)' }}>
          {faqs.map((faq, i) => (
            <FAQItem key={i} {...faq} />
          ))}
          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <p style={{ color: 'var(--gray-600)', marginBottom: '16px' }}>Still have questions?</p>
            <a href="tel:+919876543210" className="btn btn-secondary" style={{ gap: '8px' }}>
              <HelpCircle size={20} /> Ask Our Experts
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
