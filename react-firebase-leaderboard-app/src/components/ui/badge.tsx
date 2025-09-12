import React from 'react';

interface BadgeProps {
  variant?: 'default' | 'outline';
  className?: string;
  children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ variant = 'default', className, children }) => {
  const baseStyles = "inline-flex items-center px-2 py-1 rounded text-sm font-medium";
  const variantStyles = variant === 'outline' ? "border border-gray-300 text-gray-700" : "bg-blue-500 text-white";

  return (
    <span className={`${baseStyles} ${variantStyles} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;