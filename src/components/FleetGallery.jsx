import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { X, ArrowRight, Camera, ChevronLeft, ChevronRight } from 'lucide-react';

import aisleImg from '../assets/real-bus-aisle.jpg';
import seatsRowsImg from '../assets/real-bus-seats-rows.jpg';
import exteriorImg from '../assets/real-bus-exterior.jpg';
import neonImg from '../assets/real-bus-seats-neon.jpg';
import tvFrontImg from '../assets/real-bus-tv-front.jpg';
import sleeperImg from '../assets/real-bus-sleeper.jpg';

const FleetGallery = () => {
  const { t } = useTranslation();
  const [lightbox, setLightbox] = useState(null); // index or null

  const PHOTOS = [
    { src: aisleImg, area: 'tall', tag: t('gallery.tag_seater'), label: t('gallery.label_aisle') },
    { src: seatsRowsImg, area: 'wide', tag: t('gallery.tag_seater'), label: t('gallery.label_rows') },
    { src: exteriorImg, area: 'wide', tag: t('gallery.tag_exterior'), label: t('gallery.label_exterior') },
    { src: neonImg, area: 'small', tag: t('gallery.tag_seater'), label: t('gallery.label_neon') },
    { src: tvFrontImg, area: 'small', tag: t('gallery.tag_seater'), label: t('gallery.label_tv') },
    { src: sleeperImg, area: 'wide', tag: t('gallery.tag_sleeper'), label: t('gallery.label_sleeper') }
  ];

  const close = () => setLightbox(null);
  const prev = () => setLightbox(i => (i - 1 + PHOTOS.length) % PHOTOS.length);
  const next = () => setLightbox(i => (i + 1) % PHOTOS.length);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox]);

  return (
    <section id="gallery" className="section" style={{ backgroundColor: 'var(--gray-900)', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      {/* ambient glow */}
      <div style={{ position: 'absolute', top: '-120px', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '300px', background: 'radial-gradient(ellipse, rgba(46,125,50,0.25), transparent 70%)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '8px 18px', borderRadius: '100px',
            backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
            marginBottom: '20px'
          }}>
            <Camera size={15} color="#FFB74D" />
            <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#FFB74D', letterSpacing: '0.04em' }}>{t('gallery.badge')}</span>
          </div>
          <h2 style={{ fontSize: '2.6rem', marginBottom: '16px', color: 'white' }}>{t('gallery.title')}</h2>
          <p style={{ color: 'var(--gray-400)', fontSize: '1.125rem', maxWidth: '680px', margin: '0 auto' }}>{t('gallery.subtitle')}</p>
        </div>

        <div className="gallery-bento">
          {PHOTOS.map((p, i) => (
            <button
              key={i}
              className={`gallery-item gallery-${p.area}`}
              onClick={() => setLightbox(i)}
              style={{ border: 'none', padding: 0, cursor: 'pointer', position: 'relative', borderRadius: '20px', overflow: 'hidden', background: 'var(--gray-800)' }}
            >
              <img src={p.src} alt={p.label} loading="lazy" className="gallery-img" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <div className="gallery-overlay" style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 40%, rgba(8,18,12,0.82))',
                display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                padding: '20px', textAlign: 'left'
              }}>
                <span style={{
                  alignSelf: 'flex-start',
                  backgroundColor: 'rgba(46,125,50,0.9)', color: 'white',
                  fontSize: '0.68rem', fontWeight: 700, padding: '4px 10px', borderRadius: '100px',
                  marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.04em'
                }}>{p.tag}</span>
                <span style={{ color: 'white', fontWeight: 700, fontSize: '1rem', lineHeight: 1.3 }}>{p.label}</span>
              </div>
            </button>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link to="/bus-booking" className="btn btn-primary" style={{
            height: '56px', padding: '0 36px', gap: '10px', fontSize: '1.0625rem',
            display: 'inline-flex', alignItems: 'center',
            background: 'linear-gradient(135deg, #2E7D32, #1B5E20)'
          }}>
            {t('gallery.cta')} <ArrowRight size={20} />
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div onClick={close} style={{
          position: 'fixed', inset: 0, zIndex: 4000,
          backgroundColor: 'rgba(6, 12, 8, 0.92)', backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px'
        }}>
          <button onClick={close} aria-label="Close" style={lightboxBtn('top')}>
            <X size={26} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous" className="lb-nav" style={lightboxBtn('left')}>
            <ChevronLeft size={28} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next" className="lb-nav" style={lightboxBtn('right')}>
            <ChevronRight size={28} />
          </button>

          <div className="fade-in" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '900px', width: '100%', textAlign: 'center' }}>
            <img src={PHOTOS[lightbox].src} alt={PHOTOS[lightbox].label} style={{ maxWidth: '100%', maxHeight: '78vh', objectFit: 'contain', borderRadius: '16px', boxShadow: '0 20px 60px rgba(0,0,0,0.5)', margin: '0 auto' }} />
            <div style={{ marginTop: '18px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
              <span style={{ backgroundColor: 'rgba(46,125,50,0.9)', color: 'white', fontSize: '0.7rem', fontWeight: 700, padding: '4px 12px', borderRadius: '100px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{PHOTOS[lightbox].tag}</span>
              <span style={{ color: 'white', fontWeight: 600, fontSize: '1.0625rem' }}>{PHOTOS[lightbox].label}</span>
              <span style={{ color: 'var(--gray-500)', fontSize: '0.8125rem' }}>{lightbox + 1} / {PHOTOS.length}</span>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .gallery-bento {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          grid-auto-rows: 230px;
          gap: 16px;
        }
        .gallery-tall  { grid-column: span 2; grid-row: span 2; }
        .gallery-wide  { grid-column: span 2; grid-row: span 1; }
        .gallery-small { grid-column: span 1; grid-row: span 1; }
        .gallery-item { transition: transform 0.4s cubic-bezier(0.4,0,0.2,1), box-shadow 0.4s; }
        .gallery-item:hover { transform: translateY(-6px); box-shadow: 0 20px 40px -12px rgba(0,0,0,0.6); }
        .gallery-img { transition: transform 0.6s cubic-bezier(0.4,0,0.2,1); }
        .gallery-item:hover .gallery-img { transform: scale(1.08); }
        .lb-nav:hover { background-color: rgba(46,125,50,0.85) !important; }

        @media (max-width: 1024px) {
          .gallery-bento { grid-template-columns: repeat(4, 1fr); grid-auto-rows: 200px; }
          .gallery-tall  { grid-column: span 2; grid-row: span 2; }
          .gallery-wide  { grid-column: span 2; }
          .gallery-small { grid-column: span 2; }
        }
        @media (max-width: 600px) {
          .gallery-bento { grid-template-columns: 1fr 1fr; grid-auto-rows: 160px; gap: 12px; }
          .gallery-tall  { grid-column: span 2; grid-row: span 1; }
          .gallery-wide  { grid-column: span 2; }
          .gallery-small { grid-column: span 1; }
          .gallery-overlay { padding: 12px !important; }
          .gallery-overlay span:last-child { font-size: 0.8125rem !important; }
        }
      `}</style>
    </section>
  );
};

const lightboxBtn = (pos) => {
  const base = {
    position: 'fixed', zIndex: 4100,
    width: '48px', height: '48px', borderRadius: '50%',
    backgroundColor: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)',
    color: 'white', cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    transition: 'background-color 0.2s'
  };
  if (pos === 'top') return { ...base, top: '24px', right: '24px' };
  if (pos === 'left') return { ...base, left: '24px', top: '50%', transform: 'translateY(-50%)' };
  return { ...base, right: '24px', top: '50%', transform: 'translateY(-50%)' };
};

export default FleetGallery;
