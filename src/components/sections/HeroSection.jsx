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
    tag: 'Simulador Examen Médico'
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
    <section style={{
      position: 'relative',
      width: '100%',
      minHeight: 'calc(100vh - 85px)',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      backgroundColor: 'var(--primary-dark)'
    }}>
      
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

        {/* Clean Executive Translucent Dark Gradient Overlay for Maximum Legibility */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, rgba(15, 23, 42, 0.94) 0%, rgba(15, 23, 42, 0.8) 55%, rgba(15, 23, 42, 0.55) 100%)',
          zIndex: 2
        }} />
      </div>

      {/* Clean Non-Invasive Text Container (No Bulky White Cards) */}
      <div className="container" style={{ position: 'relative', zIndex: 10, padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '780px' }}>
          
          <motion.div
            key={`slide-badge-${slide.id}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{ marginBottom: '1.4rem' }}
          >
            <Badge variant="green" style={{ backgroundColor: 'rgba(16, 185, 129, 0.2)', color: '#34D399', fontSize: '0.88rem', padding: '0.45rem 1.1rem' }}>
              {slide.tag}
            </Badge>
          </motion.div>

          <motion.h1
            key={`slide-title-${slide.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ fontSize: '3.8rem', marginBottom: '1.4rem', color: '#FFFFFF', fontWeight: '800', lineHeight: 1.1, letterSpacing: '-0.03em' }}
          >
            {slide.title}
          </motion.h1>

          <motion.p
            key={`slide-sub-${slide.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ fontSize: '1.25rem', color: '#CBD5E1', marginBottom: '2.8rem', maxWidth: '640px', lineHeight: 1.7 }}
          >
            {slide.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap', marginBottom: '3.5rem', alignItems: 'center' }}
          >
            <Button variant="primary" onClick={() => onOpenBooking('Curso Completo Licencia Clase B')} style={{ padding: '1.15rem 2.4rem', fontSize: '1.05rem' }}>
              Inscribirme Ahora <ArrowRight size={18} />
            </Button>
            <a href="#cursos">
              <Button variant="secondary" style={{ backgroundColor: 'rgba(255, 255, 255, 0.12)', color: '#FFFFFF', padding: '1.15rem 2.4rem', fontSize: '1.05rem' }}>
                Ver Todos los Cursos
              </Button>
            </a>
          </motion.div>

          {/* Clean Trust Indicators Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ display: 'flex', alignItems: 'center', gap: '2.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.15)', paddingTop: '1.8rem', flexWrap: 'wrap' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <CheckCircle size={20} color="#34D399" />
              <div>
                <span style={{ display: 'block', fontWeight: '700', fontSize: '0.95rem', color: '#FFFFFF' }}>98% Aprobación</span>
                <span style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Examen Municipal</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <ShieldCheck size={20} color="#38BDF8" />
              <div>
                <span style={{ display: 'block', fontWeight: '700', fontSize: '0.95rem', color: '#FFFFFF' }}>Doble Comando</span>
                <span style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Seguridad Total</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <MapPin size={20} color="#F59E0B" />
              <div>
                <span style={{ display: 'block', fontWeight: '700', fontSize: '0.95rem', color: '#FFFFFF' }}>Puerto Montt</span>
                <span style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Av. Los Notros #1227</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Fullscreen Slider Navigation Controls */}
      <button
        onClick={prevSlide}
        style={{
          position: 'absolute',
          top: '50%',
          left: '1.5rem',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(15, 23, 42, 0.75)',
          color: '#FFFFFF',
          width: '48px',
          height: '48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 20,
          transition: 'var(--transition-fast)',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}
        aria-label="Slide anterior"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        style={{
          position: 'absolute',
          top: '50%',
          right: '1.5rem',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(15, 23, 42, 0.75)',
          color: '#FFFFFF',
          width: '48px',
          height: '48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 20,
          transition: 'var(--transition-fast)',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}
        aria-label="Slide siguiente"
      >
        <ChevronRight size={24} />
      </button>

      {/* Fullscreen Slider Progress Dots */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '0.6rem',
        zIndex: 20
      }}>
        {HERO_FULLSCREEN_SLIDES.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => setCurrentSlide(idx)}
            style={{
              width: currentSlide === idx ? '36px' : '10px',
              height: '8px',
              backgroundColor: currentSlide === idx ? '#FFFFFF' : 'rgba(255, 255, 255, 0.35)',
              transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
              cursor: 'pointer'
            }}
            aria-label={`Ir a foto ${idx + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
