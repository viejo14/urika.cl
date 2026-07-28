import React from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { CleanCard } from '../common/CleanCard';

export function ContactSection({ formSubmitted, formData, setFormData, onSubmit }) {
  return (
    <section id="contacto" className="section-padding">
      <div className="container">
        <div className="grid-2" style={{ alignItems: 'start', gap: '3rem' }}>
          
          {/* Contact Info & Location */}
          <div>
            <div style={{ marginBottom: '1.2rem' }}>
              <Badge variant="corporate">
                Sede Puerto Montt & Contacto Directo
              </Badge>
            </div>
            <h2 style={{ fontSize: '2.4rem', marginBottom: '1.2rem', color: 'var(--primary-dark)' }}>
              Te esperamos en nuestra sede de Puerto Montt
            </h2>
            <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
              Escríbenos directamente o visítanos en nuestra sede corporativa para reservar tu cupo y coordinar tus horarios.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2rem' }}>
              
              <CleanCard style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', padding: '1.2rem 1.8rem' }}>
                <div style={{ width: '42px', height: '42px', backgroundColor: 'var(--bg-elevated)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Phone size={20} color="var(--primary-dark)" />
                </div>
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block' }}>Central & WhatsApp Puerto Montt:</span>
                  <strong style={{ fontSize: '1.1rem', color: 'var(--primary-dark)' }}>+56 9 5888 7141</strong>
                </div>
              </CleanCard>

              <CleanCard style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', padding: '1.2rem 1.8rem' }}>
                <div style={{ width: '42px', height: '42px', backgroundColor: 'var(--bg-elevated)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MapPin size={20} color="var(--primary-dark)" />
                </div>
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block' }}>Dirección de Sede:</span>
                  <strong style={{ fontSize: '1.1rem', color: 'var(--primary-dark)' }}>Av. Los Notros #1227, Puerto Montt</strong>
                </div>
              </CleanCard>

              <CleanCard style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', padding: '1.2rem 1.8rem' }}>
                <div style={{ width: '42px', height: '42px', backgroundColor: 'var(--bg-elevated)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Mail size={20} color="var(--primary-dark)" />
                </div>
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block' }}>Correo Electrónico:</span>
                  <strong style={{ fontSize: '1.1rem', color: 'var(--primary-dark)' }}>contacto@urika.cl</strong>
                </div>
              </CleanCard>

            </div>

            {/* Embedded Google Maps Location Frame */}
            <div style={{ width: '100%', height: '260px', backgroundColor: 'var(--bg-elevated)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
              <iframe
                title="Ubicación Escuela Urika Puerto Montt"
                src="https://maps.google.com/maps?q=Av.+Los+Notros+1227,+Puerto+Montt,+Chile&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="260"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

          </div>

          {/* Registration Form Card */}
          <CleanCard style={{ padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '0.5rem', color: 'var(--primary-dark)' }}>Formulario de Inscripción Directa</h3>
            <p style={{ fontSize: '0.9rem', marginBottom: '1.8rem', color: 'var(--text-muted)' }}>Completa tus datos y nos pondremos en contacto contigo en menos de 15 minutos.</p>

            {formSubmitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div style={{ width: '60px', height: '60px', background: 'var(--accent-success-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                  <CheckCircle size={32} color="var(--accent-success)" />
                </div>
                <h4 style={{ fontSize: '1.4rem', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>¡Solicitud Recibida!</h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                  Gracias <strong>{formData.nombre}</strong>. Te llamaremos al {formData.telefono} para agendar tus clases en Puerto Montt.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Francisca González"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.9rem 1.1rem',
                      backgroundColor: 'var(--bg-subtle)',
                      fontSize: '0.95rem',
                      color: 'var(--primary-dark)'
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+56 9 5888 7141"
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.9rem 1.1rem',
                        backgroundColor: 'var(--bg-subtle)',
                        fontSize: '0.95rem',
                        color: 'var(--primary-dark)'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.9rem 1.1rem',
                        backgroundColor: 'var(--bg-subtle)',
                        fontSize: '0.95rem',
                        color: 'var(--primary-dark)'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                    Sector / Comuna en Puerto Montt
                  </label>
                  <input
                    type="text"
                    placeholder="Ej. Av. Los Notros, Valle Volcanes, Mirasol, Centro..."
                    value={formData.comuna}
                    onChange={(e) => setFormData({ ...formData, comuna: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.9rem 1.1rem',
                      backgroundColor: 'var(--bg-subtle)',
                      fontSize: '0.95rem',
                      color: 'var(--primary-dark)'
                    }}
                  />
                </div>

                <Button variant="primary" type="submit" style={{ marginTop: '0.5rem', width: '100%', padding: '1rem' }}>
                  Enviar Consulta & Reservar Cupo <Send size={16} />
                </Button>
              </form>
            )}

          </CleanCard>

        </div>
      </div>
    </section>
  );
}
