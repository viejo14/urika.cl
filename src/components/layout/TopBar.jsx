import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';
import { Badge } from '../common/Badge';

export function TopBar() {
  return (
    <div style={{ backgroundColor: 'var(--primary-dark)', color: '#94A3B8', fontSize: '0.88rem', padding: '0.55rem 0' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.4rem' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#E2E8F0', fontWeight: '500' }}>
            <MapPin size={14} color="var(--accent-corporate)" /> Av. Los Notros #1227, Puerto Montt
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Clock size={14} color="var(--accent-corporate)" /> Horario: Lun - Sáb: 08:30 a 20:00 hrs
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
          <a href="tel:+56958887141" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#FFFFFF', fontWeight: '600' }}>
            <Phone size={14} color="var(--accent-corporate)" /> +56 9 5888 7141
          </a>
          <a href="https://maps.google.com/?q=Escuela+de+Conductores+Urika+Puerto+Montt+Av+Los+Notros+1227" target="_blank" rel="noopener noreferrer">
            <Badge variant="corporate" style={{ fontSize: '0.75rem', cursor: 'pointer' }}>
              ⭐ 4.9/5 en Google Maps (Puerto Montt)
            </Badge>
          </a>
        </div>
      </div>
    </div>
  );
}
