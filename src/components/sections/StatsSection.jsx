import React from 'react';
import { STATS_DATA } from '../../data/statsData';

export function StatsSection() {
  return (
    <section style={{ backgroundColor: 'var(--primary-dark)', color: '#FFFFFF', padding: '3.5rem 0' }}>
      <div className="container">
        
        {/* Institutional Accreditation Trust Bar with Perfectly Symmetrical Logos */}
        <div style={{
          borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
          paddingBottom: '2.5rem',
          marginBottom: '2.8rem'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '1.8rem' }}>
            <span style={{
              fontSize: '0.8rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#38BDF8',
              fontWeight: '700',
              display: 'block'
            }}>
              Acreditación Institucional & Marco Legal en Chile
            </span>
          </div>

          <div className="grid-3" style={{ gap: '1.5rem', alignItems: 'stretch' }}>
            
            {/* MTT - Ministerio de Transportes y Telecomunicaciones */}
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              padding: '1.2rem 1.4rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              borderLeft: '3px solid #0284C7',
              height: '100%'
            }}>
              <div style={{
                width: '120px',
                height: '52px',
                backgroundColor: '#FFFFFF',
                padding: '6px 10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <img
                  src="/images/MttChile-web-768x297.png"
                  alt="Logo Ministerio de Transportes Chile"
                  style={{ maxHeight: '38px', maxWidth: '100%', objectFit: 'contain' }}
                />
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '0.95rem', color: '#FFFFFF' }}>
                  Ministerio de Transportes (MTT)
                </strong>
                <span style={{ fontSize: '0.8rem', color: '#94A3B8' }}>
                  Resolución Oficial de Escuela Acreditada
                </span>
              </div>
            </div>

            {/* CONASET con Logo Oficial */}
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              padding: '1.2rem 1.4rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              borderLeft: '3px solid #059669',
              height: '100%'
            }}>
              <div style={{
                width: '120px',
                height: '52px',
                backgroundColor: '#FFFFFF',
                padding: '6px 10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <img
                  src="/images/conaset.webp"
                  alt="Logo Oficial CONASET Chile"
                  style={{ maxHeight: '38px', maxWidth: '100%', objectFit: 'contain' }}
                />
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '0.95rem', color: '#FFFFFF' }}>
                  Normativa CONASET
                </strong>
                <span style={{ fontSize: '0.8rem', color: '#94A3B8' }}>
                  Libro del Conductor Inteligente & Ensayos
                </span>
              </div>
            </div>

            {/* Carabineros de Chile con Escudo Oficial Símétrico */}
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              padding: '1.2rem 1.4rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              borderLeft: '3px solid #F59E0B',
              height: '100%'
            }}>
              <div style={{
                width: '120px',
                height: '52px',
                backgroundColor: '#FFFFFF',
                padding: '6px 10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <img
                  src="/images/Roundel_of_Carabineros_de_Chile.svg.webp"
                  alt="Escudo Oficial Carabineros de Chile"
                  style={{ maxHeight: '38px', maxWidth: '100%', objectFit: 'contain' }}
                />
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '0.95rem', color: '#FFFFFF' }}>
                  Carabineros de Chile
                </strong>
                <span style={{ fontSize: '0.8rem', color: '#94A3B8' }}>
                  Certificación de SIAT y Doble Comando
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Numeric Statistics Counter */}
        <div className="grid-4" style={{ textAlign: 'center' }}>
          {STATS_DATA.map((stat) => (
            <div key={stat.id}>
              <div style={{ fontSize: '2.8rem', fontWeight: '800', fontFamily: 'var(--font-heading)', color: '#FFFFFF', marginBottom: '0.2rem' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.9rem', color: '#94A3B8', fontWeight: '500' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
