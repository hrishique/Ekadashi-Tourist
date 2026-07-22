import { useState, useEffect, useCallback } from 'react';
import {
  Clock, MapPin, Send, Phone, X, BusFront, CalendarDays,
  Sparkles, CheckCircle2, ArrowLeftRight, Maximize2, BadgeIndianRupee
} from 'lucide-react';
import { CONFIG } from '../config';
import {
  DAILY_ROUTES, WEEKLY_ROUTES, SLEEPER_FEATURES,
  SERVICE_PROMISE, BOOKING_NOTE
} from '../data/routes';

const waLink = (routeName) => {
  const msg = `Namaste! Main "${routeName}" ki bus booking / jaankari chahta hoon. Kripya seat aur kiraya details bhejein. (Ekadashi Tour's)`;
  return `https://wa.me/${CONFIG.business.whatsapp}?text=${encodeURIComponent(msg)}`;
};

const fullTitle = (r) => `${r.name} ${r.place}`.trim();

/* ---------------------------------------------------------------- card --- */

const RouteCard = ({ route, onOpen, weekly = false }) => (
  <article className={`route-card${route.featured ? ' is-featured' : ''}`}>
    <button
      type="button"
      className="route-poster"
      onClick={() => onOpen(route)}
      aria-label={`${fullTitle(route)} ka poora banner dekhein`}
    >
      <img src={route.image} alt={route.alt} loading="lazy" decoding="async" />
      {/* Icon-only so it never sits on top of the banner's own logo or the
          contact strip printed along the bottom. */}
      <span className="poster-zoom"><Maximize2 size={15} /></span>
    </button>

    <div className="route-body">
      <h3 className="route-name">
        {route.name} <span className="route-place">{route.place}</span>
      </h3>
      <p className="route-sub">{route.sub}</p>

      <div className="route-meta">
        <span className="meta-chip chip-bus">
          <BusFront size={12} /> {weekly ? (route.busType || 'AC Bus') : 'AC Sleeper Bus'}
        </span>
        {route.price && (
          <span className="meta-chip chip-price">
            <BadgeIndianRupee size={12} /> {route.price} {route.priceNote}
          </span>
        )}
        {weekly ? (
          route.schedule.map((s) => (
            <span key={s.label} className={`meta-chip ${s.kind === 'return' ? 'chip-return' : 'chip-go'}`}>
              <CalendarDays size={12} /> {s.label}
            </span>
          ))
        ) : (
          route.times.map((tm) => (
            <span key={tm.short} className="meta-chip chip-time"><Clock size={12} /> {tm.short}</span>
          ))
        )}
      </div>

      <ul className="route-boarding">
        {route.boarding.map((b) => (
          <li key={b}><MapPin size={13} /> <span>{b}</span></li>
        ))}
        {route.returnTo && (
          <li className="boarding-return"><ArrowLeftRight size={13} /> <span>{route.returnTo}</span></li>
        )}
      </ul>

      <div className="route-tags">
        {route.highlights.slice(0, 3).map((h) => <span key={h} className="tag">{h}</span>)}
        {route.highlights.length > 3 && (
          <button type="button" className="tag tag-more" onClick={() => onOpen(route)}>
            +{route.highlights.length - 3} और
          </button>
        )}
      </div>

      <div className="route-actions">
        <a className="btn-wa" href={waLink(fullTitle(route))} target="_blank" rel="noopener noreferrer">
          <Send size={16} /> WhatsApp Booking
        </a>
        <a className="btn-call" href={`tel:${CONFIG.business.phone}`} aria-label="Call karein">
          <Phone size={16} />
        </a>
      </div>
    </div>
  </article>
);

/* ------------------------------------------------------------ lightbox --- */

const RouteModal = ({ route, onClose, weekly }) => {
  const onKey = useCallback((e) => { if (e.key === 'Escape') onClose(); }, [onClose]);

  useEffect(() => {
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [onKey]);

  if (!route) return null;

  return (
    <div className="route-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="route-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Band karein"><X size={20} /></button>

        <div className="modal-grid">
          <div className="modal-poster">
            <img src={route.image} alt={route.alt} />
          </div>

          <div className="modal-info">
            <span className="modal-eyebrow">
              <BusFront size={13} /> {weekly ? (route.busType || 'AC Bus') : 'AC Sleeper Luxury Bus'}
            </span>
            <h3 className="modal-title">{route.name} <span>{route.place}</span></h3>
            <p className="modal-sub">{route.sub}</p>
            <p className="modal-intro">{route.intro}</p>

            <div className="modal-block">
              <h4><Clock size={15} /> {weekly ? 'यात्रा कार्यक्रम' : 'प्रतिदिन प्रस्थान समय'}</h4>
              <div className="modal-chips">
                {weekly
                  ? route.schedule.map((s) => (
                      <span key={s.label} className={`meta-chip ${s.kind === 'return' ? 'chip-return' : 'chip-go'}`}>
                        <CalendarDays size={12} /> {s.label}
                      </span>
                    ))
                  : route.times.map((tm) => (
                      <span key={tm.short} className="meta-chip chip-time"><Clock size={12} /> {tm.full}</span>
                    ))}
              </div>
            </div>

            <div className="modal-block">
              <h4><MapPin size={15} /> बोर्डिंग प्वाइंट</h4>
              <ul className="modal-list">
                {route.boarding.map((b) => <li key={b}>{b}</li>)}
                {route.returnTo && <li>{route.returnTo}</li>}
              </ul>
            </div>

            <div className="modal-block">
              <h4><Sparkles size={15} /> यात्रा के प्रमुख आकर्षण</h4>
              <ul className="modal-list modal-list-2col">
                {route.highlights.map((h) => <li key={h}>{h}</li>)}
              </ul>
            </div>

            <div className="modal-block">
              <h4><CheckCircle2 size={15} /> सुविधाएँ</h4>
              <ul className="modal-list modal-list-2col">
                {(route.features || SLEEPER_FEATURES).map((f) => <li key={f}>{f}</li>)}
              </ul>
            </div>

            {route.fares && (
              <div className="modal-block">
                <h4><BadgeIndianRupee size={15} /> किराया (लगभग)</h4>
                <div className="fare-rows">
                  {route.fares.map((f) => (
                    <div key={f.label} className="fare-row"><span>{f.label}</span><strong>{f.price}</strong></div>
                  ))}
                </div>
              </div>
            )}

            {route.price && (
              <div className="modal-price">
                <span>मात्र</span> <strong>{route.price}</strong> <span>{route.priceNote}</span>
              </div>
            )}

            <p className="modal-note"><CalendarDays size={13} /> {BOOKING_NOTE}</p>

            <div className="modal-promise">
              {SERVICE_PROMISE.map((line) => <p key={line}>💐 {line}</p>)}
            </div>

            <p className="modal-tagline">🌺 “{route.tagline}” 🌺</p>

            <div className="modal-actions">
              <a className="btn-wa" href={waLink(fullTitle(route))} target="_blank" rel="noopener noreferrer">
                <Send size={16} /> WhatsApp Pe Book Karein
              </a>
              <a className="btn-call-wide" href={`tel:${CONFIG.business.phone}`}>
                <Phone size={16} /> {CONFIG.business.phone.replace('+91-', '')}
              </a>
            </div>
            <p className="modal-contact">👤 Vijay Gupta • 🚩 एकादशी श्री श्याम यात्रा परिवार कानपुर</p>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------- section --- */

const DailyRoutes = () => {
  const [openRoute, setOpenRoute] = useState(null);
  const isWeekly = openRoute ? WEEKLY_ROUTES.some((r) => r.id === openRoute.id) : false;

  return (
    <section id="daily-routes" className="daily-routes-section">
      <div className="container">
        <header className="dr-head">
          <span className="dr-badge"><BusFront size={15} /> Daily AC Sleeper • One Way Tour</span>
          <h2>डेली AC स्लीपर बस सेवा</h2>
          <p className="dr-sub">
            लखनऊ और कानपुर से देश के प्रमुख धामों और शहरों के लिए प्रतिदिन AC स्लीपर लग्ज़री बस —
            आरामदायक स्लीपर सीट, अनुभवी स्टाफ और सुरक्षित यात्रा।
          </p>

          <div className="dr-strip">
            <div className="strip-item"><Clock size={16} /><div><span>प्रतिदिन प्रस्थान</span><strong>6pm • 8pm • 9pm</strong></div></div>
            <div className="strip-item"><MapPin size={16} /><div><span>बोर्डिंग</span><strong>ट्रांसपोर्ट नगर लखनऊ • रामादेवी कानपुर</strong></div></div>
            <div className="strip-item"><CalendarDays size={16} /><div><span>बुकिंग</span><strong>10 दिन पहले तक मान्य</strong></div></div>
          </div>
        </header>

        <div className="dr-grid">
          {DAILY_ROUTES.map((r) => (
            <RouteCard key={r.id} route={r} onOpen={setOpenRoute} />
          ))}
        </div>

        <header className="dr-head dr-head-sub">
          <span className="dr-badge dr-badge-alt"><CalendarDays size={15} /> Weekly Special Yatra</span>
          <h2>साप्ताहिक विशेष यात्रा</h2>
          <p className="dr-sub">तय दिन पर चलने वाली विशेष दर्शन यात्राएँ — पूरी व्यवस्था के साथ।</p>
        </header>

        <div className="dr-grid dr-grid-weekly">
          {WEEKLY_ROUTES.map((r) => (
            <RouteCard key={r.id} route={r} onOpen={setOpenRoute} weekly />
          ))}
        </div>

        <div className="dr-promise">
          <p>💐 यह व्यवसाय नहीं, श्रद्धालुओं की सेवा है। 💐 जितना खर्च, उतना ही किराया !</p>
          <span>🚩 एकादशी श्री श्याम यात्रा परिवार कानपुर — कानपुर | उन्नाव | लखनऊ</span>
        </div>
      </div>

      {openRoute && (
        <RouteModal route={openRoute} weekly={isWeekly} onClose={() => setOpenRoute(null)} />
      )}

      <style>{`
        .daily-routes-section {
          padding: 96px 0;
          scroll-margin-top: 88px;
          background:
            radial-gradient(circle at 10% 0%, rgba(234, 88, 12, 0.08), transparent 40%),
            radial-gradient(circle at 92% 100%, rgba(245, 158, 11, 0.10), transparent 42%),
            linear-gradient(180deg, #ffffff 0%, #fff8f3 100%);
          overflow-x: hidden;
        }
        .dr-head { text-align: center; max-width: 780px; margin: 0 auto 44px; }
        .dr-head-sub { margin-top: 72px; }
        .dr-badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 8px 18px; border-radius: 100px;
          background: rgba(234, 88, 12, 0.10);
          border: 1px solid rgba(234, 88, 12, 0.22);
          color: var(--primary-dark);
          font-size: 0.8125rem; font-weight: 800;
          letter-spacing: 0.03em; text-transform: uppercase;
          margin-bottom: 16px;
        }
        .dr-badge-alt {
          background: rgba(245, 158, 11, 0.12);
          border-color: rgba(245, 158, 11, 0.28);
          color: var(--accent-dark);
        }
        .dr-head h2 {
          font-size: 2.5rem; margin: 0 0 14px; color: var(--gray-900);
          font-family: Poppins, sans-serif; line-height: 1.2;
        }
        .dr-sub { color: var(--gray-600); font-size: 1.06rem; line-height: 1.7; margin: 0; }

        .dr-strip {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 12px; margin-top: 28px; text-align: left;
        }
        .strip-item {
          display: flex; align-items: center; gap: 10px; min-width: 0;
          background: white; border: 1px solid var(--gray-100);
          border-radius: 14px; padding: 12px 14px;
          box-shadow: var(--shadow-sm); color: var(--primary);
        }
        .strip-item > div { min-width: 0; }
        .strip-item span {
          display: block; font-size: 0.65rem; font-weight: 800;
          text-transform: uppercase; letter-spacing: 0.05em; color: var(--gray-500);
        }
        .strip-item strong { display: block; font-size: 0.82rem; color: var(--gray-900); line-height: 1.35; }

        .dr-grid {
          display: grid; gap: 24px;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        }
        .dr-grid-weekly {
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          max-width: 760px; margin: 0 auto;
        }

        .route-card {
          display: flex; flex-direction: column; min-width: 0;
          background: white; border-radius: 22px; overflow: hidden;
          border: 1px solid var(--gray-100);
          box-shadow: var(--shadow-md);
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .route-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-xl);
          border-color: var(--primary-light);
        }
        .route-card.is-featured { border: 2px solid var(--primary); }

        .route-poster {
          position: relative; display: block; width: 100%;
          aspect-ratio: 1 / 1; padding: 0; border: none;
          background: linear-gradient(160deg, #3a1d0b, #1c0e05);
          cursor: zoom-in; overflow: hidden;
        }
        /* Most banners are square and fill this box exactly; the Nainital
           poster is landscape, so object-fit contain letterboxes it instead
           of cropping the Hindi text off the sides. */
        .route-poster img {
          width: 100%; height: 100%; object-fit: contain; display: block;
          transition: transform 0.5s ease;
        }
        .route-card:hover .route-poster img { transform: scale(1.04); }
        .poster-zoom {
          position: absolute; top: 8px; right: 8px;
          width: 32px; height: 32px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          background: rgba(17, 24, 21, 0.5); color: white;
          backdrop-filter: blur(6px); transition: all 0.25s ease;
        }
        .route-card:hover .poster-zoom { background: var(--primary); transform: scale(1.08); }

        .route-body { display: flex; flex-direction: column; flex: 1; padding: 18px 18px 20px; min-width: 0; }
        .route-name {
          font-family: Poppins, sans-serif; font-size: 1.2rem; line-height: 1.3;
          color: var(--gray-900); margin: 0 0 3px; overflow-wrap: anywhere;
        }
        .route-place { font-size: 0.86rem; font-weight: 600; color: var(--primary); white-space: nowrap; }
        .route-sub {
          margin: 0 0 12px; font-size: 0.72rem; font-weight: 700; color: var(--gray-500);
          text-transform: uppercase; letter-spacing: 0.05em;
        }

        .route-meta { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 12px; }
        .meta-chip {
          display: inline-flex; align-items: center; gap: 4px;
          padding: 4px 10px; border-radius: 100px;
          font-size: 0.71rem; font-weight: 700; white-space: nowrap;
        }
        .chip-time { background: rgba(234, 88, 12, 0.10); color: var(--primary-dark); }
        .chip-bus { background: var(--gray-900); color: white; }
        .chip-price { background: rgba(245, 158, 11, 0.16); color: var(--accent-dark); }
        .chip-go { background: rgba(22, 163, 74, 0.12); color: #15803D; }
        .chip-return { background: rgba(220, 38, 38, 0.10); color: #B91C1C; }

        .route-boarding { list-style: none; padding: 0; margin: 0 0 12px; display: grid; gap: 5px; }
        .route-boarding li {
          display: flex; align-items: flex-start; gap: 6px;
          font-size: 0.8rem; color: var(--gray-600); line-height: 1.4; min-width: 0;
        }
        .route-boarding li svg { color: var(--primary); flex-shrink: 0; margin-top: 2px; }
        .route-boarding li span { overflow-wrap: anywhere; }
        .boarding-return svg { color: var(--accent-dark) !important; }

        .route-tags { display: flex; flex-wrap: wrap; gap: 5px; margin-bottom: 16px; }
        .tag {
          font-size: 0.68rem; font-weight: 600; color: var(--gray-600);
          background: var(--gray-50); border: 1px solid var(--gray-100);
          padding: 4px 9px; border-radius: 8px; line-height: 1.3;
        }
        .tag-more {
          cursor: pointer; color: var(--primary-dark); font-weight: 800;
          background: rgba(234, 88, 12, 0.08); border-color: rgba(234, 88, 12, 0.2);
          font-family: inherit;
        }

        .route-actions { display: flex; gap: 8px; margin-top: auto; }
        .btn-wa {
          flex: 1; display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          background: #25D366; color: white; text-decoration: none;
          border-radius: 12px; padding: 12px; font-weight: 700; font-size: 0.9rem;
          transition: all 0.2s;
        }
        .btn-wa:hover { background: #1EBE57; transform: scale(1.02); }
        .btn-call {
          display: inline-flex; align-items: center; justify-content: center;
          width: 46px; border-radius: 12px; text-decoration: none;
          background: rgba(234, 88, 12, 0.10); color: var(--primary-dark);
          border: 1px solid rgba(234, 88, 12, 0.22); transition: all 0.2s; flex-shrink: 0;
        }
        .btn-call:hover { background: var(--primary); color: white; }

        .dr-promise {
          margin-top: 56px; text-align: center;
          background: linear-gradient(135deg, #EA580C, #C2410C);
          color: white; border-radius: 22px; padding: 26px 22px;
          box-shadow: 0 18px 38px -14px rgba(124, 45, 18, 0.55);
        }
        .dr-promise p { margin: 0 0 8px; font-size: 1.02rem; font-weight: 700; line-height: 1.6; }
        .dr-promise span { font-size: 0.85rem; opacity: 0.9; }

        /* ---- modal ---- */
        .route-modal-backdrop {
          position: fixed; inset: 0; z-index: 4000;
          background: rgba(20, 10, 4, 0.72); backdrop-filter: blur(6px);
          display: flex; align-items: center; justify-content: center;
          padding: 20px; animation: drFade 0.22s ease-out;
        }
        @keyframes drFade { from { opacity: 0; } to { opacity: 1; } }
        .route-modal {
          position: relative; width: 100%; max-width: 1020px;
          max-height: 90vh; overflow-y: auto; overscroll-behavior: contain;
          background: white; border-radius: 24px;
          box-shadow: 0 40px 80px -20px rgba(0,0,0,0.6);
          animation: drPop 0.26s cubic-bezier(0.2, 0.8, 0.3, 1);
        }
        @keyframes drPop { from { opacity: 0; transform: translateY(18px) scale(0.98); } to { opacity: 1; transform: none; } }
        .modal-close {
          position: absolute; top: 12px; right: 12px; z-index: 5;
          width: 38px; height: 38px; border-radius: 50%; border: none;
          background: rgba(17, 24, 21, 0.62); color: white; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          backdrop-filter: blur(6px); transition: background 0.2s;
        }
        .modal-close:hover { background: var(--primary); }
        .modal-grid { display: grid; grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr); align-items: start; }
        /* Poster sticks while the longer text column scrolls, so there are no
           empty letterbox bars beside it. */
        .modal-poster { padding: 22px 0 22px 22px; }
        .modal-poster img {
          width: 100%; height: auto; display: block; border-radius: 16px;
          position: sticky; top: 22px; box-shadow: var(--shadow-md);
        }
        .modal-info { padding: 30px 30px 34px; min-width: 0; }
        .modal-eyebrow {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 6px 14px; border-radius: 100px;
          background: rgba(234, 88, 12, 0.10); color: var(--primary-dark);
          font-size: 0.72rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.04em;
        }
        .modal-title {
          font-family: Poppins, sans-serif; font-size: 1.75rem; line-height: 1.25;
          margin: 12px 0 2px; color: var(--gray-900); overflow-wrap: anywhere;
        }
        .modal-title span { font-size: 1.05rem; color: var(--primary); font-weight: 600; }
        .modal-sub {
          margin: 0 0 14px; font-size: 0.74rem; font-weight: 700; color: var(--gray-500);
          text-transform: uppercase; letter-spacing: 0.05em;
        }
        .modal-intro { margin: 0 0 20px; color: var(--gray-700); line-height: 1.7; font-size: 0.95rem; }
        .modal-block { margin-bottom: 18px; }
        .modal-block h4 {
          display: flex; align-items: center; gap: 7px; margin: 0 0 9px;
          font-size: 0.9rem; color: var(--gray-900); font-family: Poppins, sans-serif;
        }
        .modal-block h4 svg { color: var(--primary); flex-shrink: 0; }
        .modal-chips { display: flex; flex-wrap: wrap; gap: 7px; }
        .modal-list { list-style: none; padding: 0; margin: 0; display: grid; gap: 6px; }
        .modal-list-2col { grid-template-columns: repeat(2, minmax(0, 1fr)); column-gap: 14px; }
        .modal-list li {
          position: relative; padding-left: 16px; font-size: 0.875rem;
          color: var(--gray-600); line-height: 1.5; overflow-wrap: anywhere;
        }
        .modal-list li::before {
          content: ''; position: absolute; left: 0; top: 8px;
          width: 6px; height: 6px; border-radius: 50%; background: var(--primary-light);
        }
        .fare-rows { display: grid; gap: 6px; }
        .fare-row {
          display: flex; justify-content: space-between; gap: 12px;
          background: var(--gray-50); border: 1px solid var(--gray-100);
          border-radius: 10px; padding: 8px 12px; font-size: 0.85rem; color: var(--gray-700);
        }
        .fare-row strong { color: var(--primary-dark); }
        .modal-price {
          display: flex; align-items: baseline; gap: 8px; flex-wrap: wrap;
          background: rgba(234, 88, 12, 0.08); border: 1px dashed rgba(234, 88, 12, 0.35);
          border-radius: 14px; padding: 12px 16px; margin-bottom: 16px;
          font-size: 0.85rem; color: var(--gray-600);
        }
        .modal-price strong { font-size: 1.6rem; color: var(--primary); font-weight: 800; }
        .modal-note {
          display: flex; align-items: center; gap: 6px; margin: 0 0 14px;
          font-size: 0.82rem; font-weight: 700; color: var(--accent-dark);
        }
        .modal-promise {
          background: var(--gray-50); border-left: 3px solid var(--primary);
          border-radius: 0 12px 12px 0; padding: 12px 16px; margin-bottom: 14px;
        }
        .modal-promise p { margin: 0; font-size: 0.85rem; color: var(--gray-700); line-height: 1.7; }
        .modal-tagline {
          text-align: center; font-weight: 700; color: var(--primary-dark);
          font-size: 0.95rem; margin: 0 0 18px; line-height: 1.6;
        }
        .modal-actions { display: flex; gap: 10px; flex-wrap: wrap; }
        .modal-actions .btn-wa { min-width: 200px; }
        .btn-call-wide {
          flex: 1; min-width: 150px;
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          border-radius: 12px; padding: 12px; font-weight: 700; font-size: 0.9rem;
          text-decoration: none; background: rgba(234, 88, 12, 0.10);
          color: var(--primary-dark); border: 1px solid rgba(234, 88, 12, 0.22);
          transition: all 0.2s;
        }
        .btn-call-wide:hover { background: var(--primary); color: white; }
        .modal-contact {
          margin: 14px 0 0; text-align: center; font-size: 0.8rem; color: var(--gray-500);
        }

        @media (max-width: 991px) {
          .modal-grid { grid-template-columns: minmax(0, 1fr); }
          .modal-poster { padding: 0; }
          .modal-poster img { position: static; border-radius: 0; }
          .modal-info { padding: 22px 20px 26px; }
          .modal-title { font-size: 1.45rem; }
        }
        @media (max-width: 768px) {
          .daily-routes-section { padding: 60px 0; }
          .dr-head h2 { font-size: 1.75rem; }
          .dr-sub { font-size: 0.95rem; }
          .dr-head-sub { margin-top: 52px; }
          .dr-strip { grid-template-columns: minmax(0, 1fr); }
          .dr-grid, .dr-grid-weekly { grid-template-columns: minmax(0, 1fr) !important; gap: 20px; }
          .route-modal-backdrop { padding: 0; }
          .route-modal { max-height: 100vh; height: 100%; border-radius: 0; }
          .modal-list-2col { grid-template-columns: minmax(0, 1fr); }
          .dr-promise { margin-top: 40px; padding: 22px 18px; }
          .dr-promise p { font-size: 0.92rem; }
        }
        @media (max-width: 480px) {
          .dr-head h2 { font-size: 1.55rem; }
          .route-name { font-size: 1.08rem; }
          .modal-actions .btn-wa, .btn-call-wide { min-width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default DailyRoutes;
