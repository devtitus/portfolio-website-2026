"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProjectItem } from "@/lib/types/sanity";
import { ExternalLink, Github } from "lucide-react";
import { ProjectDetailsModal } from "./project-details-modal";
import { cn } from "@/lib/utils";

interface ProjectsGridProps {
  projects: ProjectItem[];
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: ProjectItem) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <>
      <section
        className={cn(
          "max-w-[1440px] mx-auto",
          "px-[clamp(16px,4vw,60px)] 2xl:px-0",
          "py-[clamp(60px,10vh,100px)]",
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
          "gap-[clamp(24px,4vw,40px)]"
        )}
      >
        {projects.map((project) => (
          <article
            key={project.id}
            className={cn(
              "bg-white/[0.03] backdrop-blur-[10px] border border-white/5",
              "rounded-[20px] overflow-hidden",
              "transition-all duration-300 ease-in-out",
              "hover:-translate-y-1.5 hover:border-white/10",
              "motion-reduce:hover:translate-y-0",
              "flex flex-col h-full cursor-pointer group"
            )}
            onClick={() => handleProjectClick(project)}
          >
            <div className="w-full aspect-[16/10] relative overflow-hidden bg-black">
              {project.mainImage ? (
                <Image
                  src={project.mainImage}
                  alt={project.title}
                  fill
                  className={cn(
                    "object-cover w-full h-full",
                    "transition-transform duration-500 ease-in-out",
                    "group-hover:scale-105",
                    "motion-reduce:group-hover:scale-100"
                  )}
                />
              ) : (
                <div className="w-full h-full bg-gray-900 flex items-center justify-center text-gray-700">
                  No Image
                </div>
              )}
            </div>

            <div className="p-[clamp(16px,3vw,24px)] flex-1 flex flex-col">
              <div className="flex justify-between items-center mb-[clamp(8px,1.5vw,12px)]">
                <h3 className="text-[clamp(1.25rem,2vw,1.5rem)] font-medium font-secondary text-foreground m-0">
                  {project.title}
                </h3>
                <div className="flex gap-3">
                  {project.codeLink && (
                    <Link
                      href={project.codeLink}
                      target="_blank"
                      className="w-5 h-5 text-muted-foreground transition-colors duration-200 hover:text-foreground"
                      title="View Code"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={20} />
                    </Link>
                  )}
                  {project.projectLink && (
                    <Link
                      href={project.projectLink}
                      target="_blank"
                      className="w-5 h-5 text-muted-foreground transition-colors duration-200 hover:text-foreground"
                      title="Live Project"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={20} />
                    </Link>
                  )}
                </div>
              </div>

              <p className="text-[clamp(0.875rem,1vw,0.95rem)] text-muted-foreground leading-relaxed mb-[clamp(16px,2vw,20px)] flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies && project.technologies.length > 0
                  ? project.technologies.map((tech) => (
                    <span
                      key={tech.id}
                      className="text-xs px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-muted-foreground"
                    >
                      {tech.label}
                    </span>
                  ))
                  : project.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      <ProjectDetailsModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={setIsModalOpen}
      />
    </>
  );
};

export default ProjectsGrid;

export { ProjectsGrid };
