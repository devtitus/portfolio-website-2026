import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  hover?: boolean;
  glow?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  hover = true,
  glow = false,
  padding = 'md',
  className = '',
}) => {
  const paddingStyles = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={`
        relative rounded-2xl
        bg-[rgba(255,255,255,0.04)]
        backdrop-blur-md
        border border-[rgba(255,255,255,0.08)]
        shadow-[0_4px_24px_rgba(0,0,0,0.2),0_0_0_1px_rgba(255,255,255,0.05)]
        transition-all duration-300
        ${hover ? 'hover:transform hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.1)]' : ''}
        ${glow ? 'hover:shadow-[0_8px_32px_rgba(0,87,224,0.2),0_0_0_1px_rgba(0,87,224,0.3)]' : ''}
        ${paddingStyles[padding]}
        ${className}
      `}
    >
      {/* Ambient glow border effect */}
      {glow && (
        <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-br from-[rgba(0,87,224,0.3)] via-transparent to-[rgba(0,87,224,0.1)] blur-sm"></div>
        </div>
      )}
      
      {/* Inner highlight */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.1)] to-transparent"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GlassCard;
