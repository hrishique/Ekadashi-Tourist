import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, ChevronUp, MessageCircle, ExternalLink, HelpCircle } from 'lucide-react';

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
      },
      {
        q: "Are there extra charges for the driver?",
        a: "No. The driver cost is included in the price per km. There's a fixed ₹500 driver fee (one-time), but no additional hourly charges for the driver waiting, rest breaks, or reasonable detours."
      },
      {
        q: "Do you offer discounts for group bookings?",
        a: "Yes! Group bookings (6+ people) get 5% discount. Advance bookings (7+ days ahead) get 5% discount. Maximum discount: 10%. Discounts apply automatically when you fill the booking form."
      },
      {
        q: "How far in advance should I book?",
        a: "You can book anytime from tomorrow to 365 days ahead. For popular destinations, we recommend booking 7+ days ahead (also gets you a 5% discount!). Last-minute bookings (today) are possible if vehicle is available."
      },
      {
        q: "What payment methods do you accept?",
        a: "Online: Credit card, Debit card, UPI, Net banking via Razorpay. Offline: Bank transfer, UPI transfer, cash at pickup. A 2% convenience fee applies for card payments (waived for UPI/bank transfer)."
      },
      {
        q: "Is GST charged on top of the quoted price?",
        a: "No. The price we show you is the FINAL price, including all taxes and GST. What you see is what you pay. Zero hidden charges. The price breakdown shows all components."
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
      },
      {
        q: "Can I track my vehicle during the trip?",
        a: "Yes! All vehicles have GPS tracking. You'll receive: (1) Driver's phone number, (2) Live location link, (3) Estimated arrival updates. Real-time tracking for peace of mind."
      },
      {
        q: "What's your safety protocol?",
        a: "Safety is our #1 priority: (1) Verified drivers only, (2) Regular vehicle maintenance, (3) ABS brakes on all vehicles, (4) Emergency contact 24/7, (5) Speed monitoring systems. Your safety, our commitment."
      },
      {
        q: "Do you provide emergency support 24/7?",
        a: "Yes. 24/7 emergency support: Call +91-9876-543-210, WhatsApp anytime, or email. Response time target: 2 minutes by phone/WhatsApp, 4 hours by email. We're always here for you."
      }
    ]
  },
  {
    category: "Vehicles & Features",
    questions: [
      {
        q: "What's the difference between vehicles?",
        a: "Each vehicle serves different needs: Swift (budget, city), Creta (luxury, comfort), Innova (family, space), Ertiga (groups), Tempo (large groups). Prices range ₹15-22/km. Use our VEHICLE GUIDE to compare.",
        link: "#vehicles",
        linkText: "Vehicle showcase"
      },
      {
        q: "Do all vehicles have AC and USB chargers?",
        a: "All vehicles have AC. Most have USB chargers (1-4 per vehicle). The booking form shows specific features for each vehicle you select. Check the vehicle details before confirming."
      },
      {
        q: "Can I request a specific vehicle?",
        a: "Yes! You can select your preferred vehicle while booking. If unavailable, you'll see alternatives. Special requests can also be added in the 'Notes' field during booking."
      },
      {
        q: "What's your luggage capacity?",
        a: "Luggage varies by vehicle: Swift (150L), Nexon (160L), Creta (180L), Ertiga (200L), Innova (240L), Tempo (400L). For oversized luggage, mention in 'Special Requests' and we'll arrange roof racks if needed."
      },
      {
        q: "Do you provide child car seats?",
        a: "Yes, child seats available on request. Specify age/weight in 'Special Requests' during booking. Standard seats suitable for 3-12 years, 15-36 kg. Booster seats for younger children. ₹200 additional charge."
      }
    ]
  },
  {
    category: "Trip Planning",
    questions: [
      {
        q: "What's included in tour packages?",
        a: "Our tour packages include: (1) Vehicle rental, (2) Professional driver, (3) Fuel, (4) Insurance, (5) GPS tracking, (6) 24/7 support. Packages typically don't include: hotels, meals, attraction fees. Detailed itinerary in each package listing.",
        link: "#booking",
        linkText: "Tour packages"
      },
      {
        q: "Can you customize a tour package?",
        a: "Absolutely! All packages are customizable. You can modify: (1) Duration, (2) Hotels, (3) Itinerary, (4) Meal preferences, (5) Activity mix. GET CUSTOM QUOTE for your custom trip.",
        link: "#contact",
        linkText: "Contact form"
      },
      {
        q: "What about fuel charges?",
        a: "Fuel is INCLUDED in our ₹/km pricing. You pay: (1) Distance × ₹/km rate, (2) Fixed driver fee, (3) Tolls/parking (est.). Fuel consumption varies by vehicle, but it's all calculated in the price you see."
      },
      {
        q: "Do you provide meal arrangements?",
        a: "We don't provide meals, but we can: (1) Suggest restaurants, (2) Arrange stops at good eateries, (3) Coordinate with hotels for meals. For tour packages, meal options available at additional cost. Mention preferences in booking notes."
      },
      {
        q: "What's the best time to visit North India?",
        a: "Each destination has a best season: Manali/Shimla (April-July), Chardham (May-June), Agra (Oct-March), Jaipur (Oct-March). Ask our team for seasonal guides anytime."
      }
    ]
  },
  {
    category: "How-To Guides",
    questions: [
      {
        q: "How to plan a multi-day trip?",
        a: "Step-by-step: (1) Choose trip type (Rental/Tour), (2) Select dates, (3) Pick vehicle, (4) Set itinerary, (5) Book online. Our drivers know all major routes and can suggest stops."
      },
      {
        q: "How to use the pricing calculator?",
        a: "Easy! Enter: (1) Trip type, (2) From/To locations, (3) Dates, (4) Number of passengers. Price calculates instantly with breakdown. Updates automatically as you change inputs. Try CALCULATOR now.",
        link: "#calculator",
        linkText: "Pricing calculator"
      },
      {
        q: "How to track your journey?",
        a: "You'll get: (1) GPS live location link in confirmation email, (2) Driver's phone number, (3) Vehicle number & details. Click the location link to see real-time position. No special app needed."
      },
      {
        q: "How to earn loyalty points?",
        a: "Every booking earns loyalty points: 1 point per ₹100 spent. Redeem for: (1) Discounts on future trips, (2) Free vehicle upgrades, (3) Exclusive offers. Join our program during booking."
      },
      {
        q: "Understanding our pricing",
        a: "Price = (Distance × Rate/km) + Driver fee + Toll estimate - Discounts. The CALCULATOR shows real-time breakdown. No hidden charges."
      }
    ]
  }
];

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState(FAQ_DATA[0].category);
  const [openQuestion, setOpenQuestion] = useState(null);

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
  }, [searchTerm, activeCategory]);

  const toggleQuestion = (q) => {
    setOpenQuestion(openQuestion === q ? null : q);
  };

  return (
    <section id="faq" className="section" style={{ backgroundColor: 'white' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Frequently Asked Questions</h2>
          <p style={{ color: 'var(--gray-600)' }}>Answering 80% of your common queries instantly.</p>
        </div>

        {/* Search Bar */}
        <div style={{ position: 'relative', marginBottom: '40px' }}>
          <Search style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--gray-400)' }} size={20} />
          <input 
            type="text" 
            placeholder="Search FAQs (e.g., 'cancellation', 'pricing', 'safety')..." 
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
            <p style={{ fontWeight: 600 }}>{filteredData.length} results for "{searchTerm}"</p>
            <button 
              onClick={() => setSearchTerm('')} 
              style={{ color: 'var(--primary)', fontWeight: 700, background: 'none', border: 'none', cursor: 'pointer' }}
            >Clear search</button>
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
              <p style={{ color: 'var(--gray-500)', marginBottom: '24px' }}>No FAQs found. Would you like to ask us directly?</p>
              <button 
                className="btn btn-primary" 
                onClick={() => window.location.href = 'https://wa.me/919876543210'}
                style={{ display: 'inline-flex', gap: '8px' }}
              >
                <MessageCircle size={18} /> ASK VIA WHATSAPP
              </button>
            </div>
          )}
        </div>

        {/* Footer Support CTA */}
        <div style={{ marginTop: '60px', textAlign: 'center', padding: '32px', backgroundColor: 'var(--gray-900)', borderRadius: '24px', color: 'white' }}>
          <h3 style={{ marginBottom: '8px', color: 'white' }}>Still have questions?</h3>
          <p style={{ color: 'var(--gray-400)', marginBottom: '24px', fontSize: '0.875rem' }}>Our team is available 24/7 to help you plan your perfect journey.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-primary" onClick={() => window.location.href = 'tel:+919876543210'}>CALL US NOW</button>
            <button className="btn btn-secondary" style={{ backgroundColor: 'white', color: 'var(--gray-900)' }} onClick={() => window.location.href = '#contact'}>CONTACT SUPPORT</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
