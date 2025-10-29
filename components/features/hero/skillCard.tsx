import React from "react";
import styles from "@/styles/components/skillCard.module.css";

interface SkillCardProps {
  skillName: string;
  skillIcon: string;
}

const SkillCard = ({ skillName, skillIcon }: SkillCardProps) => {
  return (
    <div className={styles.skillCard}>
      <img src={skillIcon} alt="skill-icon" className={styles.skillImage} />
      <span className={styles.skillName}>{skillName}</span>
    </div>
  );
};

export default SkillCard;
