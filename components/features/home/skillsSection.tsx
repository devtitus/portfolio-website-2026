"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { SkillSpinningImage } from "@/lib/utils/icons";
import SkillCard from "@/components/features/home/skillCard";
import { getSkills, SkillItem } from "@/lib/services/sanity/getSkills";
import { SectionHeader, GlassButton } from "@/components/ui";

const SkillsSection = () => {
  const [skills, setSkills] = useState<SkillItem[]>([]);
  const [showAllSkills, setShowAllSkills] = useState(false);

  useEffect(() => {
    const fetchSkills = async () => {
      const skillsData = await getSkills();
      setSkills(skillsData);
    };
    fetchSkills();
  }, []);

  // Check if we have more than 10 skills
  const shouldShowToggle = skills.length > 10;
  const visibleSkills = shouldShowToggle && !showAllSkills ? skills.slice(0, 10) : skills;
  const remainingSkillsCount = skills.length - 10;

  return (
    <section className={cn(
      "min-h-dvh px-[clamp(16px,4vw,60px)] py-[clamp(60px,10vh,100px)]",
      "flex flex-col justify-center items-center overflow-hidden relative",
      "scroll-mt-20", // Navbar clearance
      "max-sm:min-h-auto max-sm:py-[60px]",
      "max-lg:min-h-auto max-lg:py-[80px]"
    )}>
      <div className={cn(
        "w-full flex flex-col items-center justify-center",
        "gap-fluid-lg animate-fade-in-up",
        "motion-reduce:animate-none"
      )}>
        {/* Top Section with spinning image and header */}
        <div className="flex flex-col items-center gap-fluid-md">
          <div className={cn(
            "animate-spin-slow motion-reduce:animate-none",
            "w-[clamp(180px,25vw,340px)] h-[clamp(180px,25vw,340px)]",
            "max-sm:w-[clamp(180px,50vw,250px)] max-sm:h-[clamp(180px,50vw,250px)]",
            "sm:max-lg:w-[clamp(220px,30vw,280px)] sm:max-lg:h-[clamp(220px,30vw,280px)]",
            "lg:w-[clamp(280px,25vw,340px)] lg:h-[clamp(280px,25vw,340px)]"
          )}>
            <SkillSpinningImage className={cn(
              "aspect-square w-full h-full",
            )} />
          </div>
          <SectionHeader
            title="My Skills"
            subtitle="Technologies and tools I work with"
            align="center"
          />
        </div>

        {/* Skills Grid */}
        <div className={cn(
          "w-full max-w-[1200px] grid gap-fluid-md",
          "grid-cols-2 xs:grid-cols-2 sm:grid-cols-4 lg:grid-cols-[repeat(auto-fit,minmax(140px,1fr))]",
          "max-sm:gap-fluid-sm"
        )}>
          {visibleSkills.map((skill) => (
            <SkillCard
              key={skill.id}
              skillName={skill.label}
              skillIcon={skill.iconUrl}
            />
          ))}
        </div>

        {/* Toggle Button */}
        {shouldShowToggle && (
          <GlassButton
            onClick={() => setShowAllSkills(!showAllSkills)}
            className="mt-fluid-sm"
          >
            {showAllSkills ? "Show Less" : `Show More (${remainingSkillsCount})`}
          </GlassButton>
        )}
      </div>
    </section>
  );
};

export default SkillsSection;

