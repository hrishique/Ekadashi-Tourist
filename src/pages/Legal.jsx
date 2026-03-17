import React from 'react';

const LegalLayout = ({ title, children }) => (
  <main style={{ paddingTop: '80px', backgroundColor: 'var(--gray-50)', minHeight: '100vh' }}>
    <section className="section" style={{ padding: '40px 0' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <h1 className="legal-title" style={{ color: 'var(--gray-900)' }}>{title}</h1>
        <div className="legal-box" style={{ 
          backgroundColor: 'white', 
          borderRadius: '32px', 
          boxShadow: 'var(--shadow-lg)',
          lineHeight: '1.8',
          color: 'var(--gray-700)',
          fontSize: '1.125rem'
        }}>
          {children}
        </div>
      </div>
    </section>
    <style>{`
      .legal-title {
        font-size: 3rem;
        margin-bottom: 40px;
      }
      .legal-box {
        padding: 48px;
      }
      @media (max-width: 768px) {
        .legal-title { font-size: 2rem; margin-bottom: 24px; }
        .legal-box { padding: 24px; border-radius: 24px; font-size: 1rem; }
      }
    `}</style>
  </main>
);

export const Terms = () => (
  <LegalLayout title="Terms of Use">
    <h2>1. Introduction</h2>
    <p>Welcome to Ekadashi Tourist Family. By using our website and services, you agree to comply with and be bound by the following terms and conditions.</p>
    
    <h2>2. Booking Policy</h2>
    <p>All bookings are subject to availability. A booking is considered confirmed only after receipt of the advance payment and issuance of a booking ID.</p>
    
    <h2>3. User Responsibilities</h2>
    <p>Users must provide accurate information during booking. Any damage to the vehicle during the rental period due to passenger negligence may result in additional charges.</p>
    
    <h2>4. Liability</h2>
    <p>Ekadashi Tourist Family is not liable for any personal belongings left in the vehicle. While we prioritize safety, we are not responsible for delays caused by traffic, weather, or road conditions.</p>
    
    <h2>5. Governing Law</h2>
    <p>These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Kanpur, Uttar Pradesh.</p>
  </LegalLayout>
);

export const Privacy = () => (
  <LegalLayout title="Privacy Policy">
    <h2>1. Data Collection</h2>
    <p>We collect personal information such as name, contact number, email, and travel details to facilitate your bookings and provide a personalized experience.</p>
    
    <h2>2. Use of Information</h2>
    <p>Your data is used to process bookings, send confirmations, and communicate important travel updates. We do not sell your personal data to third parties.</p>
    
    <h2>3. Data Protection</h2>
    <p>We implement industry-standard security measures to protect your information from unauthorized access, alteration, or disclosure.</p>
    
    <h2>4. Cookies</h2>
    <p>Our website uses cookies to enhance user experience and analyze site traffic. You can choose to disable cookies through your browser settings.</p>
  </LegalLayout>
);

export const RefundPolicy = () => (
  <LegalLayout title="Refund Policy">
    <h2>1. Eligibility</h2>
    <p>Refunds are processed based on the timing of the cancellation relative to the scheduled trip start time.</p>
    
    <h2>2. Processing Time</h2>
    <p>Approved refunds are typically processed within 5-7 working days and credited back to the original payment method.</p>
    
    <h2>3. Booking Fees</h2>
    <p>Please note that any transaction convenience fees or taxes paid at the time of booking are non-refundable.</p>
  </LegalLayout>
);

export const CancellationPolicy = () => (
  <LegalLayout title="Cancellation Policy">
    <h2>1. General Rules</h2>
    <p>Cancellations can be made via our website, WhatsApp, or by calling our 24/7 support line.</p>
    
    <h2>2. Cancellation Charges</h2>
    <ul>
      <li>48+ hours before trip: Free Cancellation (Full Refund)</li>
      <li>24-48 hours before trip: 20% of the booking amount is charged.</li>
      <li>Less than 24 hours before trip: 50% of the booking amount is charged.</li>
      <li>No Show: No refund will be provided.</li>
    </ul>
    
    <h2>3. Force Majeure</h2>
    <p>In case of cancellations due to natural disasters, government restrictions, or other unforeseen events beyond our control, we may offer a travel credit instead of a cash refund.</p>
  </LegalLayout>
);
