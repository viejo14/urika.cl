import React from 'react';
import { ShieldCheck, Award, FileText, CheckCircle2 } from 'lucide-react';
import { STATS_DATA } from '../../data/statsData';

export function StatsSection() {
  return (
    <section style={{ backgroundColor: 'var(--primary-dark)', color: '#FFFFFF', padding: '3.5rem 0' }}>
      <div className="container">
        
        {/* Institutional Accreditation Trust Bar (MTT, CONASET, Carabineros) */}
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

          <div className="grid-3" style={{ gap: '1.5rem', alignItems: 'center' }}>
            
            {/* MTT - Ministerio de Transportes */}
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              padding: '1.4rem 1.6rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              borderLeft: '3px solid #0284C7'
            }}>
              <div style={{
                width: '44px',
                height: '44px',
                backgroundColor: 'rgba(2, 132, 199, 0.18)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Award size={24} color="#38BDF8" />
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '0.98rem', color: '#FFFFFF' }}>
                  Ministerio de Transportes (MTT)
                </strong>
                <span style={{ fontSize: '0.82rem', color: '#94A3B8' }}>
                  Escuela Reconocida bajo Resolución Oficial MTT
                </span>
              </div>
            </div>

            {/* CONASET */}
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              padding: '1.4rem 1.6rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              borderLeft: '3px solid #059669'
            }}>
              <div style={{
                width: '44px',
                height: '44px',
                backgroundColor: 'rgba(5, 150, 105, 0.18)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <FileText size={24} color="#34D399" />
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '0.98rem', color: '#FFFFFF' }}>
                  Normativa CONASET
                </strong>
                <span style={{ fontSize: '0.82rem', color: '#94A3B8' }}>
                  Libro del Conductor Inteligente & Ensayos Oficiales
                </span>
              </div>
            </div>

            {/* Carabineros de Chile */}
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              padding: '1.4rem 1.6rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              borderLeft: '3px solid #F59E0B'
            }}>
              <div style={{
                width: '44px',
                height: '44px',
                backgroundColor: 'rgba(245, 158, 11, 0.18)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <ShieldCheck size={24} color="#FBBF24" />
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '0.98rem', color: '#FFFFFF' }}>
                  Carabineros de Chile
                </strong>
                <span style={{ fontSize: '0.82rem', color: '#94A3B8' }}>
                  Certificación de SIAT y Vehículos Doble Comando
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
