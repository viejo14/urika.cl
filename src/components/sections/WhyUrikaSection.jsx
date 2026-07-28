import React from 'react';
import { Badge } from '../common/Badge';
import { CleanCard } from '../common/CleanCard';

export function WhyUrikaSection() {
  return (
    <section id="ventajas" className="section-padding section-bg-subtle">
      <div className="container">
        
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 4rem auto' }}>
          <div style={{ marginBottom: '1rem' }}>
            <Badge variant="corporate">
              Infraestructura & Equipamiento Real
            </Badge>
          </div>
          <h2 style={{ fontSize: '2.4rem', marginBottom: '1rem', color: 'var(--primary-dark)' }}>
            ¿Por qué Formarse en Urika?
          </h2>
          <p style={{ color: 'var(--text-muted)' }}>
            Contamos con simuladores psicotécnicos de gabinete sensométrico, aulas de presentación y flota propia.
          </p>
        </div>

        <div className="grid-3">
          
          <CleanCard style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{ height: '200px', overflow: 'hidden', backgroundColor: 'var(--bg-elevated)' }}>
              <img
                src="/images/Img_urika_psicotecnico.webp"
                alt="Simulador Psicotécnico Gabinete Sensométrico Urika"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.6rem', color: 'var(--primary-dark)' }}>Simulador Psicotécnico</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                Practica con los mismos equipos de gabinete sensométrico (reactímetro, puntería y palancograma) que evalúa el médico municipal.
              </p>
            </div>
          </CleanCard>

          <CleanCard style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{ height: '200px', overflow: 'hidden', backgroundColor: 'var(--bg-elevated)' }}>
              <img
                src="/images/flota_urika.webp"
                alt="Flota con Doble Comando Urika"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.6rem', color: 'var(--primary-dark)' }}>Flota con Doble Comando</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                Vehículos equipados con pedales duplicados para la asistencia inmediata del instructor en situaciones complejas de tránsito real.
              </p>
            </div>
          </CleanCard>

          <CleanCard style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{ height: '200px', overflow: 'hidden', backgroundColor: 'var(--bg-elevated)' }}>
              <img
                src="/images/urika_tienda.webp"
                alt="Sede e Infraestructura Escuela Urika"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.6rem', color: 'var(--primary-dark)' }}>Sedes & Atención Presencial</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                Atención personalizada en nuestras sedes y salas de clase preparadas para el examen teórico municipal Conaset.
              </p>
            </div>
          </CleanCard>

        </div>

      </div>
    </section>
  );
}
