
import React from 'react';
import { cn } from '@/lib/utils';

interface GlassmorphicCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const GlassmorphicCard: React.FC<GlassmorphicCardProps> = ({ 
  children, 
  className,
  hoverEffect = true
}) => {
  return (
    <div 
      className={cn(
        "glass rounded-xl p-6 relative overflow-hidden",
        hoverEffect && "transition-all duration-300 hover:shadow-lg hover:scale-[1.01]",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-30 pointer-events-none" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GlassmorphicCard;
