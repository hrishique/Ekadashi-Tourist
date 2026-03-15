import React, { useState, useEffect } from 'react';
import { 
  Calendar, MapPin, Users, Car, Check, ChevronRight, 
  ChevronLeft, CreditCard, Star, Info, Phone, Mail, 
  MessageSquare, AlertCircle, Trash2, Plus
} from 'lucide-react';
import swiftImg from '../assets/swift.png';
import fortunerImg from '../assets/fortuner.png';
import tempoImg from '../assets/tempo.png';

const VEHICLES = [
  { id: 'swift', name: "Maruti Swift", rate: 15, capacity: 4, type: "Budget Hatchback", image: swiftImg, features: ["AC", "USB", "ABS"], rating: 4.8, reviews: 120, tags: ["Family", "Budget"] },
  { id: 'nexon', name: "Tata Nexon", rate: 16, capacity: 5, type: "Compact SUV", image: swiftImg, features: ["AC", "USB", "Airbags"], rating: 4.7, reviews: 95, tags: ["Safety", "Comfort"] },
  { id: 'ertiga', name: "Maruti Ertiga", rate: 17, capacity: 7, type: "MUV", image: fortunerImg, features: ["AC", "USB", "Spacious"], rating: 4.6, reviews: 110, tags: ["Large Family", "Budget"] },
  { id: 'innova', name: "Toyota Innova", rate: 20, capacity: 7, type: "Premium MUV", image: fortunerImg, features: ["AC", "Rear AC", "Premium Audio"], rating: 4.9, reviews: 150, tags: ["Luxury", "Outstation"] },
  { id: 'fortuner', name: "Toyota Fortuner", rate: 25, capacity: 7, type: "Luxury SUV", image: fortunerImg, features: ["AC", "Off-road", "Premium"], rating: 4.9, reviews: 85, tags: ["Elite", "Status"] },
  { id: 'tempo', name: "Tempo Traveller", rate: 22, capacity: 14, type: "14-Seater Van", image: tempoImg, features: ["AC", "USB per seat", "Luxurious"], rating: 4.7, reviews: 45, tags: ["Group", "Long Trip"] }
];

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
    email: '',
    additionalPassengers: [],
    specialRequests: '',
    agreedToPolicies: false
  });

  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVehicleDetails, setSelectedVehicleDetails] = useState(null);

  // Price Calculation Logic
  const calculatePricing = () => {
    if (!formData.vehicle) return null;
    
    const distance = 245; // Placeholder distance
    const rate = formData.vehicle.rate;
    const basePrice = distance * rate;
    const driverFee = 500;
    const tollEstimate = Math.round(distance * 1.15);
    const subtotal = basePrice + driverFee + tollEstimate;
    
    // Discounts
    let discount = 0;
    const isAdvanceBooking = formData.pickupDate && (new Date(formData.pickupDate) - new Date() > 7 * 24 * 60 * 60 * 1000);
    if (formData.passengers >= 6) discount += 0.05;
    if (isAdvanceBooking) discount += 0.05;
    
    const discountAmount = Math.round(subtotal * Math.min(discount, 0.10));
    const finalPrice = subtotal - discountAmount;
    
    return {
      distance,
      basePrice,
      driverFee,
      tollEstimate,
      subtotal,
      discountAmount,
      finalPrice,
      perPerson: Math.round(finalPrice / formData.passengers)
    };
  };

  const pricing = calculatePricing();

  // Validation Logic
  const validateStep = (currentStep) => {
    let newErrors = {};
    if (currentStep === 1) {
      if (!formData.tripType) newErrors.tripType = "Please select a trip type";
      if (!formData.pickupDate) newErrors.pickupDate = "Pickup date is required";
      if (!formData.pickupLocation || formData.pickupLocation.length < 3) newErrors.pickupLocation = "Enter a valid location";
      if (!formData.dropLocation || formData.dropLocation.length < 3) newErrors.dropLocation = "Enter a valid location";
      if (formData.tripType === 'Outstation' && !formData.returnDate) newErrors.returnDate = "Return date is required";
      if (formData.returnDate && formData.pickupDate && new Date(formData.returnDate) <= new Date(formData.pickupDate)) {
        newErrors.returnDate = "Return must be after pickup";
      }
    } else if (currentStep === 2) {
      if (!formData.vehicle) newErrors.vehicle = "Please select a vehicle";
    } else if (currentStep === 3) {
      if (!formData.name || formData.name.length < 3) newErrors.name = "Enter valid name";
      if (!/^(\+91|0)?[6-9]\d{9}$/.test(formData.phone)) newErrors.phone = "Enter valid Indian phone number";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Enter valid email address";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) setStep(s => s + 1);
  };

  const handlePrev = () => setStep(s => s - 1);

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: null }));
  };

  const handleSubmit = () => {
    if (!formData.agreedToPolicies) {
      setErrors({ policies: "Please agree to our terms" });
      return;
    }
    
    const orderId = `HKT-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const message = `*Hello Kanpur Travels - NEW BOOKING*%0A*Order ID:* ${orderId}%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Trip:* ${formData.pickupLocation} to ${formData.dropLocation}%0A*Vehicle:* ${formData.vehicle.name}%0A*Total:* ₹${pricing.finalPrice}`;
    
    window.open(`https://wa.me/919876543210?text=${message}`);
  };

  return (
    <section id="booking" className="section" style={{ backgroundColor: 'var(--gray-50)', padding: '80px 0' }}>
      <div className="container">
        {/* Progress Indicator */}
        <div style={{ maxWidth: '800px', margin: '0 auto 48px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', marginBottom: '12px' }}>
            <div style={{ position: 'absolute', top: '16px', left: 0, right: 0, height: '2px', backgroundColor: 'var(--gray-200)', zIndex: 0 }}></div>
            <div style={{ position: 'absolute', top: '16px', left: 0, width: `${(step - 1) * 33.3}%`, height: '2px', backgroundColor: 'var(--primary)', zIndex: 0, transition: 'width 0.3s ease' }}></div>
            
            {steps.map((s, i) => (
              <div key={s} style={{ zIndex: 1, textAlign: 'center' }}>
                <div onClick={() => i + 1 < step && setStep(i + 1)} style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: step > i + 1 ? 'var(--primary)' : step === i + 1 ? 'var(--primary)' : 'white',
                  border: `2px solid ${step >= i + 1 ? 'var(--primary)' : 'var(--gray-200)'}`,
                  color: step > i + 1 ? 'white' : step === i + 1 ? 'white' : 'var(--gray-400)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  cursor: i + 1 < step ? 'pointer' : 'default',
                  margin: '0 auto 8px'
                }}>
                  {step > i + 1 ? <Check size={16} /> : i + 1}
                </div>
                <span className="desktop-only" style={{ fontSize: '0.75rem', fontWeight: 600, color: step >= i + 1 ? 'var(--gray-900)' : 'var(--gray-400)' }}>{s}</span>
              </div>
            ))}
          </div>
          <p className="mobile-only" style={{ textAlign: 'center', fontWeight: 600, fontSize: '0.875rem' }}>Step {step} of 4: {steps[step-1]}</p>
        </div>

        <div style={{ maxWidth: '1000px', margin: '0 auto', backgroundColor: 'white', borderRadius: '24px', boxShadow: 'var(--shadow-xl)', overflow: 'hidden' }}>
          <div style={{ padding: '40px' }}>
            {/* Step 1: Trip Details */}
            {step === 1 && (
              <div className="fade-in">
                <h2 style={{ marginBottom: '32px', textAlign: 'center' }}>Trip Details</h2>
                <div className="grid grid-2">
                  <div className="form-group">
                    <label className="form-label">Trip Type</label>
                    <select value={formData.tripType} onChange={(e) => updateFormData('tripType', e.target.value)} className="form-input">
                      <option>Local Taxi</option>
                      <option>Outstation</option>
                      <option>Car Rental</option>
                      <option>Tempo/Group</option>
                      <option>Tour Package</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Passengers (1-25)</label>
                    <input type="range" min="1" max="25" value={formData.passengers} onChange={(e) => updateFormData('passengers', parseInt(e.target.value))} style={{ width: '100%', accentColor: 'var(--primary)' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px', fontSize: '0.875rem', fontWeight: 600 }}>
                      <span>1</span>
                      <span style={{ color: 'var(--primary)' }}>{formData.passengers} People</span>
                      <span>25</span>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Pickup Date</label>
                    <input type="date" value={formData.pickupDate} onChange={(e) => updateFormData('pickupDate', e.target.value)} className={`form-input ${errors.pickupDate ? 'error' : ''}`} min={new Date().toISOString().split('T')[0]} />
                    {errors.pickupDate && <span style={{ color: 'var(--error)', fontSize: '0.75rem' }}>{errors.pickupDate}</span>}
                  </div>
                  {(formData.tripType !== 'Local Taxi') && (
                    <div className="form-group">
                      <label className="form-label">Return Date</label>
                      <input type="date" value={formData.returnDate} onChange={(e) => updateFormData('returnDate', e.target.value)} className={`form-input ${errors.returnDate ? 'error' : ''}`} min={formData.pickupDate || new Date().toISOString().split('T')[0]} />
                      {errors.returnDate && <span style={{ color: 'var(--error)', fontSize: '0.75rem' }}>{errors.returnDate}</span>}
                    </div>
                  )}
                  <div className="form-group">
                    <label className="form-label">Pickup Location</label>
                    <input type="text" placeholder="e.g. Kanpur Central" value={formData.pickupLocation} onChange={(e) => updateFormData('pickupLocation', e.target.value)} className={`form-input ${errors.pickupLocation ? 'error' : ''}`} />
                    {errors.pickupLocation && <span style={{ color: 'var(--error)', fontSize: '0.75rem' }}>{errors.pickupLocation}</span>}
                  </div>
                  <div className="form-group">
                    <label className="form-label">Drop Location</label>
                    <input type="text" placeholder="e.g. Amausi Airport, Lucknow" value={formData.dropLocation} onChange={(e) => updateFormData('dropLocation', e.target.value)} className={`form-input ${errors.dropLocation ? 'error' : ''}`} />
                    {errors.dropLocation && <span style={{ color: 'var(--error)', fontSize: '0.75rem' }}>{errors.dropLocation}</span>}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Vehicle Selection */}
            {step === 2 && (
              <div className="fade-in">
                <h2 style={{ marginBottom: '32px', textAlign: 'center' }}>Select Your Vehicle</h2>
                {errors.vehicle && <div style={{ color: 'var(--error)', textAlign: 'center', marginBottom: '16px', fontWeight: 600 }}>{errors.vehicle}</div>}
                <div className="grid grid-3">
                  {VEHICLES.filter(v => v.capacity >= formData.passengers).map(v => (
                    <div key={v.id} onClick={() => updateFormData('vehicle', v)} style={{
                      transition: 'all 0.3s ease',
                      border: `2px solid ${formData.vehicle?.id === v.id ? 'var(--primary)' : 'var(--gray-100)'}`,
                      borderRadius: '20px',
                      padding: '20px',
                      cursor: 'pointer',
                      position: 'relative',
                      boxShadow: formData.vehicle?.id === v.id ? 'var(--shadow-lg)' : 'none'
                    }}>
                      {formData.vehicle?.id === v.id && (
                        <div style={{ position: 'absolute', top: '12px', right: '12px', backgroundColor: 'var(--primary)', color: 'white', borderRadius: '50%', padding: '4px' }}>
                          <Check size={16} />
                        </div>
                      )}
                      <img src={v.image} alt={v.name} style={{ width: '100%', height: '140px', objectFit: 'contain', marginBottom: '16px' }} />
                      <h4 style={{ marginBottom: '4px' }}>{v.name}</h4>
                      <p style={{ fontSize: '0.75rem', color: 'var(--gray-500)', marginBottom: '12px' }}>{v.type} • {v.capacity} People</p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--gray-100)', paddingTop: '12px' }}>
                        <div>
                          <span style={{ fontWeight: 700, fontSize: '1.25rem' }}>₹{v.rate}</span>
                          <span style={{ fontSize: '0.75rem', color: 'var(--gray-500)' }}>/km</span>
                        </div>
                        <button onClick={(e) => { e.stopPropagation(); setSelectedVehicleDetails(v); setIsModalOpen(true); }} style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>View Details</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Passenger Information */}
            {step === 3 && (
              <div className="fade-in">
                <h2 style={{ marginBottom: '32px', textAlign: 'center' }}>Passenger Information</h2>
                <div className="grid grid-2">
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input type="text" placeholder="Your full name" value={formData.name} onChange={(e) => updateFormData('name', e.target.value)} className={`form-input ${errors.name ? 'error' : ''}`} />
                    {errors.name && <span style={{ color: 'var(--error)', fontSize: '0.75rem' }}>{errors.name}</span>}
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone Number (WhatsApp Preferable)</label>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <input type="tel" placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={(e) => updateFormData('phone', e.target.value)} className={`form-input ${errors.phone ? 'error' : ''}`} />
                    </div>
                    {errors.phone && <span style={{ color: 'var(--error)', fontSize: '0.75rem' }}>{errors.phone}</span>}
                  </div>
                  <div className="form-group" style={{ gridColumn: 'span 2' }}>
                    <label className="form-label">Email Address</label>
                    <input type="email" placeholder="your.email@example.com" value={formData.email} onChange={(e) => updateFormData('email', e.target.value)} className={`form-input ${errors.email ? 'error' : ''}`} />
                    {errors.email && <span style={{ color: 'var(--error)', fontSize: '0.75rem' }}>{errors.email}</span>}
                  </div>
                  <div className="form-group" style={{ gridColumn: 'span 2' }}>
                    <label className="form-label">Special Requests (Optional)</label>
                    <textarea value={formData.specialRequests} onChange={(e) => updateFormData('specialRequests', e.target.value.slice(0, 200))} placeholder="E.g., Need child seat? Experienced driver?" className="form-input" style={{ minHeight: '100px', resize: 'vertical' }}></textarea>
                    <div style={{ textAlign: 'right', fontSize: '0.75rem', color: 'var(--gray-400)' }}>{formData.specialRequests.length}/200</div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Review & Confirm */}
            {step === 4 && (
              <div className="fade-in">
                <h2 style={{ marginBottom: '32px', textAlign: 'center' }}>Review & Confirm</h2>
                <div className="grid grid-2" style={{ gap: '32px' }}>
                  <div style={{ backgroundColor: 'var(--gray-50)', padding: '24px', borderRadius: '20px', border: '1px solid var(--gray-200)' }}>
                    <div style={{ borderBottom: '1px solid var(--gray-200)', paddingBottom: '16px', marginBottom: '16px', display: 'flex', justifyContent: 'space-between' }}>
                      <h4 style={{ textTransform: 'uppercase', fontSize: '0.75rem', color: 'var(--gray-500)', letterSpacing: '0.05em' }}>Trip Summary</h4>
                      <button onClick={() => setStep(1)} style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--primary)', background: 'none', border: 'none', cursor: 'pointer' }}>Edit</button>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <div style={{ display: 'flex', gap: '8px' }}><MapPin size={18} color="var(--primary)" /> <span>{formData.pickupLocation} → {formData.dropLocation}</span></div>
                      <div style={{ display: 'flex', gap: '8px' }}><Calendar size={18} color="var(--primary)" /> <span>{formData.pickupDate} {formData.returnDate ? `to ${formData.returnDate}` : ''}</span></div>
                      <div style={{ display: 'flex', gap: '8px' }}><Users size={18} color="var(--primary)" /> <span>{formData.passengers} Passengers</span></div>
                      <div style={{ display: 'flex', gap: '8px' }}><Car size={18} color="var(--primary)" /> <span>{formData.vehicle.name} ({formData.vehicle.type})</span></div>
                    </div>

                    <div style={{ borderBottom: '1px solid var(--gray-200)', borderTop: '1px solid var(--gray-200)', margin: '24px 0', padding: '16px 0' }}>
                      <h4 style={{ textTransform: 'uppercase', fontSize: '0.75rem', color: 'var(--gray-500)', letterSpacing: '0.05em', marginBottom: '16px' }}>Passenger info</h4>
                      <p style={{ fontWeight: 600 }}>{formData.name}</p>
                      <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)' }}>{formData.phone} • {formData.email}</p>
                    </div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label style={{ display: 'flex', gap: '10px', alignItems: 'center', cursor: 'pointer', fontSize: '0.875rem' }}>
                        <input type="checkbox" checked={formData.agreedToPolicies} onChange={(e) => updateFormData('agreedToPolicies', e.target.checked)} />
                        <span>I agree to the <a href="#" style={{ color: 'var(--primary)', fontWeight: 600 }}>Cancellation Policy</a> & <a href="#" style={{ color: 'var(--primary)', fontWeight: 600 }}>Terms</a></span>
                      </label>
                      {errors.policies && <span style={{ color: 'var(--error)', fontSize: '0.75rem' }}>{errors.policies}</span>}
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div style={{ backgroundColor: 'var(--gray-900)', color: 'white', padding: '32px', borderRadius: '24px' }}>
                      <h3 style={{ color: 'white', marginBottom: '24px', fontSize: '1.25rem' }}>Price Breakdown</h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.875rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ color: 'var(--gray-400)' }}>Base Fare ({pricing.distance}km @ ₹{formData.vehicle.rate})</span>
                          <span>₹{pricing.basePrice}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ color: 'var(--gray-400)' }}>Driver Fee</span>
                          <span>₹{pricing.driverFee}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ color: 'var(--gray-400)' }}>Toll & Parking (est.)</span>
                          <span>₹{pricing.tollEstimate}</span>
                        </div>
                        {pricing.discountAmount > 0 && (
                          <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--success)' }}>
                            <span>Discount Applied</span>
                            <span>-₹{pricing.discountAmount}</span>
                          </div>
                        )}
                        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '16px', marginTop: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontSize: '1rem', fontWeight: 600 }}>Total Final Price</span>
                          <span style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--primary)' }}>₹{pricing.finalPrice}</span>
                        </div>
                        <p style={{ textAlign: 'center', color: 'var(--gray-400)', fontSize: '0.75rem' }}>₹{pricing.perPerson} per person</p>
                      </div>
                    </div>
                    
                    <div style={{ backgroundColor: 'var(--primary)10', padding: '20px', borderRadius: '16px', display: 'flex', gap: '12px' }}>
                      <Info size={24} color="var(--primary)" />
                      <p style={{ fontSize: '0.75rem', lineHeight: 1.5 }}>
                        <strong>Included:</strong> Driver, Insurance, Fuel, AC, 24/7 Support. <br />
                        <strong>Not Included:</strong> Meals, Accommodation, State Entry Taxes (as per actual).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Action Footer */}
          <div style={{ padding: '24px 40px', backgroundColor: 'var(--gray-50)', borderTop: '1px solid var(--gray-100)', display: 'flex', justifyContent: 'space-between', gap: '16px' }}>
            {step > 1 ? (
              <button onClick={handlePrev} className="btn btn-secondary" style={{ gap: '8px', height: '56px' }}>
                <ChevronLeft size={20} /> <span className="desktop-only">Back</span>
              </button>
            ) : <div />}
            
            {step < 4 ? (
              <button onClick={handleNext} className="btn btn-primary" style={{ gap: '8px', height: '56px', flex: 1, maxWidth: '300px' }}>
                Continue <ChevronRight size={20} />
              </button>
            ) : (
              <button onClick={handleSubmit} className="btn btn-primary" style={{ gap: '12px', height: '56px', flex: 1, maxWidth: '400px', fontSize: '1.125rem' }}>
                <Check size={24} /> Confirm & Book via WhatsApp
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Vehicle Details Modal */}
      {isModalOpen && selectedVehicleDetails && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <div className="fade-in" style={{ backgroundColor: 'white', borderRadius: '24px', width: '100%', maxWidth: '800px', maxHeight: '90vh', overflowY: 'auto', position: 'relative' }}>
            <button onClick={() => setIsModalOpen(false)} style={{ position: 'absolute', top: '20px', right: '20px', backgroundColor: 'white', border: 'none', width: '40px', height: '40px', borderRadius: '20px', boxShadow: 'var(--shadow-md)', cursor: 'pointer', zIndex: 1 }}><Trash2 size={20} /></button>
            
            <div className="grid grid-2" style={{ gap: 0 }}>
              <div style={{ backgroundColor: 'var(--gray-50)', padding: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={selectedVehicleDetails.image} alt={selectedVehicleDetails.name} style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
              </div>
              <div style={{ padding: '40px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div>
                    <h3 style={{ fontSize: '1.75rem', marginBottom: '4px' }}>{selectedVehicleDetails.name}</h3>
                    <p style={{ color: 'var(--gray-500)' }}>{selectedVehicleDetails.type}</p>
                  </div>
                  <div style={{ textAlign: 'right', display: 'flex', alignItems: 'center', gap: '4px', color: '#FF9800' }}>
                    <Star size={20} fill="#FF9800" />
                    <span style={{ fontWeight: 700, fontSize: '1.25rem' }}>{selectedVehicleDetails.rating}</span>
                  </div>
                </div>

                <div style={{ marginBottom: '32px' }}>
                  <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', color: 'var(--gray-400)', marginBottom: '12px' }}>Key Features</h4>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {selectedVehicleDetails.features.map(f => (
                      <span key={f} style={{ backgroundColor: 'var(--primary)10', color: 'var(--primary)', padding: '6px 12px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 600 }}>{f}</span>
                    ))}
                  </div>
                </div>

                <p style={{ color: 'var(--gray-600)', marginBottom: '32px', fontSize: '0.875rem' }}>
                  Perfectly suited for {selectedVehicleDetails.tags.join(' and ')} journeys. Our {selectedVehicleDetails.name} fleet is regularly sanitized and maintained to the highest safety standards.
                </p>

                <button onClick={() => { updateFormData('vehicle', selectedVehicleDetails); setIsModalOpen(false); if(step === 2) handleNext(); }} className="btn btn-primary" style={{ width: '100%', height: '56px' }}>Select This Vehicle</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .form-input.error { border-color: var(--error); box-shadow: 0 0 0 3px rgba(244, 67, 54, 0.1); }
        .desktop-only { display: block; }
        .mobile-only { display: none; }
        @media (max-width: 768px) {
          .desktop-only { display: none; }
          .mobile-only { display: block; }
          .grid-2, .grid-3 { grid-template-columns: 1fr !important; }
          .btn-primary, .btn-secondary { width: 100% !important; }
        }
      `}</style>
    </section>
  );
};

const steps = ["Trip Details", "Vehicle Selection", "Passenger Info", "Review"];

export default BookingForm;
