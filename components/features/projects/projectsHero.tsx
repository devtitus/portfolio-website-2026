import React from "react";
import styles from "@/styles/features/projects/projectsHero.module.css";

const ProjectsHero: React.FC = () => {
  return (
    <section className={styles.projectsHero}>
      <h1 className={styles.heroTitle}>
        Selected <br />
        <span className={styles.highlight}>Works</span>
      </h1>
      <p className={styles.heroSubtitle}>
        A collection of projects where design meets code. From interactive web
        apps to robust backend systems, each piece represents a unique problem
        solved.
      </p>
    </section>
  );
};

export { ProjectsHero };
