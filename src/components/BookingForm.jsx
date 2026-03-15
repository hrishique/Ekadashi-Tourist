import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Users, Car, Check, ChevronRight, ChevronLeft, CreditCard } from 'lucide-react';

const steps = ["Trip Details", "Vehicle Selection", "Passenger Info", "Review"];

const BookingForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    tripType: 'Outstation',
    pickupDate: '',
    returnDate: '',
    pickupLocation: '',
    dropLocation: '',
    passengers: 1,
    vehicle: null,
    name: '',
    phone: '',
    email: ''
  });

  const vehicles = [
    { id: 1, name: "Maruti Swift", rate: 12, capacity: 4, type: "Hatchback" },
    { id: 2, name: "Toyota Fortuner", rate: 18, capacity: 7, type: "Luxury SUV" },
    { id: 3, name: "Tempo Traveller", rate: 22, capacity: 14, type: "Van" }
  ];

  const calculatePrice = () => {
    if (!formData.vehicle) return 0;
    const distance = 250; // Mock distance for calculation
    let base = distance * formData.vehicle.rate;
    let driverFee = 500;
    let discount = 0;
    
    if (formData.passengers > 5) discount += base * 0.1;
    
    return base + driverFee - discount;
  };

  const nextStep = () => setStep(s => Math.min(s + 1, 4));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const selectVehicle = (v) => {
    setFormData(prev => ({ ...prev, vehicle: v }));
    nextStep();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `New Booking Request from Hello Kanpur Travels:%0AName: ${formData.name}%0APhone: ${formData.phone}%0ATrip: ${formData.pickupLocation} to ${formData.dropLocation}%0AVehicle: ${formData.vehicle?.name}%0APrice: ₹${calculatePrice()}`;
    window.open(`https://wa.me/919876543210?text=${message}`);
  };

  return (
    <section id="booking" className="section" style={{ backgroundColor: 'var(--white)' }}>
      <div className="container">
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Book Your Journey</h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '24px' }}>
              {steps.map((s, i) => (
                <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: step > i + 1 ? 'var(--primary)' : step === i + 1 ? 'var(--primary)' : 'var(--gray-200)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.875rem',
                    fontWeight: 700
                  }}>
                    {step > i + 1 ? <Check size={16} /> : i + 1}
                  </div>
                  <span style={{ 
                    fontSize: '0.75rem', 
                    fontWeight: 600, 
                    color: step >= i + 1 ? 'var(--gray-900)' : 'var(--gray-400)',
                    display: 'none',
                    '@media (min-width: 640px)': { display: 'block' }
                  }}>{s}</span>
                  {i < steps.length - 1 && <div style={{ width: '40px', height: '2px', backgroundColor: step > i + 1 ? 'var(--primary)' : 'var(--gray-200)' }}></div>}
                </div>
              ))}
            </div>
          </div>

          <div style={{ 
            backgroundColor: 'white', 
            borderRadius: '24px', 
            boxShadow: 'var(--shadow-xl)', 
            border: '1px solid var(--gray-100)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            minHeight: '500px'
          }}>
            <div style={{ padding: '40px', flex: 1 }}>
              {step === 1 && (
                <div className="fade-in">
                  <h3 style={{ marginBottom: '24px' }}>Trip Details</h3>
                  <div className="grid grid-2">
                    <div className="form-group">
                      <label className="form-label">Trip Type</label>
                      <select name="tripType" value={formData.tripType} onChange={handleInputChange} className="form-input">
                        <option>Local Taxi</option>
                        <option>Outstation</option>
                        <option>Car Rental</option>
                        <option>Tempo Tourist</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Passengers</label>
                      <input type="number" name="passengers" value={formData.passengers} onChange={handleInputChange} min="1" max="25" className="form-input" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Pickup Date</label>
                      <input type="date" name="pickupDate" value={formData.pickupDate} onChange={handleInputChange} className="form-input" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Pickup Location</label>
                      <input type="text" name="pickupLocation" value={formData.pickupLocation} onChange={handleInputChange} placeholder="e.g. Kanpur Central" className="form-input" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Drop Location</label>
                      <input type="text" name="dropLocation" value={formData.dropLocation} onChange={handleInputChange} placeholder="e.g. Amausi Airport Lucknow" className="form-input" />
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="fade-in">
                  <h3 style={{ marginBottom: '24px' }}>Select Your Vehicle</h3>
                  <div className="grid grid-3">
                    {vehicles.filter(v => v.capacity >= formData.passengers).map(v => (
                      <div key={v.id} onClick={() => selectVehicle(v)} style={{
                        padding: '24px',
                        border: '2px solid' + (formData.vehicle?.id === v.id ? ' var(--primary)' : ' var(--gray-100)'),
                        borderRadius: '16px',
                        cursor: 'pointer',
                        transition: 'var(--transition-fast)'
                      }}>
                        <h4 style={{ marginBottom: '8px' }}>{v.name}</h4>
                        <p style={{ color: 'var(--gray-500)', fontSize: '0.875rem', marginBottom: '16px' }}>{v.type}</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontWeight: 700, color: 'var(--primary)' }}>₹{v.rate}/km</span>
                          <span style={{ fontSize: '0.75rem' }}>{v.capacity} Seats</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="fade-in">
                  <h3 style={{ marginBottom: '24px' }}>Passenger Information</h3>
                  <div className="grid grid-2">
                    <div className="form-group">
                      <label className="form-label">Full Name</label>
                      <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="form-input" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone Number (WhatsApp)</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="form-input" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email Address</label>
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="form-input" required />
                    </div>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="fade-in">
                  <h3 style={{ marginBottom: '24px' }}>Review & Confirm</h3>
                  <div style={{ backgroundColor: 'var(--gray-50)', padding: '24px', borderRadius: '16px', marginBottom: '24px' }}>
                    <div className="grid grid-2">
                      <p><strong>Trip:</strong> {formData.pickupLocation} to {formData.dropLocation}</p>
                      <p><strong>Date:</strong> {formData.pickupDate}</p>
                      <p><strong>Vehicle:</strong> {formData.vehicle?.name}</p>
                      <p><strong>Passengers:</strong> {formData.passengers}</p>
                    </div>
                    <div style={{ borderTop: '1px solid var(--gray-200)', marginTop: '20px', paddingTop: '20px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '1.25rem', fontWeight: 700 }}>Total Estimate</span>
                        <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)' }}>₹{calculatePrice()}</span>
                      </div>
                      <p style={{ fontSize: '0.75rem', color: 'var(--gray-500)', marginTop: '8px' }}>*Final price may vary based on actual distance and tolls.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div style={{ padding: '24px 40px', backgroundColor: 'var(--gray-50)', borderTop: '1px solid var(--gray-100)', display: 'flex', justifyContent: 'space-between' }}>
              {step > 1 ? (
                <button onClick={prevStep} className="btn btn-secondary" style={{ gap: '8px' }}>
                  <ChevronLeft size={20} /> Back
                </button>
              ) : <div></div>}
              
              {step < 4 ? (
                <button onClick={nextStep} className="btn btn-primary" style={{ gap: '8px' }}>
                  Next <ChevronRight size={20} />
                </button>
              ) : (
                <button onClick={handleSubmit} className="btn btn-primary" style={{ gap: '8px', padding: '0.75rem 2.5rem' }}>
                  Confirm & Book on WhatsApp
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
