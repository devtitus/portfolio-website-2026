import React from 'react';

interface IconButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
  tooltip?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  ariaLabel?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  tooltip,
  size = 'md',
  className = '',
  disabled = false,
  ariaLabel,
}) => {
  const sizeStyles = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel || tooltip}
      title={tooltip}
      className={`
        group relative inline-flex items-center justify-center
        rounded-full
        bg-[rgba(255,255,255,0.05)] backdrop-blur-sm
        border border-[rgba(255,255,255,0.1)]
        text-white/80
        transition-all duration-300
        hover:bg-[rgba(255,255,255,0.1)]
        hover:border-[rgba(0,87,224,0.4)]
        hover:text-white
        hover:shadow-[0_4px_12px_rgba(0,87,224,0.2)]
        hover:scale-110
        active:scale-95
        disabled:opacity-50 disabled:cursor-not-allowed
        ${sizeStyles[size]}
        ${className}
      `}
    >
      {/* Blue gradient overlay on hover */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[rgba(0,87,224,0.2)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Icon */}
      <span className="relative z-10 transition-transform group-hover:rotate-12">
        {icon}
      </span>
    </button>
  );
};

export default IconButton;
