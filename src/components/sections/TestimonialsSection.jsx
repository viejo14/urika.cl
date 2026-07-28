import React from 'react';
import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../../data/testimonialsData';
import { Badge } from '../common/Badge';
import { CleanCard } from '../common/CleanCard';

export function TestimonialsSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'rgba(248, 250, 252, 0.9)' }}>
      <div className="container">
        
        {/* Header with official Google logo provided by user */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 3.5rem auto' }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.2rem' }}>
            <img
              src="/images/google-logo.webp"
              alt="Google Maps Logo"
              style={{ height: '26px', objectFit: 'contain' }}
            />
            <Badge variant="corporate">
              Google Maps Verificado (4.9 / 5.0 ⭐)
            </Badge>
          </div>

          <h2 style={{ fontSize: '2.4rem', marginBottom: '1rem', color: 'var(--primary-dark)' }}>
            Opiniones Reales de Alumnos en Puerto Montt
          </h2>
          <p style={{ color: 'var(--text-muted)' }}>
            Más de 500+ estudiantes nos califican con la máxima puntuación destacando la paciencia de nuestros instructores y vehículos de doble comando.
          </p>
        </motion.div>

        {/* Real Google Reviews Grid */}
        <div className="grid-3">
          {TESTIMONIALS_DATA.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <CleanCard style={{ padding: '2.2rem', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', gap: '0.2rem' }}>
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
                      ))}
                    </div>
                    <img
                      src="/images/google-logo.webp"
                      alt="Google logo icon"
                      style={{ height: '18px', opacity: 0.8 }}
                    />
                  </div>
                  <p style={{ fontSize: '0.96rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    "{item.quote}"
                  </p>
                </div>

                <div style={{ borderTop: '1px solid var(--bg-elevated)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <strong style={{ display: 'block', color: 'var(--primary-dark)', fontSize: '0.95rem' }}>{item.name}</strong>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>{item.role}</span>
                  </div>
                  <span style={{ fontSize: '0.78rem', color: 'var(--accent-success)', fontWeight: '600' }}>
                    ✔ Reseña Verificada
                  </span>
                </div>
              </CleanCard>
            </motion.div>
          ))}
        </div>

        {/* CTA to Open Google Maps Profile */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a
            href="https://maps.google.com/?q=Escuela+de+Conductores+Urika+Puerto+Montt+Av+Los+Notros+1227"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}
          >
            <img src="/images/google-logo.webp" alt="Google logo" style={{ height: '18px' }} />
            Ver Todas las Reseñas en Google Maps <ExternalLink size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}
