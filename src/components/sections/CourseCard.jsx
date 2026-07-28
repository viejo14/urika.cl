import React from 'react';
import { Check } from 'lucide-react';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { CleanCard } from '../common/CleanCard';

export function CourseCard({ course, onOpenBooking }) {
  return (
    <CleanCard style={{
      padding: '2.5rem',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'stretch'
    }}>
      {/* Top Content Block */}
      <div>
        <div style={{ marginBottom: '1.2rem', height: '28px', display: 'flex', alignItems: 'center' }}>
          <Badge variant={course.popular ? 'corporate' : 'slate'}>
            {course.badge}
          </Badge>
        </div>

        <h3 style={{ fontSize: '1.4rem', marginBottom: '0.8rem', color: 'var(--primary-dark)', minHeight: '56px', display: 'flex', alignItems: 'center' }}>
          {course.title}
        </h3>

        <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.8rem', minHeight: '70px', lineHeight: 1.6 }}>
          {course.shortDesc}
        </p>

        <ul style={{ listStyle: 'none', marginBottom: '2.2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', minHeight: '170px' }}>
          {course.features.map((feat, idx) => (
            <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--primary-dark)', lineHeight: 1.4 }}>
              <Check size={16} color="var(--accent-success)" style={{ marginTop: '2px', flexShrink: 0 }} />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Button Block - Perfectly Aligned Line Across All Cards */}
      <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--bg-elevated)' }}>
        <Button
          variant={course.popular ? 'primary' : 'secondary'}
          style={{ width: '100%', padding: '1rem' }}
          onClick={() => onOpenBooking(course.title)}
        >
          {course.ctaText}
        </Button>
      </div>
    </CleanCard>
  );
}
