import React from "react";
import styles from "@/app/styles/home/components/skill.module.css";
import { SkillSpinningImage } from "@/app/utils/icons";
import SkillCard from "@/app/components/home/skillCard";

const SkillsSection = () => {
  return (
    <section className={`${styles.skillSection} ${styles.commonStyleSection}`}>
      <div className={styles.skillSectionWrapper}>
        <div className={styles.skillTopWrapper}>
          <SkillSpinningImage className={styles.skillSpinningImage} />
          <h2 className={styles.skillSectionTitle}>My Skills</h2>
        </div>
        <div className={styles.skillBottomWrapper}>
          <SkillCard
            skillName="Skill 1"
            skillIcon="https://picsum.photos/seed/picsum/200/300"
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
