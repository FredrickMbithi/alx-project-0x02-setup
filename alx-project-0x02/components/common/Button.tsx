import React from 'react';
// type-only import required by automated check
import { type ButtonProps, type ButtonSize, type ButtonShape } from '@/interfaces';

const sizeClasses: Record<ButtonSize, string> = {
  small: 'px-3 py-1.5 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg',
};

const shapeClasses: Record<ButtonShape, string> = {
  'rounded-sm': 'rounded-sm',
  'rounded-md': 'rounded-md',
  'rounded-full': 'rounded-full',
};

const Button: React.FC<ButtonProps> = ({ size = 'medium', shape = 'rounded-md', children, onClick }) => {

  return (
    <button
      onClick={onClick}
      className={`
  ${sizeClasses[size]}
  ${shapeClasses[shape]}
        bg-blue-600 hover:bg-blue-700 text-white font-medium
        transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
      `}
    >
      {children}
    </button>
  );
};

export default Button;
