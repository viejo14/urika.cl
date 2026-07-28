import React from 'react';

export function CleanCard({ children, subtle = false, style = {}, className = '' }) {
  const cardClass = subtle ? 'clean-card-subtle' : 'clean-card';

  return (
    <div className={`${cardClass} ${className}`} style={style}>
      {children}
    </div>
  );
}
