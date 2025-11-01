"use client";
import React, { useState, useEffect } from "react";
import styles from "@/styles/features/home/skill.module.css";
import { SkillSpinningImage } from "@/lib/utils/icons";
import SkillCard from "@/components/features/hero/skillCard";
import { getSkills, SkillItem } from "@/lib/services/sanity/getSkills";

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
          <h2 className={styles.skillSectionTitle}>My Skills</h2>
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
          <button
            className={styles.skillsToggleButton}
            onClick={() => setShowAllSkills(!showAllSkills)}
            aria-label={showAllSkills ? "Show less skills" : `Show ${remainingSkillsCount} more skills`}
          >
            {showAllSkills ? "Show Less" : `Show More (${remainingSkillsCount})`}
          </button>
        )}
      </div>
    </section>
  );
};

export default SkillsSection;
