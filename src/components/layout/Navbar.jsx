import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../common/Button';

export function Navbar({ onOpenBooking }) {
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100 }} className="glass-nav">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '85px' }}>
        
        {/* Brand Official Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <img
            src="/urika-logo.png"
            alt="Logo Escuela de Conductores Urika"
            style={{
              height: '58px',
              width: 'auto',
              objectFit: 'contain',
              borderRadius: 0
            }}
          />
        </a>

        {/* Links */}
        <nav style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          <a href="#cursos" style={{ fontWeight: '600', color: 'var(--primary-dark)', transition: 'var(--transition-fast)' }}>Cursos</a>
          <a href="#ventajas" style={{ fontWeight: '600', color: 'var(--primary-dark)', transition: 'var(--transition-fast)' }}>¿Por qué Urika?</a>
          <a href="#preguntas" style={{ fontWeight: '600', color: 'var(--primary-dark)', transition: 'var(--transition-fast)' }}>Preguntas Frecuentes</a>
          <a href="#contacto" style={{ fontWeight: '600', color: 'var(--primary-dark)', transition: 'var(--transition-fast)' }}>Contacto</a>
        </nav>

        {/* Action Button */}
        <Button variant="primary" onClick={() => onOpenBooking('Curso Completo Licencia Clase B')}>
          Inscribirme Ahora <ArrowRight size={16} />
        </Button>
      </div>
    </header>
  );
}
