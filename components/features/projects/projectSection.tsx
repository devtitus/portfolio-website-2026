import React from "react";
import styles from "@/app/styles/home/components/project.module.css";
import ProjectCards from "@/components/features/hero/projectCard";

const ProjectSection = () => {
  return (
    <section
      className={`${styles.projectSection} ${styles.commonStyleSection}`}
    >
      <div className={styles.projectSectionWrapper}>
        <h2 className={styles.projectSectionTitle}>Projects</h2>
        <div className={styles.projectGridContainer}>
          <ProjectCards />
          <ProjectCards />
          <ProjectCards />
          <ProjectCards />
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
