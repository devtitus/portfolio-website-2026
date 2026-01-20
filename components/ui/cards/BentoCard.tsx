import React from 'react';

interface BentoCardProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  image?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  imagePosition?: 'top' | 'bottom' | 'background';
}

const BentoCard: React.FC<BentoCardProps> = ({
  title,
  description,
  icon,
  image,
  children,
  className = '',
  imagePosition = 'top',
}) => {
  return (
    <div
      className={`
        group relative rounded-2xl overflow-hidden
        bg-[rgba(255,255,255,0.04)]
        backdrop-blur-md
        border border-[rgba(255,255,255,0.08)]
        shadow-[0_4px_24px_rgba(0,0,0,0.2)]
        transition-all duration-300
        hover:transform hover:-translate-y-1
        hover:shadow-[0_8px_32px_rgba(0,87,224,0.15)]
        hover:border-[rgba(0,87,224,0.2)]
        ${className}
      `}
    >
      {/* Background image if specified */}
      {imagePosition === 'background' && image && (
        <div className="absolute inset-0 z-0">
          {image}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0.7)]"></div>
        </div>
      )}

      {/* Top image if specified */}
      {imagePosition === 'top' && image && (
        <div className="relative w-full aspect-video overflow-hidden">
          {image}
        </div>
      )}

      {/* Content */}
      <div className={`relative z-10 p-6 ${imagePosition === 'background' ? 'min-h-[300px] flex flex-col justify-end' : ''}`}>
        {/* Icon + Title */}
        <div className="flex items-center gap-3 mb-3">
          {icon && (
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[rgba(0,87,224,0.1)] border border-[rgba(0,87,224,0.3)] text-[#0057E0] transition-all duration-300 group-hover:bg-[rgba(0,87,224,0.2)] group-hover:shadow-[0_0_20px_rgba(0,87,224,0.3)]">
              {icon}
            </div>
          )}
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>

        {/* Description */}
        {description && (
          <p className="text-white/70 text-sm leading-relaxed mb-4">
            {description}
          </p>
        )}

        {/* Custom children content */}
        {children}
      </div>

      {/* Bottom image if specified */}
      {imagePosition === 'bottom' && image && (
        <div className="relative w-full aspect-video overflow-hidden">
          {image}
        </div>
      )}

      {/* Subtle top highlight */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.15)] to-transparent"></div>
    </div>
  );
};

export default BentoCard;
