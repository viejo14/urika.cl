import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COURSES_DATA } from '../../data/coursesData';
import { CourseCard } from './CourseCard';
import { Badge } from '../common/Badge';

export function CourseCatalog({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState('all');

  const filteredCourses = COURSES_DATA.filter((course) => {
    if (activeTab === 'all') return true;
    return course.category === activeTab;
  });

  return (
    <section id="cursos" className="section-padding">
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 3rem auto' }}>
          <div style={{ marginBottom: '1rem' }}>
            <Badge variant="corporate">
              Programas de Conducción
            </Badge>
          </div>
          <h2 style={{ fontSize: '2.4rem', marginBottom: '1rem', color: 'var(--primary-dark)' }}>
            Nuestros Cursos de Conducción en Chile
          </h2>
          <p style={{ color: 'var(--text-muted)' }}>
            Programas estructurados para cada nivel de experiencia con acompañamiento personalizado y 0 bordes.
          </p>
        </div>

        {/* Tab Filters */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem', marginBottom: '3.5rem', flexWrap: 'wrap' }}>
          <button
            onClick={() => setActiveTab('all')}
            className={activeTab === 'all' ? 'btn-primary' : 'btn-secondary'}
            style={{ padding: '0.75rem 1.4rem', fontSize: '0.9rem' }}
          >
            Todos los Cursos
          </button>
          <button
            onClick={() => setActiveTab('clase-b')}
            className={activeTab === 'clase-b' ? 'btn-primary' : 'btn-secondary'}
            style={{ padding: '0.75rem 1.4rem', fontSize: '0.9rem' }}
          >
            Licencia Clase B
          </button>
          <button
            onClick={() => setActiveTab('reforzamiento')}
            className={activeTab === 'reforzamiento' ? 'btn-primary' : 'btn-secondary'}
            style={{ padding: '0.75rem 1.4rem', fontSize: '0.9rem' }}
          >
            Reforzamiento
          </button>
          <button
            onClick={() => setActiveTab('teorico')}
            className={activeTab === 'teorico' ? 'btn-primary' : 'btn-secondary'}
            style={{ padding: '0.75rem 1.4rem', fontSize: '0.9rem' }}
          >
            Teórico Intensivo
          </button>
        </div>

        {/* Course Cards Grid */}
        <motion.div layout className="grid-3" style={{ alignItems: 'stretch' }}>
          <AnimatePresence>
            {filteredCourses.map((course) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                style={{ height: '100%' }}
              >
                <CourseCard course={course} onOpenBooking={onOpenBooking} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Official Payment Methods Banner */}
        <div style={{
          marginTop: '4rem',
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(10px)',
          padding: '2rem 2.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '2rem',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <div>
            <span style={{ fontSize: '0.82rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent-corporate)', fontWeight: '700', display: 'block', marginBottom: '0.3rem' }}>
              Facilidad de Pago Garantizada
            </span>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-dark)', marginBottom: '0.2rem' }}>
              Aceptamos Todos los Medios de Pago & Hasta 3 Cuotas Sin Interés
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Paga tu curso de manera segura vía Webpay, tarjetas de débito, crédito o transferencia bancaria directa.
            </p>
          </div>

          <div style={{ backgroundColor: '#FFFFFF', padding: '8px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src="/images/todo_medio_pago.png"
              alt="Logos Todos los Medios de Pago Webpay Débito Crédito"
              style={{ maxHeight: '55px', width: 'auto', objectFit: 'contain' }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
