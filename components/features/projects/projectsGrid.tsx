"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProjectItem } from "@/lib/types/sanity";
import styles from "@/styles/features/projects/projectsGrid.module.css";
import { ExternalLink, Github } from "lucide-react";
import { ProjectDetailsModal } from "./project-details-modal";

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
      <section className={styles.gridWrapper}>
        {projects.map((project) => (
          <article
            key={project.id}
            className={`${styles.projectCard} cursor-pointer group`}
            onClick={() => handleProjectClick(project)}
          >
            <div className={styles.imageWrapper}>
              {project.mainImage ? (
                <Image
                  src={project.mainImage}
                  alt={project.title}
                  fill
                  className={styles.projectImage}
                />
              ) : (
                <div className="w-full h-full bg-gray-900 flex items-center justify-center text-gray-700">
                  No Image
                </div>
              )}
            </div>

            <div className={styles.content}>
              <div className={styles.meta}>
                <h3 className={styles.title}>{project.title}</h3>
                <div className={styles.links}>
                  {project.codeLink && (
                    <Link
                      href={project.codeLink}
                      target="_blank"
                      className={styles.linkIcon}
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
                      className={styles.linkIcon}
                      title="Live Project"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={20} />
                    </Link>
                  )}
                </div>
              </div>

              <p className={styles.description}>{project.description}</p>

              <div className={styles.tags}>
                {project.technologies && project.technologies.length > 0
                  ? project.technologies.map((tech) => (
                      <span key={tech.id} className={styles.tag}>
                        {tech.label}
                      </span>
                    ))
                  : project.tags?.map((tag) => (
                      <span key={tag} className={styles.tag}>
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
