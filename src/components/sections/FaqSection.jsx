import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS_DATA } from '../../data/faqsData';
import { Badge } from '../common/Badge';

export function FaqSection() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="preguntas" className="section-padding">
      <div className="container">
        
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 3.5rem auto' }}>
          <Badge variant="slate" style={{ marginBottom: '1rem' }}>
            Resuelve tus Dudas
          </Badge>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            Preguntas Frecuentes sobre el Curso de Conducción
          </h2>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {FAQS_DATA.map((faq, idx) => (
            <div key={faq.id} className="faq-item">
              <button className="faq-trigger" onClick={() => toggleFaq(idx)} aria-expanded={openFaq === idx}>
                <span>{faq.question}</span>
                <ChevronDown
                  size={20}
                  color="var(--accent-gold)"
                  style={{
                    transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'var(--transition-fast)'
                  }}
                />
              </button>
              {openFaq === idx && (
                <div className="faq-content">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
