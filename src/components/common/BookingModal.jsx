import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';
import { Badge } from './Badge';
import { Button } from './Button';

export function BookingModal({
  isOpen,
  onClose,
  selectedCourseName,
  formSubmitted,
  formData,
  setFormData,
  onSubmit
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(15, 23, 42, 0.7)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '1.5rem'
        }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="clean-card"
            style={{ maxWidth: '500px', width: '100%', padding: '2.5rem', position: 'relative' }}
          >
            <button
              onClick={onClose}
              style={{ position: 'absolute', top: '1.2rem', right: '1.2rem', cursor: 'pointer', color: 'var(--text-muted)' }}
              aria-label="Cerrar modal"
            >
              <X size={24} />
            </button>

            <Badge variant="gold" style={{ marginBottom: '1rem' }}>
              Reserva de Vacante
            </Badge>

            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{selectedCourseName}</h3>
            <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>Inscríbete ahora para asegurar tu descuento especial online.</p>

            {formSubmitted ? (
              <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--accent-green-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                  <CheckCircle size={28} color="var(--accent-green)" />
                </div>
                <h4>¡Reserva Confirmada!</h4>
                <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Nos comunicaremos de inmediato al {formData.telefono}.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input
                  type="text"
                  required
                  placeholder="Tu Nombre Completo *"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--bg-subtle)' }}
                />
                <input
                  type="tel"
                  required
                  placeholder="Teléfono / WhatsApp (+56 9...) *"
                  value={formData.telefono}
                  onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--bg-subtle)' }}
                />
                <input
                  type="email"
                  required
                  placeholder="Correo Electrónico *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--bg-subtle)' }}
                />
                <Button variant="primary" type="submit" style={{ marginTop: '0.5rem', width: '100%' }}>
                  Confirmar Reserva con Descuento
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
