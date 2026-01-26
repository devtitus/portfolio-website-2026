import React from "react";
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
    <div className="min-h-dvh text-[var(--default-text-color)]">
      <ProjectsHero />
      <ProjectsGrid projects={projects} />
      <ContactSection
        ctaText="Get in Touch"
        subHeading="Have a project in mind?"
        paragraph="I'm always open to discussing new opportunities and interesting projects."
      />
    </div>
  );
};

export default ProjectsPage;
