"use client";
import React from "react";
import { cn } from "@/lib/utils";
import ProjectCard from "@/components/features/home/projectCard";
import { SectionHeader, PrimaryButton } from "@/components/ui";

import { ProjectItem } from "@/lib/types/sanity";

interface ProjectSectionProps {
  projects?: ProjectItem[];
}

const ProjectSection = ({ projects = [] }: ProjectSectionProps) => {
  return (
    <section className={cn(
      "min-h-dvh px-[clamp(24px,4vw,60px)] py-[clamp(60px,10vh,100px)]",
      "flex flex-col justify-center items-center overflow-hidden",
      "scroll-mt-20", // Navbar clearance
      "max-sm:min-h-auto max-sm:py-[60px]",
      "max-lg:min-h-auto max-lg:py-[80px]"
    )}>
      <div className={cn(
        "w-full max-w-[1400px] flex flex-col justify-center items-center",
        "gap-fluid-lg animate-fade-in-up motion-reduce:animate-none"
      )}>
        <SectionHeader
          title="Featured Projects"
          subtitle="A showcase of my recent work"
          align="center"
        />

        {/* Project Grid */}
        <div className={cn(
          "w-full grid gap-fluid-md",
          "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2"
        )}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <PrimaryButton variant="outline" size="md" className="mt-6">
          View All Projects
        </PrimaryButton>
      </div>
    </section>
  );
};

export default ProjectSection;

