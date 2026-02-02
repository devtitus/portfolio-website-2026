import React from "react";
import { ProjectsHero } from "@/components/features/projects/projectsHero";
import { ProjectsGrid } from "@/components/features/projects/projectsGrid";
import ContactSection from "@/components/features/home/contactSection";
import { getProjects } from "@/lib/services/sanity/getProjects";
import { getSiteSettings } from "@/lib/services/sanity/getSiteSettings";

export const metadata = {
  title: "Projects & Case Studies | Melwyn Titus",
  description: "Exploring the intersection of design, engineering, and user experience.",
};

const ProjectsPage = async () => {
  const projects = await getProjects();
  const siteSettings = await getSiteSettings();

  return (
    <div className="min-h-dvh text-[var(--default-text-color)]">
      <ProjectsHero />
      <ProjectsGrid projects={projects} />
      <ContactSection
        siteSettings={siteSettings}
        ctaText="Get in Touch"
        subHeading="Ready to Collaborate?"
        paragraph="I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision."
      />
    </div>
  );
};

export default ProjectsPage;
