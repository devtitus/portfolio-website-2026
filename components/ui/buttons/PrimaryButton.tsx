import React from 'react';

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'solid' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  onClick,
  variant = 'solid',
  size = 'md',
  disabled = false,
  className = '',
  type = 'button',
}) => {
  const baseStyles = `
    group relative inline-flex items-center justify-center
    font-semibold rounded-lg overflow-hidden
    transition-all duration-300
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const sizeStyles = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-10 py-5 text-lg',
  };

  const variantStyles = {
    solid: `
      bg-white text-[#08080a]
      shadow-[0_0_0_1px_rgba(0,87,224,0.3),0_8px_24px_rgba(0,87,224,0.2)]
      hover:shadow-[0_0_0_1px_rgba(0,87,224,0.5),0_12px_32px_rgba(0,87,224,0.3)]
      hover:scale-[1.02] active:scale-[0.98]
    `,
    outline: `
      bg-transparent text-white
      border border-[rgba(0,87,224,0.5)]
      shadow-[0_0_0_1px_rgba(0,87,224,0.2),0_4px_16px_rgba(0,87,224,0.1)]
      hover:bg-[rgba(0,87,224,0.1)]
      hover:shadow-[0_0_0_1px_rgba(0,87,224,0.6),0_8px_24px_rgba(0,87,224,0.2)]
      hover:scale-[1.02] active:scale-[0.98]
    `,
    ghost: `
      bg-transparent text-white
      hover:bg-[rgba(255,255,255,0.05)]
      hover:scale-[1.02] active:scale-[0.98]
    `,
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {/* Gradient shimmer effect for solid variant */}
      {variant === 'solid' && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#0057E0]/10 via-transparent to-[#0057E0]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      )}
      
      {/* Content */}
      <span className="relative z-10 tracking-wide">{children}</span>
      
      {/* Animated underline for solid variant */}
      {variant === 'solid' && (
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#0057E0] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
      )}
    </button>
  );
};

export default PrimaryButton;
