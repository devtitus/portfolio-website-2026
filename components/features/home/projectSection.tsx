import React from "react";
import styles from "@/styles/features/home/project.module.css";
import ProjectCard from "@/components/features/home/projectCard";
import { SectionHeader, PrimaryButton } from "@/components/ui";

const ProjectSection = () => {
  return (
    <section
      className={`${styles.projectSection} ${styles.commonStyleSection}`}
    >
      <div className={styles.projectSectionWrapper}>
        <SectionHeader 
          title="Featured Projects" 
          subtitle="A showcase of my recent work"
          align="center"
        />
        <div className={styles.projectGridContainer}>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
        <PrimaryButton variant="outline" size="md" className="mt-8">
          View All Projects
        </PrimaryButton>
      </div>
    </section>
  );
};

export default ProjectSection;
