import React, { memo } from "react";
import { GlassCard } from "@/components/ui";

interface SkillCardProps {
  skillName: string;
  skillIcon: string;
}

/**
 * SkillCard - Memoized to prevent re-renders when parent updates
 * Only re-renders when skillName or skillIcon changes
 */
const SkillCard = memo(function SkillCard({ skillName, skillIcon }: SkillCardProps) {
  return (
    <GlassCard
      hover
      glow
      padding="sm"
      className="group flex flex-col items-center justify-center gap-3 min-w-[140px] transition-all duration-300"
    >
      <div className="flex flex-col items-center justify-center gap-[clamp(4px,1vw,12px)]">
        <div className="relative w-[clamp(34px,1vw,44px)] h-[clamp(34px,1vw,44px)] transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(0,87,224,0.5)]">
          <img
            src={skillIcon}
            alt={`${skillName} icon`}
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
        <span className="text-white/80 text-[clamp(14px,1vw,16px)] font-medium text-center group-hover:text-white transition-colors duration-300">
          {skillName}
        </span>
      </div>
    </GlassCard>
  );
});

export default SkillCard;
