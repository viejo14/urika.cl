import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COURSES_DATA } from '../../data/coursesData';
import { CourseCard } from './CourseCard';
import { Badge } from '../common/Badge';

export function CourseCatalog({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState('all');

  const filteredCourses = activeTab === 'all' 
    ? COURSES_DATA 
    : COURSES_DATA.filter(c => c.id === activeTab);

  return (
    <section id="cursos" className="section-padding section-bg-subtle">
      <div className="container">
        
        {/* Header with entrance animation */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem auto' }}
        >
          <div style={{ marginBottom: '1rem' }}>
            <Badge variant="corporate">
              Programas de Conducción
            </Badge>
          </div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--primary-dark)' }}>
            Nuestros Cursos de Conducción en Chile
          </h2>
          <p style={{ color: 'var(--text-muted)' }}>
            Programas estructurados para cada nivel de experiencia con acompañamiento personalizado y 0 bordes.
          </p>
        </motion.div>

        {/* Smooth Tab Transition Controls */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '3.5rem', flexWrap: 'wrap' }}
        >
          {[
            { id: 'all', label: 'Todos los Cursos' },
            { id: 'claseB', label: 'Licencia Clase B' },
            { id: 'reforzamiento', label: 'Reforzamiento' },
            { id: 'teorico', label: 'Teórico Intensivo' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                position: 'relative',
                padding: '0.85rem 1.6rem',
                fontSize: '0.92rem',
                fontWeight: '600',
                color: activeTab === tab.id ? '#FFFFFF' : 'var(--primary-dark)',
                backgroundColor: activeTab === tab.id ? 'var(--primary-dark)' : 'var(--bg-card)',
                boxShadow: activeTab === tab.id ? 'var(--shadow-primary)' : 'var(--shadow-sm)',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                border: 0,
                borderRadius: 0
              }}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Animated Grid for Courses */}
        <motion.div layout className="grid-3">
          <AnimatePresence mode="wait">
            {filteredCourses.map((course, idx) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.96 }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <CourseCard course={course} onOpenBooking={onOpenBooking} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
