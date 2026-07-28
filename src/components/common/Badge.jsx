import React from 'react';

export function Badge({ children, variant = 'gold', style = {} }) {
  const getBadgeClass = () => {
    switch (variant) {
      case 'green':
        return 'badge-green';
      case 'slate':
        return 'badge-slate';
      case 'gold':
      default:
        return 'badge-gold';
    }
  };

  return (
    <span className={`badge-pill ${getBadgeClass()}`} style={style}>
      {children}
    </span>
  );
}
