import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ContactSupport, { Footer } from './components/ContactSupport';
import StickyWidget from './components/StickyWidget';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import TaxiBooking from './pages/TaxiBooking';
import BusBooking from './pages/BusBooking';
import { Terms, Privacy, RefundPolicy, CancellationPolicy } from './pages/Legal';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <ScrollToTop />
      <Navbar />
      <div className="page-transition-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/taxi-booking" element={<TaxiBooking />} />
          <Route path="/bus-booking" element={<BusBooking />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/cancellation-policy" element={<CancellationPolicy />} />
        </Routes>
      </div>
      <Footer />
      <StickyWidget />

      <style>{`
        .app-wrapper {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        main {
          flex: 1;
        }
        .page-transition-wrapper {
          animation: fadeIn 0.4s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default App;
