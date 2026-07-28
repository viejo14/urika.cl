import React from 'react';
import { ROADMAP_STEPS } from '../../data/statsData';
import { Badge } from '../common/Badge';
import { CleanCard } from '../common/CleanCard';

export function ProcessRoadmapSection() {
  return (
    <section className="section-padding">
      <div className="container">
        
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 4rem auto' }}>
          <Badge variant="green" style={{ marginBottom: '1rem' }}>
            Tu Camino a la Licencia
          </Badge>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            Tu Licencia Clase B en 4 Sencillos Pasos
          </h2>
        </div>

        <div className="grid-4">
          {ROADMAP_STEPS.map((item) => (
            <CleanCard key={item.step} subtle style={{ textAlign: 'center' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: item.highlight ? 'var(--accent-green)' : item.step === 1 ? 'var(--accent-gold)' : 'var(--primary-dark)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '800',
                fontSize: '1.2rem',
                margin: '0 auto 1.2rem auto'
              }}>
                {item.step}
              </div>
              <h4 style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>{item.title}</h4>
              <p style={{ fontSize: '0.88rem' }}>{item.desc}</p>
            </CleanCard>
          ))}
        </div>

      </div>
    </section>
  );
}
