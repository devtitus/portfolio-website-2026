import React from "react";
import { GlassCard } from "@/components/ui";

interface SkillCardProps {
  skillName: string;
  skillIcon: string;
}

const SkillCard = ({ skillName, skillIcon }: SkillCardProps) => {
  return (
    <GlassCard 
      hover 
      glow 
      padding="md"
      className="group flex flex-col items-center justify-center gap-3 min-w-[140px] transition-all duration-300"
    >
      <div className="relative w-12 h-12 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(0,87,224,0.5)]">
        <img 
          src={skillIcon} 
          alt={`${skillName} icon`}
          className="w-full h-full object-contain"
        />
      </div>
      <span className="text-white/80 text-sm font-medium text-center group-hover:text-white transition-colors duration-300">
        {skillName}
      </span>
    </GlassCard>
  );
};

export default SkillCard;
