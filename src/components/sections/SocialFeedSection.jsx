import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { OFFICIAL_SOCIAL_LINKS } from '../../data/socialData';
import { Badge } from '../common/Badge';
import { CleanCard } from '../common/CleanCard';

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

export function SocialFeedSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'rgba(248, 250, 252, 0.85)' }}>
      <div className="container">
        
        {/* Header without redundant top buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 3.5rem auto' }}
        >
          <div style={{ marginBottom: '0.8rem' }}>
            <Badge variant="corporate">
              Redes Sociales Oficiales
            </Badge>
          </div>
          <h2 style={{ fontSize: '2.4rem', color: 'var(--primary-dark)', marginBottom: '0.6rem' }}>
            Publicaciones en Vivo en Facebook e Instagram
          </h2>
          <p style={{ color: 'var(--text-muted)' }}>
            Contenido oficial, convocatorias a cursos y experiencias de nuestros alumnos licenciados en Puerto Montt.
          </p>
        </motion.div>

        {/* Live Embedded Widgets Grid */}
        <div className="grid-2" style={{ gap: '2.5rem', alignItems: 'stretch' }}>
          
          {/* Official Facebook Page Embed */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <CleanCard style={{ padding: '2.2rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <FacebookIcon />
                  <span style={{ fontWeight: '700', fontSize: '1.1rem', color: 'var(--primary-dark)' }}>Facebook Oficial</span>
                </div>
                <Badge variant="corporate">@urika.ec</Badge>
              </div>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                Publicaciones diarias, fechas de inicio y eventos oficiales publicados en nuestra fan page de Facebook:
              </p>

              {/* Embedded Facebook Plugin Frame */}
              <div style={{ flex: 1, width: '100%', minHeight: '480px', backgroundColor: '#FFFFFF', overflow: 'hidden' }}>
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Furika.ec%2F&tabs=timeline&width=500&height=480&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
                  width="100%"
                  height="480"
                  style={{ border: 'none', overflow: 'hidden' }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="Página Oficial de Facebook Escuela Urika"
                ></iframe>
              </div>

              <div style={{ marginTop: '1.2rem', textAlign: 'center' }}>
                <a
                  href={OFFICIAL_SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--primary-dark)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                >
                  Ir a Facebook /urika.ec <ArrowUpRight size={14} />
                </a>
              </div>
            </CleanCard>
          </motion.div>

          {/* Official Instagram Profile Showcase Embed */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <CleanCard style={{ padding: '2.2rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <InstagramIcon />
                  <span style={{ fontWeight: '700', fontSize: '1.1rem', color: 'var(--primary-dark)' }}>Comunidad Instagram</span>
                </div>
                <Badge variant="corporate">@urikaec</Badge>
              </div>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                Revisa fotos de nuestros egresados con su licencia y Reels con tips para el examen municipal:
              </p>

              {/* Instagram Card Showcase */}
              <div style={{ flex: 1, backgroundColor: 'var(--bg-subtle)', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ width: '80px', height: '80px', backgroundColor: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem', boxShadow: 'var(--shadow-sm)' }}>
                  <img
                    src="/urika-logo.png"
                    alt="Logo Urika Instagram"
                    style={{ height: '50px', objectFit: 'contain' }}
                  />
                </div>

                <h3 style={{ fontSize: '1.4rem', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                  Escuela de Conductores Urika
                </h3>
                <span style={{ fontSize: '0.95rem', color: 'var(--accent-corporate)', fontWeight: '600', marginBottom: '1rem' }}>
                  @urikaec
                </span>

                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', maxWidth: '380px', marginBottom: '1.8rem', lineHeight: 1.6 }}>
                  📍 Puerto Montt (Av. Los Notros #1227)<br />
                  🚗 Cursos Licencia Clase B en Chile<br />
                  🎓 Formando conductores seguros a la primera
                </p>

                <a
                  href={OFFICIAL_SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ width: '100%', maxWidth: '300px' }}
                >
                  <InstagramIcon /> Ver Instagram @urikaec <ArrowUpRight size={16} />
                </a>
              </div>

              <div style={{ marginTop: '1.2rem', textAlign: 'center' }}>
                <a
                  href={OFFICIAL_SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--primary-dark)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                >
                  Ver Reels y Fotos en Instagram <ArrowUpRight size={14} />
                </a>
              </div>
            </CleanCard>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
