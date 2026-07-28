import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Heart, MessageCircle } from 'lucide-react';
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

const INSTAGRAM_POST_PREVIEWS = [
  {
    id: 1,
    image: '/images/flota_urika.webp',
    caption: '¡Nuestra flota doble comando lista en Puerto Montt!',
    likes: 142,
    comments: 18
  },
  {
    id: 2,
    image: '/images/Img_urika_psicotecnico.webp',
    caption: 'Ensayos con gabinete sensométrico para tu examen médico.',
    likes: 98,
    comments: 12
  },
  {
    id: 3,
    image: '/images/urika_tienda.webp',
    caption: 'Visítanos en Av. Los Notros #1227, Puerto Montt.',
    likes: 215,
    comments: 24
  },
  {
    id: 4,
    image: '/images/img_urika_presentacion.webp',
    caption: 'Clases teóricas y preparación oficial Conaset.',
    likes: 186,
    comments: 15
  }
];

export function SocialFeedSection() {
  return (
    <section className="section-padding">
      <div className="container">
        
        {/* Header */}
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
            Contenido oficial, convocatorias a cursos y publicaciones de nuestros alumnos en Puerto Montt.
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
                Publicaciones diarias, fechas de inicio y afiches promocionales en Facebook:
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

          {/* Official Instagram Profile Visual Grid Showcase */}
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
                Últimas publicaciones y fotos de alumnos licenciados en Instagram:
              </p>

              {/* Instagram Visual Post Grid */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.8rem' }}>
                  {INSTAGRAM_POST_PREVIEWS.map((post) => (
                    <a
                      key={post.id}
                      href={OFFICIAL_SOCIAL_LINKS.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        position: 'relative',
                        height: '190px',
                        overflow: 'hidden',
                        backgroundColor: 'var(--primary-dark)',
                        display: 'block'
                      }}
                    >
                      <img
                        src={post.image}
                        alt={post.caption}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.4s ease'
                        }}
                      />
                      {/* Hover Overlay with Likes & Comments */}
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(15, 23, 42, 0.75)',
                        color: '#FFFFFF',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                        padding: '1rem',
                        textAlign: 'center'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                      onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
                      >
                        <p style={{ fontSize: '0.78rem', color: '#FFFFFF', marginBottom: '0.6rem', fontWeight: '500' }}>
                          {post.caption}
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', fontSize: '0.82rem', fontWeight: '700' }}>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                            <Heart size={14} fill="#FF4B4B" color="#FF4B4B" /> {post.likes}
                          </span>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                            <MessageCircle size={14} color="#FFFFFF" /> {post.comments}
                          </span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                <div style={{
                  backgroundColor: 'rgba(248, 250, 252, 0.9)',
                  padding: '1rem 1.2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: '0.4rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <img src="/urika-logo.png" alt="Logo Urika" style={{ height: '28px' }} />
                    <span style={{ fontSize: '0.88rem', fontWeight: '700', color: 'var(--primary-dark)' }}>@urikaec en Instagram</span>
                  </div>
                  <a
                    href={OFFICIAL_SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ padding: '0.55rem 1.1rem', fontSize: '0.82rem' }}
                  >
                    Seguir <ArrowUpRight size={14} />
                  </a>
                </div>
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
