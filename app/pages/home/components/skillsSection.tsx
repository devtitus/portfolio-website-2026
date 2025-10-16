"use client";
import React, { useState, useEffect } from "react";
import styles from "@/app/styles/home/components/skill.module.css";
import { SkillSpinningImage } from "@/app/utils/icons";
import SkillCard from "@/app/components/home/skillCard";

// TODO: Replace with Sanity query
export interface SkillItem {
  id: string;
  uid: string | null;
  label: string;
  iconUrl: string;
}

const SkillsSection = () => {
  const [skills, setSkills] = useState<SkillItem[]>([]);

  useEffect(() => {
    // TODO: Implement Sanity query to fetch skills
    // const fetchSkills = async () => {
    //   const skillsData = await getSanitySkills();
    //   setSkills(skillsData);
    // };
    // fetchSkills();
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
