import React from 'react';
import { usePricingCalculator } from '../../hooks/usePricingCalculator';
import { COURSES_DATA, SCHEDULE_OPTIONS } from '../../data/coursesData';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { CleanCard } from '../common/CleanCard';

export function PricingCalculatorSection({ onOpenBooking }) {
  const {
    selectedCourseId,
    setSelectedCourseId,
    preferredScheduleId,
    setPreferredScheduleId,
    installments,
    setInstallments,
    selectedCourse,
    calculatedTotal,
    onlineDiscount,
    finalPrice,
    monthlyPayment
  } = usePricingCalculator();

  return (
    <section id="cotizador" className="section-padding">
      <div className="container">
        <CleanCard style={{ padding: '3.5rem', borderRadius: 0 }}>
          <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            
            {/* Controls */}
            <div>
              <div style={{ marginBottom: '1.2rem' }}>
                <Badge variant="corporate">
                  Cotizador en Tiempo Real
                </Badge>
              </div>
              <h2 style={{ fontSize: '2.3rem', color: 'var(--primary-dark)', marginBottom: '1rem' }}>
                Calcula el Valor de tu Programa
              </h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                Selecciona la modalidad de curso, bloque horario y cantidad de cuotas deseada para conocer tu beneficio exclusivo.
              </p>

              {/* Course Selector */}
              <div style={{ marginBottom: '1.8rem' }}>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '600', color: 'var(--primary-dark)', marginBottom: '0.6rem' }}>
                  1. Selecciona el Tipo de Curso:
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.6rem' }}>
                  {COURSES_DATA.map((course) => (
                    <button
                      key={course.id}
                      onClick={() => setSelectedCourseId(course.id)}
                      style={{
                        padding: '0.85rem 0.5rem',
                        borderRadius: 0,
                        backgroundColor: selectedCourseId === course.id ? 'var(--primary-dark)' : 'var(--bg-subtle)',
                        color: selectedCourseId === course.id ? '#FFFFFF' : 'var(--primary-dark)',
                        fontWeight: '600',
                        fontSize: '0.85rem',
                        cursor: 'pointer',
                        transition: 'var(--transition-fast)'
                      }}
                    >
                      {course.id === 'claseB' ? 'Clase B' : course.id === 'reforzamiento' ? 'Reforzamiento' : 'Solo Teórico'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Schedule Selector */}
              <div style={{ marginBottom: '1.8rem' }}>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '600', color: 'var(--primary-dark)', marginBottom: '0.6rem' }}>
                  2. Horario Preferido:
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.6rem' }}>
                  {SCHEDULE_OPTIONS.map((sched) => (
                    <button
                      key={sched.id}
                      onClick={() => setPreferredScheduleId(sched.id)}
                      style={{
                        padding: '0.85rem 0.5rem',
                        borderRadius: 0,
                        backgroundColor: preferredScheduleId === sched.id ? 'var(--primary-dark)' : 'var(--bg-subtle)',
                        color: preferredScheduleId === sched.id ? '#FFFFFF' : 'var(--primary-dark)',
                        fontWeight: '600',
                        fontSize: '0.85rem',
                        cursor: 'pointer',
                        transition: 'var(--transition-fast)'
                      }}
                    >
                      {sched.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Installments */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                  <label style={{ fontSize: '0.88rem', fontWeight: '600', color: 'var(--primary-dark)' }}>
                    3. Cuotas de Pago:
                  </label>
                  <span style={{ fontSize: '0.88rem', color: 'var(--primary-dark)', fontWeight: '700' }}>
                    {installments} {installments === 1 ? 'Cuota Contado' : 'Cuotas Sin Interés'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="3"
                  step="1"
                  value={installments}
                  onChange={(e) => setInstallments(parseInt(e.target.value))}
                />
              </div>

            </div>

            {/* Preview Box */}
            <div style={{ backgroundColor: 'var(--bg-subtle)', borderRadius: 0, padding: '2.5rem' }}>
              <div style={{ borderBottom: '1px solid #E2E8F0', paddingBottom: '1.2rem', marginBottom: '1.2rem' }}>
                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', fontWeight: '600' }}>
                  Resumen Ejecutivo
                </span>
                <h4 style={{ fontSize: '1.35rem', marginTop: '0.3rem', color: 'var(--primary-dark)' }}>
                  {selectedCourse.title}
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>{selectedCourse.shortDesc}</p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '1.8rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Precio Regular:</span>
                  <span style={{ textDecoration: 'line-through', color: 'var(--text-light)' }}>${calculatedTotal.toLocaleString('es-CL')}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
                  <span style={{ color: 'var(--accent-success)', fontWeight: '600' }}>Descuento Directo Online (15%):</span>
                  <span style={{ color: 'var(--accent-success)', fontWeight: '600' }}>-${onlineDiscount.toLocaleString('es-CL')}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', paddingTop: '0.6rem', borderTop: '1px solid #E2E8F0' }}>
                  <span style={{ fontWeight: '700', fontSize: '1.05rem', color: 'var(--primary-dark)' }}>Total Final:</span>
                  <span style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--primary-dark)', fontFamily: 'var(--font-heading)' }}>
                    ${finalPrice.toLocaleString('es-CL')}
                  </span>
                </div>

                {installments > 1 && (
                  <div style={{ backgroundColor: '#FFFFFF', padding: '0.8rem', borderRadius: 0, textAlign: 'center', marginTop: '0.5rem', boxShadow: 'var(--shadow-sm)' }}>
                    <span style={{ fontSize: '0.88rem', color: 'var(--primary-dark)', fontWeight: '600' }}>
                      Paga en {installments} cuotas de <strong>${monthlyPayment.toLocaleString('es-CL')}</strong> / mes
                    </span>
                  </div>
                )}
              </div>

              <Button
                variant="primary"
                style={{ width: '100%', padding: '1.05rem' }}
                onClick={() => onOpenBooking(selectedCourse.title)}
              >
                Garantizar Tarifa de ${finalPrice.toLocaleString('es-CL')}
              </Button>
            </div>

          </div>
        </CleanCard>
      </div>
    </section>
  );
}
