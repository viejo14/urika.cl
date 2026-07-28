import React from 'react';

export function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--primary-dark)', color: '#94A3B8', paddingTop: '4rem', paddingBottom: '2.5rem' }}>
      <div className="container">
        <div className="grid-4" style={{ marginBottom: '3rem' }}>
          
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.2rem' }}>
              <img
                src="/urika-logo.png"
                alt="Logo Escuela de Conductores Urika"
                style={{
                  height: '52px',
                  width: 'auto',
                  objectFit: 'contain',
                  backgroundColor: '#FFFFFF',
                  padding: '4px 8px',
                  borderRadius: 0
                }}
              />
            </div>
            <p style={{ fontSize: '0.88rem', color: '#94A3B8', lineHeight: 1.6, marginBottom: '1.2rem' }}>
              Escuela de Conductores profesional en Puerto Montt. Formación integral para la obtención de Licencia de Conducir Clase B en Chile.
            </p>
            {/* Medios de pago en Footer */}
            <div style={{ backgroundColor: '#FFFFFF', padding: '6px 12px', display: 'inline-flex', alignItems: 'center' }}>
              <img
                src="/images/todo_medio_pago.png"
                alt="Medios de Pago Aceptados Webpay Débito Crédito"
                style={{ height: '36px', width: 'auto', objectFit: 'contain' }}
              />
            </div>
          </div>

          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.05rem', marginBottom: '1.2rem' }}>Cursos & Servicios</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem' }}>
              <li><a href="#cursos" style={{ color: '#CBD5E1' }}>Curso Licencia Clase B</a></li>
              <li><a href="#cursos" style={{ color: '#CBD5E1' }}>Reforzamiento de Conducción</a></li>
              <li><a href="#cursos" style={{ color: '#CBD5E1' }}>Simulador Teórico Conaset</a></li>
              <li><a href="#cursos" style={{ color: '#CBD5E1' }}>Acompañamiento Examen Municipal</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.05rem', marginBottom: '1.2rem' }}>Información Legal & SEO</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem' }}>
              <li><span style={{ color: '#CBD5E1' }}>Acreditación SECTRA / Carabineros</span></li>
              <li><span style={{ color: '#CBD5E1' }}>Resolución Ministerio de Transportes</span></li>
              <li><span style={{ color: '#CBD5E1' }}>Normativa Oficial CONASET</span></li>
              <li><span style={{ color: '#CBD5E1' }}>Escuela de Manejo Puerto Montt</span></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.05rem', marginBottom: '1.2rem' }}>Sede Puerto Montt</h4>
            <p style={{ fontSize: '0.88rem', color: '#CBD5E1', marginBottom: '0.8rem' }}>
              📍 Av. Los Notros #1227, Puerto Montt.
            </p>
            <p style={{ fontSize: '0.88rem', color: '#CBD5E1', marginBottom: '1rem' }}>
              📞 Central & WhatsApp: +56 9 5888 7141
            </p>
            <span style={{ fontSize: '0.82rem', color: '#38BDF8', fontWeight: '600' }}>
              ✔ 3 Cuotas Sin Interés Disponibles
            </span>
          </div>

        </div>

        {/* Bottom Bar with Syrtix.com Developer Credit */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: '1.8rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.2rem',
          fontSize: '0.85rem',
          color: '#64748B'
        }}>
          <div>
            © {new Date().getFullYear()} Escuela de Conductores Urika Puerto Montt (urika.cl). Todos los derechos reservados.
          </div>

          {/* Syrtix.com Developer Branding Badge */}
          <a
            href="https://syrtix.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              color: '#94A3B8',
              transition: 'all 0.2s ease',
              textDecoration: 'none'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
          >
            <span>Desarrollado por</span>
            <div style={{
              backgroundColor: '#FFFFFF',
              padding: '4px 10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
            }}>
              <img
                src="/images/syrtix-logo.png"
                alt="Logo Syrtix.com"
                style={{ height: '22px', width: 'auto', objectFit: 'contain' }}
              />
            </div>
          </a>
        </div>

      </div>
    </footer>
  );
}
