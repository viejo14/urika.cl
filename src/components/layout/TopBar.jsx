import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';
import { Badge } from '../common/Badge';

export function TopBar() {
  return (
    <div style={{ backgroundColor: 'var(--primary-dark)', color: '#94A3B8', fontSize: '0.82rem', padding: '0.45rem 0' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.4rem' }}>
        
        {/* Left Info: Location & Hours */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', flexWrap: 'wrap' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#E2E8F0', fontWeight: '500' }}>
            <MapPin size={13} color="var(--accent-corporate)" /> Av. Los Notros #1227, Puerto Montt
          </span>
          <span className="hide-on-mobile" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <Clock size={13} color="var(--accent-corporate)" /> Lun - Sáb: 08:30 a 20:00 hrs
          </span>
        </div>

        {/* Right Info: Phone & Google Rating */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a href="tel:+56958887141" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#FFFFFF', fontWeight: '600' }}>
            <Phone size={13} color="var(--accent-corporate)" /> +56 9 5888 7141
          </a>
          <a href="https://maps.google.com/?q=Escuela+de+Conductores+Urika+Puerto+Montt+Av+Los+Notros+1227" target="_blank" rel="noopener noreferrer" className="hide-on-mobile">
            <Badge variant="corporate" style={{ fontSize: '0.72rem', cursor: 'pointer', padding: '0.2rem 0.6rem' }}>
              ⭐ 4.9/5 en Google Maps
            </Badge>
          </a>
        </div>

      </div>
    </div>
  );
}
