"use client";
import React, { useState, useEffect } from "react";
import styles from "@/styles/features/home/skill.module.css";
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
    <section className={`${styles.skillSection} ${styles.commonStyleSection}`}>
      <div className={styles.skillSectionWrapper}>
        <div className={styles.skillTopWrapper}>
          <SkillSpinningImage className={styles.skillSpinningImage} />
          <SectionHeader 
            title="My Skills" 
            subtitle="Technologies and tools I work with"
            align="center"
          />
        </div>
        <div className={styles.skillBottomWrapper}>
          {visibleSkills.map((skill) => (
            <SkillCard
              key={skill.id}
              skillName={skill.label}
              skillIcon={skill.iconUrl}
            />
          ))}
        </div>
        {shouldShowToggle && (
          <GlassButton
            onClick={() => setShowAllSkills(!showAllSkills)}
            className={styles.skillsToggleButton}
          >
            {showAllSkills ? "Show Less" : `Show More (${remainingSkillsCount})`}
          </GlassButton>
        )}
      </div>
    </section>
  );
};

export default SkillsSection;
