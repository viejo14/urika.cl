import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Button } from '../common/Button';

export function Navbar({ onOpenBooking }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100 }} className="glass-nav">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '75px' }}>
        
        {/* Brand Official Logo */}
        <a href="#" onClick={closeMobileMenu} style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <img
            src="/urika-logo.png"
            alt="Logo Escuela de Conductores Urika"
            style={{
              height: '50px',
              width: 'auto',
              objectFit: 'contain',
              borderRadius: 0
            }}
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" style={{ display: 'flex', gap: '2.2rem', alignItems: 'center' }}>
          <a href="#cursos" style={{ fontWeight: '600', color: 'var(--primary-dark)', transition: 'var(--transition-fast)' }}>Cursos</a>
          <a href="#ventajas" style={{ fontWeight: '600', color: 'var(--primary-dark)', transition: 'var(--transition-fast)' }}>¿Por qué Urika?</a>
          <a href="#preguntas" style={{ fontWeight: '600', color: 'var(--primary-dark)', transition: 'var(--transition-fast)' }}>Preguntas Frecuentes</a>
          <a href="#contacto" style={{ fontWeight: '600', color: 'var(--primary-dark)', transition: 'var(--transition-fast)' }}>Contacto</a>
        </nav>

        {/* Desktop Action Button */}
        <div className="desktop-cta">
          <Button variant="primary" onClick={() => onOpenBooking('Curso Completo Licencia Clase B')}>
            Inscribirme Ahora <ArrowRight size={16} />
          </Button>
        </div>

        {/* Mobile Hamburger Menu Toggle Button */}
        <button
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          style={{
            display: 'none',
            backgroundColor: 'var(--primary-dark)',
            color: '#FFFFFF',
            border: 'none',
            padding: '0.55rem',
            cursor: 'pointer'
          }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Drawer Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{
              backgroundColor: 'rgba(15, 23, 42, 0.98)',
              backdropFilter: 'blur(12px)',
              borderBottom: '2px solid var(--accent-corporate)',
              overflow: 'hidden'
            }}
            className="mobile-drawer"
          >
            <div className="container" style={{ padding: '1.8rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <a
                href="#cursos"
                onClick={closeMobileMenu}
                style={{ fontSize: '1.1rem', fontWeight: '600', color: '#FFFFFF', padding: '0.4rem 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}
              >
                📚 Cursos Licencia Clase B
              </a>
              <a
                href="#ventajas"
                onClick={closeMobileMenu}
                style={{ fontSize: '1.1rem', fontWeight: '600', color: '#FFFFFF', padding: '0.4rem 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}
              >
                ⭐ ¿Por qué Urika?
              </a>
              <a
                href="#preguntas"
                onClick={closeMobileMenu}
                style={{ fontSize: '1.1rem', fontWeight: '600', color: '#FFFFFF', padding: '0.4rem 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}
              >
                ❓ Preguntas Frecuentes
              </a>
              <a
                href="#contacto"
                onClick={closeMobileMenu}
                style={{ fontSize: '1.1rem', fontWeight: '600', color: '#FFFFFF', padding: '0.4rem 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}
              >
                📍 Contacto & Ubicación
              </a>

              <div style={{ marginTop: '0.8rem' }}>
                <Button
                  variant="primary"
                  onClick={() => {
                    closeMobileMenu();
                    onOpenBooking('Curso Completo Licencia Clase B');
                  }}
                  style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}
                >
                  Inscribirme Ahora <ArrowRight size={18} />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
