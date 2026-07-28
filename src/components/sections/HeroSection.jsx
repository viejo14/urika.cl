import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle, ShieldCheck, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';

const HERO_FULLSCREEN_SLIDES = [
  {
    id: 1,
    image: '/images/flota_urika.webp',
    title: 'Aprende a Conducir con Seguridad y Excelencia',
    subtitle: 'Formación profesional e integral para obtener tu Licencia Clase B en Puerto Montt. Flota propia con doble comando y acompañamiento total.',
    tag: 'Flota Oficial Doble Comando'
  },
  {
    id: 2,
    image: '/images/Img_urika_psicotecnico.webp',
    title: 'Simulador Psicotécnico de Gabinete Sensométrico',
    subtitle: 'Practica con reactímetro, puntería y palancograma antes de rendir el examen médico municipal con máxima confianza.',
    tag: 'Simulador Psicotécnico Sensométrico'
  },
  {
    id: 3,
    image: '/images/urika_tienda.webp',
    title: 'Sede Corporativa en Puerto Montt - Av. Los Notros #1227',
    subtitle: 'Atención presencial, aulas teóricas preparadas para el examen Conaset y asistencia personalizada de Lunes a Sábado.',
    tag: 'Sede Presencial Puerto Montt'
  },
  {
    id: 4,
    image: '/images/img_urika_presentacion.webp',
    title: '98% de Aprobación Municipal a la Primera',
    subtitle: 'Acompañamiento integral e inclusión del mismo vehículo en el que practicaste para el día de tu examen práctico.',
    tag: 'Éxito Garantizado'
  }
];

export function HeroSection({ onOpenBooking }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Preload ALL Hero Slide Images Immediately on Mount for Instant 0ms Load
  useEffect(() => {
    HERO_FULLSCREEN_SLIDES.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  // Auto-play Fullscreen Hero Slider Every 5.5 Seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_FULLSCREEN_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_FULLSCREEN_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_FULLSCREEN_SLIDES.length) % HERO_FULLSCREEN_SLIDES.length);
  };

  const slide = HERO_FULLSCREEN_SLIDES[currentSlide];

  return (
    <section className="hero-responsive-wrapper" style={{
      position: 'relative',
      width: '100%',
      minHeight: 'calc(100vh - 75px)',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      backgroundColor: 'var(--primary-dark)'
    }}>
      
      {/* Preload Hidden Images in DOM for Instant Caching */}
      <div style={{ display: 'none' }}>
        {HERO_FULLSCREEN_SLIDES.map((s) => (
          <img key={`preload-${s.id}`} src={s.image} alt="Preload slide" />
        ))}
      </div>

      {/* Full-Screen Background Image Slider */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
        <AnimatePresence mode="wait">
          <motion.img
            key={slide.id}
            src={slide.image}
            alt={slide.title}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center'
            }}
          />
        </AnimatePresence>

        {/* Clean Executive Translucent Dark Gradient Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.84) 60%, rgba(15, 23, 42, 0.65) 100%)',
          zIndex: 2
        }} />
      </div>

      {/* Clean Non-Invasive Text Container */}
      <div className="container hero-content-container" style={{ position: 'relative', zIndex: 10, padding: '3.5rem 1.5rem' }}>
        <div style={{ maxWidth: '760px' }}>
          
          <motion.div
            key={`slide-badge-${slide.id}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{ marginBottom: '1.2rem' }}
          >
            <Badge variant="green" style={{ backgroundColor: 'rgba(16, 185, 129, 0.2)', color: '#34D399', fontSize: 'clamp(0.78rem, 2.5vw, 0.88rem)', padding: '0.4rem 1rem' }}>
              {slide.tag}
            </Badge>
          </motion.div>

          <motion.h1
            key={`slide-title-${slide.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              fontSize: 'clamp(1.9rem, 5.2vw, 3.6rem)',
              marginBottom: '1.2rem',
              color: '#FFFFFF',
              fontWeight: '800',
              lineHeight: 1.15,
              letterSpacing: '-0.02em'
            }}
          >
            {slide.title}
          </motion.h1>

          <motion.p
            key={`slide-sub-${slide.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              fontSize: 'clamp(0.95rem, 2.8vw, 1.2rem)',
              color: '#CBD5E1',
              marginBottom: '2.2rem',
              maxWidth: '620px',
              lineHeight: 1.6
            }}
          >
            {slide.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hero-buttons-wrapper"
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.8rem', alignItems: 'center' }}
          >
            <Button variant="primary" onClick={() => onOpenBooking('Curso Completo Licencia Clase B')} className="hero-btn-primary" style={{ padding: '1rem 2.2rem', fontSize: '1rem' }}>
              Inscribirme Ahora <ArrowRight size={18} />
            </Button>
            <a href="#cursos" className="hero-btn-secondary-link">
              <Button variant="secondary" style={{ backgroundColor: 'rgba(255, 255, 255, 0.12)', color: '#FFFFFF', padding: '1rem 2.2rem', fontSize: '1rem' }}>
                Ver Todos los Cursos
              </Button>
            </a>
          </motion.div>

          {/* Clean Responsive Trust Indicators Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hero-trust-bar"
            style={{ display: 'flex', alignItems: 'center', gap: '2rem', borderTop: '1px solid rgba(255, 255, 255, 0.15)', paddingTop: '1.5rem', flexWrap: 'wrap' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CheckCircle size={18} color="#34D399" />
              <div>
                <span style={{ display: 'block', fontWeight: '700', fontSize: '0.88rem', color: '#FFFFFF' }}>98% Aprobación</span>
                <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Examen Municipal</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ShieldCheck size={18} color="#38BDF8" />
              <div>
                <span style={{ display: 'block', fontWeight: '700', fontSize: '0.88rem', color: '#FFFFFF' }}>Doble Comando</span>
                <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Seguridad Total</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MapPin size={18} color="#F59E0B" />
              <div>
                <span style={{ display: 'block', fontWeight: '700', fontSize: '0.88rem', color: '#FFFFFF' }}>Puerto Montt</span>
                <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Av. Los Notros #1227</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Responsive Slider Navigation Controls */}
      <button
        onClick={prevSlide}
        className="hero-slider-nav-btn hero-slider-prev"
        aria-label="Slide anterior"
      >
        <ChevronLeft size={22} />
      </button>

      <button
        onClick={nextSlide}
        className="hero-slider-nav-btn hero-slider-next"
        aria-label="Slide siguiente"
      >
        <ChevronRight size={22} />
      </button>

      {/* Fullscreen Slider Progress Dots */}
      <div style={{
        position: 'absolute',
        bottom: '1.5rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '0.5rem',
        zIndex: 20
      }}>
        {HERO_FULLSCREEN_SLIDES.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => setCurrentSlide(idx)}
            style={{
              width: currentSlide === idx ? '32px' : '8px',
              height: '6px',
              backgroundColor: currentSlide === idx ? '#FFFFFF' : 'rgba(255, 255, 255, 0.35)',
              transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
              cursor: 'pointer',
              border: 'none',
              padding: 0
            }}
            aria-label={`Ir a foto ${idx + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
