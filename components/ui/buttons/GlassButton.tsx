import React from 'react';

interface GlassButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const GlassButton: React.FC<GlassButtonProps> = ({
  children,
  onClick,
  icon,
  iconPosition = 'left',
  className = '',
  type = 'button',
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        group relative inline-flex items-center justify-center gap-2
        px-6 py-3 rounded-lg
        bg-[rgba(255,255,255,0.05)] backdrop-blur-sm
        border border-[rgba(255,255,255,0.1)]
        text-white font-medium text-sm
        transition-all duration-300
        hover:bg-[rgba(255,255,255,0.1)]
        hover:border-[rgba(0,87,224,0.4)]
        hover:shadow-[0_4px_16px_rgba(0,87,224,0.15)]
        hover:scale-[1.02]
        active:scale-[0.98]
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {/* Blue gradient overlay on hover */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[rgba(0,87,224,0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Content */}
      {icon && iconPosition === 'left' && (
        <span className="relative z-10 transition-transform group-hover:scale-110">
          {icon}
        </span>
      )}
      <span className="relative z-10 tracking-wide">{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="relative z-10 transition-transform group-hover:scale-110">
          {icon}
        </span>
      )}
    </button>
  );
};

export default GlassButton;
