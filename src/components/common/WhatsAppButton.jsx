import React from 'react';

const WhatsAppIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

export function WhatsAppButton() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=56958887141&text=Hola%20Escuela%20Urika%20Puerto%20Montt,%20quiero%20informacion%20del%20Curso%20Clase%20B"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      title="Contactar por WhatsApp a Puerto Montt (+56 9 5888 7141)"
      aria-label="Contactar por WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  );
}
