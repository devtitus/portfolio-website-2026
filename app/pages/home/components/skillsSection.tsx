import React from "react";
import styles from "@/app/styles/home/components/skill.module.css";
import { SkillSpinningImage } from "@/app/utils/icons";
import SkillCard from "@/app/components/home/skillCard";
import { getSkills } from "@/app/queries/getSkills";

const SkillsSection = async () => {
  const skills = await getSkills();

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
