import React from 'react';
import { STATS_DATA } from '../../data/statsData';

export function StatsSection() {
  return (
    <section style={{ backgroundColor: 'var(--primary-dark)', padding: '3.5rem 0', color: '#FFFFFF' }}>
      <div className="container">
        <div className="grid-4">
          {STATS_DATA.map((stat, idx) => (
            <div key={idx} style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '3rem', fontWeight: '800', fontFamily: 'var(--font-heading)', color: 'var(--accent-gold)', display: 'block' }}>
                {stat.value}
              </span>
              <span style={{ fontSize: '0.95rem', color: '#94A3B8', fontWeight: '500' }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
