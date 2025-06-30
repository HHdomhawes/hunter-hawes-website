import React from 'react';
import logoPrimary from '../assets/logo-primary.png';
import logoHorizontal from '../assets/logo-horizontal.png';
import logoMark from '../assets/logo-mark.png';

const Logo = ({ variant = 'primary', className = '', size = 'medium' }) => {
  const sizeClasses = {
    small: 'h-8',
    medium: 'h-12',
    large: 'h-16',
    xlarge: 'h-20'
  };

  const logoSrc = {
    primary: logoPrimary,
    horizontal: logoHorizontal,
    mark: logoMark
  };

  return (
    <img 
      src={logoSrc[variant]} 
      alt="Hunter Coates and Co." 
      className={`${sizeClasses[size]} w-auto object-contain ${className}`}
    />
  );
};

export default Logo;

