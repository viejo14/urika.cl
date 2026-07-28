import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '../common/Badge';
import { CleanCard } from '../common/CleanCard';

const STEPS = [
  {
    step: 1,
    title: 'Inscripción Online',
    desc: 'Reserva tu cupo con tarifa garantizada y elige tu bloque horario inicial.'
  },
  {
    step: 2,
    title: 'Módulo Teórico',
    desc: 'Capacitación interactiva en reglamentos de tránsito y ensayos Conaset.'
  },
  {
    step: 3,
    title: 'Clases en Ruta Real',
    desc: 'Practica en autos con doble comando en calles reales de la ciudad.'
  },
  {
    step: 4,
    title: 'Examen Municipal',
    desc: 'Te acompañamos el día del examen y te prestamos el mismo vehículo de práctica.'
  }
];

export function ProcessRoadmapSection() {
  return (
    <section className="section-padding">
      <div className="container">
        
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 3.5rem auto' }}>
          <div style={{ marginBottom: '1rem' }}>
            <Badge variant="corporate">
              Tu Camino a la Licencia
            </Badge>
          </div>
          <h2 style={{ fontSize: '2.4rem', marginBottom: '1rem', color: 'var(--primary-dark)' }}>
            Tu Licencia Clase B en 4 Sencillos Pasos
          </h2>
        </div>

        <div className="grid-4" style={{ gap: '1.5rem', alignItems: 'stretch' }}>
          {STEPS.map((s, idx) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <CleanCard style={{
                padding: '2.2rem 1.5rem',
                textAlign: 'center',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                {/* 100% Uniform Step Badge for 1, 2, 3, and 4 */}
                <div style={{
                  width: '46px',
                  height: '46px',
                  backgroundColor: 'var(--primary-dark)',
                  color: '#FFFFFF',
                  fontSize: '1.25rem',
                  fontWeight: '800',
                  fontFamily: 'var(--font-heading)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  {s.step}
                </div>

                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.6rem', color: 'var(--primary-dark)' }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  {s.desc}
                </p>
              </CleanCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
