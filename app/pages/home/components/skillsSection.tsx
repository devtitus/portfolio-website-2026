"use client";

import React, { useState, useEffect } from "react";
import styles from "@/app/styles/home/components/skill.module.css";
import { SkillSpinningImage } from "@/app/utils/icons";
import SkillCard from "@/app/components/home/skillCard";
import { getSkills, SkillItem } from "@/app/queries/getSkills";

const SkillsSection = () => {
  const [skills, setSkills] = useState<SkillItem[]>([]);

  useEffect(() => {
    const fetchSkills = async () => {
      const skillsData = await getSkills();
      setSkills(skillsData);
    };
    fetchSkills();
  }, []);

  return (
    <section className={`${styles.skillSection} ${styles.commonStyleSection}`}>
      <div className={styles.skillSectionWrapper}>
        <div className={styles.skillTopWrapper}>
          <SkillSpinningImage className={styles.skillSpinningImage} />
          <h2 className={styles.skillSectionTitle}>My Skills</h2>
        </div>
        <div className={styles.skillBottomWrapper}>
          {skills.map((skill) => (
            <SkillCard
              key={skill.id}
              skillName={skill.label}
              skillIcon={skill.iconUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
