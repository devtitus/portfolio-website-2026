import React from "react";
import styles from "@/styles/features/about/about.module.css";
import { ProjectsHero } from "@/components/features/projects/projectsHero";
import { ProjectsGrid } from "@/components/features/projects/projectsGrid";
import ContactSection from "@/components/features/home/contactSection";
import { getProjects } from "@/lib/services/sanity/getProjects";

export const metadata = {
  title: "Selected Works | Melwyn Titus",
  description: "A showcase of my recent development and design projects.",
};

const ProjectsPage = async () => {
  const projects = await getProjects();

  return (
    <main className={styles.aboutPage}>
      <ProjectsHero />
      <ProjectsGrid projects={projects} />
      <ContactSection
        ctaText="Get in Touch"
        subHeading="Have a project in mind?"
        paragraph="I'm always open to discussing new opportunities and interesting projects."
      />
    </main>
  );
};

export default ProjectsPage;
