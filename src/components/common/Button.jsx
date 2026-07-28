import React from 'react';

export function Button({ 
  children, 
  variant = 'primary', 
  onClick, 
  type = 'button', 
  className = '', 
  style = {},
  disabled = false
}) {
  const getVariantClass = () => {
    switch (variant) {
      case 'secondary':
        return 'btn-secondary';
      case 'ghost':
        return 'btn-ghost';
      case 'primary':
      default:
        return 'btn-primary';
    }
  };

  return (
    <button
      type={type}
      className={`${getVariantClass()} ${className}`}
      onClick={onClick}
      style={style}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
